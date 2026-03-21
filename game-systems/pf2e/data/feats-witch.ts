import { Feat } from '../../../src/types'

export const witchFeats: Feat[] = [
  // ========================
  // Level 1 Witch Feats
  // ========================
  {
    id: 'cackle',
    name: 'Cackle',
    type: 'class',
    level: 1,
    classId: 'witch',
    description:
      'You cackle gleefully, Sustaining a Spell as a free action. You can Sustain a Spell that has a sustained duration as a free action instead of using an action, allowing you to use your remaining actions for other purposes. You can use Cackle only once per round.',
  },
  {
    id: 'wortwitch',
    name: 'Wortwitch',
    type: 'class',
    level: 1,
    classId: 'witch',
    description:
      'You have a deep connection to the plants of the natural world. You ignore difficult terrain caused by plants, such as bushes, vines, and undergrowth. Even magical appearance of plants does not impede your movement.',
  },
  {
    id: 'witchs-charge',
    name: "Witch's Charge",
    type: 'class',
    level: 1,
    classId: 'witch',
    description:
      'You forge a special bond with a creature. You select one willing creature to become your charge. While your charge is within 30 feet of you, they gain a +1 status bonus to saving throws. You can have only one charge at a time; selecting a new charge ends the previous bond.',
  },
  {
    id: 'living-hair',
    name: 'Living Hair',
    type: 'class',
    level: 1,
    classId: 'witch',
    description:
      'You can animate your hair to lash out at foes. You gain a hair unarmed attack that deals 1d4 bludgeoning damage. Your hair attack is in the brawling weapon group and has the agile, disarm, finesse, and trip traits.',
  },
  {
    id: 'familiars-language',
    name: "Familiar's Language",
    type: 'class',
    level: 1,
    classId: 'witch',
    description:
      'Your familiar can communicate with creatures of its kind. Your familiar gains the ability to speak one language you know in addition to its ability to communicate with animals of its kind. It can communicate verbally with those creatures and with you.',
  },

  // ========================
  // Level 2 Witch Feats
  // ========================
  {
    id: 'cauldron',
    name: 'Cauldron',
    type: 'class',
    level: 2,
    classId: 'witch',
    description:
      "You can use a cauldron as a tool to brew potions, elixirs, and other magical concoctions. You gain the Alchemical Crafting skill feat, even if you don't meet its prerequisites, and you can use your cauldron as an alchemist's toolkit. During your daily preparations, you can create two common 1st-level alchemical items with your cauldron. You don't need to spend the normal monetary cost or have the items' formulas in your formula book.",
  },
  {
    id: 'cantrip-expansion-witch',
    name: 'Cantrip Expansion',
    type: 'class',
    level: 2,
    classId: 'witch',
    description:
      'A greater understanding of your magic broadens your ability to cast simple spells. You can prepare two additional cantrips each day.',
  },
  {
    id: 'enhanced-familiar-witch',
    name: 'Enhanced Familiar',
    type: 'class',
    level: 2,
    classId: 'witch',
    description:
      'You infuse your familiar with additional magical energy. You can select four familiar or master abilities each day, instead of two.',
  },
  {
    id: 'basic-lesson',
    name: 'Basic Lesson',
    type: 'class',
    level: 2,
    classId: 'witch',
    description:
      'Your patron grants you a basic lesson. You gain a new hex cantrip and your familiar learns a new spell, both of which are determined by the lesson you select. Increase the number of Focus Points in your focus pool by 1.',
  },
  {
    id: 'conceal-spell-witch',
    name: 'Conceal Spell',
    type: 'class',
    level: 2,
    classId: 'witch',
    description:
      'You hide your spellcasting behind subtle gestures and muted words. If the next action you use is to Cast a Spell, attempt a Stealth check against observers\' Perception DCs. If successful, the spell is hidden and observers don\'t notice you are Casting a Spell.',
  },

  // ========================
  // Level 4 Witch Feats
  // ========================
  {
    id: 'familiars-gift',
    name: "Familiar's Gift",
    type: 'class',
    level: 4,
    classId: 'witch',
    description:
      'Your familiar can share its magical gifts with your allies. Once per day, your familiar can touch an ally to grant them a +1 status bonus to skill checks with one skill of your choice for 10 minutes.',
  },
  {
    id: 'rites-of-convocation',
    name: 'Rites of Convocation',
    type: 'class',
    level: 4,
    classId: 'witch',
    description:
      'You can perform a special ritual to commune with your patron. During your daily preparations, you can replace one spell in your familiar with another spell of the same level from your tradition, as your patron provides new knowledge through your familiar.',
  },
  {
    id: 'eldritch-nails',
    name: 'Eldritch Nails',
    type: 'class',
    level: 4,
    classId: 'witch',
    description:
      'Your nails are infused with eldritch energy and grow into wicked claws. You gain a nails unarmed attack that deals 1d6 slashing damage. Your nails attack is in the brawling group and has the agile and finesse traits. You can etch runes onto your nails as though they were a weapon.',
  },
  {
    id: 'patrons-breadth',
    name: "Patron's Breadth",
    type: 'class',
    level: 4,
    classId: 'witch',
    description:
      'Your patron grants you a wider range of spells. You can prepare one additional spell each day in a spell slot that is 2 levels lower than the highest-level spell slot you have (minimum 1st level).',
  },
  {
    id: 'covenant-spell',
    name: 'Covenant Spell',
    type: 'class',
    level: 4,
    classId: 'witch',
    description:
      'You extract a binding promise from your patron for additional power. Once per day, you can cast a spell from your tradition that is not in your familiar but is at most 1 level lower than the highest-level witch spell slot you have. This spell requires an additional action to cast as you beseech your patron.',
  },

  // ========================
  // Level 6 Witch Feats
  // ========================
  {
    id: 'steady-spellcasting-witch',
    name: 'Steady Spellcasting',
    type: 'class',
    level: 6,
    classId: 'witch',
    description:
      'You maintain your composure while casting even under duress. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action is not disrupted.',
  },
  {
    id: 'hex-focus',
    name: 'Hex Focus',
    type: 'class',
    level: 6,
    classId: 'witch',
    description:
      'Your connection to your patron strengthens, granting you more hexes. You gain an additional Focus Point in your focus pool, and you learn a new hex cantrip from your patron.',
  },
  {
    id: 'nocturnal-spell',
    name: 'Nocturnal Spell',
    type: 'class',
    level: 6,
    classId: 'witch',
    description:
      'You draw upon the power of darkness to enhance your spells. When you Cast a Spell during nighttime or in conditions of darkness, you gain a +1 status bonus to the spell attack roll or the DC of the spell.',
  },
  {
    id: 'malefica',
    name: 'Malefica',
    type: 'class',
    level: 6,
    classId: 'witch',
    description:
      'You twist your hexes to be more debilitating. When you cast a hex cantrip that requires a saving throw and the target fails, the target also takes a -1 status penalty to its next saving throw before the end of your next turn.',
  },
  {
    id: 'familiar-form',
    name: 'Familiar Form',
    type: 'class',
    level: 6,
    classId: 'witch',
    description:
      'You can transform into your familiar or a similar creature. Once per day you can cast a 3rd-rank animal form targeting yourself, but you can only take the form of the type of creature your familiar is. This is a primal or occult spell, matching your tradition.',
  },

  // ========================
  // Level 8 Witch Feats
  // ========================
  {
    id: 'greater-lesson',
    name: 'Greater Lesson',
    type: 'class',
    level: 8,
    classId: 'witch',
    prerequisites: 'Basic Lesson',
    description:
      'Your patron teaches you a greater lesson. You gain a new 1st-level or higher hex spell and your familiar learns an additional spell, both determined by the greater lesson you select. Increase the number of Focus Points in your focus pool by 1.',
  },
  {
    id: 'patrons-puppet',
    name: "Patron's Puppet",
    type: 'class',
    level: 8,
    classId: 'witch',
    description:
      'Your patron can act through you in moments of need. Once per day, when you would be reduced to 0 Hit Points, your patron takes control and you remain at 1 HP instead. Your patron then controls your actions for 1 round, during which you cast one spell of your highest available spell slot chosen by the GM.',
  },
  {
    id: 'murksight',
    name: 'Murksight',
    type: 'class',
    level: 8,
    classId: 'witch',
    description:
      'You can peer through mist, smoke, and other obscuring vapors. You ignore the concealed condition from fog, mist, smoke, and similar airborne effects. In addition, when you are in areas of darkness, you can see as if it were dim light out to 30 feet.',
  },
  {
    id: 'spellbat',
    name: 'Spellbat',
    type: 'class',
    level: 8,
    classId: 'witch',
    description:
      'Your familiar can deliver spells with a greater range. When your familiar delivers a touch spell for you using the Deliver Touch Spell familiar ability, the familiar can move up to its Speed before delivering the spell rather than only 10 feet.',
  },
  {
    id: 'coven-bonds',
    name: 'Coven Bonds',
    type: 'class',
    level: 8,
    classId: 'witch',
    description:
      'You can form a temporary coven with willing spellcasters. During a 10-minute activity, you can bond with up to two other willing spellcasters within 30 feet. While bonded, all members gain a +1 circumstance bonus to checks to Recall Knowledge. The bond lasts for 1 hour or until the members move more than 120 feet apart.',
  },

  // ========================
  // Level 10 Witch Feats
  // ========================
  {
    id: 'quickened-casting-witch',
    name: 'Quickened Casting',
    type: 'class',
    level: 10,
    classId: 'witch',
    description:
      'You can cast one spell each day with less effort. Once per day, you can use Quickened Casting to reduce the number of actions to Cast a Spell by 1 (minimum 1 action). This can be used only on spells of 5th level or lower.',
  },
  {
    id: 'overwhelming-energy-witch',
    name: 'Overwhelming Energy',
    type: 'class',
    level: 10,
    classId: 'witch',
    description:
      'Your spells overcome resistances with raw power. If the next action you use is to Cast a Spell, the spell ignores an amount of the target\'s resistance to acid, cold, electricity, fire, or vitality/void energy equal to your level.',
  },
  {
    id: 'stitched-familiar',
    name: 'Stitched Familiar',
    type: 'class',
    level: 10,
    classId: 'witch',
    description:
      'You have reinforced your familiar with protective wards and magical stitching. Your familiar gains resistance to physical damage equal to half your level. If your familiar is destroyed, you can restore it during your next daily preparations without any additional cost or time.',
  },
  {
    id: 'hex-strike',
    name: 'Hex Strike',
    type: 'class',
    level: 10,
    classId: 'witch',
    description:
      'You combine your hexes with a physical attack. If your next action is a melee Strike that hits, you can immediately cast one of your hex cantrips that targets a single creature on the target of your Strike without spending an additional action. The hex cantrip does not require a spell attack roll if it would normally need one; instead, it automatically applies to the creature you hit.',
  },

  // ========================
  // Level 12 Witch Feats
  // ========================
  {
    id: 'witchs-hut',
    name: "Witch's Hut",
    type: 'class',
    level: 12,
    classId: 'witch',
    description:
      'You conjure a temporary dwelling infused with your patron\'s magic. Once per day, you can spend 10 minutes to create a magical hut that lasts for 24 hours. The hut is equivalent to a secure shelter spell and provides a safe space in which you and up to eight other creatures can rest. Creatures inside gain a +2 circumstance bonus to recovery checks.',
  },
  {
    id: 'familiar-mascot',
    name: 'Familiar Mascot',
    type: 'class',
    level: 12,
    classId: 'witch',
    description:
      'Your familiar inspires your allies with its presence. Allies within 30 feet of your familiar gain a +1 status bonus to Will saving throws against fear effects. Once per hour, when an ally within 30 feet of your familiar would become frightened, the familiar can reduce the frightened value by 1.',
  },
  {
    id: 'major-lesson',
    name: 'Major Lesson',
    type: 'class',
    level: 12,
    classId: 'witch',
    prerequisites: 'Greater Lesson',
    description:
      'Your patron imparts a powerful lesson to you. You gain a new focus spell and your familiar learns an additional spell, both determined by the major lesson you select. Increase the number of Focus Points in your focus pool by 1.',
  },
  {
    id: 'hex-wardmaster',
    name: 'Hex Wardmaster',
    type: 'class',
    level: 12,
    classId: 'witch',
    description:
      'You can use your hex magic to protect your allies. You gain a focus spell that lets you place a ward on an ally within 30 feet. The warded ally gains resistance to one energy type equal to half your level for 1 minute. You can choose acid, cold, electricity, or fire.',
  },

  // ========================
  // Level 14 Witch Feats
  // ========================
  {
    id: 'effortless-concentration-witch',
    name: 'Effortless Concentration',
    type: 'class',
    level: 14,
    classId: 'witch',
    description:
      'You can maintain a spell with hardly a thought. At the start of each of your turns, you gain the effects of the Sustain a Spell action for one spell you have active, allowing you to use your actions for other purposes.',
  },
  {
    id: 'siphon-power',
    name: 'Siphon Power',
    type: 'class',
    level: 14,
    classId: 'witch',
    description:
      'You can siphon magical energy from other spellcasters. When a creature within 60 feet of you Casts a Spell, you can use a reaction to attempt to siphon off some of its magical energy. Attempt a counteract check; if successful, you regain 1 Focus Point.',
  },
  {
    id: 'reflect-spell',
    name: 'Reflect Spell',
    type: 'class',
    level: 14,
    classId: 'witch',
    description:
      'When you successfully counteract a spell targeting you, you can turn its power back on its caster. When you use a reaction to counteract a spell that targets you and succeed, you can reflect the spell back at the caster. The reflected spell uses your spell attack modifier and DC rather than the original caster\'s.',
  },
  {
    id: 'impossible-familiar',
    name: 'Impossible Familiar',
    type: 'class',
    level: 14,
    classId: 'witch',
    description:
      'Your familiar has grown into something extraordinary. Your familiar gains two additional familiar abilities, for a total of eight. Additionally, your familiar can take one additional reaction per round that can be used only for familiar abilities.',
  },

  // ========================
  // Level 16 Witch Feats
  // ========================
  {
    id: 'hex-master',
    name: 'Hex Master',
    type: 'class',
    level: 16,
    classId: 'witch',
    description:
      'You have mastered the art of hexing. You can cast two different hex cantrips each round instead of one. Additionally, when you Refocus, you regain 2 Focus Points instead of 1 if you have spent at least 2 Focus Points since your last Refocus.',
  },
  {
    id: 'patrons-truth',
    name: "Patron's Truth",
    type: 'class',
    level: 16,
    classId: 'witch',
    description:
      'Your patron reveals a great truth about the nature of magic. You gain a 7th-level spell slot that can be used only to cast a spell from your tradition. This slot refreshes during your daily preparations.',
  },
  {
    id: 'familiar-conduit',
    name: 'Familiar Conduit',
    type: 'class',
    level: 16,
    classId: 'witch',
    description:
      'Your familiar can serve as a conduit for your spells over long distances. You can cast spells through your familiar as though you were in its location, using its senses to target creatures and determine line of effect. You must have line of effect to your familiar, and your familiar must be within 1 mile of you.',
  },
  {
    id: 'patron-sight',
    name: 'Patron Sight',
    type: 'class',
    level: 16,
    classId: 'witch',
    description:
      'Your patron grants you a fragment of its otherworldly perception. You gain a +2 status bonus to Perception checks to detect magical effects and hidden creatures. You can also sense the presence of magical auras within 30 feet as an imprecise sense.',
  },

  // ========================
  // Level 18 Witch Feats
  // ========================
  {
    id: 'incredible-familiar-witch',
    name: 'Incredible Familiar',
    type: 'class',
    level: 18,
    classId: 'witch',
    description:
      'Your familiar is a paragon of its kind, imbued with incredible magical power. You can select 10 familiar or master abilities each day. Your familiar gains a +2 circumstance bonus to all saving throws and its maximum HP increases by an amount equal to your level.',
  },
  {
    id: 'leyline-conduit',
    name: 'Leyline Conduit',
    type: 'class',
    level: 18,
    classId: 'witch',
    description:
      'You can tap into the ley lines that crisscross the world to power your spells. Once per day, you can cast a spell of 5th level or lower without expending a spell slot. The spell must be one you have prepared or that is in your familiar.',
  },
  {
    id: 'witchs-communion',
    name: "Witch's Communion",
    type: 'class',
    level: 18,
    classId: 'witch',
    description:
      'You can establish a powerful magical link with other spellcasters. You and up to five willing spellcasters within 30 feet enter a communion lasting 1 minute. During the communion, each participant can cast spells using spell slots from any other participant, with the agreement of the slot\'s owner. Each participant can share a maximum of two spell slots.',
  },
  {
    id: 'hex-cascade',
    name: 'Hex Cascade',
    type: 'class',
    level: 18,
    classId: 'witch',
    description:
      'Your hexes cascade from one foe to the next. When you cast a hex cantrip that targets a single creature and that creature fails its save, you can choose another creature within 30 feet of the original target. The second creature must also attempt a saving throw against the hex with a +2 circumstance bonus.',
  },

  // ========================
  // Level 20 Witch Feats
  // ========================
  {
    id: 'patrons-claim',
    name: "Patron's Claim",
    type: 'class',
    level: 20,
    classId: 'witch',
    description:
      'Your patron has invested so much in you that you can channel its full might. Once per day, you can cast a 10th-level spell from your tradition. This does not use a spell slot. After casting this spell, you are drained 2.',
  },
  {
    id: 'hex-wellspring',
    name: 'Hex Wellspring',
    type: 'class',
    level: 20,
    classId: 'witch',
    description:
      'Your mastery of hexes is unparalleled. Your focus pool increases to 4 Focus Points. Whenever you Refocus, you regain all your Focus Points instead of just 1. Additionally, your hex cantrips deal additional damage equal to your spellcasting ability modifier.',
  },
  {
    id: 'coven-leader',
    name: 'Coven Leader',
    type: 'class',
    level: 20,
    classId: 'witch',
    description:
      'You become the leader of a powerful coven. You can form a permanent coven with up to five willing spellcasters. Members of your coven gain a +2 circumstance bonus to all spell attack rolls and DCs while within 60 feet of you. Once per day, your coven can perform a special ritual that takes 10 minutes and allows each member to recover one expended spell slot of 5th level or lower.',
  },
  {
    id: 'grand-hex',
    name: 'Grand Hex',
    type: 'class',
    level: 20,
    classId: 'witch',
    description:
      'You have learned the most devastating hex magic. You gain a special focus spell, Grand Hex. When you cast it, choose one creature within 60 feet. That creature must attempt a Will save. On a failure, the creature is slowed 2 and stupefied 2 for 1 minute. On a critical failure, the creature is also stunned 3.',
  },
]
