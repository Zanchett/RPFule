import { create } from 'zustand'
import { supabase, ensureSession, getCachedUserId, dbg, queryStarted, queryFinished } from '../lib/supabase'
import { Campaign, CampaignMember, Character } from '../types'
import * as api from '../lib/api'
import { withRetry } from '../lib/retry'

// Get user ID from memory cache — no lock contention.
async function getUserId(): Promise<string | null> {
  await ensureSession()
  return getCachedUserId()
}

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
  updateCharacterLocally: (updated: Character) => void
  reloadCampaignCharacters: (campaignId: string) => Promise<void>
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
      const userId = await getUserId()
      if (!userId) return

      // Campaigns where user is DM
      const { data: dmCampaigns } = await withRetry(async () => {
        const res = await supabase
          .from('campaigns')
          .select('*')
          .eq('dm_user_id', userId)
          .order('created_at', { ascending: false })
        if (res.error) throw res.error
        return res
      })

      // Campaigns where user is a member
      const { data: memberRows } = await withRetry(async () => {
        const res = await supabase
          .from('campaign_members')
          .select('campaign_id')
          .eq('user_id', userId)
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
    const userId = await getUserId()
    if (!userId) throw new Error('Not authenticated')

    const { data, error } = await supabase
      .from('campaigns')
      .insert({
        name,
        description,
        game_system_id: gameSystemId,
        dm_user_id: userId
      })
      .select()
      .single()

    if (error) throw error
    await get().loadCampaigns()
    return data.id
  },

  loadCampaignDetail: async (id) => {
    const t0 = Date.now()
    // Only show loading spinner on initial load — not on refreshes
    const isInitialLoad = !get().currentCampaign || get().currentCampaign?.id !== id
    dbg('campaign', `loadCampaignDetail START (id=${id}, initial=${isInitialLoad})`)
    if (isInitialLoad) {
      set({ loading: true })
    }

    try {
      // Ensure JWT is fresh before querying
      dbg('campaign', 'loadCampaignDetail: calling ensureSession...')
      const sessionOk = await ensureSession()
      dbg('campaign', `loadCampaignDetail: ensureSession returned ${sessionOk} (${Date.now() - t0}ms)`)

      if (!sessionOk) {
        dbg('campaign', 'loadCampaignDetail: ABORTING — no valid session')
        set({ loading: false })
        return
      }

      // Load campaign first
      dbg('campaign', 'loadCampaignDetail: querying campaign row...')
      queryStarted()
      const { data: campaign, error: campaignError } = await withRetry(async () => {
        const res = await supabase
          .from('campaigns')
          .select('*')
          .eq('id', id)
          .single()
        if (res.error) throw res.error
        return res
      })
      queryFinished()

      if (campaignError || !campaign) {
        dbg('campaign', `loadCampaignDetail: CAMPAIGN QUERY FAILED (${Date.now() - t0}ms)`, campaignError)
        set({ loading: false })
        return
      }

      dbg('campaign', `loadCampaignDetail: campaign loaded OK (${Date.now() - t0}ms)`)
      set({ currentCampaign: rowToCampaign(campaign) })

      // Load all remaining data in parallel
      dbg('campaign', 'loadCampaignDetail: loading members/characters/codes in parallel...')
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
      dbg('campaign', `loadCampaignDetail: parallel done (${Date.now() - t0}ms) — members=${membersResult.status}, chars=${charactersResult.status}, codes=${codesResult.status}`)

      if (membersResult.status === 'fulfilled') {
        set({ members: membersResult.value })
      } else {
        dbg('campaign', 'loadCampaignDetail: MEMBERS FAILED', membersResult.reason)
      }

      if (charactersResult.status === 'fulfilled') {
        set({ campaignCharacters: charactersResult.value })
      } else {
        dbg('campaign', 'loadCampaignDetail: CHARACTERS FAILED', charactersResult.reason)
      }

      if (codesResult.status === 'fulfilled') {
        set({ inviteCode: codesResult.value })
      } else {
        console.error('Failed to load invite codes:', codesResult.reason)
      }
    } catch (err) {
      dbg('campaign', `loadCampaignDetail: EXCEPTION (${Date.now() - t0}ms)`, err)
    } finally {
      dbg('campaign', `loadCampaignDetail: DONE — setting loading=false (${Date.now() - t0}ms)`)
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
    const userId = await getUserId()
    if (!userId) return

    await supabase
      .from('campaign_members')
      .delete()
      .eq('campaign_id', campaignId)
      .eq('user_id', userId)

    // Unassign characters from this campaign
    await supabase
      .from('characters')
      .update({ campaign_id: null })
      .eq('campaign_id', campaignId)
      .eq('user_id', userId)

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

  // Update a single character in the store (for local optimistic updates from shop/DM edits)
  updateCharacterLocally: (updated: Character) => {
    set((state) => ({
      campaignCharacters: state.campaignCharacters.map((c) =>
        c.id === updated.id ? updated : c
      )
    }))
  },

  // Reload just the characters for a campaign (lightweight, doesn't reload everything)
  reloadCampaignCharacters: async (campaignId: string) => {
    try {
      const characters = await withRetry(() => api.listCampaignCharacters(campaignId))
      set({ campaignCharacters: characters })
    } catch (err) {
      console.error('Failed to reload campaign characters:', err)
    }
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
          // Reload campaign detail when members join/leave
          get().loadCampaignDetail(campaignId)
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'characters',
          filter: `campaign_id=eq.${campaignId}`,
        },
        () => {
          // Only reload when characters are ASSIGNED to the campaign (not on every data update)
          get().reloadCampaignCharacters(campaignId)
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'characters',
          filter: `campaign_id=eq.${campaignId}`,
        },
        () => {
          // Reload when characters are REMOVED from campaign
          get().reloadCampaignCharacters(campaignId)
        }
      )
      // NOTE: We intentionally do NOT listen for UPDATE events on the characters table.
      // UPDATE events fire on every HP/gold/equipment change (DM edits, shop purchases).
      // Reloading on those would overwrite local optimistic updates and cause race conditions.
      // Instead, components use subscribeToCharacter() for real-time field-level syncing.
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
