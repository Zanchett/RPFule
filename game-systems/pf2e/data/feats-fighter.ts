import { Feat } from '../../../src/types'

export const fighterFeats: Feat[] = [
  // ========================
  // Level 1 Fighter Feats
  // ========================
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
  {
    id: 'exacting-strike',
    name: 'Exacting Strike',
    type: 'class',
    level: 1,
    classId: 'fighter',
    description:
      'You make a controlled attack, fully accounting for your momentum. Make a Strike. The Strike gains the following failure effect: This attack does not count toward your multiple attack penalty.',
  },
  {
    id: 'point-blank-shot',
    name: 'Point-Blank Shot',
    type: 'class',
    level: 1,
    classId: 'fighter',
    description:
      'You take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don\'t take the penalty to your attack rolls from the volley trait. When using a ranged weapon that doesn\'t have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon\'s first range increment.',
  },
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
    id: 'reactive-shield',
    name: 'Reactive Shield',
    type: 'class',
    level: 1,
    classId: 'fighter',
    description:
      'You can snap your shield into place just as you would take a blow, gaining its bonus to AC. You immediately use the Raise a Shield action and gain your shield\'s bonus to AC. The circumstance bonus from the shield applies to your AC when you\'re determining the outcome of the triggering attack.',
  },
  {
    id: 'snagging-strike',
    name: 'Snagging Strike',
    type: 'class',
    level: 1,
    classId: 'fighter',
    description:
      'You combine an attack with quick grappling moves to throw an enemy off balance as long as it stays in your reach. Make a Strike while keeping one hand free. If this Strike hits, the target is flat-footed until the start of your next turn or until it is no longer within your melee reach, whichever comes first.',
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
    id: 'vicious-swing',
    name: 'Vicious Swing',
    type: 'class',
    level: 1,
    classId: 'fighter',
    description:
      'You unleash a brutal two-handed swing. Make a melee Strike with a two-handed weapon. If this Strike hits, you deal additional damage equal to the number of weapon damage dice.',
  },

  // ========================
  // Level 2 Fighter Feats
  // ========================
  {
    id: 'brutish-shove',
    name: 'Brutish Shove',
    type: 'class',
    level: 2,
    classId: 'fighter',
    description:
      'Throwing your weight behind your attack, you hit your enemy hard enough to make it stumble back. Make a Strike with a two-handed melee weapon. If you hit a target that is your size or smaller, that creature is flat-footed until the end of your current turn, and you can automatically Shove it, with the same benefits as the Shove action but without needing a free hand.',
  },
  {
    id: 'combat-grab',
    name: 'Combat Grab',
    type: 'class',
    level: 2,
    classId: 'fighter',
    description:
      'You swipe at your opponent and grab at them. Make a melee Strike while keeping one hand free. If the Strike hits, you grab the target using your free hand. The creature remains grabbed until the end of your next turn or until it Escapes, whichever comes first.',
  },
  {
    id: 'dueling-parry',
    name: 'Dueling Parry',
    type: 'class',
    level: 2,
    classId: 'fighter',
    description:
      'Using your weapon as a defensive tool, you parry attacks against you. You gain a +2 circumstance bonus to AC until the start of your next turn, as long as you continue to meet this feat\'s requirements.',
    prerequisites: 'You are wielding a one-handed melee weapon and have your other hand free',
  },
  {
    id: 'intimidating-strike',
    name: 'Intimidating Strike',
    type: 'class',
    level: 2,
    classId: 'fighter',
    description:
      'Your blow not only wounds creatures but also shatters their confidence. Make a melee Strike. If you hit and deal damage, the target is frightened 1, or frightened 2 on a critical hit.',
  },
  {
    id: 'lunge',
    name: 'Lunge',
    type: 'class',
    level: 2,
    classId: 'fighter',
    description:
      'Extending your body to its limits, you attack an enemy that would normally be beyond your reach. Make a Strike with a melee weapon, increasing your reach by 5 feet for that Strike. If the weapon already has the reach trait, increase your reach by an additional 5 feet for that Strike.',
  },
  {
    id: 'quick-reversal',
    name: 'Quick Reversal',
    type: 'class',
    level: 2,
    classId: 'fighter',
    description:
      'You turn your foes\' flanking against them with a quick reverse. Make a melee Strike against one of the flanking creatures, then make a second Strike with the same weapon or unarmed attack against a different flanking creature. This second Strike has the same multiple attack penalty as the initial Strike and does not count toward your multiple attack penalty.',
  },

  // ========================
  // Level 4 Fighter Feats
  // ========================
  {
    id: 'dual-handed-assault',
    name: 'Dual-Handed Assault',
    type: 'class',
    level: 4,
    classId: 'fighter',
    description:
      'You snap your free hand over to grip your weapon just long enough to add momentum and deliver a more powerful blow. Make a Strike with a one-handed melee weapon, using two hands for extra power. You gain the two-hand damage die for that Strike if the weapon has the two-hand trait, or you add your weapon\'s number of damage dice if it doesn\'t.',
    prerequisites: 'You are wielding a one-handed melee weapon with a free hand',
  },
  {
    id: 'knockdown',
    name: 'Knockdown',
    type: 'class',
    level: 4,
    classId: 'fighter',
    description:
      'You make an attack to knock a foe off balance, then follow up immediately with a sweep to topple them. Make a melee Strike. If it hits and deals damage, you can attempt an Athletics check to Trip the target.',
  },
  {
    id: 'shatter-defenses',
    name: 'Shatter Defenses',
    type: 'class',
    level: 4,
    classId: 'fighter',
    description:
      'Your offense shatters the confidence of those you Strike. Make a melee Strike against a frightened creature. If you hit, the target becomes flat-footed for 1 round, or until it is no longer frightened, whichever comes later.',
  },
  {
    id: 'swipe',
    name: 'Swipe',
    type: 'class',
    level: 4,
    classId: 'fighter',
    description:
      'You make a wide, arcing swing. Make a single melee Strike and compare the attack roll result to the AC of up to two foes, each of whom must be within your melee reach and adjacent to each other. Roll damage only once and apply it to each creature you hit. A Swipe counts as two attacks for your multiple attack penalty.',
  },
  {
    id: 'twin-riposte',
    name: 'Twin Riposte',
    type: 'class',
    level: 4,
    classId: 'fighter',
    description:
      'A clever parry with one weapon leaves your opponent open to an attack with the other weapon. When you successfully parry an attack, you can make a melee Strike against the attacker with a weapon you are wielding in your other hand. This Strike uses your current multiple attack penalty.',
    prerequisites: 'You are wielding two melee weapons',
  },
  {
    id: 'guardian-deflection',
    name: "Guardian's Deflection",
    type: 'class',
    level: 4,
    classId: 'fighter',
    description:
      'You use your weapon to deflect an attack against an ally within your melee reach. The ally gains a +2 circumstance bonus to AC against the triggering attack. You must be wielding a melee weapon or have a hand free to use this reaction.',
  },

  // ========================
  // Level 6 Fighter Feats
  // ========================
  {
    id: 'advantageous-assault',
    name: 'Advantageous Assault',
    type: 'class',
    level: 6,
    classId: 'fighter',
    description:
      'When an enemy is off balance, you take advantage with a more powerful attack. Make a Strike against a creature that is grabbed, prone, or restrained. You gain a circumstance bonus to damage on this Strike equal to the number of weapon damage dice, or two plus the number of weapon damage dice if you are using the weapon in two hands.',
  },
  {
    id: 'disarming-twist',
    name: 'Disarming Twist',
    type: 'class',
    level: 6,
    classId: 'fighter',
    description:
      'After your Strike, you wrench the target\'s weapon away. Make a melee Strike. If it hits and deals damage, you can attempt an Athletics check to Disarm the target.',
  },
  {
    id: 'furious-focus',
    name: 'Furious Focus',
    type: 'class',
    level: 6,
    classId: 'fighter',
    description:
      'You\'ve learned to maintain your balance even when swinging with all your might. When you use Power Attack with a two-handed melee weapon, it counts as one attack instead of two for your multiple attack penalty.',
    prerequisites: 'Power Attack',
  },
  {
    id: 'positioning-assault',
    name: 'Positioning Assault',
    type: 'class',
    level: 6,
    classId: 'fighter',
    description:
      'With a well-placed attack, you force an opponent to the position you want. Make a Strike with a two-handed melee weapon. If you hit, you can move the target 5 feet to a space in your reach. This follows the forced movement rules.',
  },
  {
    id: 'quick-shield-block',
    name: 'Quick Shield Block',
    type: 'class',
    level: 6,
    classId: 'fighter',
    description:
      'You can bring your shield into position with a practiced flick of your arm. At the start of each of your turns, you gain an additional reaction that you can use only to Shield Block.',
    prerequisites: 'Shield Block',
  },

  // ========================
  // Level 8 Fighter Feats
  // ========================
  {
    id: 'blind-fight',
    name: 'Blind-Fight',
    type: 'class',
    level: 8,
    classId: 'fighter',
    description:
      'Your battle instincts make you more aware of concealed and invisible opponents. You don\'t need to succeed at a flat check to target concealed creatures. You\'re still flat-footed to creatures you can\'t perceive, but you aren\'t flat-footed to creatures that are merely hidden from you.',
    prerequisites: 'master in Perception',
  },
  {
    id: 'felling-strike',
    name: 'Felling Strike',
    type: 'class',
    level: 8,
    classId: 'fighter',
    description:
      'Your attack can knock an airborne foe to the ground. Make a Strike against a flying creature. If you hit and deal damage, the target falls up to 120 feet. The fall is gradual enough that if it causes the creature to hit the ground, the creature takes no damage from the fall.',
  },
  {
    id: 'incredible-aim',
    name: 'Incredible Aim',
    type: 'class',
    level: 8,
    classId: 'fighter',
    description:
      'By spending a moment to focus, you can aim your ranged attacks with incredible precision. You gain a +2 circumstance bonus to the attack roll and ignore the target\'s concealed condition. Make a ranged weapon Strike. This Strike counts as two attacks for your multiple attack penalty.',
  },
  {
    id: 'combat-reflexes',
    name: 'Combat Reflexes',
    type: 'class',
    level: 8,
    classId: 'fighter',
    description:
      'You are alert enough to react to multiple dangers. At the start of each of your turns, you gain an additional reaction you can use only for Attacks of Opportunity.',
  },
  {
    id: 'spring-attack',
    name: 'Spring Attack',
    type: 'class',
    level: 8,
    classId: 'fighter',
    description:
      'Springing away from one foe, you strike at another in a fluid motion. Stride up to your Speed. During this movement, you can make a single melee Strike at any point during your Stride. You can use Spring Attack while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.',
  },
  {
    id: 'sudden-leap',
    name: 'Sudden Leap',
    type: 'class',
    level: 8,
    classId: 'fighter',
    description:
      'You make an impressive leap and swing while you soar. Make a Leap, High Jump, or Long Jump and attempt one melee Strike at any point during your jump. Immediately after the Strike, you fall to the ground if you\'re in the air.',
  },

  // ========================
  // Level 10 Fighter Feats
  // ========================
  {
    id: 'certain-strike',
    name: 'Certain Strike',
    type: 'class',
    level: 10,
    classId: 'fighter',
    description:
      'Even when you don\'t hit squarely, you can still score a glancing blow. Make a melee Strike. It gains the following failure effect: your attack deals the weapon\'s minimum damage (the damage you would roll if every die rolled a 1) to the target.',
  },
  {
    id: 'fearsome-brute',
    name: 'Fearsome Brute',
    type: 'class',
    level: 10,
    classId: 'fighter',
    description:
      'Your blows shake the confidence of those you Strike. When you deal damage to a frightened creature, increase the creature\'s frightened value by 1. If the creature was not already frightened, it becomes frightened 1. This applies only once per attack, even if multiple damage types are involved.',
  },
  {
    id: 'overwhelming-blow',
    name: 'Overwhelming Blow',
    type: 'class',
    level: 10,
    classId: 'fighter',
    description:
      'You throw all your weight behind your next attack, devastating your foe. Make a melee Strike. This counts as three attacks when calculating your multiple attack penalty. If this Strike hits, you deal two extra dice of weapon damage.',
  },
  {
    id: 'determination',
    name: 'Determination',
    type: 'class',
    level: 10,
    classId: 'fighter',
    description:
      'Your training and sheer willpower allow you to push through debilitating conditions. Attempt a DC 15 flat check. On a success, you can end one nonpermanent condition affecting you (chosen when you use this action). This doesn\'t end conditions from persistent damage.',
  },
  {
    id: 'debilitating-shot',
    name: 'Debilitating Shot',
    type: 'class',
    level: 10,
    classId: 'fighter',
    description:
      'Aiming for a weak point, you impede your foe with a precise shot. Make a ranged weapon Strike. If it hits, the target is slowed 1 until the end of its next turn.',
  },

  // ========================
  // Level 12 Fighter Feats
  // ========================
  {
    id: 'lunging-stance',
    name: 'Lunging Stance',
    type: 'class',
    level: 12,
    classId: 'fighter',
    description:
      'Your body coils as you prepare to lunge at a foe. You enter a stance that increases your melee reach by 5 feet with weapons you wield in two hands. While in this stance, your attacks of opportunity can be made against creatures within your increased reach.',
    prerequisites: 'Lunge',
  },
  {
    id: 'paragons-guard',
    name: "Paragon's Guard",
    type: 'class',
    level: 12,
    classId: 'fighter',
    description:
      'Once you\'ve had a moment to set your stance, you always have your shield ready without a thought. You enter a stance in which you constantly have your shield raised as if you\'d used the Raise a Shield action, as long as you meet that action\'s requirements.',
    prerequisites: 'Shield Block',
  },
  {
    id: 'desperate-finisher',
    name: 'Desperate Finisher',
    type: 'class',
    level: 12,
    classId: 'fighter',
    description:
      'In a desperate effort, you make one last Strike. Make a Strike with a melee weapon or unarmed attack. On a hit, you deal maximum damage. You are then fatigued until the end of the encounter.',
  },
  {
    id: 'two-weapon-flurry',
    name: 'Two-Weapon Flurry',
    type: 'class',
    level: 12,
    classId: 'fighter',
    description:
      'You lash out with both weapons in a sudden flurry. Make two Strikes, one with each weapon you\'re wielding. Both use your current multiple attack penalty. Both attacks count toward your multiple attack penalty, but the penalty doesn\'t increase until after both attacks.',
    prerequisites: 'You are wielding two weapons',
  },
  {
    id: 'flinging-shove',
    name: 'Flinging Shove',
    type: 'class',
    level: 12,
    classId: 'fighter',
    description:
      'You throw your enemies with incredible force. When you successfully Shove a creature, you can push it up to 10 feet instead of 5. When you critically succeed at a Shove, you can push it up to 20 feet instead of 10.',
    prerequisites: 'Brutish Shove or Combat Grab',
  },

  // ========================
  // Level 14 Fighter Feats
  // ========================
  {
    id: 'whirlwind-strike',
    name: 'Whirlwind Strike',
    type: 'class',
    level: 14,
    classId: 'fighter',
    description:
      'You attack all nearby adversaries. Make a melee Strike against each enemy within your melee reach. Each attack counts toward your multiple attack penalty, but do not increase your penalty until you have made all your attacks.',
  },
  {
    id: 'improved-knockdown',
    name: 'Improved Knockdown',
    type: 'class',
    level: 14,
    classId: 'fighter',
    description:
      'You can dash your foe to the ground with a single blow. When you use Knockdown, instead of making a Strike followed by an Athletics check to Trip, you can attempt a single Strike. If the Strike hits, you also apply the critical success effect of a Trip. If you critically hit with the Strike, the target takes 10 additional bludgeoning damage.',
    prerequisites: 'Knockdown',
  },
  {
    id: 'stance-savant',
    name: 'Stance Savant',
    type: 'class',
    level: 14,
    classId: 'fighter',
    description:
      'When there is danger, you react by entering your preferred stance. At the start of each combat encounter, you can enter a stance you know as a free action on your first turn.',
  },
  {
    id: 'determination-greater',
    name: 'Greater Determination',
    type: 'class',
    level: 14,
    classId: 'fighter',
    description:
      'Your incredible willpower allows you to push past even the most debilitating conditions. When you use Determination, you can end a permanent condition instead of only nonpermanent conditions, and you can attempt to remove conditions from persistent damage as well.',
    prerequisites: 'Determination',
  },

  // ========================
  // Level 16 Fighter Feats
  // ========================
  {
    id: 'savage-critical',
    name: 'Savage Critical',
    type: 'class',
    level: 16,
    classId: 'fighter',
    description:
      'The wounds you inflict are truly horrific. When you critically hit a foe, the critical specialization effect you apply from your weapon is especially devastating. Increase the value of any conditions the critical specialization effect would apply by 1. If the critical specialization effect deals additional damage, increase that damage by 2d6.',
  },
  {
    id: 'multishot-stance',
    name: 'Multishot Stance',
    type: 'class',
    level: 16,
    classId: 'fighter',
    description:
      'You lock yourself in a stance that lets you fire multiple shots with greater ease. When you make your first Strike on your turn with a ranged weapon, you can fire at two targets within 10 feet of each other, comparing one attack roll against both ACs. The damage is reduced by one die for each target.',
  },
  {
    id: 'reflecting-riposte',
    name: 'Reflecting Riposte',
    type: 'class',
    level: 16,
    classId: 'fighter',
    description:
      'When you Shield Block a spell that targets you, you can reflect the spell back at its caster. After the Shield Block, the spell targets the caster instead, using the original spell attack roll or spell DC.',
    prerequisites: 'Shield Block',
  },
  {
    id: 'dueling-dance',
    name: 'Dueling Dance',
    type: 'class',
    level: 16,
    classId: 'fighter',
    description:
      'Using a combination of fluid attack and defense, you enter a graceful combat stance. You enter a stance while wielding a one-handed melee weapon with your other hand free. You gain a +2 circumstance bonus to AC, and your first Strike each round gains a +2 circumstance bonus to its attack roll.',
    prerequisites: 'Dueling Parry',
  },

  // ========================
  // Level 18 Fighter Feats
  // ========================
  {
    id: 'impossible-volley',
    name: 'Impossible Volley',
    type: 'class',
    level: 18,
    classId: 'fighter',
    description:
      'You fire a volley at all foes in an area. Make one Strike with a ranged weapon against each enemy within a 10-foot-radius burst centered at or beyond your weapon\'s first range increment. Each attack counts toward your multiple attack penalty but does not increase your penalty until all attacks have been made. You can\'t use this with a reload weapon.',
  },
  {
    id: 'boundless-reprisals',
    name: 'Boundless Reprisals',
    type: 'class',
    level: 18,
    classId: 'fighter',
    description:
      'You have an inexhaustible well of responses to your foes\' actions. At the start of each of your turns, you gain an additional reaction you can use during that turn. You can use this additional reaction for any reaction, not just Attacks of Opportunity.',
    prerequisites: 'Combat Reflexes',
  },
  {
    id: 'brutal-finish',
    name: 'Brutal Finish',
    type: 'class',
    level: 18,
    classId: 'fighter',
    description:
      'You throw everything into one final, powerful blow. Make a Strike with a melee weapon, using the maximum number of damage dice possible for that weapon. If you hit, you gain additional damage equal to twice the number of weapon damage dice. This Strike counts as three attacks for your multiple attack penalty.',
  },
  {
    id: 'graceful-poise',
    name: 'Graceful Poise',
    type: 'class',
    level: 18,
    classId: 'fighter',
    description:
      'With the right weapon, you are a graceful force on the battlefield. You enter a stance while wielding two weapons. While in this stance, the second Strike you make each turn with your off-hand weapon does not apply your multiple attack penalty, as long as it uses an agile weapon.',
    prerequisites: 'Double Slice',
  },

  // ========================
  // Level 20 Fighter Feats
  // ========================
  {
    id: 'ultimate-flexibility',
    name: 'Ultimate Flexibility',
    type: 'class',
    level: 20,
    classId: 'fighter',
    description:
      'Your combat technique is peerless, letting you adapt on the fly. At the start of each day during your daily preparations, you can choose two fighter feats of 14th level or lower. You gain those feats until your next daily preparations. They must meet all prerequisites.',
  },
  {
    id: 'weapon-supremacy',
    name: 'Weapon Supremacy',
    type: 'class',
    level: 20,
    classId: 'fighter',
    description:
      'Your skill with weapons is unmatched. Any Strike you make with a weapon you have legendary proficiency in gains a +4 circumstance bonus to the attack roll, and you gain access to the critical specialization effects of all weapons with which you have legendary proficiency.',
  },
  {
    id: 'undying-ferocity',
    name: 'Undying Ferocity',
    type: 'class',
    level: 20,
    classId: 'fighter',
    description:
      'You refuse to be laid low. Once per day, when you would be reduced to 0 Hit Points, you are instead reduced to 1 Hit Point. For the next round, you gain a +4 circumstance bonus to attack rolls, damage rolls, and saving throws. At the end of that round, you become wounded 2 (or increase your wounded value by 2 if already wounded).',
  },
  {
    id: 'legendary-riposte',
    name: 'Legendary Riposte',
    type: 'class',
    level: 20,
    classId: 'fighter',
    description:
      'Your ripostes are devastating. When a creature critically fails a Strike against you, you can make an Attack of Opportunity against it. If your Attack of Opportunity hits, it deals additional damage equal to your weapon\'s number of damage dice.',
  },
]
