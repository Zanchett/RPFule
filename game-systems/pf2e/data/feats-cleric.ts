import { Feat } from '../../../src/types'

export const clericFeats: Feat[] = [
  // ========================
  // Level 1 Cleric Feats
  // ========================
  {
    id: 'deadly-simplicity',
    name: 'Deadly Simplicity',
    type: 'class',
    level: 1,
    classId: 'cleric',
    description:
      "Your deity's favored weapon is especially powerful in your hands. When you are wielding your deity's favored weapon and it has a d6 damage die, increase the die size to d8. If it has a d8 damage die, increase it to d10 instead.",
  },
  {
    id: 'domain-initiate',
    name: 'Domain Initiate',
    type: 'class',
    level: 1,
    classId: 'cleric',
    description:
      "Your deity bestows a special spell related to their powers. Select one domain from your deity's domains. You gain an initial domain spell for that domain, a focus spell. It costs 1 Focus Point to cast a focus spell.",
  },
  {
    id: 'healing-hands',
    name: 'Healing Hands',
    type: 'class',
    level: 1,
    classId: 'cleric',
    description:
      'Your positive energy is even more vibrant and restorative. When you cast heal, you roll d10s instead of d8s.',
  },
  {
    id: 'harming-hands',
    name: 'Harming Hands',
    type: 'class',
    level: 1,
    classId: 'cleric',
    description:
      'The negative energy you channel is more powerful than usual. When you cast harm, you roll d10s instead of d8s.',
  },
  {
    id: 'holy-castigation',
    name: 'Holy Castigation',
    type: 'class',
    level: 1,
    classId: 'cleric',
    description:
      'You combine holy energy with positive energy to damage the undead. When you cast a heal spell and damage undead with it, the undead also take spirit damage equal to your Charisma modifier (minimum 1).',
  },
  {
    id: 'reach-spell-cleric',
    name: 'Reach Spell',
    type: 'class',
    level: 1,
    classId: 'cleric',
    description:
      'You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\'s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.',
  },

  // ========================
  // Level 2 Cleric Feats
  // ========================
  {
    id: 'cantrip-expansion-cleric',
    name: 'Cantrip Expansion',
    type: 'class',
    level: 2,
    classId: 'cleric',
    description:
      'A greater understanding of your magic broadens your ability to cast simple spells. You can prepare two additional cantrips each day.',
  },
  {
    id: 'communal-healing',
    name: 'Communal Healing',
    type: 'class',
    level: 2,
    classId: 'cleric',
    description:
      "You're a conduit for positive energy, and as you channel it through you, it heals you as well. When you cast the heal spell to heal a single creature other than yourself, you regain Hit Points equal to the spell rank.",
  },
  {
    id: 'sap-life',
    name: 'Sap Life',
    type: 'class',
    level: 2,
    classId: 'cleric',
    description:
      'You draw the life force out of your enemies to heal yourself. When you cast a harm spell and damage at least one living creature, you regain Hit Points equal to the spell rank.',
  },
  {
    id: 'turn-undead',
    name: 'Turn Undead',
    type: 'class',
    level: 2,
    classId: 'cleric',
    description:
      'Undead flee from your positive energy. When you use heal to damage undead, each undead that fails its save and has a level lower than your level + 1 gains the fleeing condition for 1 round.',
  },
  {
    id: 'versatile-font',
    name: 'Versatile Font',
    type: 'class',
    level: 2,
    classId: 'cleric',
    description:
      'As you explore your connection to the divine, you develop the ability to channel both positive and negative energy. You can prepare some of your font spell slots with heal and the rest with harm, instead of all one or the other.',
  },

  // ========================
  // Level 4 Cleric Feats
  // ========================
  {
    id: 'cast-down',
    name: 'Cast Down',
    type: 'class',
    level: 4,
    classId: 'cleric',
    description:
      'The force of your channeled energy can bring foes to their knees. If the next action you use is to cast harm or heal to damage one creature, the target must succeed at a Fortitude save or be knocked prone.',
  },
  {
    id: 'channel-smite',
    name: 'Channel Smite',
    type: 'class',
    level: 4,
    classId: 'cleric',
    description:
      'You siphon the destructive energies of positive or negative energy through a melee attack and into your foe. Make a melee Strike and add the effects of a heal or harm spell to the damage. The spell is expended with no effect if your Strike fails.',
  },
  {
    id: 'directed-channel',
    name: 'Directed Channel',
    type: 'class',
    level: 4,
    classId: 'cleric',
    description:
      'You can shape the energy you channel in a single direction, reaching farther and in a more directed fashion. When you cast a version of heal or harm that has an area, you can make its area a 60-foot cone instead of a 30-foot emanation.',
  },
  {
    id: 'raise-symbol',
    name: 'Raise Symbol',
    type: 'class',
    level: 4,
    classId: 'cleric',
    description:
      "You present your religious symbol emphatically. You gain a +2 circumstance bonus to saving throws until the start of your next turn. While it's raised, if you cast a heal or harm spell, the targets of that spell also gain a +1 status bonus to their saving throws for 1 round.",
  },
  {
    id: 'emblazon-armament',
    name: 'Emblazon Armament',
    type: 'class',
    level: 4,
    classId: 'cleric',
    description:
      "Googling the sigil of your deity onto a shield or weapon takes on a sacred meaning. You can spend 10 minutes emblazoning a symbol of your deity on a weapon or shield. The item becomes a religious symbol of your deity and can be used as a divine focus while emblazoned, and you gain a +1 status bonus to damage with the weapon or a +1 status bonus to the shield's Hardness.",
  },

  // ========================
  // Level 6 Cleric Feats
  // ========================
  {
    id: 'divine-weapon',
    name: 'Divine Weapon',
    type: 'class',
    level: 6,
    classId: 'cleric',
    description:
      "You swathe your weapon or unarmed attack in divine energy. The next Strike you make with a weapon or unarmed attack deals an additional 1d6 spirit damage. If your deity's favored weapon is a simple weapon, the additional damage die increases to d8.",
  },
  {
    id: 'selective-energy',
    name: 'Selective Energy',
    type: 'class',
    level: 6,
    classId: 'cleric',
    description:
      'You can channel energy precisely enough to avoid healing or harming unintended targets. When you cast a version of heal or harm that has an area, you can designate a number of creatures equal to your Charisma modifier (minimum 1) that are not affected by the spell.',
  },
  {
    id: 'steady-spellcasting-cleric',
    name: 'Steady Spellcasting',
    type: 'class',
    level: 6,
    classId: 'cleric',
    description:
      "Confident in your technique, you don't easily lose your concentration when you Cast a Spell. If a reaction would disrupt your spellcasting action, attempt a DC 15 flat check. If you succeed, your action isn't disrupted.",
  },
  {
    id: 'necrotic-infusion',
    name: 'Necrotic Infusion',
    type: 'class',
    level: 6,
    classId: 'cleric',
    description:
      'You swathe your harm spell in a mix of vitality and void energy. When you cast harm on an undead target, you can change the healing to void damage that heals the undead as normal, then also deal spirit damage to the target equal to the spell rank.',
  },

  // ========================
  // Level 8 Cleric Feats
  // ========================
  {
    id: 'advanced-domain',
    name: 'Advanced Domain',
    type: 'class',
    level: 8,
    classId: 'cleric',
    prerequisites: 'Domain Initiate',
    description:
      "Your studies or prayers have unlocked deeper secrets of your deity's domain. You gain an advanced domain spell from one of your domains. Increase the number of Focus Points in your focus pool by 1.",
  },
  {
    id: 'channeled-succor',
    name: 'Channeled Succor',
    type: 'class',
    level: 8,
    classId: 'cleric',
    description:
      'You can remove a harmful condition when you channel energy for healing. When you cast heal, you can also attempt to counteract one affliction or condition on the target with a counteract rank equal to half the spell rank rounded up.',
  },
  {
    id: 'cremate-undead',
    name: 'Cremate Undead',
    type: 'class',
    level: 8,
    classId: 'cleric',
    description:
      'Your positive energy sets undead alight. When you deal damage to an undead creature with a heal spell, the undead also takes persistent fire damage equal to the spell rank.',
  },
  {
    id: 'emblazon-energy',
    name: 'Emblazon Energy',
    type: 'class',
    level: 8,
    classId: 'cleric',
    prerequisites: 'Emblazon Armament',
    description:
      'With your divine symbol emblazoned, you can channel energy into an emblazoned weapon for additional damage. When you Emblazon Armament on a weapon, you can choose a damage type: fire, cold, electricity, or sonic. The weapon deals an additional 1d4 damage of the chosen type.',
  },

  // ========================
  // Level 10 Cleric Feats
  // ========================
  {
    id: 'castigating-weapon',
    name: 'Castigating Weapon',
    type: 'class',
    level: 10,
    classId: 'cleric',
    description:
      'Holy energy empowers your weapon against your foes. After you damage a fiend or undead with a Strike, that creature takes a -2 status penalty to AC for 1 round.',
  },
  {
    id: 'heroic-recovery',
    name: 'Heroic Recovery',
    type: 'class',
    level: 10,
    classId: 'cleric',
    description:
      "The restorative power of your healing can remove a hero from death's door and bolster them for the fight ahead. If you heal a creature that is at 0 Hit Points, it also gains a +2 circumstance bonus to AC and saving throws for 1 round.",
  },
  {
    id: 'replenishment-of-war',
    name: 'Replenishment of War',
    type: 'class',
    level: 10,
    classId: 'cleric',
    description:
      "Striking your enemies feeds your divine power. Each time you deal damage with a Strike using your deity's favored weapon, you regain 1 Hit Point. This increases to 2 Hit Points at 15th level and 3 Hit Points at 20th level.",
  },
  {
    id: 'improved-communal-healing',
    name: 'Improved Communal Healing',
    type: 'class',
    level: 10,
    classId: 'cleric',
    prerequisites: 'Communal Healing',
    description:
      'Your communal healing is more powerful. When you use Communal Healing, you also restore Hit Points equal to the spell rank to all other allies within 30 feet.',
  },

  // ========================
  // Level 12 Cleric Feats
  // ========================
  {
    id: 'domain-focus',
    name: 'Domain Focus',
    type: 'class',
    level: 12,
    classId: 'cleric',
    prerequisites: 'Domain Initiate',
    description:
      'Your devotion to your domain is so great that you can call upon it in a pinch. If you have spent at least 2 Focus Points since the last time you Refocused, you recover 2 Focus Points when you Refocus instead of 1.',
  },
  {
    id: 'shared-replenishment',
    name: 'Shared Replenishment',
    type: 'class',
    level: 12,
    classId: 'cleric',
    prerequisites: 'Replenishment of War',
    description:
      'When your deity rewards you for striking down foes, you share the healing with an ally. When you gain Hit Points from Replenishment of War, an ally within 10 feet also regains the same number of Hit Points.',
  },
  {
    id: 'emblazon-antimagic',
    name: 'Emblazon Antimagic',
    type: 'class',
    level: 12,
    classId: 'cleric',
    prerequisites: 'Emblazon Armament',
    description:
      'Your emblazoned symbol can ward against magic. When you Emblazon Armament on a shield, the wielder can use the shield to block spell damage as though it had the magic trait, and gains a +1 status bonus to saving throws against magic while the shield is raised.',
  },
  {
    id: 'divine-infusion',
    name: 'Divine Infusion',
    type: 'class',
    level: 12,
    classId: 'cleric',
    description:
      'You can channel your divine power into a spell for greater effect. Once per day, when you cast a divine spell, you can increase its rank by 1 above the highest-rank spell you can normally cast without using a higher-rank spell slot.',
  },

  // ========================
  // Level 14 Cleric Feats
  // ========================
  {
    id: 'deitys-protection',
    name: "Deity's Protection",
    type: 'class',
    level: 14,
    classId: 'cleric',
    description:
      "When you are in dire need, your deity shields you. When you would be reduced to 0 Hit Points, your deity intervenes. You remain at 1 Hit Point and gain resistance to all damage equal to twice your level for 1 round. Once you use this feat, you can't use it again until your next daily preparations.",
  },
  {
    id: 'defensive-recovery',
    name: 'Defensive Recovery',
    type: 'class',
    level: 14,
    classId: 'cleric',
    description:
      'Your healing is accompanied by a protective blessing. When you cast heal on an ally, that ally also gains a +2 status bonus to AC and saving throws for 1 round.',
  },
  {
    id: 'fast-channel',
    name: 'Fast Channel',
    type: 'class',
    level: 14,
    classId: 'cleric',
    description:
      'Divine energy scours through you faster than usual. When you cast heal or harm, reduce the number of actions you need to spend by 1 (minimum 1 action).',
  },
  {
    id: 'swift-banishment',
    name: 'Swift Banishment',
    type: 'class',
    level: 14,
    classId: 'cleric',
    description:
      'Your holy power can banish extraplanar creatures with a word. When you critically succeed at a check to counteract a summoning effect or a fiend or celestial fails its save against your harm or heal spell, you can attempt to send it back to its home plane using the effect of a 5th-rank banishment spell.',
  },

  // ========================
  // Level 16 Cleric Feats
  // ========================
  {
    id: 'eternal-bane',
    name: 'Eternal Bane',
    type: 'class',
    level: 16,
    classId: 'cleric',
    description:
      'A life of fighting the undead has given you the ability to damage them with unmatched power. Any time you cast a spell that deals vitality damage to undead, you deal an additional 4 vitality damage.',
  },
  {
    id: 'resurrectionist',
    name: 'Resurrectionist',
    type: 'class',
    level: 16,
    classId: 'cleric',
    description:
      "You can bring the dead back to life more easily. You don't need a material component worth a specific amount of gold when you cast raise dead or similar spells. In addition, if you provide the costly material component, the target returns to life in better health, regaining additional Hit Points equal to twice your level.",
  },
  {
    id: 'align-armament',
    name: 'Align Armament',
    type: 'class',
    level: 16,
    classId: 'cleric',
    description:
      "You bring an ally's weapon into alignment with your deity's will. Select a willing creature's weapon within 30 feet. For 1 round, that weapon deals an additional 1d6 spirit damage on each Strike.",
  },
  {
    id: 'ephemeral-connections',
    name: 'Ephemeral Connections',
    type: 'class',
    level: 16,
    classId: 'cleric',
    description:
      'Your connection to the divine allows you to cast certain divine spells beyond the normal limits. Once per day, you can cast a divine spell of 6th rank or lower even if you have no remaining spell slots of the appropriate rank.',
  },

  // ========================
  // Level 18 Cleric Feats
  // ========================
  {
    id: 'channel-avatar',
    name: 'Channel Avatar',
    type: 'class',
    level: 18,
    classId: 'cleric',
    description:
      "You channel the essence of your deity, transforming into an avatar of their power. Once per day, you can cast avatar as a divine innate spell. While in this form, you gain the benefits described in your deity's entry.",
  },
  {
    id: 'miraculous-spell',
    name: 'Miraculous Spell',
    type: 'class',
    level: 18,
    classId: 'cleric',
    description:
      'You can channel divine power far beyond what your spell slots allow. Once per day, you can cast a spell up to 2 ranks lower than your highest-rank spell slot without expending a spell slot.',
  },
  {
    id: 'shield-of-faith',
    name: 'Shield of Faith',
    type: 'class',
    level: 18,
    classId: 'cleric',
    description:
      'Your faith protects your allies as a radiant ward. You can cast divine aegis as a 10th-rank divine innate spell once per day. Allies within the area gain resistance to all damage equal to your Charisma modifier.',
  },
  {
    id: 'radiant-burst',
    name: 'Radiant Burst',
    type: 'class',
    level: 18,
    classId: 'cleric',
    description:
      'You can unleash a massive blast of divine energy. Once per day, when you cast heal or harm with 3 actions, you can double the area of the emanation. Creatures in the area that fail their save are also dazzled for 1 minute (or blinded for 1 round on a critical failure).',
  },

  // ========================
  // Level 20 Cleric Feats
  // ========================
  {
    id: 'avatars-audience',
    name: "Avatar's Audience",
    type: 'class',
    level: 20,
    classId: 'cleric',
    description:
      'Your relationship with your deity is close enough to request a divine audience. You can cast commune as a divine innate spell once per day. Your deity or their direct servants always answer.',
  },
  {
    id: 'maker-of-miracles',
    name: 'Maker of Miracles',
    type: 'class',
    level: 20,
    classId: 'cleric',
    prerequisites: 'Miraculous Spell',
    description:
      'You are a living legend, and your divine power can reshape reality. You can use Miraculous Spell once more per day, and you can use it to cast a spell of any rank up to 2 ranks below your highest-rank spell slot.',
  },
  {
    id: 'metamagic-channel',
    name: 'Metamagic Channel',
    type: 'class',
    level: 20,
    classId: 'cleric',
    description:
      'Deep understanding of divine energy allows you to reshape your channeled energy in ways others cannot. When you cast heal or harm, you can apply two of the following metamagic effects without increasing the casting time: Reach Spell, Widen Spell, or Quickened Casting.',
  },
  {
    id: 'divine-intervention',
    name: 'Divine Intervention',
    type: 'class',
    level: 20,
    classId: 'cleric',
    description:
      'You can beseech your deity to directly intervene in the mortal world on your behalf. Once per day, you can call upon your deity for aid. The GM determines the exact effect, but it is generally equivalent to a spell or ability of the highest rank you can cast.',
  },
]
