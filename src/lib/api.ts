import { supabase } from './supabase'
import { Character } from '../types'

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
  const data = row.data as Record<string, unknown>
  return {
    id: row.id,
    gameSystemId: row.game_system_id,
    name: row.name,
    level: row.level,
    ancestryId: row.ancestry_id,
    classId: row.class_id,
    campaignId: row.campaign_id,
    // Spread all other fields from JSONB data
    heritageId: (data.heritageId as string | null) ?? null,
    backgroundId: (data.backgroundId as string | null) ?? null,
    abilityBoosts: (data.abilityBoosts as Character['abilityBoosts']) ?? { ancestry: [], background: [], class: [], free: [] },
    abilityFlaws: (data.abilityFlaws as Character['abilityFlaws']) ?? { ancestry: [] },
    manualAbilityOverrides: (data.manualAbilityOverrides as Character['manualAbilityOverrides']) ?? null,
    skillTraining: (data.skillTraining as string[]) ?? [],
    selectedFeats: (data.selectedFeats as Character['selectedFeats']) ?? { ancestryFeats: [], classFeats: [], generalFeats: [], skillFeats: [] },
    purchasedEquipment: (data.purchasedEquipment as Character['purchasedEquipment']) ?? [],
    goldRemaining: (data.goldRemaining as number) ?? 1500,
    alignment: (data.alignment as string) ?? '',
    deity: (data.deity as string) ?? '',
    languages: (data.languages as string[]) ?? [],
    notes: (data.notes as string) ?? '',
    // Live play state
    currentHP: (data.currentHP as number) ?? 0,
    tempHP: (data.tempHP as number) ?? 0,
    xp: (data.xp as number) ?? 0,
    heroPoints: (data.heroPoints as number) ?? 1,
    conditions: (data.conditions as string[]) ?? [],
    spellSlotsUsed: (data.spellSlotsUsed as Record<number, number>) ?? {},
    focusPointsUsed: (data.focusPointsUsed as number) ?? 0,
    portraitBase64: (data.portraitBase64 as string) ?? '',
    sessionNotes: (data.sessionNotes as string) ?? '',
    // Meta
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }
}

export async function saveCharacter(character: Character): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')

  const row = characterToRow(character, user.id)
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
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return []

  const { data, error } = await supabase
    .from('characters')
    .select('*')
    .eq('user_id', user.id)
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
