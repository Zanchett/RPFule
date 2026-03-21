import { Feat } from '../../../src/types'

export const skillFeats: Feat[] = [
  // ========================
  // Universal / Multi-Skill Feats
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
      'You are a fount of information, but not all of it is reliable. When you fail (but do not critically fail) a Recall Knowledge check using any skill, you learn a bit of true knowledge and a bit of erroneous knowledge, but you do not know which is which.',
    requiredProficiency: 'trained',
  },
  {
    id: 'skill-training',
    name: 'Skill Training',
    type: 'skill',
    level: 1,
    description:
      'You become trained in a skill of your choice.',
  },
  {
    id: 'recognize-spell',
    name: 'Recognize Spell',
    type: 'skill',
    level: 1,
    description:
      'If you are trained in the appropriate skill for the spell\'s tradition and you can see the manifestations of a spell, you can use a reaction to attempt to identify it. You gain a +1 circumstance bonus to identify a spell if it is on your spell list. The relevant skills are Arcana for arcane, Nature for primal, Occultism for occult, and Religion for divine.',
    requiredProficiency: 'trained',
    prerequisites: 'trained in Arcana, Nature, Occultism, or Religion',
  },
  {
    id: 'automatic-knowledge',
    name: 'Automatic Knowledge',
    type: 'skill',
    level: 2,
    description:
      'You know basic facts off the top of your head. You can use Recall Knowledge as a free action once per round. To do so, you must be an expert in the relevant skill. If you succeed at the check, you gain the information as normal. If you fail, you know that you don\'t know the answer but don\'t gain erroneous information.',
    requiredProficiency: 'expert',
  },
  {
    id: 'multilingual',
    name: 'Multilingual',
    type: 'skill',
    level: 1,
    description:
      'You easily pick up new languages. You learn two new languages, chosen from common and uncommon languages available to you. You can select this feat multiple times, choosing different languages each time.',
    requiredSkill: 'Society',
    requiredProficiency: 'trained',
  },

  // ========================
  // Acrobatics
  // ========================
  {
    id: 'cat-fall',
    name: 'Cat Fall',
    type: 'skill',
    level: 1,
    description:
      'Your catlike reflexes allow you to treat falls as shorter than they are. Treat falls as 10 feet shorter. If you are an expert in Acrobatics, treat falls as 25 feet shorter. If you are a master, treat them as 50 feet shorter. If legendary, you always land on your feet and take no damage from falls.',
    requiredSkill: 'Acrobatics',
    requiredProficiency: 'trained',
  },
  {
    id: 'steady-balance',
    name: 'Steady Balance',
    type: 'skill',
    level: 1,
    description:
      'You can keep your balance easily, even in adverse conditions. Whenever you roll a success on an Acrobatics check to Balance, you get a critical success instead. You are not flat-footed while Balancing on narrow surfaces and uneven ground. When you roll a critical failure on such a check, you get a failure instead.',
    requiredSkill: 'Acrobatics',
    requiredProficiency: 'trained',
  },
  {
    id: 'nimble-crawl',
    name: 'Nimble Crawl',
    type: 'skill',
    level: 2,
    description:
      'You can crawl incredibly swiftly. You can Crawl at half your Speed rather than 5 feet. If you are a master in Acrobatics, you can Crawl at full Speed, and if you are legendary, you are not flat-footed while prone.',
    requiredSkill: 'Acrobatics',
    requiredProficiency: 'expert',
  },
  {
    id: 'kip-up',
    name: 'Kip Up',
    type: 'skill',
    level: 7,
    description:
      'You stand up. This movement doesn\'t trigger reactions. You can use this action to stand from prone as a free action at the start of each of your turns.',
    requiredSkill: 'Acrobatics',
    requiredProficiency: 'master',
  },
  {
    id: 'aerobatics-mastery',
    name: 'Aerobatics Mastery',
    type: 'skill',
    level: 15,
    description:
      'You can perform spectacular aerial feats. You can use Acrobatics to Maneuver in Flight, and you gain a +2 circumstance bonus to Maneuver in Flight checks. If you are legendary in Acrobatics, you can fly for short bursts using sheer acrobatic skill even without a fly Speed, traveling up to half your land Speed horizontally and 5 feet vertically as part of a Stride.',
    requiredSkill: 'Acrobatics',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Arcana
  // ========================
  {
    id: 'arcane-sense',
    name: 'Arcane Sense',
    type: 'skill',
    level: 1,
    description:
      'Your study of magic allows you to instinctively sense its presence. You can cast 1st-rank detect magic at will as an arcane innate spell. If you are a master in Arcana, the spell is heightened to 3rd rank. If legendary, it is heightened to 4th rank.',
    requiredSkill: 'Arcana',
    requiredProficiency: 'trained',
  },
  {
    id: 'quick-recognition',
    name: 'Quick Recognition',
    type: 'skill',
    level: 7,
    description:
      'You Recognize Spells swiftly. You can Recognize a Spell as a free action, rather than using a reaction. You must still meet the skill requirements to Recognize Spells.',
    requiredSkill: 'Arcana',
    requiredProficiency: 'master',
    prerequisites: 'Recognize Spell, master in Arcana, Nature, Occultism, or Religion',
  },
  {
    id: 'unified-theory',
    name: 'Unified Theory',
    type: 'skill',
    level: 15,
    description:
      'You\'ve developed a unified magical theory that applies to all traditions. You can use Arcana in place of Nature, Occultism, or Religion for any check, including checks to Recall Knowledge, Identify Magic, Learn a Spell, or Recognize a Spell.',
    requiredSkill: 'Arcana',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Athletics
  // ========================
  {
    id: 'combat-climber',
    name: 'Combat Climber',
    type: 'skill',
    level: 1,
    description:
      'Your techniques allow you to fight while climbing. You are not flat-footed while Climbing and can Climb with a hand occupied. You must still use another hand and both legs to Climb.',
    requiredSkill: 'Athletics',
    requiredProficiency: 'trained',
  },
  {
    id: 'hefty-hauler',
    name: 'Hefty Hauler',
    type: 'skill',
    level: 1,
    description:
      'You can carry more than most. Increase your maximum and encumbered Bulk limits by 2.',
    requiredSkill: 'Athletics',
    requiredProficiency: 'trained',
  },
  {
    id: 'quick-jump',
    name: 'Quick Jump',
    type: 'skill',
    level: 1,
    description:
      'You can use High Jump and Long Jump as a single action instead of 2 actions. If you do, you do not perform the initial Stride (you jump from where you are standing).',
    requiredSkill: 'Athletics',
    requiredProficiency: 'trained',
  },
  {
    id: 'titan-wrestler',
    name: 'Titan Wrestler',
    type: 'skill',
    level: 1,
    description:
      'You can attempt to Disarm, Grapple, Shove, or Trip creatures up to two sizes larger than you, or up to three sizes larger if you are a master in Athletics, or up to four sizes if legendary.',
    requiredSkill: 'Athletics',
    requiredProficiency: 'trained',
  },
  {
    id: 'powerful-leap',
    name: 'Powerful Leap',
    type: 'skill',
    level: 2,
    description:
      'When you Leap, you can jump 5 feet up with a vertical Leap, and you increase the distance you can jump horizontally by 5 feet.',
    requiredSkill: 'Athletics',
    requiredProficiency: 'expert',
  },
  {
    id: 'rapid-mantel',
    name: 'Rapid Mantel',
    type: 'skill',
    level: 2,
    description:
      'You can pull yourself onto ledges quickly. When you successfully Grab an Edge, you can pull yourself up and onto the surface, standing on the edge rather than hanging from it. You can also Climb at half your Speed.',
    requiredSkill: 'Athletics',
    requiredProficiency: 'expert',
  },
  {
    id: 'quick-swim',
    name: 'Quick Swim',
    type: 'skill',
    level: 7,
    description:
      'You swim much faster than most. You gain a swim Speed equal to half your land Speed (minimum 10 feet). If you already have a swim Speed, increase it by 10 feet.',
    requiredSkill: 'Athletics',
    requiredProficiency: 'master',
  },
  {
    id: 'wall-jump',
    name: 'Wall Jump',
    type: 'skill',
    level: 7,
    description:
      'You can use your momentum to jump off walls. If you are adjacent to a wall at the end of a jump (whether from a Leap, High Jump, Long Jump, or similar ability), you do not fall as long as your next action is another jump. Furthermore, since your previous jump gives you momentum, you can use Leap as a single action to make a Long Jump.',
    requiredSkill: 'Athletics',
    requiredProficiency: 'master',
  },
  {
    id: 'cloud-jump',
    name: 'Cloud Jump',
    type: 'skill',
    level: 15,
    description:
      'Your unparalleled athletic skill allows you to jump impossible distances. Triple the distance you Long Jump (so you could jump 60 feet on a successful DC 20 check). When you High Jump, use the calculation for a Long Jump but don\'t triple the distance. You can jump a distance greater than your Speed with a single Leap.',
    requiredSkill: 'Athletics',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Crafting
  // ========================
  {
    id: 'alchemical-crafting',
    name: 'Alchemical Crafting',
    type: 'skill',
    level: 1,
    description:
      'You can use the Craft activity to create alchemical items. When you select this feat, you immediately add the formulas for four common 1st-level alchemical items to your formula book.',
    requiredSkill: 'Crafting',
    requiredProficiency: 'trained',
  },
  {
    id: 'quick-repair',
    name: 'Quick Repair',
    type: 'skill',
    level: 1,
    description:
      'You take 1 minute to Repair an item instead of 10 minutes. If you are a master in Crafting, it takes 3 actions. If legendary, it takes 1 action.',
    requiredSkill: 'Crafting',
    requiredProficiency: 'trained',
  },
  {
    id: 'snare-crafting',
    name: 'Snare Crafting',
    type: 'skill',
    level: 1,
    description:
      'You can use the Craft activity to create snares. When you select this feat, you add the formulas for four common snares to your formula book.',
    requiredSkill: 'Crafting',
    requiredProficiency: 'trained',
  },
  {
    id: 'specialty-crafting',
    name: 'Specialty Crafting',
    type: 'skill',
    level: 1,
    description:
      'Your training focused on Crafting one particular kind of item. Select one of the specialties listed below; you gain a +1 circumstance bonus to Crafting checks to Craft items of that type. If you are a master in Crafting, this bonus increases to +2. Specialties include: alchemy, artistry, bookmaking, glassmaking, leatherworking, pottery, shipbuilding, stonemasonry, tailoring, weaving, and woodworking.',
    requiredSkill: 'Crafting',
    requiredProficiency: 'trained',
  },
  {
    id: 'magical-crafting',
    name: 'Magical Crafting',
    type: 'skill',
    level: 2,
    description:
      'You can Craft magic items, though some have other requirements. When you select this feat, you gain formulas for four common magic items of 2nd level or lower.',
    requiredSkill: 'Crafting',
    requiredProficiency: 'expert',
  },
  {
    id: 'impeccable-crafting',
    name: 'Impeccable Crafting',
    type: 'skill',
    level: 7,
    description:
      'You craft flawless creations with great efficiency. Whenever you successfully Craft an item, you gain a quantity of extra materials worth 10% of the item\'s price. If you are legendary in Crafting, you instead gain extra materials worth 20% of the item\'s price.',
    requiredSkill: 'Crafting',
    requiredProficiency: 'master',
    prerequisites: 'Specialty Crafting',
  },
  {
    id: 'inventor',
    name: 'Inventor',
    type: 'skill',
    level: 7,
    description:
      'You are a genius at Crafting, easily able to determine how to create items that you have never seen before. You can use the Craft activity to create any formula whose level is equal to or less than your level - 2, even if you do not have that formula.',
    requiredSkill: 'Crafting',
    requiredProficiency: 'master',
  },
  {
    id: 'craft-anything',
    name: 'Craft Anything',
    type: 'skill',
    level: 15,
    description:
      'You can find ways to craft just about anything, despite restrictions. As long as you have the appropriate Crafting skill feat (such as Alchemical Crafting for alchemical items and Magical Crafting for magic items), you ignore other secondary requirements, such as being of a specific ancestry or class. You must still meet level and proficiency requirements.',
    requiredSkill: 'Crafting',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Deception
  // ========================
  {
    id: 'charming-liar',
    name: 'Charming Liar',
    type: 'skill',
    level: 1,
    description:
      'Your charm allows you to win over those you lie to. When you get a critical success using the Lie action, the target\'s attitude toward you improves by one step, as though you had succeeded at using Diplomacy to Make an Impression. This works only once per conversation, and if you later critically fail at a Lie against the target, their attitude shifts two steps worse instead of one.',
    requiredSkill: 'Deception',
    requiredProficiency: 'trained',
  },
  {
    id: 'lengthy-diversion',
    name: 'Lengthy Diversion',
    type: 'skill',
    level: 1,
    description:
      'When you Create a Diversion, you can sustain it for a longer period of time. You can remain hidden after you Create a Diversion, as long as you remain in the same location and do nothing else except to maintain the diversion. As soon as you move, attack, cast a spell, or otherwise do something else, you become observed.',
    requiredSkill: 'Deception',
    requiredProficiency: 'trained',
  },
  {
    id: 'lie-to-me',
    name: 'Lie to Me',
    type: 'skill',
    level: 1,
    description:
      'You can use Deception instead of Perception to Sense Motive. When you determine a creature is lying to you, you also learn the creature\'s true intention if the creature is not an expert liar.',
    requiredSkill: 'Deception',
    requiredProficiency: 'trained',
  },
  {
    id: 'confabulator',
    name: 'Confabulator',
    type: 'skill',
    level: 2,
    description:
      'Even when caught in falsehoods, you can create convincing cover stories. When caught in a lie, you can attempt a new Deception check instead of the usual consequences. You take a -4 circumstance penalty to this check. On a success, the target does not realize you were lying, though they might not believe your new story either.',
    requiredSkill: 'Deception',
    requiredProficiency: 'expert',
  },
  {
    id: 'quick-disguise',
    name: 'Quick Disguise',
    type: 'skill',
    level: 2,
    description:
      'You can set up a disguise in half the usual time (5 minutes for a simple disguise, 15 minutes for a more elaborate one). If you are a master, it takes one-tenth the time (1 minute for a simple disguise, 3 minutes for complex). If legendary, you can create a simple disguise as a 3-action activity.',
    requiredSkill: 'Deception',
    requiredProficiency: 'expert',
  },
  {
    id: 'slippery-secrets',
    name: 'Slippery Secrets',
    type: 'skill',
    level: 7,
    description:
      'You elude and evade those who attempt to read your thoughts or learn your secrets. When a spell or ability tries to read your mind, detect whether you are lying, or determine your alignment, you can attempt a Deception check against the effect\'s DC. On a success, the effect reveals nothing.',
    requiredSkill: 'Deception',
    requiredProficiency: 'master',
  },

  // ========================
  // Diplomacy
  // ========================
  {
    id: 'bon-mot',
    name: 'Bon Mot',
    type: 'skill',
    level: 1,
    description:
      'You launch a witty quip at a foe, distracting them. Choose a foe within 30 feet and roll a Diplomacy check against the target\'s Will DC. On a success, the target takes a -2 status penalty to Perception and Will saves for 1 minute. On a critical success, the penalty is -3. The target is then temporarily immune to your Bon Mot for 1 minute.',
    requiredSkill: 'Diplomacy',
    requiredProficiency: 'trained',
  },
  {
    id: 'group-impression',
    name: 'Group Impression',
    type: 'skill',
    level: 1,
    description:
      'When you Make an Impression, you can compare your Diplomacy check result to the Will DCs of two targets instead of one. It\'s possible to get a different degree of success for each target. The number of targets increases to four if you are an expert, 10 if master, and 25 if legendary.',
    requiredSkill: 'Diplomacy',
    requiredProficiency: 'trained',
  },
  {
    id: 'hobnobber',
    name: 'Hobnobber',
    type: 'skill',
    level: 1,
    description:
      'You are skilled at learning information through conversation. You can Gather Information in half the usual time. If you are a master in Diplomacy and you Gather Information at the normal speed, when you get a failure or critical failure, you get a success instead. There is still no guarantee the information is correct.',
    requiredSkill: 'Diplomacy',
    requiredProficiency: 'trained',
  },
  {
    id: 'glad-hand',
    name: 'Glad-Hand',
    type: 'skill',
    level: 2,
    description:
      'First impressions are your strong suit. When you meet someone in a casual or social situation, you can immediately attempt a Diplomacy check to Make an Impression on that creature rather than needing to converse for 1 minute. You take a -5 penalty to the check. If you are a master in Diplomacy, you don\'t take the penalty.',
    requiredSkill: 'Diplomacy',
    requiredProficiency: 'expert',
  },
  {
    id: 'shameless-request',
    name: 'Shameless Request',
    type: 'skill',
    level: 7,
    description:
      'You can make the most outrageous Requests of others without shame. You take no circumstance penalty for making Requests that are outrageous or impossible, though you still can\'t force a creature to comply. You can also retry a Request that was previously refused, though you take a -2 circumstance penalty to the new check.',
    requiredSkill: 'Diplomacy',
    requiredProficiency: 'master',
  },
  {
    id: 'legendary-negotiation',
    name: 'Legendary Negotiation',
    type: 'skill',
    level: 15,
    description:
      'You can negotiate incredibly quickly in appearance. You can attempt to Make an Impression and then make a Request as a 3-action activity. You take a -5 penalty to your Diplomacy check. If you succeed at both checks, you can also negate a potentially hostile encounter with creatures, including intelligent undead and creatures normally unable to communicate, as long as they are not mindless.',
    requiredSkill: 'Diplomacy',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Intimidation
  // ========================
  {
    id: 'group-coercion',
    name: 'Group Coercion',
    type: 'skill',
    level: 1,
    description:
      'When you Coerce, you can compare your Intimidation check result to the Will DCs of two targets instead of one. It\'s possible to get a different degree of success for each target. The number of targets increases to four if you are an expert, 10 if master, and 25 if legendary.',
    requiredSkill: 'Intimidation',
    requiredProficiency: 'trained',
  },
  {
    id: 'intimidating-glare',
    name: 'Intimidating Glare',
    type: 'skill',
    level: 1,
    description:
      'You can Demoralize with a mere glare. When you do, Demoralize loses the auditory trait and gains the visual trait, and you don\'t take a penalty if the creature doesn\'t understand your language.',
    requiredSkill: 'Intimidation',
    requiredProficiency: 'trained',
  },
  {
    id: 'quick-coercion',
    name: 'Quick Coercion',
    type: 'skill',
    level: 2,
    description:
      'You can bully others with incredible speed. You can Coerce a creature after 1 round of conversation instead of 1 minute. You still can\'t Coerce a creature in the middle of combat or a similarly tense situation.',
    requiredSkill: 'Intimidation',
    requiredProficiency: 'expert',
  },
  {
    id: 'battlecry',
    name: 'Battlecry',
    type: 'skill',
    level: 7,
    description:
      'You let out a mighty shout at the start of combat, rallying your allies and intimidating your foes. When you roll initiative, you can yell a battlecry. If you do, you attempt to Demoralize a single creature you can see as a free action. If you are a master in Intimidation, you can Demoralize all enemies within 60 feet instead.',
    requiredSkill: 'Intimidation',
    requiredProficiency: 'master',
  },
  {
    id: 'terrified-retreat',
    name: 'Terrified Retreat',
    type: 'skill',
    level: 7,
    description:
      'When you critically succeed at the Demoralize action, the target is fleeing for 1 round in addition to being frightened.',
    requiredSkill: 'Intimidation',
    requiredProficiency: 'master',
  },
  {
    id: 'scare-to-death',
    name: 'Scare to Death',
    type: 'skill',
    level: 15,
    description:
      'You can frighten foes so much they might die. You can spend 1 action to attempt an Intimidation check against a living creature\'s Will DC. On a critical success, the target must succeed at a Fortitude save or die (this is a fear and emotion effect). On a success, the target is frightened 2 and is fleeing for 1 round. On a failure, the target is frightened 1. The target is then temporarily immune for 1 minute.',
    requiredSkill: 'Intimidation',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Lore
  // ========================
  {
    id: 'additional-lore',
    name: 'Additional Lore',
    type: 'skill',
    level: 1,
    description:
      'Your knowledge has expanded to encompass a new field. Choose an additional Lore skill subcategory. You become trained in it. At 3rd, 7th, and 15th levels, you gain an additional skill increase you can apply only to this Lore.',
    requiredSkill: 'Lore',
    requiredProficiency: 'trained',
  },
  {
    id: 'experienced-professional',
    name: 'Experienced Professional',
    type: 'skill',
    level: 1,
    description:
      'You carefully safeguard your professional endeavors. When you use Lore to Earn Income, if you roll a critical failure, you instead get a failure. If you are an expert in Lore, your earned income is one level higher than normal.',
    requiredSkill: 'Lore',
    requiredProficiency: 'trained',
  },
  {
    id: 'unmistakable-lore',
    name: 'Unmistakable Lore',
    type: 'skill',
    level: 2,
    description:
      'You never get the wrong answer to a question you know. When you Recall Knowledge using any Lore skill and roll a critical failure, you get a failure instead. When you Recall Knowledge using a Lore skill and get a failure, your next attempt to Recall Knowledge with that Lore gains a +2 circumstance bonus.',
    requiredSkill: 'Lore',
    requiredProficiency: 'expert',
  },
  {
    id: 'legendary-professional',
    name: 'Legendary Professional',
    type: 'skill',
    level: 15,
    description:
      'Your fame has spread throughout the lands. You can use Lore to Earn Income at a task level equal to your character level, even if your proficiency is lower than the level would suggest. When doing so, you also earn double the normal amount of income.',
    requiredSkill: 'Lore',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Medicine
  // ========================
  {
    id: 'battle-medicine',
    name: 'Battle Medicine',
    type: 'skill',
    level: 1,
    description:
      'You can patch up wounds, even in combat. Attempt a Medicine check with the same DC as Treat Wounds and restore the corresponding amount of Hit Points; this does not remove the wounded condition. As with Treat Wounds, you can attempt checks against higher DCs if you have the minimum proficiency rank. The target is then temporarily immune to your Battle Medicine for 1 day.',
    requiredSkill: 'Medicine',
    requiredProficiency: 'trained',
  },
  {
    id: 'continual-recovery',
    name: 'Continual Recovery',
    type: 'skill',
    level: 2,
    description:
      'You zealously monitor a patient\'s progress to administer ongoing care. When you Treat Wounds, your patient becomes immune to Treat Wounds for only 10 minutes instead of 1 hour. This applies only to your Treat Wounds, not those of other healers.',
    requiredSkill: 'Medicine',
    requiredProficiency: 'expert',
  },
  {
    id: 'robust-recovery',
    name: 'Robust Recovery',
    type: 'skill',
    level: 2,
    description:
      'You learned folk medicine to help your patients recover faster. When you Treat a Disease or a Poison, or someone else uses your Medicine to do so, increase the circumstance bonus granted on a success to +4, and if the result of the patient\'s saving throw is a success, the patient gets a critical success.',
    requiredSkill: 'Medicine',
    requiredProficiency: 'expert',
  },
  {
    id: 'ward-medic',
    name: 'Ward Medic',
    type: 'skill',
    level: 2,
    description:
      'You have the medical training to treat many patients at once. When you use Treat Wounds or Treat Disease, you can treat up to two creatures at once. If you are a master in Medicine, you can treat up to four at once, and if legendary, you can treat up to eight.',
    requiredSkill: 'Medicine',
    requiredProficiency: 'expert',
  },
  {
    id: 'legendary-medic',
    name: 'Legendary Medic',
    type: 'skill',
    level: 15,
    description:
      'You have the ability to remove conditions the living normally struggle to overcome. Once per day for each target, you can spend 1 hour treating a willing living creature to remove a disease or the blinded, deafened, drained, or enfeebled condition. This requires a Medicine check against a DC of 40 or the DC of the disease, whichever is higher.',
    requiredSkill: 'Medicine',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Nature
  // ========================
  {
    id: 'natural-medicine',
    name: 'Natural Medicine',
    type: 'skill',
    level: 1,
    description:
      'You can apply natural cures to heal your allies. You can use Nature instead of Medicine to Treat Wounds. If you are in the wilderness, you might have easier access to fresh ingredients, allowing you to gain a +2 circumstance bonus to your check to Treat Wounds.',
    requiredSkill: 'Nature',
    requiredProficiency: 'trained',
  },
  {
    id: 'train-animal',
    name: 'Train Animal',
    type: 'skill',
    level: 1,
    description:
      'You spend time teaching an animal to do certain things. You can use the Train Animal activity to teach an animal tricks. A trained animal can learn a maximum number of tricks equal to its Intelligence modifier (minimum 1). You can spend a week of downtime to teach the animal a new trick.',
    requiredSkill: 'Nature',
    requiredProficiency: 'trained',
  },
  {
    id: 'bonded-animal',
    name: 'Bonded Animal',
    type: 'skill',
    level: 2,
    description:
      'You forge a deep bond with an animal. You can spend 7 days of downtime regularly interacting with a normal animal (not a companion or a special creature) that is friendly or helpful to you. After this, the animal is bonded to you. You can have one bonded animal at a time. Your bonded animal allows you to use Nature to Make an Impression on it and to make very simple Requests of it.',
    requiredSkill: 'Nature',
    requiredProficiency: 'expert',
  },

  // ========================
  // Occultism
  // ========================
  {
    id: 'oddity-identification',
    name: 'Oddity Identification',
    type: 'skill',
    level: 1,
    description:
      'You have a sense for strange occurrences. You gain a +2 circumstance bonus to Occultism checks to Recall Knowledge about aberrations, curses, and haunts.',
    requiredSkill: 'Occultism',
    requiredProficiency: 'trained',
  },
  {
    id: 'bizarre-magic',
    name: 'Bizarre Magic',
    type: 'skill',
    level: 7,
    description:
      'You can create magical effects that are difficult to identify. Whenever a spell or magical effect you create would be identified with Identify Magic or Recognize Spell, the DC of the check is increased by 5.',
    requiredSkill: 'Occultism',
    requiredProficiency: 'master',
  },

  // ========================
  // Performance
  // ========================
  {
    id: 'fascinating-performance',
    name: 'Fascinating Performance',
    type: 'skill',
    level: 1,
    description:
      'When you Perform, compare your result to the Will DC of one observer. If you succeed, the target is fascinated by you for 1 round. If the observer is in a situation that demands its attention, such as combat, you must critically succeed to fascinate it. The target is then temporarily immune for 1 hour.',
    requiredSkill: 'Performance',
    requiredProficiency: 'trained',
  },
  {
    id: 'impressive-performance',
    name: 'Impressive Performance',
    type: 'skill',
    level: 1,
    description:
      'Your performances inspire admiration and awe. You can use Performance instead of Diplomacy to Make an Impression.',
    requiredSkill: 'Performance',
    requiredProficiency: 'trained',
  },
  {
    id: 'virtuosic-performer',
    name: 'Virtuosic Performer',
    type: 'skill',
    level: 1,
    description:
      'You have exceptional talent with one type of performance. Choose one type of performance: acting, comedy, dance, keyboards, oratory, percussion, singing, strings, or winds. You gain a +1 circumstance bonus when making a certain type of performance. If you are a master in Performance, this bonus increases to +2.',
    requiredSkill: 'Performance',
    requiredProficiency: 'trained',
  },
  {
    id: 'legendary-performer',
    name: 'Legendary Performer',
    type: 'skill',
    level: 15,
    description:
      'Your fame has spread throughout the lands. You can use Performance to Make an Impression on a crowd of up to 100 people, and you are renowned enough that people may have heard of your reputation before meeting you, giving you a +1 circumstance bonus to Make an Impression against those who have heard of you. You can Earn Income using Performance at a task level up to your level.',
    requiredSkill: 'Performance',
    requiredProficiency: 'legendary',
    prerequisites: 'Virtuosic Performer',
  },

  // ========================
  // Religion
  // ========================
  {
    id: 'student-of-the-canon',
    name: 'Student of the Canon',
    type: 'skill',
    level: 1,
    description:
      'You researched your deity extensively. You have a +1 circumstance bonus to Decipher Writing of a religious nature and to attempts to Recall Knowledge about the tenets and practices of your faith. If you roll a critical failure at a Religion check to Decipher Writing or to Recall Knowledge about your faith, you get a failure instead.',
    requiredSkill: 'Religion',
    requiredProficiency: 'trained',
  },
  {
    id: 'divine-guidance',
    name: 'Divine Guidance',
    type: 'skill',
    level: 15,
    description:
      'You are so immersed in divine scripture that you find meaning and guidance in your faith constantly. When you Recall Knowledge about a topic related to your deity\'s portfolio, you use a special free-action version of Recall Knowledge. You can do this once per hour. If you succeed, you also gain a +1 status bonus to one saving throw or skill check you make within 1 minute related to the knowledge.',
    requiredSkill: 'Religion',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Society
  // ========================
  {
    id: 'courtly-graces',
    name: 'Courtly Graces',
    type: 'skill',
    level: 1,
    description:
      'You were raised among the nobility or have learned proper etiquette and bearing. You can use Society to Make an Impression on a noble, as well as make the appropriate behavioral adjustments to avoid committing a social faux pas. If you are not a noble yourself, you take a -2 circumstance penalty to these checks.',
    requiredSkill: 'Society',
    requiredProficiency: 'trained',
  },
  {
    id: 'read-lips',
    name: 'Read Lips',
    type: 'skill',
    level: 1,
    description:
      'You can read lips of others nearby, so long as you can clearly see them and they are speaking a language you know. If the speaker is further than 30 feet away, you take a -2 circumstance penalty to the check. If you are a master in Society, you don\'t take the penalty.',
    requiredSkill: 'Society',
    requiredProficiency: 'trained',
  },
  {
    id: 'streetwise',
    name: 'Streetwise',
    type: 'skill',
    level: 1,
    description:
      'You know about life on the streets and feel the pulse of your local settlement. You can use Society to Gather Information and to Recall Knowledge about a settlement you are familiar with. If you are a master in Society, you can use Society to Gather Information in any settlement.',
    requiredSkill: 'Society',
    requiredProficiency: 'trained',
  },
  {
    id: 'connections',
    name: 'Connections',
    type: 'skill',
    level: 2,
    description:
      'You have social connections you can leverage to trade favors or get information. When you are in a settlement, you can attempt a Society check to leverage your connections for a favor. You can also use your connections to get access to an uncommon item through an acquaintance. The GM determines the DC based on the favor asked.',
    requiredSkill: 'Society',
    requiredProficiency: 'expert',
    prerequisites: 'Courtly Graces',
  },
  {
    id: 'legendary-codebreaker',
    name: 'Legendary Codebreaker',
    type: 'skill',
    level: 15,
    description:
      'Your skill with codes is so great that you can decode almost any cipher. You can Decipher Writing using Society on any coded message, even those that use exotic or extremely complex ciphers. It takes you no more than 1 minute to Decipher Writing, even for complex codes. If you roll a critical failure, you get a failure instead.',
    requiredSkill: 'Society',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Stealth
  // ========================
  {
    id: 'experienced-smuggler',
    name: 'Experienced Smuggler',
    type: 'skill',
    level: 1,
    description:
      'You often smuggle things past the authorities. When the GM rolls your Stealth check to see if a suspicious item you are wearing or carrying is noticed, you gain a +2 circumstance bonus. If you are a master in Stealth, you gain a +4 circumstance bonus.',
    requiredSkill: 'Stealth',
    requiredProficiency: 'trained',
  },
  {
    id: 'terrain-stalker',
    name: 'Terrain Stalker',
    type: 'skill',
    level: 1,
    description:
      'Select one type of difficult terrain from the following list: rubble, snow, or underbrush. While undetected by all non-allies in that type of terrain, you can Sneak without attempting a Stealth check as long as you move no more than 5 feet and do not move to a different type of terrain.',
    requiredSkill: 'Stealth',
    requiredProficiency: 'trained',
  },
  {
    id: 'quiet-allies',
    name: 'Quiet Allies',
    type: 'skill',
    level: 2,
    description:
      'You are skilled at moving with a group. When you are Avoiding Notice and your allies Follow the Expert with you, you and those allies can roll a single Stealth check, using the lowest modifier, instead of rolling separately.',
    requiredSkill: 'Stealth',
    requiredProficiency: 'expert',
  },
  {
    id: 'swift-sneak',
    name: 'Swift Sneak',
    type: 'skill',
    level: 7,
    description:
      'You can move your full Speed when you Sneak. You can use Swift Sneak while Burrowing, Climbing, Flying, or Swimming instead of during a Stride if you have the corresponding movement type.',
    requiredSkill: 'Stealth',
    requiredProficiency: 'master',
  },
  {
    id: 'legendary-sneak',
    name: 'Legendary Sneak',
    type: 'skill',
    level: 15,
    description:
      'You are always sneaking unless you choose to be seen, even when there is nothing to hide behind. You can Hide and Sneak even without cover or concealment. You must still end your movement in a location that provides cover or concealment if you want to remain hidden or undetected.',
    requiredSkill: 'Stealth',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Survival
  // ========================
  {
    id: 'experienced-tracker',
    name: 'Experienced Tracker',
    type: 'skill',
    level: 1,
    description:
      'Tracking is second nature to you. You can Track while moving at full Speed. If you are a master in Survival, you don\'t take the -5 penalty for tracking while moving at full Speed. If legendary, you no longer need to attempt a new check every hour while Tracking.',
    requiredSkill: 'Survival',
    requiredProficiency: 'trained',
  },
  {
    id: 'forager',
    name: 'Forager',
    type: 'skill',
    level: 1,
    description:
      'While using Survival to Subsist, if you roll any result worse than a success, you get a success. On a success, you can provide subsistence living for yourself and four additional creatures, and on a critical success you can feed yourself and eight others.',
    requiredSkill: 'Survival',
    requiredProficiency: 'trained',
  },
  {
    id: 'survey-wildlife',
    name: 'Survey Wildlife',
    type: 'skill',
    level: 1,
    description:
      'You can study the local fauna to gain information about the area. You can spend 10 minutes surveying the local wildlife to learn about the surrounding terrain. On a successful Survival check, you learn about water sources, shelter, and any unusual creatures in the area.',
    requiredSkill: 'Survival',
    requiredProficiency: 'trained',
  },
  {
    id: 'terrain-expertise',
    name: 'Terrain Expertise',
    type: 'skill',
    level: 1,
    description:
      'Your experience in one type of terrain makes you better at surviving in it. Choose a terrain: aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground. You gain a +1 circumstance bonus to Survival checks in that terrain. This increases to +2 if you are a master in Survival.',
    requiredSkill: 'Survival',
    requiredProficiency: 'trained',
  },
  {
    id: 'planar-survival',
    name: 'Planar Survival',
    type: 'skill',
    level: 7,
    description:
      'You can Subsist using Survival on other planes, even those that don\'t normally support living creatures. You gain a +2 circumstance bonus to checks to Subsist and to Sense Direction on planes other than the Material Plane.',
    requiredSkill: 'Survival',
    requiredProficiency: 'master',
  },
  {
    id: 'legendary-survivalist',
    name: 'Legendary Survivalist',
    type: 'skill',
    level: 15,
    description:
      'You can survive indefinitely without food or water and can endure severe and extreme cold and heat without taking damage. Your mastery of survival is so great that you can go without air for 10 times as long as normal before beginning to suffocate.',
    requiredSkill: 'Survival',
    requiredProficiency: 'legendary',
  },

  // ========================
  // Thievery
  // ========================
  {
    id: 'pickpocket',
    name: 'Pickpocket',
    type: 'skill',
    level: 1,
    description:
      'You can Steal or Palm an Object that is closely guarded, such as in a pocket, without taking the -5 penalty. You can\'t steal items that would be extremely noticeable or that are held in the hand. If you are a master in Thievery, you can attempt to Steal from a creature in combat or otherwise on alert.',
    requiredSkill: 'Thievery',
    requiredProficiency: 'trained',
  },
  {
    id: 'subtle-theft',
    name: 'Subtle Theft',
    type: 'skill',
    level: 1,
    description:
      'When you successfully Steal something, observers (other than the creature you stole from) don\'t notice you did it, unless they were specifically watching you. If you fail the check, observers don\'t notice your attempt either (though the creature you tried to steal from does).',
    requiredSkill: 'Thievery',
    requiredProficiency: 'trained',
  },
  {
    id: 'quick-unlock',
    name: 'Quick Unlock',
    type: 'skill',
    level: 7,
    description:
      'You can Pick a Lock using 1 action instead of 2. You must still succeed at the Thievery check.',
    requiredSkill: 'Thievery',
    requiredProficiency: 'master',
  },
  {
    id: 'legendary-thief',
    name: 'Legendary Thief',
    type: 'skill',
    level: 15,
    description:
      'Your skill at theft is unmatched. You can attempt to Steal something that is actively wielded or closely guarded, such as a weapon being held by a creature during combat. You must have a free hand to do so, and you take a -5 penalty to the Thievery check. On a success, you steal the item. On a critical success, the creature does not notice you stole from it until it attempts to use the item.',
    requiredSkill: 'Thievery',
    requiredProficiency: 'legendary',
  },
]
