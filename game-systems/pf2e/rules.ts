import {
  Character,
  AbilityScores,
  AbilityId,
  ALL_ABILITIES,
  ValidationResult,
  ProficiencyRank
} from '../../src/types'
import { ancestries } from './data/ancestries'
import { classes } from './data/classes'
import { backgrounds } from './data/backgrounds'

const BASE_ABILITY_SCORE = 10

export function calculateAbilityScores(character: Character): AbilityScores {
  // If manual overrides exist, use them
  if (character.manualAbilityOverrides) {
    return {
      str: character.manualAbilityOverrides.str ?? BASE_ABILITY_SCORE,
      dex: character.manualAbilityOverrides.dex ?? BASE_ABILITY_SCORE,
      con: character.manualAbilityOverrides.con ?? BASE_ABILITY_SCORE,
      int: character.manualAbilityOverrides.int ?? BASE_ABILITY_SCORE,
      wis: character.manualAbilityOverrides.wis ?? BASE_ABILITY_SCORE,
      cha: character.manualAbilityOverrides.cha ?? BASE_ABILITY_SCORE
    }
  }

  const scores: AbilityScores = {
    str: BASE_ABILITY_SCORE,
    dex: BASE_ABILITY_SCORE,
    con: BASE_ABILITY_SCORE,
    int: BASE_ABILITY_SCORE,
    wis: BASE_ABILITY_SCORE,
    cha: BASE_ABILITY_SCORE
  }

  // Apply ancestry flaws (-2 each)
  for (const flaw of character.abilityFlaws.ancestry) {
    scores[flaw] -= 2
  }

  // Apply boosts (+2 each, capped at 18 for creation)
  const allBoosts = [
    ...character.abilityBoosts.ancestry,
    ...character.abilityBoosts.background,
    ...character.abilityBoosts.class,
    ...character.abilityBoosts.free
  ]

  for (const boost of allBoosts) {
    if (scores[boost] < 18) {
      scores[boost] += 2
    }
  }

  return scores
}

export function calculateModifier(score: number): number {
  return Math.floor((score - 10) / 2)
}

export function proficiencyBonus(rank: ProficiencyRank, level: number): number {
  switch (rank) {
    case 'untrained':
      return 0
    case 'trained':
      return 2 + level
    case 'expert':
      return 4 + level
    case 'master':
      return 6 + level
    case 'legendary':
      return 8 + level
  }
}

export function calculateHP(character: Character): number {
  const ancestry = ancestries.find((a) => a.id === character.ancestryId)
  const cls = classes.find((c) => c.id === character.classId)
  const scores = calculateAbilityScores(character)
  const conMod = calculateModifier(scores.con)

  const ancestryHP = ancestry?.hp ?? 0
  const classHP = cls?.hp ?? 0

  // PF2e formula: ancestryHP + (classHP + conMod) * level
  return ancestryHP + (classHP + conMod) * character.level
}

export function calculateAC(character: Character): number {
  const scores = calculateAbilityScores(character)
  const dexMod = calculateModifier(scores.dex)
  const cls = classes.find((c) => c.id === character.classId)

  // Base AC = 10 + DEX modifier + proficiency
  let armorProf: ProficiencyRank = 'untrained'
  if (cls) {
    // Use best armor proficiency the character is trained in
    // For simplicity, use unarmored for now (equipment tab will adjust)
    armorProf = cls.defenses.unarmored
  }

  return 10 + dexMod + proficiencyBonus(armorProf, character.level)
}

export function calculatePerception(character: Character): number {
  const scores = calculateAbilityScores(character)
  const wisMod = calculateModifier(scores.wis)
  const cls = classes.find((c) => c.id === character.classId)

  const percProf = cls?.perception ?? 'untrained'
  return wisMod + proficiencyBonus(percProf, character.level)
}

export function calculateSavingThrow(
  character: Character,
  save: 'fortitude' | 'reflex' | 'will'
): number {
  const scores = calculateAbilityScores(character)
  const cls = classes.find((c) => c.id === character.classId)

  const abilityMap: Record<string, AbilityId> = {
    fortitude: 'con',
    reflex: 'dex',
    will: 'wis'
  }

  const abilityMod = calculateModifier(scores[abilityMap[save]])
  const saveProf = cls?.savingThrows[save] ?? 'untrained'
  return abilityMod + proficiencyBonus(saveProf, character.level)
}

export function getStartingGold(classId: string | null): number {
  // PF2e starting gold is 15 gp = 1500 cp
  return 1500
}

export function getMaxSpellSlots(character: Character): number[] {
  const cls = classes.find((c) => c.id === character.classId)
  if (!cls?.isSpellcaster) return []
  // Inline slot table for standard full casters
  const table: Record<number, number[]> = {
    1: [2], 2: [3], 3: [3, 2], 4: [3, 3], 5: [3, 3, 2],
    6: [3, 3, 3], 7: [3, 3, 3, 2], 8: [3, 3, 3, 3], 9: [3, 3, 3, 3, 2],
    10: [3, 3, 3, 3, 3], 11: [3, 3, 3, 3, 3, 2], 12: [3, 3, 3, 3, 3, 3],
    13: [3, 3, 3, 3, 3, 3, 2], 14: [3, 3, 3, 3, 3, 3, 3],
    15: [3, 3, 3, 3, 3, 3, 3, 2], 16: [3, 3, 3, 3, 3, 3, 3, 3],
    17: [3, 3, 3, 3, 3, 3, 3, 3, 2], 18: [3, 3, 3, 3, 3, 3, 3, 3, 3],
    19: [3, 3, 3, 3, 3, 3, 3, 3, 3, 1], 20: [3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
  }
  return table[character.level] ?? []
}

export function getMaxFocusPoints(character: Character): number {
  const cls = classes.find((c) => c.id === character.classId)
  if (!cls?.isSpellcaster) return 0
  // Most casters start with 1 focus point; can gain up to 3 via feats
  return 1
}

export function validateCharacter(character: Character): ValidationResult[] {
  const results: ValidationResult[] = []
  const ancestry = ancestries.find((a) => a.id === character.ancestryId)
  const cls = classes.find((c) => c.id === character.classId)
  const bg = backgrounds.find((b) => b.id === character.backgroundId)

  // Name check
  if (!character.name || character.name.trim() === '') {
    results.push({
      severity: 'warning',
      field: 'name',
      message: 'Character needs a name'
    })
  }

  // Ancestry check
  if (!character.ancestryId) {
    results.push({
      severity: 'warning',
      field: 'ancestry',
      message: 'No ancestry selected'
    })
  }

  // Heritage check
  if (character.ancestryId && !character.heritageId) {
    results.push({
      severity: 'warning',
      field: 'heritage',
      message: 'No heritage selected for your ancestry'
    })
  }

  // Background check
  if (!character.backgroundId) {
    results.push({
      severity: 'warning',
      field: 'background',
      message: 'No background selected'
    })
  }

  // Class check
  if (!character.classId) {
    results.push({
      severity: 'warning',
      field: 'class',
      message: 'No class selected'
    })
  }

  // Ancestry boosts validation
  if (ancestry) {
    const expectedFixedBoosts = ancestry.abilityBoosts.filter((b) => b !== 'free').length
    const expectedFreeBoosts = ancestry.abilityBoosts.filter((b) => b === 'free').length
    const totalExpected = expectedFixedBoosts + expectedFreeBoosts

    if (character.abilityBoosts.ancestry.length < totalExpected) {
      results.push({
        severity: 'warning',
        field: 'abilityBoosts',
        message: `Ancestry grants ${totalExpected} ability boost(s), you've selected ${character.abilityBoosts.ancestry.length}`
      })
    }
  }

  // Background boosts validation
  if (bg) {
    const specificBoosts = bg.abilityBoosts.filter((b) => b !== 'free')
    const freeBoosts = bg.abilityBoosts.filter((b) => b === 'free')
    const expectedBgBoosts = (specificBoosts.length > 0 ? 1 : 0) + freeBoosts.length
    if (character.abilityBoosts.background.length < expectedBgBoosts) {
      results.push({
        severity: 'warning',
        field: 'abilityBoosts',
        message: `Background grants ${expectedBgBoosts} ability boost(s), you've selected ${character.abilityBoosts.background.length}`
      })
    }
  }

  // Class key ability
  if (cls && character.abilityBoosts.class.length === 0) {
    results.push({
      severity: 'warning',
      field: 'abilityBoosts',
      message: 'No key ability boost selected for your class'
    })
  }

  // Free boosts (should be 4)
  if (character.abilityBoosts.free.length < 4) {
    results.push({
      severity: 'warning',
      field: 'abilityBoosts',
      message: `You have ${4 - character.abilityBoosts.free.length} free ability boost(s) remaining`
    })
  }

  // Check for duplicate boosts within same category
  const categories = ['ancestry', 'background', 'class', 'free'] as const
  for (const cat of categories) {
    const boosts = character.abilityBoosts[cat]
    const unique = new Set(boosts)
    if (unique.size < boosts.length) {
      results.push({
        severity: 'error',
        field: 'abilityBoosts',
        message: `You can't boost the same ability twice in the ${cat} step`
      })
    }
  }

  // Skill training validation
  if (cls) {
    const scores = calculateAbilityScores(character)
    const intMod = calculateModifier(scores.int)
    const maxTrainedSkills = cls.skills.additionalTrainedCount + Math.max(0, intMod)

    if (character.skillTraining.length > maxTrainedSkills + cls.skills.trained.length) {
      results.push({
        severity: 'error',
        field: 'skills',
        message: `Too many trained skills selected. Maximum: ${maxTrainedSkills + cls.skills.trained.length}`
      })
    }
  }

  // Feat selection warnings
  if (character.selectedFeats.ancestryFeats.length === 0) {
    results.push({
      severity: 'warning',
      field: 'feats',
      message: 'No ancestry feat selected'
    })
  }

  if (character.selectedFeats.classFeats.length === 0 && cls) {
    // Not all classes get a feat at level 1, but Fighter does
    if (cls.id === 'fighter' || cls.id === 'rogue') {
      results.push({
        severity: 'warning',
        field: 'feats',
        message: 'No class feat selected'
      })
    }
  }

  return results
}

export function createBlankCharacter(id: string): Character {
  return {
    id,
    gameSystemId: 'pf2e',
    name: '',
    level: 1,
    ancestryId: null,
    heritageId: null,
    backgroundId: null,
    classId: null,
    abilityBoosts: {
      ancestry: [],
      background: [],
      class: [],
      free: []
    },
    abilityFlaws: {
      ancestry: []
    },
    manualAbilityOverrides: null,
    skillTraining: [],
    selectedFeats: {
      ancestryFeats: [],
      classFeats: [],
      generalFeats: [],
      skillFeats: []
    },
    purchasedEquipment: [],
    goldRemaining: 1500,
    alignment: '',
    deity: '',
    languages: [],
    notes: '',
    // Campaign
    campaignId: null,
    // Live play state
    currentHP: 0,
    tempHP: 0,
    xp: 0,
    heroPoints: 1,
    conditions: [],
    spellSlotsUsed: {},
    focusPointsUsed: 0,
    portraitBase64: '',
    sessionNotes: '',
    // Meta
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
}
