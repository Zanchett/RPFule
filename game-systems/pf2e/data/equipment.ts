import { Equipment } from '../../../src/types'
import { magicEquipment } from './equipment-magic'

const baseEquipment: Equipment[] = [
  // ========================
  // Weapons - Simple Melee
  // ========================
  {
    id: 'dagger',
    name: 'Dagger',
    category: 'weapon',
    price: 20,
    bulk: 'L',
    description: 'A short blade used for stabbing or throwing.',
    damage: '1d4',
    damageType: 'piercing',
    weaponGroup: 'knife',
    traits: ['agile', 'finesse', 'thrown 10 ft', 'versatile S'],
    range: 10,
  },
  {
    id: 'mace',
    name: 'Mace',
    category: 'weapon',
    price: 100,
    bulk: 1,
    description:
      'A heavy, blunt weapon consisting of a weighted head on a handle.',
    damage: '1d6',
    damageType: 'bludgeoning',
    weaponGroup: 'club',
    traits: ['shove'],
  },
  {
    id: 'staff',
    name: 'Staff',
    category: 'weapon',
    price: 0,
    bulk: 1,
    description: 'A long piece of wood used as a walking stick or weapon.',
    damage: '1d4',
    damageType: 'bludgeoning',
    weaponGroup: 'club',
    traits: ['two-hand d8'],
  },
  {
    id: 'spear',
    name: 'Spear',
    category: 'weapon',
    price: 10,
    bulk: 1,
    description: 'A long shaft with a pointed tip, used for thrusting or throwing.',
    damage: '1d6',
    damageType: 'piercing',
    weaponGroup: 'spear',
    traits: ['thrown 20 ft'],
    range: 20,
  },

  // ========================
  // Weapons - Martial Melee
  // ========================
  {
    id: 'longsword',
    name: 'Longsword',
    category: 'weapon',
    price: 100,
    bulk: 1,
    description:
      'A classic straight blade, equally suited to slashing and thrusting.',
    damage: '1d8',
    damageType: 'slashing',
    weaponGroup: 'sword',
    traits: ['versatile P'],
  },
  {
    id: 'shortsword',
    name: 'Shortsword',
    category: 'weapon',
    price: 90,
    bulk: 'L',
    description: 'A short, lightweight blade ideal for quick strikes.',
    damage: '1d6',
    damageType: 'piercing',
    weaponGroup: 'sword',
    traits: ['agile', 'finesse', 'versatile S'],
  },
  {
    id: 'greataxe',
    name: 'Greataxe',
    category: 'weapon',
    price: 200,
    bulk: 2,
    description:
      'A massive axe with a broad blade designed to cleave through enemies.',
    damage: '1d12',
    damageType: 'slashing',
    weaponGroup: 'axe',
    traits: ['sweep'],
  },
  {
    id: 'rapier',
    name: 'Rapier',
    category: 'weapon',
    price: 200,
    bulk: 1,
    description:
      'A long, thin blade with a sharp point, favored by duelists.',
    damage: '1d6',
    damageType: 'piercing',
    weaponGroup: 'sword',
    traits: ['deadly d8', 'disarm', 'finesse'],
  },
  {
    id: 'warhammer',
    name: 'Warhammer',
    category: 'weapon',
    price: 100,
    bulk: 1,
    description:
      'A hammer designed for battle, equally effective against armored and unarmored foes.',
    damage: '1d8',
    damageType: 'bludgeoning',
    weaponGroup: 'hammer',
    traits: ['shove'],
  },

  // ========================
  // Weapons - Ranged
  // ========================
  {
    id: 'longbow',
    name: 'Longbow',
    category: 'weapon',
    price: 600,
    bulk: 2,
    description:
      'A tall bow that requires great strength to draw, capable of launching arrows at tremendous distances.',
    damage: '1d8',
    damageType: 'piercing',
    weaponGroup: 'bow',
    traits: ['deadly d10', 'volley 30 ft'],
    range: 100,
  },
  {
    id: 'shortbow',
    name: 'Shortbow',
    category: 'weapon',
    price: 300,
    bulk: 1,
    description:
      'A compact bow that is easy to carry and quick to use.',
    damage: '1d6',
    damageType: 'piercing',
    weaponGroup: 'bow',
    traits: ['deadly d10'],
    range: 60,
  },
  {
    id: 'crossbow',
    name: 'Crossbow',
    category: 'weapon',
    price: 300,
    bulk: 1,
    description:
      'A mechanical bow mounted on a stock that shoots bolts. Requires an Interact action to reload.',
    damage: '1d8',
    damageType: 'piercing',
    weaponGroup: 'bow',
    traits: ['range increment 120 ft'],
    range: 120,
  },

  // ========================
  // Armor - Light
  // ========================
  {
    id: 'padded-armor',
    name: 'Padded Armor',
    category: 'armor',
    price: 20,
    bulk: 'L',
    description:
      'Layers of quilted cloth provide basic padding against blows.',
    acBonus: 1,
    dexCap: 3,
    checkPenalty: 0,
    speedPenalty: 0,
    armorStrength: 10,
    armorGroup: 'cloth',
  },
  {
    id: 'leather-armor',
    name: 'Leather Armor',
    category: 'armor',
    price: 200,
    bulk: 1,
    description:
      'A suit of armor made from hardened leather, offering decent protection with good flexibility.',
    acBonus: 1,
    dexCap: 4,
    checkPenalty: -1,
    speedPenalty: 0,
    armorStrength: 10,
    armorGroup: 'leather',
  },
  {
    id: 'studded-leather',
    name: 'Studded Leather',
    category: 'armor',
    price: 300,
    bulk: 1,
    description:
      'Leather armor reinforced with metal studs for additional protection.',
    acBonus: 2,
    dexCap: 3,
    checkPenalty: -1,
    speedPenalty: 0,
    armorStrength: 12,
    armorGroup: 'leather',
  },
  {
    id: 'chain-shirt',
    name: 'Chain Shirt',
    category: 'armor',
    price: 500,
    bulk: 1,
    description:
      'A shirt of interlocking metal rings that hangs to mid-thigh, offering good protection for light armor.',
    acBonus: 2,
    dexCap: 3,
    checkPenalty: -1,
    speedPenalty: 0,
    armorStrength: 12,
    armorGroup: 'chain',
    traits: ['flexible', 'noisy'],
  },

  // ========================
  // Armor - Medium
  // ========================
  {
    id: 'chain-mail',
    name: 'Chain Mail',
    category: 'armor',
    price: 600,
    bulk: 2,
    description:
      'A full suit of interlocking metal rings providing solid protection.',
    acBonus: 4,
    dexCap: 1,
    checkPenalty: -2,
    speedPenalty: -5,
    armorStrength: 16,
    armorGroup: 'chain',
    traits: ['flexible', 'noisy'],
  },
  {
    id: 'scale-mail',
    name: 'Scale Mail',
    category: 'armor',
    price: 400,
    bulk: 2,
    description:
      'Overlapping metal scales attached to a leather backing provide reliable protection.',
    acBonus: 3,
    dexCap: 2,
    checkPenalty: -2,
    speedPenalty: -5,
    armorStrength: 14,
    armorGroup: 'composite',
  },

  // ========================
  // Armor - Heavy
  // ========================
  {
    id: 'half-plate',
    name: 'Half Plate',
    category: 'armor',
    price: 1800,
    bulk: 3,
    description:
      'Plate armor covering the most vital areas, with chain and leather protecting the joints.',
    acBonus: 5,
    dexCap: 1,
    checkPenalty: -3,
    speedPenalty: -10,
    armorStrength: 16,
    armorGroup: 'plate',
  },

  // ========================
  // Shields
  // ========================
  {
    id: 'wooden-shield',
    name: 'Wooden Shield',
    category: 'shield',
    price: 100,
    bulk: 1,
    description:
      'A round shield made of wood, offering basic defense. Hardness 3, HP 12, BT 6.',
    acBonus: 2,
  },
  {
    id: 'steel-shield',
    name: 'Steel Shield',
    category: 'shield',
    price: 200,
    bulk: 1,
    description:
      'A sturdy shield made of steel, offering superior defense. Hardness 5, HP 20, BT 10.',
    acBonus: 2,
  },

  // ========================
  // Adventuring Gear
  // ========================
  {
    id: 'backpack',
    name: 'Backpack',
    category: 'gear',
    price: 10,
    bulk: 0,
    description:
      'A sturdy leather pack that can hold up to 4 Bulk of items. Items stored in the backpack are not counted toward your Bulk limit.',
  },
  {
    id: 'bedroll',
    name: 'Bedroll',
    category: 'gear',
    price: 2,
    bulk: 'L',
    description:
      'A simple rolled-up blanket and padding for sleeping outdoors.',
  },
  {
    id: 'rope',
    name: 'Rope (50 feet)',
    category: 'gear',
    price: 50,
    bulk: 1,
    description:
      'A 50-foot length of hemp rope strong enough to support the weight of multiple people.',
  },
  {
    id: 'torch',
    name: 'Torch',
    category: 'gear',
    price: 1,
    bulk: 'L',
    description:
      'A piece of wood with one end wrapped in cloth soaked in a flammable substance. Sheds bright light in a 20-foot radius and dim light for the next 20 feet for 1 hour.',
  },
  {
    id: 'waterskin',
    name: 'Waterskin',
    category: 'gear',
    price: 5,
    bulk: 'L',
    description:
      'A leather pouch used to carry water, holding enough for one day of hydration.',
  },
  {
    id: 'rations',
    name: 'Rations (1 week)',
    category: 'gear',
    price: 40,
    bulk: 'L',
    description:
      'A week\'s supply of travel-ready food sufficient to feed one person.',
  },
  {
    id: 'flint-and-steel',
    name: 'Flint and Steel',
    category: 'gear',
    price: 5,
    bulk: 0,
    description:
      'A small piece of flint and a steel striker used to light fires. Using flint and steel to create a flame requires using the Interact action for a full minute.',
  },
  {
    id: 'chalk',
    name: 'Chalk (10 pieces)',
    category: 'gear',
    price: 1,
    bulk: 0,
    description:
      'Sticks ofite chalk useful for marking walls, floors, and other surfaces.',
  },
  {
    id: 'candle',
    name: 'Candle (10)',
    category: 'gear',
    price: 1,
    bulk: 0,
    description:
      'A set of 10 small tallow candles. Each candle sheds dim light in a 10-foot radius for 8 hours.',
  },
  {
    id: 'holy-text',
    name: 'Religious Text',
    category: 'gear',
    price: 100,
    bulk: 'L',
    description:
      'A sacred book or scroll containing the prayers, tenets, and scriptures of a specific deity. Required for some divine rituals and class features.',
  },

  // ========================
  // Kits
  // ========================
  {
    id: 'adventurers-pack',
    name: "Adventurer's Pack",
    category: 'kit',
    price: 70,
    bulk: 1,
    description:
      'A collection of essential adventuring supplies. Contains a backpack, bedroll, 10 pieces of chalk, flint and steel, 50 feet of rope, 2 weeks of rations, soap, 5 torches, and a waterskin.',
  },

  // ========================
  // Tools
  // ========================
  {
    id: 'thieves-tools',
    name: "Thieves' Tools",
    category: 'tool',
    price: 300,
    bulk: 'L',
    description:
      'A set of lockpicks and other tools for disabling traps and picking locks. Required to attempt to Pick a Lock or Disable a Device without penalty.',
  },
  {
    id: 'healers-tools',
    name: "Healer's Tools",
    category: 'tool',
    price: 500,
    bulk: 1,
    description:
      'A medical kit containing bandages, salves, and surgical implements. Required for Medicine checks to Treat Wounds, Treat Disease, and Treat Poison.',
  },
  {
    id: 'writing-set',
    name: 'Writing Set',
    category: 'tool',
    price: 100,
    bulk: 'L',
    description:
      'A set of quills, ink, and parchment for recording notes, writing letters, and transcribing scrolls.',
  },
  {
    id: 'component-pouch',
    name: 'Material Component Pouch',
    category: 'tool',
    price: 50,
    bulk: 'L',
    description:
      'A small waterproof pouch containing the material components needed for spellcasting. Required for casting spells with material components.',
  },
]

export const equipment: Equipment[] = [...baseEquipment, ...magicEquipment]
