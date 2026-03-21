import { Feat } from '../../../src/types'

export const wizardFeats: Feat[] = [
  // ========================
  // Level 1 Wizard Feats
  // ========================
  {
    id: 'reach-spell',
    name: 'Reach Spell',
    type: 'class',
    level: 1,
    classId: 'wizard',
    description:
      "You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell's range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.",
  },
  {
    id: 'widen-spell',
    name: 'Widen Spell',
    type: 'class',
    level: 1,
    classId: 'wizard',
    description:
      'You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase the area. Add 5 feet to the radius of a burst, or add 5 feet to the length of a cone or line.',
  },
  {
    id: 'counterspell-wizard',
    name: 'Counterspell',
    type: 'class',
    level: 1,
    classId: 'wizard',
    description:
      "When a foe Casts a Spell you know and you can see its manifestations, you can use your own magic to counter it. You expend a prepared spell to counter the triggering creature's casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell.",
  },
  {
    id: 'hand-of-the-apprentice',
    name: 'Hand of the Apprentice',
    type: 'class',
    level: 1,
    classId: 'wizard',
    description:
      'You can magically hurl your weapon at a foe. You gain the hand of the apprentice universalist spell. Universalist wizards can add this spell to their spell repertoire as a focus spell.',
  },
  {
    id: 'eschew-materials',
    name: 'Eschew Materials',
    type: 'class',
    level: 1,
    classId: 'wizard',
    description:
      'You can use clever workarounds to replicate the arcane essence of certain materials. When Casting a Spell that requires material components, you can provide them with somatic components instead. This does not remove the manipulate trait from the spell.',
  },
  {
    id: 'familiar-wizard',
    name: 'Familiar',
    type: 'class',
    level: 1,
    classId: 'wizard',
    description:
      'You make a pact with a creature that serves you and assists your spellcasting. You gain a familiar. This familiar has the standard familiar abilities plus one additional ability of your choice.',
  },

  // ========================
  // Level 2 Wizard Feats
  // ========================
  {
    id: 'cantrip-expansion-wizard',
    name: 'Cantrip Expansion',
    type: 'class',
    level: 2,
    classId: 'wizard',
    description:
      'Dedicated study allows you to prepare a wider range of simple spells. You can prepare two additional cantrips each day.',
  },
  {
    id: 'enhanced-familiar-wizard',
    name: 'Enhanced Familiar',
    type: 'class',
    level: 2,
    classId: 'wizard',
    prerequisites: 'a familiar',
    description:
      'You infuse your familiar with additional magical energy. Your familiar gains two additional familiar abilities. You can select the additional abilities each day when you prepare your familiar.',
  },
  {
    id: 'conceal-spell',
    name: 'Conceal Spell',
    type: 'class',
    level: 2,
    classId: 'wizard',
    description:
      'Hiding your gestures and incantations within other speech and movement, you attempt to conceal the fact that you are Casting a Spell. If the next action you use is to Cast a Spell, attempt a Stealth check against the observers\' Perception DCs. If you succeed, the observer doesn\'t notice you\'re casting a spell.',
  },
  {
    id: 'magic-sense',
    name: 'Magic Sense',
    type: 'class',
    level: 2,
    classId: 'wizard',
    description:
      'You have a literal sixth sense for ambient magic in your vicinity. You can sense the presence of magic auras as though you were always using a 1st-rank detect magic spell. This detects magic in your field of vision only. When you Seek, you gain the benefits of detect magic as well.',
  },
  {
    id: 'spell-blending',
    name: 'Spell Blending',
    type: 'class',
    level: 2,
    classId: 'wizard',
    description:
      'You can trade flexibility for power by converting spell slots. During your daily preparations, you can trade two spell slots of the same rank for one additional spell slot of one rank higher, or trade one spell slot for two additional cantrip slots.',
  },

  // ========================
  // Level 4 Wizard Feats
  // ========================
  {
    id: 'bespell-weapon',
    name: 'Bespell Weapon',
    type: 'class',
    level: 4,
    classId: 'wizard',
    description:
      'You siphon the residual energy from the last spell you cast into one weapon you\'re wielding. Until the end of your turn, the weapon deals an extra 1d6 damage of a type depending on the school of the spell you just cast.',
  },
  {
    id: 'linked-focus',
    name: 'Linked Focus',
    type: 'class',
    level: 4,
    classId: 'wizard',
    prerequisites: 'arcane bond, arcane school',
    description:
      'You have linked your bonded item and your focus spells. When you Drain your Bonded Item to cast a spell of your arcane school, you also regain 1 Focus Point.',
  },
  {
    id: 'silent-spell',
    name: 'Silent Spell',
    type: 'class',
    level: 4,
    classId: 'wizard',
    description:
      'You\'ve learned to cast spells without vocalizations. If the next action you use is to Cast a Spell with a verbal component, you can replace the verbal component with a somatic component. This makes the spell undetectable by hearing but still visible.',
  },
  {
    id: 'spell-penetration',
    name: 'Spell Penetration',
    type: 'class',
    level: 4,
    classId: 'wizard',
    description:
      'You\'ve studied ways of overcoming defenses against your magic. Your spells are harder to resist. Any creature that has a status bonus to saving throws against magic reduces that bonus by 1 against your spells.',
  },
  {
    id: 'arcane-breadth',
    name: 'Arcane Breadth',
    type: 'class',
    level: 4,
    classId: 'wizard',
    description:
      'Your study of magic is exceptionally broad. You can prepare one additional spell of each spell rank for which you have wizard spell slots.',
  },

  // ========================
  // Level 6 Wizard Feats
  // ========================
  {
    id: 'steady-spellcasting-wizard',
    name: 'Steady Spellcasting',
    type: 'class',
    level: 6,
    classId: 'wizard',
    description:
      'Confident in your technique, you don\'t easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn\'t disrupted.',
  },
  {
    id: 'advanced-school-spell',
    name: 'Advanced School Spell',
    type: 'class',
    level: 6,
    classId: 'wizard',
    prerequisites: 'arcane school',
    description:
      'You gain access to a powerful new focus spell from your arcane school. You gain the advanced school spell associated with your chosen school. Increase the number of Focus Points in your focus pool by 1.',
  },
  {
    id: 'clever-counterspell',
    name: 'Clever Counterspell',
    type: 'class',
    level: 6,
    classId: 'wizard',
    prerequisites: 'Counterspell',
    description:
      'You don\'t need to have the exact spell to counter an enemy\'s magic. Instead of being limited to the same spell, you can use Counterspell with a spell of the same rank that shares a trait with the triggering spell.',
  },
  {
    id: 'reflect-spell',
    name: 'Reflect Spell',
    type: 'class',
    level: 6,
    classId: 'wizard',
    prerequisites: 'Counterspell',
    description:
      'When you successfully use Counterspell to counteract a spell that affects targeted creatures or an area, you can turn that spell\'s effect back on its caster. When reflected, the spell affects only the original caster, even if it\'s an area spell or was targeting multiple creatures.',
  },
  {
    id: 'crossblooded-evolution',
    name: 'Crossblooded Evolution',
    type: 'class',
    level: 6,
    classId: 'wizard',
    description:
      'Your broad arcane study has let you pick up techniques from other traditions. You can prepare one spell from a non-arcane spell list as an arcane spell each day during your daily preparations.',
  },

  // ========================
  // Level 8 Wizard Feats
  // ========================
  {
    id: 'universal-versatility',
    name: 'Universal Versatility',
    type: 'class',
    level: 8,
    classId: 'wizard',
    description:
      'You\'ve expanded your ability to adapt your magic. Once per day, you can spend 10 minutes to replace one of your prepared spells with a different spell from your spellbook of the same rank or lower.',
  },
  {
    id: 'bonded-focus',
    name: 'Bonded Focus',
    type: 'class',
    level: 8,
    classId: 'wizard',
    prerequisites: 'arcane bond',
    description:
      'Your bond with your bonded item has grown stronger. If you\'ve used Drain Bonded Item this turn, you regain 1 Focus Point, up to your usual maximum. This lets you use Drain Bonded Item and a focus spell in the same turn more easily.',
  },
  {
    id: 'superior-bond',
    name: 'Superior Bond',
    type: 'class',
    level: 8,
    classId: 'wizard',
    prerequisites: 'arcane bond',
    description:
      'When you Drain your Bonded Item, you can do so twice per day instead of once. The second use restores a spell slot of a rank at least 2 lower than your highest-rank spell slot.',
  },
  {
    id: 'scroll-savant-wizard',
    name: 'Scroll Savant',
    type: 'class',
    level: 8,
    classId: 'wizard',
    description:
      'During your daily preparations, you can create a number of temporary scrolls containing arcane spells from your spellbook. These scrolls last until your next daily preparations. You can create a number of temporary scrolls equal to half your level, rounded up.',
  },
  {
    id: 'spell-shroud',
    name: 'Spell Shroud',
    type: 'class',
    level: 8,
    classId: 'wizard',
    prerequisites: 'Conceal Spell',
    description:
      'You are a master of hiding your spellcasting. When you use Conceal Spell, the spell is always hidden from casual observers, and the Stealth DC to notice it is increased by 2 for anyone actively watching you.',
  },

  // ========================
  // Level 10 Wizard Feats
  // ========================
  {
    id: 'overwhelming-energy',
    name: 'Overwhelming Energy',
    type: 'class',
    level: 10,
    classId: 'wizard',
    description:
      'You alter your spells to overcome resistances. If the next action you use is to Cast a Spell that deals acid, cold, electricity, fire, or sonic damage, the spell ignores an amount of the target\'s resistance to that damage type equal to your level.',
  },
  {
    id: 'quickened-casting',
    name: 'Quickened Casting',
    type: 'class',
    level: 10,
    classId: 'wizard',
    description:
      'If your next action is to Cast a Spell that is 2 or more spell ranks lower than the highest-rank wizard spell you can cast, reduce the number of actions to cast it by 1 (minimum 1 action). This can\'t be used on a spell modified by a metamagic action. You can use Quickened Casting only once per day.',
  },
  {
    id: 'scroll-savant-10-wizard',
    name: 'Spell Savant',
    type: 'class',
    level: 10,
    classId: 'wizard',
    description:
      'Your extensive study of spellcraft allows you to recall spells with ease. During your daily preparations, you can prepare one additional spell of each rank you can cast, but these additional spells must come from a specialty school you chose or a thesis-related focus.',
  },
  {
    id: 'magical-fortitude-feat',
    name: 'Magical Fortitude',
    type: 'class',
    level: 10,
    classId: 'wizard',
    description:
      'Your magical defenses are especially strong. You gain expert proficiency in Fortitude saves. When you roll a success on a Fortitude save against a magical effect, you get a critical success instead.',
  },

  // ========================
  // Level 12 Wizard Feats
  // ========================
  {
    id: 'defensive-robes',
    name: 'Defensive Robes',
    type: 'class',
    level: 12,
    classId: 'wizard',
    description:
      'Your study of magic has taught you techniques to weave protective wards into your clothing. You gain a +1 status bonus to AC while unarmored, and this bonus increases to +2 when you have a spell active with a duration of at least 1 minute.',
  },
  {
    id: 'overwhelming-spell',
    name: 'Overwhelming Spell',
    type: 'class',
    level: 12,
    classId: 'wizard',
    description:
      'You can pour extra magical energy into a spell to overcome a target\'s defenses. If the next action you use is to Cast a Spell that requires a saving throw, the targets take a -1 status penalty to their saving throw against the spell.',
  },
  {
    id: 'magic-sense-greater',
    name: 'Greater Magic Sense',
    type: 'class',
    level: 12,
    classId: 'wizard',
    prerequisites: 'Magic Sense',
    description:
      'Your ability to sense magic has improved dramatically. Your magic sense now automatically determines the school of any magic aura you detect. Additionally, you can detect magical auras even through thin barriers or when they are slightly obscured.',
  },
  {
    id: 'surging-focus',
    name: 'Surging Focus',
    type: 'class',
    level: 12,
    classId: 'wizard',
    description:
      'You can refocus your arcane energies faster than most. You recover 2 Focus Points when you Refocus instead of 1, provided you have spent at least 2 Focus Points since you last Refocused.',
  },
  {
    id: 'shared-warding',
    name: 'Shared Warding',
    type: 'class',
    level: 12,
    classId: 'wizard',
    description:
      'You can extend your magical protections to your allies. When you Cast a Spell that grants you a bonus to AC or saving throws, you can choose one ally within 30 feet to also gain half that bonus (rounded down, minimum +1) for the duration of the spell.',
  },

  // ========================
  // Level 14 Wizard Feats
  // ========================
  {
    id: 'infinite-possibilities',
    name: 'Infinite Possibilities',
    type: 'class',
    level: 14,
    classId: 'wizard',
    description:
      'You\'ve found a way to prepare a spell slot that you can fill later. During your daily preparations, you can leave one spell slot empty. You can prepare a spell in that slot using a 10-minute activity at any time during the day. You must have the spell in your spellbook to prepare it.',
  },
  {
    id: 'reprepare-spell',
    name: 'Reprepare Spell',
    type: 'class',
    level: 14,
    classId: 'wizard',
    description:
      'You\'ve discovered how to rewrite a spell you\'ve already prepared. You can spend 10 minutes to remove a spell you have prepared and prepare a different spell from your spellbook in its place. The new spell must be of the same rank or lower.',
  },
  {
    id: 'spell-tinker',
    name: 'Spell Tinker',
    type: 'class',
    level: 14,
    classId: 'wizard',
    description:
      'You can alter your spells on the fly. When you Cast a Spell that has a duration, you can spend an action on a subsequent turn to alter one of the spell\'s variables, such as the area, the number of targets (if the spell targets multiple), or a similar variable. The GM determines what changes are valid.',
  },
  {
    id: 'arcane-fortress',
    name: 'Arcane Fortress',
    type: 'class',
    level: 14,
    classId: 'wizard',
    description:
      'You weave an invisible ward of arcane energy around yourself. You gain a +2 circumstance bonus to AC against spell attacks, and a +1 circumstance bonus to saving throws against spells and magical effects.',
  },

  // ========================
  // Level 16 Wizard Feats
  // ========================
  {
    id: 'effortless-concentration-wizard',
    name: 'Effortless Concentration',
    type: 'class',
    level: 16,
    classId: 'wizard',
    description:
      'You maintain a spell with hardly a thought. At the start of each of your turns, you automatically gain the benefits of the Sustain a Spell action for one spell you have active, without spending an action. You can still use Sustain a Spell for the same or different spells later in your turn.',
  },
  {
    id: 'bonded-item-mastery',
    name: 'Bonded Item Mastery',
    type: 'class',
    level: 16,
    classId: 'wizard',
    prerequisites: 'arcane bond',
    description:
      'Your bonded item has become a masterwork of magical channeling. When you Drain your Bonded Item, you can recover a spell slot up to 2 ranks lower than your highest-rank spell slot. You can Drain your Bonded Item three times per day instead of the normal limit.',
  },
  {
    id: 'superior-reflexes-wizard',
    name: 'Superior Reflexes',
    type: 'class',
    level: 16,
    classId: 'wizard',
    description:
      'Your intense training has granted you superb reflexive skills. You gain expert proficiency in Reflex saves. When you roll a success on a Reflex save against a spell, you treat it as a critical success instead.',
  },
  {
    id: 'grand-school-spell',
    name: 'Grand School Spell',
    type: 'class',
    level: 16,
    classId: 'wizard',
    prerequisites: 'Advanced School Spell',
    description:
      'You unlock the deepest secrets of your arcane school. You gain an additional focus spell from your school of magic. Increase the number of Focus Points in your focus pool by 1.',
  },

  // ========================
  // Level 18 Wizard Feats
  // ========================
  {
    id: 'archwizards-might',
    name: "Archwizard's Might",
    type: 'class',
    level: 18,
    classId: 'wizard',
    description:
      'You have mastered the highest forms of arcane power. Once per day, you can cast one spell of your highest spell rank without expending a spell slot. The spell must be one you have prepared that day.',
  },
  {
    id: 'spell-combination',
    name: 'Spell Combination',
    type: 'class',
    level: 18,
    classId: 'wizard',
    description:
      'You can merge the energy of two spells into a single devastating blast. You can use two actions to Cast two Spells, each of which must be at least 2 ranks lower than the highest rank you can cast. Instead of their separate effects, you combine them into a single attack or area effect, using the higher save DC. The GM determines how the effects combine.',
  },
  {
    id: 'arcane-cascade-mastery',
    name: 'Arcane Cascade Mastery',
    type: 'class',
    level: 18,
    classId: 'wizard',
    description:
      'Your mastery over arcane energy allows you to weave spells together seamlessly. When you cast two spells on the same turn, the second spell gains a +1 status bonus to its attack roll or increases its save DC by 1.',
  },
  {
    id: 'superior-spell-penetration',
    name: 'Superior Spell Penetration',
    type: 'class',
    level: 18,
    classId: 'wizard',
    prerequisites: 'Spell Penetration',
    description:
      'Your spells are nearly impossible to defend against with magical resistance. Any creature that has a status bonus to saving throws against magic reduces that bonus by 2 against your spells (rather than the normal 1 from Spell Penetration).',
  },

  // ========================
  // Level 20 Wizard Feats
  // ========================
  {
    id: 'archwizards-spellcraft',
    name: "Archwizard's Spellcraft",
    type: 'class',
    level: 20,
    classId: 'wizard',
    description:
      'You are among the most powerful wizards in the world. During your daily preparations, you can prepare one spell of each rank from 1st to 9th without expending spell slots for them. These spells must come from your spellbook. You can cast each once per day for free.',
  },
  {
    id: 'metamagic-mastery',
    name: 'Metamagic Mastery',
    type: 'class',
    level: 20,
    classId: 'wizard',
    description:
      'Altering your spells has become instinctual. You can use metamagic single actions (such as Reach Spell or Widen Spell) as free actions. You can apply up to two metamagic actions to a single spell, rather than just one.',
  },
  {
    id: 'spell-combination-20',
    name: 'Spell Combination',
    type: 'class',
    level: 20,
    classId: 'wizard',
    description:
      'You can combine two spells into one grand magical act. During your daily preparations, you can designate two spell slots to be used together. When you cast the spells in those slots, you combine their effects, casting both as a single 3-action activity. The spells take effect simultaneously, using the higher DC if applicable.',
  },
  {
    id: 'infinite-spellbook',
    name: 'Infinite Spellbook',
    type: 'class',
    level: 20,
    classId: 'wizard',
    description:
      'Your spellbook is a masterwork of arcane knowledge that seems to contain every spell. You can add spells to your spellbook without spending money or time, as long as you can observe the spell being cast or find a written version. Once per day, you can prepare a spell you\'ve never seen before by spending 10 minutes studying magical theory, adding it to your spellbook and preparing it simultaneously.',
  },
  {
    id: 'archmage-apotheosis',
    name: 'Archmage Apotheosis',
    type: 'class',
    level: 20,
    classId: 'wizard',
    description:
      'You have achieved the pinnacle of arcane power. You gain an additional 10th-rank spell slot. You also become permanently quickened; you can use the extra action only to Cast a Spell of 5th rank or lower.',
  },
]
