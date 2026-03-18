import { supabase } from './supabase'
import { Character, AbilityId } from '../types'
import { withRetry } from './retry'

// Cache the current user to avoid network round-trips on every save.
// supabase.auth.getUser() hits the network every call, which is slow
// and fails if there's any transient issue.
// supabase.auth.getSession() reads from local storage — much faster.
async function getCurrentUserId(): Promise<string> {
  // First try the fast path: local session cache
  const { data: { session } } = await supabase.auth.getSession()
  if (session?.user?.id) return session.user.id

  // Fallback: network call to verify (handles edge cases like token refresh)
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) throw new Error('Not authenticated')
  return user.id
}

interface CharacterRow {
  id: string
  user_id: string
  campaign_id: string | null
  game_system_id: string
  name: string
  level: number
  ancestry_id: string | null
  class_id: string | null
  data: Record<string, unknown>
  created_at: string
  updated_at: string
}

function characterToRow(character: Character, userId: string): Omit<CharacterRow, 'created_at'> {
  const {
    id, gameSystemId, name, level, ancestryId, classId, campaignId,
    createdAt, updatedAt,
    ...rest
  } = character

  return {
    id,
    user_id: userId,
    campaign_id: campaignId ?? null,
    game_system_id: gameSystemId,
    name: name || 'Unnamed Character',
    level,
    ancestry_id: ancestryId,
    class_id: classId,
    data: rest as Record<string, unknown>,
    updated_at: updatedAt || new Date().toISOString()
  }
}

function rowToCharacter(row: CharacterRow): Character {
  const data = (row.data ?? {}) as Record<string, unknown>

  // Safely extract nested objects with full defaults for old/broken data
  const rawBoosts = data.abilityBoosts as Record<string, unknown> | undefined
  const abilityBoosts: Character['abilityBoosts'] = {
    ancestry: Array.isArray(rawBoosts?.ancestry) ? rawBoosts.ancestry as AbilityId[] : [],
    background: Array.isArray(rawBoosts?.background) ? rawBoosts.background as AbilityId[] : [],
    class: Array.isArray(rawBoosts?.class) ? rawBoosts.class as AbilityId[] : [],
    free: Array.isArray(rawBoosts?.free) ? rawBoosts.free as AbilityId[] : []
  }

  const rawFlaws = data.abilityFlaws as Record<string, unknown> | undefined
  const abilityFlaws: Character['abilityFlaws'] = {
    ancestry: Array.isArray(rawFlaws?.ancestry) ? rawFlaws.ancestry as AbilityId[] : []
  }

  const rawFeats = data.selectedFeats as Record<string, unknown> | undefined
  const selectedFeats: Character['selectedFeats'] = {
    ancestryFeats: Array.isArray(rawFeats?.ancestryFeats) ? rawFeats.ancestryFeats as string[] : [],
    classFeats: Array.isArray(rawFeats?.classFeats) ? rawFeats.classFeats as string[] : [],
    generalFeats: Array.isArray(rawFeats?.generalFeats) ? rawFeats.generalFeats as string[] : [],
    skillFeats: Array.isArray(rawFeats?.skillFeats) ? rawFeats.skillFeats as string[] : []
  }

  // Normalize purchasedEquipment — old versions might have different shapes
  let purchasedEquipment: Character['purchasedEquipment'] = []
  if (Array.isArray(data.purchasedEquipment)) {
    purchasedEquipment = (data.purchasedEquipment as unknown[]).map((item) => {
      if (typeof item === 'string') {
        // Old format: just item ID strings
        return { itemId: item, quantity: 1 }
      }
      if (item && typeof item === 'object' && 'itemId' in item) {
        const obj = item as { itemId: string; quantity?: number }
        return { itemId: obj.itemId, quantity: obj.quantity ?? 1 }
      }
      return { itemId: String(item), quantity: 1 }
    })
  }

  return {
    id: row.id,
    gameSystemId: row.game_system_id || 'pf2e',
    name: row.name || 'Unnamed Character',
    level: row.level ?? 1,
    ancestryId: row.ancestry_id ?? null,
    classId: row.class_id ?? null,
    campaignId: row.campaign_id ?? null,
    heritageId: (data.heritageId as string | null) ?? null,
    backgroundId: (data.backgroundId as string | null) ?? null,
    abilityBoosts,
    abilityFlaws,
    manualAbilityOverrides: (data.manualAbilityOverrides as Character['manualAbilityOverrides']) ?? null,
    skillTraining: Array.isArray(data.skillTraining) ? data.skillTraining as string[] : [],
    selectedFeats,
    purchasedEquipment,
    goldRemaining: typeof data.goldRemaining === 'number' ? data.goldRemaining : 1500,
    alignment: (data.alignment as string) ?? '',
    deity: (data.deity as string) ?? '',
    languages: Array.isArray(data.languages) ? data.languages as string[] : [],
    notes: (data.notes as string) ?? '',
    // Live play state
    currentHP: typeof data.currentHP === 'number' ? data.currentHP : 0,
    tempHP: typeof data.tempHP === 'number' ? data.tempHP : 0,
    xp: typeof data.xp === 'number' ? data.xp : 0,
    heroPoints: typeof data.heroPoints === 'number' ? data.heroPoints : 1,
    conditions: Array.isArray(data.conditions) ? data.conditions as string[] : [],
    spellSlotsUsed: (data.spellSlotsUsed && typeof data.spellSlotsUsed === 'object' ? data.spellSlotsUsed : {}) as Record<number, number>,
    focusPointsUsed: typeof data.focusPointsUsed === 'number' ? data.focusPointsUsed : 0,
    portraitBase64: (data.portraitBase64 as string) ?? '',
    sessionNotes: (data.sessionNotes as string) ?? '',
    // Meta
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }
}

export async function saveCharacter(character: Character): Promise<void> {
  const userId = await getCurrentUserId()
  const row = characterToRow(character, userId)
  const { error } = await supabase.from('characters').upsert(row)
  if (error) throw error
}

export async function loadCharacter(id: string): Promise<Character> {
  const { data, error } = await supabase
    .from('characters')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return rowToCharacter(data as CharacterRow)
}

export async function deleteCharacter(id: string): Promise<void> {
  const { error } = await supabase.from('characters').delete().eq('id', id)
  if (error) throw error
}

export async function listCharacters(): Promise<Character[]> {
  const userId = await getCurrentUserId().catch(() => null)
  if (!userId) return []

  const { data, error } = await supabase
    .from('characters')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })
  if (error) throw error
  return (data ?? []).map((row) => rowToCharacter(row as CharacterRow))
}

// DM-specific: save only allowed fields (HP, gold, equipment, focus points, hero points)
// Does NOT change user_id / ownership
export async function saveDMEdits(
  characterId: string,
  edits: {
    currentHP?: number
    tempHP?: number
    goldRemaining?: number
    purchasedEquipment?: Character['purchasedEquipment']
    focusPointsUsed?: number
    heroPoints?: number
    conditions?: string[]
    spellSlotsUsed?: Record<number, number>
  }
): Promise<void> {
  // Load current row to merge JSONB data
  const { data: current, error: loadError } = await supabase
    .from('characters')
    .select('data')
    .eq('id', characterId)
    .single()
  if (loadError) throw loadError

  const currentData = (current.data ?? {}) as Record<string, unknown>
  const updatedData = { ...currentData }

  if (edits.currentHP !== undefined) updatedData.currentHP = edits.currentHP
  if (edits.tempHP !== undefined) updatedData.tempHP = edits.tempHP
  if (edits.goldRemaining !== undefined) updatedData.goldRemaining = edits.goldRemaining
  if (edits.purchasedEquipment !== undefined) updatedData.purchasedEquipment = edits.purchasedEquipment
  if (edits.focusPointsUsed !== undefined) updatedData.focusPointsUsed = edits.focusPointsUsed
  if (edits.heroPoints !== undefined) updatedData.heroPoints = edits.heroPoints
  if (edits.conditions !== undefined) updatedData.conditions = edits.conditions
  if (edits.spellSlotsUsed !== undefined) updatedData.spellSlotsUsed = edits.spellSlotsUsed

  const { error } = await supabase
    .from('characters')
    .update({ data: updatedData, updated_at: new Date().toISOString() })
    .eq('id', characterId)
  if (error) throw error
}

// Campaign-specific: load all characters in a campaign
export async function listCampaignCharacters(campaignId: string): Promise<Character[]> {
  const { data, error } = await supabase
    .from('characters')
    .select('*')
    .eq('campaign_id', campaignId)
    .order('updated_at', { ascending: false })
  if (error) throw error
  return (data ?? []).map((row) => rowToCharacter(row as CharacterRow))
}
