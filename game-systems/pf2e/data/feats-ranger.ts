import { Feat } from '../../../src/types'

export const rangerFeats: Feat[] = [
  // ========================
  // Level 1 Ranger Feats
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
  {
    id: 'crossbow-ace',
    name: 'Crossbow Ace',
    type: 'class',
    level: 1,
    classId: 'ranger',
    description:
      'You have a deep understanding of the crossbow. When you are wielding a crossbow and use Hunt Prey, you gain a +2 circumstance bonus to damage rolls with your crossbow against the hunted prey. If the crossbow is a simple crossbow, also increase its weapon damage die by one step. You gain these benefits only against your hunted prey.',
  },
  {
    id: 'twin-takedown',
    name: 'Twin Takedown',
    type: 'class',
    level: 1,
    classId: 'ranger',
    description:
      'You swiftly attack your hunted prey with both weapons. Make two Strikes against your hunted prey, one with each of the required weapons. If both hit the hunted prey, combine their damage for the purposes of resistances and weaknesses. Your multiple attack penalty applies to each Strike normally.',
    prerequisites: 'You are wielding two melee weapons, each in a different hand',
  },
  {
    id: 'gravity-weapon',
    name: 'Gravity Weapon',
    type: 'class',
    level: 1,
    classId: 'ranger',
    description:
      'You have learned to shift the weight of your weapon, channeling the force of gravity into your attacks. On your first Strike with a weapon that has the two-hand trait during your turn, you gain a bonus to damage equal to the number of weapon damage dice. If your weapon already has two-hand applied, the bonus is doubled on your first Strike.',
  },

  // ========================
  // Level 2 Ranger Feats
  // ========================
  {
    id: 'favored-terrain',
    name: 'Favored Terrain',
    type: 'class',
    level: 2,
    classId: 'ranger',
    description:
      'You have studied a specific terrain to overcome its challenges. Choose aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground as your favored terrain. When in that terrain, you can ignore difficult terrain caused by the environment, you gain a +2 circumstance bonus to Survival checks, and the GM may grant you other benefits.',
  },
  {
    id: 'hunters-aim',
    name: "Hunter's Aim",
    type: 'class',
    level: 2,
    classId: 'ranger',
    description:
      'When you focus your attention on aiming, you become more accurate. Make a ranged weapon Strike against your hunted prey. On this Strike, you gain a +2 circumstance bonus to the attack roll and ignore the penalty for your hunted prey being concealed from you.',
  },
  {
    id: 'quick-draw-ranger',
    name: 'Quick Draw',
    type: 'class',
    level: 2,
    classId: 'ranger',
    description:
      'You draw your weapon and attack with swift movements. You Interact to draw a weapon, then Strike with that weapon.',
  },
  {
    id: 'wild-empathy',
    name: 'Wild Empathy',
    type: 'class',
    level: 2,
    classId: 'ranger',
    description:
      'You have a connection to the creatures of the natural world that allows you to communicate with them on a rudimentary level. You can use Diplomacy to Make an Impression on animals and to make very simple Requests of them. In most cases, wild animals will give you time to make your case.',
  },
  {
    id: 'companions-cry',
    name: "Companion's Cry",
    type: 'class',
    level: 2,
    classId: 'ranger',
    description:
      'You can urge your animal companion to do its utmost. You can spend two actions to Command your animal companion, and your companion gets an additional action on its turn. Your companion must use one of those actions to Strike or use an activity that includes a Strike.',
    prerequisites: 'Animal Companion',
  },

  // ========================
  // Level 4 Ranger Feats
  // ========================
  {
    id: 'scouts-warning',
    name: "Scout's Warning",
    type: 'class',
    level: 4,
    classId: 'ranger',
    description:
      'You visually or audibly warn your allies of danger, granting them each a +1 circumstance bonus to their initiative rolls. Depending on whether you use gestures or call out, this action gains either the visual or the auditory trait.',
  },
  {
    id: 'snare-specialist',
    name: 'Snare Specialist',
    type: 'class',
    level: 4,
    classId: 'ranger',
    description:
      'You specialize in creating quick snares for use in combat. If you have the supplies, you can create a snare during combat using the Craft activity. You can create simple snares, and you gain the formulas for three common snares of your choice. Each time you gain a level, you gain the formula for a new common snare.',
    prerequisites: 'trained in Crafting',
  },
  {
    id: 'running-reload',
    name: 'Running Reload',
    type: 'class',
    level: 4,
    classId: 'ranger',
    description:
      'You can reload your weapon on the move. You Stride, Step, or Sneak, then Interact to reload.',
  },
  {
    id: 'mature-animal-companion-ranger',
    name: 'Mature Animal Companion',
    type: 'class',
    level: 4,
    classId: 'ranger',
    description:
      'Your animal companion grows up, becoming a mature animal companion. It becomes more independent and capable in a fight. Your animal companion increases its ability modifiers, gains additional hit points, and gains an additional skill increase.',
    prerequisites: 'Animal Companion',
  },
  {
    id: 'skirmish-strike',
    name: 'Skirmish Strike',
    type: 'class',
    level: 4,
    classId: 'ranger',
    description:
      'Your feet and weapon move in concert. Either Step and then Strike, or Strike and then Step.',
  },

  // ========================
  // Level 6 Ranger Feats
  // ========================
  {
    id: 'terrain-master',
    name: 'Terrain Master',
    type: 'class',
    level: 6,
    classId: 'ranger',
    description:
      'You adapt to your surroundings in any terrain. You gain a second favored terrain. In addition, your proficiency at moving through your favored terrains is unmatched, letting you ignore all difficult terrain in your favored terrains, not just environmental difficult terrain.',
    prerequisites: 'Favored Terrain',
  },
  {
    id: 'wardens-boon',
    name: "Warden's Boon",
    type: 'class',
    level: 6,
    classId: 'ranger',
    description:
      'By pointing out vulnerabilities, you grant the benefits of your Hunt Prey to an ally. The ally gains the benefits of Hunt Prey against your hunted prey until you Hunt Prey again or the encounter ends.',
  },
  {
    id: 'quick-snares',
    name: 'Quick Snares',
    type: 'class',
    level: 6,
    classId: 'ranger',
    description:
      'You can rig a snare in only moments. You can Craft snares that normally take 1 minute to Craft in 3 actions instead, as long as the snare is a level you could normally Craft.',
    prerequisites: 'Snare Specialist',
  },
  {
    id: 'ephemeral-tracking',
    name: 'Ephemeral Tracking',
    type: 'class',
    level: 6,
    classId: 'ranger',
    description:
      'You are able to track extradimensional and incorporeal creatures. You can Track creatures that have teleported or are incorporeal, noticing subtle signs such as temperature shifts and ethereal disturbances. You gain a +2 circumstance bonus to Survival checks to Track such creatures.',
  },
  {
    id: 'animal-feature',
    name: 'Animal Feature',
    type: 'class',
    level: 6,
    classId: 'ranger',
    description:
      'You have learned to temporarily take on the features of animals. You can focus for 10 minutes to take on a feature of an animal, gaining a climb Speed, swim Speed, or darkvision for 1 hour. The Speed you gain is equal to half your land Speed.',
  },

  // ========================
  // Level 8 Ranger Feats
  // ========================
  {
    id: 'blind-fight-ranger',
    name: 'Blind-Fight',
    type: 'class',
    level: 8,
    classId: 'ranger',
    description:
      'Your battle instincts make you more aware of concealed and invisible opponents. You do not need to succeed at a flat check to target concealed creatures. You are not off-guard to creatures that are hidden from you (unless you are off-guard to them for reasons other than the hidden condition), and you need only a successful DC 5 flat check to target a hidden creature.',
    prerequisites: 'master in Perception',
  },
  {
    id: 'wardens-step',
    name: "Warden's Step",
    type: 'class',
    level: 8,
    classId: 'ranger',
    description:
      'You can move across difficult terrain with ease and stealth. You ignore difficult terrain and greater difficult terrain caused by the environment. In addition, when you Sneak while in natural terrain, you can move at your full Speed.',
  },
  {
    id: 'disrupt-prey',
    name: 'Disrupt Prey',
    type: 'class',
    level: 8,
    classId: 'ranger',
    description:
      'If your hunted prey is within your reach, and it uses a manipulate action, makes a ranged attack, or leaves a square during a move action it is using, you can make a melee Strike against the prey. On a critical hit, you disrupt the triggering action.',
  },
  {
    id: 'incredible-companion-ranger',
    name: 'Incredible Companion',
    type: 'class',
    level: 8,
    classId: 'ranger',
    description:
      'Your animal companion continues to grow and develop. It becomes a nimble or savage animal companion (your choice), gaining additional abilities determined by the type of companion.',
    prerequisites: 'Mature Animal Companion',
  },
  {
    id: 'deadly-aim',
    name: 'Deadly Aim',
    type: 'class',
    level: 8,
    classId: 'ranger',
    description:
      'You aim for your prey\'s weak points, making your shot more damaging. Make a ranged Strike against your hunted prey. You take a -2 penalty to the attack roll, but if you hit, you deal additional damage equal to the number of weapon damage dice.',
  },

  // ========================
  // Level 10 Ranger Feats
  // ========================
  {
    id: 'stealthy-companion',
    name: 'Stealthy Companion',
    type: 'class',
    level: 10,
    classId: 'ranger',
    description:
      'You have trained your animal companion to be stealthy. Your animal companion gains the benefit of the Sneak action whenever it uses a move action while undetected or hidden by your hunted prey. It also gains a +2 circumstance bonus to Stealth checks.',
    prerequisites: 'Animal Companion',
  },
  {
    id: 'wardens-focus',
    name: "Warden's Focus",
    type: 'class',
    level: 10,
    classId: 'ranger',
    description:
      'Your focus on your hunted prey is intense and unyielding. You gain a focus pool with 1 Focus Point if you do not already have one. You gain the ranger focus spell associated with your hunter\'s edge. Precision rangers gain the Anticipated Assault spell; flurry rangers gain the Flurry\'s Edge spell; outwit rangers gain the Outwit\'s Advantage spell.',
  },
  {
    id: 'camouflage',
    name: 'Camouflage',
    type: 'class',
    level: 10,
    classId: 'ranger',
    description:
      'You have learned to blend in with your surroundings. As long as you are in natural terrain, you can Sneak even without cover or being concealed. You can also attempt to Hide without cover or being concealed, but you still need to end your turn with cover, concealment, or a similar way to avoid being seen.',
  },
  {
    id: 'penetrating-shot',
    name: 'Penetrating Shot',
    type: 'class',
    level: 10,
    classId: 'ranger',
    description:
      'You fire a powerful shot that pierces through multiple targets. Make a ranged Strike with a weapon that deals physical damage. The Strike travels in a straight line, potentially hitting multiple targets in a 60-foot line. Make a single attack roll and compare it to the AC of each creature in the line.',
  },
  {
    id: 'terrain-transposition',
    name: 'Terrain Transposition',
    type: 'class',
    level: 10,
    classId: 'ranger',
    description:
      'You can exploit your mastery of terrain to move swiftly through your favored environments. When you are in your favored terrain, you can Step into difficult terrain and can Step 10 feet instead of 5 feet.',
    prerequisites: 'Favored Terrain',
  },

  // ========================
  // Level 12 Ranger Feats
  // ========================
  {
    id: 'distracting-shot',
    name: 'Distracting Shot',
    type: 'class',
    level: 12,
    classId: 'ranger',
    description:
      'The precision of your shot distracts your prey and throws it off its guard. Make a ranged Strike against your hunted prey. If the Strike hits, the target is off-guard until the start of your next turn.',
  },
  {
    id: 'double-prey',
    name: 'Double Prey',
    type: 'class',
    level: 12,
    classId: 'ranger',
    description:
      'You can focus on two foes at once. When you use Hunt Prey, you can pick two creatures as your prey. If you use an ability that requires your hunted prey as a target, you can apply it to either of the two prey you are hunting.',
  },
  {
    id: 'greater-distracting-shot',
    name: 'Greater Distracting Shot',
    type: 'class',
    level: 12,
    classId: 'ranger',
    description:
      'Your shots are so distracting that they impair your prey\'s ability to respond. When you use Distracting Shot and the Strike hits, the target is also stunned 1 on a critical hit, and the off-guard condition lasts until the end of your next turn instead of the start.',
    prerequisites: 'Distracting Shot',
  },
  {
    id: 'lightning-snares',
    name: 'Lightning Snares',
    type: 'class',
    level: 12,
    classId: 'ranger',
    description:
      'You can set up snares with lightning speed. You can Craft snares that take 1 minute or less to Craft as a single action. You can also Craft snares that normally take 3 actions in a single action.',
    prerequisites: 'Quick Snares, Snare Specialist',
  },
  {
    id: 'side-by-side-ranger',
    name: 'Side by Side',
    type: 'class',
    level: 12,
    classId: 'ranger',
    description:
      'You and your animal companion fight in tandem. When you and your animal companion are adjacent to the same enemy, that enemy is off-guard to both of you, rather than just to the companion from flanking.',
    prerequisites: 'Animal Companion',
  },

  // ========================
  // Level 14 Ranger Feats
  // ========================
  {
    id: 'sense-the-unseen-ranger',
    name: 'Sense the Unseen',
    type: 'class',
    level: 14,
    classId: 'ranger',
    description:
      'When you Seek or use a Perception action, you can attempt to locate hidden or undetected creatures within 30 feet. If you succeed, the creature becomes observed to you, even if it was undetected. Even on a failure, the creature becomes hidden from you rather than undetected.',
  },
  {
    id: 'shared-prey',
    name: 'Shared Prey',
    type: 'class',
    level: 14,
    classId: 'ranger',
    description:
      'Hunting as a team is a favored tactic. When you Hunt Prey, you can grant your hunted prey benefits to all allies within 30 feet, not just one ally. All those allies gain the benefits of Hunt Prey against the target until you Hunt Prey again.',
    prerequisites: "Warden's Boon, Double Prey",
  },
  {
    id: 'specialized-companion-ranger',
    name: 'Specialized Companion',
    type: 'class',
    level: 14,
    classId: 'ranger',
    description:
      'Your animal companion has grown even more powerful. It becomes a specialized animal companion. You choose a specialization that gives your companion additional abilities.',
    prerequisites: 'Incredible Companion',
  },
  {
    id: 'targeting-shot',
    name: 'Targeting Shot',
    type: 'class',
    level: 14,
    classId: 'ranger',
    description:
      'You carefully target a vulnerable spot on your hunted prey, aiming for a specific body part. Make a ranged Strike against your hunted prey. If you hit, in addition to the normal damage, the target must attempt a Fortitude save against your class DC. On a failure, the target is slowed 1 until the end of its next turn.',
  },
  {
    id: 'wardens-guidance',
    name: "Warden's Guidance",
    type: 'class',
    level: 14,
    classId: 'ranger',
    description:
      'You use your mastery of the wilderness to guide your companions through danger. When you and your allies travel through natural terrain, you grant each ally a +2 circumstance bonus to Survival checks, and your group can move at full Speed while using the Avoid Notice exploration activity.',
  },

  // ========================
  // Level 16 Ranger Feats
  // ========================
  {
    id: 'master-monster-hunter',
    name: 'Master Monster Hunter',
    type: 'class',
    level: 16,
    classId: 'ranger',
    description:
      'You have a nearly encyclopedic knowledge of all creatures. When you successfully identify your hunted prey with Recall Knowledge, you gain a +2 circumstance bonus to your next attack roll against it, a +2 circumstance bonus to your next saving throw against it, and a +2 circumstance bonus to AC against its next attack. On a critical success, these bonuses are +3 instead.',
    prerequisites: 'Monster Hunter',
  },
  {
    id: 'legendary-monster-hunter',
    name: 'Legendary Monster Hunter',
    type: 'class',
    level: 16,
    classId: 'ranger',
    description:
      'Your knowledge of monsters is beyond compare. You automatically succeed on Recall Knowledge checks against your hunted prey, and the GM tells you the creature\'s highest weakness if it has one. You also increase the circumstance bonus from Master Monster Hunter by an additional +1.',
    prerequisites: 'Master Monster Hunter',
  },
  {
    id: 'ubiquitous-snares',
    name: 'Ubiquitous Snares',
    type: 'class',
    level: 16,
    classId: 'ranger',
    description:
      'You can set up snares nearly anywhere. You can prepare snares ahead of time and deploy them instantly. During your daily preparations, you can prepare a number of snares equal to your ranger level. These snares take 1 action to deploy rather than the normal time, and do not require Craft checks.',
    prerequisites: 'Lightning Snares',
  },
  {
    id: 'impossible-volley',
    name: 'Impossible Volley',
    type: 'class',
    level: 16,
    classId: 'ranger',
    description:
      'You fire an impossible volley of arrows or bolts. Make a Strike with a ranged weapon against each enemy within a 10-foot-radius burst centered at a point within your first range increment. Roll the damage only once and apply it to each creature you hit. Each attack counts toward your multiple attack penalty, but do not increase your penalty until you have made all the attacks.',
  },

  // ========================
  // Level 18 Ranger Feats
  // ========================
  {
    id: 'shadow-hunter',
    name: 'Shadow Hunter',
    type: 'class',
    level: 18,
    classId: 'ranger',
    description:
      'You blend into the darkness, becoming nearly impossible to detect. While in dim light or darkness, you are always considered concealed from your hunted prey. In addition, when you successfully Strike your hunted prey while hidden from it, you remain hidden from it rather than becoming observed.',
  },
  {
    id: 'impossible-flurry',
    name: 'Impossible Flurry',
    type: 'class',
    level: 18,
    classId: 'ranger',
    description:
      'You overwhelm your prey with an impossible barrage of attacks. Make three melee Strikes against your hunted prey, each using your current multiple attack penalty. If you are wielding two weapons, these Strikes can be made with either or both weapons. Do not increase your multiple attack penalty until after all three attacks.',
  },
  {
    id: 'perfect-shot',
    name: 'Perfect Shot',
    type: 'class',
    level: 18,
    classId: 'ranger',
    description:
      'You wait for the perfect moment and then make a single devastating shot. Make a ranged Strike against your hunted prey. If you hit, the Strike deals maximum damage. If this Strike kills the target, each creature within 30 feet of the target that witnessed the shot becomes frightened 1.',
  },
  {
    id: 'swift-tracker',
    name: 'Swift Tracker',
    type: 'class',
    level: 18,
    classId: 'ranger',
    description:
      'Your pursuit is relentless. You can Track while moving at full Speed. If you are a master in Survival, you do not need to attempt a new Survival check every hour when Tracking. If you are legendary in Survival, you can Track creatures that have been dead or dormant for any amount of time.',
  },

  // ========================
  // Level 20 Ranger Feats
  // ========================
  {
    id: 'ultimate-skirmisher',
    name: 'Ultimate Skirmisher',
    type: 'class',
    level: 20,
    classId: 'ranger',
    description:
      'You are the consummate skirmisher, moving and attacking with unparalleled grace. You are permanently quickened. You can use your extra action to Stride, Step, Sneak, or Interact to reload. You also gain a +10-foot status bonus to your Speed.',
  },
  {
    id: 'legendary-shot',
    name: 'Legendary Shot',
    type: 'class',
    level: 20,
    classId: 'ranger',
    description:
      'You can make shots that others would consider impossible. You ignore all range increment penalties with ranged weapons you are legendary with. In addition, your ranged Strikes against your hunted prey ignore concealment and the hidden condition.',
    prerequisites: 'legendary in at least one ranged weapon',
  },
  {
    id: 'to-the-ends-of-the-earth',
    name: 'To the Ends of the Earth',
    type: 'class',
    level: 20,
    classId: 'ranger',
    description:
      'Your pursuit of your prey knows no limits. You can sense the approximate direction and distance of your hunted prey at any range, even if it is on another plane. Nothing short of a wish spell or similar magic can hide your prey from you. You also gain a +4 status bonus to Survival checks to Track your hunted prey.',
  },
  {
    id: 'triple-threat',
    name: 'Triple Threat',
    type: 'class',
    level: 20,
    classId: 'ranger',
    description:
      'You can hunt three prey at once. When you use Hunt Prey, you can designate up to three creatures as your hunted prey instead of one (or two with Double Prey). Any feat or ability that refers to your hunted prey applies to all three.',
    prerequisites: 'Double Prey',
  },
  {
    id: 'masterful-companion',
    name: 'Masterful Companion',
    type: 'class',
    level: 20,
    classId: 'ranger',
    description:
      'Your animal companion has reached the pinnacle of its potential. Your animal companion can act on its own, taking 2 actions each round without you needing to Command it. It can still take a third action if you Command it. It also gains a +2 status bonus to all saving throws.',
    prerequisites: 'Specialized Companion',
  },
]
