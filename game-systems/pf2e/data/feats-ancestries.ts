import { Feat } from '../../../src/types'

export const ancestryFeats: Feat[] = [
  // ================================================================
  // HUMAN ANCESTRY FEATS
  // ================================================================

  // Level 1
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
  {
    id: 'haughty-obstinacy',
    name: 'Haughty Obstinacy',
    type: 'ancestry',
    level: 1,
    ancestryId: 'human',
    description:
      'Your stubbornness and determination make you resistant to coercion. If you roll a success on a saving throw against an effect that would control your actions, you get a critical success instead. If a creature rolls a failure on a check to Coerce you using Intimidation, it gets a critical failure instead.',
  },
  {
    id: 'unconventional-weaponry',
    name: 'Unconventional Weaponry',
    type: 'ancestry',
    level: 1,
    ancestryId: 'human',
    description:
      'You have familiarized yourself with a particular weapon that is not commonly used by your people. Choose an uncommon simple or martial weapon with a trait corresponding to an ancestry other than your own. You gain access to that weapon, and for the purpose of determining your proficiency, that weapon is a simple weapon.',
  },
  {
    id: 'general-training',
    name: 'General Training',
    type: 'ancestry',
    level: 1,
    ancestryId: 'human',
    description:
      'Your adaptability manifests in your mastery of a range of useful abilities. You gain a 1st-level general feat.',
  },

  // Level 5
  {
    id: 'adaptive-adept',
    name: 'Adaptive Adept',
    type: 'ancestry',
    level: 5,
    ancestryId: 'human',
    description:
      'You have continued adapting your heritage magic to be more versatile. You gain a 1st-level cantrip or a 1st-level spell from your tradition, which you can cast as an innate spell.',
    prerequisites: 'Adapted Cantrip or a heritage that grants spells',
  },
  {
    id: 'clever-improviser',
    name: 'Clever Improviser',
    type: 'ancestry',
    level: 5,
    ancestryId: 'human',
    description:
      'You have learned how to handle situations when you are out of your depth. You gain the Untrained Improvisation general feat. In addition, you can attempt skill actions that normally require you to be trained, even if you are untrained.',
  },
  {
    id: 'cooperative-soul',
    name: 'Cooperative Soul',
    type: 'ancestry',
    level: 5,
    ancestryId: 'human',
    description:
      'You have developed the ability to assist others with remarkable skill. When you use the Aid reaction and succeed, you grant a +3 circumstance bonus instead of +1. On a critical success, you grant a +4 circumstance bonus.',
    prerequisites: 'Cooperative Nature',
  },
  {
    id: 'dragon-spit',
    name: 'Dragon Spit',
    type: 'ancestry',
    level: 5,
    ancestryId: 'human',
    description:
      'You can channel the draconic energy in your blood to unleash a breath weapon. You gain a breath weapon activity that deals 2d6 damage of a type associated with your draconic heritage in a 15-foot cone or 30-foot line. The DC is your class DC.',
    prerequisites: 'Draconic heritage',
  },

  // Level 9
  {
    id: 'multitalented',
    name: 'Multitalented',
    type: 'ancestry',
    level: 9,
    ancestryId: 'human',
    description:
      'You have learned to channel your varied interests and broad abilities into remarkable versatility. You gain a 1st-level multiclass dedication feat, even if you normally could not take another dedication feat until you take more feats from your current archetype.',
  },
  {
    id: 'stubborn-persistence',
    name: 'Stubborn Persistence',
    type: 'ancestry',
    level: 9,
    ancestryId: 'human',
    description:
      'Humans are renowned for their ability to push through impossible odds. When you would be reduced to 0 Hit Points, you can spend a Hero Point to remain at 1 Hit Point instead of gaining the dying condition.',
  },
  {
    id: 'group-aid',
    name: 'Group Aid',
    type: 'ancestry',
    level: 9,
    ancestryId: 'human',
    description:
      'Your coordination with allies is legendary. When you use the Aid reaction, you can apply the bonus to all allies who attempt the same type of check before the start of your next turn, not just one ally.',
    prerequisites: 'Cooperative Nature',
  },

  // Level 13
  {
    id: 'incredible-improvisation',
    name: 'Incredible Improvisation',
    type: 'ancestry',
    level: 13,
    ancestryId: 'human',
    description:
      'A stroke of brilliance gives you a major advantage with a skill despite your lack of training. Once per day, after you roll a check for a skill you are untrained in, you can gain a +4 circumstance bonus to the check.',
    prerequisites: 'Clever Improviser',
  },
  {
    id: 'heroic-presence',
    name: 'Heroic Presence',
    type: 'ancestry',
    level: 13,
    ancestryId: 'human',
    description:
      'Your presence inspires others to go beyond their normal limits. As a 2-action activity, you can grant all allies within 30 feet a +1 status bonus to attack rolls and saving throws for 1 round. You can use this ability once per day.',
  },
  {
    id: 'shory-aeromancer',
    name: 'Shory Aeromancer',
    type: 'ancestry',
    level: 13,
    ancestryId: 'human',
    description:
      'You have unlocked the ancient Shory secrets of wind magic. You can cast 4th-level fly on yourself as an innate arcane spell once per day.',
  },

  // Level 17
  {
    id: 'boundless-determination',
    name: 'Boundless Determination',
    type: 'ancestry',
    level: 17,
    ancestryId: 'human',
    description:
      'Nothing can keep you down for long. At the start of each of your turns, you reduce your clumsy, enfeebled, frightened, sickened, and stupefied conditions by 1. You also end a single source of persistent damage of your choice.',
  },
  {
    id: 'heir-of-the-saoc',
    name: 'Heir of the Saoc',
    type: 'ancestry',
    level: 17,
    ancestryId: 'human',
    description:
      'You have unlocked the predictive abilities pioneered by the ancient Saoc Brethren of Lirgen. Once per day, you can use a free action to gain the effects of foresight for 1 minute without expending a spell slot.',
  },

  // ================================================================
  // ELF ANCESTRY FEATS
  // ================================================================

  // Level 1
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
      'Your mystic control and mental meditation allow you to resist external influences upon your consciousness. You gain a +1 circumstance bonus to saving throws against emotion effects. If you roll a success on a saving throw against an emotion effect, you get a critical success instead.',
  },
  {
    id: 'elven-weapon-familiarity',
    name: 'Elven Weapon Familiarity',
    type: 'ancestry',
    level: 1,
    ancestryId: 'elf',
    description:
      'You favor the traditional weapons of your elven ancestors. You are trained with longbows, composite longbows, longswords, rapiers, shortbows, and composite shortbows. In addition, you gain access to all uncommon elf weapons. For determining your proficiency, martial elf weapons are simple weapons and advanced elf weapons are martial weapons.',
  },
  {
    id: 'forlorn',
    name: 'Forlorn',
    type: 'ancestry',
    level: 1,
    ancestryId: 'elf',
    description:
      'Watching your friends and loved ones age and die taught you how to cope with loss and grief. You gain a +1 circumstance bonus to saving throws against emotion effects. When you roll a success on a save against an emotion effect, you get a critical success instead.',
  },
  {
    id: 'elven-verve',
    name: 'Elven Verve',
    type: 'ancestry',
    level: 1,
    ancestryId: 'elf',
    description:
      'You are resistant to toxins that would fell lesser beings. You gain a +1 circumstance bonus to saving throws against poisons and diseases, and you reduce the duration of the sickened condition by 1 round.',
  },

  // Level 5
  {
    id: 'ageless-patience',
    name: 'Ageless Patience',
    type: 'ancestry',
    level: 5,
    ancestryId: 'elf',
    description:
      'You work at a pace born from long years of life, calm and sure. You can voluntarily spend twice as long on a Perception check or skill check, gaining a +2 circumstance bonus to that check. You do not need to commit to this bonus before rolling.',
  },
  {
    id: 'elven-instincts',
    name: 'Elven Instincts',
    type: 'ancestry',
    level: 5,
    ancestryId: 'elf',
    description:
      'Your elven senses sharpen when danger is near. You gain a +2 circumstance bonus to Perception checks made for initiative rolls. Additionally, if you use Perception for initiative, you can always use Perception instead of Stealth when rolling for initiative even if you would otherwise need to use Stealth.',
  },
  {
    id: 'ancestral-longevity',
    name: 'Ancestral Longevity',
    type: 'ancestry',
    level: 5,
    ancestryId: 'elf',
    description:
      'You have accumulated a vast array of lived knowledge over the years. During your daily preparations, you can become trained in one skill of your choice. This proficiency lasts until you prepare again. Since this proficiency is temporary, you cannot use it as a prerequisite for a skill increase or a permanent character option.',
  },
  {
    id: 'brightness-seeker',
    name: 'Brightness Seeker',
    type: 'ancestry',
    level: 5,
    ancestryId: 'elf',
    description:
      'Once per day, you can cast faerie fire as a 2nd-level primal innate spell. You gain darkvision while this spell is active.',
  },

  // Level 9
  {
    id: 'expert-longevity',
    name: 'Expert Longevity',
    type: 'ancestry',
    level: 9,
    ancestryId: 'elf',
    description:
      'You have extended your studies to encompass a broader range of skills. When you choose a skill in which to become trained with Ancestral Longevity, you can also choose a second skill and become trained in that skill as well. At 13th level, you become expert in the first skill instead.',
    prerequisites: 'Ancestral Longevity',
  },
  {
    id: 'elf-step',
    name: 'Elf Step',
    type: 'ancestry',
    level: 9,
    ancestryId: 'elf',
    description:
      'You move in a graceful manner that makes you difficult to pin down. When you use the Step action, you can move 10 feet instead of 5 feet.',
  },
  {
    id: 'elven-weapon-elegance',
    name: 'Elven Weapon Elegance',
    type: 'ancestry',
    level: 9,
    ancestryId: 'elf',
    description:
      'You have mastered the flowing motions of traditional elven weapons. When you critically hit using an elf weapon or one of the weapons listed in Elven Weapon Familiarity, you apply the critical specialization effect of that weapon.',
    prerequisites: 'Elven Weapon Familiarity',
  },

  // Level 13
  {
    id: 'universal-longevity',
    name: 'Universal Longevity',
    type: 'ancestry',
    level: 13,
    ancestryId: 'elf',
    description:
      'You have perfected your ability to apply your experience to any situation. Once per day as a 1-action activity, you can change the skills you selected with Ancestral Longevity and Expert Longevity without waiting for your daily preparations.',
    prerequisites: 'Expert Longevity',
  },
  {
    id: 'elven-weapon-expertise',
    name: 'Elven Weapon Expertise',
    type: 'ancestry',
    level: 13,
    ancestryId: 'elf',
    description:
      'Your elven weapon training has become instinctive. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in longbows, composite longbows, longswords, rapiers, shortbows, composite shortbows, and all elf weapons in which you are trained.',
    prerequisites: 'Elven Weapon Familiarity',
  },
  {
    id: 'tree-climber',
    name: 'Tree Climber',
    type: 'ancestry',
    level: 13,
    ancestryId: 'elf',
    description:
      'You have spent many years navigating the treetops of ancient forests. You gain a climb Speed of 15 feet. While climbing, you are not flat-footed.',
  },

  // Level 17
  {
    id: 'magic-rider',
    name: 'Magic Rider',
    type: 'ancestry',
    level: 17,
    ancestryId: 'elf',
    description:
      'Your deep connection to magic allows you to travel along ley lines and currents of magical energy. Once per day, you can cast teleport as a 7th-level arcane innate spell, but only to transport yourself and willing creatures touching you.',
  },
  {
    id: 'woodlands-wraith',
    name: 'Woodlands Wraith',
    type: 'ancestry',
    level: 17,
    ancestryId: 'elf',
    description:
      'You can pass through natural terrain as though you were a ghost. You gain the effects of freedom of movement in natural terrain, and you can move through natural difficult terrain and greater difficult terrain at full Speed without penalty.',
  },

  // ================================================================
  // DWARF ANCESTRY FEATS
  // ================================================================

  // Level 1
  {
    id: 'dwarven-lore',
    name: 'Dwarven Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'dwarf',
    description:
      'You eagerly absorbed the old stories and traditions of your ancestors, your people, and your land. You become trained in Crafting and Religion. If you would automatically become trained in one of those skills, you instead become trained in a skill of your choice. You also become trained in Dwarven Lore.',
  },
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
    id: 'dwarven-weapon-familiarity',
    name: 'Dwarven Weapon Familiarity',
    type: 'ancestry',
    level: 1,
    ancestryId: 'dwarf',
    description:
      'You favor the traditional weapons of your dwarven ancestors. You are trained with the battle axe, pick, and warhammer. In addition, you gain access to all uncommon dwarf weapons. For determining your proficiency, martial dwarf weapons are simple weapons and advanced dwarf weapons are martial weapons.',
  },
  {
    id: 'unburdened-iron',
    name: 'Unburdened Iron',
    type: 'ancestry',
    level: 1,
    ancestryId: 'dwarf',
    description:
      'You have learned techniques to move easily in heavy armor. Your Speed is never reduced by armor you wear. In addition, any reduction to your Speed from encumbrance is halved.',
  },
  {
    id: 'stonecunning',
    name: 'Stonecunning',
    type: 'ancestry',
    level: 1,
    ancestryId: 'dwarf',
    description:
      'You have a knack for noticing even small inconsistencies and craftsmanship techniques in the stonework around you. You gain a +2 circumstance bonus to Perception checks to notice unusual stonework, such as traps and hidden passages in stone walls or floors. You get a check to notice such features even when you are not actively Searching.',
  },
  {
    id: 'vengeful-hatred',
    name: 'Vengeful Hatred',
    type: 'ancestry',
    level: 1,
    ancestryId: 'dwarf',
    description:
      'You heart aches for vengeance against those who have wronged your people. Choose one of the following dwarven ancestral foes: drow, duergar, giant, or orc. You gain a +1 circumstance bonus to damage with weapons and unarmed attacks against creatures with that trait. If your attack would deal more than one weapon die of damage, the bonus is equal to the number of weapon dice.',
  },

  // Level 5
  {
    id: 'boulder-roll',
    name: 'Boulder Roll',
    type: 'ancestry',
    level: 5,
    ancestryId: 'dwarf',
    description:
      'Your dwarven build allows you to push through enemies like a rolling boulder. You Stride up to your Speed, and you can move through the spaces of creatures that are your size or smaller, pushing them aside as you go. Each creature whose space you move through must attempt a Fortitude save against your Athletics DC or be pushed aside.',
  },
  {
    id: 'dwarven-reinforcement',
    name: 'Dwarven Reinforcement',
    type: 'ancestry',
    level: 5,
    ancestryId: 'dwarf',
    description:
      'You are skilled at quickly patching up damaged items. You can spend 10 minutes to repair a damaged item using Crafting, restoring 2d6 Hit Points to it. You do not need a repair kit to do this. At 10th level, this increases to 3d6.',
  },
  {
    id: 'mountains-stoutness',
    name: "Mountain's Stoutness",
    type: 'ancestry',
    level: 5,
    ancestryId: 'dwarf',
    description:
      'Your hardiness lets you withstand more punishment than most. You gain 2 additional Hit Points for each level you have. When you have the dying condition, the DC of your recovery checks is equal to 9 + your dying value rather than 10 + your dying value.',
  },
  {
    id: 'dwarven-weapon-cunning',
    name: 'Dwarven Weapon Cunning',
    type: 'ancestry',
    level: 5,
    ancestryId: 'dwarf',
    description:
      'You have learned cunning techniques to get the most out of your dwarven weapons. Whenever you critically hit using a battle axe, pick, warhammer, or a dwarf weapon, you apply the critical specialization effect for that weapon.',
    prerequisites: 'Dwarven Weapon Familiarity',
  },

  // Level 9
  {
    id: 'stonewalker',
    name: 'Stonewalker',
    type: 'ancestry',
    level: 9,
    ancestryId: 'dwarf',
    description:
      'You have a deep connection to the stone around you. You gain the ability to meld into stone for up to 10 minutes once per day, as the meld into stone spell. You also gain tremorsense as an imprecise sense out to 15 feet.',
  },
  {
    id: 'echoing-resilience',
    name: 'Echoing Resilience',
    type: 'ancestry',
    level: 9,
    ancestryId: 'dwarf',
    description:
      'Your dwarven fortitude echoes through your body, helping you resist ongoing harm. When you succeed at a Fortitude save against an ongoing effect (such as persistent damage or a disease), you get a critical success instead.',
  },
  {
    id: 'sheltering-stone',
    name: 'Sheltering Stone',
    type: 'ancestry',
    level: 9,
    ancestryId: 'dwarf',
    description:
      'You become as immovable as the stone beneath your feet. You gain a +2 circumstance bonus to your Fortitude or Reflex DC against attempts to Shove or Trip you. You also gain a +2 circumstance bonus to saving throws against forced movement effects.',
  },

  // Level 13
  {
    id: 'dwarven-weapon-expertise',
    name: 'Dwarven Weapon Expertise',
    type: 'ancestry',
    level: 13,
    ancestryId: 'dwarf',
    description:
      'Your dwarven weapon training has become instinctive. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in battle axes, picks, warhammers, and all dwarf weapons in which you are trained.',
    prerequisites: 'Dwarven Weapon Familiarity',
  },
  {
    id: 'stonewall',
    name: 'Stonewall',
    type: 'ancestry',
    level: 13,
    ancestryId: 'dwarf',
    description:
      'Your body is as hard as stone. You gain resistance to physical damage equal to half your level (minimum 1), but only when you are standing on stone or earth.',
  },
  {
    id: 'forge-blessed-shot',
    name: 'Forge-Blessed Shot',
    type: 'ancestry',
    level: 13,
    ancestryId: 'dwarf',
    description:
      'Your dwarven craftsmanship empowers your attacks. Once per day as a free action, you can imbue a weapon you wield with the power of the forge. For 1 minute, the weapon deals an additional 1d6 fire damage on each Strike.',
  },

  // Level 17
  {
    id: 'stonegate',
    name: 'Stonegate',
    type: 'ancestry',
    level: 17,
    ancestryId: 'dwarf',
    description:
      'You can pass through stone as easily as walking through an archway. Once per day, you can cast passwall as a 7th-level primal innate spell, but only through stone or earth barriers.',
  },
  {
    id: 'might-of-the-mountain',
    name: 'Might of the Mountain',
    type: 'ancestry',
    level: 17,
    ancestryId: 'dwarf',
    description:
      'You channel the immovable might of the mountains themselves. Once per day, for 1 minute, you gain resistance 10 to all physical damage, you cannot be moved against your will, and your Strikes deal an additional 2d6 damage.',
  },

  // ================================================================
  // HALFLING ANCESTRY FEATS
  // ================================================================

  // Level 1
  {
    id: 'distracting-shadows',
    name: 'Distracting Shadows',
    type: 'ancestry',
    level: 1,
    ancestryId: 'halfling',
    description:
      'You have learned to stay hidden by taking advantage of larger creatures as cover. You can use creatures that are at least one size larger than you as cover for the Hide and Sneak actions, gaining a +2 circumstance bonus to your Stealth checks when doing so.',
  },
  {
    id: 'halfling-lore',
    name: 'Halfling Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'halfling',
    description:
      'You have absorbed the knowledge and traditions of your halfling community. You become trained in Acrobatics and Stealth. If you would automatically become trained in one of those skills, you instead become trained in a skill of your choice. You also become trained in Halfling Lore.',
  },
  {
    id: 'sure-feet',
    name: 'Sure Feet',
    type: 'ancestry',
    level: 1,
    ancestryId: 'halfling',
    description:
      'Whether keeping your balance or scrambling up a tricky climb, your small size and quick reflexes serve you well. You gain a +1 circumstance bonus to Acrobatics checks to Balance and Athletics checks to Climb. You are also not flat-footed when Balancing or Climbing.',
  },
  {
    id: 'keen-eyes',
    name: 'Keen Eyes',
    type: 'ancestry',
    level: 1,
    ancestryId: 'halfling',
    description:
      'Your eyes are sharp, allowing you to make out small details others might miss. You gain a +2 circumstance bonus to Perception checks to find hidden objects, including hidden traps and doors. You also gain a +2 circumstance bonus when attempting to Seek.',
  },
  {
    id: 'unfettered-halfling',
    name: 'Unfettered Halfling',
    type: 'ancestry',
    level: 1,
    ancestryId: 'halfling',
    description:
      'You were forced to live and work near giants, but you always yearned for freedom. You gain a +1 circumstance bonus to checks and DCs to avoid being Grappled or Restrained, and on checks to Escape. If you roll a success on a check to Escape, you get a critical success instead.',
  },
  {
    id: 'halfling-weapon-familiarity',
    name: 'Halfling Weapon Familiarity',
    type: 'ancestry',
    level: 1,
    ancestryId: 'halfling',
    description:
      'You favor the weapons your people have used for ages. You are trained with the sling, halfling sling staff, shortsword, and filcher\'s fork. In addition, you gain access to all uncommon halfling weapons. For determining your proficiency, martial halfling weapons are simple weapons and advanced halfling weapons are martial weapons.',
  },

  // Level 5
  {
    id: 'cultural-adaptability',
    name: 'Cultural Adaptability',
    type: 'ancestry',
    level: 5,
    ancestryId: 'halfling',
    description:
      'During your extensive travels, you have encountered and learned from countless cultures. You gain the Adopted Ancestry general feat, and you also gain one 1st-level ancestry feat from the ancestry you chose for the Adopted Ancestry feat.',
  },
  {
    id: 'halfling-weapon-trickster',
    name: 'Halfling Weapon Trickster',
    type: 'ancestry',
    level: 5,
    ancestryId: 'halfling',
    description:
      'You are particularly adept at fighting with your people\'s favored weapons. Whenever you critically hit using a sling, halfling sling staff, shortsword, or a halfling weapon, you apply the critical specialization effect for that weapon.',
    prerequisites: 'Halfling Weapon Familiarity',
  },
  {
    id: 'guiding-luck',
    name: 'Guiding Luck',
    type: 'ancestry',
    level: 5,
    ancestryId: 'halfling',
    description:
      'Your luck extends to aiding your allies. Once per day, when an ally within 30 feet fails a check, you can use a reaction to grant them a +1 circumstance bonus to the check, potentially turning a failure into a success.',
  },
  {
    id: 'step-lively',
    name: 'Step Lively',
    type: 'ancestry',
    level: 5,
    ancestryId: 'halfling',
    description:
      'You are skilled at avoiding bigger creatures. When a creature at least one size larger than you misses you with a melee Strike, you can use your reaction to Step.',
  },

  // Level 9
  {
    id: 'irrepressible',
    name: 'Irrepressible',
    type: 'ancestry',
    level: 9,
    ancestryId: 'halfling',
    description:
      'You are naturally cheerful and resistant to despair. You gain a +2 circumstance bonus to saving throws against emotion effects that would make you frightened or give you despair. When you roll a success on a saving throw against an emotion effect, you get a critical success instead.',
  },
  {
    id: 'ceaseless-shadows',
    name: 'Ceaseless Shadows',
    type: 'ancestry',
    level: 9,
    ancestryId: 'halfling',
    description:
      'You slip into hiding effortlessly, even in the middle of combat. You can use the Hide action without needing to be behind cover or concealed, as long as you are within 10 feet of a creature at least one size larger than you.',
    prerequisites: 'Distracting Shadows',
  },
  {
    id: 'dance-underfoot',
    name: 'Dance Underfoot',
    type: 'ancestry',
    level: 9,
    ancestryId: 'halfling',
    description:
      'You dart between the legs of larger foes with ease. You can move through the spaces of creatures that are at least two sizes larger than you without needing to attempt any check. You also gain a +2 circumstance bonus to AC against attacks of opportunity triggered by your movement through such spaces.',
  },

  // Level 13
  {
    id: 'halfling-weapon-expertise',
    name: 'Halfling Weapon Expertise',
    type: 'ancestry',
    level: 13,
    ancestryId: 'halfling',
    description:
      'Your halfling weapon training has become instinctive. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in slings, halfling sling staves, shortswords, and all halfling weapons in which you are trained.',
    prerequisites: 'Halfling Weapon Familiarity',
  },
  {
    id: 'toppling-dance',
    name: 'Toppling Dance',
    type: 'ancestry',
    level: 13,
    ancestryId: 'halfling',
    description:
      'You use your small size to trip up bigger foes. When you successfully Trip a creature that is at least one size larger than you, the creature also takes bludgeoning damage equal to your Strength modifier plus your level.',
  },
  {
    id: 'unhampered-passage',
    name: 'Unhampered Passage',
    type: 'ancestry',
    level: 13,
    ancestryId: 'halfling',
    description:
      'Nothing can slow your stride. You ignore all difficult terrain, and you treat greater difficult terrain as difficult terrain.',
  },

  // Level 17
  {
    id: 'shadow-self',
    name: 'Shadow Self',
    type: 'ancestry',
    level: 17,
    ancestryId: 'halfling',
    description:
      'You have honed your ability to hide until you can seem to disappear entirely. Once per hour, you can become invisible for 1 minute or until you take a hostile action, whichever comes first. This is an innate occult spell effect.',
  },
  {
    id: 'incredible-luck',
    name: 'Incredible Luck',
    type: 'ancestry',
    level: 17,
    ancestryId: 'halfling',
    description:
      'Your legendary halfling luck seems nearly limitless. Your Halfling Luck or Guiding Luck feat can be used once per hour instead of once per day, and you gain a +2 circumstance bonus when you reroll using these feats.',
    prerequisites: 'Guiding Luck',
  },

  // ================================================================
  // GNOME ANCESTRY FEATS
  // ================================================================

  // Level 1
  {
    id: 'animal-accomplice',
    name: 'Animal Accomplice',
    type: 'ancestry',
    level: 1,
    ancestryId: 'gnome',
    description:
      'You build a rapport with an animal, which becomes magically bonded to you. You gain a familiar with the trait of your gnome heritage. If you already have a familiar, your familiar gains an additional ability.',
  },
  {
    id: 'gnome-obsession',
    name: 'Gnome Obsession',
    type: 'ancestry',
    level: 1,
    ancestryId: 'gnome',
    description:
      'You might have a broader knowledge base than others of your level. At 1st level, choose a Lore skill. You gain the trained proficiency rank in that skill. At 2nd level, you gain expert proficiency in that Lore skill, and at 7th level you gain master proficiency.',
  },
  {
    id: 'gnome-weapon-familiarity',
    name: 'Gnome Weapon Familiarity',
    type: 'ancestry',
    level: 1,
    ancestryId: 'gnome',
    description:
      'You favor the weapons your people have used for ages. You are trained with the glaive and kukri. In addition, you gain access to all uncommon gnome weapons. For determining your proficiency, martial gnome weapons are simple weapons and advanced gnome weapons are martial weapons.',
  },
  {
    id: 'illusion-sense',
    name: 'Illusion Sense',
    type: 'ancestry',
    level: 1,
    ancestryId: 'gnome',
    description:
      'Your ancestors spent their days cloaked in illusions, and you have a knack for seeing through them. You gain a +1 circumstance bonus to both Perception checks and Will saves against illusions. When you come within 10 feet of an illusion that can be disbelieved, you get a check to disbelieve it even if you did not Seek.',
  },
  {
    id: 'fey-fellowship',
    name: 'Fey Fellowship',
    type: 'ancestry',
    level: 1,
    ancestryId: 'gnome',
    description:
      'Your deep connection to the First World grants you insight when dealing with fey creatures. You gain a +2 circumstance bonus to both Perception checks and saving throws against fey. In addition, whenever you meet a fey creature in a social situation, you can attempt a Diplomacy check to Make an Impression on that creature immediately.',
  },
  {
    id: 'first-world-magic',
    name: 'First World Magic',
    type: 'ancestry',
    level: 1,
    ancestryId: 'gnome',
    description:
      'Your connection to the First World grants you a primal innate spell. You gain one cantrip from the primal spell list. You can cast this spell as a primal innate spell at will. A cantrip is heightened to a spell rank equal to half your level rounded up.',
  },

  // Level 5
  {
    id: 'energized-font',
    name: 'Energized Font',
    type: 'ancestry',
    level: 5,
    ancestryId: 'gnome',
    description:
      'The magic of the First World flows through you, granting you additional magical energy. You gain one additional spell slot of the highest rank of spell you can cast from a spellcasting class. You can use this spell slot only to cast a spell from that class.',
    prerequisites: 'You can cast spells from spell slots',
  },
  {
    id: 'gnome-weapon-innovator',
    name: 'Gnome Weapon Innovator',
    type: 'ancestry',
    level: 5,
    ancestryId: 'gnome',
    description:
      'You produce unexpected results when you wield gnome weapons. Whenever you critically hit using a glaive, kukri, or gnome weapon, you apply the critical specialization effect for that weapon.',
    prerequisites: 'Gnome Weapon Familiarity',
  },
  {
    id: 'life-leap',
    name: 'Life Leap',
    type: 'ancestry',
    level: 5,
    ancestryId: 'gnome',
    description:
      'You can channel the living energy around you to propel yourself forward. As a 2-action activity, you can jump from the space of a willing living creature to the space of another willing living creature within 30 feet. Both creatures must be your size or larger.',
  },
  {
    id: 'eclectic-obsession',
    name: 'Eclectic Obsession',
    type: 'ancestry',
    level: 5,
    ancestryId: 'gnome',
    description:
      'Your curiosity drives you to dabble in a wide range of topics. Once per day during your daily preparations, you can become trained in one Lore skill of your choice. This proficiency lasts until your next daily preparations.',
  },

  // Level 9
  {
    id: 'instinctive-obfuscation',
    name: 'Instinctive Obfuscation',
    type: 'ancestry',
    level: 9,
    ancestryId: 'gnome',
    description:
      'The magic that courses through your blood allows you to vanish from danger instinctively. When you are targeted by an attack, you can use a reaction to become concealed against that attack. If the attack misses, you can Step as a free action. You can use this reaction a number of times per day equal to your Charisma modifier (minimum 1).',
  },
  {
    id: 'vivacious-conduit',
    name: 'Vivacious Conduit',
    type: 'ancestry',
    level: 9,
    ancestryId: 'gnome',
    description:
      'Your connection to the First World has grown stronger. You gain fast healing equal to half your level while you are above half your maximum Hit Points.',
  },
  {
    id: 'fortuitous-shift',
    name: 'Fortuitous Shift',
    type: 'ancestry',
    level: 9,
    ancestryId: 'gnome',
    description:
      'You have an instinctive ability to partially shift into the First World when in danger. Once per day when you would take damage from an attack, you can use a reaction to gain resistance to all damage against that attack equal to your level.',
  },

  // Level 13
  {
    id: 'gnome-weapon-expertise',
    name: 'Gnome Weapon Expertise',
    type: 'ancestry',
    level: 13,
    ancestryId: 'gnome',
    description:
      'Your gnome weapon training has become instinctive. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in glaives, kukris, and all gnome weapons in which you are trained.',
    prerequisites: 'Gnome Weapon Familiarity',
  },
  {
    id: 'fey-transcendence',
    name: 'Fey Transcendence',
    type: 'ancestry',
    level: 13,
    ancestryId: 'gnome',
    description:
      'You have transcended the mortal limitations of your form by drawing on fey essence. You gain a +2 status bonus to saving throws against death effects and negative energy, and you do not age normally. You still die of old age, but the bleaching no longer threatens you.',
  },
  {
    id: 'first-world-adept',
    name: 'First World Adept',
    type: 'ancestry',
    level: 13,
    ancestryId: 'gnome',
    description:
      'Your connection to the First World has grown incredibly powerful. You can cast 5th-level illusory scene and passwall each once per day as primal innate spells.',
    prerequisites: 'First World Magic',
  },

  // Level 17
  {
    id: 'homeward-bound',
    name: 'Homeward Bound',
    type: 'ancestry',
    level: 17,
    ancestryId: 'gnome',
    description:
      'Your connection to the First World is so strong that you can momentarily cross the planar boundary. Once per day, you can cast plane shift as a 7th-level primal innate spell, but only to travel between the Material Plane and the First World.',
  },
  {
    id: 'impossible-luck',
    name: 'Impossible Luck',
    type: 'ancestry',
    level: 17,
    ancestryId: 'gnome',
    description:
      'Fey luck pervades your being. Once per day, after you roll a critical failure on any check, you can treat the result as a failure instead. Once per day, after you roll a failure on a saving throw, you can reroll the saving throw and use the better result.',
  },

  // ================================================================
  // GOBLIN ANCESTRY FEATS
  // ================================================================

  // Level 1
  {
    id: 'burn-it',
    name: 'Burn It!',
    type: 'ancestry',
    level: 1,
    ancestryId: 'goblin',
    description:
      'Fire is the best! You gain a +1 circumstance bonus to damage rolls with fire. If you deal fire damage to a creature, it also takes 1 persistent fire damage. At 10th level, these bonuses increase to +2 and 2 persistent fire damage.',
  },
  {
    id: 'goblin-lore',
    name: 'Goblin Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'goblin',
    description:
      'You have picked up skills and tales from your goblin community. You become trained in Nature and Stealth. If you would automatically become trained in one of those skills, you instead become trained in a skill of your choice. You also become trained in Goblin Lore.',
  },
  {
    id: 'goblin-scuttle',
    name: 'Goblin Scuttle',
    type: 'ancestry',
    level: 1,
    ancestryId: 'goblin',
    description:
      'You take advantage of your allies\' movements to move as well. When an ally ends a move action adjacent to you, you can use a reaction to Step.',
  },
  {
    id: 'goblin-weapon-familiarity',
    name: 'Goblin Weapon Familiarity',
    type: 'ancestry',
    level: 1,
    ancestryId: 'goblin',
    description:
      'You favor the weapons of your goblin ancestors. You are trained with the dogslicer and horsechopper. In addition, you gain access to all uncommon goblin weapons. For determining your proficiency, martial goblin weapons are simple weapons and advanced goblin weapons are martial weapons.',
  },
  {
    id: 'junk-tinker',
    name: 'Junk Tinker',
    type: 'ancestry',
    level: 1,
    ancestryId: 'goblin',
    description:
      'You can create useful items out of junk and refuse. You can use Crafting to create items of up to 1st level for free using junk materials, though items created this way are shoddy and cannot be Repaired. You can spend 10 minutes to create a simple tool or weapon from junk.',
  },
  {
    id: 'rough-rider',
    name: 'Rough Rider',
    type: 'ancestry',
    level: 1,
    ancestryId: 'goblin',
    description:
      'You are skilled at riding the unusual mounts favored by goblins. You gain the Ride general feat, even if you don\'t meet the prerequisites. You gain a +1 circumstance bonus to Nature checks to command your mount, and your mount does not need to use an action to remain in combat.',
  },
  {
    id: 'very-sneaky',
    name: 'Very Sneaky',
    type: 'ancestry',
    level: 1,
    ancestryId: 'goblin',
    description:
      'Taller folk rarely notice you sneaking about. You can move 5 feet farther when you take the Sneak action, up to your full Speed. In addition, as long as you continue to Sneak, you do not need cover or concealment to Hide or Sneak.',
  },

  // Level 5
  {
    id: 'goblin-weapon-frenzy',
    name: 'Goblin Weapon Frenzy',
    type: 'ancestry',
    level: 5,
    ancestryId: 'goblin',
    description:
      'You know how to wield your people\'s weapons with a frantic energy. Whenever you critically hit using a dogslicer, horsechopper, or goblin weapon, you apply the critical specialization effect for that weapon.',
    prerequisites: 'Goblin Weapon Familiarity',
  },
  {
    id: 'tail-spin',
    name: 'Tail Spin',
    type: 'ancestry',
    level: 5,
    ancestryId: 'goblin',
    description:
      'You lash out with your tail to throw enemies off balance. As a 2-action activity, you can attempt a Trip action against each creature adjacent to you. You use the same Athletics check result for each creature.',
  },
  {
    id: 'scalding-spit',
    name: 'Scalding Spit',
    type: 'ancestry',
    level: 5,
    ancestryId: 'goblin',
    description:
      'Your saliva is particularly caustic. You can spit acid as a ranged unarmed attack with a range of 30 feet that deals 1d6 acid damage. At 7th level and every 2 levels thereafter, the damage increases by 1d6.',
  },
  {
    id: 'ankle-bite',
    name: 'Ankle Bite',
    type: 'ancestry',
    level: 5,
    ancestryId: 'goblin',
    description:
      'When a larger foe grabs you, you latch on and bite them back. If a creature grabs or restrains you, you can use a reaction to make a jaws Strike against that creature. On a hit, you deal damage and the creature must succeed at a Fortitude save or release you.',
  },

  // Level 9
  {
    id: 'cave-climber',
    name: 'Cave Climber',
    type: 'ancestry',
    level: 9,
    ancestryId: 'goblin',
    description:
      'After years of living in caves and warrens, you are an expert at navigating tight spaces and vertical surfaces. You gain a climb Speed of 10 feet. You are also not flat-footed while climbing.',
  },
  {
    id: 'skittering-scuttle',
    name: 'Skittering Scuttle',
    type: 'ancestry',
    level: 9,
    ancestryId: 'goblin',
    description:
      'You can scuttle farther and faster when your allies are on the move. When you use Goblin Scuttle, you can Stride up to half your Speed instead of Stepping.',
    prerequisites: 'Goblin Scuttle',
  },
  {
    id: 'bouncy-goblin',
    name: 'Bouncy Goblin',
    type: 'ancestry',
    level: 9,
    ancestryId: 'goblin',
    description:
      'You have a particularly springy body. You take no damage from falling, regardless of the distance. When you land after a fall, you can immediately use a reaction to Leap.',
  },

  // Level 13
  {
    id: 'goblin-weapon-expertise',
    name: 'Goblin Weapon Expertise',
    type: 'ancestry',
    level: 13,
    ancestryId: 'goblin',
    description:
      'Your goblin weapon training has become instinctive. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in dogslicers, horsechoppers, and all goblin weapons in which you are trained.',
    prerequisites: 'Goblin Weapon Familiarity',
  },
  {
    id: 'unbreakable-er-goblin',
    name: 'Unbreakable-er Goblin',
    type: 'ancestry',
    level: 13,
    ancestryId: 'goblin',
    description:
      'Your body has become incredibly resilient through all the abuse you have survived. You gain 20 additional Hit Points. In addition, you gain resistance to physical damage equal to your Constitution modifier.',
  },
  {
    id: 'chosen-of-lamashtu',
    name: 'Chosen of Lamashtu',
    type: 'ancestry',
    level: 13,
    ancestryId: 'goblin',
    description:
      'You have been blessed by dark powers. Once per day, you can cast 5th-level fireball as an innate arcane spell, but the damage is fire and the flames are an eerie green color.',
  },

  // Level 17
  {
    id: 'annihilating-swing',
    name: 'Annihilating Swing',
    type: 'ancestry',
    level: 17,
    ancestryId: 'goblin',
    description:
      'You channel your chaotic goblin fury into a devastating attack. Once per day as a 2-action activity, you can make a melee Strike that deals an additional 6d6 damage. If the Strike hits, the target must succeed at a Fortitude save against your class DC or be stunned 2.',
  },
  {
    id: 'kneecap',
    name: 'Kneecap',
    type: 'ancestry',
    level: 17,
    ancestryId: 'goblin',
    description:
      'You are an expert at targeting weak points in larger creatures. When you hit a creature that is at least one size larger than you with a melee Strike, the target takes an additional 2d6 persistent bleed damage and takes a -10-foot status penalty to its Speed for 1 minute.',
  },

  // ================================================================
  // LESHY ANCESTRY FEATS
  // ================================================================

  // Level 1
  {
    id: 'grasping-reach',
    name: 'Grasping Reach',
    type: 'ancestry',
    level: 1,
    ancestryId: 'leshy',
    description:
      'You can extend your limbs beyond their normal length, using vines, branches, or other growths. You gain a vine unarmed attack with a reach of 10 feet that deals 1d4 bludgeoning damage. This attack is in the brawling group.',
  },
  {
    id: 'leshy-lore',
    name: 'Leshy Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'leshy',
    description:
      'You have absorbed the knowledge passed down through your primal connections. You become trained in Nature and Survival. If you would automatically become trained in one of those skills, you instead become trained in a skill of your choice. You also become trained in Leshy Lore.',
  },
  {
    id: 'leshy-superstition',
    name: 'Leshy Superstition',
    type: 'ancestry',
    level: 1,
    ancestryId: 'leshy',
    description:
      'You mistrust unnatural magic. You gain a +1 circumstance bonus to saving throws against arcane and occult spells and effects. If you roll a success on a save against an arcane or occult effect, you get a critical success instead.',
  },
  {
    id: 'seedpod',
    name: 'Seedpod',
    type: 'ancestry',
    level: 1,
    ancestryId: 'leshy',
    description:
      'You can launch seeds from your body as a ranged attack. You gain a seedpod ranged unarmed attack with a range increment of 30 feet that deals 1d4 bludgeoning damage. On a critical hit, the target takes 1 persistent poison damage.',
  },
  {
    id: 'shadow-of-the-wilds',
    name: 'Shadow of the Wilds',
    type: 'ancestry',
    level: 1,
    ancestryId: 'leshy',
    description:
      'You are skilled at blending into natural environments. In natural terrain, you can Hide and Sneak even without cover or concealment. You gain a +2 circumstance bonus to Stealth checks in natural terrain.',
  },
  {
    id: 'undaunted',
    name: 'Undaunted',
    type: 'ancestry',
    level: 1,
    ancestryId: 'leshy',
    description:
      'You have a stubborn resilience born of nature itself. You gain a +1 circumstance bonus to saving throws against fear effects. When you would gain the frightened condition, reduce its value by 1 (minimum 0).',
  },

  // Level 5
  {
    id: 'bark-knuckles',
    name: 'Bark Knuckles',
    type: 'ancestry',
    level: 5,
    ancestryId: 'leshy',
    description:
      'Your fists harden with thick bark, making your unarmed attacks particularly dangerous. Your fist unarmed attacks deal 1d6 bludgeoning damage instead of 1d4, and they gain the shove trait.',
  },
  {
    id: 'ritual-reversion',
    name: 'Ritual Reversion',
    type: 'ancestry',
    level: 5,
    ancestryId: 'leshy',
    description:
      'You can revert your body back to a more natural form to recover from harm. Once per day, you can spend 10 minutes to regain Hit Points equal to your level times your Constitution modifier.',
  },
  {
    id: 'lucky-keepsake',
    name: 'Lucky Keepsake',
    type: 'ancestry',
    level: 5,
    ancestryId: 'leshy',
    description:
      'You carry a small natural charm that brings you luck. Once per day, you can reroll a failed saving throw and use the better result. The keepsake must be a natural object such as a stone, feather, or dried flower.',
  },
  {
    id: 'thorned-fist',
    name: 'Thorned Fist',
    type: 'ancestry',
    level: 5,
    ancestryId: 'leshy',
    description:
      'Your body sprouts thorns that make your unarmed attacks more dangerous. Your fist and vine unarmed attacks deal an additional 1 persistent bleed damage on a hit.',
  },

  // Level 9
  {
    id: 'lignification',
    name: 'Lignification',
    type: 'ancestry',
    level: 9,
    ancestryId: 'leshy',
    description:
      'You can harden your body into solid wood as a 1-action activity. For 1 minute, you gain resistance to physical damage equal to your Constitution modifier (minimum 1), but you are immobilized and cannot take move actions. You can dismiss this effect as a free action. You can use this once per hour.',
  },
  {
    id: 'leshy-glide',
    name: 'Leshy Glide',
    type: 'ancestry',
    level: 9,
    ancestryId: 'leshy',
    description:
      'You can spread your body like a leaf or fan of branches to glide through the air. You gain a fly Speed equal to your Speed, but you must end your turn on solid ground or you fall.',
  },
  {
    id: 'canopy-sight',
    name: 'Canopy Sight',
    type: 'ancestry',
    level: 9,
    ancestryId: 'leshy',
    description:
      'Your connection to plant life allows you to sense through nearby vegetation. You gain tremorsense as an imprecise sense out to 30 feet, but only in areas where there are plants, trees, or other vegetation.',
  },

  // Level 13
  {
    id: 'regrowth',
    name: 'Regrowth',
    type: 'ancestry',
    level: 13,
    ancestryId: 'leshy',
    description:
      'Your plant body can regrow damaged parts with remarkable speed. You gain fast healing equal to half your level. This fast healing is suppressed when you are in an area of severe or greater cold or when affected by fire damage for 1 round.',
  },
  {
    id: 'flourishing-strike',
    name: 'Flourishing Strike',
    type: 'ancestry',
    level: 13,
    ancestryId: 'leshy',
    description:
      'Your attacks cause plants to burst forth from the target. When you hit a creature with an unarmed attack, plants erupt around the target\'s feet. The target must succeed at a Reflex save against your class DC or be immobilized for 1 round as plants hold them in place.',
  },
  {
    id: 'rooted-resilience',
    name: 'Rooted Resilience',
    type: 'ancestry',
    level: 13,
    ancestryId: 'leshy',
    description:
      'You can root yourself into the ground to become nearly immovable. As a 1-action activity, you root yourself in place. While rooted, you gain a +4 circumstance bonus to your Fortitude DC against being Shoved or Tripped, and you gain resistance 10 to physical damage. You cannot move while rooted. You can uproot yourself as a free action.',
  },

  // Level 17
  {
    id: 'verdant-metamorphosis',
    name: 'Verdant Metamorphosis',
    type: 'ancestry',
    level: 17,
    ancestryId: 'leshy',
    description:
      'You have transcended the boundary between animal and plant life. You gain immunity to poison and the paralyzed condition. You can photosynthesize, removing your need to eat as long as you have access to sunlight. Once per day, you can cast tree stride as a 6th-level primal innate spell.',
  },
  {
    id: 'call-of-the-wild',
    name: 'Call of the Wild',
    type: 'ancestry',
    level: 17,
    ancestryId: 'leshy',
    description:
      'You can call upon the full might of the natural world. Once per day as a 3-action activity, you can summon a nature incarnate to fight alongside you for 1 minute, as the summon nature\'s ally spell heightened to 9th level.',
  },

  // ================================================================
  // ORC ANCESTRY FEATS
  // ================================================================

  // Level 1
  {
    id: 'beast-trainer',
    name: 'Beast Trainer',
    type: 'ancestry',
    level: 1,
    ancestryId: 'orc',
    description:
      'You have a way with animals, particularly those used in battle. You gain a +1 circumstance bonus to Nature checks to Command an Animal. If you are an expert in Nature, you can Command an Animal as a free action once per round.',
  },
  {
    id: 'iron-fists',
    name: 'Iron Fists',
    type: 'ancestry',
    level: 1,
    ancestryId: 'orc',
    description:
      'Your fists have been trained to deliver powerful blows. Your fist unarmed attacks are no longer nonlethal and deal 1d6 bludgeoning damage instead of 1d4. They do not take a penalty for making lethal attacks.',
  },
  {
    id: 'orc-ferocity',
    name: 'Orc Ferocity',
    type: 'ancestry',
    level: 1,
    ancestryId: 'orc',
    description:
      'Fierceness in battle runs through your blood, and you refuse to fall from your injuries. Once per day, when you would be reduced to 0 Hit Points, you are instead reduced to 1 Hit Point and gain the wounded 1 condition (or increase your wounded condition value by 1).',
  },
  {
    id: 'orc-lore',
    name: 'Orc Lore',
    type: 'ancestry',
    level: 1,
    ancestryId: 'orc',
    description:
      'You have learned the ways of your orc community. You become trained in Athletics and Intimidation. If you would automatically become trained in one of those skills, you instead become trained in a skill of your choice. You also become trained in Orc Lore.',
  },
  {
    id: 'orc-superstition',
    name: 'Orc Superstition',
    type: 'ancestry',
    level: 1,
    ancestryId: 'orc',
    description:
      'You distrust magic and have developed a sixth sense for detecting it. Use a reaction when a creature targets you with a spell. You gain a +1 circumstance bonus to your saving throw against that spell and to your AC against that spell.',
  },
  {
    id: 'orc-weapon-familiarity',
    name: 'Orc Weapon Familiarity',
    type: 'ancestry',
    level: 1,
    ancestryId: 'orc',
    description:
      'In combat, you favor the weapons of your orc ancestors. You are trained with the falchion and greataxe. In addition, you gain access to all uncommon orc weapons. For determining your proficiency, martial orc weapons are simple weapons and advanced orc weapons are martial weapons.',
  },

  // Level 5
  {
    id: 'athletic-might',
    name: 'Athletic Might',
    type: 'ancestry',
    level: 5,
    ancestryId: 'orc',
    description:
      'Your raw physical power lets you perform athletic feats that most find impossible. Whenever you attempt an Athletics check to Climb, Swim, Force Open, or Shove, you gain a +2 circumstance bonus. You do not need a free hand to Climb or Swim.',
  },
  {
    id: 'orc-weapon-carnage',
    name: 'Orc Weapon Carnage',
    type: 'ancestry',
    level: 5,
    ancestryId: 'orc',
    description:
      'You are brutally effective with the weapons of your ancestors. Whenever you critically hit using a falchion, greataxe, or orc weapon, you apply the critical specialization effect for that weapon.',
    prerequisites: 'Orc Weapon Familiarity',
  },
  {
    id: 'pervasive-superstition',
    name: 'Pervasive Superstition',
    type: 'ancestry',
    level: 5,
    ancestryId: 'orc',
    description:
      'You have a deep-seated wariness of magic that extends to all magical effects. You gain a +1 circumstance bonus to saving throws against spells and magical effects at all times, not just when using Orc Superstition.',
    prerequisites: 'Orc Superstition',
  },
  {
    id: 'battle-cry',
    name: 'Battle Cry',
    type: 'ancestry',
    level: 5,
    ancestryId: 'orc',
    description:
      'Your ferocious battle cry strikes fear into the hearts of your enemies. When you roll initiative, you can Demoralize one creature you can see as a free action. If you are a master in Intimidation, you can Demoralize all creatures within 30 feet.',
  },

  // Level 9
  {
    id: 'incredible-ferocity',
    name: 'Incredible Ferocity',
    type: 'ancestry',
    level: 9,
    ancestryId: 'orc',
    description:
      'Given time to collect yourself after cheating death, you can quickly recover and continue the fight. You can use Orc Ferocity with a frequency of once per hour instead of once per day. When you use Orc Ferocity, you gain temporary Hit Points equal to your level.',
    prerequisites: 'Orc Ferocity',
  },
  {
    id: 'victorious-vigor',
    name: 'Victorious Vigor',
    type: 'ancestry',
    level: 9,
    ancestryId: 'orc',
    description:
      'Each time you bring a foe down, your vigor is renewed. When you reduce an enemy to 0 Hit Points, you gain temporary Hit Points equal to your Constitution modifier. These temporary Hit Points last for 1 minute.',
  },
  {
    id: 'bloody-blows',
    name: 'Bloody Blows',
    type: 'ancestry',
    level: 9,
    ancestryId: 'orc',
    description:
      'Your attacks leave deep, bleeding wounds. When you hit a creature with a melee Strike and deal damage, the target takes 1d4 persistent bleed damage. At 14th level, this increases to 1d8 persistent bleed damage.',
  },

  // Level 13
  {
    id: 'orc-weapon-expertise',
    name: 'Orc Weapon Expertise',
    type: 'ancestry',
    level: 13,
    ancestryId: 'orc',
    description:
      'Your orc weapon training has become instinctive. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in falchions, greataxes, and all orc weapons in which you are trained.',
    prerequisites: 'Orc Weapon Familiarity',
  },
  {
    id: 'rampaging-ferocity',
    name: 'Rampaging Ferocity',
    type: 'ancestry',
    level: 13,
    ancestryId: 'orc',
    description:
      'When Orc Ferocity triggers, your rage carries you through. When you use Orc Ferocity to avoid being knocked out, you can immediately make a melee Strike against the creature that reduced you to 0 HP, if that creature is within your reach. This Strike gains a +2 circumstance bonus to damage for every weapon die.',
    prerequisites: 'Orc Ferocity',
  },
  {
    id: 'spell-devourer',
    name: 'Spell Devourer',
    type: 'ancestry',
    level: 13,
    ancestryId: 'orc',
    description:
      'Your superstitious distrust of magic has turned into an ability to actively consume it. When you succeed at a saving throw against a spell, you gain temporary Hit Points equal to twice the spell\'s rank for 1 minute.',
    prerequisites: 'Pervasive Superstition',
  },

  // Level 17
  {
    id: 'undying-ferocity',
    name: 'Undying Ferocity',
    type: 'ancestry',
    level: 17,
    ancestryId: 'orc',
    description:
      'Your ferocity in battle is virtually limitless. You can use Orc Ferocity with a frequency of once per 10 minutes instead of once per hour. When you use Orc Ferocity, you regain Hit Points equal to twice your level instead of being reduced to 1 Hit Point.',
    prerequisites: 'Incredible Ferocity',
  },
  {
    id: 'war-commander',
    name: 'War Commander',
    type: 'ancestry',
    level: 17,
    ancestryId: 'orc',
    description:
      'Your commanding presence on the battlefield inspires your allies to fight with greater ferocity. As a 2-action activity, you can grant all allies within 30 feet a +2 status bonus to attack rolls and damage rolls for 1 round. You can use this ability once per hour.',
  },

  // ================================================================
  // CATFOLK ANCESTRY FEATS
  // ================================================================

  // Level 1
  {
    id: 'cats-luck',
    name: "Cat's Luck",
    type: 'ancestry',
    level: 1,
    ancestryId: 'catfolk',
    description:
      "You have inherited your people's legendary fortune. When you fail a Reflex saving throw, you can use your reaction to reroll the save and use the better result. You can use this once per day.",
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
      "You favor the weapons of your people. You are trained with the kama, kukri, claw blade, and whip claw. In addition, you gain access to all uncommon catfolk weapons. For the purposes of determining your proficiency, martial catfolk weapons are simple weapons and advanced catfolk weapons are martial weapons.",
  },
  {
    id: 'climbing-claws',
    name: 'Climbing Claws',
    type: 'ancestry',
    level: 1,
    ancestryId: 'catfolk',
    description:
      'Your claws are sharp enough to help you climb. You gain a claw unarmed attack that deals 1d4 slashing damage, and you gain a +1 circumstance bonus to Athletics checks to Climb.',
  },
  {
    id: 'slink',
    name: 'Slink',
    type: 'ancestry',
    level: 1,
    ancestryId: 'catfolk',
    description:
      'You slink through the shadows with feline grace. You can move at full Speed while using Stealth to Sneak, rather than moving at half Speed.',
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

  // Level 5
  {
    id: 'catfolk-dance',
    name: 'Catfolk Dance',
    type: 'ancestry',
    level: 5,
    ancestryId: 'catfolk',
    description:
      'You have a feline grace that translates into a mesmerizing dance. You can use Performance instead of Diplomacy to Make an Impression, and you gain a +2 circumstance bonus to Performance checks made while dancing.',
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
    description:
      "You know how to get the most out of catfolk weapons. Whenever you critically hit using a catfolk weapon or one of your claw unarmed attacks, you apply the weapon's critical specialization effect.",
    prerequisites: 'Catfolk Weapon Familiarity',
  },

  // Level 9
  {
    id: 'lucky-break',
    name: 'Lucky Break',
    type: 'ancestry',
    level: 9,
    ancestryId: 'catfolk',
    description:
      "Your luck extends beyond just reflexes. You can use Cat's Luck when you fail a Fortitude or Will saving throw in addition to Reflex saves. You can still use it only once per day.",
    prerequisites: "Cat's Luck",
  },
  {
    id: 'evasiveness',
    name: 'Evasiveness',
    type: 'ancestry',
    level: 9,
    ancestryId: 'catfolk',
    description:
      'Your catlike reflexes let you dodge area effects with ease. When you roll a success on a Reflex saving throw, you get a critical success instead.',
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

  // Level 13
  {
    id: 'catfolk-weapon-expertise',
    name: 'Catfolk Weapon Expertise',
    type: 'ancestry',
    level: 13,
    ancestryId: 'catfolk',
    description:
      'Your catfolk weapon training has become instinctive. Whenever you gain a class feature that grants you expert or greater proficiency in a given weapon or weapons, you also gain that proficiency in catfolk weapons in which you are trained.',
    prerequisites: 'Catfolk Weapon Familiarity',
  },
  {
    id: 'reliable-lucky-break',
    name: 'Reliable Lucky Break',
    type: 'ancestry',
    level: 13,
    ancestryId: 'catfolk',
    description:
      "Your luck is more dependable than ever. You can use Cat's Luck once per hour instead of once per day.",
    prerequisites: 'Lucky Break',
  },
  {
    id: 'black-cat-curse',
    name: 'Black Cat Curse',
    type: 'ancestry',
    level: 13,
    ancestryId: 'catfolk',
    description:
      'Bad luck follows those who wrong you. When a creature within 30 feet that you can see critically succeeds on a Strike against you, you can use your reaction to force the attacker to reroll the attack and use the worse result.',
  },

  // Level 17
  {
    id: 'prideful-pounce',
    name: 'Prideful Pounce',
    type: 'ancestry',
    level: 17,
    ancestryId: 'catfolk',
    description:
      'You can close the distance to a foe in the blink of an eye and unleash a devastating assault. As a single action, you Stride up to your Speed and make a melee Strike at the end of your movement. If you began this action hidden or undetected, the target is flat-footed against the Strike.',
  },
  {
    id: 'ten-lives',
    name: 'Ten Lives',
    type: 'ancestry',
    level: 17,
    ancestryId: 'catfolk',
    description:
      "Even death has trouble keeping hold of you. Once per day, when you would die from damage, you instead drop to 1 Hit Point and gain the wounded 1 condition (or increase your wounded value by 1). You are then temporarily immune to this effect for 24 hours.",
  },
]
