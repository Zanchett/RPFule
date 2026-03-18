import {
  GameSystem,
  Character,
  AbilityScores,
  Ancestry,
  GameClass,
  Background,
  Feat,
  FeatFilter,
  Skill,
  Equipment,
  ValidationResult,
  PF2eCondition
} from '../../src/types'
import { ancestries } from './data/ancestries'
import { classes } from './data/classes'
import { backgrounds } from './data/backgrounds'
import { feats } from './data/feats'
import { skills } from './data/skills'
import { equipment } from './data/equipment'
import { conditions } from './data/conditions'
import * as rules from './rules'

export const pf2eSystem: GameSystem = {
  id: 'pf2e',
  name: 'Pathfinder 2nd Edition',
  version: '1.0.0',

  getAncestries(): Ancestry[] {
    return ancestries
  },

  getClasses(): GameClass[] {
    return classes
  },

  getBackgrounds(): Background[] {
    return backgrounds
  },

  getFeats(filter?: FeatFilter): Feat[] {
    let result = feats
    if (filter?.type) {
      result = result.filter((f) => f.type === filter.type)
    }
    if (filter?.ancestryId) {
      result = result.filter((f) => !f.ancestryId || f.ancestryId === filter.ancestryId)
    }
    if (filter?.classId) {
      result = result.filter((f) => !f.classId || f.classId === filter.classId)
    }
    if (filter?.maxLevel !== undefined) {
      result = result.filter((f) => f.level <= filter.maxLevel!)
    }
    return result
  },

  getSkills(): Skill[] {
    return skills
  },

  getEquipment(): Equipment[] {
    return equipment
  },

  calculateAbilityScores(character: Character): AbilityScores {
    return rules.calculateAbilityScores(character)
  },

  calculateModifier(score: number): number {
    return rules.calculateModifier(score)
  },

  calculateHP(character: Character): number {
    return rules.calculateHP(character)
  },

  calculateAC(character: Character): number {
    return rules.calculateAC(character)
  },

  calculatePerception(character: Character): number {
    return rules.calculatePerception(character)
  },

  calculateSavingThrow(
    character: Character,
    save: 'fortitude' | 'reflex' | 'will'
  ): number {
    return rules.calculateSavingThrow(character, save)
  },

  validateCharacter(character: Character): ValidationResult[] {
    return rules.validateCharacter(character)
  },

  getStartingGold(classId: string | null): number {
    return rules.getStartingGold(classId)
  },

  getMaxSpellSlots(character: Character): number[] {
    return rules.getMaxSpellSlots(character)
  },

  getMaxFocusPoints(character: Character): number {
    return rules.getMaxFocusPoints(character)
  },

  getConditions(): PF2eCondition[] {
    return conditions
  },

  createBlankCharacter(id: string): Character {
    return rules.createBlankCharacter(id)
  }
}
