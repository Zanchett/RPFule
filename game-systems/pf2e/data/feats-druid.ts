import { Feat } from '../../../src/types'

export const druidFeats: Feat[] = [
  // ========================
  // Level 1 Druid Feats
  // ========================
  {
    id: 'animal-companion-druid',
    name: 'Animal Companion',
    type: 'class',
    level: 1,
    classId: 'druid',
    description:
      'You gain the service of a young animal companion that travels with you on your adventures and obeys your commands. Choose a type of animal companion from the list. Your animal companion grows stronger as you level up, gaining additional abilities and increased stats.',
  },
  {
    id: 'leshy-familiar',
    name: 'Leshy Familiar',
    type: 'class',
    level: 1,
    classId: 'druid',
    description:
      'You gain a leshy familiar, a Tiny plant that embodies one of the many spirits of nature. Other than taking the form of a plant instead of an animal, this familiar uses all the same rules as other familiars.',
  },
  {
    id: 'plant-empathy',
    name: 'Plant Empathy',
    type: 'class',
    level: 1,
    classId: 'druid',
    description:
      'You can communicate with plants on a rudimentary level and use Diplomacy to Make an Impression on them and to make simple Requests of them. Non-magical plants typically can\'t fulfill most requests, but they might be able to bend out of your way or indicate the direction of a water source.',
  },
  {
    id: 'reach-spell-druid',
    name: 'Reach Spell',
    type: 'class',
    level: 1,
    classId: 'druid',
    description:
      'You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\'s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.',
  },
  {
    id: 'storm-born',
    name: 'Storm Born',
    type: 'class',
    level: 1,
    classId: 'druid',
    description:
      'You are at home out in the elements, and the fury of the storm does not impede you. You are not affected by the concealment or penalties caused by weather. For example, fog, heavy rain, or blizzards do not impair your vision or movement, and you ignore circumstance penalties to ranged attacks from wind.',
  },
  {
    id: 'wild-shape',
    name: 'Wild Shape',
    type: 'class',
    level: 1,
    classId: 'druid',
    description:
      'You are one with the wild, always changing and adapting. You gain the wild shape order spell, which lets you transform into forms via pest form. You add pest form to your spell list as a primal innate spell you can cast at will. As you gain higher-level wild shape feats, you gain higher-level forms you can use with wild shape.',
  },
  {
    id: 'widen-spell-druid',
    name: 'Widen Spell',
    type: 'class',
    level: 1,
    classId: 'druid',
    description:
      'You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to Cast a Spell that has an area of a burst, cone, or line and does not have a duration, increase that spell\'s area. If the spell\'s area is a burst with a radius of at least 10 feet, increase the radius by 5 feet. If the spell\'s area is a cone or a line, increase the length by 10 feet.',
  },

  // ========================
  // Level 2 Druid Feats
  // ========================
  {
    id: 'call-of-the-wild',
    name: 'Call of the Wild',
    type: 'class',
    level: 2,
    classId: 'druid',
    description:
      'You call upon the creatures of nature to come to your aid. You can spend 10 minutes in concert with nature to replace one of the spells you\'ve prepared in one of your spell slots with a summon spell of the same rank or lower.',
  },
  {
    id: 'enhanced-familiar-druid',
    name: 'Enhanced Familiar',
    type: 'class',
    level: 2,
    classId: 'druid',
    prerequisites: 'a familiar',
    description:
      'You infuse your familiar with additional primal energy. You can select four familiar or master abilities each day, instead of two.',
  },
  {
    id: 'order-explorer',
    name: 'Order Explorer',
    type: 'class',
    level: 2,
    classId: 'druid',
    description:
      'You have learned the secrets of another druidic order. Choose an order other than your own. You gain the initial order feature for that order, adding any spells from that feature to your order spell list. You do not gain the skill or trained skill from the order.',
  },
  {
    id: 'poison-resistance-druid',
    name: 'Poison Resistance',
    type: 'class',
    level: 2,
    classId: 'druid',
    description:
      'Your affinity with the natural world grants you protection against toxins. You gain poison resistance equal to half your level.',
  },
  {
    id: 'form-control',
    name: 'Form Control',
    type: 'class',
    level: 2,
    classId: 'druid',
    prerequisites: 'Wild Shape',
    description:
      'With your deep connection to the land, you can hold a wild shape form for longer. When you cast wild shape to transform using forms of 1 minute or longer duration, you can instead cast it with a duration of 1 hour. If the form\'s duration is 1 hour, you can increase it to 8 hours.',
  },

  // ========================
  // Level 4 Druid Feats
  // ========================
  {
    id: 'mature-animal-companion-druid',
    name: 'Mature Animal Companion',
    type: 'class',
    level: 4,
    classId: 'druid',
    prerequisites: 'Animal Companion',
    description:
      'Your animal companion grows up, becoming a mature animal companion and target gaining additional capabilities. It becomes a mature animal companion, increasing its statistics and granting it additional abilities.',
  },
  {
    id: 'order-magic',
    name: 'Order Magic',
    type: 'class',
    level: 4,
    classId: 'druid',
    prerequisites: 'Order Explorer',
    description:
      'You have delved deeper into the magic of another druidic order. You gain the advanced order spell from that order. Increase your focus pool by 1 Focus Point.',
  },
  {
    id: 'thousand-faces',
    name: 'Thousand Faces',
    type: 'class',
    level: 4,
    classId: 'druid',
    description:
      'Your wild shape is so developed that you can use it to change your appearance. You can cast humanoid form as a primal innate spell at will. The spell automatically heightens to half your level rounded up.',
  },
  {
    id: 'woodland-stride',
    name: 'Woodland Stride',
    type: 'class',
    level: 4,
    classId: 'druid',
    description:
      'You move through natural terrain with ease. You ignore non-magical difficult terrain caused by undergrowth, rubble, or similar natural obstacles.',
  },
  {
    id: 'elemental-summons',
    name: 'Elemental Summons',
    type: 'class',
    level: 4,
    classId: 'druid',
    description:
      'You can call upon the elemental forces of nature. You add summon elemental to your spell list. Whenever you gain a new level of spells, you can choose to learn summon elemental at that spell rank.',
  },

  // ========================
  // Level 6 Druid Feats
  // ========================
  {
    id: 'green-empathy',
    name: 'Green Empathy',
    type: 'class',
    level: 6,
    classId: 'druid',
    prerequisites: 'Plant Empathy',
    description:
      'You can communicate with plants on a deeper level. You can use Diplomacy to Make an Impression on plants and to make Requests of them. Non-magical plants can attempt to provide more complex assistance, such as reaching roots to trip a foe or pushing branches aside to create a path.',
  },
  {
    id: 'insect-shape',
    name: 'Insect Shape',
    type: 'class',
    level: 6,
    classId: 'druid',
    prerequisites: 'Wild Shape',
    description:
      'Your wild shape has grown powerful enough to transform you into the form of a large insect. You can use wild shape to take the forms listed in insect form. Whenever you use wild shape to take a form that grants you a specific Athletics modifier, you gain a +1 status bonus to Athletics checks.',
  },
  {
    id: 'steady-spellcasting-druid',
    name: 'Steady Spellcasting',
    type: 'class',
    level: 6,
    classId: 'druid',
    description:
      'You are confident in your spellcasting, even in adverse conditions. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn\'t disrupted.',
  },
  {
    id: 'storm-retribution',
    name: 'Storm Retribution',
    type: 'class',
    level: 6,
    classId: 'druid',
    prerequisites: 'Storm Born; tempest surge order spell',
    description:
      'You lash out at those who dare to strike you with the fury of the storm. When a creature within 30 feet of you damages you with an attack, you can use your reaction to cast tempest surge targeting the attacker. This counts as your reaction for the round.',
  },
  {
    id: 'current-spell-druid',
    name: 'Current Spell',
    type: 'class',
    level: 6,
    classId: 'druid',
    description:
      'You have learned to harness the currents of primal magic that flow through the natural world. You can sacrifice a prepared spell to instead cast another primal spell of a lower rank that you have prepared that day and already cast.',
  },

  // ========================
  // Level 8 Druid Feats
  // ========================
  {
    id: 'fey-caller',
    name: 'Fey Caller',
    type: 'class',
    level: 8,
    classId: 'druid',
    description:
      'You have learned the tricks of the fey to call upon their allies. You add summon fey to your spell list. Whenever you gain a new level of spells, you can choose to learn summon fey at that spell rank.',
  },
  {
    id: 'soaring-shape',
    name: 'Soaring Shape',
    type: 'class',
    level: 8,
    classId: 'druid',
    prerequisites: 'Wild Shape',
    description:
      'Wings free you from the shackles of the ground below. You can use wild shape to take the form listed in aerial form. If your next action after casting wild shape is to Fly, you don\'t need to spend an action to take off.',
  },
  {
    id: 'wind-caller',
    name: 'Wind Caller',
    type: 'class',
    level: 8,
    classId: 'druid',
    description:
      'You can call upon the winds to serve your needs. You add wall of wind to your spell list and can prepare it. You can also add air walk to your spell list. Whenever you cast a spell that deals electricity or sonic damage, you can add a gust of wind effect in a 5-foot emanation around the target.',
  },
  {
    id: 'animal-companion-specialization-druid',
    name: 'Animal Companion Specialization',
    type: 'class',
    level: 8,
    classId: 'druid',
    prerequisites: 'Mature Animal Companion',
    description:
      'Your animal companion has grown more powerful and has learned specialized techniques. It deals 3 additional damage with unarmed attacks. If your companion is nimble or savage, the damage increases to 6.',
  },
  {
    id: 'greater-form-control',
    name: 'Greater Form Control',
    type: 'class',
    level: 8,
    classId: 'druid',
    prerequisites: 'Form Control; Wild Shape',
    description:
      'You have mastered the ability to remain in wild shape forms for extended periods. When using Form Control, the duration of your wild shape forms increases further. You can remain in forms with a 1 minute base duration for up to 8 hours.',
  },

  // ========================
  // Level 10 Druid Feats
  // ========================
  {
    id: 'overwhelming-energy-druid',
    name: 'Overwhelming Energy',
    type: 'class',
    level: 10,
    classId: 'druid',
    description:
      'Your primal spells overwhelm even the most resistant creatures. If the next action you use is to Cast a Spell, the spell ignores an amount of the target\'s resistance to acid, cold, electricity, fire, or vitality damage equal to your level. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell.',
  },
  {
    id: 'plant-shape',
    name: 'Plant Shape',
    type: 'class',
    level: 10,
    classId: 'druid',
    prerequisites: 'Wild Shape',
    description:
      'You can take the form of a plant creature. You can use wild shape to take the forms listed in plant form. Whenever you use wild shape to take a form that grants you a specific Athletics modifier, you gain a +1 status bonus to Athletics checks.',
  },
  {
    id: 'side-by-side',
    name: 'Side by Side',
    type: 'class',
    level: 10,
    classId: 'druid',
    prerequisites: 'Animal Companion',
    description:
      'You and your animal companion fight in perfect synergy, guarding each other\'s blind spots. When you and your animal companion are adjacent to the same enemy, you each gain a +1 circumstance bonus to AC against that enemy, and you both gain a +1 circumstance bonus to saving throws against that enemy\'s abilities.',
  },
  {
    id: 'dragon-shape',
    name: 'Dragon Shape',
    type: 'class',
    level: 10,
    classId: 'druid',
    prerequisites: 'Soaring Shape',
    description:
      'You can transform into a fearsome dragon. You can use wild shape to take the forms listed in dragon form. Whenever you use wild shape to take a form that grants a specific Athletics modifier, you gain a +1 status bonus to Athletics checks.',
  },
  {
    id: 'primal-summons',
    name: 'Primal Summons',
    type: 'class',
    level: 10,
    classId: 'druid',
    prerequisites: 'Call of the Wild',
    description:
      'Whenever you summon an ally with a conjuration spell, you can grant that creature the benefits of one of the following elements of your choice: air, earth, fire, or water. The summoned creature gains the corresponding movement type or ability depending on the element chosen.',
  },

  // ========================
  // Level 12 Druid Feats
  // ========================
  {
    id: 'green-tongue',
    name: 'Green Tongue',
    type: 'class',
    level: 12,
    classId: 'druid',
    prerequisites: 'Green Empathy',
    description:
      'You can communicate fully with plants. You can speak with plants as if you had a common language. This allows you to have full conversations with plant creatures and extract detailed information from non-creature plants, such as what creatures have passed nearby recently.',
  },
  {
    id: 'primal-focus',
    name: 'Primal Focus',
    type: 'class',
    level: 12,
    classId: 'druid',
    description:
      'Your connection to primal magic is exceptionally strong. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1.',
  },
  {
    id: 'incredible-companion-druid',
    name: 'Incredible Companion',
    type: 'class',
    level: 12,
    classId: 'druid',
    prerequisites: 'Mature Animal Companion',
    description:
      'Your animal companion continues to grow and becomes truly impressive. Your animal companion becomes an incredible companion, gaining further increases to its statistics and abilities. It gains additional hit points, and its proficiencies increase.',
  },
  {
    id: 'primal-hierophant',
    name: 'Primal Hierophant',
    type: 'class',
    level: 12,
    classId: 'druid',
    description:
      'Your understanding of primal magic has deepened. You gain an additional spell slot of your two highest ranks of druid spells. You prepare spells in these additional slots normally.',
  },

  // ========================
  // Level 14 Druid Feats
  // ========================
  {
    id: 'specialized-companion-druid',
    name: 'Specialized Companion',
    type: 'class',
    level: 14,
    classId: 'druid',
    prerequisites: 'Incredible Companion',
    description:
      'Your animal companion has become particularly adept. Your animal companion gains one specialization of your choice. Your companion\'s specialization grants it additional abilities depending on the type you choose: bully, wrecker, daredevil, tracker, or another specialization appropriate to its type.',
  },
  {
    id: 'timeless-nature',
    name: 'Timeless Nature',
    type: 'class',
    level: 14,
    classId: 'druid',
    description:
      'Your connection to the natural world has slowed your aging. You no longer age or suffer the detrimental effects of aging, and you can\'t be aged magically. You still die of old age when your time is up, but the physical effects of aging no longer impede you.',
  },
  {
    id: 'verdant-metamorphosis',
    name: 'Verdant Metamorphosis',
    type: 'class',
    level: 14,
    classId: 'druid',
    description:
      'You transform into a plant version of yourself. You gain the plant trait and lose any trait that is inappropriate for your new form (typically humanoid for a filtered ancestry trait). You can change to a plant form or back as a single action, which has the concentrate trait. You gain resistance 5 to poison and can go without breathing.',
  },
  {
    id: 'ferocious-shape',
    name: 'Ferocious Shape',
    type: 'class',
    level: 14,
    classId: 'druid',
    prerequisites: 'Wild Shape',
    description:
      'You have mastered the most ferocious forms. When you use wild shape to take a form, you can choose to gain temporary Hit Points equal to your level. If your wild shape form has a Strike that deals more damage than 2d8, you gain a +1 status bonus to the damage with that Strike.',
  },

  // ========================
  // Level 16 Druid Feats
  // ========================
  {
    id: 'effortless-concentration-druid',
    name: 'Effortless Concentration',
    type: 'class',
    level: 16,
    classId: 'druid',
    description:
      'You maintain a spell with hardly a thought. At the start of each of your turns, you automatically Sustain one spell of your choice without using an action.',
  },
  {
    id: 'monstrosity-shape',
    name: 'Monstrosity Shape',
    type: 'class',
    level: 16,
    classId: 'druid',
    prerequisites: 'Wild Shape',
    description:
      'You can transform into a terrifying monstrosity. You can use wild shape to take a form of level 8 or lower from animal form, dinosaur form, insect form, or plant form. You can also transform into the forms listed in monstrosity form.',
  },
  {
    id: 'invoke-disaster',
    name: 'Invoke Disaster',
    type: 'class',
    level: 16,
    classId: 'druid',
    description:
      'You call upon the forces of nature to bring catastrophe down upon your foes. You can cast storm of vengeance as a primal innate spell once per day without spending a spell slot. This spell is automatically heightened to the highest rank you can cast.',
  },
  {
    id: 'wind-and-storm',
    name: 'Wind and Storm',
    type: 'class',
    level: 16,
    classId: 'druid',
    prerequisites: 'Storm Born',
    description:
      'You are a true master of wind and storm. You gain a fly Speed equal to your land Speed. You can cast chain lightning and control weather as primal innate spells, each once per day.',
  },

  // ========================
  // Level 18 Druid Feats
  // ========================
  {
    id: 'perfect-form-control',
    name: 'Perfect Form Control',
    type: 'class',
    level: 18,
    classId: 'druid',
    prerequisites: 'Form Control; Wild Shape',
    description:
      'You have complete mastery over your wild shape forms. When you use wild shape, you can choose to keep your own AC, attack modifier, damage, or any other statistic if it is higher than what the form grants you. You can use your own spellcasting ability while in wild shape without needing to use an action to return to your normal form.',
  },
  {
    id: 'primal-wellspring',
    name: 'Primal Wellspring',
    type: 'class',
    level: 18,
    classId: 'druid',
    prerequisites: 'Primal Focus',
    description:
      'Your primal magic runs deep. If you have spent at least 3 Focus Points since the last time you Refocused, you recover 3 Focus Points when you Refocus instead of 1.',
  },
  {
    id: 'leyline-conduit',
    name: 'Leyline Conduit',
    type: 'class',
    level: 18,
    classId: 'druid',
    description:
      'You can draw upon the ley lines of the world to fuel your magic. Once per minute, you can cast a spell of 5th rank or lower without spending a spell slot. The spell must be one you have prepared.',
  },
  {
    id: 'wild-winds',
    name: 'Wild Winds',
    type: 'class',
    level: 18,
    classId: 'druid',
    prerequisites: 'Storm Born',
    description:
      'The winds themselves obey your commands. You are permanently surrounded by a cyclone of wind. You are always under the effects of air walk, and you gain a +2 circumstance bonus to saving throws against effects with the air trait.',
  },

  // ========================
  // Level 20 Druid Feats
  // ========================
  {
    id: 'hierophants-power',
    name: "Hierophant's Power",
    type: 'class',
    level: 20,
    classId: 'druid',
    description:
      'You have attained the highest level of primal power. You gain an additional 10th-rank spell slot. You can prepare a spell of any rank in this slot.',
  },
  {
    id: 'true-shapeshifter',
    name: 'True Shapeshifter',
    type: 'class',
    level: 20,
    classId: 'druid',
    prerequisites: 'Wild Shape',
    description:
      'You have transcended the limits of mortal form. You can transform freely between forms. When in a wild shape form, you can shift directly to another wild shape form without first returning to your natural form. Each transformation counts as a separate casting of wild shape. When you transform, you can choose to gain the benefits of a 6th-rank or lower form spell.',
  },
  {
    id: 'natures-avatar',
    name: "Nature's Avatar",
    type: 'class',
    level: 20,
    classId: 'druid',
    description:
      'You have become a true avatar of nature itself. You gain immunity to poison and disease. You automatically succeed at saving throws against effects that would transform you against your will. Once per day, you can cast primal phenomenon as a primal innate spell.',
  },
  {
    id: 'supreme-order-magic',
    name: 'Supreme Order Magic',
    type: 'class',
    level: 20,
    classId: 'druid',
    prerequisites: 'Order Magic',
    description:
      'You have mastered the magic of multiple druidic orders. You gain the advanced order spell for a druidic order other than the one you chose for Order Magic. Increase your focus pool by 1 Focus Point.',
  },
]
