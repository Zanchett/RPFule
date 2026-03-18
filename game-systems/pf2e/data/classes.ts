import { GameClass, ProficiencyRank } from '../../../src/types'

export const classes: GameClass[] = [
  {
    id: 'fighter',
    name: 'Fighter',
    description:
      'Fighting for honor, greed, loyalty, or simply the thrill of battle, fighters are undisputed masters of weaponry and combat techniques. They combine rigorous training with physical prowess to deal devastating blows in combat.',
    keyAbility: ['str', 'dex'],
    hp: 10,
    perception: 'expert',
    savingThrows: {
      fortitude: 'expert',
      reflex: 'expert',
      will: 'trained',
    },
    skills: {
      trained: ['Acrobatics', 'Athletics'],
      additionalTrainedCount: 3,
    },
    attacks: {
      simple: 'expert',
      martial: 'expert',
      unarmed: 'trained',
    },
    defenses: {
      unarmored: 'trained',
      light: 'trained',
      medium: 'trained',
      heavy: 'trained',
    },
    classDC: 'trained',
    features: [
      {
        name: 'Attack of Opportunity',
        level: 1,
        description:
          'You can make a melee Strike against a creature within reach that uses a manipulate or move action, makes a ranged attack, or leaves a square during a move action. This reaction disrupts the triggering action on a critical hit.',
      },
      {
        name: 'Shield Block',
        level: 1,
        description:
          'You gain the Shield Block general feat, allowing you to use your reaction to reduce damage taken by the shield\'s hardness when you have a shield raised.',
      },
    ],
    isSpellcaster: false,
  },
  {
    id: 'rogue',
    name: 'Rogue',
    description:
      'Rogues rely on skill, stealth, and their foes\' vulnerabilities to get the upper hand in any situation. They have a wide array of skills and specialize in sneak attacks that deal devastating damage to unsuspecting enemies.',
    keyAbility: ['dex'],
    hp: 8,
    perception: 'expert',
    savingThrows: {
      fortitude: 'trained',
      reflex: 'expert',
      will: 'expert',
    },
    skills: {
      trained: ['Stealth'],
      additionalTrainedCount: 7,
    },
    attacks: {
      simple: 'trained',
      martial: 'trained',
      unarmed: 'trained',
    },
    defenses: {
      unarmored: 'trained',
      light: 'trained',
      medium: 'untrained',
      heavy: 'untrained',
    },
    classDC: 'trained',
    features: [
      {
        name: 'Sneak Attack',
        level: 1,
        description:
          'When you Strike a flat-footed creature with an agile or finesse melee weapon, an agile or finesse unarmed attack, or a ranged weapon attack, you deal an extra 1d6 precision damage. This increases as you gain levels.',
      },
      {
        name: 'Surprise Attack',
        level: 1,
        description:
          'On the first round of combat, creatures that haven\'t acted yet are flat-footed to you. This gives you an immediate opportunity to land a Sneak Attack at the start of most encounters.',
      },
      {
        name: "Rogue's Racket",
        level: 1,
        description:
          'You choose a racket that represents your preferred style: Thief, Ruffian, Scoundrel, or Eldritch Trickster. Your racket grants additional ways to use your key abilities and Sneak Attack.',
      },
    ],
    isSpellcaster: false,
  },
  {
    id: 'cleric',
    name: 'Cleric',
    description:
      'Deities work their will upon the world through their clerics, who serve as conduits for divine power. A cleric commands the magic of their deity, channeling divine energy to heal allies or smite foes.',
    keyAbility: ['wis'],
    hp: 8,
    perception: 'trained',
    savingThrows: {
      fortitude: 'trained',
      reflex: 'trained',
      will: 'expert',
    },
    skills: {
      trained: ['Religion'],
      additionalTrainedCount: 2,
    },
    attacks: {
      simple: 'trained',
      martial: 'untrained',
      unarmed: 'trained',
    },
    defenses: {
      unarmored: 'trained',
      light: 'trained',
      medium: 'trained',
      heavy: 'untrained',
    },
    classDC: 'trained',
    features: [
      {
        name: 'Divine Font',
        level: 1,
        description:
          'Through your deity\'s blessing, you gain additional heal or harm spells. You receive extra spell slots that can only be used to cast heal or harm, depending on your deity\'s alignment and your choice.',
      },
      {
        name: 'Doctrine',
        level: 1,
        description:
          'You follow a particular doctrine of your faith, such as Cloistered Cleric or Warpriest. Your doctrine determines additional trained skills, proficiency progression, and the role you fill in your adventuring party.',
      },
    ],
    isSpellcaster: true,
    spellcasting: {
      tradition: 'divine',
      type: 'prepared',
      cantripsAtLevel1: 5,
      spellSlotsAtLevel1: 2,
    },
  },
  {
    id: 'wizard',
    name: 'Wizard',
    description:
      'Wizards are supreme academics of the arcane arts, using their mastery of magic to shape reality to their will. Through extensive study and memorization, they command a vast repertoire of spells recorded in their spellbooks.',
    keyAbility: ['int'],
    hp: 6,
    perception: 'trained',
    savingThrows: {
      fortitude: 'trained',
      reflex: 'trained',
      will: 'expert',
    },
    skills: {
      trained: ['Arcana'],
      additionalTrainedCount: 2,
    },
    attacks: {
      simple: 'trained',
      martial: 'untrained',
      unarmed: 'trained',
    },
    defenses: {
      unarmored: 'trained',
      light: 'untrained',
      medium: 'untrained',
      heavy: 'untrained',
    },
    classDC: 'trained',
    features: [
      {
        name: 'Arcane Spellcasting',
        level: 1,
        description:
          'You study spells from the arcane tradition, preparing them each day from your spellbook. You can cast a number of arcane spells each day determined by your level and spell slots.',
      },
      {
        name: 'Arcane School',
        level: 1,
        description:
          'You specialize in one of the eight schools of arcane magic, such as Evocation or Necromancy. Your chosen school grants you an additional spell slot for school spells and a focus spell.',
      },
      {
        name: 'Arcane Bond',
        level: 1,
        description:
          'You have forged a mystical connection to an item, such as a staff or amulet. Once per day, you can use your bonded item to cast a spell you have prepared without expending a spell slot.',
      },
    ],
    isSpellcaster: true,
    spellcasting: {
      tradition: 'arcane',
      type: 'prepared',
      cantripsAtLevel1: 5,
      spellSlotsAtLevel1: 2,
    },
  },
  {
    id: 'bard',
    name: 'Bard',
    description:
      'Bards are masters of art, performance, and magic, weaving spells through song, oratory, and other creative expressions. They draw upon occult knowledge and the power of emotions to inspire allies, demoralize foes, and reshape the battlefield with versatile enchantments.',
    keyAbility: ['cha'],
    hp: 8,
    perception: 'expert',
    savingThrows: {
      fortitude: 'trained',
      reflex: 'trained',
      will: 'expert',
    },
    skills: {
      trained: ['Occultism', 'Performance'],
      additionalTrainedCount: 4,
    },
    attacks: {
      simple: 'trained',
      martial: 'untrained',
      unarmed: 'trained',
    },
    defenses: {
      unarmored: 'trained',
      light: 'trained',
      medium: 'untrained',
      heavy: 'untrained',
    },
    classDC: 'trained',
    features: [
      {
        name: 'Composition Spells',
        level: 1,
        description:
          'You can weave magic into your performances to create unique composition cantrips and focus spells. You gain the Inspire Courage composition cantrip, which bolsters your allies with a +1 status bonus to attack rolls, damage rolls, and saves against fear effects.',
      },
      {
        name: 'Muses',
        level: 1,
        description:
          'You choose a muse that fuels your creative magic: Enigma, Maestro, or Polymath. Your muse grants you a bonus feat and determines the focus of your bardic studies, shaping both your spell repertoire and how you approach performance-based magic.',
      },
    ],
    isSpellcaster: true,
    spellcasting: {
      tradition: 'occult',
      type: 'spontaneous',
      cantripsAtLevel1: 5,
      spellSlotsAtLevel1: 2,
    },
  },
  {
    id: 'druid',
    name: 'Druid',
    description:
      'Druids are devotees of the natural world, wielding primal magic drawn from the elemental forces, plants, and animals that shape the wilderness. Bound by ancient druidic traditions, they serve as guardians of the balance between civilization and the untamed wilds.',
    keyAbility: ['wis'],
    hp: 8,
    perception: 'trained',
    savingThrows: {
      fortitude: 'trained',
      reflex: 'trained',
      will: 'expert',
    },
    skills: {
      trained: ['Nature'],
      additionalTrainedCount: 2,
    },
    attacks: {
      simple: 'trained',
      martial: 'untrained',
      unarmed: 'trained',
    },
    defenses: {
      unarmored: 'trained',
      light: 'trained',
      medium: 'trained',
      heavy: 'untrained',
    },
    classDC: 'trained',
    features: [
      {
        name: 'Druidic Language',
        level: 1,
        description:
          'You know Druidic, a secret language known only to druids, which you are forbidden to teach to non-druids. Druidic has its own script, and you can use it to leave hidden messages that only other druids can understand.',
      },
      {
        name: 'Druidic Order',
        level: 1,
        description:
          'You align yourself with a druidic order that shapes your connection to nature: Animal, Leaf, Storm, or Wild. Your order grants you a special order spell, determines your starting focus pool, and provides thematic abilities tied to your chosen aspect of the natural world.',
      },
      {
        name: 'Wild Empathy',
        level: 1,
        description:
          'You have a primal connection to the creatures of the natural world. You can use Diplomacy to Make an Impression on animals and to make very simple Requests of them, allowing you to communicate your intentions and calm hostile beasts.',
      },
    ],
    isSpellcaster: true,
    spellcasting: {
      tradition: 'primal',
      type: 'prepared',
      cantripsAtLevel1: 5,
      spellSlotsAtLevel1: 2,
    },
  },
  {
    id: 'ranger',
    name: 'Ranger',
    description:
      'Rangers are skilled hunters and trackers who patrol the edges of civilization, combining martial prowess with an intimate knowledge of the natural world. They excel at singling out enemies and bringing them down with relentless precision, whether through ranged attacks or twin-weapon fighting.',
    keyAbility: ['str', 'dex'],
    hp: 10,
    perception: 'expert',
    savingThrows: {
      fortitude: 'expert',
      reflex: 'expert',
      will: 'trained',
    },
    skills: {
      trained: ['Nature', 'Survival'],
      additionalTrainedCount: 4,
    },
    attacks: {
      simple: 'trained',
      martial: 'trained',
      unarmed: 'trained',
    },
    defenses: {
      unarmored: 'trained',
      light: 'trained',
      medium: 'trained',
      heavy: 'untrained',
    },
    classDC: 'trained',
    features: [
      {
        name: 'Hunt Prey',
        level: 1,
        description:
          'You designate a single creature as your prey, focusing your attention and tactics against that target. While hunting your prey, you gain a +2 circumstance bonus to Perception checks to Seek it and to Survival checks to Track it, and you ignore the penalty for making ranged Strikes within your second range increment.',
      },
      {
        name: "Hunter's Edge",
        level: 1,
        description:
          'You choose a combat style that defines how you dispatch your prey: Flurry, Precision, or Outwit. Flurry lets you attack rapidly with reduced multiple attack penalties, Precision adds extra damage to your first hit each round, and Outwit grants tactical advantages through superior knowledge of your quarry.',
      },
    ],
    isSpellcaster: false,
  },
  {
    id: 'witch',
    name: 'Witch',
    description:
      'Witches gain their magic through a pact with a mysterious patron, channeling otherworldly power through a loyal familiar that serves as their conduit to the unknown. They specialize in hexes and curses, wielding strange and versatile magic that blurs the line between arcane study and supernatural bargain.',
    keyAbility: ['int'],
    hp: 6,
    perception: 'trained',
    savingThrows: {
      fortitude: 'trained',
      reflex: 'trained',
      will: 'expert',
    },
    skills: {
      trained: [],
      additionalTrainedCount: 3,
    },
    attacks: {
      simple: 'trained',
      martial: 'untrained',
      unarmed: 'trained',
    },
    defenses: {
      unarmored: 'trained',
      light: 'untrained',
      medium: 'untrained',
      heavy: 'untrained',
    },
    classDC: 'trained',
    features: [
      {
        name: 'Patron',
        level: 1,
        description:
          'You have pledged yourself to a mysterious patron that grants you magical power. Your patron determines your hex cantrip and your spell list tradition, shaping the nature of the otherworldly magic you wield and the enigmatic goals you serve.',
      },
      {
        name: 'Familiar',
        level: 1,
        description:
          'Your patron has gifted you a small creature as your familiar, which serves as the vessel for your spells. Your familiar stores your prepared spells rather than a spellbook, and each day you commune with it to prepare your magic for the day ahead.',
      },
      {
        name: 'Hexes',
        level: 1,
        description:
          'Your patron grants you a special hex cantrip that reflects the nature of your pact. Hex cantrips are focus spells that can be sustained to extend their effects, giving you a powerful and flexible tool to curse your enemies or bolster your allies in combat.',
      },
    ],
    isSpellcaster: true,
    spellcasting: {
      tradition: 'occult',
      type: 'prepared',
      cantripsAtLevel1: 5,
      spellSlotsAtLevel1: 2,
    },
  },
]
