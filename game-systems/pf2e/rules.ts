import {
  Character,
  AbilityScores,
  AbilityId,
  ALL_ABILITIES,
  ValidationResult,
  ProficiencyRank,
  GameClass,
  Feat
} from '../../src/types'
import { ancestries } from './data/ancestries'
import { classes } from './data/classes'
import { backgrounds } from './data/backgrounds'

const BASE_ABILITY_SCORE = 10

// ── PF2e Advancement Constants (universal for all classes) ──
export const ANCESTRY_FEAT_LEVELS = [1, 5, 9, 13, 17]
export const ABILITY_BOOST_LEVELS = [5, 10, 15, 20] as const

// Default advancement for classes that don't define one
const DEFAULT_ADVANCEMENT = {
  classFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  skillFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  generalFeatLevels: [3, 7, 11, 15, 19],
  skillIncreaseLevels: [3, 5, 7, 9, 11, 13, 15, 17, 19],
}

export function getAdvancement(cls: GameClass | undefined) {
  return cls?.advancement ?? DEFAULT_ADVANCEMENT
}

export function countSlotsAtLevel(levels: number[], characterLevel: number): number {
  return levels.filter(l => l <= characterLevel).length
}

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

  // Apply creation boosts (+2 each, capped at 18 for creation phase)
  const creationBoosts = [
    ...character.abilityBoosts.ancestry,
    ...character.abilityBoosts.background,
    ...character.abilityBoosts.class,
    ...character.abilityBoosts.free
  ]

  for (const boost of creationBoosts) {
    if (scores[boost] < 18) {
      scores[boost] += 2
    }
  }

  // Apply level-up boosts (PF2e partial boost rule: +1 if score >= 18, +2 otherwise)
  const levelUpBoosts = [
    ...(character.abilityBoosts.level5 ?? []),
    ...(character.abilityBoosts.level10 ?? []),
    ...(character.abilityBoosts.level15 ?? []),
    ...(character.abilityBoosts.level20 ?? []),
  ]

  for (const boost of levelUpBoosts) {
    if (scores[boost] >= 18) {
      scores[boost] += 1 // PF2e partial boost above 18
    } else {
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

  // Feat selection warnings — dynamic slot counts from advancement table
  const adv = getAdvancement(cls)
  const maxAncestryFeats = countSlotsAtLevel(ANCESTRY_FEAT_LEVELS, character.level)
  const maxClassFeats = countSlotsAtLevel(adv.classFeatLevels, character.level)
  const maxGeneralFeats = countSlotsAtLevel(adv.generalFeatLevels, character.level)
  const maxSkillFeats = countSlotsAtLevel(adv.skillFeatLevels, character.level)
    + (character.backgroundId ? 1 : 0) // background grants 1 skill feat

  if (character.selectedFeats.ancestryFeats.length < maxAncestryFeats) {
    const remaining = maxAncestryFeats - character.selectedFeats.ancestryFeats.length
    results.push({
      severity: 'warning',
      field: 'feats',
      message: `${remaining} ancestry feat slot${remaining > 1 ? 's' : ''} remaining`
    })
  }

  if (maxClassFeats > 0 && character.selectedFeats.classFeats.length < maxClassFeats && cls) {
    const remaining = maxClassFeats - character.selectedFeats.classFeats.length
    results.push({
      severity: 'warning',
      field: 'feats',
      message: `${remaining} class feat slot${remaining > 1 ? 's' : ''} remaining`
    })
  }

  if (maxGeneralFeats > 0 && character.selectedFeats.generalFeats.length < maxGeneralFeats) {
    const remaining = maxGeneralFeats - character.selectedFeats.generalFeats.length
    results.push({
      severity: 'warning',
      field: 'feats',
      message: `${remaining} general feat slot${remaining > 1 ? 's' : ''} remaining`
    })
  }

  if (maxSkillFeats > 0 && character.selectedFeats.skillFeats.length < maxSkillFeats) {
    const remaining = maxSkillFeats - character.selectedFeats.skillFeats.length
    results.push({
      severity: 'warning',
      field: 'feats',
      message: `${remaining} skill feat slot${remaining > 1 ? 's' : ''} remaining`
    })
  }

  // Level-up ability boost warnings
  for (const lvl of ABILITY_BOOST_LEVELS) {
    if (character.level >= lvl) {
      const key = `level${lvl}` as keyof typeof character.abilityBoosts
      const boosts = character.abilityBoosts[key] ?? []
      if (boosts.length < 4) {
        results.push({
          severity: 'warning',
          field: 'abilityBoosts',
          message: `${4 - boosts.length} ability boost${4 - boosts.length > 1 ? 's' : ''} remaining at level ${lvl}`
        })
      }
    }
  }

  // Kineticist element validation
  if (cls?.id === 'kineticist') {
    const elements = character.kineticistElements ?? []
    if (elements.length === 0) {
      results.push({
        severity: 'warning',
        field: 'class',
        message: 'No kinetic elements selected — choose at least one element'
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
      free: [],
      level5: [],
      level10: [],
      level15: [],
      level20: [],
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
    kineticistElements: [],
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

// ── Feat Prerequisite Checking ──

const ABILITY_NAME_TO_ID: Record<string, AbilityId> = {
  'Strength': 'str', 'Dexterity': 'dex', 'Constitution': 'con',
  'Intelligence': 'int', 'Wisdom': 'wis', 'Charisma': 'cha'
}

const ELEMENT_NAMES = ['Air', 'Earth', 'Fire', 'Metal', 'Water', 'Wood']

const PROF_RANKS: ProficiencyRank[] = ['untrained', 'trained', 'expert', 'master', 'legendary']

function profRankAtLeast(have: ProficiencyRank, need: ProficiencyRank): boolean {
  return PROF_RANKS.indexOf(have) >= PROF_RANKS.indexOf(need)
}

/**
 * Check whether a single prerequisite clause is satisfied.
 * Returns { met: true } if satisfied or unparseable (never wrongly lock).
 */
function checkSinglePrereq(
  prereq: string,
  character: Character,
  allFeats: Feat[],
  scores: AbilityScores
): { met: boolean; reason?: string } {
  const p = prereq.trim()
  if (!p) return { met: true }

  // 1. Element prerequisite: "Air element", "Fire element", etc.
  const singleElementMatch = p.match(/^(Air|Earth|Fire|Metal|Water|Wood) element$/)
  if (singleElementMatch) {
    const el = singleElementMatch[1].toLowerCase()
    const has = (character.kineticistElements ?? []).includes(el)
    return has ? { met: true } : { met: false, reason: `Requires ${p}` }
  }

  // 2. Multi-element: "Air and Fire elements", "Earth and Water elements"
  const multiElementMatch = p.match(/^(Air|Earth|Fire|Metal|Water|Wood) and (Air|Earth|Fire|Metal|Water|Wood) elements$/)
  if (multiElementMatch) {
    const els = character.kineticistElements ?? []
    const has1 = els.includes(multiElementMatch[1].toLowerCase())
    const has2 = els.includes(multiElementMatch[2].toLowerCase())
    if (has1 && has2) return { met: true }
    const missing: string[] = []
    if (!has1) missing.push(multiElementMatch[1])
    if (!has2) missing.push(multiElementMatch[2])
    return { met: false, reason: `Requires ${missing.join(' and ')} element${missing.length > 1 ? 's' : ''}` }
  }

  // 3. "Two or more kinetic elements"
  if (p === 'Two or more kinetic elements') {
    const has = (character.kineticistElements ?? []).length >= 2
    return has ? { met: true } : { met: false, reason: 'Requires two or more kinetic elements' }
  }

  // 4. Ability score: "Constitution 14", "Dexterity 14", "Charisma 16"
  const abilityMatch = p.match(/^(Strength|Dexterity|Constitution|Intelligence|Wisdom|Charisma)\s+(\d+)$/)
  if (abilityMatch) {
    const abilityId = ABILITY_NAME_TO_ID[abilityMatch[1]]
    const required = parseInt(abilityMatch[2], 10)
    const has = scores[abilityId] >= required
    return has ? { met: true } : { met: false, reason: `Requires ${p} (have ${scores[abilityId]})` }
  }

  // 5. Proficiency: "trained in Crafting", "master in Perception", "legendary in Diplomacy"
  const profMatch = p.match(/^(trained|expert|master|legendary) in (.+)$/)
  if (profMatch) {
    const needRank = profMatch[1] as ProficiencyRank
    const skillOrAbility = profMatch[2]

    // Check Perception (class proficiency)
    if (skillOrAbility === 'Perception') {
      const cls = classes.find(c => c.id === character.classId)
      if (cls && profRankAtLeast(cls.perception, needRank)) return { met: true }
      return { met: false, reason: `Requires ${p}` }
    }

    // For "trained in X" — check if the skill is in skillTraining
    if (needRank === 'trained') {
      // Normalize: skill training stores skill ids in lowercase
      const hasSkill = character.skillTraining.some(s =>
        s.toLowerCase() === skillOrAbility.toLowerCase()
      )
      if (hasSkill) return { met: true }
      // Also check class auto-trained skills
      const cls = classes.find(c => c.id === character.classId)
      if (cls?.skills.trained.some(s => s.toLowerCase() === skillOrAbility.toLowerCase())) {
        return { met: true }
      }
      return { met: false, reason: `Requires ${p}` }
    }

    // For expert/master/legendary proficiency — we can't fully track skill rank progression yet
    // Default to allowing it (don't wrongly lock)
    return { met: true }
  }

  // 6. Feat prerequisite: check if a feat with that name is selected
  //    Match by feat name in allFeats, then check if its id is in selectedFeats
  const matchingFeat = allFeats.find(f => f.name === p)
  if (matchingFeat) {
    const allSelected = [
      ...character.selectedFeats.ancestryFeats,
      ...character.selectedFeats.classFeats,
      ...character.selectedFeats.generalFeats,
      ...character.selectedFeats.skillFeats
    ]
    const has = allSelected.includes(matchingFeat.id)
    return has ? { met: true } : { met: false, reason: `Requires ${p} (not selected)` }
  }

  // 7. Unparseable — default to met (never wrongly lock the player out)
  return { met: true }
}

/**
 * Check all prerequisites for a feat. Handles semicolon-separated and
 * comma-separated lists. Returns { met, reason } where reason describes
 * the first unmet prerequisite.
 */
export function checkFeatPrerequisites(
  feat: Feat,
  character: Character,
  allFeats: Feat[]
): { met: boolean; reason?: string } {
  if (!feat.prerequisites) return { met: true }

  const scores = calculateAbilityScores(character)

  // Split on semicolons first (e.g. "Form Control; Wild Shape")
  // Then also split comma-separated items that aren't part of a feat name
  const parts = feat.prerequisites
    .split(/;\s*/)
    .flatMap(part => {
      // Don't split "trained in Arcana, Nature, Occultism, or Religion" — that's one clause
      if (part.match(/^(trained|expert|master|legendary) in /)) return [part]
      // Don't split "Warden's Boon, Double Prey" — those are separate feat prereqs
      // Only split on ", " when each part looks like a feat name
      return part.split(/,\s*/)
    })

  for (const part of parts) {
    const result = checkSinglePrereq(part, character, allFeats, scores)
    if (!result.met) return result
  }

  return { met: true }
}
