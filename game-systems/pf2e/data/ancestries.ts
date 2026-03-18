import { Ancestry, Heritage } from '../../../src/types'

// Versatile heritages available to all ancestries
const versatileHeritages: Heritage[] = [
  {
    id: 'aasimar',
    name: 'Aasimar',
    description:
      'You descend from celestial beings or were touched by the divine radiance of the Upper Planes. Your heritage manifests in an inner light that suffuses your being, granting you resilience against holy forces and a connection to the celestial realms.',
    benefits: 'Gain the Celestial trait. You gain resistance to holy damage equal to half your level (minimum 1), and you can cast light as a divine innate cantrip.',
  },
  {
    id: 'tiefling',
    name: 'Tiefling',
    description:
      'You carry the blood of fiends — devils, demons, or other creatures of the Lower Planes. This manifests in subtle or overt physical signs and grants you an affinity for fire and shadow, along with a commanding presence that unnerves others.',
    benefits: 'Gain the Fiend trait. You gain resistance to fire damage equal to half your level (minimum 1), and you gain a +1 circumstance bonus to Intimidation checks.',
  },
  {
    id: 'dhampir',
    name: 'Dhampir',
    description:
      'You are the living offspring of a vampire or were touched by undeath in some way. You straddle the line between life and death, granting you unnatural resilience but an unusual relationship with healing magic — positive energy harms you while negative energy mends your wounds.',
    benefits: 'Gain the Undead trait. Positive healing effects treat you as undead (harming instead of healing), while negative energy heals you. You gain darkvision and a +1 circumstance bonus to saves against death effects.',
  },
  {
    id: 'changeling',
    name: 'Changeling',
    description:
      'You are the offspring of a hag and a mortal, carrying fey-touched blood that grants you an intuitive sense for deception and hidden truths. Your hag heritage whispers to you in dreams, granting occult insight and a sharp awareness of your surroundings.',
    benefits: 'Gain the Hag trait. You gain a +1 circumstance bonus to Perception checks and access to one occult innate cantrip of your choice (Charisma-based).',
  },
  {
    id: 'duskwalker',
    name: 'Duskwalker',
    description:
      'You were infused with the essence of the Boneyard — the realm between life and death — granting you a spiritual connection to the cycle of souls. You are naturally attuned to the presence of undead and possess a resilience against forces that would snuff out life.',
    benefits: 'Gain the Spirit trait. You gain resistance to negative energy equal to half your level (minimum 1), and you gain a +1 circumstance bonus to checks and saves against undead creatures.',
  },
  {
    id: 'geniekin',
    name: 'Geniekin',
    description:
      'One of your ancestors was a genie or you were imbued with elemental energy from the Elemental Planes. Your elemental nature manifests as an affinity for a specific element — fire, water, air, or earth — granting you resistance and minor elemental abilities.',
    benefits: 'Gain the Elemental trait. Choose an element (fire, water, air, or earth). You gain resistance to the associated damage type equal to half your level (minimum 1) and a minor elemental ability based on your choice.',
  },
  {
    id: 'beastkin',
    name: 'Beastkin',
    description:
      'You carry a primal connection to the animal kingdom, granting you bestial features and the ability to partially transform. Whether through a curse, blessing, or ancestral bloodline, your animal nature grants you natural weapons and heightened senses.',
    benefits: 'Gain the Beast trait. You gain a natural unarmed attack (bite or claw) dealing 1d4 damage, and a +1 circumstance bonus to Perception checks involving scent or hearing.',
  },
  {
    id: 'reflection',
    name: 'Reflection',
    description:
      'You are a mirror-born entity — a duplicate, echo, or divergent copy of another being. Whether you emerged from a magical mirror, a planar rift, or an arcane experiment, your nature grants you an uncanny ability to mimic others and obscure your true identity.',
    benefits: 'Gain the Reflection trait. You gain a +2 circumstance bonus to Deception checks to Impersonate and to Disguise yourself. Once per day, you can perfectly mimic a voice you have heard.',
  },
]

export const ancestries: Ancestry[] = [
  {
    id: 'human',
    name: 'Human',
    description:
      'Humans are incredibly diverse and adaptable, found in nearly every environment across Golarion. Their ambition and versatility make them one of the most widespread ancestries in the world.',
    hp: 8,
    size: 'Medium',
    speed: 25,
    abilityBoosts: ['free', 'free'],
    abilityFlaws: [],
    languages: ['Common'],
    traits: ['Human', 'Humanoid'],
    specialAbilities: [
      'Humans select one additional language at 1st level from the list of common languages and any uncommon languages they have access to.',
    ],
    heritages: [
      {
        id: 'versatile-human',
        name: 'Versatile Human',
        description:
          'Your human adaptability manifests in a broad range of talents. You gain a general feat of your choice at 1st level, in addition to the one all characters receive.',
        benefits: 'Gain a 1st-level general feat.',
      },
      {
        id: 'skilled-human',
        name: 'Skilled Human',
        description:
          'Your ingenuity allows you to pick up new skills with ease. You become trained in one additional skill of your choice at 1st level.',
        benefits: 'Trained in one additional skill of your choice.',
      },
      {
        id: 'half-elf',
        name: 'Half-Elf',
        description:
          'One of your parents was an elf, granting you a mix of human versatility and elven grace. You gain low-light vision and the Elf trait in addition to the Human trait.',
        benefits: 'Gain low-light vision and the Elf trait.',
      },
      {
        id: 'half-orc',
        name: 'Half-Orc',
        description:
          'One of your parents was an orc, granting you a blend of human adaptability and orcish resilience. You gain low-light vision and the Orc trait in addition to the Human trait.',
        benefits: 'Gain low-light vision and the Orc trait.',
      },
      {
        id: 'wintertouched-human',
        name: 'Wintertouched Human',
        description:
          'You are descended from people who braved the coldest climates, and the chill of winter has seeped into your blood. You gain cold resistance equal to half your level (minimum 1).',
        benefits: 'Cold resistance equal to half your level (minimum 1).',
      },
      ...versatileHeritages,
    ],
  },
  {
    id: 'elf',
    name: 'Elf',
    description:
      'Elves are a long-lived people with a deep connection to the natural world and an innate affinity for magic. They possess keen senses and a grace that few other ancestries can match.',
    hp: 6,
    size: 'Medium',
    speed: 30,
    abilityBoosts: ['dex', 'int', 'free'],
    abilityFlaws: ['con'],
    languages: ['Common', 'Elven'],
    traits: ['Elf', 'Humanoid'],
    specialAbilities: [
      'Low-light vision: You can see in dim light as though it were bright light.',
    ],
    heritages: [
      {
        id: 'arctic-elf',
        name: 'Arctic Elf',
        description:
          'You dwell deep in the frozen north and have adapted to the biting cold. You gain cold resistance equal to half your level (minimum 1).',
        benefits: 'Cold resistance equal to half your level (minimum 1).',
      },
      {
        id: 'woodland-elf',
        name: 'Woodland Elf',
        description:
          'You are adapted to life in the forest or the deep jungle and can move through trees with ease. You gain a climb Speed of 10 feet when climbing trees, vines, and other foliage.',
        benefits: 'Climb Speed of 10 feet when climbing trees and foliage.',
      },
      {
        id: 'cavern-elf',
        name: 'Cavern Elf',
        description:
          'You were born underground or spent many years in caverns below the surface. Your eyes have adapted to the deepest darkness, granting you darkvision instead of low-light vision.',
        benefits: 'Gain darkvision instead of low-light vision.',
      },
      {
        id: 'seer-elf',
        name: 'Seer Elf',
        description:
          'You have an inborn ability to detect the presence of magic. You can cast detect magic as an arcane innate cantrip at will.',
        benefits: 'Gain detect magic as an innate cantrip.',
      },
      {
        id: 'whisper-elf',
        name: 'Whisper Elf',
        description:
          'Your ears are finely tuned to catch even the faintest sounds. Your heightened frequency of hearing lets you attempt a Perception check to Seek creatures that are hidden or undetected within 60 feet.',
        benefits:
          'Heightened hearing lets you attempt a Perception check to Seek hidden or undetected creatures within 60 feet.',
      },
      {
        id: 'half-elf',
        name: 'Half-Elf',
        description:
          'One of your parents was a human, blending elven grace with human adaptability. You gain the Human trait in addition to the Elf trait, allowing you to select feats from either ancestry.',
        benefits: 'Gain the Human trait. You can select feats associated with either the Elf or Human ancestry.',
      },
      ...versatileHeritages,
    ],
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    description:
      'Dwarves are a stoic and strong people, carved from the bedrock of mountains. They value honor, tradition, and craftsmanship above all else, and their stubbornness is legendary.',
    hp: 10,
    size: 'Medium',
    speed: 20,
    abilityBoosts: ['con', 'wis', 'free'],
    abilityFlaws: ['cha'],
    languages: ['Common', 'Dwarven'],
    traits: ['Dwarf', 'Humanoid'],
    specialAbilities: [
      'Darkvision: You can see in darkness and dim light just as well as in bright light.',
    ],
    heritages: [
      {
        id: 'ancient-blooded-dwarf',
        name: 'Ancient-Blooded Dwarf',
        description:
          'Dwarven heroes of old could shrug off powerful magic, and some of that resistance has been passed on to you. You gain the Call on Ancient Blood reaction, which grants a +1 circumstance bonus to the triggering saving throw against a magical effect.',
        benefits:
          'Call on Ancient Blood reaction: +1 circumstance bonus to a saving throw against a magical effect.',
      },
      {
        id: 'rock-dwarf',
        name: 'Rock Dwarf',
        description:
          'Your ancestors lived and worked among the great stones of the mountains and underground. You gain a +2 circumstance bonus to saving throws against attempts to Shove or Trip you.',
        benefits:
          '+2 circumstance bonus to saves against being Shoved or Tripped.',
      },
      {
        id: 'forge-dwarf',
        name: 'Forge Dwarf',
        description:
          'You have a remarkable adaptation to hot environments from years spent near blazing forges and volcanic vents. You gain fire resistance equal to half your level (minimum 1).',
        benefits: 'Fire resistance equal to half your level (minimum 1).',
      },
      {
        id: 'death-warden-dwarf',
        name: 'Death Warden Dwarf',
        description:
          'Your ancestors have long battled the undead horrors that lurk beneath the surface, and you carry their vigilance in your blood. You gain a +1 bonus to saving throws against necromancy effects.',
        benefits: '+1 bonus to saving throws against necromancy effects.',
      },
      {
        id: 'strong-blooded-dwarf',
        name: 'Strong-Blooded Dwarf',
        description:
          'Your blood runs thick with the resilience of your ancestors, allowing you to shrug off toxins that would fell others. You gain poison resistance equal to half your level (minimum 1).',
        benefits: 'Poison resistance equal to half your level (minimum 1).',
      },
      ...versatileHeritages,
    ],
  },
  {
    id: 'halfling',
    name: 'Halfling',
    description:
      'Halflings are a small, cheerful people who thrive on curiosity and good fortune. They are remarkably brave despite their size, often finding themselves in adventures far beyond what their stature might suggest.',
    hp: 6,
    size: 'Small',
    speed: 25,
    abilityBoosts: ['dex', 'wis', 'free'],
    abilityFlaws: ['str'],
    languages: ['Common', 'Halfling'],
    traits: ['Halfling', 'Humanoid'],
    specialAbilities: [
      'Keen Eyes: Your eyes are sharp, allowing you to make out small details others might miss. You gain a +2 circumstance bonus to Perception checks to Seek undetected creatures within 30 feet.',
    ],
    heritages: [
      {
        id: 'gutsy-halfling',
        name: 'Gutsy Halfling',
        description:
          'Your family line is known for an almost foolhardy bravery in the face of danger. You gain a +1 circumstance bonus to saving throws against effects that would give you the frightened condition.',
        benefits:
          '+1 circumstance bonus to saving throws against fear effects.',
      },
      {
        id: 'hillock-halfling',
        name: 'Hillock Halfling',
        description:
          'You grew up in a community that emphasized the healing arts and wholesome living. You regain additional Hit Points when resting or receiving healing, equal to your level.',
        benefits:
          'Regain additional Hit Points equal to your level when resting or receiving healing.',
      },
      {
        id: 'nomadic-halfling',
        name: 'Nomadic Halfling',
        description:
          'Your family has traveled far and wide, and you have picked up languages from many different cultures along the way. You gain two additional languages of your choice from the common languages list.',
        benefits: 'Gain two additional common languages of your choice.',
      },
      {
        id: 'twilight-halfling',
        name: 'Twilight Halfling',
        description:
          'Your ancestors performed many of their tasks after the sun went down, and you have inherited their ability to see in fading light. You gain low-light vision.',
        benefits: 'Gain low-light vision.',
      },
      {
        id: 'wildwood-halfling',
        name: 'Wildwood Halfling',
        description:
          'You come from deep forests or overgrown regions and are used to navigating through dense undergrowth. You ignore difficult terrain caused by plants, such as bushes, vines, and undergrowth.',
        benefits:
          'Ignore difficult terrain caused by plants and undergrowth.',
      },
      ...versatileHeritages,
    ],
  },
  {
    id: 'gnome',
    name: 'Gnome',
    description:
      'Gnomes are small, whimsical creatures deeply connected to the First World and the primal magic of the fey. They crave novelty and new experiences, as stagnation can lead to a dangerous condition known as the Bleaching.',
    hp: 8,
    size: 'Small',
    speed: 25,
    abilityBoosts: ['con', 'cha', 'free'],
    abilityFlaws: ['str'],
    languages: ['Common', 'Gnomish', 'Sylvan'],
    traits: ['Gnome', 'Humanoid'],
    specialAbilities: [
      'Low-light vision: You can see in dim light as though it were bright light.',
    ],
    heritages: [
      {
        id: 'chameleon-gnome',
        name: 'Chameleon Gnome',
        description:
          'The color of your hair and skin shifts to match your surroundings, allowing you to blend in with the environment. You gain an ability to change your coloring, granting a +2 circumstance bonus to Stealth checks to Hide in natural environments.',
        benefits:
          '+2 circumstance bonus to Stealth checks to Hide in natural environments.',
      },
      {
        id: 'fey-touched-gnome',
        name: 'Fey-Touched Gnome',
        description:
          'The blood of the fey runs particularly strong in you, granting you a primal innate cantrip. You gain one primal cantrip of your choice, using Charisma as your spellcasting ability.',
        benefits:
          'Gain one primal innate cantrip of your choice (Charisma-based).',
      },
      {
        id: 'sensate-gnome',
        name: 'Sensate Gnome',
        description:
          'You see all colors as heightened and vivid, and you can sense magic through subtle visual cues. You gain a +2 circumstance bonus to Perception checks to detect visual illusions.',
        benefits:
          '+2 circumstance bonus to Perception checks to detect visual illusions.',
      },
      {
        id: 'umbral-gnome',
        name: 'Umbral Gnome',
        description:
          'Whether from birth or exposure to shadowy energies, you can see in complete darkness. You gain darkvision instead of low-light vision.',
        benefits: 'Gain darkvision instead of low-light vision.',
      },
      {
        id: 'wellspring-gnome',
        name: 'Wellspring Gnome',
        description:
          'Some of the ancient fey magic that created your people still flows within you. You gain one arcane cantrip of your choice, using Charisma as your spellcasting ability.',
        benefits:
          'Gain one arcane innate cantrip of your choice (Charisma-based).',
      },
      ...versatileHeritages,
    ],
  },
  {
    id: 'goblin',
    name: 'Goblin',
    description:
      'Goblins are scrappy, resourceful survivors known for their love of fire, song, and bold action. Once feared as pests, many goblin communities have integrated into broader society and proven themselves as loyal allies and inventive problem-solvers.',
    hp: 6,
    size: 'Small',
    speed: 25,
    abilityBoosts: ['dex', 'cha', 'free'],
    abilityFlaws: ['wis'],
    languages: ['Common', 'Goblin'],
    traits: ['Goblin', 'Humanoid'],
    specialAbilities: [
      'Darkvision: You can see in darkness and dim light just as well as in bright light.',
    ],
    heritages: [
      {
        id: 'charhide-goblin',
        name: 'Charhide Goblin',
        description:
          'Your ancestors spent their lives around open flames, and your thick skin has become resistant to fire. You gain fire resistance equal to half your level (minimum 1).',
        benefits: 'Fire resistance equal to half your level (minimum 1).',
      },
      {
        id: 'irongut-goblin',
        name: 'Irongut Goblin',
        description:
          'You can subsist on food that would make others ill, and your stomach is nearly indestructible. You gain a +2 circumstance bonus to saving throws against afflictions and effects that cause the sickened condition.',
        benefits:
          '+2 circumstance bonus to saves against afflictions and the sickened condition.',
      },
      {
        id: 'razortooth-goblin',
        name: 'Razortooth Goblin',
        description:
          'Your teeth are razor-sharp and capable of delivering vicious bites. You gain a jaws unarmed attack that deals 1d6 piercing damage.',
        benefits: 'Gain a jaws unarmed attack dealing 1d6 piercing damage.',
      },
      {
        id: 'snow-goblin',
        name: 'Snow Goblin',
        description:
          'You are adapted to the frigid conditions of the northern reaches, where your people have thrived in icy caves and frozen wastelands. You gain cold resistance equal to half your level (minimum 1).',
        benefits: 'Cold resistance equal to half your level (minimum 1).',
      },
      {
        id: 'unbreakable-goblin',
        name: 'Unbreakable Goblin',
        description:
          'You are remarkably tough, even by goblin standards, able to withstand blows that would flatten others your size. You gain 4 additional Hit Points from your ancestry instead of the normal amount.',
        benefits: 'Gain 4 additional Hit Points from your ancestry.',
      },
      ...versatileHeritages,
    ],
  },
  {
    id: 'leshy',
    name: 'Leshy',
    description:
      'Leshies are sentient plant creatures animated by primal magic and the spiritual essence of nature. Each leshy takes on the form of a specific type of plant, and they serve as guardians and caretakers of the natural world.',
    hp: 8,
    size: 'Small',
    speed: 25,
    abilityBoosts: ['con', 'wis', 'free'],
    abilityFlaws: ['int'],
    languages: ['Common', 'Sylvan'],
    traits: ['Leshy', 'Plant'],
    specialAbilities: [
      'Low-light vision: You can see in dim light as though it were bright light.',
      'Plant Nourishment: You gain nourishment from sunlight and water rather than food, though you can still eat if you choose. You typically need 10 minutes of sunlight and a cup of water per day.',
    ],
    heritages: [
      {
        id: 'fungus-leshy',
        name: 'Fungus Leshy',
        description:
          'Your body is composed of fungi and mushrooms, allowing you to thrive in dark, damp places. You gain darkvision instead of low-light vision.',
        benefits: 'Gain darkvision instead of low-light vision.',
      },
      {
        id: 'gourd-leshy',
        name: 'Gourd Leshy',
        description:
          'Your body is built around a tough gourd shell that protects your vital essence. You gain a +1 circumstance bonus to saving throws against effects that target your life force, such as death effects and negative energy.',
        benefits:
          '+1 circumstance bonus to saves against death effects and negative energy.',
      },
      {
        id: 'leaf-leshy',
        name: 'Leaf Leshy',
        description:
          'Your body is made primarily of leaves and light branches, letting you slow your falls. You take no damage from falls of 25 feet or less, and you treat falls beyond that as 10 feet shorter.',
        benefits:
          'No damage from falls of 25 feet or less; longer falls treated as 10 feet shorter.',
      },
      {
        id: 'vine-leshy',
        name: 'Vine Leshy',
        description:
          'Long vines trail from your body, giving you exceptional reach and climbing ability. You gain a climb Speed of 10 feet.',
        benefits: 'Gain a climb Speed of 10 feet.',
      },
      ...versatileHeritages,
    ],
  },
  {
    id: 'orc',
    name: 'Orc',
    description:
      'Orcs are a proud and powerful people who value strength, endurance, and self-reliance. They have a fierce warrior tradition and an unbreakable will that carries them through the harshest conditions.',
    hp: 10,
    size: 'Medium',
    speed: 25,
    abilityBoosts: ['str', 'free'],
    abilityFlaws: [],
    languages: ['Common', 'Orcish'],
    traits: ['Humanoid', 'Orc'],
    specialAbilities: [
      'Darkvision: You can see in darkness and dim light just as well as in bright light.',
    ],
    heritages: [
      {
        id: 'badlands-orc',
        name: 'Badlands Orc',
        description:
          'You come from sun-scorched deserts and barren plains, and your body has adapted to endure extreme heat and dehydration. You gain fire resistance equal to half your level (minimum 1).',
        benefits: 'Fire resistance equal to half your level (minimum 1).',
      },
      {
        id: 'deep-orc',
        name: 'Deep Orc',
        description:
          'Your people have lived underground for generations, navigating the treacherous passages of the Darklands. You gain a +2 circumstance bonus to Survival checks to navigate underground and to Perception checks to detect traps in underground environments.',
        benefits:
          '+2 circumstance bonus to Survival checks to navigate underground and Perception checks to detect traps underground.',
      },
      {
        id: 'hold-scarred-orc',
        name: 'Hold-Scarred Orc',
        description:
          'Ritual scarification is a mark of honor among your people, and your scars have toughened your body against further harm. You gain 12 Hit Points from your ancestry instead of 10.',
        benefits:
          'Gain 12 Hit Points from your ancestry instead of the standard 10.',
      },
      {
        id: 'rainfall-orc',
        name: 'Rainfall Orc',
        description:
          'You hail from lush jungles and rainforests, where your people have learned to move silently through the dense canopy. You gain a +2 circumstance bonus to Stealth checks in natural environments with foliage or rainfall.',
        benefits:
          '+2 circumstance bonus to Stealth checks in environments with foliage or rainfall.',
      },
      {
        id: 'battle-ready-orc',
        name: 'Battle-Ready Orc',
        description:
          'You were raised in a warrior tradition that honed your reflexes from a young age. You gain a +2 circumstance bonus to initiative rolls when using Perception.',
        benefits: '+2 circumstance bonus to initiative rolls using Perception.',
      },
      {
        id: 'half-orc',
        name: 'Half-Orc',
        description:
          'One of your parents was a human, blending orcish resilience with human adaptability. You gain the Human trait in addition to the Orc trait, allowing you to select feats from either ancestry.',
        benefits: 'Gain the Human trait. You can select feats associated with either the Orc or Human ancestry.',
      },
      ...versatileHeritages,
    ],
  },
]
