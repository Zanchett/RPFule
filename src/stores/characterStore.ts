import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { Character, AbilityId, GameSystem } from '../types'
import { getGameSystem, getDefaultGameSystem } from '../../game-systems'
import * as api from '../lib/api'
import { withRetry } from '../lib/retry'
import { supabase, dbg } from '../lib/supabase'

interface CharacterListItem {
  id: string
  name: string
  gameSystemId: string
  classId: string | null
  ancestryId: string | null
  level: number
  updatedAt: string
}

interface CharacterStore {
  // Current character being edited
  character: Character | null
  // List of saved characters (summaries)
  characterList: CharacterListItem[]
  // Active game system
  gameSystem: GameSystem
  // Whether there are unsaved changes
  isDirty: boolean
  // Save status for UI feedback
  saveStatus: 'idle' | 'saving' | 'saved' | 'error'
  saveError: string | null
  // Character loading state
  characterLoading: boolean
  characterError: string | null

  // Character list actions
  loadCharacterList: () => Promise<void>
  createNewCharacter: () => Promise<string>
  loadCharacter: (id: string) => Promise<void>
  saveCharacter: () => Promise<void>
  deleteCharacter: (id: string) => Promise<void>

  // Character editing actions
  setName: (name: string) => void
  setAncestry: (ancestryId: string | null) => void
  setHeritage: (heritageId: string | null) => void
  setBackground: (backgroundId: string | null) => void
  setClass: (classId: string | null) => void

  // Ability boosts
  setAncestryBoosts: (boosts: AbilityId[]) => void
  setAncestryFlaws: (flaws: AbilityId[]) => void
  setBackgroundBoosts: (boosts: AbilityId[]) => void
  setClassBoost: (boost: AbilityId[]) => void
  setFreeBoosts: (boosts: AbilityId[]) => void

  // Skills
  setSkillTraining: (skills: string[]) => void

  // Feats
  setAncestryFeats: (feats: string[]) => void
  setClassFeats: (feats: string[]) => void
  setGeneralFeats: (feats: string[]) => void
  setSkillFeats: (feats: string[]) => void

  // Equipment
  addEquipment: (itemId: string) => void
  removeEquipment: (itemId: string) => void
  setGoldRemaining: (gold: number) => void

  // Details
  setAlignment: (alignment: string) => void
  setDeity: (deity: string) => void
  setLanguages: (languages: string[]) => void
  setNotes: (notes: string) => void

  // Campaign
  setCampaignId: (campaignId: string | null) => void

  // Live play actions
  setCurrentHP: (hp: number) => void
  adjustHP: (delta: number) => void
  setTempHP: (hp: number) => void
  addXP: (amount: number) => void
  levelUp: () => void
  setHeroPoints: (points: number) => void
  addCondition: (condition: string) => void
  removeCondition: (condition: string) => void
  useSpellSlot: (spellLevel: number) => void
  restoreSpellSlot: (spellLevel: number) => void
  useFocusPoint: () => void
  restoreFocusPoint: () => void
  longRest: () => void
  setPortrait: (base64: string) => void
  setSessionNotes: (notes: string) => void

  // Real-time: subscribe to DM edits on this character
  subscribeToCharacter: (characterId: string) => () => void
}

// Helper: wrap a promise with a timeout
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('Save timed out')), ms)
    )
  ])
}

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  character: null,
  characterList: [],
  gameSystem: getDefaultGameSystem(),
  isDirty: false,
  saveStatus: 'idle',
  saveError: null,
  characterLoading: false,
  characterError: null,

  loadCharacterList: async () => {
    try {
      const list = await withRetry(() => api.listCharacters())
      const summaries: CharacterListItem[] = list.map((c) => ({
        id: c.id,
        name: c.name || 'Unnamed Character',
        gameSystemId: c.gameSystemId,
        classId: c.classId,
        ancestryId: c.ancestryId,
        level: c.level,
        updatedAt: c.updatedAt
      }))
      set({ characterList: summaries })
    } catch (err) {
      console.error('Failed to load character list:', err)
      // Don't clear existing data on failure — keep stale data rather than showing nothing
    }
  },

  createNewCharacter: async () => {
    const { gameSystem } = get()
    const id = uuidv4()
    const character = gameSystem.createBlankCharacter(id)
    set({ character, isDirty: true, saveStatus: 'saving', saveError: null })
    try {
      // Block until save completes — don't navigate to unsaved character
      await withRetry(() => withTimeout(api.saveCharacter(character), 6000))
      set({ isDirty: false, saveStatus: 'saved', saveError: null })
      setTimeout(() => {
        const { saveStatus } = get()
        if (saveStatus === 'saved') set({ saveStatus: 'idle' })
      }, 3000)
    } catch (err) {
      console.error('Failed to save new character:', err)
      set({ saveStatus: 'error', saveError: err instanceof Error ? err.message : 'Save failed' })
    }
    return id
  },

  loadCharacter: async (id: string) => {
    const t0 = Date.now()
    dbg('char', `loadCharacter START (id=${id})`)
    set({ characterLoading: true, characterError: null })
    try {
      const data = await withRetry(() => api.loadCharacter(id))
      dbg('char', `loadCharacter: data loaded OK (${Date.now() - t0}ms)`)
      const system = getGameSystem(data.gameSystemId) ?? getDefaultGameSystem()

      // Migration: fill defaults for any missing live-play fields (old saves)
      const migrated: Character = {
        ...data,
        campaignId: data.campaignId ?? null,
        currentHP: data.currentHP ?? 0,
        tempHP: data.tempHP ?? 0,
        xp: data.xp ?? 0,
        heroPoints: data.heroPoints ?? 1,
        conditions: data.conditions ?? [],
        spellSlotsUsed: data.spellSlotsUsed ?? {},
        focusPointsUsed: data.focusPointsUsed ?? 0,
        portraitBase64: data.portraitBase64 ?? '',
        sessionNotes: data.sessionNotes ?? ''
      }

      // If currentHP is 0 and character has been built, initialize to maxHP
      if (migrated.currentHP === 0 && migrated.classId && migrated.ancestryId) {
        migrated.currentHP = system.calculateHP(migrated)
      }

      dbg('char', `loadCharacter: DONE OK (${Date.now() - t0}ms)`)
      set({
        character: migrated,
        gameSystem: system,
        isDirty: false,
        characterLoading: false,
        characterError: null
      })
    } catch (err) {
      dbg('char', `loadCharacter: FAILED (${Date.now() - t0}ms)`, err)
      set({
        characterLoading: false,
        characterError: err instanceof Error ? err.message : 'Failed to load character'
      })
    }
  },

  saveCharacter: async () => {
    const { character, saveStatus: currentStatus } = get()
    if (!character) return
    // Prevent concurrent saves (manual vs auto-save race)
    if (currentStatus === 'saving') {
      dbg('char', 'saveCharacter: SKIPPED — already saving')
      return
    }
    dbg('char', 'saveCharacter: START')
    const updated = { ...character, updatedAt: new Date().toISOString() }
    isSaving = true
    set({ character: updated, saveStatus: 'saving', saveError: null })
    isSaving = false
    try {
      const st0 = Date.now()
      await withRetry(() => withTimeout(api.saveCharacter(updated), 6000), { retries: 1 })
      dbg('char', `saveCharacter: OK (${Date.now() - st0}ms)`)
      isSaving = true
      set({ isDirty: false, saveStatus: 'saved', saveError: null })
      isSaving = false
      setTimeout(() => {
        const { saveStatus } = get()
        if (saveStatus === 'saved') set({ saveStatus: 'idle' })
      }, 3000)
    } catch (err) {
      isSaving = false
      const message = err instanceof Error ? err.message : 'Save failed'
      dbg('char', `saveCharacter: FAILED — ${message}`, err)
      set({ saveStatus: 'error', saveError: message })
    }
  },

  deleteCharacter: async (id: string) => {
    await api.deleteCharacter(id)
    const { characterList, character } = get()
    set({
      characterList: characterList.filter((c) => c.id !== id),
      character: character?.id === id ? null : character
    })
  },

  setName: (name) =>
    set((state) => ({
      character: state.character ? { ...state.character, name } : null
    })),

  setAncestry: (ancestryId) =>
    set((state) => {
      if (!state.character) return {}
      const updated: Character = {
        ...state.character,
        ancestryId,
        heritageId: null,
        abilityBoosts: { ...state.character.abilityBoosts, ancestry: [] },
        abilityFlaws: { ancestry: [] },
        selectedFeats: { ...state.character.selectedFeats, ancestryFeats: [] }
      }
      // Recalculate HP when ancestry changes
      const newMaxHP = state.gameSystem.calculateHP(updated)
      updated.currentHP = newMaxHP
      return { character: updated }
    }),

  setHeritage: (heritageId) =>
    set((state) => ({
      character: state.character ? { ...state.character, heritageId } : null
    })),

  setBackground: (backgroundId) =>
    set((state) => {
      if (!state.character) return {}
      return {
        character: {
          ...state.character,
          backgroundId,
          abilityBoosts: { ...state.character.abilityBoosts, background: [] }
        }
      }
    }),

  setClass: (classId) =>
    set((state) => {
      if (!state.character) return {}
      const updated: Character = {
        ...state.character,
        classId,
        abilityBoosts: { ...state.character.abilityBoosts, class: [] },
        skillTraining: [],
        selectedFeats: { ...state.character.selectedFeats, classFeats: [] }
      }
      // Recalculate HP when class changes
      const newMaxHP = state.gameSystem.calculateHP(updated)
      updated.currentHP = newMaxHP
      return { character: updated }
    }),

  setAncestryBoosts: (boosts) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            abilityBoosts: { ...state.character.abilityBoosts, ancestry: boosts }
          }
        : null
    })),

  setAncestryFlaws: (flaws) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            abilityFlaws: { ancestry: flaws }
          }
        : null
    })),

  setBackgroundBoosts: (boosts) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            abilityBoosts: { ...state.character.abilityBoosts, background: boosts }
          }
        : null
    })),

  setClassBoost: (boost) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            abilityBoosts: { ...state.character.abilityBoosts, class: boost }
          }
        : null
    })),

  setFreeBoosts: (boosts) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            abilityBoosts: { ...state.character.abilityBoosts, free: boosts }
          }
        : null
    })),

  setSkillTraining: (skills) =>
    set((state) => ({
      character: state.character ? { ...state.character, skillTraining: skills } : null
    })),

  setAncestryFeats: (feats) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            selectedFeats: { ...state.character.selectedFeats, ancestryFeats: feats }
          }
        : null
    })),

  setClassFeats: (feats) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            selectedFeats: { ...state.character.selectedFeats, classFeats: feats }
          }
        : null
    })),

  setGeneralFeats: (feats) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            selectedFeats: { ...state.character.selectedFeats, generalFeats: feats }
          }
        : null
    })),

  setSkillFeats: (feats) =>
    set((state) => ({
      character: state.character
        ? {
            ...state.character,
            selectedFeats: { ...state.character.selectedFeats, skillFeats: feats }
          }
        : null
    })),

  addEquipment: (itemId) =>
    set((state) => {
      if (!state.character) return {}
      const existing = state.character.purchasedEquipment.find((e) => e.itemId === itemId)
      const equipment = state.gameSystem.getEquipment()
      const item = equipment.find((e) => e.id === itemId)
      if (!item) return {}

      const newEquipment = existing
        ? state.character.purchasedEquipment.map((e) =>
            e.itemId === itemId ? { ...e, quantity: e.quantity + 1 } : e
          )
        : [...state.character.purchasedEquipment, { itemId, quantity: 1 }]

      return {
        character: {
          ...state.character,
          purchasedEquipment: newEquipment,
          goldRemaining: state.character.goldRemaining - item.price
        }
      }
    }),

  removeEquipment: (itemId) =>
    set((state) => {
      if (!state.character) return {}
      const existing = state.character.purchasedEquipment.find((e) => e.itemId === itemId)
      if (!existing) return {}

      const equipment = state.gameSystem.getEquipment()
      const item = equipment.find((e) => e.id === itemId)
      if (!item) return {}

      const newEquipment =
        existing.quantity <= 1
          ? state.character.purchasedEquipment.filter((e) => e.itemId !== itemId)
          : state.character.purchasedEquipment.map((e) =>
              e.itemId === itemId ? { ...e, quantity: e.quantity - 1 } : e
            )

      return {
        character: {
          ...state.character,
          purchasedEquipment: newEquipment,
          goldRemaining: state.character.goldRemaining + item.price
        }
      }
    }),

  setGoldRemaining: (gold) =>
    set((state) => ({
      character: state.character ? { ...state.character, goldRemaining: gold } : null
    })),

  setAlignment: (alignment) =>
    set((state) => ({
      character: state.character ? { ...state.character, alignment } : null
    })),

  setDeity: (deity) =>
    set((state) => ({
      character: state.character ? { ...state.character, deity } : null
    })),

  setLanguages: (languages) =>
    set((state) => ({
      character: state.character ? { ...state.character, languages } : null
    })),

  setNotes: (notes) =>
    set((state) => ({
      character: state.character ? { ...state.character, notes } : null
    })),

  setCampaignId: (campaignId) =>
    set((state) => ({
      character: state.character ? { ...state.character, campaignId } : null
    })),

  // === Live Play Actions ===

  setCurrentHP: (hp) =>
    set((state) => ({
      character: state.character ? { ...state.character, currentHP: Math.max(0, hp) } : null
    })),

  adjustHP: (delta) =>
    set((state) => {
      if (!state.character) return {}
      const maxHP = state.gameSystem.calculateHP(state.character)

      if (delta < 0) {
        // Taking damage: consume tempHP first
        const damage = Math.abs(delta)
        let remainingDamage = damage
        let newTempHP = state.character.tempHP

        if (newTempHP > 0) {
          if (newTempHP >= remainingDamage) {
            newTempHP -= remainingDamage
            remainingDamage = 0
          } else {
            remainingDamage -= newTempHP
            newTempHP = 0
          }
        }

        return {
          character: {
            ...state.character,
            currentHP: Math.max(0, state.character.currentHP - remainingDamage),
            tempHP: newTempHP
          }
        }
      } else {
        // Healing: cap at maxHP
        return {
          character: {
            ...state.character,
            currentHP: Math.min(maxHP, state.character.currentHP + delta)
          }
        }
      }
    }),

  setTempHP: (hp) =>
    set((state) => ({
      character: state.character ? { ...state.character, tempHP: Math.max(0, hp) } : null
    })),

  addXP: (amount) =>
    set((state) => ({
      character: state.character
        ? { ...state.character, xp: state.character.xp + Math.max(0, amount) }
        : null
    })),

  levelUp: () =>
    set((state) => {
      if (!state.character || state.character.xp < 1000) return {}
      const newLevel = state.character.level + 1
      const updatedChar: Character = {
        ...state.character,
        level: newLevel,
        xp: state.character.xp - 1000
      }
      // Recalculate maxHP and set currentHP to new max
      const newMaxHP = state.gameSystem.calculateHP(updatedChar)
      return {
        character: { ...updatedChar, currentHP: newMaxHP }
      }
    }),

  setHeroPoints: (points) =>
    set((state) => ({
      character: state.character
        ? { ...state.character, heroPoints: Math.max(0, Math.min(3, points)) }
        : null
    })),

  addCondition: (condition) =>
    set((state) => {
      if (!state.character) return {}
      // Don't add duplicates (check base condition id without value)
      const baseId = condition.split(':')[0]
      const filtered = state.character.conditions.filter((c) => c.split(':')[0] !== baseId)
      return {
        character: { ...state.character, conditions: [...filtered, condition] }
      }
    }),

  removeCondition: (condition) =>
    set((state) => ({
      character: state.character
        ? { ...state.character, conditions: state.character.conditions.filter((c) => c !== condition) }
        : null
    })),

  useSpellSlot: (spellLevel) =>
    set((state) => {
      if (!state.character) return {}
      const maxSlots = state.gameSystem.getMaxSpellSlots(state.character)
      const maxForLevel = maxSlots[spellLevel - 1] ?? 0
      const currentUsed = state.character.spellSlotsUsed[spellLevel] ?? 0
      if (currentUsed >= maxForLevel) return {}
      return {
        character: {
          ...state.character,
          spellSlotsUsed: { ...state.character.spellSlotsUsed, [spellLevel]: currentUsed + 1 }
        }
      }
    }),

  restoreSpellSlot: (spellLevel) =>
    set((state) => {
      if (!state.character) return {}
      const currentUsed = state.character.spellSlotsUsed[spellLevel] ?? 0
      if (currentUsed <= 0) return {}
      return {
        character: {
          ...state.character,
          spellSlotsUsed: { ...state.character.spellSlotsUsed, [spellLevel]: currentUsed - 1 }
        }
      }
    }),

  useFocusPoint: () =>
    set((state) => {
      if (!state.character) return {}
      const maxFP = state.gameSystem.getMaxFocusPoints(state.character)
      if (state.character.focusPointsUsed >= maxFP) return {}
      return {
        character: { ...state.character, focusPointsUsed: state.character.focusPointsUsed + 1 }
      }
    }),

  restoreFocusPoint: () =>
    set((state) => {
      if (!state.character) return {}
      if (state.character.focusPointsUsed <= 0) return {}
      return {
        character: { ...state.character, focusPointsUsed: state.character.focusPointsUsed - 1 }
      }
    }),

  longRest: () =>
    set((state) => {
      if (!state.character) return {}
      const maxHP = state.gameSystem.calculateHP(state.character)
      return {
        character: {
          ...state.character,
          currentHP: maxHP,
          tempHP: 0,
          spellSlotsUsed: {},
          focusPointsUsed: 0,
          conditions: []
        }
      }
    }),

  setPortrait: (base64) =>
    set((state) => ({
      character: state.character ? { ...state.character, portraitBase64: base64 } : null
    })),

  setSessionNotes: (notes) =>
    set((state) => ({
      character: state.character ? { ...state.character, sessionNotes: notes } : null
    })),

  // Real-time subscription: receive DM edits (HP, gold, conditions, etc.) instantly
  // via Supabase WebSocket — no polling, no refresh needed
  subscribeToCharacter: (characterId: string) => {
    const channel = supabase
      .channel(`player-char:${characterId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'characters',
          filter: `id=eq.${characterId}`,
        },
        () => {
          // Only apply remote changes if we're NOT currently saving
          // (prevents overwriting our own in-flight edits)
          if (isSaving) return
          const { character, isDirty } = get()
          if (!character || character.id !== characterId) return
          // If the player has unsaved local changes, don't overwrite them
          if (isDirty) return

          // Fetch the latest from DB and merge live-play fields
          api.loadCharacter(characterId).then((data) => {
            const prev = get().character
            if (!prev || prev.id !== characterId) return
            isSaving = true // prevent dirty flag from triggering
            set({
              character: {
                ...prev,
                currentHP: data.currentHP ?? prev.currentHP,
                tempHP: data.tempHP ?? prev.tempHP,
                heroPoints: data.heroPoints ?? prev.heroPoints,
                conditions: data.conditions ?? prev.conditions,
                goldRemaining: data.goldRemaining ?? prev.goldRemaining,
                purchasedEquipment: data.purchasedEquipment ?? prev.purchasedEquipment,
                focusPointsUsed: data.focusPointsUsed ?? prev.focusPointsUsed,
                spellSlotsUsed: data.spellSlotsUsed ?? prev.spellSlotsUsed,
              }
            })
            isSaving = false
          }).catch(() => { /* ignore — stale data is better than crashing */ })
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }
}))

// Guard flag: when true, character changes are from a save operation (updatedAt only)
// and should NOT re-mark the character as dirty.
let isSaving = false

// Mark dirty on any character change — but NOT when the change is from a save operation
useCharacterStore.subscribe((state, prevState) => {
  if (isSaving) return
  if (state.character && state.character !== prevState.character && !state.isDirty) {
    useCharacterStore.setState({ isDirty: true })
  }
})

// Auto-save: interval-based, saves every 60 seconds if dirty
let autoSaveInterval: ReturnType<typeof setInterval> | null = null

function startAutoSave(): void {
  if (autoSaveInterval) return
  autoSaveInterval = setInterval(async () => {
    const { character, isDirty, saveStatus } = useCharacterStore.getState()
    if (character && isDirty && saveStatus !== 'saving') {
      dbg('char', 'auto-save: TRIGGERED')
      try {
        isSaving = true
        useCharacterStore.setState({ saveStatus: 'saving', saveError: null })
        const updated = { ...character, updatedAt: new Date().toISOString() }
        const at0 = Date.now()
        await withRetry(() => withTimeout(api.saveCharacter(updated), 6000), { retries: 1 })
        dbg('char', `auto-save: OK (${Date.now() - at0}ms)`)
        useCharacterStore.setState({ isDirty: false, saveStatus: 'saved', saveError: null, character: updated })
        isSaving = false
        setTimeout(() => {
          const { saveStatus: s } = useCharacterStore.getState()
          if (s === 'saved') useCharacterStore.setState({ saveStatus: 'idle' })
        }, 3000)
      } catch (err) {
        isSaving = false
        dbg('char', 'auto-save: FAILED', err)
        useCharacterStore.setState({
          saveStatus: 'error',
          saveError: err instanceof Error ? err.message : 'Auto-save failed'
        })
      }
    }
  }, 60000)
}

function stopAutoSave(): void {
  if (autoSaveInterval) {
    clearInterval(autoSaveInterval)
    autoSaveInterval = null
  }
}

// Start/stop auto-save based on whether a character is loaded
useCharacterStore.subscribe((state, prevState) => {
  if (state.character && !prevState.character) {
    startAutoSave()
  } else if (!state.character && prevState.character) {
    stopAutoSave()
  }
})

// Safety net: if saveStatus gets stuck at 'saving' for >15 seconds, reset it
// This prevents infinite loading spinners on the save button
let saveStuckTimer: ReturnType<typeof setTimeout> | null = null
useCharacterStore.subscribe((state, prevState) => {
  if (state.saveStatus === 'saving' && prevState.saveStatus !== 'saving') {
    // Started saving — set a watchdog timer
    if (saveStuckTimer) clearTimeout(saveStuckTimer)
    saveStuckTimer = setTimeout(() => {
      const { saveStatus } = useCharacterStore.getState()
      if (saveStatus === 'saving') {
        console.warn('Save stuck for 15 seconds — resetting status')
        isSaving = false
        useCharacterStore.setState({ saveStatus: 'error', saveError: 'Save timed out — please try again' })
      }
    }, 10000)
  } else if (state.saveStatus !== 'saving' && prevState.saveStatus === 'saving') {
    // Save finished — clear the watchdog
    if (saveStuckTimer) {
      clearTimeout(saveStuckTimer)
      saveStuckTimer = null
    }
  }
})
