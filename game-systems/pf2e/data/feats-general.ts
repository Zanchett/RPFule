import { Feat } from '../../../src/types'

export const generalFeats: Feat[] = [
  // ========================
  // Level 1 General Feats
  // ========================
  {
    id: 'adopted-ancestry',
    name: 'Adopted Ancestry',
    type: 'general',
    level: 1,
    description:
      'You were adopted and raised by a family of a different ancestry than your own, or you otherwise grew up surrounded by people of a different ancestry. Choose a common ancestry. You can select ancestry feats from that ancestry as if it were your own.',
  },
  {
    id: 'armor-proficiency',
    name: 'Armor Proficiency',
    type: 'general',
    level: 1,
    description:
      'You become trained in light armor. If you are already trained in light armor, you become trained in medium armor. If you are trained in both, you become trained in heavy armor.',
  },
  {
    id: 'breath-control',
    name: 'Breath Control',
    type: 'general',
    level: 1,
    description:
      'You have incredible breath control, which grants you advantages when living in hazardous atmospheres. You can hold your breath for 25 times as long as usual before suffocating. You gain a +1 circumstance bonus to saving throws against inhaled threats, such as inhaled poisons, and if you roll a success on such a saving throw, you get a critical success instead.',
  },
  {
    id: 'canny-acumen',
    name: 'Canny Acumen',
    type: 'general',
    level: 1,
    description:
      'Your avoidance or observation is beyond the norm. Choose Fortitude saves, Reflex saves, Will saves, or Perception. You become an expert in your choice. At 17th level, you become a master in your choice.',
  },
  {
    id: 'diehard',
    name: 'Diehard',
    type: 'general',
    level: 1,
    description:
      'It takes more to kill you than most. You die at dying 5 instead of dying 4.',
  },
  {
    id: 'fast-recovery',
    name: 'Fast Recovery',
    type: 'general',
    level: 1,
    description:
      'Your body quickly bounces back from afflictions. You regain twice as many Hit Points from resting. Each time you succeed at a Fortitude save against an ongoing disease or poison, you reduce its stage by 2 instead of 1.',
    prerequisites: 'Constitution 14',
  },
  {
    id: 'feather-step',
    name: 'Feather Step',
    type: 'general',
    level: 1,
    description:
      'You step carefully and lightly. When you Step into difficult terrain, your movement is not reduced.',
    prerequisites: 'Dexterity 14',
  },
  {
    id: 'fleet',
    name: 'Fleet',
    type: 'general',
    level: 1,
    description:
      'You move more quickly on foot. Your Speed increases by 5 feet.',
  },
  {
    id: 'incredible-initiative',
    name: 'Incredible Initiative',
    type: 'general',
    level: 1,
    description:
      'You react more quickly than others. You gain a +2 circumstance bonus to initiative rolls.',
  },
  {
    id: 'ride',
    name: 'Ride',
    type: 'general',
    level: 1,
    description:
      'When you Command an Animal you are mounted on to take a move action, you automatically succeed instead of needing to attempt a check. Any animal you are mounted on acts on your turn, not its own. You can still prepare to Command the Animal on your mount at a later point during your turn if you wish.',
  },
  {
    id: 'shield-block',
    name: 'Shield Block',
    type: 'general',
    level: 1,
    description:
      'You snap your shield in place to deflect a blow. Your shield prevents you from taking an amount of damage up to the shield\'s Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield.',
  },
  {
    id: 'toughness',
    name: 'Toughness',
    type: 'general',
    level: 1,
    description:
      'You can withstand more punishment than most before succumbing. Increase your maximum Hit Points by your level. The DC of recovery checks is equal to 9 + your dying condition value.',
  },
  {
    id: 'weapon-proficiency',
    name: 'Weapon Proficiency',
    type: 'general',
    level: 1,
    description:
      'You become trained in all simple weapons. If you are already trained in all simple weapons, you become trained in all martial weapons. If you are already trained in all martial weapons, you choose one advanced weapon and become trained in that weapon.',
  },
  // ========================
  // Level 3 General Feats
  // ========================
  {
    id: 'ancestral-paragon',
    name: 'Ancestral Paragon',
    type: 'general',
    level: 3,
    description:
      'Whether through instinct, study, or magic, you feel a deeper connection to your ancestry. You gain a 1st-level ancestry feat.',
  },
  {
    id: 'general-training',
    name: 'General Training',
    type: 'general',
    level: 3,
    description:
      'Your adaptability manifests in your mastery of a range of useful abilities. You gain a 1st-level general feat. You must meet the feat\'s prerequisites.',
  },
  {
    id: 'untrained-improvisation',
    name: 'Untrained Improvisation',
    type: 'general',
    level: 3,
    description:
      'You have learned how to handle situations even when you lack any training. Your proficiency bonus to untrained skill checks is equal to half your level instead of +0. If you are 7th level or higher, the bonus equals your full level instead.',
  },
  // ========================
  // Level 7 General Feats
  // ========================
  {
    id: 'expeditious-search',
    name: 'Expeditious Search',
    type: 'general',
    level: 7,
    description:
      'You have a system that allows you to search at great speed. You can Search a 10-foot-by-10-foot area in a single action instead of taking an Exploration activity. If you are a master in Perception, you can Search a 20-foot-by-20-foot area in a single action.',
    prerequisites: 'master in Perception',
  },
  {
    id: 'incredible-investiture',
    name: 'Incredible Investiture',
    type: 'general',
    level: 7,
    description:
      'You have an incredible ability to invest more magic items. You can invest up to 12 magic items instead of the normal limit of 10.',
    prerequisites: 'Charisma 16',
  },
  {
    id: 'pick-up-the-pace',
    name: 'Pick Up the Pace',
    type: 'general',
    level: 7,
    description:
      'You lead by example, increasing your allies\' overland Speed. When Hustling in a group during exploration, your group can Hustle for as long as the member with the second-lowest Constitution modifier could Hustle alone.',
    prerequisites: 'Constitution 14',
  },
  {
    id: 'skitter',
    name: 'Skitter',
    type: 'general',
    level: 7,
    description:
      'You can scurry along the ground to avoid attacks. You can Step 10 feet instead of 5 feet, but only if you end your Step prone. If you are already prone, you can Step 10 feet while remaining prone without needing to stand first.',
    prerequisites: 'Fleet',
  },
  // ========================
  // Level 11 General Feats
  // ========================
  {
    id: 'armor-specialization',
    name: 'Armor Specialization',
    type: 'general',
    level: 11,
    description:
      'You have trained extensively with your armor, unlocking its critical specialization effect. You gain the critical specialization effects of armor you are wearing, provided you have the proficiency rank for it. These effects apply whenever a foe critically fails an attack roll against you while you are wearing the armor.',
    prerequisites: 'trained in at least one type of armor',
  },
  {
    id: 'improved-initiative',
    name: 'Improved Initiative',
    type: 'general',
    level: 11,
    description:
      'You have honed your reflexes to act even more swiftly. Your circumstance bonus from Incredible Initiative increases to +3.',
    prerequisites: 'Incredible Initiative',
  },
  {
    id: 'incredible-movement',
    name: 'Incredible Movement',
    type: 'general',
    level: 11,
    description:
      'Your speed is far beyond that of most. Your Speed increases by 10 feet. This is in addition to any increases from Fleet.',
    prerequisites: 'Fleet',
  },
  // ========================
  // Level 15 General Feats
  // ========================
  {
    id: 'legendary-negotiation',
    name: 'Legendary Negotiation',
    type: 'general',
    level: 15,
    description:
      'You can negotiate incredibly complex deals and broker peace between warring nations. You can attempt to make a Request of a creature that is indifferent or unfriendly to you. You can Demoralize, Make an Impression, or Request during combat encounters as well as social encounters.',
    prerequisites: 'legendary in Diplomacy',
  },
  {
    id: 'legendary-professional',
    name: 'Legendary Professional',
    type: 'general',
    level: 15,
    description:
      'Your fame has spread throughout the lands. You can use Lore-based skill checks to Earn Income at a task level up to your level, even when the task is normally above your level. In addition, when you fail or critically fail an Earn Income check, you earn money as though you had succeeded.',
    prerequisites: 'legendary in Lore',
  },
  {
    id: 'legendary-survivalist',
    name: 'Legendary Survivalist',
    type: 'general',
    level: 15,
    description:
      'You can survive indefinitely without food or water and can endure severe, extreme, and even incredible environmental conditions without taking damage. Your proficiency bonus to Survival checks is never less than your level even when untrained.',
    prerequisites: 'legendary in Survival',
  },
  // ========================
  // Level 19 General Feats
  // ========================
  {
    id: 'true-perception',
    name: 'True Perception',
    type: 'general',
    level: 19,
    description:
      'Your senses are almost supernaturally keen. You gain a +2 circumstance bonus to Perception checks, and you are no longer flat-footed to hidden, undetected, or flanking creatures of your level or lower, or to creatures of your level or lower using surprise attack.',
    prerequisites: 'legendary in Perception',
  },
  {
    id: 'ultimate-flexibility',
    name: 'Ultimate Flexibility',
    type: 'general',
    level: 19,
    description:
      'Your adaptability is truly unmatched. When you gain a general feat from your class or from General Training, you can instead gain any general feat of a level up to the one the granted feat must be.',
  },
]
