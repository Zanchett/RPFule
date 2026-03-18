// ========================
// Core Game System Types
// ========================

export type AbilityId = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'

export const ABILITY_NAMES: Record<AbilityId, string> = {
  str: 'Strength',
  dex: 'Dexterity',
  con: 'Constitution',
  int: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma'
}

export const ALL_ABILITIES: AbilityId[] = ['str', 'dex', 'con', 'int', 'wis', 'cha']

export type ProficiencyRank = 'untrained' | 'trained' | 'expert' | 'master' | 'legendary'

export interface AbilityScores {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

// ========================
// Ancestry & Heritage
// ========================

export interface Heritage {
  id: string
  name: string
  description: string
  benefits: string
}

export interface AncestryFeatSlot {
  level: number
}

export interface Ancestry {
  id: string
  name: string
  description: string
  hp: number
  size: 'Small' | 'Medium' | 'Large'
  speed: number
  abilityBoosts: (AbilityId | 'free')[]
  abilityFlaws: AbilityId[]
  languages: string[]
  traits: string[]
  specialAbilities: string[]
  heritages: Heritage[]
}

// ========================
// Background
// ========================

export interface Background {
  id: string
  name: string
  description: string
  abilityBoosts: (AbilityId | 'free')[]   // usually 1 specific + 1 free
  trainedSkill: string
  trainedLore: string
  skillFeat: string
}

// ========================
// Class
// ========================

export interface GameClass {
  id: string
  name: string
  description: string
  keyAbility: AbilityId[]   // some classes choose from multiple
  hp: number                // HP per level
  perception: ProficiencyRank
  savingThrows: {
    fortitude: ProficiencyRank
    reflex: ProficiencyRank
    will: ProficiencyRank
  }
  skills: {
    trained: string[]        // auto-trained skills
    additionalTrainedCount: number  // "plus INT modifier more"
  }
  attacks: {
    simple: ProficiencyRank
    martial: ProficiencyRank
    unarmed: ProficiencyRank
  }
  defenses: {
    unarmored: ProficiencyRank
    light: ProficiencyRank
    medium: ProficiencyRank
    heavy: ProficiencyRank
  }
  classDC: ProficiencyRank
  features: ClassFeature[]
  isSpellcaster: boolean
  spellcasting?: {
    tradition: 'arcane' | 'divine' | 'occult' | 'primal'
    type: 'prepared' | 'spontaneous'
    cantripsAtLevel1: number
    spellSlotsAtLevel1: number
  }
}

export interface ClassFeature {
  name: string
  level: number
  description: string
}

// ========================
// Feats
// ========================

export type FeatType = 'ancestry' | 'class' | 'general' | 'skill'

export interface Feat {
  id: string
  name: string
  type: FeatType
  level: number
  description: string
  prerequisites?: string
  // For ancestry feats
  ancestryId?: string
  // For class feats
  classId?: string
  // For skill feats
  requiredSkill?: string
  requiredProficiency?: ProficiencyRank
}

export interface FeatFilter {
  type?: FeatType
  ancestryId?: string
  classId?: string
  maxLevel?: number
}

// ========================
// Skills
// ========================

export interface Skill {
  id: string
  name: string
  ability: AbilityId
  description: string
}

// ========================
// Equipment
// ========================

export type EquipmentCategory =
  | 'weapon' | 'armor' | 'shield' | 'gear' | 'kit' | 'tool'
  | 'potion' | 'scroll' | 'wand' | 'consumable' | 'worn' | 'held' | 'talisman'

export interface Equipment {
  id: string
  name: string
  category: EquipmentCategory
  price: number        // in copper pieces (1 gp = 100 cp)
  bulk: number | 'L'   // L = light
  description: string
  // Weapon-specific
  damage?: string
  damageType?: string
  weaponGroup?: string
  traits?: string[]
  range?: number
  // Armor-specific
  acBonus?: number
  dexCap?: number
  checkPenalty?: number
  speedPenalty?: number
  armorStrength?: number
  armorGroup?: string
  // Magic item fields
  itemLevel?: number
  rarity?: 'common' | 'uncommon' | 'rare' | 'unique'
  magical?: boolean
  usage?: string
  activation?: string
  effect?: string
}

// ========================
// Character
// ========================

export interface Character {
  id: string
  gameSystemId: string
  name: string
  level: number

  // Core selections
  ancestryId: string | null
  heritageId: string | null
  backgroundId: string | null
  classId: string | null

  // Ability boosts tracked by source
  abilityBoosts: {
    ancestry: AbilityId[]
    background: AbilityId[]
    class: AbilityId[]
    free: AbilityId[]
  }
  abilityFlaws: {
    ancestry: AbilityId[]
  }
  manualAbilityOverrides: Partial<AbilityScores> | null

  // Skills
  skillTraining: string[]

  // Feats
  selectedFeats: {
    ancestryFeats: string[]
    classFeats: string[]
    generalFeats: string[]
    skillFeats: string[]
  }

  // Equipment
  purchasedEquipment: { itemId: string; quantity: number }[]
  goldRemaining: number

  // Details
  alignment: string
  deity: string
  languages: string[]
  notes: string

  // Campaign
  campaignId: string | null

  // Live Play State
  currentHP: number
  tempHP: number
  xp: number
  heroPoints: number
  conditions: string[]
  spellSlotsUsed: Record<number, number>
  focusPointsUsed: number
  portraitBase64: string
  sessionNotes: string

  // Meta
  createdAt: string
  updatedAt: string
}

// ========================
// Conditions (PF2e)
// ========================

export interface PF2eCondition {
  id: string
  name: string
  description: string
  hasValue: boolean
}

// ========================
// Validation
// ========================

export type ValidationSeverity = 'error' | 'warning' | 'info'

export interface ValidationResult {
  severity: ValidationSeverity
  field: string
  message: string
}

// ========================
// Game System Interface
// ========================

export interface GameSystem {
  id: string
  name: string
  version: string

  // Data providers
  getAncestries(): Ancestry[]
  getClasses(): GameClass[]
  getBackgrounds(): Background[]
  getFeats(filter?: FeatFilter): Feat[]
  getSkills(): Skill[]
  getEquipment(): Equipment[]

  // Rules engine
  calculateAbilityScores(character: Character): AbilityScores
  calculateModifier(score: number): number
  calculateHP(character: Character): number
  calculateAC(character: Character): number
  calculatePerception(character: Character): number
  calculateSavingThrow(character: Character, save: 'fortitude' | 'reflex' | 'will'): number
  validateCharacter(character: Character): ValidationResult[]
  getStartingGold(classId: string | null): number

  // Live play
  getMaxSpellSlots(character: Character): number[]
  getMaxFocusPoints(character: Character): number
  getConditions(): PF2eCondition[]

  // Factory
  createBlankCharacter(id: string): Character
}

// ========================
// Campaign Types
// ========================

export interface Campaign {
  id: string
  name: string
  description: string
  gameSystemId: string
  dmUserId: string
  createdAt: string
  updatedAt: string
}

export interface CampaignMember {
  campaignId: string
  userId: string
  displayName: string
  joinedAt: string
}

// ========================
// Shop Types
// ========================

export interface ShopInventoryItem {
  itemId: string
  stock: number | null       // null = unlimited
  customPrice: number | null // null = use default item price
}

export interface CampaignShop {
  id: string
  campaignId: string
  name: string
  description: string
  isVisible: boolean
  inventory: ShopInventoryItem[]
  createdAt: string
  updatedAt: string
}
