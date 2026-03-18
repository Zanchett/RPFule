import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import { Campaign, CampaignMember, Character } from '../types'
import * as api from '../lib/api'

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
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    // Campaigns where user is DM
    const { data: dmCampaigns } = await supabase
      .from('campaigns')
      .select('*')
      .eq('dm_user_id', user.id)
      .order('created_at', { ascending: false })

    // Campaigns where user is a member
    const { data: memberRows } = await supabase
      .from('campaign_members')
      .select('campaign_id')
      .eq('user_id', user.id)

    let joined: Campaign[] = []
    if (memberRows && memberRows.length > 0) {
      const ids = memberRows.map((m) => m.campaign_id)
      const { data: joinedData } = await supabase
        .from('campaigns')
        .select('*')
        .in('id', ids)
        .order('created_at', { ascending: false })
      joined = (joinedData ?? []).map(rowToCampaign)
    }

    set({
      campaigns: (dmCampaigns ?? []).map(rowToCampaign),
      joinedCampaigns: joined
    })
  },

  createCampaign: async (name, description, gameSystemId) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')

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

    // Load campaign first — if this fails, nothing else can proceed
    const { data: campaign, error: campaignError } = await supabase
      .from('campaigns')
      .select('*')
      .eq('id', id)
      .single()

    if (campaignError || !campaign) {
      console.error('Failed to load campaign:', campaignError)
      set({ loading: false })
      return
    }

    // Set campaign immediately so the page renders even if later queries fail
    set({ currentCampaign: rowToCampaign(campaign), loading: false })

    // Load remaining data — failures here won't block the page
    try {
      const { data: memberRows } = await supabase
        .from('campaign_members')
        .select('campaign_id, user_id, joined_at')
        .eq('campaign_id', id)

      const members: CampaignMember[] = []
      if (memberRows) {
        for (const m of memberRows) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('display_name')
            .eq('id', m.user_id)
            .single()
          members.push({
            campaignId: m.campaign_id,
            userId: m.user_id,
            displayName: profile?.display_name || 'Unknown',
            joinedAt: m.joined_at
          })
        }
      }
      set({ members })
    } catch (err) {
      console.error('Failed to load members:', err)
    }

    try {
      const characters = await api.listCampaignCharacters(id)
      set({ campaignCharacters: characters })
    } catch (err) {
      console.error('Failed to load campaign characters:', err)
    }

    try {
      const { data: codes } = await supabase
        .from('invite_codes')
        .select('code, expires_at')
        .eq('campaign_id', id)
        .gt('expires_at', new Date().toISOString())
        .order('created_at', { ascending: false })
        .limit(1)
      set({ inviteCode: codes?.[0]?.code || null })
    } catch (err) {
      console.error('Failed to load invite codes:', err)
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
    const { data: { user } } = await supabase.auth.getUser()
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
