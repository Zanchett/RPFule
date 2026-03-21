import { Feat } from '../../../src/types'

export const rogueFeats: Feat[] = [
  // ========================
  // Level 1 Rogue Class Feats
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
    id: 'trap-finder',
    name: 'Trap Finder',
    type: 'class',
    level: 1,
    classId: 'rogue',
    description:
      'You have an intuitive sense that alerts you to the dangers and presence of traps. You gain a +1 circumstance bonus to Perception checks to find traps, to AC against attacks made by traps, and to saves against traps. Even if you aren\'t Searching, you get a check to find traps that normally require you to be Searching. You still need to meet any other requirements to find the trap.',
  },
  {
    id: 'youre-next',
    name: "You're Next",
    type: 'class',
    level: 1,
    classId: 'rogue',
    description:
      'After downing a foe, you menacingly remind another that you\'re coming for them next. Trigger: You reduce an enemy to 0 Hit Points. You attempt an Intimidation check with a +2 circumstance bonus to Demoralize a single creature that you can see and that can see you.',
    prerequisites: 'trained in Intimidation',
  },
  {
    id: 'tumble-behind',
    name: 'Tumble Behind',
    type: 'class',
    level: 1,
    classId: 'rogue',
    description:
      'You tumble to a foe\'s flank, throwing them off-balance. When you successfully Tumble Through a creature\'s space, that creature is flat-footed against the next attack you make before the end of your turn.',
  },
  {
    id: 'poisoner-dedication',
    name: 'Poisoner Dedication',
    type: 'class',
    level: 1,
    classId: 'rogue',
    description:
      'You have learned the secrets of crafting and applying poisons. You gain the basic alchemy benefits, including the ability to create alchemical items during your daily preparations. You gain batches of infused reagents equal to your level. Your advanced alchemy level for creating poisons is 1. You can use your infused reagents only to create poisons.',
  },

  // ========================
  // Level 2 Rogue Class Feats
  // ========================
  {
    id: 'sneak-savant',
    name: 'Sneak Savant',
    type: 'class',
    level: 2,
    classId: 'rogue',
    description:
      'It is almost impossible to spot you when you attempt to Sneak. When you roll a failure on a Sneak action, you get a success instead.',
  },
  {
    id: 'unbalancing-blow',
    name: 'Unbalancing Blow',
    type: 'class',
    level: 2,
    classId: 'rogue',
    description:
      'Interweaving your most powerful attacks with skillful, targeted strikes against your foe\'s weak points, you can knock them off-balance. When you deal sneak attack damage to a creature that is flat-footed, the target becomes off-guard until the start of your next turn.',
  },
  {
    id: 'mobility',
    name: 'Mobility',
    type: 'class',
    level: 2,
    classId: 'rogue',
    description:
      'You move in a way that denies your enemies the opportunity to strike you. When you take a Stride action to move half your Speed or less, that movement does not trigger reactions. If you are using the Step action, you can move 10 feet instead of 5 feet.',
  },
  {
    id: 'quick-draw',
    name: 'Quick Draw',
    type: 'class',
    level: 2,
    classId: 'rogue',
    description:
      'You draw your weapon and attack with the same motion. You Interact to draw a weapon, then Strike with that weapon.',
  },
  {
    id: 'poison-weapon',
    name: 'Poison Weapon',
    type: 'class',
    level: 2,
    classId: 'rogue',
    description:
      'You apply a poison to a weapon. If your next Strike with that weapon before the end of your next turn hits and deals damage, it applies the effects of the poison, provided that poison can be delivered via a weapon. If you have a free hand, you can Interact to draw a poison as part of this action.',
  },
  {
    id: 'nimble-roll',
    name: 'Nimble Roll',
    type: 'class',
    level: 2,
    classId: 'rogue',
    description:
      'You throw yourself into a roll to escape danger. You can use Nimble Dodge before attempting a Reflex saving throw in addition to its original trigger. If you do, you gain a +2 circumstance bonus to the triggering Reflex save.',
    prerequisites: 'Nimble Dodge',
  },

  // ========================
  // Level 4 Rogue Class Feats
  // ========================
  {
    id: 'dread-striker',
    name: 'Dread Striker',
    type: 'class',
    level: 4,
    classId: 'rogue',
    description:
      'You capitalize on your enemies\' fear to slip past their defenses. Any creature that has the frightened condition is also flat-footed against your attacks.',
  },
  {
    id: 'gang-up',
    name: 'Gang Up',
    type: 'class',
    level: 4,
    classId: 'rogue',
    description:
      'You and your allies harry a target together. A creature is flat-footed against your melee attacks due to flanking as long as the creature is within both your reach and the reach of one of your allies.',
  },
  {
    id: 'light-step',
    name: 'Light Step',
    type: 'class',
    level: 4,
    classId: 'rogue',
    description:
      'You move with exceeding grace. When you Stride, you can ignore difficult terrain.',
  },
  {
    id: 'reactive-pursuit',
    name: 'Reactive Pursuit',
    type: 'class',
    level: 4,
    classId: 'rogue',
    description:
      'You keep pace with a retreating foe. Trigger: An enemy within your reach attempts to move away from you. You Stride, up to your Speed, following the triggering creature and keeping it in your reach throughout its movement until it stops or you have moved your full Speed.',
  },
  {
    id: 'twist-the-knife',
    name: 'Twist the Knife',
    type: 'class',
    level: 4,
    classId: 'rogue',
    description:
      'After stabbing a creature, you push the blade deeper to deal extra harm. After you deal sneak attack damage to a creature with a Strike, you can spend an action to deal an additional amount of persistent bleed damage equal to half your number of sneak attack dice.',
  },
  {
    id: 'scouts-warning',
    name: "Scout's Warning",
    type: 'class',
    level: 4,
    classId: 'rogue',
    description:
      'You visually or audibly warn your allies of danger, granting them each a +1 circumstance bonus to their initiative rolls. Trigger: You are about to roll Perception for initiative.',
  },

  // ========================
  // Level 6 Rogue Class Feats
  // ========================
  {
    id: 'skirmish-strike',
    name: 'Skirmish Strike',
    type: 'class',
    level: 6,
    classId: 'rogue',
    description:
      'Your feet and weapon move in tandem. Either Step and then Strike, or Strike and then Step.',
  },
  {
    id: 'predictable',
    name: 'Predictable!',
    type: 'class',
    level: 6,
    classId: 'rogue',
    description:
      'By anticipating your opponents, you can predict their actions and thwart them. When you use Perception for your initiative roll and the result is a success, you get a critical success instead. In addition, on your first turn in an encounter, you can use a reaction even though you haven\'t yet had a turn.',
  },
  {
    id: 'preparation',
    name: 'Preparation',
    type: 'class',
    level: 6,
    classId: 'rogue',
    description:
      'You scope out an enemy and prepare to strike. Choose a creature you can see. You study the creature, gaining a +2 circumstance bonus to your next Strike against that creature before the end of your next turn. That Strike also gains the benefits of your sneak attack, even if the creature isn\'t flat-footed.',
  },
  {
    id: 'steady-balance',
    name: 'Steady Balance',
    type: 'class',
    level: 6,
    classId: 'rogue',
    description:
      'You can keep your balance easily, even in adverse conditions. Whenever you roll a success using the Balance action, you get a critical success instead. You\'re not flat-footed while Balancing on narrow surfaces and uneven ground.',
  },
  {
    id: 'precise-debilitations',
    name: 'Precise Debilitations',
    type: 'class',
    level: 6,
    classId: 'rogue',
    description:
      'You know how to target your foes\' weak points to deliver more devastating debilitations. Any time you deal sneak attack damage and apply a debilitation, add the following options to those you can choose from: Debilitation The target takes an additional 2d6 precision damage from your attacks; Debilitation The target becomes flat-footed.',
  },

  // ========================
  // Level 8 Rogue Class Feats
  // ========================
  {
    id: 'blank-slate',
    name: 'Blank Slate',
    type: 'class',
    level: 8,
    classId: 'rogue',
    description:
      'Your deceptions are so complete that you can fool even magic. Detection, revelation, and scrying effects pass right over you, your possessions, and your auras, detecting nothing unless the detecting effect has a counteract rank of 10 or higher or is from a deity.',
  },
  {
    id: 'opportune-backstab',
    name: 'Opportune Backstab',
    type: 'class',
    level: 8,
    classId: 'rogue',
    description:
      'When your ally strikes a foe you\'ve distracted, you capitalize on the opening. Trigger: A creature within your melee reach is hit by a melee attack from one of your allies. You make a Strike against the triggering creature.',
  },
  {
    id: 'sidestep',
    name: 'Sidestep',
    type: 'class',
    level: 8,
    classId: 'rogue',
    description:
      'You deftly step out of the way of an attack, letting the blow continue to the creature next to you. Trigger: The attack roll for a Strike targeting you fails or critically fails. You redirect the attack to a creature of your choice that is adjacent to you and within the reach of the triggering attack. The attacker rerolls the Strike\'s attack roll against the new target.',
    prerequisites: 'Nimble Dodge',
  },
  {
    id: 'sly-striker',
    name: 'Sly Striker',
    type: 'class',
    level: 8,
    classId: 'rogue',
    description:
      'Your attacks deal more damage when you catch enemies off guard. When you succeed or critically succeed at a Strike against a flat-footed creature and deal sneak attack damage, you also deal an additional 1d6 precision damage.',
  },
  {
    id: 'delay-trap',
    name: 'Delay Trap',
    type: 'class',
    level: 8,
    classId: 'rogue',
    description:
      'You can jam a trap\'s mechanism to delay its activation. When you successfully Disable a Device to disable a trap, you can choose to delay the trap instead of disabling it. The trap doesn\'t trigger for 1 minute. After this time, the trap returns to its original state.',
  },

  // ========================
  // Level 10 Rogue Class Feats
  // ========================
  {
    id: 'tactical-entry',
    name: 'Tactical Entry',
    type: 'class',
    level: 10,
    classId: 'rogue',
    description:
      'You rush in to take advantage of a foe\'s opening. When you roll initiative, you can Stride as a free action, then make a Strike as a free action against a flat-footed creature.',
  },
  {
    id: 'sneak-attacker',
    name: 'Sneak Attacker',
    type: 'class',
    level: 10,
    classId: 'rogue',
    description:
      'You have mastered the art of the sneak attack. Whenever you succeed at a Strike against a flat-footed creature, you treat the Strike as though you had also critically succeeded for the purpose of applying your sneak attack damage.',
  },
  {
    id: 'looting-presence',
    name: 'Looting Presence',
    type: 'class',
    level: 10,
    classId: 'rogue',
    description:
      'You have a knack for quickly grabbing unattended items. You can Interact to pick up an item as a free action once per round. Additionally, you can Steal as a single action instead of requiring two actions.',
  },
  {
    id: 'cognitive-loophole',
    name: 'Cognitive Loophole',
    type: 'class',
    level: 10,
    classId: 'rogue',
    description:
      'You can find a loophole in a mental effect to save yourself. Trigger: Your turn begins, and you have the confused or controlled condition. You attempt a DC 11 flat check. On a success, the triggering condition ends or is suppressed until the end of this turn.',
  },

  // ========================
  // Level 12 Rogue Class Feats
  // ========================
  {
    id: 'fantastic-leap',
    name: 'Fantastic Leap',
    type: 'class',
    level: 12,
    classId: 'rogue',
    description:
      'You launch yourself through the air at a foe. You make a Leap of up to your Speed. At the end of your Leap, you can make a melee Strike. If you fall after the Leap, you take no falling damage.',
  },
  {
    id: 'instant-opening',
    name: 'Instant Opening',
    type: 'class',
    level: 12,
    classId: 'rogue',
    description:
      'You distract your opponent with a few choice words or a gesture, and then exploit the distraction to attack. You Feint, and if the target becomes flat-footed, you can make a Strike against that creature as a free action.',
  },
  {
    id: 'spring-from-the-shadows',
    name: 'Spring from the Shadows',
    type: 'class',
    level: 12,
    classId: 'rogue',
    description:
      'You leap from your hiding spot to attack a foe. You Stride up to your Speed, but you must end your movement next to an enemy you\'re hidden from or undetected by. You then Strike that enemy; you are flat-footed against that enemy\'s reactions triggered by this Strike. The target is flat-footed against this Strike.',
  },
  {
    id: 'leave-an-opening',
    name: 'Leave an Opening',
    type: 'class',
    level: 12,
    classId: 'rogue',
    description:
      'When you hit hard enough, you leave an opening for your allies. When you critically succeed at a Strike and deal damage, the target is flat-footed against all attacks until the start of your next turn.',
  },

  // ========================
  // Level 14 Rogue Class Feats
  // ========================
  {
    id: 'sense-the-unseen',
    name: 'Sense the Unseen',
    type: 'class',
    level: 14,
    classId: 'rogue',
    description:
      'When you look for foes, you can catch even the slightest cues. Trigger: You fail a check to Seek. You automatically detect the presence of any hidden or undetected creatures within 30 feet of you. You still don\'t know their exact location, but you are now aware of them.',
  },
  {
    id: 'dispelling-slice',
    name: 'Dispelling Slice',
    type: 'class',
    level: 14,
    classId: 'rogue',
    description:
      'Your sneak attack has the power to unravel enchantments. When you deal sneak attack damage to a flat-footed creature, you can attempt to counteract a single spell active on the target. Your counteract rank is equal to half your level rounded up, and you use the result of the attack roll for the counteract check.',
  },
  {
    id: 'perfect-distraction',
    name: 'Perfect Distraction',
    type: 'class',
    level: 14,
    classId: 'rogue',
    description:
      'You create a diversion so perfect that it can fool even the most perceptive creatures. When you use Create a Diversion, you can roll Deception against the Perception DC of every creature that can observe you, and on a success, you become hidden from those creatures, not merely undetected.',
  },
  {
    id: 'implausible-purchase',
    name: 'Implausible Purchase',
    type: 'class',
    level: 14,
    classId: 'rogue',
    description:
      'Somehow, against all odds, you produce just the right item from somewhere on your person. You gain an item of a level no higher than your level minus 2, as though you always had it on you. The item must be one that you could have purchased.',
  },

  // ========================
  // Level 16 Rogue Class Feats
  // ========================
  {
    id: 'cloud-step',
    name: 'Cloud Step',
    type: 'class',
    level: 16,
    classId: 'rogue',
    description:
      'Using a burst of speed, you can briefly walk on air. When you Stride, you can move across empty air as though it were solid ground for the duration of the Stride. If you end your movement in the air, you fall normally.',
    prerequisites: 'Light Step',
  },
  {
    id: 'tricksters-ace',
    name: "Trickster's Ace",
    type: 'class',
    level: 16,
    classId: 'rogue',
    description:
      'You have a contingency plan for just about everything. During your daily preparations, you can prepare a spell of 4th level or lower from any spell tradition. It must have a trigger and be a reaction. You can cast this spell once during the day as a reaction without meeting any of the spell\'s other requirements.',
  },
  {
    id: 'reactive-interference',
    name: 'Reactive Interference',
    type: 'class',
    level: 16,
    classId: 'rogue',
    description:
      'You can sabotage an enemy\'s actions through quick interference. Trigger: An adjacent creature attempts to use a manipulate action or a move action, make a ranged attack, or leave a square during a move action it\'s using. You lash out to interfere. If the triggering action is a manipulate action, the creature must succeed at a DC 5 flat check or the action is disrupted. If the triggering action is a move action, the target must succeed at a Reflex save against your class DC or the action is disrupted.',
  },
  {
    id: 'masters-strike',
    name: "Master's Strike",
    type: 'class',
    level: 16,
    classId: 'rogue',
    description:
      'Your mastery of combat techniques allows you to deliver devastating blows. When you Strike a flat-footed creature and roll a natural 20 on the attack roll, the target must succeed at a Fortitude save against your class DC or be paralyzed for 1 round.',
  },

  // ========================
  // Level 18 Rogue Class Feats
  // ========================
  {
    id: 'impossible-striker',
    name: 'Impossible Striker',
    type: 'class',
    level: 18,
    classId: 'rogue',
    description:
      'Your attacks are devastatingly precise. When you Strike a flat-footed creature, you treat the target\'s resistances as 10 lower against your attack. If you deal sneak attack damage, the target\'s immunities to precision damage don\'t apply.',
  },
  {
    id: 'counter-intuitive',
    name: 'Counter Intuitive',
    type: 'class',
    level: 18,
    classId: 'rogue',
    description:
      'You use your cunning to completely baffle your opponents. Whenever a creature fails a check to Sense Motive against you or your Deception check to Lie, that creature is flat-footed against you until the start of your next turn.',
  },
  {
    id: 'entangling-finesse',
    name: 'Entangling Finesse',
    type: 'class',
    level: 18,
    classId: 'rogue',
    description:
      'You\'ve learned to bind your enemies with finesse. When you deal sneak attack damage with a weapon that has the finesse trait, you can attempt to Grapple the target as a free action, using your attack roll result for the Athletics check.',
  },
  {
    id: 'felling-strike',
    name: 'Felling Strike',
    type: 'class',
    level: 18,
    classId: 'rogue',
    description:
      'Your attacks are powerful enough to bring a flying creature to the ground. When you Strike a flying creature that is flat-footed and deal sneak attack damage, the creature must succeed at a Reflex save against your class DC or fall to the ground and land prone.',
  },

  // ========================
  // Level 20 Rogue Class Feats
  // ========================
  {
    id: 'hidden-paragon',
    name: 'Hidden Paragon',
    type: 'class',
    level: 20,
    classId: 'rogue',
    description:
      'When you hide, you are truly impossible to find. While you are Hidden or Undetected, you gain the effects of the invisibility spell, becoming invisible even to special senses. If you take a hostile action, you become hidden rather than observed, and you can immediately attempt a Stealth check to become undetected.',
  },
  {
    id: 'impossible-sneak',
    name: 'Impossible Sneak',
    type: 'class',
    level: 20,
    classId: 'rogue',
    description:
      'You have mastered the art of stealth to an impossible degree. You can Hide and Sneak even without cover or concealment. You can Sneak at full Speed rather than half Speed.',
  },
  {
    id: 'perfect-sneak',
    name: 'Perfect Sneak',
    type: 'class',
    level: 20,
    classId: 'rogue',
    description:
      'You have perfected your ability to avoid notice. You are permanently quickened, and you can use the extra action each round only to Hide, Sneak, or Step. In addition, whenever you roll a failure or critical failure on a Stealth check, you get a success instead.',
  },
  {
    id: 'supreme-rogue',
    name: 'Supreme Rogue',
    type: 'class',
    level: 20,
    classId: 'rogue',
    description:
      'You are the supreme master of your craft. Your proficiency rank for your rogue class DC and for your key ability score increases to legendary. Your sneak attack damage increases by an additional 1d6.',
  },
]
