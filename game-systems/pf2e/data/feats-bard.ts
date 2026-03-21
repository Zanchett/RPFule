import { Feat } from '../../../src/types'

export const bardFeats: Feat[] = [
  // ========================
  // Level 1 Bard Feats
  // ========================
  {
    id: 'bardic-lore',
    name: 'Bardic Lore',
    type: 'class',
    level: 1,
    classId: 'bard',
    description:
      'Your studies make you informed on every subject. You are trained in Bardic Lore, a special Lore skill that can be used only to Recall Knowledge, but on any topic. If you have legendary proficiency in Occultism, you gain expert proficiency in Bardic Lore, but you can\'t increase your proficiency in Bardic Lore by any other means.',
  },
  {
    id: 'counter-performance',
    name: 'Counter Performance',
    type: 'class',
    level: 1,
    classId: 'bard',
    description:
      'Your performances can counter auditory and visual magic. You gain the counter performance composition spell. Increase the number of Focus Points in your focus pool by 1.',
  },
  {
    id: 'lingering-composition',
    name: 'Lingering Composition',
    type: 'class',
    level: 1,
    classId: 'bard',
    description:
      'You add a flourish to your composition to extend its benefits. If your next action is to cast a cantrip composition, attempt a Performance check. The DC is usually a standard-difficulty DC of a level equal to the highest-level target of your composition, but the GM can assign a different DC based on the circumstances. The effect depends on the result of your check. On a success, the composition lasts 3 rounds. On a failure, the composition lasts 1 round.',
  },
  {
    id: 'martial-performance',
    name: 'Martial Performance',
    type: 'class',
    level: 1,
    classId: 'bard',
    description:
      'Your muse has taught you how to handle weapons with a performer\'s grace. You become trained in all martial weapons. If you are a master in any unarmed attack or simple weapon, you gain expert proficiency in all martial weapons as well.',
  },
  {
    id: 'versatile-performance',
    name: 'Versatile Performance',
    type: 'class',
    level: 1,
    classId: 'bard',
    description:
      'You can rely on the grandeur of your performance rather than ordinary social skills. You can use Performance instead of Diplomacy to Make an Impression, and instead of Intimidation to Demoralize. You can also use an acting Performance instead of Deception to Impersonate.',
  },

  // ========================
  // Level 2 Bard Feats
  // ========================
  {
    id: 'cantrip-expansion-bard',
    name: 'Cantrip Expansion',
    type: 'class',
    level: 2,
    classId: 'bard',
    description:
      'A greater understanding of your magic broadens your range of simple spells. Add two additional cantrips from your spell list to your repertoire.',
  },
  {
    id: 'esoteric-polymath',
    name: 'Esoteric Polymath',
    type: 'class',
    level: 2,
    classId: 'bard',
    description:
      'You keep a book of occult spells, similar to a wizard\'s spellbook, and add one 1st-rank occult spell to it for free. Each day during your daily preparations, you can use the book to swap one of the spells in your repertoire for a spell of the same rank in your book. You can add additional spells to the book by spending time and money to do so.',
    prerequisites: 'Polymath muse',
  },
  {
    id: 'inspire-heroics',
    name: 'Inspire Heroics',
    type: 'class',
    level: 2,
    classId: 'bard',
    description:
      'Your performances inspire even greater deeds in your allies. You learn the inspire heroics metamagic focus spell. Increase the number of Focus Points in your focus pool by 1. While in an encounter, when you cast inspire courage or inspire defense, attempt a Performance check to add an even greater bonus. The DC is the very hard DC for your level.',
    prerequisites: 'Maestro muse, focus pool',
  },
  {
    id: 'multifarious-muse',
    name: 'Multifarious Muse',
    type: 'class',
    level: 2,
    classId: 'bard',
    description:
      'Your muse is not limited to a single type. Select a muse other than the one you chose at 1st level. You gain the 1st-level class feat that muse would have given you, as well as any other benefits of that muse listed in the muse\'s entry that don\'t require a different level.',
  },
  {
    id: 'reach-spell-bard',
    name: 'Reach Spell',
    type: 'class',
    level: 2,
    classId: 'bard',
    description:
      'You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\'s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.',
  },

  // ========================
  // Level 4 Bard Feats
  // ========================
  {
    id: 'inspire-competence',
    name: 'Inspire Competence',
    type: 'class',
    level: 4,
    classId: 'bard',
    description:
      'You learn the inspire competence composition cantrip, which aids your allies\' skill checks. You can attempt a Performance check in place of the ally\'s skill check, and if your result is higher, your ally can use your result instead.',
    prerequisites: 'Maestro muse',
  },
  {
    id: 'loremasters-etude',
    name: "Loremaster's Etude",
    type: 'class',
    level: 4,
    classId: 'bard',
    description:
      'You magically unlock the secrets of a topic. You learn the loremaster\'s etude composition spell. Increase the number of Focus Points in your focus pool by 1.',
    prerequisites: 'Enigma muse, focus pool',
  },
  {
    id: 'melodious-spell',
    name: 'Melodious Spell',
    type: 'class',
    level: 4,
    classId: 'bard',
    description:
      'You weave your spellcasting into your performance. If the next action you use is to Cast a Spell, attempt a Performance check against all observers\' Perception DCs. If your Performance check result is higher than an observer\'s Perception DC, that observer doesn\'t notice that you are Casting a Spell, even though verbal, somatic, and material components are normally noticeable.',
  },
  {
    id: 'triple-time',
    name: 'Triple Time',
    type: 'class',
    level: 4,
    classId: 'bard',
    description:
      'You learn the triple time composition cantrip, which speeds up you and your allies for a round. You can Stride or Step as a free action at the start of your turn.',
  },
  {
    id: 'versatile-signature',
    name: 'Versatile Signature',
    type: 'class',
    level: 4,
    classId: 'bard',
    description:
      'While most bards are limited in their signature spells, your broad experience allows you to cast more freely. Each time you gain a spell slot of a new rank from the bard class, you choose one of your signature spells and increase its signature rank.',
  },

  // ========================
  // Level 6 Bard Feats
  // ========================
  {
    id: 'dirge-of-doom',
    name: 'Dirge of Doom',
    type: 'class',
    level: 6,
    classId: 'bard',
    description:
      'You learn the dirge of doom composition cantrip. Enemies within its area are frightened 1 as long as they remain in the area. They can\'t reduce their frightened value below 1 while within the composition\'s emanation.',
  },
  {
    id: 'harmonize',
    name: 'Harmonize',
    type: 'class',
    level: 6,
    classId: 'bard',
    description:
      'You can perform multiple compositions simultaneously. If your next action is to cast a composition, it doesn\'t end your current composition. You can have two active compositions at once, and each can be sustained independently.',
    prerequisites: 'Maestro muse',
  },
  {
    id: 'steady-spellcasting-bard',
    name: 'Steady Spellcasting',
    type: 'class',
    level: 6,
    classId: 'bard',
    description:
      'You don\'t lose spells easily. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn\'t disrupted.',
  },
  {
    id: 'enigmas-knowledge',
    name: "Enigma's Knowledge",
    type: 'class',
    level: 6,
    classId: 'bard',
    description:
      'Your muse gives you access to knowledge that goes beyond the ordinary. You gain a +1 circumstance bonus to Recall Knowledge checks. If you are a master in the relevant skill, this bonus increases to +2.',
    prerequisites: 'Enigma muse',
  },
  {
    id: 'spell-penetration-bard',
    name: 'Spell Penetration',
    type: 'class',
    level: 6,
    classId: 'bard',
    description:
      'You can break through your enemies\' resistances. If you deal damage to a creature with a spell attack roll, you treat the creature\'s resistance to that damage type as if it were 2 lower for the purpose of determining the damage dealt.',
  },

  // ========================
  // Level 8 Bard Feats
  // ========================
  {
    id: 'allegro',
    name: 'Allegro',
    type: 'class',
    level: 8,
    classId: 'bard',
    description:
      'You learn the allegro composition cantrip, which gives an ally a burst of speed. An ally within 30 feet can use a reaction to Stride up to half their Speed when you cast allegro.',
  },
  {
    id: 'eclectic-skill',
    name: 'Eclectic Skill',
    type: 'class',
    level: 8,
    classId: 'bard',
    description:
      'Your broad experiences have taught you something about everything. You become trained in all skills in which you are untrained. At 13th level, you become an expert in all skills in which you are trained but not expert.',
    prerequisites: 'Polymath muse, master in Occultism',
  },
  {
    id: 'soothing-ballad',
    name: 'Soothing Ballad',
    type: 'class',
    level: 8,
    classId: 'bard',
    description:
      'You soothe your allies\' wounds with a healing melody. You learn the soothing ballad composition spell. Increase the number of Focus Points in your focus pool by 1. Soothing ballad restores Hit Points to you and your allies in an area.',
  },
  {
    id: 'cantrip-expansion-greater-bard',
    name: 'Studious Capacity',
    type: 'class',
    level: 8,
    classId: 'bard',
    description:
      'Your magical studies have granted you wider capacity to hold spells in your repertoire. You can prepare two additional spells each day, each at least 2 ranks lower than the highest-rank spell you can cast.',
  },
  {
    id: 'deep-lore',
    name: 'Deep Lore',
    type: 'class',
    level: 8,
    classId: 'bard',
    description:
      'You have uncovered occult lore from varied sources and can recall it with ease. When you succeed at a check to Recall Knowledge, you gain additional information or context beyond what is normally learned.',
    prerequisites: 'Enigma muse',
  },

  // ========================
  // Level 10 Bard Feats
  // ========================
  {
    id: 'house-of-imaginary-walls',
    name: 'House of Imaginary Walls',
    type: 'class',
    level: 10,
    classId: 'bard',
    description:
      'You can mime a barrier into being. You learn the house of imaginary walls composition cantrip. The composition creates the illusion of an invisible wall in a 5-foot square within 60 feet. Creatures must attempt a Will save to disbelieve the wall in order to pass through it.',
  },
  {
    id: 'quickened-casting-bard',
    name: 'Quickened Casting',
    type: 'class',
    level: 10,
    classId: 'bard',
    description:
      'If your next action is to cast a bard cantrip or a bard spell that is at least 2 ranks lower than the highest-rank bard spell you can cast, reduce the number of actions to cast it by 1 (minimum 1 action). This can only be used once per day.',
  },
  {
    id: 'unusual-composition',
    name: 'Unusual Composition',
    type: 'class',
    level: 10,
    classId: 'bard',
    description:
      'You can cast compositions as a single action instead of their normal number of actions, or as a free action if they normally take a single action. This lets you perform compositions more quickly in combat.',
  },
  {
    id: 'overwhelming-performance',
    name: 'Overwhelming Performance',
    type: 'class',
    level: 10,
    classId: 'bard',
    description:
      'You overwhelm your enemies\' senses with your performance. When you successfully Demoralize a creature using Performance via Versatile Performance, you can apply the frightened condition to all enemies within 30 feet who can observe your performance, not just the target.',
    prerequisites: 'Versatile Performance',
  },
  {
    id: 'energy-fusion',
    name: 'Energy Fusion',
    type: 'class',
    level: 10,
    classId: 'bard',
    description:
      'You blend multiple energy types into a single devastating spell. If your next action is to Cast a Spell that deals energy damage, you can change half the spell\'s damage to a different energy type of your choice.',
  },

  // ========================
  // Level 12 Bard Feats
  // ========================
  {
    id: 'eclectic-polymath',
    name: 'Eclectic Polymath',
    type: 'class',
    level: 12,
    classId: 'bard',
    description:
      'Your studies of arcane traditions have made you knowledgeable in many areas of magic. You can add spells from other traditions to your book from Esoteric Polymath, though they\'re still occult spells when you cast them.',
    prerequisites: 'Esoteric Polymath',
  },
  {
    id: 'inspirational-focus',
    name: 'Inspirational Focus',
    type: 'class',
    level: 12,
    classId: 'bard',
    description:
      'Your connection to your muse has granted you unusual focus. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1.',
  },
  {
    id: 'shared-synesthesia',
    name: 'Shared Synesthesia',
    type: 'class',
    level: 12,
    classId: 'bard',
    description:
      'You can share your unique perceptions with others. You gain the synesthesia spell as an occult innate spell, which you can cast once per day. When you cast it, you can target an ally instead of an enemy, granting them synesthetic perceptions that give a +2 status bonus to Perception checks.',
  },
  {
    id: 'ode-to-ouroboros',
    name: 'Ode to Ouroboros',
    type: 'class',
    level: 12,
    classId: 'bard',
    description:
      'Your song cycles through the eternal, bringing back allies from death\'s door. You learn the ode to ouroboros composition spell. Increase the number of Focus Points in your focus pool by 1. When you cast ode to ouroboros, a dying ally within 30 feet stabilizes and regains 1 Hit Point.',
  },
  {
    id: 'knowing-mentor',
    name: 'Knowing Mentor',
    type: 'class',
    level: 12,
    classId: 'bard',
    description:
      'You always have the right knowledge at the right time to help your allies. When an ally within 60 feet attempts a skill check to Recall Knowledge and fails, you can use a reaction to attempt the same check. If you succeed, your ally uses your result instead.',
    prerequisites: 'Enigma muse',
  },

  // ========================
  // Level 14 Bard Feats
  // ========================
  {
    id: 'effortless-concentration-bard',
    name: 'Effortless Concentration',
    type: 'class',
    level: 14,
    classId: 'bard',
    description:
      'You maintain a spell with hardly a thought. At the start of each of your turns, you automatically gain the benefit of the Sustain a Spell action for one spell you have active, without using an action. You still must use the Sustain a Spell action if you want to sustain a second spell.',
  },
  {
    id: 'greater-soothing-ballad',
    name: 'Greater Soothing Ballad',
    type: 'class',
    level: 14,
    classId: 'bard',
    description:
      'Your soothing ballad is even more restorative. When you cast soothing ballad, it now also removes the frightened and sickened conditions from allies within the area in addition to healing them.',
    prerequisites: 'Soothing Ballad',
  },
  {
    id: 'allegro-greater',
    name: 'Allegro (Greater)',
    type: 'class',
    level: 14,
    classId: 'bard',
    description:
      'You can quicken your allies further with your allegro. When you cast allegro, the affected ally can Stride up to their full Speed instead of half, and they gain a +10-foot status bonus to their Speed until the end of their next turn.',
    prerequisites: 'Allegro',
  },
  {
    id: 'true-hypercognition',
    name: 'True Hypercognition',
    type: 'class',
    level: 14,
    classId: 'bard',
    description:
      'Your mind works at incredible speed. You can use up to five Recall Knowledge actions in a single action, each on a different topic. If you have Bardic Lore, you can use it for any of these checks.',
    prerequisites: 'Enigma muse',
  },
  {
    id: 'impeccable-flow',
    name: 'Impeccable Flow',
    type: 'class',
    level: 14,
    classId: 'bard',
    description:
      'You move with a performance-like grace even in combat. You gain a +2 circumstance bonus to AC against reactions triggered by your movement. When you Stride, you can move through the space of enemies who are flat-footed to you.',
  },

  // ========================
  // Level 16 Bard Feats
  // ========================
  {
    id: 'eternal-composition',
    name: 'Eternal Composition',
    type: 'class',
    level: 16,
    classId: 'bard',
    description:
      'Your compositions never waver. The duration of your cantrip compositions becomes unlimited, even without Lingering Composition, though they still end if you become unconscious. When using Lingering Composition, a success is treated as a critical success.',
    prerequisites: 'Lingering Composition',
  },
  {
    id: 'symphony-of-the-muse',
    name: 'Symphony of the Muse',
    type: 'class',
    level: 16,
    classId: 'bard',
    description:
      'You can perform an opus worthy of the gods. You can have three composition spells active at once, instead of only one or two. In addition, when you cast a new composition, you choose which of your active compositions ends.',
    prerequisites: 'Harmonize',
  },
  {
    id: 'resounding-finale',
    name: 'Resounding Finale',
    type: 'class',
    level: 16,
    classId: 'bard',
    description:
      'You end your composition with a dramatic flourish that creates a powerful effect. When you end a composition spell, you can create a shockwave of sonic energy in a 30-foot emanation that deals 6d6 sonic damage to enemies (basic Fortitude save).',
  },
  {
    id: 'deep-focus',
    name: 'Deep Focus',
    type: 'class',
    level: 16,
    classId: 'bard',
    description:
      'Your devotion to your muse has granted you a deep wellspring of focus. If you have spent at least 3 Focus Points since the last time you Refocused, you recover 3 Focus Points when you Refocus instead of 1.',
    prerequisites: 'Inspirational Focus',
  },
  {
    id: 'polymaths-trove',
    name: "Polymath's Trove",
    type: 'class',
    level: 16,
    classId: 'bard',
    description:
      'Your book from Esoteric Polymath has grown into a treasure trove of magical knowledge. You can swap out up to three spells during your daily preparations instead of only one, and you can add spells to the book in half the normal time.',
    prerequisites: 'Esoteric Polymath',
  },

  // ========================
  // Level 18 Bard Feats
  // ========================
  {
    id: 'fatal-aria',
    name: 'Fatal Aria',
    type: 'class',
    level: 18,
    classId: 'bard',
    description:
      'Your compositions can be deadly. You learn the fatal aria composition spell. Increase the number of Focus Points in your focus pool by 1. A target that has fewer Hit Points than a certain threshold when you cast this spell is slain instantly; otherwise, it takes devastating sonic damage.',
  },
  {
    id: 'pied-piping',
    name: 'Pied Piping',
    type: 'class',
    level: 18,
    classId: 'bard',
    description:
      'Your performance compels creatures to follow you. When you perform a composition, enemies within 30 feet who fail a Will save are fascinated and compelled to follow you if you move. The fascinated condition ends if you stop performing, if you or your allies take hostile action against the creature, or at the end of your next turn.',
  },
  {
    id: 'house-of-imaginary-walls-greater',
    name: 'House of Imaginary Walls (Greater)',
    type: 'class',
    level: 18,
    classId: 'bard',
    description:
      'Your mimed barriers are incredibly resilient. When you cast house of imaginary walls, the wall can span up to four 5-foot squares and has the hardness and Hit Points of a wall of force. Creatures that fail their Will save to disbelieve take force damage when attempting to pass through.',
    prerequisites: 'House of Imaginary Walls',
  },
  {
    id: 'wandering-minstrel',
    name: 'Wandering Minstrel',
    type: 'class',
    level: 18,
    classId: 'bard',
    description:
      'You have traveled far and wide, gathering tales and songs from every land. You gain a +2 circumstance bonus to all Performance checks. When you use Versatile Performance, you treat your proficiency rank as one step higher for the purposes of those checks.',
    prerequisites: 'Versatile Performance',
  },
  {
    id: 'master-spellcaster-bard',
    name: 'Spell Mastery',
    type: 'class',
    level: 18,
    classId: 'bard',
    description:
      'You have reached the pinnacle of occult spellcasting. You gain two additional spell slots of your two highest spell ranks. You can use these slots for any occult spells in your repertoire.',
  },

  // ========================
  // Level 20 Bard Feats
  // ========================
  {
    id: 'perfect-encore',
    name: 'Perfect Encore',
    type: 'class',
    level: 20,
    classId: 'bard',
    description:
      'You develop a magnum opus, a performance of unsurpassed excellence. You gain an additional 10th-rank spell slot. When you Refocus, you also gain the benefits of one of your compositions without needing to cast it.',
  },
  {
    id: 'symphony-of-the-unfettered',
    name: 'Symphony of the Unfettered',
    type: 'class',
    level: 20,
    classId: 'bard',
    description:
      'Your performance can free allies from nearly any restriction. When you perform a composition, allies within 30 feet can attempt a new saving throw against every condition currently affecting them that was caused by a spell. On a success, the condition ends.',
  },
  {
    id: 'peerless-naturalist',
    name: 'Peerless Naturalist',
    type: 'class',
    level: 20,
    classId: 'bard',
    description:
      'Your performance has become so natural that it requires almost no effort. Your composition cantrips no longer require actions to cast; you can perform them as free actions. In addition, any time you roll a critical failure on a Performance check, you get a failure instead.',
  },
  {
    id: 'discordant-voice',
    name: 'Discordant Voice',
    type: 'class',
    level: 20,
    classId: 'bard',
    description:
      'Your performances take on a supernatural resonance that disrupts your enemies. Whenever you cast a composition cantrip, all enemies within its area or within 30 feet of you take 1d6 sonic damage each round the composition persists. This increases to 2d6 if you are legendary in Performance.',
  },
  {
    id: 'ultimate-polymath',
    name: 'Ultimate Polymath',
    type: 'class',
    level: 20,
    classId: 'bard',
    description:
      'You have transcended the limits of your spellcasting tradition. You can add spells from any spell list to your repertoire through Esoteric Polymath, and they remain occult spells when you cast them. You can swap up to five spells during your daily preparations.',
    prerequisites: 'Eclectic Polymath',
  },
]
