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
    advancement: {
      classFeatLevels: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      skillFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      generalFeatLevels: [3, 7, 11, 15, 19],
      skillIncreaseLevels: [3, 5, 7, 9, 11, 13, 15, 17, 19],
    },
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
    advancement: {
      classFeatLevels: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      skillFeatLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      generalFeatLevels: [3, 7, 11, 15, 19],
      skillIncreaseLevels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    },
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
    advancement: {
      classFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      skillFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      generalFeatLevels: [3, 7, 11, 15, 19],
      skillIncreaseLevels: [3, 5, 7, 9, 11, 13, 15, 17, 19],
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
    advancement: {
      classFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      skillFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      generalFeatLevels: [3, 7, 11, 15, 19],
      skillIncreaseLevels: [3, 5, 7, 9, 11, 13, 15, 17, 19],
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
    advancement: {
      classFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      skillFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      generalFeatLevels: [3, 7, 11, 15, 19],
      skillIncreaseLevels: [3, 5, 7, 9, 11, 13, 15, 17, 19],
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
    advancement: {
      classFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      skillFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      generalFeatLevels: [3, 7, 11, 15, 19],
      skillIncreaseLevels: [3, 5, 7, 9, 11, 13, 15, 17, 19],
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
    advancement: {
      classFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      skillFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      generalFeatLevels: [3, 7, 11, 15, 19],
      skillIncreaseLevels: [3, 5, 7, 9, 11, 13, 15, 17, 19],
    },
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
    advancement: {
      classFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      skillFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      generalFeatLevels: [3, 7, 11, 15, 19],
      skillIncreaseLevels: [3, 5, 7, 9, 11, 13, 15, 17, 19],
    },
  },
  {
    id: 'kineticist',
    name: 'Kineticist',
    description:
      'The power of the elements flows from within you. Roaring fire, pure water, fleeting air, steadfast earth, twisting wood, slicing metal. A kinetic gate inextricably tied to your body channels power directly from the elemental planes, causing elements to leap to your hand, whirl around your body, and blast foes at your whim. As your connection to the planes grows, you attain true mastery over your chosen elements.',
    keyAbility: ['con'],
    hp: 8,
    perception: 'trained',
    savingThrows: {
      fortitude: 'expert',
      reflex: 'expert',
      will: 'trained',
    },
    skills: {
      trained: ['Nature'],
      additionalTrainedCount: 3,
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
        name: 'Kinetic Gate',
        level: 1,
        description:
          'You gain a kinetic gate that channels elemental energy. Choose a single gate (one element with an impulse junction) or a dual gate (two elements). Your gate determines which elemental impulses you can access. Elements: Air, Earth, Fire, Metal, Water, or Wood.',
      },
      {
        name: 'Kinetic Aura',
        level: 1,
        description:
          'Pieces of your kinetic element flow around you in a 10-foot emanation. You gain the Channel Elements action to activate your kinetic aura. While your aura is active, you can use impulses. Your aura deactivates when you are knocked unconscious, use an overflow impulse, or dismiss it.',
      },
      {
        name: 'Elemental Blast',
        level: 1,
        description:
          'You collect elemental matter from your aura and swing or hurl it. Make a melee or ranged impulse attack against a creature\'s AC. Add your Strength modifier to melee blast damage. A 2-action Elemental Blast adds your Constitution modifier as a status bonus to damage. Damage increases by one die every 4 levels.',
      },
      {
        name: 'Base Kinesis',
        level: 1,
        description:
          'You can perform basic manipulations of your chosen element—generate, move, or snuff small amounts of your element within 30 feet. This is a versatile utility ability for interacting with your element outside of combat.',
      },
      {
        name: 'Extract Element',
        level: 3,
        description:
          'You extract elemental matter from a creature\'s body to weaken it. Target a creature within 30 feet with a trait matching your kinetic element. It takes 2d4 damage (Fortitude save), and you gain a benefit based on the element extracted.',
      },
      {
        name: "Gate's Threshold",
        level: 5,
        description:
          'You reach a new threshold of elemental power. Choose to specialize further in an existing element or expand into a new one. You gain this again at levels 9, 13, and 17, potentially accessing all six elements by level 17.',
      },
      {
        name: 'Kinetic Durability',
        level: 7,
        description:
          'The elemental energy flowing through your body toughens you. Your proficiency rank for saving throws increases: your Fortitude save becomes master, and your Will save becomes expert.',
      },
      {
        name: 'Kinetic Expertise',
        level: 7,
        description:
          'Your growing mastery over your elements increases the accuracy and power of your impulses. Your proficiency rank for your kineticist class DC increases to expert.',
      },
      {
        name: 'Perception Expertise',
        level: 9,
        description:
          'You remain alert to threats around you. Your proficiency rank for Perception increases to expert.',
      },
      {
        name: 'Kinetic Quickness',
        level: 11,
        description:
          'Elemental energy quickens your reflexes. Your proficiency rank for Reflex saves increases to master.',
      },
      {
        name: 'Reflow Elements',
        level: 11,
        description:
          'You learn to retune the flow of your kinetic gate. During your daily preparations, you can swap one of your impulse feats for a different one you qualify for.',
      },
      {
        name: 'Weapon Expertise',
        level: 11,
        description:
          'You\'ve improved your combat skill. Your proficiency ranks for simple weapons and unarmed attacks increase to expert.',
      },
      {
        name: 'Light Armor Expertise',
        level: 13,
        description:
          'You\'ve learned how to dodge while wearing light armor or no armor. Your proficiency ranks for light armor and unarmored defense increase to expert.',
      },
      {
        name: 'Weapon Specialization',
        level: 13,
        description:
          'You deal additional damage with weapons and unarmed attacks you are expert with. You deal 2 additional damage with weapons and unarmed attacks in which you\'re an expert, 3 with master, and 4 with legendary.',
      },
      {
        name: 'Greater Kinetic Durability',
        level: 15,
        description:
          'Your elemental resilience reaches new heights. Your proficiency rank for Fortitude saves increases to legendary, and your Will save proficiency increases to master.',
      },
      {
        name: 'Kinetic Mastery',
        level: 15,
        description:
          'You achieve supreme control over your elements. Your proficiency rank for your kineticist class DC increases to master.',
      },
      {
        name: 'Double Reflow',
        level: 17,
        description:
          'Your ability to retune your kinetic gate improves. During your daily preparations, you can swap two impulse feats instead of one.',
      },
      {
        name: 'Final Gate',
        level: 19,
        description:
          'You open your kinetic gate to its fullest extent. You gain access to the most powerful impulses and your connection to the elemental planes reaches its apex.',
      },
      {
        name: 'Kinetic Legend',
        level: 19,
        description:
          'Your kinetic power is unmatched. Your proficiency rank for your kineticist class DC increases to legendary.',
      },
      {
        name: 'Light Armor Mastery',
        level: 19,
        description:
          'Your skill with light armor improves further. Your proficiency ranks for light armor and unarmored defense increase to master.',
      },
    ],
    isSpellcaster: false,
    advancement: {
      classFeatLevels: [1, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      skillFeatLevels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      generalFeatLevels: [3, 7, 11, 15, 19],
      skillIncreaseLevels: [3, 5, 7, 9, 11, 13, 15, 17, 19],
    },
  },
]
