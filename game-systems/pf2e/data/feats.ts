import { Feat } from '../../../src/types'

export const feats: Feat[] = [
  // ========================
  // Human Ancestry Feats
  // ========================
  {
    id: 'natural-ambition',
    name: 'Natural Ambition',
    type: 'ancestry',
    level: 1,
    ancestryId: 'human',
    description:
      'You were raised to be ambitious and always reach for the stars. You gain a 1st-level class feat for your class. You must meet the prerequisites, but you can select the feat later in the character creation process in order to determine which prerequisites you meet.',
  },
  {
    id: 'cooperative-nature',
    name: 'Cooperative Nature',
    type: 'ancestry',
    level: 1,
    ancestryId: 'human',
    description:
      'The short-lived nature of your people encourages you to work together. You gain a +4 circumstance bonus on checks to Aid.',
  },
  {
    id: 'natural-skill',
    name: 'Natural Skill',
    type: 'ancestry',
    level: 1,
    ancestryId: 'human',
    description:
      'Your ingenuity allows you to learn a wide variety of skills. You become trained in two additional skills of your choice.',
  },

  // ========================
  // Elf Ancestry Feats
  // ========================
  {
    id: 'elven-lore',
    name: 'Elven Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'elf',
    description:
      'You have studied in traditional elven arts, learning about arcane magic and the world around you. You become trained in Arcana and Nature. If you would automatically become trained in one of those skills, you instead become trained in a skill of your choice. You also become trained in Elven Lore.',
  },
  {
    id: 'nimble-elf',
    name: 'Nimble Elf',
    type: 'ancestry',
    level: 1,
    ancestryId: 'elf',
    description:
      'Your muscles are tightly honed. Your Speed increases by 5 feet.',
  },
  {
    id: 'unwavering-mien',
    name: 'Unwavering Mien',
    type: 'ancestry',
    level: 1,
    ancestryId: 'elf',
    description:
      'Your mystic control and target meditation allow you to resist external influences upon your consciousness. You gain a +1 circumstance bonus to saving throws against emotion effects. If you roll a success on a saving throw against an emotion effect, you get a critical success instead.',
  },

  // ========================
  // Dwarf Ancestry Feats
  // ========================
  {
    id: 'rock-runner',
    name: 'Rock Runner',
    type: 'ancestry',
    level: 1,
    ancestryId: 'dwarf',
    description:
      'Your innate connection to stone makes you adept at moving across uneven surfaces. You are not flat-footed when Balancing on narrow surfaces and uneven ground. When you roll a success on an Acrobatics check to Balance on these surfaces, you get a critical success instead.',
  },
  {
    id: 'dwarven-lore',
    name: 'Dwarven Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'dwarf',
    description:
      'You eagerly absorbed the old stories and traditions of your ancestors, your ## people, and your land. You become trained in Crafting and Religion. If you would automatically become trained in one of those skills, you instead become trained in a skill of your choice. You also become trained in Dwarven Lore.',
  },
  {
    id: 'dwarven-weapon-familiarity',
    name: 'Dwarven Weapon Familiarity',
    type: 'ancestry',
    level: 1,
    ancestryId: 'dwarf',
    description:
      'Your kin have instilled in you an affinity for hard-hitting weapons, and you prefer these to more elegant arms. You are trained with the battle axe, pick, and warhammer. You also gain access to all uncommon dwarf weapons.',
  },

  // ========================
  // Halfling Ancestry Feats
  // ========================
  {
    id: 'distracting-shadows',
    name: 'Distracting Shadows',
    type: 'ancestry',
    level: 1,
    ancestryId: 'halfling',
    description:
      'You have learned to remain hidden by using larger folk as a distraction. You can use creatures that are at least one size larger than you as cover for the Hide and Sneak actions, even if they would not normally be large enough to provide cover.',
  },
  {
    id: 'halfling-luck',
    name: 'Halfling Luck',
    type: 'ancestry',
    level: 1,
    ancestryId: 'halfling',
    description:
      'Your happy-go-lucky nature makes it seem like misfortune avoids you. You can reroll the triggering check, but you must use the new result, even if it is worse than your first roll. This is a fortune effect.',
    prerequisites: 'Frequency: once per day',
  },
  {
    id: 'halfling-lore',
    name: 'Halfling Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'halfling',
    description:
      'You have picked up useful skills and knowledge from your halfling community. You become trained in Acrobatics and Stealth. If you would automatically become trained in one of those skills, you instead become trained in a skill of your choice. You also become trained in Halfling Lore.',
  },

  // ========================
  // Gnome Ancestry Feats
  // ========================
  {
    id: 'animal-accomplice',
    name: 'Animal Accomplice',
    type: 'ancestry',
    level: 1,
    ancestryId: 'gnome',
    description:
      'You build a rapport with an animal, which becomes magically bonded to you. You gain a familiar. The type of animal is up to you, but most gnomes choose animals with a burrow Speed.',
  },
  {
    id: 'first-world-magic',
    name: 'First World Magic',
    type: 'ancestry',
    level: 1,
    ancestryId: 'gnome',
    description:
      'Your connection to the First World grants you a primal innate spell. You gain one primal cantrip of your choice. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell level equal to half your level rounded up.',
  },
  {
    id: 'gnome-obsession',
    name: 'Gnome Obsession',
    type: 'ancestry',
    level: 1,
    ancestryId: 'gnome',
    description:
      'You might have a fixation on obscure topics that keeps your mind stimulated. You gain a +2 circumstance bonus to checks to Recall Knowledge with one Lore skill of your choice. At the GM\'s discretion, if you have exhausted the topics for the chosen Lore skill, you can switch to a new one.',
  },

  // ========================
  // Goblin Ancestry Feats
  // ========================
  {
    id: 'burn-it',
    name: 'Burn It!',
    type: 'ancestry',
    level: 1,
    ancestryId: 'goblin',
    description:
      'Fire fascinates you. Your spells and alchemical items that deal fire damage gain a +1 status bonus to damage. You also gain a +1 status bonus to damage with any weapon Strike that deals fire damage.',
  },
  {
    id: 'city-scavenger',
    name: 'City Scavenger',
    type: 'ancestry',
    level: 1,
    ancestryId: 'goblin',
    description:
      'You are adept at scavenging through the refuse of civilization. You gain a +1 circumstance bonus to checks to Subsist, and you can use Society or Survival when you Subsist in a settlement. When you Subsist in a city, you also gain a bonus to find discarded items and useful gear at the GM\'s discretion.',
  },
  {
    id: 'goblin-song',
    name: 'Goblin Song',
    type: 'ancestry',
    level: 1,
    ancestryId: 'goblin',
    description:
      'You sing annoying goblin songs, distracting your enemies with obnoxious lyrics. Attempt a Performance check against the Will DC of a single enemy within 30 feet. On a success, the target is fascinated with you for 1 round. On a critical success, the target is fascinated for 3 rounds.',
  },

  // ========================
  // Leshy Ancestry Feats
  // ========================
  {
    id: 'grasping-reach',
    name: 'Grasping Reach',
    type: 'ancestry',
    level: 1,
    ancestryId: 'leshy',
    description:
      'You can extend vines, branches, or tendrils from your body to manipulate objects and Strike foes up to 10 feet away. Your melee reach increases by 5 feet when making Strikes with your leshy appendages. This does not increase your reach for other purposes, such as for triggering reactions.',
  },
  {
    id: 'leshy-lore',
    name: 'Leshy Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'leshy',
    description:
      'You have deep knowledge of the natural world rooted in your leshy nature. You become trained in Nature and one Lore skill related to the terrain where you were created (such as Forest Lore or Swamp Lore). If you would automatically become trained in Nature, you instead become trained in another skill of your choice.',
  },
  {
    id: 'seedpod',
    name: 'Seedpod',
    type: 'ancestry',
    level: 1,
    ancestryId: 'leshy',
    description:
      'Your body produces seedpods that you can hurl at your enemies. You gain a seedpod ranged unarmed attack with a range increment of 30 feet that deals 1d4 bludgeoning damage. On a critical hit, the seedpod bursts, scattering debris into the target\'s eyes and giving them a -1 status penalty to Perception checks for 1 round.',
  },

  // ========================
  // Orc Ancestry Feats
  // ========================
  {
    id: 'orc-ferocity',
    name: 'Orc Ferocity',
    type: 'ancestry',
    level: 1,
    ancestryId: 'orc',
    description:
      'Fierceness in battle runs through your blood, and you refuse to fall from your injuries. Once per day, if you would be reduced to 0 Hit Points, you are instead reduced to 1 Hit Point. You gain the wounded 1 condition (or increase your wounded condition value by 1 if you already have that condition).',
  },
  {
    id: 'orc-lore',
    name: 'Orc Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'orc',
    description:
      'You have been raised among or trained by orcs, learning the survival techniques and combat traditions of your people. You become trained in Athletics and Survival. If you would automatically become trained in one of those skills, you instead become trained in a skill of your choice. You also become trained in Orc Lore.',
  },
  {
    id: 'beast-trainer',
    name: 'Beast Trainer',
    type: 'ancestry',
    level: 1,
    ancestryId: 'orc',
    description:
      'You have a way with animals and understand how to command and care for them. You become trained in Nature. You gain the Command an Animal skill feat as a bonus feat, even if you don\'t meet the prerequisites. You gain a +1 circumstance bonus to Nature checks to Command an Animal.',
  },

  // ========================
  // Fighter Class Feats
  // ========================
  {
    id: 'power-attack',
    name: 'Power Attack',
    type: 'class',
    level: 1,
    classId: 'fighter',
    description:
      'You unleash a particularly powerful attack that clobbers your foe but leaves you a bit off balance. Make a melee Strike. This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage.',
  },
  {
    id: 'sudden-charge',
    name: 'Sudden Charge',
    type: 'class',
    level: 1,
    classId: 'fighter',
    description:
      'With a quick sprint, you dash up to your foe and swing. Stride twice. If you end your movement within melee reach of at least one enemy, you can make a melee Strike against that enemy.',
  },
  {
    id: 'double-slice',
    name: 'Double Slice',
    type: 'class',
    level: 1,
    classId: 'fighter',
    description:
      'You lash out at your foe with both weapons. Make two Strikes, one with each of your two melee weapons, each using your current multiple attack penalty. Both Strikes must have the same target. If the second Strike is made with a weapon that does not have the agile trait, it takes a -2 penalty.',
    prerequisites: 'You are wielding two melee weapons',
  },

  // ========================
  // Rogue Class Feats
  // ========================
  {
    id: 'nimble-dodge',
    name: 'Nimble Dodge',
    type: 'class',
    level: 1,
    classId: 'rogue',
    description:
      'You deftly dodge out of the way, gaining a +2 circumstance bonus to AC against the triggering attack. Trigger: A creature targets you with an attack and you can see the attacker.',
  },
  {
    id: 'twin-feint',
    name: 'Twin Feint',
    type: 'class',
    level: 1,
    classId: 'rogue',
    description:
      'You make a dazzling series of attacks with two weapons, using the first to create an opening for the second. Make one Strike with each of your two melee weapons, both against the same target. The target is automatically flat-footed against the second Strike.',
    prerequisites: 'You are wielding two melee weapons',
  },
  {
    id: 'sneak-savant',
    name: 'Sneak Savant',
    type: 'class',
    level: 2,
    classId: 'rogue',
    description:
      'It is almost impossible to spot you without magic. You can always use the Hide and Sneak actions even when observed, as long as you end up behind something that could provide cover or concealment. You leave no evidence of your passing.',
  },

  // ========================
  // Cleric Class Feats
  // ========================
  {
    id: 'deadly-simplicity',
    name: 'Deadly Simplicity',
    type: 'class',
    level: 1,
    classId: 'cleric',
    description:
      'Your deity\'s favored weapon is especially powerful in your hands. When you are wielding your deity\'s favored weapon and it has a d6 damage die, increase the die size to d8. If it has a d8 damage die, increase it to d10 instead.',
  },
  {
    id: 'domain-initiate',
    name: 'Domain Initiate',
    type: 'class',
    level: 1,
    classId: 'cleric',
    description:
      'Your deity bestows a special spell related to their powers. Select one domain from your deity\'s domains. You gain an initial domain spell for that domain, a focus spell. It costs 1 Focus Point to cast a focus spell.',
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

  // ========================
  // Wizard Class Feats
  // ========================
  {
    id: 'reach-spell',
    name: 'Reach Spell',
    type: 'class',
    level: 1,
    classId: 'wizard',
    description:
      'You can extend the range of your spells. If the next action you use is to Cast a Spell that has a range, increase that spell\'s range by 30 feet. As is standard for increasing spell ranges, if the spell normally has a range of touch, you extend its range to 30 feet.',
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
      'When a foe Casts a Spell you know and you can see its manifestations, you can use your own magic to counter it. You expend a prepared spell to counter the triggering creature\'s casting of that same spell. You lose your spell slot as if you had cast the triggering spell. You then attempt to counteract the triggering spell.',
  },

  // ========================
  // Bard Class Feats
  // ========================
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
    id: 'versatile-performance',
    name: 'Versatile Performance',
    type: 'class',
    level: 1,
    classId: 'bard',
    description:
      'You can rely on the grandeur of your performance rather than ordinary social skills. You can use Performance instead of Diplomacy to Make an Impression, and instead of Intimidation to Demoralize. You can also use an acting Performance instead of Deception to Impersonate.',
  },
  {
    id: 'counter-performance',
    name: 'Counter Performance',
    type: 'class',
    level: 1,
    classId: 'bard',
    description:
      'Your performance can counter auditory and visual effects that would living creatures. When you or an ally within 60 feet would be affected by an auditory or visual effect, you can use your reaction to attempt a Performance check to counteract the triggering effect. This protects only against effects that have the auditory or visual trait.',
  },

  // ========================
  // Druid Class Feats
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

  // ========================
  // Ranger Class Feats
  // ========================
  {
    id: 'animal-companion-ranger',
    name: 'Animal Companion',
    type: 'class',
    level: 1,
    classId: 'ranger',
    description:
      'You gain the service of a young animal companion that travels with you and obeys your commands. Choose a type of animal companion from the list. Your ranger animal companion gains additional benefits when you Hunt Prey, sharing your focus and tracking ability.',
  },
  {
    id: 'hunted-shot',
    name: 'Hunted Shot',
    type: 'class',
    level: 1,
    classId: 'ranger',
    description:
      'You take two quick shots against the one you hunt. Make two Strikes against your hunted prey, both using your current multiple attack penalty. If both hit the hunted prey, combine their damage for the purposes of resistances and weaknesses. Your multiple attack penalty applies to each Strike normally.',
  },
  {
    id: 'monster-hunter',
    name: 'Monster Hunter',
    type: 'class',
    level: 1,
    classId: 'ranger',
    description:
      'You swiftly assess your prey and apply what you know. When you Hunt Prey, you can attempt a Recall Knowledge check against the prey as part of the same action. When you critically succeed at identifying your hunted prey with Recall Knowledge, you note a weakness in its defenses and gain a +1 circumstance bonus to your next attack roll against it.',
  },

  // ========================
  // Witch Class Feats
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
    id: 'cauldron',
    name: 'Cauldron',
    type: 'class',
    level: 2,
    classId: 'witch',
    description:
      'You can use a cauldron as a tool to brew potions, elixirs, and other magical concoctions. You gain the Alchemical Crafting skill feat, even if you don\'t meet its prerequisites, and you can use your cauldron as an alchemist\'s toolkit. During your daily preparations, you can create two common 1st-level alchemical items with your cauldron. You don\'t need to spend the normal monetary cost or have the items\' formulas in your formula book.',
  },

  // ========================
  // Catfolk Ancestry Feats
  // ========================
  {
    id: 'cats-luck',
    name: "Cat's Luck",
    type: 'ancestry',
    level: 1,
    ancestryId: 'catfolk',
    description:
      'You have inherited your people\'s legendary fortune. When you fail a Reflex saving throw, you can use your reaction to reroll the save and use the better result. You can use this once per day.',
  },
  {
    id: 'catfolk-lore',
    name: 'Catfolk Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'catfolk',
    description:
      'Growing up among catfolk has taught you the traditional ways of your people. You become trained in Acrobatics and Survival. If you would automatically become trained in one of those skills, you instead become trained in a skill of your choice. You also become trained in Catfolk Lore.',
  },
  {
    id: 'catfolk-weapon-familiarity',
    name: 'Catfolk Weapon Familiarity',
    type: 'ancestry',
    level: 1,
    ancestryId: 'catfolk',
    description:
      'You favor the weapons of your people. You are trained with the kama, kukri, claw blade, and whip claw. In addition, you gain access to all uncommon catfolk weapons. For the purposes of determining your proficiency, martial catfolk weapons are simple weapons and advanced catfolk weapons are martial weapons.',
  },
  {
    id: 'cat-nap',
    name: 'Cat Nap',
    type: 'ancestry',
    level: 1,
    ancestryId: 'catfolk',
    description:
      'You can quickly recover energy with a short rest. You can take a 10-minute rest to regain Hit Points as if you had rested for a full night, recovering Hit Points equal to your Constitution modifier times your level. You can use Cat Nap once per day.',
  },
  {
    id: 'catfolk-dance',
    name: 'Catfolk Dance',
    type: 'ancestry',
    level: 1,
    ancestryId: 'catfolk',
    description:
      'You have a feline grace that translates into a mesmerizing dance. You can use Performance instead of Diplomacy to Make an Impression, weaving your catlike movements into a captivating display.',
  },
  {
    id: 'well-met-traveler',
    name: 'Well-Met Traveler',
    type: 'ancestry',
    level: 1,
    ancestryId: 'catfolk',
    description:
      'Your gregarious nature helps you make friends wherever you go. You gain a +1 circumstance bonus to Diplomacy checks to Make an Impression and to Gather Information. If you speak the local language, this bonus increases to +2.',
  },
  {
    id: 'saber-teeth',
    name: 'Saber Teeth',
    type: 'ancestry',
    level: 1,
    ancestryId: 'catfolk',
    description:
      'You have long, pronounced canines capable of delivering powerful bites. You gain a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group and have the finesse trait.',
  },
  {
    id: 'climbing-claws',
    name: 'Climbing Claws',
    type: 'ancestry',
    level: 5,
    ancestryId: 'catfolk',
    description:
      'Your claws are well-suited for climbing. You gain a climb Speed of 10 feet. If you already have a claw unarmed attack, your climb Speed increases to 15 feet.',
  },
  {
    id: 'expanded-luck',
    name: 'Expanded Luck',
    type: 'ancestry',
    level: 5,
    ancestryId: 'catfolk',
    prerequisites: "Cat's Luck",
    description:
      'Your luck is more reliable than most. You can use Cat\'s Luck when you fail a Fortitude or Will saving throw in addition to Reflex saves. You can still use it only once per day.',
  },
  {
    id: 'light-paws',
    name: 'Light Paws',
    type: 'ancestry',
    level: 5,
    ancestryId: 'catfolk',
    description:
      'You move with the quiet grace of a stalking cat. You gain a +2 circumstance bonus to Stealth checks to Sneak, and you can Sneak at full Speed.',
  },
  {
    id: 'springing-leaper',
    name: 'Springing Leaper',
    type: 'ancestry',
    level: 5,
    ancestryId: 'catfolk',
    description:
      'Your powerful legs let you make incredible jumps. You can High Jump and Long Jump as a single action without a Stride beforehand. You gain a +2 circumstance bonus to Athletics checks to Jump.',
  },
  {
    id: 'catfolk-weapon-rake',
    name: 'Catfolk Weapon Rake',
    type: 'ancestry',
    level: 5,
    ancestryId: 'catfolk',
    prerequisites: 'Catfolk Weapon Familiarity',
    description:
      'You know how to get the most out of catfolk weapons. Whenever you critically hit using a catfolk weapon or one of your claw unarmed attacks, you apply the weapon\'s critical specialization effect.',
  },
  {
    id: 'predators-growl',
    name: "Predator's Growl",
    type: 'ancestry',
    level: 9,
    ancestryId: 'catfolk',
    description:
      'Your growl is terrifying, channeling the primal fear of a predator. You can Demoralize as a free action once per round when you successfully Strike a creature. The Demoralize attempt uses Intimidation as normal.',
  },
  {
    id: 'shared-luck',
    name: 'Shared Luck',
    type: 'ancestry',
    level: 9,
    ancestryId: 'catfolk',
    prerequisites: "Cat's Luck",
    description:
      'You can extend your feline fortune to your allies. When an ally within 30 feet fails a saving throw, you can use your reaction to grant them the benefits of Cat\'s Luck, allowing them to reroll the save. This uses your daily Cat\'s Luck.',
  },
  {
    id: 'silent-step',
    name: 'Silent Step',
    type: 'ancestry',
    level: 9,
    ancestryId: 'catfolk',
    description:
      'You move with perfect silence. You no longer need to attempt Stealth checks to remain undetected while moving at half Speed or less. You can still Sneak at full Speed with the usual check.',
  },
  {
    id: 'sense-for-trouble',
    name: 'Sense for Trouble',
    type: 'ancestry',
    level: 9,
    ancestryId: 'catfolk',
    description:
      'Your instincts warn you of danger before it strikes. You gain a +2 circumstance bonus to Perception checks for initiative. You are never flat-footed during the first round of combat.',
  },
  {
    id: 'caterwaul',
    name: 'Caterwaul',
    type: 'ancestry',
    level: 13,
    ancestryId: 'catfolk',
    description:
      'You let out a blood-curdling scream that shakes the resolve of your enemies. As a 2-action activity, each enemy within 30 feet must attempt a Will save against your class DC or spell DC (whichever is higher). On a failure, they are frightened 2. On a critical failure, they are frightened 3 and fleeing for 1 round.',
  },
  {
    id: 'catfolk-weapon-expertise',
    name: 'Catfolk Weapon Expertise',
    type: 'ancestry',
    level: 13,
    ancestryId: 'catfolk',
    prerequisites: 'Catfolk Weapon Familiarity',
    description:
      'Your catfolk weapon training has become instinctive. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in catfolk weapons in which you are trained.',
  },
  {
    id: 'black-cat',
    name: 'Black Cat',
    type: 'ancestry',
    level: 13,
    ancestryId: 'catfolk',
    description:
      'Bad luck seems to follow those who wrong you. When a creature within 30 feet that you can see critically succeeds on a Strike against you, you can use your reaction to force the attacker to reroll the attack and use the worse result.',
  },
  {
    id: 'reliable-luck',
    name: 'Reliable Luck',
    type: 'ancestry',
    level: 17,
    ancestryId: 'catfolk',
    prerequisites: "Cat's Luck",
    description:
      'Your luck is seemingly inexhaustible. You can use Cat\'s Luck once per hour instead of once per day. In addition, when you use Cat\'s Luck, if the reroll is also a failure, you can use it a second time on the same save.',
  },
  {
    id: 'ten-lives',
    name: 'Ten Lives',
    type: 'ancestry',
    level: 17,
    ancestryId: 'catfolk',
    description:
      'Even death has trouble keeping hold of you. Once per day, when you would die from damage, you instead drop to 1 Hit Point and gain the wounded 1 condition (or increase your wounded value by 1). You are then temporarily immune to this effect for 24 hours.',
  },
  {
    id: 'elude-trouble',
    name: 'Elude Trouble',
    type: 'ancestry',
    level: 17,
    ancestryId: 'catfolk',
    description:
      'You can dodge out of harm\'s way with supernatural agility. When you are targeted by a ranged attack or an area effect, you can use your reaction to Step and then gain a +4 circumstance bonus to your AC or saving throw against the triggering effect.',
  },

  // ========================
  // Kineticist Class Feats (General)
  // ========================
  {
    id: 'elemental-familiar',
    name: 'Elemental Familiar',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    description:
      'A small elemental creature emerges from your kinetic gate to serve as your familiar. Your familiar has the elemental trait corresponding to your element and gains an impulse-related ability. It can deliver your impulses with a range of touch.',
  },
  {
    id: 'extended-kinesis',
    name: 'Extended Kinesis',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    description:
      'Your Base Kinesis reaches farther and can handle more. The range of your Base Kinesis increases to 60 feet, and its maximum Bulk increases to 2. At 3rd level, the range increases to 120 feet, and at 7th level, the maximum Bulk increases to 4.',
  },
  {
    id: 'versatile-blasts',
    name: 'Versatile Blasts',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    description:
      'You can adjust the damage type of your Elemental Blast. Each time you use Elemental Blast, you can choose from an expanded list of damage types associated with your element, giving you flexibility to exploit enemy weaknesses.',
  },
  {
    id: 'weapon-infusion',
    name: 'Weapon Infusion',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    description:
      'You can shape your kinetic element into a weapon-like form. When you use Elemental Blast, you can treat it as a melee weapon with a weapon group, enabling you to benefit from critical specialization effects associated with that group.',
  },
  {
    id: 'kinetic-activation',
    name: 'Kinetic Activation',
    type: 'class',
    level: 2,
    classId: 'kineticist',
    description:
      'Your kinetic gate can power magical items. You can activate wands, scrolls, and other items that require a spell to be cast, using your kineticist class DC for any checks required. You treat impulses as spells for the purpose of meeting activation requirements.',
  },
  {
    id: 'voice-of-elements',
    name: 'Voice of Elements',
    type: 'class',
    level: 2,
    classId: 'kineticist',
    description:
      'You can speak with elemental beings. You can communicate with elementals associated with your kinetic elements, gaining a +2 circumstance bonus to Diplomacy and Intimidation checks against them.',
  },
  {
    id: 'command-elemental',
    name: 'Command Elemental',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    description:
      'You grasp an elemental creature\'s animating force to bend it to your will. You can cast a 2nd-level command spell as an impulse, targeting only creatures with the elemental trait corresponding to one of your kinetic elements.',
  },
  {
    id: 'safe-elements',
    name: 'Safe Elements',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    description:
      'You control your elements well enough to prevent harm to allies. Your impulses that affect an area can exclude a number of squares equal to your Constitution modifier from the effect, protecting allies caught in the blast.',
  },
  {
    id: 'counter-element',
    name: 'Counter Element',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    description:
      'You gain control over an element to counter its use by others. When a creature within 60 feet uses an ability with a trait matching one of your kinetic elements, you can use your reaction to attempt to counteract it using your class DC.',
  },
  {
    id: 'fearsome-familiar-kineticist',
    name: 'Fearsome Familiar',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Elemental Familiar',
    description:
      'Your elemental familiar can briefly trade places with a more powerful elemental from its home plane. Once per day, your familiar transforms into a stronger elemental form for 1 minute, gaining increased combat abilities.',
  },
  {
    id: 'two-element-infusion',
    name: 'Two-Element Infusion',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Two or more kinetic elements',
    description:
      'You combine the power of two of your elements when using Elemental Blast. Your blast deals damage of both elements\' types and benefits from both elements\' impulse junctions.',
  },
  {
    id: 'elemental-overlap',
    name: 'Elemental Overlap',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    description:
      'You find the connections between your elements, allowing impulse feats from one element to incorporate traits of another. You can use an impulse feat associated with one of your elements and have it also gain the trait of another of your elements.',
  },
  {
    id: 'purify-element',
    name: 'Purify Element',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    description:
      'You transform an element into its purest, most concentrated form. You can purify your element within a 30-foot emanation, removing contaminants from water, clearing smoke from air, removing rust from metal, or performing similar purifications.',
  },
  {
    id: 'aura-shaping',
    name: 'Aura Shaping',
    type: 'class',
    level: 10,
    classId: 'kineticist',
    description:
      'You reshape your kinetic aura into a more precise form. You can change the shape of your kinetic aura from its standard 10-foot emanation to a 20-foot cone, a 15-foot burst within 30 feet, or a 30-foot line.',
  },
  {
    id: 'chain-infusion',
    name: 'Chain Infusion',
    type: 'class',
    level: 10,
    classId: 'kineticist',
    description:
      'Your Elemental Blast leaps to additional targets. When your Elemental Blast hits, you can have it chain to a second creature within 30 feet of the first target, making a new impulse attack roll against it. The chained blast deals half the normal damage.',
  },
  {
    id: 'elemental-transformation',
    name: 'Elemental Transformation',
    type: 'class',
    level: 10,
    classId: 'kineticist',
    description:
      'You briefly take on the qualities of an elemental. As a 2-action activity, you partially transform into an elemental form for 1 minute, gaining benefits based on the chosen element such as a fly Speed, burrow Speed, swim Speed, or resistance.',
  },
  {
    id: 'effortless-impulse',
    name: 'Effortless Impulse',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    description:
      'One impulse becomes so natural it flows through you effortlessly. Choose one impulse feat you have. You can use that impulse as a free action once per round, rather than spending actions on it.',
  },
  {
    id: 'nourishing-gate',
    name: 'Nourishing Gate',
    type: 'class',
    level: 14,
    classId: 'kineticist',
    description:
      'Elemental energy flowing from your gate revitalizes you. At the start of each of your turns while your kinetic aura is active, you regain Hit Points equal to half your level.',
  },
  {
    id: 'rapid-attunement',
    name: 'Rapid Attunement',
    type: 'class',
    level: 14,
    classId: 'kineticist',
    description:
      'You attune to elements with extraordinary speed. When you Channel Elements, you can also use a single 1-action impulse as part of the same activity, letting you immediately use an impulse the moment you activate your aura.',
  },
  {
    id: 'imperious-aura',
    name: 'Imperious Aura',
    type: 'class',
    level: 16,
    classId: 'kineticist',
    description:
      'Your glowing kinetic aura marks you as a true child of the elements. Your kinetic aura\'s size increases to 15 feet, and creatures of your kinetic element within the aura are frightened 1 at the start of each of their turns unless they succeed on a Will save against your class DC.',
  },
  {
    id: 'elemental-apotheosis',
    name: 'Elemental Apotheosis',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    description:
      'You become a being of elemental power. You can fully transform into a powerful elemental form once per day for 1 minute. In this form you gain immunity to your element\'s damage, a fly Speed, and your impulses deal additional damage.',
  },
  {
    id: 'kinetic-pinnacle',
    name: 'Kinetic Pinnacle',
    type: 'class',
    level: 20,
    classId: 'kineticist',
    description:
      'You gain an impulse feat of any level, even one from an element you don\'t normally have access to. You\'ve reached the absolute pinnacle of kinetic power and can draw from any element at will.',
  },
  {
    id: 'omnikinesis',
    name: 'Omnikinesis',
    type: 'class',
    level: 20,
    classId: 'kineticist',
    description:
      'You have transcended elemental boundaries and can command all elements simultaneously. You gain access to all six elements and can use any impulse feat regardless of its elemental requirement. Your Elemental Blast can deal any elemental damage type.',
  },

  // ========================
  // Kineticist Air Impulses
  // ========================
  {
    id: 'aerial-boomerang',
    name: 'Aerial Boomerang',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'A shearing blade of wind races from you along a 60-foot line, damaging creatures in its path. The blade then returns along the same line, potentially striking targets a second time on the way back.',
    requiredElements: ['air'],
  },
  {
    id: 'air-cushion',
    name: 'Air Cushion',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'You conjure upward air currents that slow a creature\'s fall. The target falls gently at 60 feet per round, taking no falling damage for the duration. You can target yourself or an ally within 60 feet.',
    requiredElements: ['air'],
  },
  {
    id: 'four-winds',
    name: 'Four Winds',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'You propel up to four willing creatures with powerful winds mimicking the anemoi wind monarchs. Each target can Fly up to 15 feet, carried on elemental gusts.',
    requiredElements: ['air'],
  },
  {
    id: 'whisper-on-the-wind',
    name: 'Whisper on the Wind',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'A soft wind carries your whispered words far from you to a target within 500 feet that you can see. The wind delivers a short message of 25 words or fewer, and can carry a whispered reply back to you.',
    requiredElements: ['air'],
  },
  {
    id: 'air-shroud',
    name: 'Air Shroud',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'Turbulent winds suffuse your kinetic aura, granting you and allies within concealment against ranged attacks from outside the aura. Creatures in the aura gain a +1 circumstance bonus to AC against ranged attacks.',
    requiredElements: ['air'],
  },
  {
    id: 'lightning-dash',
    name: 'Lightning Dash',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'You transform into a bolt of living lightning, dashing forward in a 30-foot line. Each creature in the line takes electricity damage with a basic Reflex save. You reappear at the end of the line.',
    requiredElements: ['air'],
  },
  {
    id: 'clear-as-air',
    name: 'Clear as Air',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'Layers of air diffract light around you, making you appear transparent. You become invisible for 1 round or until you use a hostile action. At 10th level, the duration increases to 1 minute.',
    requiredElements: ['air'],
  },
  {
    id: 'flinging-updraft',
    name: 'Flinging Updraft',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'A speeding wind picks up a creature and deposits it nearby. Target a creature within 30 feet; if willing, it flies up to 40 feet in any direction. An unwilling target must attempt a Fortitude save to avoid being flung.',
    requiredElements: ['air'],
  },
  {
    id: 'cyclonic-ascent',
    name: 'Cyclonic Ascent',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'Whirling winds form a cyclone that lifts you into the air. You gain a fly Speed equal to your Speed for 1 minute. While flying in this way, you can use a single action to create a gust that pushes creatures below you away.',
    requiredElements: ['air'],
  },
  {
    id: 'storm-spiral',
    name: 'Storm Spiral',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'Thunderclouds and lightning bolts spiral around you in a tremendous thunderclap. Each creature in a 20-foot emanation takes electricity and sonic damage with a basic Reflex save. Creatures that fail are also deafened for 1 round.',
    requiredElements: ['air'],
  },
  {
    id: 'ghosts-in-the-storm',
    name: 'Ghosts in the Storm',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'Storm clouds are drawn to you, cloaking you and your allies. You create a 30-foot emanation of swirling clouds that grants concealment to you and allies within. Enemies in the area are dazzled.',
    requiredElements: ['air'],
  },
  {
    id: 'wiles-on-the-wind',
    name: 'Wiles on the Wind',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'You set lies and illusions loose upon drifting wind. You create illusory sounds and images carried by air currents within a 60-foot emanation. Creatures must succeed on a Will save or become confused by the shifting illusions.',
    requiredElements: ['air'],
  },
  {
    id: 'body-of-air',
    name: 'Body of Air',
    type: 'class',
    level: 14,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'Your gathered air consumes your physical body, leaving you as living vapor. You become an air elemental for 1 minute, gaining a fly Speed of 60 feet, immunity to precision damage, and resistance to physical damage. You can move through tiny gaps.',
    requiredElements: ['air'],
  },
  {
    id: 'crowned-in-tempests-fury',
    name: "Crowned in Tempest's Fury",
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'You become one with a devastating thunderstorm, wearing a crown of lightning. For 1 minute, you gain a fly Speed of 80 feet, an aura of lightning that deals electricity damage to nearby enemies each round, and your air impulses deal additional electricity damage.',
    requiredElements: ['air'],
  },
  {
    id: 'infinite-expanse-of-bluest-heaven',
    name: 'Infinite Expanse of Bluest Heaven',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Air element',
    description:
      'You create an illusion of a limitless sky that makes all creatures in a 60-foot burst feel a terrifying falling sensation. Each creature must attempt a Will save or become frightened and fall prone, overwhelmed by the illusion of infinite falling.',
    requiredElements: ['air'],
  },

  // ========================
  // Kineticist Earth Impulses
  // ========================
  {
    id: 'armor-in-earth',
    name: 'Armor in Earth',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'Stone andite encases your body like protective armor. You gain a +2 item bonus to AC until the start of your next turn. At 5th level, the bonus increases to +3, and at 13th level, to +4.',
    requiredElements: ['earth'],
  },
  {
    id: 'geologic-attunement',
    name: 'Geologic Attunement',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'You tune your senses to the earth and stone around you, extending your awareness through rippling seismic waves. You gain tremorsense as an imprecise sense out to 30 feet, allowing you to detect creatures touching the ground.',
    requiredElements: ['earth'],
  },
  {
    id: 'stepping-stones',
    name: 'Stepping Stones',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'Designated rock discs rise from the ground creating a new elevated path. You create a series of floating stone platforms within 30 feet that persist for 1 minute. Creatures can walk along them as if on solid ground.',
    requiredElements: ['earth'],
  },
  {
    id: 'tremor',
    name: 'Tremor',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'You unleash a small localized tremor in a 10-foot burst within 30 feet. Creatures in the area must succeed on a Reflex save or fall prone. The area becomes difficult terrain until the start of your next turn.',
    requiredElements: ['earth'],
  },
  {
    id: 'calcifying-sand',
    name: 'Calcifying Sand',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'Flesh exposed to your sand becomes coarse and begins to magically petrify. A creature within 60 feet must attempt a Fortitude save. On a failure, it is slowed 1 for 1 round as parts of its body begin to calcify.',
    requiredElements: ['earth'],
  },
  {
    id: 'igneogenesis',
    name: 'Igneogenesis',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'You create a permanent stone object from your gate or surrounding earth. You can shape up to 5 cubic feet of stone into a simple object—a wall section, a chair, steps, or similar non-complex forms. The stone is permanent.',
    requiredElements: ['earth'],
  },
  {
    id: 'sand-snatcher',
    name: 'Sand Snatcher',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'A figure of animated sand with grasping arms arises within 30 feet. The sand snatcher can attempt to Grapple a creature each round using your class DC. It has AC and HP based on your level.',
    requiredElements: ['earth'],
  },
  {
    id: 'weight-of-stone',
    name: 'Weight of Stone',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'A packed cloud of heavy boulders descends, beating down everyone in a 15-foot burst within 60 feet. Creatures in the area take bludgeoning damage with a basic Reflex save, and the area becomes difficult terrain.',
    requiredElements: ['earth'],
  },
  {
    id: 'spike-skin',
    name: 'Spike Skin',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'You touch a willing creature to harden its skin with rocky, spiky protrusions. The target gains resistance to physical damage and deals piercing damage to any creature that hits it with an unarmed attack or Grapple.',
    requiredElements: ['earth'],
  },
  {
    id: 'swim-through-earth',
    name: 'Swim Through Earth',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'The earth parts before you, allowing you to swim through solid stone and dirt. You gain a burrow Speed equal to your Speed for 1 minute. You leave no tunnel behind you unless you choose to.',
    requiredElements: ['earth'],
  },
  {
    id: 'rattle-the-earth',
    name: 'Rattle the Earth',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'You strike the ground with the deepest rocks\' gravity, causing a devastating earthquake in a 30-foot emanation. Creatures take bludgeoning damage with a Reflex save. Structures in the area take double damage. The area becomes difficult terrain.',
    requiredElements: ['earth'],
  },
  {
    id: 'rock-rampart',
    name: 'Rock Rampart',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'You form a wall of rock and earth drawn from the Plane of Earth. The wall is up to 60 feet long, 10 feet high, and 5 feet thick. Each 5-foot section has AC, hardness, and HP based on your level.',
    requiredElements: ['earth'],
  },
  {
    id: 'assume-earths-mantle',
    name: "Assume Earth's Mantle",
    type: 'class',
    level: 14,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'Enormous rock pieces cluster around your body, encasing you in an earthen mantle. For 1 minute, you gain resistance to all physical damage, your Strikes deal additional earth damage, and your size increases to Large.',
    requiredElements: ['earth'],
  },
  {
    id: 'rebirth-in-living-stone',
    name: 'Rebirth in Living Stone',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'Rock overflows from within, transforming you into a being of living stone. For 1 minute, you become an earth elemental with immunity to bleed and precision damage, resistance to physical damage, and a burrow Speed of 40 feet.',
    requiredElements: ['earth'],
  },
  {
    id: 'the-shattered-mountain-weeps',
    name: 'The Shattered Mountain Weeps',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Earth element',
    description:
      'You conjure a massive sphere of rock that explodes, unleashing a cataclysm of stone debris in a 40-foot burst within 120 feet. Creatures take massive bludgeoning damage with a basic Reflex save, and the area becomes difficult terrain.',
    requiredElements: ['earth'],
  },

  // ========================
  // Kineticist Fire Impulses
  // ========================
  {
    id: 'burning-jet',
    name: 'Burning Jet',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'A condensed jet of flame shoots behind you, propelling you forward. You Stride up to 40 feet in a straight line. Each creature adjacent to your path takes fire damage with a basic Reflex save.',
    requiredElements: ['fire'],
  },
  {
    id: 'eternal-torch',
    name: 'Eternal Torch',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'You open your kinetic gate just enough for the flow of a torch-sized flame. You create a magical torch flame that sheds bright light in a 20-foot radius and dim light for another 20 feet. It lasts until you dismiss it.',
    requiredElements: ['fire'],
  },
  {
    id: 'flying-flame',
    name: 'Flying Flame',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'A tiny flame in your chosen shape takes flight. The flying flame moves up to 40 feet and sheds light. You can command it to move and deal fire damage to creatures it passes through.',
    requiredElements: ['fire'],
  },
  {
    id: 'scorching-column',
    name: 'Scorching Column',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'With an upward gesture, you shape a vertical column of extreme heat in a 5-foot burst within 60 feet. Creatures in the column take fire damage with a basic Reflex save.',
    requiredElements: ['fire'],
  },
  {
    id: 'blazing-wave',
    name: 'Blazing Wave',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'Flames flow out from you in a cascading wave, engulfing everything in a 30-foot cone. Creatures in the area take fire damage with a basic Reflex save. Unattended flammable objects in the area catch fire.',
    requiredElements: ['fire'],
  },
  {
    id: 'thermal-nimbus',
    name: 'Thermal Nimbus',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'You direct waves of warmth to drastically shift the surrounding temperature within your kinetic aura. You can choose to make the aura scorching hot (dealing fire damage to enemies who enter or start their turn in it) or comfortably warm (protecting allies from cold environments).',
    requiredElements: ['fire'],
  },
  {
    id: 'crawling-fire',
    name: 'Crawling Fire',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'You create a flaming creature with searing claws that mimics a beast\'s motions. The crawling fire occupies a space within 60 feet and can attack creatures, dealing fire damage. It has AC and HP based on your level.',
    requiredElements: ['fire'],
  },
  {
    id: 'volcanic-escape',
    name: 'Volcanic Escape',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'When an enemy hits you with a melee attack, lava reflexively explodes beneath you and your attacker. You can use this reaction to deal fire damage to the triggering creature and Stride up to half your Speed.',
    requiredElements: ['fire'],
  },
  {
    id: 'kindle-inner-flames',
    name: 'Kindle Inner Flames',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'You awaken the latent fire-channeling potential in other creatures. A willing creature within 30 feet gains the ability to add fire damage to its Strikes for 1 minute and gains resistance to fire damage.',
    requiredElements: ['fire'],
  },
  {
    id: 'solar-detonation',
    name: 'Solar Detonation',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'Blinding flames explode in a swirling sphere, filling a 20-foot burst within 60 feet. Creatures in the area take fire damage with a basic Reflex save. On a failed save, creatures are also dazzled for 1 round from the blinding light.',
    requiredElements: ['fire'],
  },
  {
    id: 'architect-of-flame',
    name: 'Architect of Flame',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'Flames rise and shape into a designed wall or dome at your command. You create a wall of fire up to 60 feet long and 20 feet tall. Creatures that pass through the wall take fire damage. The wall lasts for 1 minute.',
    requiredElements: ['fire'],
  },
  {
    id: 'furnace-form',
    name: 'Furnace Form',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'You open your kinetic gate fully, transforming into a living furnace of flame. For 1 minute, you gain immunity to fire, weakness to cold, a fly Speed of 40 feet, and your melee Strikes deal additional fire damage.',
    requiredElements: ['fire'],
  },
  {
    id: 'walk-through-the-conflagration',
    name: 'Walk Through the Conflagration',
    type: 'class',
    level: 14,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'You fall through your kinetic gate, leaving behind a flame effigy, and reappear majestically elsewhere. You teleport up to 120 feet to a space you can see. The flame effigy explodes, dealing fire damage in a 10-foot burst.',
    requiredElements: ['fire'],
  },
  {
    id: 'all-shall-end-in-flames',
    name: 'All Shall End in Flames',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'White-hot fire consumes everything in a cataclysmic sphere. You create a 40-foot burst of devastating fire within 500 feet that deals massive fire damage with a basic Reflex save. The area continues burning for 1 minute.',
    requiredElements: ['fire'],
  },
  {
    id: 'ignite-the-sun',
    name: 'Ignite the Sun',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Fire element',
    description:
      'The primordial creation fires become yours to control. You conjure a miniature sun within 120 feet that sheds bright light in a 60-foot radius and deals fire damage each round to creatures within 20 feet. It lasts for 1 minute.',
    requiredElements: ['fire'],
  },

  // ========================
  // Kineticist Metal Impulses
  // ========================
  {
    id: 'flashforge',
    name: 'Flashforge',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'An artificial metal object forms in your hands or within 30 feet. You create a simple metal object of up to 1 Bulk—a tool, weapon, or piece of equipment. The object lasts for 10 minutes or until you dismiss it.',
    requiredElements: ['metal'],
  },
  {
    id: 'magnetic-pinions',
    name: 'Magnetic Pinions',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'Metal pieces fly from you propelled by magnetism at great velocity. Make a ranged impulse attack against a creature within 60 feet, dealing piercing damage. The metal pinions deal additional persistent bleed damage on a critical hit.',
    requiredElements: ['metal'],
  },
  {
    id: 'metal-carapace',
    name: 'Metal Carapace',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'Bent and rusted metal sheets cover your body in an armored shell. You gain a +2 item bonus to AC until the start of your next turn. This increases to +3 at 5th level and +4 at 13th level.',
    requiredElements: ['metal'],
  },
  {
    id: 'shard-strike',
    name: 'Shard Strike',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'Jagged metal shards form in the air and lash out from you in a 15-foot cone. Creatures in the area take slashing damage with a basic Reflex save. The shards deal persistent bleed damage on a critical failure.',
    requiredElements: ['metal'],
  },
  {
    id: 'magnetic-field',
    name: 'Magnetic Field',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'A magnetic field surrounds you, repelling and attracting metal objects. Metal weapons used to attack you take a -1 circumstance penalty, and you can use a reaction to pull an unattended metal object to your hand from within 30 feet.',
    requiredElements: ['metal'],
  },
  {
    id: 'plate-in-treasure',
    name: 'Plate in Treasure',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'Precious metal flows from your fingers to plate an object in gold, silver, or another valuable metal. The plating is permanent and increases the item\'s value. You can also use this to coat an object for mechanical benefit.',
    requiredElements: ['metal'],
  },
  {
    id: 'consume-power',
    name: 'Consume Power',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'You absorb energy directed at you, holding it in your kinetic gate. When you are targeted by an electricity or metal-based effect and succeed on your save, you can absorb some of the energy and add bonus damage to your next Elemental Blast.',
    requiredElements: ['metal'],
  },
  {
    id: 'scrap-barricade',
    name: 'Scrap Barricade',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'Ragged metal pieces weld themselves together into a ramshackle barricade. You create a metal wall up to 30 feet long and 10 feet high. It provides cover and has hardness and HP based on your level.',
    requiredElements: ['metal'],
  },
  {
    id: 'conductive-sphere',
    name: 'Conductive Sphere',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'A floating metal ball crackling with electricity forms within 60 feet. Each round, the sphere can discharge a bolt of lightning at a creature within 30 feet, dealing electricity damage. It lasts for 1 minute.',
    requiredElements: ['metal'],
  },
  {
    id: 'retch-rust',
    name: 'Retch Rust',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'You exhale a cloud of rust-colored metal flake tendrils in a 30-foot cone. Creatures in the area take damage with a basic Fortitude save. Metal armor and weapons in the area take persistent rust damage.',
    requiredElements: ['metal'],
  },
  {
    id: 'rain-of-razors',
    name: 'Rain of Razors',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'Razor-sharp metal slivers fall from the sky in a 20-foot burst within 120 feet. Creatures take slashing damage with a basic Reflex save, and the area becomes hazardous terrain dealing slashing damage to creatures that move through it.',
    requiredElements: ['metal'],
  },
  {
    id: 'shattershields',
    name: 'Shattershields',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'Four floating metal plates orbit you, intercepting attacks directed at you and your allies. The shields provide a +2 circumstance bonus to AC to you and allies within your kinetic aura. Each shield can absorb a hit before shattering.',
    requiredElements: ['metal'],
  },
  {
    id: 'alloy-flesh-and-steel',
    name: 'Alloy Flesh and Steel',
    type: 'class',
    level: 14,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'Elemental energy replaces your body\'s cells with raw metal. For 1 minute, you gain resistance to all physical damage, your Strikes deal additional slashing damage, and you gain immunity to bleed and persistent bleed damage.',
    requiredElements: ['metal'],
  },
  {
    id: 'beasts-of-slumbering-steel',
    name: 'Beasts of Slumbering Steel',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'You conjure metal elemental mounts from interlocking metal pieces. Up to 4 willing creatures within 30 feet each gain a metallic steed for 10 minutes that has a Speed of 60 feet and can fly at 40 feet.',
    requiredElements: ['metal'],
  },
  {
    id: 'hell-of-million-needles',
    name: 'Hell of 1,000,000 Needles',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Metal element',
    description:
      'The landscape fills with monumental metal filaments in a 40-foot burst within 120 feet. Creatures take massive piercing damage with a basic Reflex save. The area becomes impassable hazardous terrain for 1 minute.',
    requiredElements: ['metal'],
  },

  // ========================
  // Kineticist Water Impulses
  // ========================
  {
    id: 'deflecting-wave',
    name: 'Deflecting Wave',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'A cascade of water blunts or disperses an incoming attack. When you or an ally within 30 feet is hit by an attack, you can use your reaction to reduce the damage by an amount equal to your level plus your Constitution modifier.',
    requiredElements: ['water'],
  },
  {
    id: 'oceans-balm',
    name: "Ocean's Balm",
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'The sea\'s blessing salves wounds and douses flames. A creature within 30 feet regains Hit Points equal to 1d8 plus your Constitution modifier. If the target is on fire, the healing water also douses the flames.',
    requiredElements: ['water'],
  },
  {
    id: 'tidal-hands',
    name: 'Tidal Hands',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'Waves rush out from you shaped like emphatic gesture hands in a 15-foot cone. Creatures in the area take bludgeoning damage with a basic Reflex save and are pushed 5 feet away from you on a failed save.',
    requiredElements: ['water'],
  },
  {
    id: 'winters-clutch',
    name: "Winter's Clutch",
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'Gleaming, chilling snow falls in a 10-foot burst within 60 feet. Creatures in the area take cold damage with a basic Reflex save. The area becomes difficult terrain from ice until the start of your next turn.',
    requiredElements: ['water'],
  },
  {
    id: 'return-to-the-sea',
    name: 'Return to the Sea',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'You adapt a creature for living and moving in water. A willing creature within 30 feet gains a swim Speed equal to its land Speed and the ability to breathe water for 10 minutes.',
    requiredElements: ['water'],
  },
  {
    id: 'winter-sleet',
    name: 'Winter Sleet',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'Bone-chilling, swirling sleet surrounds you in a 10-foot emanation. Creatures that enter or start their turn in the area take cold damage and the area is difficult terrain. The sleet lasts for 1 minute.',
    requiredElements: ['water'],
  },
  {
    id: 'driving-rain',
    name: 'Driving Rain',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'Heavy raindrops batter down like sling stones in a 30-foot cone, dealing bludgeoning damage with a basic Reflex save. The rain also impairs vision, making creatures in the area concealed.',
    requiredElements: ['water'],
  },
  {
    id: 'torrent-in-the-blood',
    name: 'Torrent in the Blood',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'A healing wave splashes across a 30-foot cone, cleansing afflictions. Each ally in the area regains Hit Points and can attempt a new save against one poison or disease affecting them with a +2 circumstance bonus.',
    requiredElements: ['water'],
  },
  {
    id: 'call-the-hurricane',
    name: 'Call the Hurricane',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'Massive waves spiral around you as you become the hurricane\'s eye. For 1 minute, you create a 20-foot emanation of churning water and wind. Enemies that enter or start their turn in the area take bludgeoning damage and are pushed 10 feet.',
    requiredElements: ['water'],
  },
  {
    id: 'impenetrable-fog',
    name: 'Impenetrable Fog',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'Dense fog condenses in a chaotic swirling pattern within a 20-foot burst. The area becomes heavily obscured. Creatures in the fog are hidden from creatures outside it, and the fog pushes back against attempts to disperse it.',
    requiredElements: ['water'],
  },
  {
    id: 'glacial-prison',
    name: 'Glacial Prison',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'Intense cold swirls around a foe within 60 feet, covering them with frost and ice. The target must attempt a Fortitude save. On a failure, it is immobilized in ice. On a critical failure, it is petrified in ice for 1 minute.',
    requiredElements: ['water'],
  },
  {
    id: 'sea-glass-guardians',
    name: 'Sea Glass Guardians',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'Beautiful water elementals race around you, protecting and healing your allies. You summon two sea glass guardians that orbit within your kinetic aura for 1 minute. Each round, they can heal an ally or attack an enemy.',
    requiredElements: ['water'],
  },
  {
    id: 'barrier-of-boreal-frost',
    name: 'Barrier of Boreal Frost',
    type: 'class',
    level: 14,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'You form intricate ice structures like walls of frozen bricks. Create a wall of ice up to 60 feet long and 20 feet high. Creatures that pass through take cold damage. The wall has hardness and HP, and lasts for 1 minute.',
    requiredElements: ['water'],
  },
  {
    id: 'ride-the-tsunami',
    name: 'Ride the Tsunami',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'Booming, crashing, harbor-filling walls of water overwhelm everything ahead. A massive wave crashes through a 60-foot cone, dealing massive bludgeoning damage with a basic Reflex save. Creatures that fail are pushed 30 feet and knocked prone.',
    requiredElements: ['water'],
  },
  {
    id: 'usurp-the-lunar-reins',
    name: 'Usurp the Lunar Reins',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Water element',
    description:
      'You grasp the moon\'s connection to the tides, bending water across the battlefield. You control all water within 120 feet, moving it and shaping it at will. Each creature in contact with the water can be moved up to 30 feet in any direction.',
    requiredElements: ['water'],
  },

  // ========================
  // Kineticist Wood Impulses
  // ========================
  {
    id: 'fresh-produce',
    name: 'Fresh Produce',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'You grow a nourishing nut, vegetable, seed, or fruit from the Plane of Wood. A creature that eats it regains 1d4+1 Hit Points. The produce spoils after 1 minute if not consumed. The healing increases as you level up.',
    requiredElements: ['wood'],
  },
  {
    id: 'hail-of-splinters',
    name: 'Hail of Splinters',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'A fusillade of jagged splinters fires from you in a 30-foot line. Creatures in the line take piercing damage with a basic Reflex save.',
    requiredElements: ['wood'],
  },
  {
    id: 'hardwood-armor',
    name: 'Hardwood Armor',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'Wood and bark grow over your body like a suit of armor. You gain a +2 item bonus to AC until the start of your next turn. This increases to +3 at 5th level and +4 at 13th level.',
    requiredElements: ['wood'],
  },
  {
    id: 'timber-sentinel',
    name: 'Timber Sentinel',
    type: 'class',
    level: 1,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'A slim, symmetrical tree travels from the Plane of Wood to take root in an unoccupied space within 30 feet. The timber sentinel provides cover, can be climbed, and lasts for 1 minute or until destroyed.',
    requiredElements: ['wood'],
  },
  {
    id: 'ravel-of-thorns',
    name: 'Ravel of Thorns',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'Thorny vines grow in geometric patterns on surfaces within your kinetic aura. The area becomes difficult terrain, and creatures that move through it take piercing damage from the thorns.',
    requiredElements: ['wood'],
  },
  {
    id: 'tumbling-lumber',
    name: 'Tumbling Lumber',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'Heavy logs eject from the Plane of Wood, slamming into enemies in a 30-foot line. Creatures in the line take bludgeoning damage with a basic Reflex save. On a critical failure, they are knocked prone.',
    requiredElements: ['wood'],
  },
  {
    id: 'dash-of-herbs',
    name: 'Dash of Herbs',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'A small cloud of medicinal herbs appears and heals a creature within 30 feet. The target regains Hit Points and gains a +1 circumstance bonus to Fortitude saves against poison and disease for 1 round.',
    requiredElements: ['wood'],
  },
  {
    id: 'wooden-palisade',
    name: 'Wooden Palisade',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'Carved wood planks spring forth from the ground, forming a wall up to 30 feet long and 10 feet high. The wall provides cover and has hardness and HP based on your level.',
    requiredElements: ['wood'],
  },
  {
    id: 'drifting-pollen',
    name: 'Drifting Pollen',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'A haze of pollen drifts through your kinetic aura. Enemies that enter or start their turn in the area must succeed on a Fortitude save or become sickened 1 from the overwhelming pollen. The haze lasts for 1 minute.',
    requiredElements: ['wood'],
  },
  {
    id: 'sanguivolent-roots',
    name: 'Sanguivolent Roots',
    type: 'class',
    level: 8,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'Blood-drinking vines grow from the ground in a 15-foot burst within 60 feet. Creatures in the area take piercing damage as the vines drain their vitality. You and allies within 30 feet regain Hit Points equal to half the damage dealt.',
    requiredElements: ['wood'],
  },
  {
    id: 'hedge-maze',
    name: 'Hedge Maze',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'You sculpt a manicured hedge maze in a 30-foot burst within 60 feet. The hedges create difficult terrain and walls of vegetation that block line of sight. Creatures inside must navigate the maze to escape.',
    requiredElements: ['wood'],
  },
  {
    id: 'witchwood-seed',
    name: 'Witchwood Seed',
    type: 'class',
    level: 12,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'You touch a creature to implant a malignant witchwood seed in its body. The target takes persistent piercing damage as the seed grows roots inside it. Removing the seed requires a Medicine check against your class DC.',
    requiredElements: ['wood'],
  },
  {
    id: 'orchards-endurance',
    name: "Orchard's Endurance",
    type: 'class',
    level: 14,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'Bark patches appear on you and nearby allies\' skin. You and all allies within your kinetic aura gain resistance to physical damage and fast healing for 1 minute. The bark also grants a +1 circumstance bonus to Fortitude saves.',
    requiredElements: ['wood'],
  },
  {
    id: 'rouse-the-forests-fury',
    name: "Rouse the Forest's Fury",
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'Terrifying animated trees burst from the ground to attack your enemies. You conjure four Large tree creatures in unoccupied spaces within 60 feet. Each tree can Strike creatures, dealing bludgeoning damage, and has AC and HP based on your level.',
    requiredElements: ['wood'],
  },
  {
    id: 'turn-the-wheel-of-seasons',
    name: 'Turn the Wheel of Seasons',
    type: 'class',
    level: 18,
    classId: 'kineticist',
    prerequisites: 'Wood element',
    description:
      'Seasons shift rapidly in a 40-foot burst within 120 feet. Spring heals allies, summer burns enemies with fire, autumn weakens foes with decay, and winter freezes them. Each creature is affected by all four seasons in sequence, taking damage and gaining conditions.',
    requiredElements: ['wood'],
  },

  // ========================
  // Kineticist Composite Impulses
  // ========================
  {
    id: 'ambush-bladderwort',
    name: 'Ambush Bladderwort',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Water and Wood elements',
    description:
      'You plant a giant bladderwort seed that grows into a man-eating aquatic plant. The bladderwort occupies a space within 60 feet and can swallow creatures that move adjacent to it, dealing bludgeoning and acid damage.',
  },
  {
    id: 'lava-leap',
    name: 'Lava Leap',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Earth and Fire elements',
    description:
      'You wreathe yourself in molten stone and hurtle toward an enemy. You Leap up to 40 feet toward a creature and make a melee impulse attack, dealing bludgeoning and fire damage on a hit. The molten stone splash damages adjacent creatures.',
  },
  {
    id: 'living-bonfire',
    name: 'Living Bonfire',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Fire and Wood elements',
    description:
      'Roots and branches writhe in elemental fire, creating a living bonfire in a space within 60 feet. The bonfire deals fire damage to creatures that enter or start their turn adjacent to it and sheds bright light in a 30-foot radius.',
  },
  {
    id: 'rain-of-rust',
    name: 'Rain of Rust',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Metal and Water elements',
    description:
      'A red rain cloud appears and pours rust-colored rain in a 15-foot burst within 60 feet. Creatures take damage with a basic Fortitude save. Metal equipment in the area takes persistent rust damage.',
  },
  {
    id: 'whirling-grindstone',
    name: 'Whirling Grindstone',
    type: 'class',
    level: 4,
    classId: 'kineticist',
    prerequisites: 'Earth and Metal elements',
    description:
      'A whirling flint grindstone appears within 60 feet, grinding and sparking. Each round you can direct it to slam into a creature, dealing bludgeoning and slashing damage. It lasts for 1 minute.',
  },
  {
    id: 'ash-strider',
    name: 'Ash Strider',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Air and Fire elements',
    description:
      'You discorporate into a whirling cloud of hot ash and Stride. While in this form, you are immune to precision damage, can move through creatures\' spaces, and deal fire damage to each creature whose space you move through.',
  },
  {
    id: 'desert-wind',
    name: 'Desert Wind',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Air and Earth elements',
    description:
      'A vortex of sand and dust surrounds you in a 15-foot emanation. Creatures that enter or start their turn in the area take slashing damage from scouring sand and are dazzled by the blinding dust.',
  },
  {
    id: 'elemental-artillery',
    name: 'Elemental Artillery',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Metal and Wood elements',
    description:
      'You create a rugged wooden ballista reinforced with spinning metal components. The ballista can fire once per round, making a ranged impulse attack that deals piercing damage to a creature within 120 feet.',
  },
  {
    id: 'jagged-berms',
    name: 'Jagged Berms',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Earth and Wood elements',
    description:
      'You conjure up to six cube-shaped mounds of packed earth reinforced with roots within 60 feet. The berms provide cover, create difficult terrain, and last for 1 minute.',
  },
  {
    id: 'lightning-rod',
    name: 'Lightning Rod',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Air and Metal elements',
    description:
      'You smash a metal rod into a foe within 30 feet and call lightning to strike it. The target takes electricity and piercing damage with a basic Reflex save. The rod remains embedded, and you can call additional lightning strikes on subsequent turns.',
  },
  {
    id: 'molten-wire',
    name: 'Molten Wire',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Fire and Metal elements',
    description:
      'You spin molten iron through a vortex, trapping a foe within 60 feet in searing wires. The target takes fire and slashing damage with a basic Reflex save. On a failure, it is also immobilized by the wires until it Escapes.',
  },
  {
    id: 'rising-hurricane',
    name: 'Rising Hurricane',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Air and Water elements',
    description:
      'A hurricane lifts enemies into the air and crashes them back down. Creatures in a 20-foot burst within 60 feet take bludgeoning damage with a basic Fortitude save. On a failure, they are lifted 20 feet and then fall.',
  },
  {
    id: 'roiling-mudslide',
    name: 'Roiling Mudslide',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Earth and Water elements',
    description:
      'You form water and earth into a mudslide that coats enemies in a 30-foot cone. Creatures take bludgeoning damage with a basic Reflex save. On a failure, they are slowed 1 as mud cakes and hardens on them.',
  },
  {
    id: 'steam-knight',
    name: 'Steam Knight',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Fire and Water elements',
    description:
      'You shape your kinetic aura into swirling steam armor. For 1 minute, you gain a +2 circumstance bonus to AC. Creatures that hit you with melee attacks take fire damage from the scalding steam.',
  },
  {
    id: 'tree-of-duality',
    name: 'Tree of Duality',
    type: 'class',
    level: 6,
    classId: 'kineticist',
    prerequisites: 'Air and Wood elements',
    description:
      'An ephemeral tree bursts forth, floating on currents of air. The tree hovers in a space within 60 feet and provides cover. Allies adjacent to it gain a +1 circumstance bonus to saves, and it sheds a calming breeze that reduces the frightened condition.',
  },

  // ========================
  // General Feats
  // ========================
  {
    id: 'fleet',
    name: 'Fleet',
    type: 'general',
    level: 1,
    description:
      'You move more quickly on foot. Your Speed increases by 5 feet.',
  },
  {
    id: 'toughness',
    name: 'Toughness',
    type: 'general',
    level: 1,
    description:
      'You can withstand more punishment than most before succumbing. Increase your maximum Hit Points by your level. You also reduce the DC of recovery checks by 1.',
  },
  {
    id: 'shield-block',
    name: 'Shield Block',
    type: 'general',
    level: 1,
    description:
      'You snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield\'s Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield.',
  },
  {
    id: 'incredible-initiative',
    name: 'Incredible Initiative',
    type: 'general',
    level: 1,
    description:
      'You react more quickly than others can. You gain a +2 circumstance bonus to initiative rolls.',
  },

  // ========================
  // Skill Feats
  // ========================
  {
    id: 'assurance',
    name: 'Assurance',
    type: 'skill',
    level: 1,
    description:
      'Even in the worst circumstances, you can perform basic tasks. Choose a skill you are trained in. You can forgo rolling a skill check for that skill to instead receive a result of 10 + your proficiency bonus (do not apply any other bonuses, penalties, or modifiers).',
    requiredProficiency: 'trained',
  },
  {
    id: 'dubious-knowledge',
    name: 'Dubious Knowledge',
    type: 'skill',
    level: 1,
    description:
      'You are filled with information that is difficult to verify. When you fail a Recall Knowledge check using any skill, you learn a bit of true knowledge and a bit of erroneous knowledge, but you don\'t know which is which.',
    requiredSkill: 'Recall Knowledge',
    requiredProficiency: 'trained',
  },
  {
    id: 'battle-medicine',
    name: 'Battle Medicine',
    type: 'skill',
    level: 1,
    description:
      'You can patch up wounds, even in combat. Attempt a Medicine check with the same DC as Treat Wounds and restore the corresponding amount of Hit Points. As with Treat Wounds, you can attempt checks against higher DCs if you have the minimum proficiency rank. The target is then temporarily immune to your Battle Medicine for 1 day.',
    requiredSkill: 'Medicine',
    requiredProficiency: 'trained',
  },
  {
    id: 'cat-fall',
    name: 'Cat Fall',
    type: 'skill',
    level: 1,
    description:
      'Your catlike aerial acrobatics allow you to cushion your falls. Treat falls as 10 feet shorter. If you are an expert in Acrobatics, treat falls as 25 feet shorter. If you are a master in Acrobatics, treat them as 50 feet shorter. If legendary, you always land on your feet and never take damage from falling.',
    requiredSkill: 'Acrobatics',
    requiredProficiency: 'trained',
  },
]
