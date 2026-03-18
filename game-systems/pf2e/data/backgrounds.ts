import { Background } from '../../../src/types'

export const backgrounds: Background[] = [
  {
    id: 'acolyte',
    name: 'Acolyte',
    description:
      'You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast doubt on the teachings of your faith and wished to find answers.',
    abilityBoosts: ['int', 'wis', 'free'],
    trainedSkill: 'Religion',
    trainedLore: 'Scribing Lore',
    skillFeat: 'Student of the Canon',
  },
  {
    id: 'artisan',
    name: 'Artisan',
    description:
      'You trained in a particular craft and have since honed your skills through practice and dedication. You might have been an apprentice to a master crafter or a member of a guild.',
    abilityBoosts: ['int', 'str', 'free'],
    trainedSkill: 'Crafting',
    trainedLore: 'Guild Lore',
    skillFeat: 'Specialty Crafting',
  },
  {
    id: 'criminal',
    name: 'Criminal',
    description:
      'As an adult, you were involved in the criminal underworld. You might have been a pickpocket, a smuggler, a burglar, or some other type of criminal.',
    abilityBoosts: ['dex', 'int', 'free'],
    trainedSkill: 'Stealth',
    trainedLore: 'Underworld Lore',
    skillFeat: 'Experienced Smuggler',
  },
  {
    id: 'farmhand',
    name: 'Farmhand',
    description:
      'With a strong back and an understanding of seasonal cycles, you tilled the land and raised livestock. Your upbringing taught you the value of hard work and perseverance.',
    abilityBoosts: ['con', 'wis', 'free'],
    trainedSkill: 'Athletics',
    trainedLore: 'Farming Lore',
    skillFeat: 'Assurance (Athletics)',
  },
  {
    id: 'scholar',
    name: 'Scholar',
    description:
      'You have a knack for learning, and sequestered yourself from the outside world to learn all you could. You read about so many wondrous places and people, and you yearn to learn even more by traveling the world.',
    abilityBoosts: ['int', 'wis', 'free'],
    trainedSkill: 'Arcana, Nature, Occultism, or Religion (choose one)',
    trainedLore: 'Academia Lore',
    skillFeat: 'Assurance (chosen skill)',
  },
  {
    id: 'warrior',
    name: 'Warrior',
    description:
      'In your younger days, you waded into battle as a mercenary, a ## member of a militia or army, or an enforcer for a local noble. You might have wanted to break from the cycle of violence, or you might revel in it.',
    abilityBoosts: ['str', 'con', 'free'],
    trainedSkill: 'Intimidation',
    trainedLore: 'Warfare Lore',
    skillFeat: 'Intimidating Glare',
  },
]
