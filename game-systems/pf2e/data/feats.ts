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
