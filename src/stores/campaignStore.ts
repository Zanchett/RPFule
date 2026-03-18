import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import { Campaign, CampaignMember, Character } from '../types'
import * as api from '../lib/api'
import { withRetry } from '../lib/retry'

interface CampaignStore {
  campaigns: Campaign[]
  joinedCampaigns: Campaign[]
  currentCampaign: Campaign | null
  members: CampaignMember[]
  campaignCharacters: Character[]
  inviteCode: string | null
  loading: boolean

  loadCampaigns: () => Promise<void>
  createCampaign: (name: string, description: string, gameSystemId: string) => Promise<string>
  loadCampaignDetail: (id: string) => Promise<void>
  generateInviteCode: (campaignId: string) => Promise<string>
  joinCampaign: (code: string) => Promise<string>
  leaveCampaign: (campaignId: string) => Promise<void>
  removeMember: (campaignId: string, userId: string) => Promise<void>
  updateCampaign: (id: string, name: string, description: string) => Promise<void>
  subscribeToCampaign: (campaignId: string) => () => void
}

export const useCampaignStore = create<CampaignStore>((set, get) => ({
  campaigns: [],
  joinedCampaigns: [],
  currentCampaign: null,
  members: [],
  campaignCharacters: [],
  inviteCode: null,
  loading: false,

  loadCampaigns: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) return

      // Campaigns where user is DM
      const { data: dmCampaigns } = await withRetry(async () => {
        const res = await supabase
          .from('campaigns')
          .select('*')
          .eq('dm_user_id', user.id)
          .order('created_at', { ascending: false })
        if (res.error) throw res.error
        return res
      })

      // Campaigns where user is a member
      const { data: memberRows } = await withRetry(async () => {
        const res = await supabase
          .from('campaign_members')
          .select('campaign_id')
          .eq('user_id', user.id)
        if (res.error) throw res.error
        return res
      })

      let joined: Campaign[] = []
      if (memberRows && memberRows.length > 0) {
        const ids = memberRows.map((m) => m.campaign_id)
        const { data: joinedData } = await withRetry(async () => {
          const res = await supabase
            .from('campaigns')
            .select('*')
            .in('id', ids)
            .order('created_at', { ascending: false })
          if (res.error) throw res.error
          return res
        })
        joined = (joinedData ?? []).map(rowToCampaign)
      }

      set({
        campaigns: (dmCampaigns ?? []).map(rowToCampaign),
        joinedCampaigns: joined
      })
    } catch (err) {
      console.error('Failed to load campaigns:', err)
      // Don't clear existing data on failure — keep stale data rather than showing nothing
    }
  },

  createCampaign: async (name, description, gameSystemId) => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session?.user) throw new Error('Not authenticated')
    const user = session.user

    const { data, error } = await supabase
      .from('campaigns')
      .insert({
        name,
        description,
        game_system_id: gameSystemId,
        dm_user_id: user.id
      })
      .select()
      .single()

    if (error) throw error
    await get().loadCampaigns()
    return data.id
  },

  loadCampaignDetail: async (id) => {
    set({ loading: true })

    try {
      // Load campaign first — if this fails, nothing else can proceed
      const { data: campaign, error: campaignError } = await withRetry(async () => {
        const res = await supabase
          .from('campaigns')
          .select('*')
          .eq('id', id)
          .single()
        if (res.error) throw res.error
        return res
      })

      if (campaignError || !campaign) {
        console.error('Failed to load campaign:', campaignError)
        set({ loading: false })
        return
      }

      set({ currentCampaign: rowToCampaign(campaign) })

      // Load all remaining data in parallel with Promise.allSettled
      // so one failure doesn't block the others
      const [membersResult, charactersResult, codesResult] = await Promise.allSettled([
        // Members — batch profile query instead of N+1
        (async () => {
          const { data: memberRows, error: membersError } = await supabase
            .from('campaign_members')
            .select('campaign_id, user_id, joined_at')
            .eq('campaign_id', id)

          if (membersError) throw membersError
          if (!memberRows || memberRows.length === 0) return []

          // Batch profile fetch — ONE query instead of N
          const userIds = memberRows.map((m) => m.user_id)
          const { data: profiles } = await supabase
            .from('profiles')
            .select('id, display_name')
            .in('id', userIds)

          const profileMap = new Map(
            (profiles ?? []).map((p) => [p.id, p.display_name])
          )

          return memberRows.map((m): CampaignMember => ({
            campaignId: m.campaign_id,
            userId: m.user_id,
            displayName: profileMap.get(m.user_id) || 'Unknown',
            joinedAt: m.joined_at
          }))
        })(),

        // Characters
        withRetry(() => api.listCampaignCharacters(id)),

        // Invite codes
        (async () => {
          const { data: codes } = await supabase
            .from('invite_codes')
            .select('code, expires_at')
            .eq('campaign_id', id)
            .gt('expires_at', new Date().toISOString())
            .order('created_at', { ascending: false })
            .limit(1)
          return codes?.[0]?.code || null
        })()
      ])

      // Apply results — use whatever succeeded
      if (membersResult.status === 'fulfilled') {
        set({ members: membersResult.value })
      } else {
        console.error('Failed to load members:', membersResult.reason)
      }

      if (charactersResult.status === 'fulfilled') {
        set({ campaignCharacters: charactersResult.value })
      } else {
        console.error('Failed to load campaign characters:', charactersResult.reason)
      }

      if (codesResult.status === 'fulfilled') {
        set({ inviteCode: codesResult.value })
      } else {
        console.error('Failed to load invite codes:', codesResult.reason)
      }
    } catch (err) {
      console.error('Failed to load campaign detail:', err)
    } finally {
      // ALWAYS set loading false at the end, not after first query
      set({ loading: false })
    }
  },

  generateInviteCode: async (campaignId) => {
    const { data, error } = await supabase.rpc('generate_invite_code', {
      p_campaign_id: campaignId
    })
    if (error) throw error
    const code = data as string
    set({ inviteCode: code })
    return code
  },

  joinCampaign: async (code) => {
    const { data, error } = await supabase.rpc('join_campaign_by_code', {
      invite_code: code
    })
    if (error) throw error
    const campaignId = data as string
    await get().loadCampaigns()
    return campaignId
  },

  leaveCampaign: async (campaignId) => {
    const { data: { session } } = await supabase.auth.getSession()
    const user = session?.user
    if (!user) return

    await supabase
      .from('campaign_members')
      .delete()
      .eq('campaign_id', campaignId)
      .eq('user_id', user.id)

    // Unassign characters from this campaign
    await supabase
      .from('characters')
      .update({ campaign_id: null })
      .eq('campaign_id', campaignId)
      .eq('user_id', user.id)

    await get().loadCampaigns()
  },

  removeMember: async (campaignId, userId) => {
    await supabase
      .from('campaign_members')
      .delete()
      .eq('campaign_id', campaignId)
      .eq('user_id', userId)

    // Unassign their characters
    await supabase
      .from('characters')
      .update({ campaign_id: null })
      .eq('campaign_id', campaignId)
      .eq('user_id', userId)

    await get().loadCampaignDetail(campaignId)
  },

  updateCampaign: async (id, name, description) => {
    await supabase
      .from('campaigns')
      .update({ name, description, updated_at: new Date().toISOString() })
      .eq('id', id)

    set((state) => ({
      currentCampaign: state.currentCampaign
        ? { ...state.currentCampaign, name, description }
        : null
    }))
  },

  // Real-time subscription for campaign members — DM sees players join/leave live
  subscribeToCampaign: (campaignId) => {
    const channel = supabase
      .channel(`campaign:${campaignId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'campaign_members',
          filter: `campaign_id=eq.${campaignId}`,
        },
        () => {
          // Reload campaign detail when members change
          get().loadCampaignDetail(campaignId)
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'characters',
          filter: `campaign_id=eq.${campaignId}`,
        },
        () => {
          // Reload when characters are assigned/unassigned
          get().loadCampaignDetail(campaignId)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }
}))

function rowToCampaign(row: Record<string, unknown>): Campaign {
  return {
    id: row.id as string,
    name: row.name as string,
    description: (row.description as string) || '',
    gameSystemId: (row.game_system_id as string) || 'pf2e',
    dmUserId: row.dm_user_id as string,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string
  }
}
