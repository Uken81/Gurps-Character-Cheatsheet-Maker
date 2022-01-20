const AdvantagesArray = [
  {
    title: 'Absolute Direction',
    type: 'advantage',
    points: '5 or 10 points',
    description: <p>You have an excellent sense of direction.This ability comes in two levels:</p>,
    subCategories: [
      {
        name: 'Absolute Direction',
        text: (
          <p>
            You always know which way is north, and you can always retrace a path you have followed
            within the past month, no matter how faint or confusing. This ability does not work in
            environments such as interstellar space or the limbo of the astral plane, but it does
            work underground, underwater, and on other planets. This gives +3 to Body Sense and
            Navigation (Air, Land, or Sea).
            <br />
            <br />(<strong>Note:</strong>{' '}
            <i>
              The navigational sense that guides migratory creatures to their destination is too
              crude to qualify; treat it as a 0-point feature.)
            </i>
          </p>
        ),
        points: '5 points'
      },
      {
        name: '3D Spatial Sense',
        text: (
          <p>
            As above, but works in three dimensions. This ability is useful in deep space – although
            it does not help you if you travel across dimensions.
            <br />
            You get the skill bonuses to Piloting and +2 to Aerobatics, Free Fall, and Navigation
            (Hyperspace or Space).
          </p>
        ),
        points: '10 points'
      }
    ]
  },

  {
    title: 'Absolute Timing',
    type: 'advantage',
    points: '2 or 5 points',
    description: (
      <p>
        You have an accurate mental clock. This ability comes in two levels, both of which are
        somewhat cinematic:
      </p>
    ),
    subCategories: [
      {
        name: 'Absolute Timing',
        text: (
          <p>
            You always know what time it is, with a precision equal to the best personal timepieces
            widely available in your culture (but never better than a few seconds). You can measure
            elapsed time with equal accuracy.
            <br />
            Neither changes of time zone nor sleep interferes with this ability, and you can wake up
            at a predetermined time if you choose. Being knocked unconscious, hypnotized, etc. may
            prevent this advantage from working, and time travel will confuse you until you find out
            what the “new” time is.
          </p>
        ),
        points: '2 points'
      },
      {
        name: 'Chronolocation',
        text: (
          <p>
            As above, but time travel does not interfere – you alwaysknow what time it is in an
            absolute sense. Note that things like Daylight Savings Time and calendar reform can
            still confuse you!
            <br />
            When you travel in time, the GM may tell you, “You have gone back exactly 92,876.3
            days,” and let you or your character – deal with questions like, “What about leap year?
          </p>
        ),
        points: '5 points'
      }
    ]
  },

  {
    title: 'Acute Senses',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        You have superior senses. Each Acute Sense is a separate advantage that gives +1 per level
        to all Sense rolls (p. 358) you make – or the GM makes for you – using that one sense. Acute
        Hearing gives you a bonus to hear something, or to notice a sound (for instance, someone
        taking the safety off a gun in the dark).
      </p>
    ),
    subCategories: [
      {
        name: 'Acute Taste and Smell',
        text: (
          <p>Gives you a bonus to notice a taste or smell (for instance, poison in your drink).</p>
        ),
        points: '2 points/level'
      },
      {
        name: 'Acute Touch',
        text: (
          <p>
            Gives you a bonus to detect something by touch (for instance, a concealed weapon when
            patting down a suspect).
          </p>
        ),
        points: '2 points/level'
      },
      {
        name: 'Acute Vision',
        text: (
          <p>
            Gives you a bonus to spot things visually, and whenever you do a visual search (for
            instance, looking for traps or footprints).
          </p>
        ),
        points: '2 points/level'
      }
    ],
    extraText: (
      <strong>
        <i>
          With the GM’s permission, you may also buy Acute Sense advantages for specialized senses
          such as Scanning Sense and Vibration Sense. You cannot usually buy Acute Senses in play –
          raise your Perception instead. However, if you lose a sense, the GM may allow you to spend
          earned points on other Acute Senses to compensate. For instance, if you are blinded, you
          might acquire Acute Hearing.
        </i>
      </strong>
    )
  },

  {
    title: 'Affliction',
    type: 'advantage',
    points: '10 points/level',
    description: (
      <p>
        You have an attack that causes a baneful, nondamaging effect: blindness, paralysis,
        weakness, etc. This might be an ultra-tech beam weapon, a chemical spray, a supernatural
        gaze attack, or almost anything else. Specify the details when you buy the advantage.
        <br />
        <br />
        By default, Affliction is a ranged attack with 1/2D 10, Max 100, Acc 3, RoF 1, Shots Recoil
        Recoil 1, although you can apply modifiers to change these statistics (see pp. 101- 116). If
        you hit, your victim gets a HT+1 roll to resist. Apply a penalty equal to the level of the
        Affliction (so Affliction 1 gives an unmodified HT roll). The victim gets a bonus equal to
        his DR unless the Affliction has one of the following modifiers: Blood Agent, Contact Agent,
        Cosmic, Follow-Up, Malediction, Respiratory Agent or Sense-Based. To reduce the effects of
        DR, add the Armor Divisor enhancement.
        <br />
        The victim gets a further +3 if he is beyond 1/2D range. If the victim makes his HT roll, he
        is unaffected. If he fails, he suffers the effects of the Affliction. By default, he is
        stunned (see p. 420). He may roll vs. HT+1 once per second to recover, but once again at a
        penalty equal to the level of the Affliction (DR has no effect on this roll).
        <br />
        If your Affliction causes an effect other than stunning, this is a special enhancement (see
        below). You can inflict more than one effect by giving your Affliction multiple special
        enhancements. These effects occur simultaneously, except where noted.Successive Afflictions
        that produce the same effects are not normally cumulative. Use the single worst effect.
        <br />
        <br /> Use the special enhancements below to create specific Afflictions. Many Attack
        Enhancements and Limitations (p. 102) are also logical. For instance, a blinding flash is
        Sense- Based (p. 109) most drugs have Follow-Up (p. 105), Blood Agent (p. 102), or Contact
        Agent (p. 103); supernatural attacks like the &ldquo;evil eye&rdquo; use Malediction (p.
        106); and touch attacks call for Melee Attack (p. 112).
        <br />
        If an Affliction produces two or more effects due to the special enhancements below, some of
        these effects may be secondary. Secondary effects occur only if the victim fails his HT roll
        by 5 or more or rolls a critical failure. A secondary effect is worth 1/5 as much; e.g.,
        Secondary Heart Attack is +60% rather than +300%. Once you have chosen all the modifiers on
        your Affliction, describe the nature of the attack as detailed for Innate Attack (p. 61).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Advantage:</i>
          </p>
        ),
        text: (
          <p>
            The victim immediately experiences the effects of a specific physical or mental
            advantage. Advantages with instantaneous effects affect the target once, as soon as he
            is hit, if he fails his HT roll; e.g., Warp immediately teleports the subject.
            Advantages that can be switched on and off (such as Insubstantiality) are automatically
            &ldquo;on&rdquo; for one minute per point by which the victim fails his HT roll, and are
            not under the subject&rsquo;s control.
            <br />
            This is worth +10% per point the advantage is worth; e.g., Insubstantiality would be
            +800%! If the advantage comes in levels, specify the level.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Attribute Penalty</i>
          </p>
        ),
        text: (
          <p>
            The victim suffers temporary attribute loss. This is +5% per -1 to ST or HT, or +10% per
            -1 to DX or IQ. For instance, an attack that caused DX-3 and IQ-2 would be +50%. Lower
            all skills based on reduced attributes by a like amount. ST penalties also reduce BL and
            damage, while IQ reductions also apply to Will and Perception. Secondary characteristics
            are not otherwise affected; for instance, HT reduction does not affect Basic Speed or
            FP.
            <br /> Penalties last for one minute per point by which the victim fails his HT roll.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Coma</i>
          </p>
        ),
        text: (
          <p>
            The victim collapses, profoundly unconscious, and will likely die in days unless
            treated;
            <br />
            <strong>
              <i>see Mortal Conditions (p. 429). +250%.</i>
            </strong>
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Cumulative:</i>
          </p>
        ),
        text: (
          <p>
            Repeated attacks are cumulative! You must take this in conjunction with Attribute
            Penalty, or with an Advantage, Disadvantage, or Negated Advantage Enhancement that
            inflicts a “leveled” trait. +400%.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Disadvantage:</i>
          </p>
        ),
        text: (
          <p>
            The victim temporarily gains one or more specific physical or mental disadvantages (but
            not self-imposed mental disadvantages – see p. 121). This is worth +1% per point the
            temporary disadvantages are worth; e.g., Paranoia [-10] is worth +10%. If a disadvantage
            comes in levels, specify the level.
            <br /> The disadvantages last for one minute per point by which the victim fails his HT
            roll.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Heart Attack:</i>
          </p>
        ),
        text: (
          <p>
            The victim suffers an incapacitating heart attack, and will die in minutes unless
            treated; see Mortal Conditions (p. 429). +300%.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Incapacitation:</i>
          </p>
        ),
        text: (
          <p>
            The victim is incapacitated for a number of minutes equal to the margin of failure on
            his HT roll. After that, he is stunned until he can make a HT roll (roll once per
            second).
            <br />
            If you combine Incap - acitation with other effects (such as Irritant), those effects
            occur after the Incapacitation wears off; they replace the stunning and last for the
            same length of time the Incapacitation did.
            <br />
            Incapacitation can take the form of any of the following: Daze, +50%; Hallucinating,
            +50%; Retching, +50%; Agony, +100%; Choking, +100%; Ecstasy, +100%; Seizure, +100%;
            Paralysis, +150%; Sleep, +150%; or Unconsciousness, +200%. See Incapacitating Conditions
            (p. 428) for the game effects.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Irritant:</i>
          </p>
        ),
        text: (
          <p>
            The victim suffers an impairing but non-incapacitating condition instead of being
            stunned. It lasts for a number of minutes equal to the margin of failure on his HT roll.
            <br />
            The possibilities are Tipsy +10%; Coughing, +20%; Drunk, +20%; Moderate Pain, +20%;
            Euphoria, +30%; Nauseated, +30%; Severe Pain, +40%; or Terrible Pain, +60%. For
            definitions, see Irritating Conditions (p. 428).
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Negated Advantage:</i>
          </p>
        ),
        text: (
          <p>
            The victim loses a specific advantage for one minute per point by which he failed his HT
            roll. There is no effect if the victim lacks that advantage! This enhancement is worth
            +1% per point the advantage is worth.
            <br />
            If the advantage comes in levels, you must specify the level negated.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Stunning:</i>
          </p>
        ),
        text: (
          <p>
            May only accompany Advantage, Attribute Penalty, Disadvantage, or Negated Advantage.
            <br />
            If the victim fails to resist, he is stunned (per an unmodified Affliction) in addition
            to the effects of the other enhancement(s). +10%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Altered Time Rate',
    type: 'advantage',
    points: '100 points/level',
    description: (
      <p>
        Your rate of time perception is faster than that of a normal human. The first level of this
        advantage lets you experience time twice as fast as a normal – that is, you experience two
        subjective seconds for each real second that passes.
        <br />
        <br />
        Each level past the first increases this ratio by one: three times as fast at level 2, four
        times as fast at level 3, and so on. Each level of Altered Time Rate lets you take one
        additional maneuver on your turn in combat, allowing you to cast spells quickly by taking
        multiple Concentrate maneuvers, run very fast by taking multiple Move maneuvers, etc. Your
        turn doesn’t come any sooner, however! This advantage affects how fast you move when you
        react, but not how quickly you react in the first place.
        <br />
        <br /> Out of combat, Altered Time Rate allows you the luxury of extensive planning, even in
        crisis situations, as everything seems to happen in slow motion.
        <br /> You may always attempt a Sense roll, or an IQ-based skill roll to make plans or
        recall information (GM’s decision), at no penalty to additional actions.
        <br />
        <br />
        In order to do anything that depends on someone else’s reactions, you must deliberately
        “slow down” and function at his speed. This applies both when making a Feint in combat and
        when making an Influence roll (see p. 359) out of combat. For instance, if you choose to
        Feint, that is all you can do on your turn – you cannot take extra actions. (On the other
        hand, you could make an All-Out Attack followed by an Attack in order to beat down his
        defenses through sheer blinding speed!)
      </p>
    )
  },
  {
    title: 'Alternate Identity',
    type: 'advantage',
    points: '5 or 15 points per identity',
    description: (
      <p>
        You have multiple, seemingly legal identities. Each time you purchase this trait, your
        fingerprints (or other biometrics used to verify identity in your world) are registered
        under another name, and you have an extra set of identity documents (birth certificate,
        licenses, passport, etc.) good enough to pass close inspection.
        <br />
        These identities may also have valid credit cards and bank accounts, but you must supply the
        money – additional wealth is not included in the package! If an intelligence or
        law-enforcement agency attempts to identify you with no clue as to your name – for instance,
        using biometrics or photoanalysis – there is an equal chance for each of your identities to
        come up.
        <br />
        The search will stop . . . unless they have reason to believe you are a ringer. If the
        search continues, your other identities will eventually surface, and you will be unmasked.
        Once a government agency determines who you really are, your Alternate Identities are lost
        for good.
        <br />
        <br />
        There are two types of Alternate Identity:
      </p>
    ),
    subCategories: [
      {
        name: 'Legal',
        text: (
          <p>
            Some spies and undercover policemen – and even supers, in settings where they are backed
            by the government – may have a legal Alternate Identity. This requires at least 10
            points in Legal Enforcement Powers, Legal Immunity, Police Rank, Security Clearance,
            etc.; the GM sets the precise prerequisites.
            <br />
            <br />
            If a super has official permission to conceal his original name (e.g., to protect his
            family) and to hold property in his “super” name, then that is a legal Alternate
            Identity combined with a Secret Identity (see p. 153).
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Illegal',
        text: (
          <p>
            A criminal or foreign agent may have an illegal Alternate Identity. This has the
            advantage of being completely unknown when you first start out, and of course it cannot
            be revoked by the government.
            <br />
            On the other hand, should it ever be discovered, you will face a stiff fine, a jail
            sentence, or execution, depending on the time and place.
          </p>
        ),
        points: '15 points'
      }
    ]
  },
  {
    title: 'Ambidexterity',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You can fight or otherwise act equally well with either hand, and never suffer the -4 DX
        penalty for using the “off” hand (see p. 14).
        <br />
        Note that this does not allow you to take extra actions in combat – that’s Extra Attack (p.
        53). Should some accident befall one of your arms or hands, assume it is the left one.
      </p>
    )
  },
  {
    title: 'Amphibious',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You are well-adapted to movement in the water. You do not suffer skill penalties for working
        underwater, and you can swim at your full Basic Move. You still require air (but see Doesn’t
        Breathe, p. 49).
        <br />
        <br />
        Typical features include smooth, seal-like skin and webbed fingers and toes.
        <br />
        If you can move only in the water, take the Aquatic disadvantage (p. 145) instead.
      </p>
    )
  },
  {
    title: 'Animal Empathy',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You are unusually talented at reading the motivations of animals. When you meet an animal,
        the GM rolls against your IQ and tells you what you “feel.”
        <br /> This reveals the beast’s emotional state – friendly, frightened, hostile, hungry,
        etc. – and whether it is under supernatural control.
        <br /> You may also use your Influence skills (see p. 359) on animals just as you would on
        sapient beings, which usually ensures a positive reaction. This ability frequently
        accompanies some level of Animal Friend (see Talent, p. 89), and often Sense of Duty
        (Animals) or Vow (Vegetarianism).
      </p>
    )
  },
  {
    title: 'Arm DX',
    type: 'advantage',
    points: '12 or 16 points per +1 DX',
    description: (
      <p>
        Some of your arms have extra DX relative to the DX of your body. This DX applies only to
        things done with those arms or hands.
        <br /> It does not affect Basic Speed! If a task requires two or more hands, and they don’t
        have the same DX, use the lowest DX.
        <br /> Combat skills rely on bodily DX, and do not benefit from this DX at all.
        <br /> Arm DX costs 12 points per +1 DX for one arm and 16 points per +1 DX for two arms.
        <br /> To raise the DX of three or more arms, buy up overall DX. If you bought your DX with
        the No Fine Manipulators limitation, apply this limitation to Arm DX as well.
      </p>
    )
  },
  {
    title: 'Arm ST',
    type: 'advantage',
    points: '3, 5, 8 points per 1+ ST',
    description: (
      <p>
        Some of your arms have extra ST relative to the ST of your body. This ST applies only to
        efforts to lift, throw, or attack with those arms or hands.
        <br />
        It does not affect HP or overall Basic Lift! If a task requires multiple hands, and they
        don’t have the same ST, use the average ST. Arm ST costs 3 points per +1 ST for one arm, 5
        points per +1 ST for two arms, and 8 points per +1 ST for three arms. To raise the ST of
        four or more arms, buy up overall ST. If you bought your ST with the No Fine Manipulators or
        Size limitations, apply the same limitation(s) to Arm ST.
      </p>
    )
  },
  {
    title: 'Binding',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        You have an attack that can hold your target in place.
        <br />
        Specify how this works when you buy the advantage: entangling your victim in vines, tying
        him up with webs, freezing him inside a block of ice, turning the ground to quicksand
        beneath his feet, etc.
        <br />
        <br />
        Binding is a ranged attack with 1/2D –, Max 100, Acc 3, RoF 1, Shots N/A, and Recoil 1. You
        can add modifiers to change these statistics (see pp. 101-116).
        <br />
        On a hit, your victim is grappled (see p. 370) and rooted in place. He cannot select the
        Move or Change Posture maneuvers or change facing, and is at -4 to DX. The ST of this effect
        is equal to your Binding level, but you can layer additional attacks on a successfully bound
        victim.
        <br />
        Each extra layer gives +1 to ST. To break free, the victim must win a Quick Contest of ST or
        of ST or Escape skill against the ST of your Binding. Each attempt takes one second.
        <br /> If the victim fails to break free, he loses 1 FP but may try again. Alternatively, he
        may try to destroy the Binding.
        <br />
        <br />
        Innate Attacks hit automatically; other attacks are at -4. External attacks on the Binding
        take no penalty, but risk hitting the victim on a miss (see Striking Into a Close Combat,
        p.392).
        <br />
        <br />
        The Binding has DR equal to 1/3 your level (rounded down). Each point of damage reduces ST
        by one.
        <br />
        At ST 0, the Binding is destroyed and the victim is freed. To simulate vines, webs, and so
        forth, add one or more of Area Effect (p. 102), Persistent (p. 107), and Wall (p. 109) – and
        possibly some of the special modifiers below.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Engulfing:</i>
          </p>
        ),
        text: (
          <p>
            Your attack pins the target. He cannot move his limbs or speak; his only options are to
            use purely mental abilities, to attack the Binding with an Innate Attack, or to try to
            break free using ST (not Escape skill).
            <br />
            If he tries to break free and fails, he is only allowed a repeated attempt every 10
            seconds – and on a 17 or 18, he becomes so entangled that he cannot escape on his own!
            +60%.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Only Damaged By X:</i>
          </p>
        ),
        text: (
          <p>
            Only specific damage types can damage your Binding. +30% for one of burning, corrosion,
            crushing, or cutting; +20% for any two; +10% for any three.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Sticky:</i>
          </p>
        ),
        text: (
          <p>
            Your Binding is treated as Persistent (p. 107), but only affects those who actually
            touch the original target of your attack. +20%.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>Unbreakable:</i>
          </p>
        ),
        text: (
          <p>Your Binding cannot be destroyed. The only way to escape is to break free. +40%.</p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Enviromental:</i>
          </p>
        ),
        text: (
          <p>
            Your Binding manipulates an existing condition or object in the environment, and won’t
            work in its absence. This is worth from -20% (victim must be touching the ground) to
            -40% (victim must be standing in dense vegetation), at the GM’s option.
          </p>
        )
      },
      {
        name: (
          <p>
            <i>One-Shot:</i>
          </p>
        ),
        text: <p>You cannot layer your Binding to increase its ST. -10%.</p>
      }
    ]
  },
  {
    title: 'Blessed',
    type: 'advantage',
    points: '10 or more points',
    description: (
      <p>
        You are attuned to a god, demon lord, great spirit, cosmic power, etc. This can take various
        forms, but in all cases, you will lose this advantage if you fail to act in accordance with
        your deity’s rules and values.
      </p>
    ),
    subCategories: [
      {
        name: 'Blessed',
        text: (
          <p>
            You are attuned to a god, demon lord, great spirit, cosmic power, etc. This can take
            various forms, but in all cases, you will lose this advantage if you fail to act in
            accordance with your deity’s rules and values.
          </p>
        ),
        points: '10 points'
      },
      {
        name: 'Very Blessed',
        text: (
          <p>
            As above, but your IQ roll to interpret visions is at +5 and the reaction bonus from
            your god’s followers is +2.
          </p>
        ),
        points: '20 points'
      },
      {
        name: 'Heroic Feats',
        text: (
          <p>
            Your blessing gives you the ability to perform a particular heroic feat. Once per game
            session, you may add 1d to one of ST, DX, or HT (other traits, such as Basic Move, are
            at the GM’s discretion). You must specify which trait is boosted when you buy the
            advantage.
            <br />
            <br />
            This bonus lasts 3d seconds, after which your abilities revert to normal and you suffer
            any penalties amassed during the “heroic” period. (For instance, if your blessing boosts
            HP and you are reduced to -5 x your normal HP but not -5 x your “blessed” HP, you will
            die when the bonus HP wear off unless you receive some sort of healing.)
          </p>
        ),
        points: '10 points'
      }
    ],
    extraText: (
      <strong>
        <i> The GM may choose to allow other blessings as well.</i>
      </strong>
    )
  },
  {
    title: 'Brachiator',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You can travel by swinging on vines, tree branches, ropes, chandeliers, etc. You get +2 to
        Climbing skill, and can move at half your Basic Move while brachiating.
      </p>
    )
  },
  {
    title: 'Breath-Holding',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        You are adept at holding your breath. Each level doubles the length of time you can do so
        (see Holding Your Breath, p. 351). Normal humans may not take this advantage – to be a
        world-record diver, learn Breath Control (p. 182).
        <br />
        Nonhumans and supers can combine this advantage with Breath Control!
      </p>
    )
  },
  {
    title: 'Catfall',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You subtract five yards from a fall automatically (treat this as an automatic Acrobatics
        success – don’t check again for it). In addition, a successful DX roll halves damage from
        any fall. To enjoy these benefits, your limbs must be unbound and your body free to twist as
        you fall.
      </p>
    )
  },
  {
    title: 'Chameleon',
    type: 'advantage',
    points: '5 points level',
    description: (
      <p>
        You can change your surface pattern to blend into your surroundings. In any situation where
        being seen is a factor, you get +2 per level to Stealth skill when perfectly still, or +1
        per level if moving. Clothing reduces this bonus to +1 per level when you are motionless,
        with no bonus if you are moving (unless the clothing is, in the GM’s opinion, camouflaged
        relative to your current environment). Chameleon does not normally help in the dark or
        against someone relying upon senses other than sight. However, you can specify that your
        ability is effective against a particular visual or scanning sense (e.g., Infravision or
        Radar) instead of normal vision.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Extended:</i>
          </p>
        ),
        text: (
          <p>
            Your ability affects more than one visual or scanning sense. Each sense beyond the first
            is +20%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Always On:</i>
          </p>
        ),
        text: (
          <p>
            You cannot turn this ability off. Strangers react at -1; the flickering effect is
            irritating. -10%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Channeling',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You can become a conduit for the spirit world, allowing spirits to speak through you.
        <br />
        <br />
        To do so, you must enter a trance, achieved through one minute of concentration and a Will
        roll (at +2 if you have Autotrance, p. 101). You are unaware of the world around you while
        you are in this state.
        <br />
        Once you have entered your trance, any spirit in the immediate vicinity can enter your body
        and use it to speak or write messages.
        <br />
        The GM controls what the spirit does or says. The spirit answers questions put to it by
        others, but it is not bound to tell the truth.
        <br />
        <br /> This is a minor form of possession: the spirit can use your body only to communicate.
        However, if it has the Possession ability (p. 75), it is considered to be touching you, and
        can attempt full possession while you are in a trance. You are considered “wary,” and thus
        get +5 to resist.
      </p>
    )
  },
  {
    title: 'Charisma',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        You have a natural ability to impress and lead others. Anyone can acquire a semblance of
        charisma through looks, manners, and intelligence – but real charisma is independent of
        these things.
        <br />
        <br />
        Each level gives +1 on all reaction rolls made by sapient beings with whom you actively
        interact (converse, lecture, etc.); +1 to Influence rolls (see Influence Rolls, p. 359); and
        +1 to Fortune-Telling, Leadership, Panhandling, and Public Speaking skills.
        <br />
        <br /> The GM may rule that your Charisma does not affect members of extremely alien races.
      </p>
    )
  },
  {
    title: 'Claim to Hospitality',
    type: 'advantage',
    points: '1 to 10 points',
    description: (
      <p>
        You belong to a social group that encourages its members to assist one another. When you are
        away from home, you may call on other members of this group for food, shelter, and basic
        aid.
        <br />
        <br />
        The point cost depends on the extent and wealth of the group. A single friend with a house
        in another city is worth 1 point; a small family, 2 points; a society of merchants along an
        important trade route, 5 points; and a vast alliance of wealthy figures, such as “every
        merchant in the world,” 10 points.
        <br />
        <br />
        In the appropriate situation, members of the group should be easy to find (14 or less after
        1d-1 hours of searching), but the chance of meeting one at random is small (6 or less to
        meet one in a small crowd in an appropriate place).
        <br />
        Claim to Hospitality mainly saves the cost and trouble of finding lodging while “on the
        road” (although if you are wealthy, you might be expected to give gifts to your hosts), but
        there are side benefits. Members of the group are friendly to each other (+3 reactions), and
        may provide advice, introductions, and small loans, if asked.
        <br />
        <br />
        The level of assistance might occasionally approach that of Contacts (p. 44). If you expect
        anything more, though, buy Allies (p. 36) or Patrons (p. 72).
        <br />
        This advantage cuts both ways. If you take it, you can be asked, when at home (at the GM’s
        whim), to provide NPCs with exactly the same sort of hospitality you claim while away. This
        may become an adventure hook! If you refuse such aid, you will eventually get a bad name and
        lose this advantage.
      </p>
    )
  },
  {
    title: 'Clairsentience',
    type: 'advantage',
    points: '50 points',
    description: (
      <p>
        You can displace all of your ranged senses (for humans: sight, hearing, and smell) to a
        point outside your body. This “viewpoint” must be a specific location within 10 yards. You
        can modify this range with Increased Range (p. 106) or Reduced Range (p. 115).
        <br />
        <br />
        You can double your range temporarily by spending 2 FP per minute.
        <br />
        To initiate Clairsentience, pick the desired viewpoint (which can be inside something) and
        its facing, concentrate for one minute, and then make an IQ roll.
        <br />
        If the viewpoint is out of sight, you must specify distance and direction, and the roll is
        at -5.
        <br />
        On a success, you can use your ranged senses as if you were physically present at the
        viewpoint (this means you cannot sense the environment around your body!).
        <br />
        Your vision ignores darkness penalties completely. You cannot see through solid objects, but
        if your viewpoint were inside (for example) a closed chest, you would see what was inside
        despite the lack of light.
        <br />
        <br />
        If you are using or subjected to range-dependent abilities (e.g., spells), calculate all
        ranges from your body, not your viewpoint. You can maintain Clairsentience for as long as
        you like.
        <br />
        On failure by 1, your senses go to some other viewpoint of the GM’s choosing. On any greater
        failure, nothing happens at all.
        <br />
        Critical failure cripples your ability for 1d hours. To return your displaced senses, move
        them elsewhere, or change their facing (usually only important for vision), you must
        concentrate for one second and make another IQ roll. However, a viewpoint inside a moving
        object (e.g., a car) will move with that object with no special concentration on your part.
        You can only have one viewpoint at a time – you cannot put hearing in one location, vision
        in another, etc.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Clairaudience:</i>
          </p>
        ),
        text: <p>Only your sense of hearing is displaced. -30%.</p>
      },
      {
        name: <i>Clairosmia</i>,
        text: <p>Only your sense of smell is displaced. -60%.</p>
      },
      {
        name: <i>Clairvoyance</i>,
        text: <p>Only your sense of sight is displaced. -10%.</p>
      },
      {
        name: <i>ESP</i>,
        text: <p>Your ability is part of the ESP psi power (see p. 255). -10%.</p>
      },
      {
        name: <i>Visible</i>,
        text: <p>Your senses have a visible manifestation – for instance, a floating face. -10%.</p>
      }
    ]
  },
  {
    title: 'Claws',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You have claws. This advantage modifies all your hands and feet; there is no discount for
        claws on only some of your limbs. There are several variations:
      </p>
    ),
    subCategories: [
      {
        name: 'Blunt Claws',
        text: (
          <p>
            Very short claws, like those of a dog. Add +1 per die to the damage you inflict with a
            punch or kick; e.g., 2d-3 becomes 2d-1.
          </p>
        ),
        points: '3 points'
      },
      {
        name: 'Hooves',
        text: (
          <p>
            Hard hooves, like those of a horse. Add +1 per die to the damage you inflict with a
            kick, and give your feet (only) +1 DR.
          </p>
        ),
        points: '3 points'
      },
      {
        name: 'Sharp Claws',
        text: (
          <p>
            Short claws, like those of a cat. Change the damage you inflict with a punch or kick
            from crushing to cutting.
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Talons',
        text: (
          <p>
            Longer claws – up to 12” long. Change the damage you inflict with a punch or kick from
            crushing to your choice of cutting or impaling (choose before you roll to hit).
          </p>
        ),
        points: '8 points'
      },
      {
        name: 'Long Talons',
        text: (
          <p>
            Huge claws, like sword blades extending from your body! Treat these as Talons, but
            damage is +1 per die.
          </p>
        ),
        points: '11 points'
      }
    ]
  },
  {
    title: 'Clerical Investment',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You are an ordained priest of a recognized religion. You enjoy a number of privileges that a
        layman lacks, notably the authority to preside over weddings, funerals, and similar
        ceremonies.
        <br />
        <br />
        This gives you a +1 reaction bonus from co-religionists and those who respect your faith,
        and entitles you to use a title – Father, Sister, Rabbi, etc. Remember that not all clerics
        are “good”! Aka’Ar, high priest of the unholy Cult of Set, is also a vested priest.
        <br />
        <br />
        The blessings and marriages he performs are as meaningful to his followers as those of a
        vicar are to his parish. And – if Set so wills – Aka’Ar can perform exorcisms as potent as
        those of a Christian priest, if not more so. After all, Aka’Ar has a better working
        knowledge of demons . . . Clerical Investment is purely social in nature.
        <br />
        <br /> It does not confer miraculous powers. If you wish to wield divine power by proxy,
        take Blessed (p. 40), Power Investiture (p. 77), or True Faith (p. 94).
      </p>
    ),
    extraText: (
      <strong>
        <i>
          Clerical Investment includes Religious Rank 0 (see p. 30). If you want more influence
          within your church, buy up your Rank.
        </i>
      </strong>
    )
  },
  {
    title: 'Clinging',
    type: 'advantage',
    points: '20 points',
    description: (
      <p>
        You can walk or crawl on walls and ceilings.
        <br />
        You can stop at any point and stick to the surface without fear of falling.
        <br />
        Neither feat requires a roll against Climbing skill, provided the surface is one you can
        cling to. Move while clinging is half your Basic Move.
        <br />
        <br />
        If you are falling and try to grab a vertical surface to break your fall, the GM must first
        decide whether there is anything in reach. If there is, make a DX roll to touch the surface,
        and then make a ST roll at -1 per 5 yards already fallen.
        <br />
        If you succeed, you stop your fall. Otherwise, you continue to fall – but you may subtract 5
        yards from the height of the fall thanks to the slowing effect of the failed Clinging
        attempt.
        <br />
        <br /> Variations in gravity affect these distances; e.g., in 0.5G, the ST roll would be at
        -1 per 10 yards.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Specific:</i>
          </p>
        ),
        text: (
          <p>
            You can only cling to a particular substance. Common materials, such as brick, metal,
            rock, or wood, are -40%; uncommon materials, such as adobe, ice, or rubber, are -60%;
            absurd materials, such as chocolate, are -80%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Combat Reflexes',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You have extraordinary reactions, and are rarely surprised for more than a moment. You get
        +1 to all active defense rolls (see Defending, p. 374), +1 to Fast-Draw skill, and +2 to
        Fright Checks (see Fright Checks, p. 360). You never “freeze” in a surprise situation, and
        get +6 on all IQ rolls to wake up, or to recover from surprise or mental “stun.” Your side
        gets +1 on initiative rolls to avoid a surprise attack – +2 if you are the leader. For
        details, see Surprise Attacks and Initiative (p. 393).
        <br />
        <br />
        Combat Reflexes is included in Enhanced Time Sense (p. 52). If you have ETS, you cannot also
        take Combat Reflexes.
      </p>
    )
  },
  {
    title: 'Common Sense',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        Any time you start to do something the GM feels is STUPID, he will roll against your IQ. A
        successful roll means he must warn you: “Hadn’t you better think about that?” This advantage
        lets an impulsive player take the part of a thoughtful character.
      </p>
    )
  },
  {
    title: 'Compartmentalized Mind',
    type: 'advantage',
    points: '50 points level',
    description: (
      <p>
        Your mental coordination gives you, in effect, more than one mind. Each mind – or
        “compartment” – functions independently and at full capability. Your compartments are
        identical, but hypnotism, magic, psionics, and the like affect them separately (e.g., one
        compartment could be hypnotized without affecting any of the others).
        <br />
        <br />
        This advantage does not allow your body to perform more than one task. A normal character
        may select one maneuver on his turn in combat. This may be physical or mental. Each level of
        Compartmentalized Mind adds one extra mental maneuver to this allotment. For instance,
        Compart - mentalized Mind 1 would let you perform one mental maneuver and one physical
        maneuver (e.g., Concentrate on a spell and Attack) or two mental maneuvers (e.g.,
        Concentrate on two spells), but never more than one physical maneuver – for that, see Extra
        Attack (p. 53). If one compartment is under external influence, roll a Quick Contest of Will
        to see whether it gains control of the body. The compartment currently in control of the
        body rolls at +1.
        <br />
        <br />
        Battling compartments may attempt to use mental powers on each other. Treat them as
        completely separate minds for this purpose, each with your IQ, Will, and mental abilities
        (such as Mind Shield).
        <br />
        <br />
        Two variations on this advantage are available for vehicles built as characters:
      </p>
    ),
    subCategories: [
      {
        name: 'Controls',
        text: (
          <p>
            Controls: Each level buys one set of controls. Controls let an operator perform his own
            physical or mental maneuvers using your abilities (e.g., Innate Attack or Radar), as per
            the rules for vehicular combat (see p. 467). The operator directs all actions of an IQ 0
            vehicle with this advantage. Physical limits still apply; for instance, a vehicle can
            make no more attacks than it has ready weapons. Resolve conflicts between operators by
            rolling a Quick Contest of vehicle operation skill
          </p>
        ),
        points: '25 points level'
      },
      {
        name: 'Dedicated Controls',
        text: (
          <p>
            As Controls, but each set of controls handles a specific task; e.g., “tail gunner.” The
            person manning them can’t operate anything else.
          </p>
        ),
        points: '10 points level'
      }
    ]
  },
  {
    title: 'Constriction Attack',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        Your musculature is optimized for crushing your opponents – whether by “hugging” like a bear
        or constricting like a python. To use this ability, you must first successfully grapple your
        intended victim, whose Size Modifier (p. 19) cannot exceed your own. On your next turn, and
        each successive turn, roll a Quick Contest: your ST vs. your victim’s ST or HT, whichever is
        higher. If you win, your victim takes damage equal to your margin of vic - tory; otherwise,
        he takes no damage.
      </p>
    )
  },
  {
    title: 'Contact Group',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You have a network of Contacts (see Contacts, below) placed throughout a particular
        organization or social stratum. You must specify a corporation, criminal syndicate, military
        unit, police department, or similar organization, or the underworld, merchants, upper class,
        etc. of one particular town. Broader Contact Groups are not allowed.
        <br />
        You may request information from a Contact Group exactly as you would an individual Contact,
        using the same rules for frequency of appearance, effective skill, and reliability. The
        difference is that a Contact Group’s effective skill reflects ability at an entire category
        of skills – e.g., “business skills” if your Contact Group is a corporation, or “military
        skills” if your Contact Group is a military unit – as opposed to one specific skill.
        <br />
        <br />
        You must define this area of knowledge when you purchase the Contact Group, and it must be
        appropriate to the organization. The GM rolls against the group’s effective skill when you
        request any information that it could reasonably provide. However, this is an abstract
        success roll, not a roll against a specific skill. For instance, a police Contact Group
        could provide ballistics comparisons, criminal profiles, legal advice, police records, and
        introductions to criminals. It would not specifically use Forensics, Criminology, Law,
        Administration, or Streetwise skills for this, but the information provided might be
        appropriate to any of these “police skills.”
        <br />
        <br />
        To determine the point cost of a Contact Group, select its effective skill, frequency of
        appearance, and reliability level just as you would for a simple Contact, then multiply the
        resulting cost by 5.
      </p>
    )
  },
  {
    title: 'Contacts',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You have an associate who provides you with useful information, or who does small (pick any
        two of “quick,” “nonhazardous,” and “inexpensive”) favors for you.
        <br />
        The point value of a Contact is based on the skill he uses to assist you, the frequency with
        which he provides information or favors, and his reliability as a person.
        <br />
        <br />
        <strong>Effective Skill of Contact</strong>
        <br />
        <br />
        First, decide on the type of Contact you have. He might be anything from a wino in the right
        gutter to a head of state, depending on your background. What is important is that he has
        access to information, knows you, and is likely to react favorably. (Of course, offering
        cash or favors is never a bad idea; the GM will set the Contact’s “price.”) Next, choose the
        useful skill your Contact provides.
        <br />
        <br />
        This skill must match the Contact’s background; e.g., Finance for a banker or Forensics for
        a lab technician.
        <br />
        Since the GM rolls against this skill when you request aid from your Contact, you should
        select a skill that can provide the results you expect. If you want ballistics comparisons,
        take a Contact with Forensics, not Finance! After that, select an effective skill level.
        <br />
        This reflects the Contact’s connections, other skills, Status, etc. It need not be his
        actual skill level (the GM will set this, if it matters).
        <br />
        For instance, the president of a local steel mill might have business-related skills of
        12-14, but his effective skill might be 18 because of his position in the company. This
        skill level determines the Contact’s base cost:
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong>Effective Skill</strong>
            {'              '}
            <strong>Base Cost</strong>
          </p>
        ),
        text: (
          <p>
            {'        '}12{'        '}
            {'              '}
            {'        '}1 point{'        '}
            <br />
            {'        '}15{'        '}
            {'              '}
            {'        '}2 points{'        '}
            <br />
            {'        '}18{'        '}
            {'              '}
            {'        '}3 points{'        '}
            <br />
            {'        '}21{'        '}
            {'              '}
            {'        '}4 points{'        '}
          </p>
        ),
        points:
          'Add 1 point to these costs for Contacts who can obtain information using supernatural talents (ESP, magical divination, etc.). This is common for spirits, wizards, etc.'
      },
      {
        name: 'Frequency of Appearance',
        text: (
          <p>
            Select a frequency of appearance, as explained under Frequency of Appearance (p. 36),
            and apply its multiplier to the base cost of the Contact. When you wish to reach your
            Contact, the GM rolls against his frequency of appearance.
            <br />
            On a failure, the Contact is busy or cannot be located that day. On a 17 or 18, the
            Contact cannot be reached for the entire adventure! On a success, the GM will roll
            against the Contact’s effective skill once per piece of information or minor favor you
            request.
            <br />
            <br />
            No Contact may be reached more than once per day, even if several PCs share the same
            Contact. If you have several questions to ask, you should have them all in mind when you
            first reach your Contact.
            <br />
            The Contact answers the first question at his full effective skill. Each subsequent
            question is at a cumulative -2. Don’t overuse your Contacts! A Contact can never supply
            information outside his area of knowledge. Use common sense.
            <br />
            <br />
            Likewise, the GM must not allow a Contact to give information that short-circuits an
            important part of the adventure. You must explain how you normally get in touch with
            your Contact. Regardless of frequency of appearance, you cannot reach your Contact if
            those channels are closed.
          </p>
        )
      },
      {
        name: 'Reliability',
        text: (
          <p>
            Contacts are not guaranteed to be truthful. Reliability multiplies the Contact’s point
            cost as follows:
            <br />
            <strong>Completely Reliable:</strong>
            <br />
            <br />
            Even on a critical failure on his effective skill roll, the Contact’s worst response
            will be “I don’t know.” On an ordinary failure, he can find information in 1d days.{' '}
            <strong>x3</strong>.
            <br />
            <strong>Usually Reliable:</strong>
            <br />
            <br />
            On a critical failure, the Contact lies. On any other failure, he doesn’t know now, “. .
            . but check back in (1d) days.” Roll again at that time; a failure then means he can’t
            find out at all. <strong>x2</strong>.
            <br />
            <strong>Somewhat Reliable:</strong>
            <br />
            <br />
            On a failure, the Contact doesn’t know and can’t find out. On a critical failure, he
            lies – and on a natural 18, he lets the opposition or authorities (as appropriate) know
            who is asking questions. <strong>x1</strong>.
            <br />
            <strong>Unreliable:</strong>
            <br />
            <br />
            Reduce effective skill by 2. On any failure, he lies; on a critical failure, he notifies
            the enemy. <strong>x1/2</strong>.<br />
            <i>(round up; minimum final cost is 1 point).</i>
          </p>
        )
      },
      {
        name: 'Money Talks',
        text: (
          <p>
            Bribery, whether cash or favors, motivates a Contact and increases his reliability
            level. Once reliability reaches “usually reliable,” further levels of increase go to
            effective skill; bribery cannot make anyone completely reliable!
            <br />
            <br />A cash bribe should be about equivalent to one day’s income for a +1 bonus, one
            week’s income for +2, one month’s for +3, and one year’s for +4. Favors should be of
            equivalent worth, and should always be something that you actually play out in the game.
            <br />
            <br />
            The bribe must also be appropriate to the Contact.
            <br />A diplomat would be insulted by a cash bribe, but might welcome an introduction
            into the right social circle. A criminal might ask for cash but settle for favors that
            could get you in trouble. A police detective or wealthy executive might simply want you
            to “owe him one” for later . . . which could set off a whole new adventure, somewhere
            down the road.
          </p>
        )
      },
      {
        name: 'Contacts in Play',
        text: (
          <p>
            You may add new Contacts in play, provided you can come up with a good in-game
            justification. The GM might even turn an existing NPC into a Contact for one or more PCs
            – possibly in lieu of character points for the adventure in which the PCs developed the
            NPC as a Contact. For instance, the reward for an adventure in which the party helped
            solve a bank robbery might be a knowledgeable, reliable police Contact.
          </p>
        )
      }
    ]
  },
  {
    title: 'Cultural Adaptability',
    type: 'advantage',
    points: '10 or 20 points',
    description: (
      <p>
        You are familiar with a broad spectrum of cultures. When dealing with those cultures, you
        never suffer the -3 “cultural unfamiliarity” penalty given under Culture (p. 23). This is
        definitely a cinematic ability! Point cost depends on the scope of your familiarity:
      </p>
    ),
    subCategories: [
      {
        name: 'Cultural Adaptability',
        text: <p>You are familiar with all cultures of your race.</p>,
        points: '10 points'
      },
      {
        name: 'Xeno-Adaptability',
        text: <p>You are familiar with all cultures in your game world, regardless of race.</p>,
        points: '20 points'
      }
    ]
  },
  {
    title: 'Cybernetics',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        Treat most cybernetic implants as equivalent advantages: Infravision for a bionic eye,
        Damage Resistance for dermal armor, etc.
        <br />
        <br />
        Some implants may qualify for the Temporary Disadvantage limitation (p. 115); suitable
        temporary disadvantages include Electrical (p. 134) and Maintenance (p. 143). These apply to
        the implant, not to your overall capabilities.
      </p>
    )
  },
  {
    title: 'Damage Resistance',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        Your body itself has a Damage Resistance score. Subtract this from the damage done by any
        physical or energy attack after the DR of artificial armor (you can normally wear armor over
        natural DR) but before multiplying the injury for damage type. By default, natural DR does
        not protect your eyes (or windows, if you are a vehicle) or help against purely mental
        attacks, such as telepathy. Normal humans cannot purchase DR at all.
        <br />
        <br />
        Creatures with natural armor can buy DR 1 to 5. Thick skin or a pelt would be DR 1; pig
        hide, armadillo shell, a heavy pelt, or scales like those of a lizard would be DR 2;
        rhinoceros hide or a pangolin’s armor plates would be DR 3; alligator scales or elephant
        hide would be DR 4; and a giant tortoise would have DR 5.
        <br />
        <br />
        Robots, supers, supernatural entities, etc. can purchase any amount of DR, subject to GM
        approval. Many special modifiers are available to change the basic assumptions of this
        advantage.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Absorption:</i>
          </p>
        ),
        text: (
          <p>
            You can absorb damage and use it to enhance your abilities.
            <br />
            Each point of DR stops one point of damage and turns it into one character point that
            you can use to improve traits (anything but skills) temporarily.
            <br />
            <br />
            You store these points in a “battery” with capacity equal to DR (e.g., DR 10 gives a
            10-point battery). Once this battery is full, each point of DR will still stop one point
            of damage, but will not convert it into a character point.
            <br />
            <br />
            You do not have to use stored points immediately, but you cannot reallocate points once
            used. You lose absorbed points – unused ones first – at the rate of one point per
            second.
            <br />
            You lose enhanced abilities as the points drain away.
            <br />
            (Exception: If you are missing HP or FP, you can heal yourself. Restoring one HP drains
            2 stored points immediately; restoring one FP drains 3 points. Such healing is
            permanent.
            <br />
            <br />
            Only HP or FP in excess of your usual scores drain away.) You cannot absorb damage from
            your own ST or attack abilities. +80% if absorbed points can only enhance one trait
            (determined when you create your character) or can only heal; +100% if you can raise any
            trait.
          </p>
        )
      },
      {
        name: 'Force Field',
        text: (
          <p>
            Your DR takes the form of a field projected a short distance from your body. This
            protects your entire body – including your eyes – as well as anything you are carrying,
            and reduces the damage from attacks before armor DR.
            <br />
            <br />
            Effects that rely on touch (such as many magic spells) only affect you if carried by an
            attack that does enough damage to pierce your DR. +20%.
          </p>
        )
      },
      {
        name: 'Hardened',
        text: (
          <p>
            Each level of Hardened reduces the armor divisor of an attack by one step. These steps
            are, in order: “ignores DR,” 100, 10, 5, 3, 2, and 1 (no divisor). +20% per level.
          </p>
        )
      },
      {
        name: 'Reflection',
        text: (
          <p>
            Your DR “bounces back” any damage it stops at your attacker. The remaining damage
            affects you normally. The attacker doesn’t get an active defense against the first
            attack you reflect back at him, but gets his usual defenses against subsequent reflected
            attacks. Reflection only works vs. direct hits! It cannot reflect damage from
            explosions, fragments, poison gas, or anything else that affects an entire area. This
            enhancement is mutually exclusive with Absorption. +100%.
          </p>
        )
      },
      {
        name: (
          <p>
            <p>
              <strong className="limitation">Special Limitations</strong>
              <br />
              <br />
              <i>Ablative:</i>
            </p>
          </p>
        ),
        text: (
          <p>
            Your DR stops damage once. Each point of DR stops one point of basic damage but is
            destroyed in the process. Lost DR “heals” at the same rate as lost HP (including the
            effects of Regeneration, p. 80). Use this to represent supers who can absorb massive
            punishment but who lack the mass to justify a large HP score. -80%.
          </p>
        )
      },
      {
        name: 'Can’t Wear Armor',
        text: (
          <p>
            Your body is designed in such a way that you cannot or will not wear body armor or
            clothing. -40%
          </p>
        )
      },
      {
        name: 'Directional',
        text: (
          <p>
            Your DR only protects against attacks from one direction. -20% for the front (F); -40%
            for the back (B), right (R), left (L), top (T), or underside (U). Humanoids may only
            take this limitation for front and back.
          </p>
        )
      },
      {
        name: 'Flexible',
        text: (
          <p>
            Your DR is not rigid. This leaves you vulnerable to blunt trauma (see p. 379). -20%.
          </p>
        )
      },
      {
        name: 'Limited',
        text: (
          <p>
            Your DR applies only to certain attack forms or damage types. See Limited Defenses (box)
            for details.
          </p>
        )
      },
      {
        name: 'Partial',
        text: (
          <p>
            Your DR only protects a specific hit location. This is worth -10% per -1 penalty to hit
            that body part (see p. 398). For instance, an animal with butting horns and a thick
            skull might have “Skull only,” for -70%. “Torso only” is -10%, and also protects the
            vital organs.
            <br />
            <br />
            When you take this limitation for arms, legs, hands, or feet, the DR protects all limbs
            of that type. If it only protects one limb, the limitation value doubles (e.g., arms are
            -2 to hit, so a single arm would be -40%).
            <br />
            If you have arms, legs, etc. with different penalties, use the least severe penalty to
            calculate limitation value.
          </p>
        )
      },
      {
        name: 'Semi-Ablative',
        text: (
          <p>
            When an attack strikes semi-ablative DR, every 10 points of basic damage rolled removes
            one point of DR, regardless of whether the attack penetrates DR. Lost DR “heals” as for
            Ablative (and you cannot combine the two). -20%.
          </p>
        )
      },
      {
        name: 'Tough Skin',
        text: (
          <p>
            By default, Damage Resistance is “hard”: armor plate, chitin, etc. With this limitation,
            your DR is merely tough skin. Any effect that requires a scratch (e.g., poison) or skin
            contact (e.g., electrical shockor Pressure Points skill) affects you ifthe attack
            carrying it penetrates theDR of any armor you are wearing –even if it does exactly 0
            damage! Yournatural DR, being living tissue, providesno protection at all against
            suchattacks.This limitation includes allthe effects of the Flexible limitation(see
            above); you cannot take both. Itis mutually incompatible with ForceField. -40%.
          </p>
        )
      },
      {
        name: <strong>&quot;Layered&quot; Defenses</strong>,
        text: (
          <p>
            You may have multiple “layers” of DR with different combinations of modifiers. You must
            specify the order of the layers – from outermost to innermost – when you create your
            character. You may not change this order once set.
          </p>
        )
      }
    ]
  },
  {
    title: 'Danger Sense',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You can’t depend on it, but sometimes you get this prickly feeling right at the back of your
        neck, and you know something’s wrong . . . If you have Danger Sense, the GM rolls once
        against your Perception, secretly, in any situation involving an ambush, impending disaster,
        or similar hazard.
        <br />
        <br />
        On a success, you get enough of a warning that you can take action. A roll of 3 or 4 means
        you get a little detail as to the nature of the danger. Danger Sense is included in
        Precognition (p. 77); if you have the latter trait, you cannot also have Danger Sense.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>ESP</i>
          </p>
        ),
        text: <p>Your ability is part of the ESP psi power (see p. 255). -10%.</p>
      }
    ]
  },
  {
    title: 'Daredevil',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        Fortune seems to smile on you when you take risks! Any time you take an unnecessary risk (in
        the GM’s opinion), you get a +1 to all skill rolls. Furthermore, you may reroll any critical
        failure that occurs during such high-risk behavior.
      </p>
    ),
    subCategories: [
      {
        name: 'Example:',
        text: (
          <p>
            A gang of thugs opens fire on you with automatic weapons. If you crouch down behind a
            wall and return fire from cover, Daredevil gives no bonuses. If you vault over the wall
            and charge the gunmen, screaming, it provides all of its benefits!
          </p>
        )
      }
    ]
  },
  {
    title: 'Dark Vision',
    type: 'advantage',
    points: '25 points',
    description: (
      <p>
        You can see in absolute darkness using some means other than light, radar, or sonar. You
        suffer no skill penalties for darkness, no matter what its origin. However, you cannot see
        colors in the dark.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Color Vision:</i>
          </p>
        ),
        text: <p>You can see colors in the dark. +20%.</p>
      }
    ]
  },
  {
    title: 'Destiny',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        Your fate is preordained. This is considered an advantage if you are destined for great
        things – although this might not always be clear, and might even be inconvenient at times.
        For a disadvantageous Destiny, see p. 131
        <br />
        <br />
        When you choose this advantage, you may only specify its point value. The GM will secretly
        determine the nature of your Destiny, according to its point value and the dictates of the
        campaign. You might discover some clues about your Destiny via magical divination or similar
        techniques, but you are highly unlikely to learn its full extent until it is fulfilled. Note
        also that a Destiny may change as the campaign develops.
        <br />
        <br />
        Be aware that this advantage gives the GM absolute license to meddle with your life – the GM
        mustmake the Destiny work out! Working out a good Destiny and making sure it comes to pass
        require considerable ingenuity on the part of the GM. The GM may wish to forbid this
        advantage if he feels it would send the campaign off the rails.
        <br />
        <br />
        The point value of the Destiny determines its impact:
      </p>
    ),
    subCategories: [
      {
        name: 'Great Advantage',
        text: (
          <p>
            You are fated to achieve greatness within your lifetime. In the end, everyone will know
            and praise your name! Sooner or later, something will happen to bring this Destiny to
            fruition. Note that this does not guarantee “success.”
            <br />
            <br />
            If you choose to jump in front of an assassin’s knife during your first game session,
            the GM might just decide the Destiny is fulfilled . . . you died a hero!
          </p>
        ),
        points: '15 points'
      },
      {
        name: 'Major Advantage',
        text: (
          <p>
            As above, but to a lesser extent. Alternatively, you might be doomed to die in a
            particular place or in a particular fashion: at sea, by the hand of an emperor,
            underground, or whatever. You can be grievously wounded – even maimed – under other
            circumstances, but you will not die.
            <br />
            <br />
            If you avoid the circumstances that would fulfill your Destiny, knowingly or otherwise,
            you might find that Fate has a few surprises. The sea might flood your home while you
            sleep, the general against whom you march might be the future emperor, or Mt. Vesuvius
            might bury you under tons of ash.
          </p>
        ),
        points: '10 points'
      },
      {
        name: 'Minor Advantage',
        text: (
          <p>
            You are fated to play a small part in a larger story, but this part will reflect to your
            credit. In game terms, you are guaranteed one significant victory.
          </p>
        ),
        points: '5 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          If you fulfill your Destiny and survive, it’s over – but you might feel its repercussions
          for years to come. In general, the GM should let you put the character points spent on an
          advantageous Destiny toward a positive Reputation. A Destiny that goes unnoticed once
          fulfilled is not much of a Destiny!
        </i>
      </strong>
    )
  },
  {
    title: 'Detect',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You can detect a specific substance or condition, even when it is shielded from the five
        human senses. This requires one second of concentration, after which the GM will secretly
        make a Sense roll for you (see Sense Rolls, p. 358). The range modifiers from the Size and
        Speed/Range Table (p. 550) apply. You may buy a special Acute Sense (p. 35) to improve the
        roll, thereby increasing your effective range.
        <br />
        <br />
        On a success, the GM tells you the direction to the nearest significant source of the
        substance, and give you a clue as to the quantity present. On a failure, you sense nothing.
        <br />
        <br />
        Detect also includes the ability to analyze what you detect. This requires an IQ roll; the
        better the roll, the more precise the details. For instance, if you had Detect (Metal), you
        could tell gold from iron on a successful IQ roll, and might learn details – such as whether
        the gold is in the form of ore or bars, and its precise purity – on a critical success.
        <br />
        <br />
        The base cost of Detect is as follows:
      </p>
    ),
    subCategories: [
      {
        name: 'Rare',
        text: <p>sorceresses, fire magic, zombies, gold, radar, radio</p>,
        points: '5 points'
      },
      {
        name: 'Occasional',
        text: (
          <p>
            spellcasters, magic, undead, precious metal, electric fields, magnetic fields, radar and
            radio
          </p>
        ),
        points: '10 points'
      },
      {
        name: 'Common',
        text: (
          <p>
            humans, supernatural phenomena, supernatural beings, metal, electric andmagnetic fields
          </p>
        ),
        points: '20 points'
      },
      {
        name: 'Very Common',
        text: <p>all life, all supernaturalphenomena and beings, all minerals, all energy</p>,
        points: '10 points'
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Precise:</i>
          </p>
        ),
        text: (
          <p>
            On a successful Sense roll, you also learn the distance to whatever you detect. +100%.
          </p>
        )
      },
      {
        name: 'Signal Detection',
        text: (
          <p>
            You can detect an active transmission of some sort, such as a radio, radar, or laser;
            see Scanning Sense (p. 81) and Telecommunication (p. 91). You suffer no range penalties,
            but must be within twice the signal’s own range and (if the signal is directional)
            within in its path. +0%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Vague:</i>
          </p>
        ),
        text: (
          <p>
            You can only detect the presence or absence of the target substance. Direction and
            quantity are revealed only on a critical success, and you cannot analyze what you
            detect. This limitation is mutually exclusive with Precise. -50%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Digital Mind',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You are a sentient computer program – possibly an artificial intelligence or an “upload” of
        a living mind. By default, you inhabit a body that includes a computer with Complexity equal
        to at least half your IQ; see Computers (p. 472).
        <br />
        <br />
        You are completely immune to any power defined as “Telepathic,” and to magic spells that
        specifically affect living minds. However, computer viruses and abilities that affect
        Digital Minds can affect you; you can be taken offline (or even stored, unconscious, as
        data); and those with Computer Hacking or Computer Programming skill can gain access to your
        data . . . and possibly read or alter your consciousness!
        <br />
        <br />
        You are likely to have the Machine meta-trait (p. 263), but this is not mandatory, as you
        could be a computer- like mind inside an organic body (e.g., a bio-computer or a brain
        implant). The Reprogrammable disadvantage (p. 150) is also common for Digital Minds, as is
        the Automaton meta-trait (p. 263), but you do not have to possess either trait. Many
        advantages are also possible but not automatic:
      </p>
    ),
    subCategories: [
      {
        name: 'Computing Power',
        text: (
          <p>
            If you operate faster than a human mind, buy Enhanced Time Sense (p. 52). If you can add
            advantages or skills temporarily by running programs, buy Modular Abilities (p. 71).
          </p>
        )
      },
      {
        name: 'Copies',
        text: (
          <p>
            If you can run multiple copies of your mind on a single computer system, buy
            Compartmentalized Mind (p. 43). If you can create loyal copies that run on other
            systems, buy Duplication (p. 50) with the Digital limitation. If you have copies backed
            up offline, buy Extra Life (p. 55).
          </p>
        )
      },
      {
        name: 'Uploading',
        text: (
          <p>
            If you can actively “upload” yourself into other computers, buy Possession (p. 75) with
            the Digital limitation. If you can do this easily, buy extra bodies as Puppets (p. 78).
          </p>
        )
      }
    ]
  },
  {
    title: 'Discriminatory Hearing',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You have a superhuman ability to distinguish between sounds. You can always identify people
        by voice, and can recognize individual machines by their “sound signature.” You may memorize
        a sound by listening to it for at least one minute and making a successful IQ roll. On a
        failure, you must wait at least one full day before making a repeated attempt.
        <br />
        <br />
        You get +4 (in addition to any Acute Hearing bonuses) on any task that utilizes hearing, and
        receive +4 to Shadowing skill when following a noisy target.
        <br />
        <br />
        To simulate the passive sonar used by submarines, add a -30% Acces - sibility limitation,
        “Only underwater.”
      </p>
    )
  },
  {
    title: 'Discriminatory Smell',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        Your sense of smell is far beyond the human norm, and can register distinctive odors for
        practically everything you may encounter. This allows you to recognize people, places, and
        things by scent. You may memorize a scent by sniffing it for at least one minute and making
        a successful IQ roll. On a failure, you must wait at least one full day before making a
        repeated attempt. You get +4 (in addition to any Acute Taste and Smell bonuses) on any task
        that utilizes the sense of smell, and receive +4 to Tracking skill. If you actually become
        ill when exposed to the odor of a particular substance, take the Temporary Disadvantage
        limitation (p. 115). The most common effect is Revulsion (p. 151), but the GM may choose to
        allow other temporary disadvantages.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Emotion Sense:</i>
          </p>
        ),
        text: (
          <p>
            You can detect a person or animal’s emotional state by odor. This functions as the
            Empathy advantage (p. 51), but you must be within 2 yards of the subject. +50%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Discriminatory Taste',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        This talent functions in most ways like Discriminatory Smell (above), but enhances the sense
        of taste instead, so tracking is not possible. You must ingest a small quantity of the
        material to be examined; for a living subject, this means bodily fluids. This gives you an
        IQ roll to r\ecognize the taste, identify whether a substance is safe to eat, etc.
        <br />
        <br />
        You can perform a detailed “analysis” with a roll against a suitable skill (Chemistry,
        Cooking, Pharmacy, Poisons . . .). You get +4 (in addition to any Acute Taste and Smell
        bonuses) on any task that utilizes the sense of taste.
      </p>
    )
  },
  {
    title: 'Doesn’t Breathe',
    type: 'advantage',
    points: '20 points',
    description: (
      <p>
        You do not breathe or require oxygen. Choking and strangulation attempts cannot harm (or
        silence!) you, and you are immune to inhaled toxins. You are still affected by contact
        poisons, pressure, and vacuum; take Sealed (p. 82), Pressure Support (p. 77), and Vacuum
        Support (p. 96), respectively, to resist those threats.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Gills:</i>
          </p>
        ),
        text: (
          <p>
            Gills: You can extract oxygen from water, allowing you to remain submerged indefinitely.
            You suffocate if the water contains no dissolved oxygen. You are immune to strangulation
            and “the bends.” If you can only survive underwater, and suffocate in air as quickly as
            a normal human would drown underwater, Doesn’t Breathe (Gills) is a 0-point feature;
            otherwise, -50%.
          </p>
        )
      },
      {
        name: 'Oxygen Absorption',
        text: (
          <p>
            As Gills, but you can absorb oxygen through the surface of your body whether it is in
            the air, a liquid, or another medium.
            <br />
            <br />
            Your body does not absorb poisonous gases, but you will suffocate if there is no oxygen
            available. You can use breathing equipment in space (your lungs are capable of working
            normally). You may not have the Sealed advantage. -25%.
          </p>
        )
      },
      {
        name: 'Oxygen Combustion',
        text: (
          <p>
            As Oxygen Absorption, but you cannot breathe underwater or anywhere else fire cannot
            burn. -50%.
          </p>
        )
      },
      {
        name: 'Oxygen Storage',
        text: (
          <p>
            You need to breathe, but you can go for extended periods of time without doing so;
            perhaps you store oxygen (like a whale) or have superior blood oxygenation. This differs
            from Breath-Holding in that you are completely immune to “the bends” while your oxygen
            supply holds out. If you can effectively “hold your breath” for 25 times as long as
            usual, this is -50%; 50 times, -40%; 100 times, -30%; 200 times, -20%; 300 times, -10%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Doesn’t Eat or Drink',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You do not require food, water, or fuel. Your body is powered in some other manner: solar
        power, ambient magical energy, etc. A sufficiently rare energy source might qualify you for
        Dependency (p. 130).
      </p>
    )
  },
  {
    title: 'Doesn’t Sleep',
    type: 'advantage',
    points: '20 points',
    description: (
      <p>
        You do not have to sleep at all. You can ignore all ill effects from missed nights of rest.
      </p>
    )
  },
  {
    title: 'Dominance',
    type: 'advantage',
    points: '20 points',
    description: (
      <p>
        You can “infect” others with a supernatural condition – vampirism, lycanthropy, etc. – and
        exert absolute control over them. This trait is only appropriate for supernatural beings
        that spread their “curse” through infection, and only affects members of susceptible races
        (typically your original race and very similar races). The GM is the judge of which curses
        are spread this way and who is susceptible.
        <br />
        <br />
        When you buy Dominance, you must specify one natural attack – Claws, Innate Attack, Vampiric
        Bite, etc. – that delivers the infection. Anyone you damage this way must roll 3d vs. the HP
        of injury he received (maximum one roll per day). If he rolls under the damage amount, he
        becomes infected, and will change into the same kind of creature as you in 2d days, or at
        the GM’s discretion, without suitable supernatural intervention. The GM is free to impose
        <br />
        <br />
        additional conditions for infection; for instance, the victim might have to suffer three
        attacks, or share your blood, or even die before making the roll above.
        <br />
        <br />
        Once the transition is complete, the victim acquires your supernatural racial template
        (Vampire, Werewolf, etc.) plus Slave Mentality (p. 154). He becomes your subordinate. If he
        goes on to infect others, his victims will acquire the same traits and serve you as well.
        <br />
        <br />
        Dominance itself costs 20 points, but to control a new victim, you must have sufficient
        unspent points to buy him as an Ally (p. 36) with the enhancements “Minion” (due to his
        Slave Mentality) and “Special Abilities” (because he can create new servitors for you). You
        can choose any frequency of appearance, and may improve this later on with earned points. If
        you lack the points to buy your victim as an Ally – even at a frequency of “6 or less” – he
        will still be infected but he will not become your slave.
        <br />
        <br />
        Dominance persists until you die (truly die, for undead), or your slave grows in power and
        you cannot (or choose not to) spend the points to keep him as an Ally, or the GM rules the
        curse is broken via supernatural means. If any of these things occur, your victim will lose
        Slave Mentality and become free-willed. You may use the points spent on your former Ally to
        dominate new victims.
        <br />
        <br />
        See Infectious Attack (p. 140) for the disadvantageous form of Dominance.
      </p>
    )
  },
  {
    title: 'Duplication',
    type: 'advantage',
    points: '35 points/copy',
    description: (
      <p>
        You can split into two or more bodies (“Dupes”), each possessing your full knowledge and
        powers (but not copies of your equipment, unless you buy a special enhancement). It takes
        one second and a Concentrate maneuver to separate or merge.
        <br />
        <br />
        When your Dupesmerge, your FP and HP are the average of all your copies’ FP and HP at that
        time. Your combined self remembers everything experienced by any Dupe. Dupes have no special
        ability to coordinate with one another. For that, buy Telesend (see Telecommunication, p.
        91). If your Telesend works only with your Dupes, you may take the Racial limitation. You
        may combine Telesend with a Mindlink (p. 70) with your Dupes, in which case you are in
        constant telepathic contact – no die rolls required.
        <br />
        <br />
        If one of your Dupes dies, all the others immediately take 2d damage and are stunned. This
        is mental stun if you define Duplication as a mental trait, physical stun if you define it
        as a physical trait.
        <br />
        <br />
        The IQ or HT roll to recover is at -6. You also lose the points you spent for that Dupe. The
        GM may allow you to buy back a dead Dupe with unspent points. Alternatively, an Extra Life
        (p. 55) will let you bring back any one dead Dupe.
        <br />
        Your point value drops by the price of the Extra Life, but this is cheaper than buying back
        a Dupe.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Duplicated Gear:</i>
          </p>
        ),
        text: (
          <p>
            Your Dupes appear with copies of Signature Gear (p. 85) that you are carrying or
            wearing. Duplicated equipment vanishes when you merge, even if it becomes separated from
            you. Treat your equipment’s HP, ammunition, energy supply, etc. just like your own HP
            and FP when you merge. +100%.
          </p>
        )
      },
      {
        name: 'No Sympathetic Injury',
        text: <p>If one of your Dupes is killed, the others are not stunned or hurt. +20%.</p>
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Digital:</i>
          </p>
        ),
        text: (
          <p>
            Your Dupes are software copies of your mind, not physical copies of your body. They can
            possess other computers or occupy spare Puppets (p. 78). You may only take this
            limitation if you have both Digital Mind (p. 48) and Possession (Digital) (p. 75). -60%.
          </p>
        )
      },
      {
        name: 'Shared Resources',
        text: (
          <p>
            Your Dupes do not share your full FP and HP; instead, you must distribute your FP and HP
            among them. For instance, if you had 15 HP and one Dupe, you could split your HP 7 and
            8, 2 and 13, or in any other combination that totaled 15.
            <br />
            <br />
            You need not distribute FP and HP proportionally; with 15 HP and 15 FP, you could give
            one copy 3 FP and 9 HP and the other 12 FP and 6 HP. When your bodies re-combine, add
            their FP and HP instead of averaging. -40%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Eidetic Memory',
    type: 'advantage',
    points: '5 or 10 points',
    description: (
      <p>
        You have an exceptionally good memory. Anyone may attempt an IQ roll to recall the general
        sense of past events – the better the roll, the truer the memory, but the details are
        sketchy. With this talent, you automatically succeed at these “memory rolls,” and you often
        recall precise details. This trait comes in two levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Eidetic Memory',
        text: (
          <p>
            You automatically remember the general sense of everything you concentrate on, and can
            recall specific details by making an IQ roll. It is possible to “learn” this advantage
            in play (bards and skalds often acquire it to recall poems and songs).
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Photographic Memory',
        text: (
          <p>
            As above, but you automatically recall specific details, too. Any time you, the player
            forget a detail your character has seen or heard, the GM or other players must remind
            you – truthfully!
          </p>
        ),
        points: '10 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          This trait affects recall, not comprehension, and so does not benefit skills.
          <br />
          However, it gives a bonus whenever the GM requires an IQ roll for learning: +5 for Eidetic
          Memory, +10 for Photographic Memory.
        </i>
      </strong>
    )
  },
  {
    title: 'Elastic Skin',
    type: 'advantage',
    points: '20 points',
    description: (
      <p>
        You can alter your skin and facial features (but not clothing or makeup) to duplicate those
        of another member of your race or a very similar race.
        <br />
        This takes 10 seconds, and requires a Disguise roll if you try to duplicate a particular
        individual. It takes three seconds to return to your original form. This ability gives +4 to
        all Disguise rolls.
      </p>
    )
  },
  {
    title: 'Empathy',
    type: 'advantage',
    points: '5 or 15 points',
    description: (
      <p>
        You have a “feeling” for people. When you first meet someone – or are reunited after an
        absence – you may ask the GM to roll against your IQ. He will tell you what you “feel” about
        that person. On a failed IQ roll, he will lie!This talent is excellent for spotting
        impostors, possession, etc., and for determining the true loyalties of NPCs.
        <br />
        <br />
        You can also use it to determine whether someone is lying . . . not what the truth is, but
        just whether they are being truthful with you. This advantage comes in two levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Sensitive',
        text: (
          <p>
            Your ability is not entirely reliable; the IQ roll is at -3. You get +1 to your Detect
            Lies and Fortune- Telling skills, and to Psychology rolls to analyze a subject you can
            converse with.
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Empathy',
        text: (
          <p>
            Your ability works at full IQ, and the bonus to Detect Lies, Fortune-Telling, and
            Psychology is +3.
          </p>
        ),
        points: '15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          This advantage works only on sapient (IQ 6+), natural beings. The equivalent talents for
          animals, plants, and supernatural entities are Animal Empathy (p. 40), Plant Empathy (p.
          75), and Spirit Empathy (p. 88), respectively.
        </i>
      </strong>
    )
  },
  {
    title: 'Enhanced Defenses',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You are unusually adept at evading attacks! This may be due to careful observation of your
        foe, focusing chi, or anything else that fits your background. There are three versions:
      </p>
    ),
    subCategories: [
      {
        name: 'Enhanced Block',
        text: (
          <p>
            You have +1 to your Block score with either Cloak or Shield skill. You must specialize
            in one particular Block defense.
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Enhanced Dodge',
        text: <p>You have +1 to your Dodge score</p>,
        points: '15 points'
      },
      {
        name: 'Enhanced Parry',
        text: (
          <p>
            You have +1 to your Parry score. You may take this advantage for bare hands (5 points),
            for any one Melee Weapon skill (5 points), or for all parries (10 points).
          </p>
        ),
        points: '5 or 10 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          This talent is definitely cinematic! The GM might require Trained By A Master (p. 93) or
          Weapon Master (p. 99) as a prerequisite.
          <br />
          <br />
          He may choose to allow warriors to buy this trait with earned points. He might even permit
          multiple levels of each Enhanced Defense, in which case the point cost is per +1 bonus.
          <br />
          <br />
          Note that bonuses larger than +3 are almost certainly unbalanced, even in “over-thetop”
          games!
        </i>
      </strong>
    )
  },
  {
    title: 'Enhanced Move',
    type: 'advantage',
    points: '20 points/level',
    description: (
      <p>
        You can really move! Each level of Enhanced Move doubles your top speed in one environment:
        Air, Ground, Space, or Water. You may also take a half-level of Enhanced Move, either alone
        or with any whole number of levels; this costs 10 points and multiplies Move by 1.5.
        <br />
        <br />
        Your multiplied Move is your top speed. Record it in parentheses after your Enhanced Move
        trait; for instance, the super in the example above would write “Enhanced Move 4 (Ground
        Speed 128).” You can always choose to accept a slightly lower top speed if you want your
        speed to match that of a real-world or fictional creature or vehicle with a known top speed.
        This does not give you back any points.
        <br />
        <br />
        Enhanced Move does not affect Basic Speed, Basic Move, or Dodge. Its benefits apply only
        when moving along a relatively straight, smooth course (see Sprinting, p. 354). It does have
        some defensive value, however: those who attack you with ranged attacks must take your speed
        into account when calculating speed/range modifiers (see p. 550).
        <br />
        <br />
        Most forms of Enhanced Move have prerequisites. Enhanced Move (Water) requires Amphibious
        (p. 40) or Aquatic (p. 145). Enhanced Move (Air) requires Flight (p. 56).
        <br />
        <br />
        Enhanced Move (Space) requires Flight with the Space Flight or Newtonian Space Flight
        enhancement, and affects movement in space – not airspeed. To move faster in air and in
        space, buy both Enhanced Move (Air) and Enhanced Move (Space).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Handling Bonus:</i>
          </p>
        ),
        text: (
          <p>
            You get a bonus to DX or vehicle operation skill (e.g., Driving) for the sole purpose of
            maintaining control at speeds above your Basic Move. +5% per +1, to a maximum of +5.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Handling Penalty</i>
          </p>
        ),
        text: (
          <p>
            You have a penalty to DX or vehicle operation skill at high speeds. -5% per -1, to a
            maximum of -5.
          </p>
        ),
        points: 'points'
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Newtonian</i>
          </p>
        ),
        text: (
          <p>
            This is a limitation for Enhanced Move (Space). Your space “top speed” is actually your
            “delta-v”: the total velocity change you can manage before running out of reaction mass.
            Once you have made velocity changes equal to your top speed, you must refuel before you
            can change velocity again. -50%..
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Road-Bound</i>
          </p>
        ),
        text: (
          <p>
            This is a limitation for Enhanced Move(Ground). Your Enhanced Move is effective only on
            a smooth, flat surface, such as a road or building floor. This is often taken in
            conjunction with the Wheeled disadvantage (p. 145). -50%.
          </p>
        ),
        points: 'points'
      }
    ]
  },
  {
    title: 'Enhanced Time Sense',
    type: 'advantage',
    points: '45 points',
    description: (
      <p>
        You can receive and process information dramatically faster than the human norm. This
        improves your mental speed – notably your reaction time – but not how fast you physically
        move once you react. This has several game benefits.
        <br />
        <br />
        First, Enhanced Time Sense (ETS) includes Combat Reflexes (p. 43), and provides all the
        benefits of that advantage. You cannot buy Combat Reflexes if you have ETS; the two
        advantages are not cumulative.
        <br />
        <br />
        In combat, you automatically act before those without ETS, regardless of Basic Speed. If
        more than one combatant has ETS, they act in order of Basic Speed, and they all get to act
        before those who lack ETS.
        <br />
        <br />
        You can perceive things that happen too fast for most people to discern. For example, you
        cannot be fooled by a projected image, because you can see the individual frames of the
        film. If secret information is being sent as a high-speed “burst,” you can detect it if
        you’re monitoring the transmission (you cannot necessarily decipher it, but you know it’s
        there).
        <br />
        <br />
        At the GM’s discretion, you get a Sense roll to spot objects moving so fast that they are
        effectively invisible; for instance, bullets in flight. ETS is extremely valuable if you
        possess magical or psionic defenses that work at the speed of thought.
        <br />
        <br />
        If you have ETS, your rapid thought processes always allow you to ponder a problem
        thoroughly and respond in the manner you think best. You never suffer skill penalties for
        being mentally “rushed” – although you still need the usual amount of time to complete a
        physical task, and suffer the usual penalties for hasty work. The GM can almost never tell
        you to make up your mind right now.
        <br />
        <br />
        (But don’t abuse this privilege by taking half an hour to decide what to do in each turn in
        combat!) The exception is when something happens so fast that most people can’t perceive it
        at all. In that case, the GM is justified in asking you for an immediate response, since
        those without ETS get no response.
        <br />
        <br />
        ETS does not “slow down” the world from your viewpoint. You can still enjoy a movie by
        simply ignoring the frames, much as a literate person can choose whether or not to notice
        the individual letters in the words he’s reading. ETS also does not let you violate the laws
        of physics. Some things (e.g., laser beams) simply travel too fast for you to react.
      </p>
    )
  },
  {
    title: 'Enhanced Tracking',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        You can “track” more than one target – whether with a built-in sensor array or eyes that can
        swivel independently, like those of a chameleon. An Aim (p. 364) or Evaluate (p. 364)
        maneuver normally applies to a single target. Each level of Enhanced Tracking allows your
        maneuver to apply to one additional target.
        <br />
        <br />
        You can only track targets that you can detect, and you cannot Aim at more targets than you
        have ready weapons to Aim with.
      </p>
    )
  },
  {
    title: 'Extended Lifespan',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        An average life cycle is defined as maturity at age 18, with aging effects (see p. 444)
        starting at age 50 and accelerating at ages 70 and 90. Each level of Extended Lifespan
        doubles all these values.
        <br />
        <br />
        Note that if you need to take more than seven levels of this trait (giving maturity at age
        2,304 and the onset of aging at age 6,400), it is more efficient to take Unaging (p. 95).
      </p>
    )
  },
  {
    title: 'Extra Arms',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        In GURPS, a limb with which you can manipulate objects is an arm, regardless of where it
        grows or what it looks like. A normal arm can strike a blow that inflicts thrust-1 crushing
        damage based on ST. The human norm is two arms for 0 points. Extra arms have a base cost of
        10 points apiece.
      </p>
    ),
    subCategories: [
      {
        name: 'Coordination',
        text: (
          <p>
            You can use extra arms freely for multiple noncombat tasks. For instance, with three
            arms, you could perform a one-handed task (e.g., use a computer mouse) and a two-handed
            task (e.g., type) simultaneously. You need Enhanced Tracking (p. 53) to perform tasks
            that require attention to events in more than one place at a time, however.
            <br />
            <br />
            You can also use all of your arms in concert for a single combat maneuver where extra
            arms would be helpful; e.g., grappling in close combat. And if you have at least three
            arms, you can use a shield normally with one arm and still wield a two-handed weapon,
            just as a normal human fighter can use a shield and one-handed weapon at the same time.
            <br />
            <br />
            No matter how many arms you have, though, you do not get additional attacks (or other
            extra maneuvers) in combat unless you buy Extra Attacks (see below).
          </p>
        )
      },
      {
        name: 'Close Combat With Extra Arms',
        text: (
          <p>
            Extra arms give a huge advantage in close combat. You cannot punch with more than one
            arm at a time unless you have Extra Attack, but you may grapple with all of your arms at
            once. Each extra arm of regular length or longer, over and above the generic set of two,
            gives +2 to any attempt to grapple or break free from a grapple.
            <br />
            Having more arms than your opponent also gives +3 on any attempt to pin or resist a pin.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Extra-Flexible</i>
          </p>
        ),
        text: (
          <p>
            Limbs with this enhancement are more flexible than human arms, like tentacles or an
            elephant’s trunk. These limbs can always reach and work with other limbs, regardless of
            body positioning, general layout, or “right” and “left.” +50%.
          </p>
        )
      },
      {
        name: 'Long',
        text: (
          <p>
            Your arm is longer in proportion to your body than a human arm relative to the human
            body. This increases your effective SM for the purpose of calculating reach with that
            arm (see Size Modifier and Reach, p. 402). This does affect the reach of melee weapons
            wielded in that hand. Each +1 to SM also adds +1 per die to swinging damage. +100% per
            +1 to SM.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Foot Manipulators</i>
          </p>
        ),
        text: (
          <p>
            Your “arm” is really an unusually dextrous leg. You cannot walk while you are
            manipulating objects with it (although you can sit, float, or fly).
            <br />
            <br />
            This is a Temporary Disadvantage limitation, the disadvantage being Legless (p. 141).
            This kind of arm is usually – but not always – Short (see below). -30%.
          </p>
        )
      },
      {
        name: 'No Physical Attack',
        text: (
          <p>
            The limb can manipulate but cannot punch or wield melee weapons, and gives no bonus in
            close combat. It can still wield a firearm or similar ranged weapon. -50%.
          </p>
        )
      },
      {
        name: 'Short',
        text: (
          <p>
            The arm has reach “C” (close combat only), and lacks the leverage to use any weapon that
            must be swung. Subtract one yard from the reach of any melee weapon wielded by that
            limb. If all of your arms are short, you are at -2 on any attempt to grapple. -50%.
          </p>
        )
      },
      {
        name: 'Weak',
        text: (
          <p>
            The arm has less than your full body ST for lifting, striking, and grappling. -25% if
            the arm has half your body ST, or -50% if it has 1/4 your body ST (round down in both
            cases).
          </p>
        )
      },
      {
        name: 'Weapon Mount',
        text: (
          <p>
            Instead of an arm, you have a “hardpoint” where you can mount a weapon. This may be
            biological, mechanical, or a hybrid of the two, depending on whether you are a living
            being, a machine, or a cyborg. You cannot use this mount for any purpose other than
            bearing a weapon. This limitation is incompatible with Feet Manipulator, No Physical
            Attack, Short, and Weak. -80%.
          </p>
        )
      },
      {
        name: 'Modifying Beings With One or Two Arms',
        text: (
          <p>
            Beings with one or two arms can use the special modifiers above. Point cost is equal to
            1/10 the percentile modifier per affected arm. Thus, enhancements become advantages and
            limitations become disadvantages.
            <br />
            <br />
            For instance, Short is -50%, so it is worth -5 points per arm. Someone with two short
            arms would have a -10- point disadvantage. Those with one arm can only apply these
            modifiers once, but also get the -20 points for One Arm (p. 147). For instance, an
            elephant’s trunk would be Extra-Flexible (+50%), Long (+100%), and Weak (-50%).
            <br />
            <br />
            These modifiers total +100%, for a 10-point advantage. The -20 points for One Arm would
            make the net cost -10 points.
          </p>
        )
      }
    ]
  },
  {
    title: 'Extra Attack',
    type: 'advantage',
    points: '25 points/attack',
    description: (
      <p>
        You can attack more than once per turn. The “default” assumption in GURPS is that you can
        make one attack per turn, no matter how many limbs you have. Each Extra Attack allows one
        additional attack per turn. You may not have more attacks than you have limbs (arms, legs,
        etc.), natural weapons (Strikers, Teeth, etc.), and attack powers (Afflictions, Bindings,
        and Innate Attacks) with which to attack. The GM’s word on what constitutes an “attack” is
        final.
        <br />
        <br />A normal human can purchase one Extra Attack. This lets him attack with both hands at
        once, and represents unusually good coordination. Supers and nonhumans have no such
        limitation.
        <br />
        <br />
        A super-powered cop could buy two Extra Attacks, enabling him to shoot rays from his eyes,
        fire his pistol, and swing his nightstick all at once.
        <br />
        <br />A dragon might take four Extra Attacks and attack five times with any combination of
        his four clawed limbs, teeth, horns, tail, and fiery breath! Extra Attack is exactly that:
        an extra Attack maneuver on your turn in combat. It does not eliminate the -4 penalty for an
        “off” hand (see Ambidexterity, p. 39) or let you take multiple Aim maneuvers (see Enhanced
        Tracking, p. 53).
        <br />
        <br />
        You may use some of your attacks for Feint maneuvers, but you many not take multiple actions
        of other kinds – that requires Altered Time Rate (p. 38).
      </p>
    ),
    subCategories: [
      {
        name: 'Extra Attacks and All-Out Attack',
        text: (
          <p>
            When an individual with Extra Attacks makes an All-Out Attack, he must select one type
            of bonus for all his attacks that turn. He could not, for instance, take All-Out Attack
            (Determined) with one attack and All- Out Attack (Strong) with another.
            <br />
            If he chooses All-Out Attack (Double) to increase his number of attacks, he gets one
            additional attack.
          </p>
        )
      },
      {
        name: 'Extra Attacks and Rapid Strike',
        text: (
          <p>
            You may use one of your melee attacks to make a Rapid Strike (see p. 370) on your turn,
            at the usual penalty. Your remaining attacks are in addition to this Rapid Strike, and
            receive no penalty. You may not use Rapid Strike with two or more attacks in one turn.
          </p>
        )
      }
    ]
  },
  {
    title: 'Extra Head',
    type: 'advantage',
    points: '15 points/level',
    description: (
      <p>
        You have more than one head, each with fully functional ears, eyes, mouth, etc. Each Extra
        Head gives you one Extra Mouth (p. 55) and one level of Enhanced Tracking (p. 53) at no
        extra charge.
        <br />
        Each head also contains an extra brain with a complete copy of your memories, personality,
        and skills. These extra brains are “backups,” however, and do not grant additional mental
        actions – for that, take Compartmentalized Mind (p. 43). You cannot suffer more than 2 x
        (your HP/number of heads) points of injury from any single attack to your head or neck. Any
        head blow that causes unconsciousness only knocks out that one head; the others continue to
        function! A critical head blow that would normally kill you simply destroys that head,
        inflicting the maximum injury noted above and crushing, severing, or exploding the head
        (GM’s option).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Extraneous</i>
          </p>
        ),
        text: (
          <p>
            Your Extra Head grants Extra Mouth and Enhanced Tracking, but does not contain a backup
            brain. A single blow to an Extraneous head can do no more than HP/(1.5 x number of
            heads) points of injury, but blows to your real head can cause stun, knockout, or death
            even if your other heads are unharmed. -20%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Extra Legs',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        If you can walk on a limb but cannot use it to manipulate objects, it is a leg in GURPS (for
        legs that double as arms, see Extra Arms, p. 53). A normal leg can kick for thrust/crushing
        damage at your usual reach (1 yard for a human).
        <br />
        The human norm is two legs, which costs 0 points. It costs points to have more than two
        legs:
      </p>
    ),
    subCategories: [
      {
        name: 'Three or four legs',
        text: (
          <p>
            If you lose a leg, you can continue to move at half Move (round down). Loss of a second
            leg causes you to fall.
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Five or six legs',
        text: (
          <p>
            Each leg lost reduces Move by 20% until only three legs are left. At that point, your
            Move is 40% normal. Loss of another leg causes you to fall.
          </p>
        ),
        points: '10 points'
      },
      {
        name: 'Seven or more legs',
        text: (
          <p>
            Each leg lost reduces Move by 10% until only three legs are left. At that point, your
            Move is 40% normal. Loss of another leg causes you to fall.
          </p>
        ),
        points: '15 points'
      },
      {
        name: (
          <p>
            <strong className="enhancement">
              You can apply the following modifiers to all your legs:
              <br />
              <br />
              Special Enhancements
            </strong>
            <br />
            <br />
            <i>Long</i>
          </p>
        ),
        text: (
          <p>
            Your legs are longer in proportion to your body than human legs relative to the human
            body. This increases your effective SM for the purpose of calculating reach when kicking
            (see Size Modifier and Reach, p. 402) and when clambering over obstacles. +100% per +1
            to SM.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Cannot Kick</i>
          </p>
        ),
        text: <p>You cannot use your legs to kick for damage. -50%.</p>
      },
      {
        name: 'Modifying Beings With Two Legs',
        text: (
          <p>
            The modifiers above can be applied to creatures with only two legs. Point cost is equal
            to 1/10 the percentile modifier. For instance, a human with Cannot Kick (-50%) would
            have a -5- point disadvantage.
          </p>
        )
      }
    ]
  },
  {
    title: 'Extra Life',
    type: 'advantage',
    points: '25 points/life',
    description: (
      <p>
        You can come back from the dead! No matter how sure your foes were that they killed you, you
        didn’t really die. Work out the details with the GM. Every time you come back from the dead,
        you use up one Extra Life – remove it from your character sheet and reduce your point total
        by 25 points.
        <br />
        <br />
        The GM may wish to let players spend earned points to buy Extra Lives in play.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Copy</i>
          </p>
        ),
        text: (
          <p>
            When you die, you revert to a “backup copy.” To create this copy takes minutes or hours,
            possibly at a special facility. Details are up to the GM. Make a copy of your character
            sheet whenever you update your backup.
            <br />
            <br />
            If you die, you revert to those statistics, losing any traits or character points
            acquired since then. Note that a copy exists before you die. You must tell the GM where
            you store it.
            <br />
            <br />
            You will return to life at that location . . . and if your enemies discover where you
            store your copy, they may tamper with it! -20%.
          </p>
        )
      },
      {
        name: 'Requires Body',
        text: (
          <p>
            You come back in disembodied state – for instance, as a spirit or a digital copy on a
            computer. All your experiences and abilities are intact (unless you took Copy), but you
            cannot interact with the physical world at all until you acquire a new body.
            <br />
            <br />
            be a clone, an undead corpse, or even a robot “shell.” -20%, or -40% if the required
            body is illegal, rare, or expensive (GM’s decision).
          </p>
        )
      }
    ]
  },
  {
    title: 'Extra Mouth',
    type: 'advantage',
    points: '5 points/mouth',
    description: (
      <p>
        You have more than one functional mouth, which can be anywhere on your body. All of your
        mouths are capable of breathing, eating, and speaking. An Extra Mouth lets you bite more
        than once if you have Extra Attacks (p. 53).
        <br />
        <br />
        If you have Compartmentalized Mind (p. 43), you can carry on multiple conversations, or cast
        two spells that require spoken words. Other benefits include being hard to silence or
        suffocate, and being able to sing in harmony with yourself!
      </p>
    )
  },
  {
    title: 'Favor',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You saved someone’s life, kept silent at the right time, or otherwise did someone a good
        turn. Now he owes you one.
        <br />
        <br />
        A Favor is a one-shot Ally, Contact, Contact Group, or Patron. Work out the point cost of
        the parent advantage, and then divide it by 5 (round up) to get the cost of the Favor. The
        catch is that the NPC(s) in question will help you out once . . . and only once.
        <br />
        <br />
        When you wish to “collect” on your Favor, the GM rolls against the frequency of appearance
        of the underlying advantage. On a failure, you couldn’t reach your “friend” in time, or he
        couldn’t comply, but you still have your Favor coming. You may try again on a later
        adventure.
        <br />
        <br />
        On a success, you get what you want (subject to the limits of the advantage). But this
        discharges the obligation: remove the Favor from your character sheet and reduce your point
        total appropriately.
        <br />
        <br />
        However, if the roll is a 3 or 4, your “friend” still feels indebted to you, and you retain
        the Favor . . . at least until next time. You may buy a Favor in play, just like any trait
        of this kind. The GM may also wish to include a Favor as part of the reward for a successful
        adventure.
      </p>
    )
  },
  {
    title: 'Fearlessness',
    type: 'advantage',
    points: '2 points level',
    description: (
      <p>
        You are difficult to frighten or intimidate! Add your level of Fearlessness to your Will
        whenever you make a Fright Check or must resist the Intimidation skill (p. 202) or a
        supernatural power that induces fear.
        <br />
        <br />
        You also subtract your Fearlessness level from all Intim - idation rolls made against you.
      </p>
    )
  },
  {
    title: 'Filter Lungs',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        Your respiratory system can filter out ordinary contaminants; e.g., dust, pollen, smoke, and
        even tear gas (but not nerve gas or other contact agents). You suffer no ill effects from
        such things.
        <br />
        <br />
        This is especially useful in polluted cities and on alien worlds. Note that if you have
        Doesn’t Breathe (p. 49), you do not need this advantage!
      </p>
    )
  },
  {
    title: 'Fit',
    type: 'advantage',
    points: '5 or 15 points',
    description: (
      <p>
        You have better cardiovascular health than your HT alone would indicate. This comes in two
        levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Fit',
        text: (
          <p>
            You get +1 to all HT rolls (to stay conscious, avoid death, resist disease or poison,
            etc.).
            <br />
            <br />
            This does not improve your HT attribute or HTbased skills! You also recover FP at twice
            the normal rate.
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Very Fit',
        text: (
          <p>
            As above, but the bonus to HT rolls is +2. In addition, you lose FP at only half the
            normal rate
          </p>
        ),
        points: '15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          In both cases, this advantage applies only to FP lost to exertion, heat, etc. It has no
          effect on FP spent to power psi or magic spells.
        </i>
      </strong>
    )
  },
  {
    title: 'Flexibility',
    type: 'advantage',
    points: '5 or 15 points',
    description: <p>Your body is unusually flexible. This advantage comes in two levels:</p>,
    subCategories: [
      {
        name: 'Flexibility',
        text: (
          <p>
            You get +3 on Climbing rolls; on Escape rolls to get free of ropes, handcuffs, and
            similar restraints; on Erotic Art skill; and on all attempts to break free in close
            combat (see p. 391).
            <br />
            <br />
            You may ignore up to -3 in penalties for working in close quarters (including many
            Explosives and Mechanic rolls).
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Double Jointed',
        text: (
          <p>
            As above, but more so. You cannot stretch or squeeze yourself abnormally, but any part
            of your body may bend any way. You get +5 on Climbing, Erotic Art, and Escape rolls, and
            on attempts to break free.
            <br />
            <br />
            You may ignore up to -5 in penalties for close quarters
          </p>
        ),
        points: '15 points'
      }
    ]
  },
  {
    title: 'Flight',
    type: 'advantage',
    points: '40 points',
    description: (
      <p>
        You can fly. The “default” is fullfledged, self-powered flight without wings or gliding
        surfaces. This works at any altitude where there is still significant atmosphere – but in
        the upper atmosphere, you’ll need a way to survive in very thin, cold air (e.g., Doesn’t
        Breathe and Temperature Tolerance). You cannot fly in a trace atmosphere or vacuum.
        <br />
        <br />
        Your flight Move is Basic Speed x 2 (drop all fractions). As explained in Move in Other
        Environments (p. 18), you can adjust this for ±2 points per ±1 yard/second. For very high
        speeds, take Enhanced Move (Air). If you do not have any of the Controlled Gliding, Gliding,
        Lighter Than Air, Small Wings, Space Flight Only, or Winged Flight limitations, you can also
        “fly” at half-speed underwater. Flight includes the ability to hover at Move 0 as well.
        <br />
        <br />
        Flight does not confer the ability to do complex acrobatics and tight turns; for that, buy
        Aerobatics skill (p. 174). Flight skill (p. 195) improves endurance.
        <br />
        <br />
        You can alter most of the above assumptions through special modifiers.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Newtonian Space Flight:</i>
          </p>
        ),
        text: (
          <p>
            As Space Flight (below), except that your space Move – or your space top speed, if you
            have Enhanced Move (Space) – is actually your “delta-v”: the total velocity change you
            can manage in space before running out of reaction mass. For instance, you could
            accelerate up to your delta-v and stay there (like a missile), or to half your delta-v
            and then decelerate to a stop at the end of your trip (like a conventional spacecraft).
            <br />
            <br />
            Once you have made velocity changes equal to your delta-v, you must refuel before you
            can change your velocity in space again. +25%.
          </p>
        )
      },
      {
        name: 'Space Flight',
        text: (
          <p>
            You can fly in space or a vacuum (such as on the moon). Your space Move is Basic Speed x
            2. If you want to be able to accelerate constantly to reach a higher top speed, like a
            rocket, buy Enhanced Move (Space) (p. 52).
            <br />
            <br />
            This will let you accelerate or decelerate each turn by an amount equal to your space
            Move, up to your enhanced top speed. For a “realistic” space move that lets you
            accelerate indefinitely in a vacuum (up to the speed of light), you’ll want Enhanced
            Move 25-27 (Space).
            <br />
            <br />
            This is incompatible with all other special modifiers except Space Flight Only. +50%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Cannot Hover</i>
          </p>
        ),
        text: (
          <p>
            You must always move at least 1/4 your top airspeed (round up) when flying. This is
            incompatible with Controlled Gliding and Gliding. -15%.
          </p>
        )
      },
      {
        name: 'Controlled Gliding',
        text: (
          <p>
            Like Gliding (below) in most respects, but you can gain altitude by riding updrafts or
            “thermals.” A typical ascent rate is one yard per second.
            <br />
            <br />
            You can locate thermals, if any are present, on a successful IQ or Meteorology roll (one
            attempt per minute). -45%.
          </p>
        )
      },
      {
        name: 'Gliding:',
        text: (
          <p>
            You cannot gain altitude. With a running leap, you can launch yourself with an air Move
            equal to Basic Move.
            <br />
            <br />
            Each turn, you can change velocity by up to 10 yards/second x local gravity in Gs
            (Earth’s gravity is 1G). To accelerate, you must descend by 1 yard for each 1
            yard/second added to velocity; top speed is Basic Move x 4 (but you can go faster if
            towed).
            <br />
            <br />
            To decelerate, you must fly level. If you do not descend at least 1 yard, you
            automatically decelerate by 1 yard/second that turn. When working out turning radius,
            your basic air Move is 10 x local gravity in Gs.
            <br />
            <br />
            Each level of Enhanced Move (Air) either doubles top speed or halves deceleration in
            level flight (e.g., one level means you only lose 0.5 yard/second in level flight);
            specify which when you buy it. -50%.
          </p>
        )
      },
      {
        name: 'Lighter Than Air',
        text: (
          <p>
            You fly by becoming lighter than air (or gaseous). A wind moves you 1 yard/second, in
            the direction it is blowing, per 5 mph of wind speed.
            <br />
            <br />
            If the wind happens to be blowing in the direction you wish to travel, this adds to your
            Move; otherwise, your Move goes down as you fight against the breeze. -10%.
          </p>
        )
      },
      {
        name: 'Low Ceiling',
        text: (
          <p>
            You cannot fly very high. This does not limit speed in any way, but the GM may require
            Aerobatics rolls to dodge obstacles near the ground.
            <br />
            <br />A 30-foot ceiling is -10%; a 10-foot ceiling is -20%; and a 5-foot ceiling is
            -25%.
          </p>
        )
      },
      {
        name: 'Small Wings',
        text: (
          <p>
            As Winged (below), except that your wingspan is no more than half your height. You use
            your wings to steer and to stabilize your flight – not to lift.
            <br />
            <br />
            If your wings are crippled in flight, roll against Aerobatics skill (or default) to land
            safely. -10%.
          </p>
        )
      },
      {
        name: 'Space Flight',
        text: (
          <p>
            Only: You can only take this in conjunction with Space Flight or Newtonian Space Flight.
            You can fly only in space; you have air Move 0 in atmosphere.
            <br />
            <br />
            You require a boost to reach space from any planet with an atmosphere, and are incapable
            of atmospheric reentry. -75%
          </p>
        )
      },
      {
        name: 'Winged:',
        text: (
          <p>
            You use large wings or skin flaps to fly. Wingspan is at least twice your height. In
            order to take off, land, or maneuver, you must have an open area with a radius equal to
            your wingspan in all directions.
            <br />
            <br />
            If your wings are bound, or if a wing is crippled (more than 1/3 of your wings, if you
            have more than two), you cannot fly.
            <br />
            <br />
            Treat wings as arms for the purpose of targeting and crippling. If you wish to strike
            blows or manipulate objects with your wings, you must pay for them as Strikers or Extra
            Arms in addition to the cost of Flight. -25%.
          </p>
        )
      }
    ]
  },
  {
    title: 'G-Experience',
    type: 'advantage',
    points: '1 to 10 points',
    description: (
      <p>
        You have experience working in one or more gravitational fields other than your native one,
        and your reflexes adapt quickly to the way objects move and fall in those fields.
        <br />
        <br />
        You suffer only half the usual DX penalty for different gravity (see Different Gravity, p.
        350). In situations where low gravity would make a task easier, you roll at full DX, plus
        the bonus for low gravity, plus an extra +1. For instance, if a normal person would get +2
        to catch a ball in low gravity, you would get +3.
        <br />
        <br />
        This trait costs 1 point per gravity field with which you have experience. For instance, an
        Earth native who works on the moon might have G-Experience (0.16G).
        <br />
        <br />
        To enjoy the benefits of G-Experience in all gravity fields, buy G-Experience (All) for 10
        points.
      </p>
    )
  },
  {
    title: 'Gizmos',
    type: 'advantage',
    points: '5 points/gizmo',
    description: (
      <p>
        You always seem to have just the piece of gear you need. Once per game session per level of
        this advantage, you may pull out one small item of equipment that you could have been
        carrying. This “Gizmo” remains undefined until you reveal it. It does not even “enter play”
        until you take it out; thus, it cannot be damaged, lost, stolen, or found in a search.
        <br />
        <br />A Gizmo must be small enough to fit in an ordinary coat pocket, and must meet one of
        three criteria:
      </p>
    ),
    subCategories: [
      {
        name: '1',
        text: (
          <p>
            An item you own but did not specifically state you were carrying. For instance, if you
            own a handgun, and get ambushed while driving to church, you could pull out your pistol
            – even if the police searched your vehicle five minutes ago and found no weapons!
          </p>
        )
      },
      {
        name: '2',
        text: (
          <p>
            An item that you probably own, and that is in keeping with your character concept, but
            that is minor or ignorable enough to leave unspecified. For instance, a policeman might
            happen to be carrying a spare handcuff key, while a wizard might have some eye of newt.
            <br />
            <br />
            The GM has the final say, but should be lenient if the item you wish to have is
            consistent with your character story.
          </p>
        )
      },
      {
        name: '3',
        text: (
          <p>
            An inexpensive device widely available at your tech level. For instance, if you need to
            light the fuse on some dynamite, you could pull out a box of matches – and they would
            work, even if you just took an involuntary swim in the creek.
          </p>
        )
      },
      {
        text: (
          <p>
            Each Gizmo you can use per game session (maximum of three) costs 5 points. Note that
            this ability is not realistic! The GM may wish to limit it further, or forbid it, in a
            realistic campaign.
          </p>
        )
      },
      {
        name: 'Gadgeteers and Gizmos',
        text: (
          <p>
            Those with the Gadgeteer advantage (p. 56) have more latitude. In addition to the usual
            items available, a Gadgeteer may specify that his Gizmo is one of his inventions (which
            must still be small).
            <br />
            <br />
            Instead of pulling an existing gadget “out of his pocket,” a Gadgeteer can use his Gizmo
            to let him build what he needs on the spot. He must still possess or find the
            appropriate materials, and know any required skills.
            <br />
            <br />
            The GM should roll secretly against the relevant skill, at -2 or worse. A failed roll
            means the device doesn’t work (this still “uses up” the Gizmo).
            <br />A critical failure means the device backfires spectacularly!
          </p>
        )
      }
    ]
  },
  {
    title: 'Growth',
    type: 'advantage',
    points: '10 points/level',
    description: (
      <p>
        You can grow – really grow! As your size increases, so must your ST (or you would collapse
        under your own weight). Your equipment doesn’t change size!
        <br />
        <br />
        Each level of Growth lets you increase your Size Modifier by +1. Find your final height from
        the Size Modifier Table (p. 19). Increases in SM affect your arm and leg length when
        calculating reach and determining whether you can negotiate obstacles; see Size Modifier and
        Reach (p. 402). It takes one second to modify your SM by +1 (or by -1 as you return to
        normal size).
        <br />
        <br />
        If you attempt to grow in a room, vehicle, container, etc. that isn’t large enough to hold
        you, your growth normally stops. However, if maximum thrust damage for your current ST is
        greater than the wall or ceiling’s DR, you burst through it. This takes one second per point
        of DR.
        <br />
        <br />
        You must buy the ST necessary to support your form separately. This is 5 x final height in
        yards. If your ST increases with height and is only available when you grow, you may buy it
        with the Size limitation (see Strength, p. 14). Use your maximum SM to determine the
        limitation value.
        <br />
        <br />
        At intermediate SMs, find your height as a fraction of your maximum height. This is the
        fraction of your extra ST available to you at that SM (round down).
      </p>
    ),
    subCategories: [
      {
        name: 'Example',
        text: (
          <p>
            A 6’-tall character (SM 0) has Growth 4. He can grow to SM +4, giving him a maximum
            height of 10 yards.He must buy ST 50 to support himself.
            <br />
            <br />
            If he has ST 15 and gains +35 ST only at full height, he may buy his +35 ST with a -40%
            Size limitation. At SM +1, he will be 3 yards tall. This is 30% of his final height, so
            he will have 30% of +35 ST, or +10 ST, for ST 25.
            <br />
            <br />
            Similarly, he’ll be 5 yards tall with ST 32 at SM +2, 7 yards tall with ST 39 at SM +3,
            and 10 yards tall with ST 50 at SM +4.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong>Special Modifiers</strong>
            <br />
            <br />
            <i>Maximum Size Only</i>
          </p>
        ),
        text: (
          <p>
            You can only assume normal or maximum size. Instead of growing at +1 SM per second, you
            grow to your maximum SM – or revert back to your usual SM – in one second.
            <br />
            <br />
            The limitation of no intermediate SMs (restricting your use of this ability in close
            quarters) cancels out the enhancement of rapid growth (a useful benefit in combat). +0%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Gunslinger',
    type: 'advantage',
    points: '25 points',
    description: (
      <p>
        You have uncanny talent with firearms. When using any weapon that uses Beam Weapons, Gunner,
        Guns, or Liquid Projector skill, you enjoy these benefits:
      </p>
    ),
    subCategories: [
      {
        text: (
          <p>
            When firing single shots (RoF 1- 3) from a one-handed gun, add your weapon’s Accuracy
            bonus without the need for an Aim maneuver.
            <br />
            When using a two-handed weapon or automatic fire, add half Accuracy (round up) without
            the need to Aim. If you do Aim, you always get full Acc, and bracing, scopes, and
            additional seconds of Aim provide the usual benefits.
          </p>
        )
      },
      {
        text: (
          <p>
            Ignore the basic Move and Attack penalty (-2 or Bulk) and any extra penalties the GM
            assesses for jumping, acrobatics, and similar stunts on foot – leaping between rooftops,
            diving through windows, etc.
            <br />
            <br />
            Also ignore Move and Attack penalties when driving and shooting (p. B470). All this is
            instead of adding Acc.
          </p>
        )
      },
      {
        text: <p>Ignore the -2 for pop-up attacks (p. B390).</p>
      },
      {
        text: <p>Ignore Bulk in close combat (p. B391) – again, instead of adding Acc.</p>
      },
      {
        text: <p>Use weapon skill to hit while mounted (p. B397), not the lower of it or Riding.</p>
      },
      {
        text: (
          <p>
            Halve the default penalty and round in your favor for any technique that allows faster
            shooting. Buy such techniques up from their improved defaults.
          </p>
        )
      },
      {
        text: <p>Halve the sum of all Fast-Draw (Ammo) penalties and round in your favor.</p>
      }
    ],
    extraText: (
      <strong>
        <i>
          You may also buy any cinematic or exotic advantage, perk, skill, or technique the GM feels
          could logically work with a firearm. Ignore the Hypnotism and Power Blow prerequisites for
          Invisibility Art and Flying Leap, respectively.
          <br />
          <br />
          None of these benefits apply when using muscle-powered missile weapons, but the GM may
          introduce a low-tech version of this ability that works with Blowpipe, Bow, Crossbow,
          Sling, etc.
          <br />
          <br />
          Gunslinger is cinematic. The GM may wish to forbid it in realistic campaigns.
        </i>
      </strong>
    )
  },
  {
    title: 'Hard to Kill',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        You are incredibly difficult to kill. Each level of Hard to Kill gives +1 to HT rolls made
        for survival at -HP or below, and on any HT roll where failure means instant death (due to
        heart failure, poison, etc.).
        <br />
        <br />
        If this bonus makes the difference between success and failure, you collapse, apparently
        dead (or disabled), but come to in the usual amount of time – see Recovering from
        Unconsciousness (p. 423).
        <br />
        <br /> A successful Diagnosis roll (or a Mechanic roll, for machines) reveals the truth.
      </p>
    ),
    subCategories: [
      {
        name: 'Example',
        text: (
          <p>
            Bruno has HT 12, 15 HP, and Hard to Kill 4. He takes 45 points of damage, which reduces
            him to -30 HP. He must make two HT rolls to survive: one at -15 HP, one at -30 HP.With
            Gizmos, you may pull out one small item that you could have reasonably been carrying.
            <br />
            <br />
            He rolls an 11 for the first one, but on the second roll, he gets a 14. This is above
            his HT (12), but below his modified HT (12 + 4 = 16). He passes out, and his foes leave
            him for dead. Roughly a day later, he’ll regain consciousness – injured, but not dead!
          </p>
        )
      }
    ],
    extraText: (
      <strong>
        <i>In a realistic campaign, the GM may wish to limit characters to Hard to Kill 1 or 2.</i>
      </strong>
    )
  },
  {
    title: 'Hard to Subdue',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        You are hard to knock out. Each level of Hard to Subdue gives +1 to any HT roll to avoid
        unconsciousness – whether as a result of injury, drugs, or ultra-tech weapons – and to
        resist supernatural abilities that cause unconsciousness.
        <br />
        <br />
        In a realistic campaign, the GM may wish to limit characters to Hard to Subdue 1 or 2.
      </p>
    )
  },
  {
    title: 'Healing',
    type: 'advantage',
    points: '30 points',
    description: (
      <p>
        You have the ability to heal others. You must be in physical contact with the subject. To
        activate your power, concentrate for one second and make an IQ roll. Roll at -2 if the
        subject is unconscious. You can use Healing in two ways:
      </p>
    ),
    subCategories: [
      {
        name: 'Head Injuries',
        text: (
          <p>
            On a success, you can heal any number of HP. This costs you 1 FP per 2 HP healed (round
            up).
            <br />
            Failure costs 1d FP, but you can try again; critical failure also causes the recipient
            1d damage. Even 1 HP of healing will stop bleeding.
            <br />
            <br />
            By rolling at -6, you can repair a crippled but whole limb if you completely heal the HP
            lost to the crippling injury. For instance, to heal a hand crippled by 4 points of
            damage, make an IQ-6 roll and spend 2 FP.
            <br />
            <br />
            Each healer gets only one attempt per crippled limb. Healing cannot restore lost limbs
            or bring back the dead.
          </p>
        )
      },
      {
        name: 'Cure Disease',
        text: (
          <p>
            This requires an IQ roll at a modifier determined by the GM – from +1 for the common
            cold to -15 for AIDS.
            <br />
            <br />
            The FP cost is equal to twice the penalty, minimum 1 FP. For instance, it would cost 6
            FP to cure a disease that calls for an IQ-3 roll.
            <br />
            If used more than once per day on a given subject, apply a cumulative -3 per successful
            healing of the same type (injury or disease) on that subject.
            <br />
            <br />
            This penalty accumulates until a full day has passed since the most recent healing.
            <br />
            <br />
            ***Healing works on your own race and on all “similar” races. In a fantasy campaign, for
            instance, all warmblooded humanoid races (elves, dwarves, orcs, halflings, etc.) would
            be “similar.”
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Faith Healing</i>
          </p>
        ),
        text: (
          <p>
            Your power works by channeling spiritual energy. This lets you cure anyone the spirits
            or gods deem worthy of healing, regardless of race.
            <br />
            However, you (and possibly your subject) must behave in a manner consistent with the
            interests and moral codes of your supernatural allies, or this ability will not work.
            <br />
            <br />
            You may not combine Faith Healing with Own Race Only or Xenohealing. +20%.
          </p>
        )
      },
      {
        name: 'Xenohealing',
        text: (
          <p>
            You can heal beings quite dissimilar from yourself.
            <br />
            <br />
            Examples, assuming you are human: All Mammals, +20%; All Earthly Life, +40%; All
            Carbon-Based Life, +60%; Anything Alive, +80%; Anything Animate (including undead,
            golems, etc.), +100%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Disease Only</i>
          </p>
        ),
        text: <p>You can only cure disease. -40%.</p>
      },
      {
        name: 'Injuries Only',
        text: <p>You can only heal injuries. -20%</p>
      },
      {
        name: 'Own Race Only',
        text: <p>This is only available in campaigns with multiple sapzient races. -20%</p>
      },
      {
        name: 'Psychic Healing',
        text: <p>Your ability is part of the Psychic Healing psi power (see p. 256). -10%.</p>
      }
    ]
  },
  {
    title: 'Hermaphromorph',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You can switch among fully functional neuter, male, and female forms. The process takes 10
        seconds (Preparation Required, Takes Extra Time, and Takes Recharge are common limitations).
      </p>
    )
  },
  {
    title: 'High Manual Dexterity',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        You have remarkably fine motor skills. Each level (to a maximum of four) gives +1 to DX for
        tasks that require a delicate touch. This includes all DX-based rolls against Artist,
        Jeweler, Knot-Tying, Leatherworking, Lockpicking, Pickpocket, Sewing, Sleight of Hand, and
        Surgery, as well as DX-based rolls to do fine work with Machinist or Mechanic (e.g., on
        clockwork).
        <br />
        <br />
        This bonus doesn’t apply to IQbased tasks or large-scale DX-based tasks, nor does it apply
        to combatrelated die rolls of any kind.
      </p>
    )
  },
  {
    title: 'High Pain Threshold',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You are as susceptible to injury as anyone else, but you don’t feel it as much. You never
        suffer a shock penalty when you are injured.
        <br />
        In addition, you get +3 on all HT rolls to avoid knockdown and stunning – and if you are
        tortured physically, you get +3 to resist. The GM may let you roll at Will+3 to ignore pain
        in other situations.
        <br />
        <br />
        High Pain Threshold is included in Supernatural Durability (p. 89); if you have the latter
        advantage, you cannot take this one.
      </p>
    )
  },
  {
    title: 'Higher Purpose',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You are driven to exceed your normal limits in one specific pursuit.
        <br />
        You must state this exactly as if it were a Code of Honor disadvantage (p. 127): “Defend all
        women,” “Slay all demons,” etc. If, in the GM’s judgment, you are unfaltering in your
        pursuit of your Higher Purpose, you get +1 to all die rolls that pertain directly to the
        pursuit of your cause.
        <br />
        <br />
        If you deviate from your Higher Purpose, you lose this bonus . . . and the GM is free to
        penalize you for bad roleplaying just as if you had ignored a Code of Honor.
        <br />
        <br />
        A Higher Purpose must be specific. Higher Purposes such as “Fight evil” or “Oppose authority
        figures” are too broad to be balanced.
        <br />
        <br />
        In addition, a Higher Purpose must entail genuine risk and inconvenience. The GM should not
        allow pragmatic Higher Purposes like “Faithfully serve my superiors.” All Higher Purposes
        are subject to GM approval.
      </p>
    )
  },
  {
    title: 'Hyperspectral Vision',
    type: 'advantage',
    points: '25 points',
    description: (
      <p>
        Your vision extends across the infrared, visible, and ultraviolet portions of the spectrum.
        This integrated picture often reveals details that are invisible to those who merely possess
        normal vision, Infravision (p. 60), or Ultravision (p. 94).
        <br />
        <br />
        Hyperspectral Vision grants nearperfect night vision: you suffer no vision or combat
        penalties if there is any light at all. In total darkness, it functions exactly like
        Infravision. This trait also gives +3 on all Vision rolls; on all rolls to spot hidden clues
        or objects with Forensics, Observation, or Search skill; and on all Tracking rolls.
        <br />
        <br />
        If you possess Hyperspectral Vision, you cannot also have Infravision or Ultravision. This
        trait is essentially a higher level of both those advantages.
        <br />
        <br />
        Its game effects replace the specific effects of those traits. As described, this trait
        emulates realistic TL7+ sensors. The GM may permit supers to take the two special
        enhancements below. Neither is appropriate for real-world sensors!
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Extended Low-Band</i>
          </p>
        ),
        text: (
          <p>
            You perceive radiation below the infrared, allowing you to “see” microwave, radar, and
            radio sources. This gives no special ability to understand radio signals! +30%.
          </p>
        )
      },
      {
        name: 'Extended High-Band',
        text: (
          <p>
            You sense radiation above the ultraviolet, allowing you to “see” X-ray and gamma ray
            sources. +30%.
          </p>
        ),
        points: 'points'
      }
    ]
  },
  {
    title: 'Illuminated',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You are an “Illuminatus” in the original sense of the word – you are enlightened. You know
        what’s going on, and you know it intuitively.
        <br />
        <br />
        You can discern other Illuminati on sight, with no possibility of error. Furthermore,
        whenever the GM requires a roll against a skill such as Current Affairs, Hidden Lore, or
        Intelligence Analysis to tell whether a certain strange occurrence is truly a coincidence or
        the result of a conspiracy, you may roll against the higher of your IQ and the specific
        skill in question.
        <br />
        <br />
        Finally, you can perceive and communicate with supernatural beings who are tied to
        Illuminated conspiracies in your game world (GM’s decision).
        <br />
        <br />
        This gives you no special ability to control them, but they recognize you and treat you with
        a certain respect: +3 on reaction rolls. The only drawback is that other Illuminati and
        spiritual beings are able to perceive your Illuminated nature, and there’s nothing you can
        do about it except stay out of sight.
        <br />
        <br />
        This advantage is best suited to mystical or fantastic campaigns. It is rarely appropriate
        in “mundane” conspiracy campaigns. The GM is the final judge of who may possess this trait.
      </p>
    )
  },
  {
    title: 'Improved G-Tolerance',
    type: 'advantage',
    points: '5 to 25 points',
    description: (
      <p>
        You can function under a wide range of gravities. For a normal human, the penalties for
        non-native gravity accrue in increments of 0.2G; see Different Gravity (p. 350).
        <br />
        <br />A larger increment costs points: 5 points for 0.3G, 10 points for 0.5G, 15 points for
        1G, 20 points for 5G, and 25 points for 10G. Normal humans are limited to 10 points in this
        trait.
      </p>
    )
  },
  {
    title: 'Indomitable',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You are impossible to influence through ordinary words or actions.
        <br />
        <br />
        Those who wish to use Influence skills on you (see Influence Rolls, p. 359) must possess a
        suitable advantage: Empathy (p. 51) if you are a human or similar being, Animal Empathy (p.
        40) if you’re a beast, Plant Empathy (p. 75) if you’re a plant, or Spirit Empathy (p. 88) if
        you’re a demon, ghost, etc. Everyone else – however convincing – fails automatically.
        <br />
        <br />
        This trait often accompanies Unfazeable (p. 95).
      </p>
    )
  },
  {
    title: 'Infravision',
    type: 'advantage',
    points: '0 or 10 points',
    description: (
      <p>
        You can see into the infrared portion of the spectrum, allowing you to detect varying
        degrees of heat.
        <br />
        <br />
        This lets you fight at no penalty even in absolute darkness, if your target emits heat (this
        includes all living beings and most machines). It also gives you +2 on all Vision rolls to
        spot such targets, since their heat stands out from the background.
        <br />
        <br />
        You can follow a heat trail when tracking: add +3 to Tracking rolls if the trail is no more
        than an hour old.
        <br />
        <br />
        Infravision does not let you distinguish colors, and only allows you to judge the general
        size and shape of heat-emitting objects, including living beings (for instance, you might
        have trouble telling two people of the same size apart).
        <br />
        Roll at -4 to distinguish objects of similar size and shape. The GM may also require a
        Vision-4 roll to read by reflected heat. Sudden flashes of heat (e.g., a flare, fiery
        explosion, or infrared laser) can blind you, just as a flash of light can blind ordinary
        vision.
        <br />
        <br />
        Cost depends on your capabilities: You can only see using Infravision, and are subject to
        its limitations at all times: 0 points. You can switch freely between normal vision and
        Infravision: 10 points.
      </p>
    )
  },
  {
    title: 'Injury Tolerance',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You have fewer physiological weaknesses than ordinary living beings. The cost of this
        advantage depends on the precise frailties eliminated.
        <br />
        <br />
        Note that some forms of Injury Tolerance include others, and that Diffuse, Homogenous, and
        Unliving are mutually incompatible.
      </p>
    ),
    subCategories: [
      {
        name: 'Difuse',
        text: (
          <p>
            Your body is fluid or particulate, composed of a swarm of smaller entities, or perhaps
            made of pure energy.
            <br />
            <br /> This makes you immune to crippling injuries and reduces the damage you suffer
            from most physical blows; see Injury to Unliving, Homogenous, and Diffuse Targets (p.
            380).
            <br />
            <br />
            Most foes (GM’s decision) cannot slam or grapple you! Diffuse includes all the benefits
            of No Blood, No Brain, and No Vitals
          </p>
        ),
        points: '100 points'
      },
      {
        name: 'Homogenous',
        text: (
          <p>
            Your body has no vulnerable internal organs, bones, muscles, or other mechanisms.
            <br />
            <br />
            As a result, you are less susceptible to piercing and impaling attacks; see Injury to
            Unliving, Homogenous, and Diffuse Targets (p. 380).
            <br />
            <br />
            Homogenous includes the benefits of No Brain and No Vitals. This trait is intended for
            entities such as iron golems, trees, and slimes.
          </p>
        ),
        points: '40 points'
      },
      {
        name: 'No Blood',
        text: (
          <p>
            You do not rely upon a vital bodily fluid (like blood) for survival. You do not bleed
            (see Bleeding, p. 420), are unaffected by blood-borne toxins, and are immune to attacks
            that rely on cutting off blood to part of your body.
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'No Brain',
        text: (
          <p>
            Your brain – if you have one – is distributed throughout your body, or isn’t your true
            seat of consciousness. Your opponents cannot target it for extra damage.
            <br />
            <br />
            You may have a head, but a blow to the skull or eye is treated no differently than a
            blow to the face (except that an eye injury can still cripple that eye).
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'No Eyes',
        text: (
          <p>
            You lack eyes or other vulnerable optics, but can somehow see despite this (unless of
            course you suffer from Blindness, p. 124).
            <br />
            <br />
            As you have no eyes, they cannot be attacked. You are also immune to blinding attacks
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'No Head',
        text: (
          <p>
            You have no head at all. This includes the benefits of No Brain. As well, you lack
            “skull” and “face” hit locations, and have no need for head armor.
            <br />
            <br />
            You can still see, speak, hear, smell, taste, etc. unless you take the appropriate
            disadvantages. Specify how you do this (supernaturally, technologically, via organs on
            your torso, etc.).
            <br />
            <br />
            It is common – but not mandatory – for those with No Head to have No Neck, No Eyes, or
            both
          </p>
        ),
        points: '7 points'
      },
      {
        name: 'No Neck',
        text: (
          <p>
            You have no neck. As a result, you have no “neck” hit location, and cannot be
            decapitated, choked, or strangled.
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'No Vitals',
        text: (
          <p>
            You have no vital organs (such as a heart or engine) that attackers can target for extra
            damage.
            <br />
            <br />
            Treat hits to the “vitals” or “groin” as torso hits
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Unliving',
        text: (
          <p>
            Your body is not composed of living flesh.
            <br />
            <br />
            You take reduced damage from piercing and impaling attacks, but are not quite as
            resilient as if you were Homogenous; see Injury to Unliving, Homogenous, and Diffuse
            Targets (p. 380).
            <br />
            <br />
            This trait is intended mainly for machines and corporeal undead.
          </p>
        )
      }
    ]
  },
  {
    title: 'Innate Attack',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You have a natural or built-in attack with which you can inflict physical damage (for
        nondamaging attacks, see Affliction, p. 35, and Binding, p. 40).
        <br />
        <br />
        Examples include a dragon’s fiery breath, a robot’s built-in blaster, and a god’s ability to
        hurl lightning bolts.
        <br />
        <br />
        By default, this is a ranged attack with 1/2D 10, Max 100, Acc 3, RoF 1, Shots N/A, and
        Recoil 1, although you can apply modifiers to change these statistics (see pp. 101-116).
        <br />
        <br />
        An Innate Attack inflicts 1d damage per level. Its cost per level depends on the type of
        damage it inflicts:
      </p>
    ),
    subCategories: [
      {
        name: 'Burning (burn)',
        text: (
          <p>
            Your attack inflicts damage using flame, an energy beam, or localized electrical burns.
            It may ignite fires.
          </p>
        ),
        points: '5 points/level'
      },
      {
        name: 'Corrosion (cor)',
        text: (
          <p>
            Your attack involves acid, disintegration, or something similar.
            <br />
            <br />
            For every 5 points of basic damage you inflict, reduce the target’s DR by 1, in addition
            to regular damage. (Living beings heal natural DR at the same rate as HP.)
          </p>
        ),
        points: '10 points level'
      },
      {
        name: 'Crushing (cr)',
        text: (
          <p>
            our attack inflicts damage through blunt impact, like a bludgeoning weapon or an
            explosive blast.
            <br />
            <br />
            It is likely to cause knockback (p. 378), and is more effective at inflicting blunt
            trauma (p. 379) than other types of damage.
          </p>
        ),
        points: '5 points/level'
      },
      {
        name: 'Cutting (cut)',
        text: (
          <p>
            Your attack inflicts lacerations, like those caused by an axe or broken glass.
            <br />
            <br />
            Multiply penetrating damage by 1.5. Cutting attacks can inflict blunt trauma and cause
            knockback.
          </p>
        ),
        points: '7 points/level'
      },
      {
        name: 'Fatigue (fat)',
        text: (
          <p>
            Your attack is nonlethal. It might involve a low-amperage electric shock or a “mind
            blast,” or even inflict a weakening effect such as hypothermia or starvation.
            <br />
            <br />
            It reduces FP, not HP, and cannot affect machines.
          </p>
        ),
        points: '10 points/level'
      },
      {
        name: 'Impaling (imp)',
        text: (
          <p>
            Your attack inflicts stab wounds, like a spear or an arrow.
            <br />
            Double penetrating damage in flesh! Impaling attacks can target the eyes and vital
            organs, can inflict blunt trauma, and may slip through high-tech flexible armor.
          </p>
        ),
        points: '8 points/level'
      },
      {
        name: 'Piercing',
        text: (
          <p>
            Your attack involves a fast, blunt projectile, such as a bullet, or is sharp but too
            small to qualify as impaling, like a dart or a stinger.
            <br />
            <br />
            It may inflict blunt trauma, and can target the eyes and vital organs.
            <br />
            <br />
            There are four subclasses of piercing attack:
            <br />
            <p className="sub-section">
              <strong>Small Piercing (pi-):</strong>
              <br />
              <br />
              Use this for very low-energy projectiles (e.g., blowgun darts), or for attacks that
              tend to punch through the target and leave a small wound channel (e.g., armorpiercing
              bullets).
              <br />
              <br />
              <strong>3 points/level</strong>
            </p>
            <p className="sub-section">
              <strong>Piercing (pi):</strong>
              <br />
              <br />
              Use this for most rifle and pistol bullets.
              <br />
              <br />
              <strong>5 points/level</strong>
              <br />
            </p>
            <p className="sub-section">
              <strong>Large Piercing (pi+):</strong>
              <br />
              <br />
              Use this for most rifle and pistol bullets.
              <br />
              <br />
              <strong>5 points/level</strong>
              <br />
            </p>
            <p className="sub-section">
              <strong>Huge Piercing (pi++):</strong>
              <br />
              <br />
              Use this for attacks that leave an even larger wound channel than large piercing.
              Double penetrating damage in flesh!
              <br />
              <br />
              <strong>8 points/level</strong>
              <br />
            </p>
          </p>
        )
      },
      {
        name: 'Toxic (tox)',
        text: (
          <p>
            Your attack inflicts cellular damage, in the manner of disease, poison, or radiation.
            <br />
            <br />
            It cannot normally affect machines. The modifiers Cyclic (p. 103), Onset (p. 113), and
            Resistible (p. 115) are usual, but not required.
          </p>
        ),
        points: '4 points/level'
      },
      {
        name: 'Partial Dice',
        text: (
          <p>
            You do not have to buy wholenumbered dice of damage. Each ±1 to damage counts as ±0.3
            dice. Round the final cost up. For instance, an Innate Attack that does 1d+2 damage
            counts as 1.6 dice. If it were crushing (5 points/die), it would cost 1.6 x 5 = 8
            points.
            <br />
            <br />
            Some attacks do only 1 point of damage. This counts as 0.25 dice. Once again, round cost
            up. Such attacks can still be deadly – especially if they involve the Follow-Up (p. 105)
            or Cyclic (p. 103) enhancement!
          </p>
        )
      },
      {
        name: (
          <p>
            <strong>Special Modifiers</strong>
            <br />
            <br />
          </p>
        ),
        text: (
          <p>
            Many special modifiers for Innate Attack appear under Attack Enhancements and
            Limitations (p. 102).
            <br />
            <br />
            You can use these to create almost any attack – built-in guns, lasers, jets of liquid
            fire, gale-force winds, etc. – and to duplicate the capabilities of weapons listed in
            GURPS books.
            <br />
            <br />
            Fatigue and toxic attacks intended to simulate poison or disease require modifiers.
            Noxious agents on Claws (p. 42), Teeth (p. 91), darts, etc. use Follow-Up (p. 105).
            <br />
            <br />
            Gases and sprays use Respiratory Agent (p. 108) or Contact Agent (p. 103), often with
            Area Effect (p. 102), Cone (p. 103), or Jet (p. 106). Attacks that depend on touch or on
            skin contact use Blood Agent (p. 102) or Contact Agent, plus one of Aura (p. 102) or
            Melee Attack (p. 112).
            <br />
            <br />
            Regardless of other modifiers, Innate Attacks are treated as ranged attacks unless given
            the Melee Attack limitation; then they’re considered melee weapons.
          </p>
        )
      },
      {
        name: 'Description',
        text: (
          <p>
            After applying all relevant modifiers, name and describe the attack.
            <br />
            <br />
            You can be as general as “dragon fire” or as specific as “9mm machine pistol
            cybernetically implanted in right arm.”
            <br />
            <br />
            At the GM’s discretion, the description can imply additional noncombat abilities;
            <br />
            for instance, a jet of high-pressure water could put out fires.
            <br />
            <br />
            The GM has the final say as to whether your description fits the campaign setting, and
            may modify the attack if necessary.
          </p>
        )
      }
    ]
  },
  {
    title: 'Insubstantiality',
    type: 'advantage',
    points: '80 points',
    description: (
      <p>
        You can become intangible, passing through solid objects as though they weren’t there. In
        this state, gravity does not affect you – you can move in any direction at full Move (and
        make no noise when you move).
        <br />
        <br />
        You can perceive the tangible world, and speak normally to those within it, but you cannot
        pick up normal objects or affect them in any way.
        <br />
        <br />
        Physical and energy attacks cannot harm you, but you’re still vulnerable to psionic and
        (nonmaterial) magical attacks. Likewise, your physical and energy attacks cannot affect
        physical opponents. Your psi abilities and magic spells can affect the physical world, but
        at -3 to all skill rolls.
        <br />
        <br />
        Although you can pass through solids, you must still breathe. When moving through a solid
        object, treat this as if you were swimming underwater for purposes of suffocation. You
        cannot materialize inside a solid object.
        <br />
        <br />
        Your “natural” form (physical or insubstantial) is considered a special effect. You must
        take this advantage if you can change between a physical and an insubstantial form.
        <br />
        <br />
        This trait can represent any number of abilities from folklore and fiction. You should work
        out its origins (see p. 33) and special effects with the GM – perhaps you “vibrate” out of
        synch with reality, phase into a different dimension, or become a spirit. This determines
        your appearance, which may be transparent, misty . . . or completely normal (but you can’t
        be invisible without the Invisibility advantage).
        <br />
        <br />
        Your physical and energy attacks affect other beings using the same form of
        Insubstantiality, and their attacks affect you.
        <br />
        <br />
        The GM may rule that certain materials, energy barriers, magic spells, etc. are impenetrable
        to your particular form of Insubstantiality.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Affect Substantial</i>
          </p>
        ),
        text: (
          <p>
            If you have any abilities that can affect the substantial world when you are
            insubstantial – including magic, psionics, or powers with the Affects Substantial
            enhancement (p. 102) – this advantage costs more. +100%.
          </p>
        )
      },
      {
        name: 'Can Carry Objects',
        text: (
          <p>
            Normally, you cannot carry anything while insubstantial. This enhancement lets you carry
            objects, including clothing and armor.
            <br />
            <br /> They become physical if dropped. You cannot materialize these objects inside
            other objects or characters. No encumbrance is +10%; Light, +20%; Medium, +50%; Heavy,
            +100%.
          </p>
        )
      },
      {
        name: 'Partial Change',
        text: (
          <p>
            You can turn part of your body substantial while other parts remain insubstantial, or
            vice versa. Thus, you could reach through a wall and tap someone on the shoulder.
            <br />
            <br />
            If you also have Can Carry Objects, you can materialize your hand, pick up material
            objects, and carry them while insubstantial. +20%, or +100% if you can turn an item you
            are carrying substantial without dropping it (this requires turning your hand
            substantial, too).
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Always On</i>
          </p>
        ),
        text: (
          <p>
            You are always insubstantial and cannot materialize. If you have this limitation, there
            is no -3 to use magic or psionics. -50%.
          </p>
        )
      },
      {
        name: 'Usually On',
        text: (
          <p>
            Similar to Always On, but you can materialize for short periods with great effort.
            Materialization costs 1 FP per second. -40%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Intuition',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You usually guess right. When faced with a number of alternatives, and no logical way to
        choose among them, you can ask the GM to let you use your Intuition.
        <br />
        The GM makes a secret IQ roll, with a bonus equal to the number of “good” choices and a
        penalty equal to the number of “bad” choices. On a success, he steers you to a good choice;
        on a critical success, he tells you the best choice. On a failure, he gives you no
        information; on a critical failure, he steers you toward a bad choice.
        <br />
        <br />
        The GM can modify this as he sees fit for other situations where Intuition might logically
        help. Only one roll per question is allowed.
        <br />
        <br />
        The GM should never allow Intuition to short-circuit an adventure – for instance, by letting
        the intuitive detective walk into a room, slap the cuffs on the guilty party, and close the
        case. At the most, Intuition would point the detective in the direction of a good clue. GMs
        who don’t think they can control Intuition should not allow it in their games.
      </p>
    )
  },
  {
    title: 'Invisibility',
    type: 'advantage',
    points: '40 points',
    description: (
      <p>
        You are invisible. Unlike most advantages, this one is “always on” unless you take a special
        enhancement. You still make noise, leave footprints, and have a scent – and by default,
        anything you carry remains visible.
        <br />
        <br />
        If you are carrying nothing, you get a +9 to Stealth in any situation where being seen would
        matter.
        <br />
        Individuals using paranormal remote viewing (crystal balls, Clair - voyance, etc.) cannot
        see you if you would be invisible to their normal vision. Devices with these powers can
        still sense you, as can paranormal abilities that detect enemies, life, and so on
        nonvisually.
        <br />
        <br />
        Invisibility only works against one sort of vision. Types include electromagnetic vision
        (which encompasses ordinary vision, Infravision, Ultra - vision, and radar), sonar, magnetic
        fields, and anything else the GM comes up with. If you are invisible to electromagnetic
        vision, you do not cast a shadow and don’t show up in mirrors.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Affects Machines</i>
          </p>
        ),
        text: (
          <p>
            You are invisible even to machines. You cannot be photographed, and you don’t show up on
            cameras or other detectors. Devices such as pressure plates still notice you, but you
            could walk past a robot sentry undetected. Electronically targeted weapons get no
            bonuses to hit you. +50%.
          </p>
        )
      },
      {
        name: 'Can Carry Objects',
        text: (
          <p>
            The objects you carry, including clothing and armor, become invisible. They regain
            visibility when put down. No encumbrance is +10%; Light, +20%; Medium, +50%; Heavy,
            +100%.
          </p>
        )
      },
      {
        name: 'Extended',
        text: (
          <p>
            You are invisible to more than one type of vision (for instance, electromagnetic vision
            and magnetic fields). +20% per additional type of vision.
          </p>
        )
      },
      {
        name: 'Switchable',
        text: <p>You are normally visible, but can become invisible at will. +10%.</p>
      },
      {
        name: 'Usually On',
        text: (
          <p>
            You are normally invisible, but can become visible for short periods with great effort.
            Turning visible costs 1 FP per second. +5%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Machines Only</i>
          </p>
        ),
        text: (
          <p>
            Only: Similar to Affects Machines, but you are only invisible to machines. Living beings
            can see you normally. -50%.
          </p>
        )
      },
      {
        name: 'Substantial Only',
        text: (
          <p>
            Your invisibility only hides you in the material world. Insubstantial beings (ghosts,
            etc.) can see you normally. -10%.
          </p>
        )
      },
      {
        name: 'Visible Reflection',
        text: <p>You can be seen in mirrors! -10%</p>
      },
      {
        name: 'Visible Shadow',
        text: <p>You cast a shadow! -10%.</p>
      }
    ]
  },
  {
    title: 'Jumper',
    type: 'advantage',
    points: '100 points',
    description: (
      <p>
        You can travel through time or to parallel worlds (sometimes known as “timelines”) merely by
        willing the “jump.” Decide whether you are a time-jumper or a world-jumper. To do both, you
        must buy Jumper (Time) and Jumper (World) separately, at full cost.
        <br />
        <br />
        To initiate a jump, you must visualize your destination, concentrate for 10 seconds, and
        make an IQ roll. You may hurry the jump, but your roll will be at -1 per second of
        concentration omitted (-10 to jump with no preparation at all). Regardless of IQ, a roll of
        14 or more always fails. On a success, you appear at your target destination. On a failure,
        you go nowhere. On a critical failure, you arrive at the wrong destination, which can be any
        time or world the GM wishes!
        <br />
        <br />
        You appear at your destination at exactly the same place you left your previous time or
        world – or as close as possible. When jumping through time, this means the same place at a
        different time.
        <br />
        <br />
        When jumping between worlds, this means the same place at the same time, but on a parallel
        world. If there is no corresponding “safe” location within 100 yards of your destination –
        for instance, if you jump while on an airplane to a destination with no plane at your
        location, or from a half-mile deep mine to a destination with no corresponding mine – the
        jump will fail and you will know why it failed. This does not prevent you from jumping into
        other types of danger, such as radiation, gunfire, or wild animals.
        <br />
        <br />
        If you have Danger Sense, the GM should roll before you make a hazardous jump; on a success,
        you get a warning.
        <br />
        <br />
        This ability always costs at least 1 FP to use, whether it succeeds or fails. Particularly
        “distant” times or worlds might cost more, perhaps up to 10 FP, at the GM’s discretion.
        <br />
        <br />
        If you are a machine, this ability does not cost you FP – but if you have passengers, each
        of them must pay the FP cost. For an example of how Jumper might work in a particular game
        world, see World-Jumpers (p. 544).
      </p>
    ),
    subCategories: [
      {
        name: 'Carrying Things',
        text: (
          <p>
            You can carry up to Basic Lift when you travel, plus any Payload (see p. 74). Take the
            Extra Carrying Capacity enhancement (below) if you wish to carry more weight, or bring
            along other people.
            <br />
            <br />
            However, if multiple Jumpers of the same kind are in physical contact, when one jumps,
            the others can “hitch a ride” if they wish – even if the Jumper who initiates the jump
            does not want company. Only the person initiating the jump makes a die roll; wherever he
            ends up, the others do, too.
            <br />
            <br />
            If you are a world-jumper, “hitching a ride” is the only way to visit a new parallel
            world (save for a critical failure!). However, once you reach a world, you can memorize
            its “feel” by concentrating and spending character points to “learn” that world as an
            IQ/Easy skill. This takes one hour per point you wish to spend. Use this skill in place
            of IQ when you travel to that world in the future. You never have to memorize a world,
            but if you do not, you roll at IQ-3 to attempt to return. Time-jumpers have no similar
            restriction.
            <br />
            <br />
            You can improve this ability with practice, spending points to add enhancements or
            remove limitations. GMs who do not want the PCs jumping multiple times per adventure are
            free to impose mandatory limitations (e.g., Limited Use) that cannot be bought off.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Extra Carrying Capacity</i>
          </p>
        ),
        text: (
          <p>
            You can carry more than your Basic Lift. If your carrying capacity is high enough, you
            may transport one person with you. Light encumbrance is +10%; Medium, +20%; Heavy, +30%;
            Extra-Heavy +50%
          </p>
        )
      },
      {
        name: 'New Worlds',
        text: (
          <p>
            This is only available for world-jumpers. You can deliberately aim for worlds you
            haven’t visited.
            <br />
            <br />
            The IQ roll is always at -3 or worse (GM’s decision). Of course, it is always possible
            that the desired destination does not exist, in which case the attempt automatically
            fails – although the GM will not tell you why.
            <br />
            <br />
            All FP costs are doubled when using this enhancement. +50%.
          </p>
        )
      },
      {
        name: 'Omni-Jump:',
        text: (
          <p>
            This is only available if you are both a world-jumper and a time-jumper! You must apply
            it to both Jumper advantages.
            <br />
            <br />
            This lets you move between times and timelines on a single IQ roll – for instance, from
            the present day in our timeline to 1066 A.D. in a parallel timeline where the Norman
            invasion of England failed. +10%.
          </p>
        )
      },
      {
        name: 'Tracking',
        text: (
          <p>
            You can travel to the “home” time or world of any manmade artifact you can hold or
            touch.
            <br />
            <br />
            Time-jumpers will arrive shortly after the item was created; world-jumpers will arrive
            at the current date on the item’s home timeline.
            <br />
            <br />
            Any such attempt is at IQ-2, and each Jumper only gets one try per artifact. +20%.
          </p>
        )
      },
      {
        name: 'Travel',
        text: (
          <p>
            You always create a portal (of about your size) when you jump.
            <br />
            Others may pass through it, even if they can’t jump. The portal lingers for 3d seconds,
            which can be good or bad – it means enemies can follow you! +40%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Cannot Escort</i>
          </p>
        ),
        text: (
          <p>
            This is only available for world-jumpers.
            <br />
            Other Jumpers cannot “hitch a ride,” even if you want to bring them along. -10%
          </p>
        )
      },
      {
        name: 'Cannot Follow',
        text: (
          <p>
            This is only available for world-jumpers. You cannot “hitch a ride” with another Jumper.
            -20%.
          </p>
        )
      },
      {
        name: 'Drift',
        text: (
          <p>
            You do not arrive in exactly the location you left from.
            <br />
            <br /> You won’t arrive in thin air or underground, but you may show up anywhere within
            10 miles of your planned destination.
            <br />
            <br /> The better your IQ roll when you jump, the closer you will be to where you wanted
            to arrive, but it’s the GM’s call as to exactly where you appear. -15%.
          </p>
        )
      },
      {
        name: 'Limited Jump',
        text: (
          <p>
            You can only travel a certain distance through time, or a certain number of “removes”
            between parallel worlds, per jump. To go further, you must make multiple hops.
            <br />
            <br />
            The GM must set the value of this limitation for his campaign; it will be more of a
            handicap in some settings than in others. A suggested value is -10%.
          </p>
        )
      },
      {
        name: 'Maximum Range',
        text: (
          <p>
            You can only jump a certain total distance through time, or a certain number of
            “removes” between parallel worlds, no matter how many hops you make.
            <br />
            <br />
            Like Limited Jump, the GM must set the value of this limitation.
          </p>
        )
      },
      {
        name: 'Naked',
        text: <p>You can carry nothing when you jump! You always arrive naked. -30%.</p>
      },
      {
        name: 'Stunning',
        text: <p>You are always mentally stunned after a jump. -10%.</p>
      }
    ]
  },
  {
    title: 'Language Talent',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You have a knack for languages. When you learn a language at a comprehension level above
        None, you automatically function at the next-highest level; thus, you can purchase a
        language at Accented level for 2 points or at Native level for 4 points.
        <br />
        <br />
        For full language rules, see Language (p. 23).
      </p>
    )
  },
  {
    title: 'Legal Enforcement Powers',
    type: 'advantage',
    points: '5, 10, or 15 points',
    description: (
      <p>
        You are a law enforcer, with the accompanying powers and restrictions. In some times and
        places, this amounts to a license to kill. In others, it’s little more than the right to
        carry a badge and write parking tickets.
        <br />
        <br />
        The point cost depends on the kinds of laws you enforce, the size of your jurisdiction, how
        answerable you are for your actions, and the degree of respect you must show for the civil
        rights of others:
      </p>
    ),
    subCategories: [
      {
        text: (
          <p>
            You have local jurisdiction, the ability to arrest suspected criminals, the power to
            perform searches with an appropriate warrant, and possibly the right to carry a
            concealed weapon. Examples: a Victorian bobby or a modern policeman.
          </p>
        ),
        points: '5 points'
      },
      {
        text: (
          <p>
            As above, but you also have national or international jurisdiction, or are not obligated
            to respect the civil rights of others, or are free to engage in covert investigations,
            or may kill with relative impunity. Examples: an FBI agent or a medieval Royal Guardsman
          </p>
        ),
        points: '10 points'
      },
      {
        text: (
          <p>
            You have three or more of the above abilities. Examples: a Gestapo, KGB, or Stasi agent.
          </p>
        ),
        points: '15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Legal Enforcement Powers almost always require an appropriate Duty (p. 133). In some
          cases, a Reputation (positive, negative, or mixed) is also appropriate. All levels of
          Legal Enforcement Powers include Police Rank 0 (see p. 30). To become a senior law
          enforcer, buy more Rank.
        </i>
      </strong>
    )
  },
  {
    title: 'Legal Immunity',
    type: 'advantage',
    points: '5 to 20 points',
    description: (
      <p>
        You are exempt from some or all of the laws of your society.
        <br />
        <br />
        Should you break the law, ordinary law enforcers do not have the power to charge you. Only
        one particular authority – your own church or social class, a special court, perhaps even
        your ruler – can judge or punish you.
        <br />
        <br />
        The point cost depends on how sweeping the immunity is (GM’s judgment):
      </p>
    ),
    subCategories: [
      {
        text: (
          <p>
            You are not subject to ordinary laws, but the rules that govern your behavior are just
            as strict. Examples: a medieval abbot or a modern UN observer.
          </p>
        ),
        points: '5 points'
      },
      {
        text: (
          <p>
            As above, but the laws that apply to you are less strict than those that apply to most
            people. Example: a medieval bard (see below).
          </p>
        ),
        points: '10 points'
      },
      {
        text: (
          <p>
            You can do nearly anything you please provided you don’t injure the nation, church, or
            other power that granted you Legal Immunity in the first place.
            <br />
            <br />
            Examples: a medieval duke or an international diplomat (see below).
          </p>
        ),
        points: '15 points'
      },
      {
        name: 'For an extra 5 points, you may add “diplomatic pouch” privileges: you can send and receive mail or objects that the ordinary authorities cannot legally stop or examine. Two classes of Legal Immunity are of special interest to adventurers:',
        text: (
          <p>
            <p>
              <strong>Bardic Immunity:</strong>
              <br />
              <br />
              You have the right to sing what you please without fear of serious consequences. You
              may even sing a grossly insulting song to the king – you might get banished for it,
              but you can’t be whipped, imprisoned, or killed.
              <br />
              <br />
              Anyone who violates your immunity risks damage to his name and reputation. Other bards
              will compose and distribute vicious satires about him, giving him a bad Reputation.
              <br />
              <br />
              They might even expose a Secret, if he has one! This advantage applies to the content
              of your performances and nothing else. It is only available to true bards, in
              fantasy/medieval settings.
              <br />
              <br />
              To qualify for this advantage, you must spend at least 1 point apiece on the
              Performance, Poetry, and Singing skills.
              <br />
              <strong>10 points</strong>
              <br />
              <br />
              <strong>Diplomatic Immunity:</strong>
              <br />
              <br />
              You are an international diplomat. You may ignore the laws of all countries except
              your own. While abroad, you cannot be prosecuted for any crime, no matter how grave;
              the local police may arrest you, but they cannot press charges.
              <br />
              <br />
              The only recourse for a foreign government is to declare you persona non grata. This
              means you must leave the country at once, ending your current assignment – and
              possibly your career.
              <br />
              <br />
              Foreign powers may request your extradition for normal prosecution, but your
              government is unlikely to comply.
              <br />
              <br />
              This trait always comes with a Duty (p. 133) to a government agency, and often has
              some level of Administrative Rank (p. 30) as a prerequisite.
              <br />
              <strong>20 points</strong>
            </p>
          </p>
        )
      }
    ]
  },
  {
    title: 'Less Sleep',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        You need less sleep than most people. A normal human requires 8 hours of sleep per night.
        Each level of this advantage – to a maximum of four levels – lets you get by with one hour
        less than this, giving you a few extra hours each day in which to study or work on other
        projects.
      </p>
    )
  },
  {
    title: 'Lifting ST',
    type: 'advantage',
    points: '3 points per +1 ST',
    description: (
      <p>
        You have lifting capacity out of proportion to your mass. This is common for vehicles and
        supers.
        <br />
        <br />
        Add your Lifting ST to your ordinary ST when you determine Basic Lift (p. 15) for the
        purposes of carrying, lifting, pushing, and pulling. Lifting ST also adds to ST in
        situations where you can apply slow, steady pressure (grappling, choking,etc.).
        <br />
        <br />
        Lifting ST does not boost ST (or Basic Lift) for the purpose of determining HP, throwing
        distance, or damage inflicted by melee attacks or thrown weapons.
        <br />
        <br />
        If you bought your ST with the Size limitation, apply the same limitation to Lifting ST. The
        No Fine Manipulators limitation does not give a discount, however.
      </p>
    )
  },
  {
    title: 'Lightning Calculator',
    type: 'advantage',
    points: '2 or 5 points',
    description: (
      <p>
        You have the ability to do math in your head, instantly. This talent comes in two levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Lightning Calculator',
        text: (
          <p>
            You, the player, may use a calculator at any time, to figure anything you want – even if
            your character is fleeing for his life! For simple math problems, the GM may just say
            that your character knows the answer.
          </p>
        ),
        points: '2 points'
      },
      {
        name: 'Intuitive Mathematician',
        text: (
          <p>
            As above, but your ability is not limited to arithmetic. You can perform astrogation
            without a computer, do any level of engineering design in your head, and solve
            differential equations almost instantaneously.
            <br />
            <br />
            You never need a calculator; you yourself are far faster than that, and even faster than
            many computers
          </p>
        ),
        points: '5 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          True mathematical geniuses will have one of the above traits and one or more levels of
          Mathematical Ability (see Talent, p. 89).
        </i>
      </strong>
    )
  },
  {
    title: 'Longevity',
    type: 'advantage',
    points: '2 points',
    description: (
      <p>
        Your lifespan is naturally very long. You fail aging rolls (see p. 444) only on a 17 or 18 –
        or only on an 18, if your modified HT is 17 or better!
      </p>
    )
  },
  {
    title: 'Luck',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>You were born lucky! There are three progressively more “cinematic” levels of Luck:</p>
    ),
    subCategories: [
      {
        name: 'luck',
        text: (
          <p>
            Once per hour of play, you may reroll a single bad die roll twice and take the best of
            the three rolls!
            <br />
            <br />
            You must declare that you are using your Luck immediately after you roll the dice. Once
            you or anyone else has made another die roll, it is too late to use Luck.
            <br />
            <br />
            If the GM is rolling in secret (e.g., to see if you notice something), you may tell him
            you are using your Luck ahead of time, and he must roll three times and give you the
            best result.
          </p>
        ),
        points: '15 points'
      },
      {
        name: 'Extraordinary Luck',
        text: <p>As above, but usable every 30 minutes.</p>,
        points: '30 points'
      },
      {
        name: 'Ridiculous Luck',
        text: <p>As above, but usable every 10 minutes!</p>,
        points: '60 points'
      },
      {
        text: (
          <p>
            Your Luck only applies to your own success, damage, or reaction rolls, or on outside
            events that affect you or your whole party, or when you are being attacked (in which
            case you may make the attacker roll three times and take the worst roll!).
            <br />
            <br />
            You cannot share Luck. If Strong Sam is trying to kick open a door, Lucky Lou can’t
            stand behind him and transfer his Luck. He’ll have to kick that door himself.
            <br />
            <br />
            Once you use Luck, you must wait an hour of real time (30 minutes for Extraordinary
            Luck, 10 minutes for Ridiculous Luck) before using it again. You cannot use Luck at
            11:58 and then again at 12:01. And you cannot save up Luck.
            <br />
            <br />
            You cannot play for hours without using Luck and then use it several times in a row!
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Active</i>
          </p>
        ),
        text: (
          <p>
            Your Luck is a conscious supernatural power.
            <br />
            <br />
            You must declare that you are using it before you roll the dice. It cannot be used
            “after the fact” to reroll a bad result. -40%.
          </p>
        )
      },
      {
        name: 'Aspected',
        text: (
          <p>
            Your Luck applies only to one specific class of related tasks, such as athletics, social
            interactions, or skills you use at your job.
            <br />
            <br />
            “Combat” is a valid choice, but it only affects weapon skill rolls, active defenses, and
            ST or DX rolls for close combat – not DX rolls to avoid tripping, HT rolls to survive,
            etc. -20%.
          </p>
        )
      },
      {
        name: 'Defensive',
        text: (
          <p>
            You can only use your Luck to reroll failed active defense rolls, resistance rolls, or
            HT rolls to resist the effects of injury, or to make an opponent reroll a critical hit
            against you. -20%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Magery',
    type: 'advantage',
    points: '5 points for Magery 0, +10 points/level',
    description: (
      <p>
        You are magically adept. This advantage comes in levels. You must purchase Magery 0 before
        buying higher levels of Magery.
      </p>
    ),
    subCategories: [
      {
        name: 'Magery 0',
        text: (
          <p>
            This is basic “magical awareness,” a prerequisite for learning magic in most worlds. The
            GM makes a Sense roll (p. 358) when you first see a magic item, and again when you first
            touch it. On a success, you intuitively know that the item is magical. A roll of 3 or 4
            also tells you whether the magic is helpful or dangerous, and about how strong it is.
            <br />
            Those without Magery do not get this roll!
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Magery +1',
        text: (
          <p>
            Higher levels of Magery make it much easier to learn and use magic. Add your Magery to
            IQ when you learn spells. For instance, if you have IQ 14, Magery 3 lets you learn
            spells as if you had IQ 17. Add your Magery level to Perception when you roll to sense
            magic items, and to IQ when you learn Thaumatology skill (p. 225).
            <br />
            <br />
            Reduce the time required to learn new spells in play (but not the point cost) by 10% per
            Magery level, to a minimum of 60% of the usual time at Magery 4. For instance, with
            Magery 3, you would learn spells in 70% the usual time.
            <br />
            <br />
            Powerful spells require a minimum level of Magery as a prerequisite, so be sure to skim
            the Spell List (pp. 242- 253) when deciding how much Magery you need.
            <br />
            <br />
            Note that high Magery lets you produce powerful results with even the most basic spells;
            see Magery and Effect (p. 237). The GM sets the maximum Magery allowed to PCs. Magery 3
            is about right for “classic fantasy.”
          </p>
        ),
        points: '10 points/level (on top of the 5 points for Magery 0).'
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Dance</i>
          </p>
        ),
        text: (
          <p>
            You must be free to use bodily motions in order to cast spells. You are not freed from
            rituals requiring movement as your spell level increases (see Magic Rituals, p. 237).
            <br />
            <br />
            However, you need not speak at all to cast your spells. -40%.
          </p>
        )
      },
      {
        name: 'Dark-Aspected',
        text: (
          <p>
            You can only use your powers in darkness. Regardless of the time of day or night, any
            light greater than candlelight or starlight deprives you of your abilities, though your
            aura reveals that you are a mage. -50%.
          </p>
        )
      },
      {
        name: 'Day-Aspected',
        text: (
          <p>
            You can use your powers only when the sun is in the sky – on average, from 6 a.m. to 6
            p.m. During solar eclipses, you have no powers! The effects of other astronomical events
            are up to the GM.
            <br />
            <br />
            When the sun is down, you have none of your magical abilities, although a look at your
            aura reveals that you are a mage. You are not affected by being in buildings,
            underground, and so on; only the sun’s position matters.
            <br />
            <br />
            You know automatically (if you are awake) when it is one minute to sunrise and one
            minute to sunset. -40%.
          </p>
        )
      },
      {
        name: 'Musical',
        text: (
          <p>
            You must use a musical instrument in order to cast spells. You can never cast spells
            silently. -50%.
          </p>
        )
      },
      {
        name: 'Night-Aspected',
        text: (
          <p>
            You can only use your powers when the sun is not in the sky – on average, from 6 p.m. to
            6 a.m. When the sun is up, you have none of your magical abilities, although a look at
            your aura reveals that you are a mage.
            <br />
            <br />
            You are not affected by being in buildings, underground, and so on; only the sun’s
            position matters. You know automatically (if you are awake) when it is one minute to
            sunrise and one minute to sunset. -40%.
          </p>
        )
      },
      {
        name: 'One College Only',
        text: (
          <p>
            Your Magery only benefits the spells of a single college and the Recover Energy spell
            (p. 248).
            <br />
            <br />
            You learn other spells as though you were a nonmage, and can only cast them in high-mana
            areas. You may still count such spells as prerequisites for spells in your own college.
            <br />
            <br />
            You cannot detect magic items unless they contain at least one spell of your college, in
            which case you roll normally for detection first sightand first touch. -40%.
          </p>
        )
      },
      {
        name: 'Solitary:',
        text: (
          <p>
            Your magical abilities are at -3 for every sapient being within five yards of you, and
            -6 for anyone touching you. As partial compensation, you get a roll vs. IQ to notice any
            time a sapient creature enters or leaves the five-yard area around you – but this only
            works on a single person.
            <br />
            <br />
            If there is already someone standing next to you, you won’t notice if someone else
            approaches. -40%.
          </p>
        )
      },
      {
        name: 'Song',
        text: (
          <p>
            You must be able to sing in order to cast your spells. You are not freed from the ritual
            of speaking to cast spells as your spell level increases (see Magic Rituals, p. 237).
            -40%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Magic Resistance',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        You are less likely to be affected by magic. Subtract your Magic Resistance from the skill
        of anyone casting a spell on you, and add it to your roll to resist any spell that offers a
        resistance roll. For instance, if you have Magic Resistance 3, wizards have -3 to cast
        spells on you and you get +3 to resist. In addition, you may roll against HT + Magic
        Resistance to resist the effects of magical elixirs.
        <br />
        <br />
        You cannot “turn off” this advantage to let friendly wizards cast spells on you (e.g., to
        heal you) or to benefit from helpful elixirs!
        <br />
        <br />
        Magic Resistance only interferes with spells cast directly on you. It provides no benefit
        against Missile spells (which are cast on the wizard’s hand and hurled at you), attacks by
        magic weapons, or informationgathering spells that aren’t cast directly on you. It also has
        no effect on supernatural powers other than magic; e.g., divine miracles, psionics, or the
        innate powers of spirits.
        <br />
        <br />
        Magic Resistance, and its precise level, can be recognized by any mage who looks at your
        aura, or by anyone who casts a spell on you.
        <br />
        <br />
        You cannot combine Magic Resistance with Magery. If you have even one level of Magic
        Resistance, you can’t cast spells at all (although you can still use magic weapons).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Improved</i>
          </p>
        ),
        text: (
          <p>
            You Magic Resistance does not interfere with your own ability to cast spells. This
            allows you to possess both Magery and Magic Resistance. +150%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Mana Damper',
    type: 'advantage',
    points: '10 points/level',
    description: (
      <p>
        You negate magical energy (“mana”) in your vicinity, making it difficult or impossible for
        others to cast spells. You can never cast spells yourself, nor can you have any level of
        Magery.
        <br />
        <br />
        Each level of Mana Damper (to a maximum of three) reduces the local mana level by one step,
        but only for you and people or things that you’re carrying.
        <br />
        <br />
        For instance, a wizard could throw a fireball at you unhindered, but he would find it
        difficult to use magic to turn you to stone or read your mind. For details, see Mana (p.
        235).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Area Effect</i>
          </p>
        ),
        text: (
          <p>
            Your ability affects everything in an area centered on you. The first level of Area
            Effect gives you a radius of one yard. Each level after the first doubles this radius as
            usual; see Area Effect (p. 102). +50%/level.
          </p>
        )
      },
      {
        name: 'Switchable',
        text: (
          <p>
            You can switch this power off – for instance, to let a friendly wizard affect you or
            operate within your area of effect. +100%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Mana Enhancer',
    type: 'advantage',
    points: '50 points/level',
    description: (
      <p>
        You radiate magical energy, or “mana.” Each level of Mana Enhancer (to a maximum of two)
        increases the local mana level by one step, but only for you and people or things that
        you’re carrying.
        <br />
        <br />
        If more than one character with Mana Enhancer could increase the mana level, apply only the
        highest increase; do not add the effects together.
        <br />
        <br />
        This ability does not directly confer the ability to cast spells; for that, take Magery (p.
        66). However, if you can raise the mana level to “high” or better, you can cast many spells
        without Magery! For details, see Mana (p. 235).
        <br />
        <br />
        This ability has its drawbacks: you cannot have Magic Resistance, and mages get an IQ +
        Magery roll to sense that you possess this trait. In some game worlds, this combination may
        force you to hide from unethical wizards!
        <br />
        <br />
        The GM should keep this trait under strict control, as it is powerful and easily abused in
        fantasy settings.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Area Effect</i>
          </p>
        ),
        text: (
          <p>
            Your ability affects everything in an area centered on you. The first level of Area
            Effect gives you a radius of one yard. Each level after the first doubles this radius as
            usual; see Area Effect (p. 102). +50%/level.
          </p>
        )
      },
      {
        name: 'Switchable',
        text: (
          <p>
            You can switch this power off in order to deprive enemy wizards of its benefits (or
            simply to hide from them!). +100%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Medium',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You can perceive and communicate with spirits – particularly spirits of the dead. You don’t
        see them visually, but you know when they’re nearby.
        <br />
        <br />
        You can speak with any spirit in your presence, provided you share a language. You can also
        call spirits to you; there is no guarantee that they will answer your summons, but they will
        hear it.
        <br />
        <br /> Note that this trait does not give you a reaction bonus with spirits, or any power to
        control their behavior.
      </p>
    )
  },
  {
    title: 'Metabolism Control',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        You can control normally involuntary biological functions such as pulse, blood flow,
        digestion, and respiration. Each level of Metabolism Control gives +1 on any HT roll that
        would benefit from such control (GM’s decision), including bleeding rolls (see Bleeding, p.
        420) and rolls to recover from (not resist) disease and poison.
        <br />
        <br />
        You can also enter a deathlike trance. Anyone unfamiliar with your metabolism must win a
        Quick Contest of Diagnosis vs. your HT + Metabolism Control to discover that you aren’t
        dead. In this state, each level of Metabolism Control reduces by 10% the amount of oxygen
        you need to stay alive (at level 10 or higher, you don’t breathe at all), and doubles the
        amount of time you can safely go without food or water. You are unaware of your surroundings
        while in your trance, but awaken automatically if injured.
        <br />
        <br />
        You may also set a mental “alarm clock” to awaken you after a certain amount of time has
        passed.
        <br />
        <br />
        This ability is incompatible with the Machine meta-trait (see p. 263).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Hibernation</i>
          </p>
        ),
        text: (
          <p>
            You can only use the trance ability, and get no bonus to HT rolls. Furthermore, you
            automatically enter a trance when exposed to certain environmental conditions – great
            cold, drought, etc. Work this out with the GM.
            <br />
            <br />
            In such conditions, you must make a Will roll to avoid hibernation. You can induce
            hibernation voluntarily. To do so, roll vs. Will-4 hourly until you succeed. You cannot
            set a precise “wake up” time. Set a duration, then multiply by (2d+3)/10. -60%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Microscopic Vision',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        You can see details that would normally be invisible without a magnifying glass or a
        microscope.
        <br />
        <br />
        Each level increases magnification by a factor of 10: 5 points gives 10x, 10 points gives
        100x, and so on. This magnification only applies to objects within 1 foot.
        <br />
        <br />
        Level 1 suffices for ordinary forensic investigation.
        <br />
        <br />
        Level 3 (1,000x) is equivalent to the best optical microscopes.
        <br />
        <br />
        Level 5 (100,000x) is comparable to an electron microscope, capable of imaging viruses.
        <br />
        <br />
        Level 6 (1,000,000x) is on par with a scanning- tunneling or atomic force microscope, and
        can study an object’s atomic structure.
      </p>
    )
  },
  {
    title: 'Mimicry',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You can duplicate any simple sound (alarm, gunshot, etc.) by listening to it for one second
        and making a successful IQ roll. You can also imitate voices by spending at least 10 seconds
        listening to them – live, recorded, or remotely – and making an IQ roll.
        <br />
        <br />
        This trait gives you no special ability to stun or deafen others with loud sounds, or to
        speak unpronounceable magic words. Buy any such capabilities separately.
      </p>
    )
  },
  {
    title: 'Mind Control',
    type: 'advantage',
    points: '50 points',
    description: (
      <p>
        You can mentally dominate those you can see or touch.
        <br />
        <br />
        To use this ability, concentrate for one second and then roll a Quick Contest: your IQ vs.
        your subject’s Will.
      </p>
    ),
    subCategories: [
      {
        text: (
          <p>
            If you win, your victim will obey your every command until you free him. In effect, he
            temporarily gains the Reprogrammable disadvantage (p. 150), with you as his master. Your
            control persists for as long as you take uninterrupted Concentrate maneuvers.
            <br />
            <br /> Once you stop, your control lingers for one minute per point by which you won the
            Quick Contest. (To increase this, add Extended Duration, p. 105.) If you are
            incapacitated (stunned, knocked out, etc.), or attempt to force the subject to act
            against his principles (e.g., commit suicide or harm a loved one), roll 68 ADVANTAGES
            another Quick Contest.
            <br />
            <br />
            If your victim wins, he breaks free. Roll at the moment of truth – you can march him to
            the edge of a cliff, but he doesn’t roll until he’s about to leap. If you lose, you
            cannot attempt to control that subject again for 24 hours, and he feels a sense of
            mental coercion emanating from you.
            <br />
            <br />
            On a critical failure, you also lose control of anyone else under the influence of this
            ability! Mind Control often has limitations: Accessibility (Only on opposite sex),
            Sense-Based (for hypnotic voices, eyes, scents, etc.), and so on. It may also have
            attack modifiers, subject to the restrictions that apply to attacks with Malediction (p.
            106). Finally, you may apply the Cybernetic and Cybernetic Only modifiers from Mind
            Reading (see below).
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Conditioning</i>
          </p>
        ),
        text: (
          <p>
            You can reconstruct the subject’s psyche and implant suggestions. In effect, you can add
            or remove any mundane mental disadvantage. Add Delusions for false memories, or Amnesia
            to wipe memories.
            <br />
            <br />
            Your victim must be under your control, cooperative, and conscious. Roll a second Quick
            Contest. You are at -1 per full -5 points of disadvantages changed, but you may
            substitute Brainwashing skill (p. 182) for IQ.
            <br />
            <br />
            Duration in days is equal to your margin of victory. If you win and roll a critical
            success, the conditioning is permanent! A conditioned subject who is no longer under
            your direct control imposes no penalty on the use of Mind Control on others.
            <br />
            <br />
            Note that another person with this ability can use it to undo your work. +50%.
          </p>
        )
      },
      {
        name: 'No Memory',
        text: (
          <p>
            Your victims have no memory of anything that occurred while under your control. +10%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Conditioning Only</i>
          </p>
        ),
        text: (
          <p>
            You cannot use regular Mind Control – only Conditioning (above). Uncooperative victims
            must be restrained before you can use your ability. -50%.
          </p>
        )
      },
      {
        name: 'Puppet',
        text: (
          <p>
            Your victims have no initiative while under your control, and temporarily acquire Slave
            Mentality (p. 154). -40%.
          </p>
        )
      },
      {
        name: 'Telepathic',
        text: <p>Your ability is part of the Telepathy psi power (see p. 257). -10%.</p>
      }
    ]
  },
  {
    title: 'Mind Probe',
    type: 'advantage',
    points: '20 points',
    description: (
      <p>
        You can perform a deep “mind probe.” In effect, you can force the subject to answer any one
        specific question that he can answer with a brief sentence. To attempt a probe, you must
        first either touch your subject or successfully read his mind with Mind Reading (below).
        <br />
        <br />
        You must also share a language with him. To use Mind Probe, you must concentrate for one
        second and roll a Quick Contest of your IQ (or Interrogation skill, if higher) vs. your
        subject’s Will. If you win, you rip the answer from his mind.
        <br />
        <br />
        The answer is what the subject believes to be true – if he doesn’t know, he’ll tell you. If
        you lose, you may try again, at a cumulative -2 per repeated attempt to ask the same (or
        very similar) question in the past hour.
        <br />
        <br />
        Should you critically fail, you cannot probe that person again for 24 hours.
        <br />
        <br />
        You may use Mind Probe to ask as many questions as you wish, but each question is a new use
        of your ability, and requires a second of concentration and its own Quick Contest.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong>Special Modifiers</strong>
            <br />
            <br />
            <i>
              The special enhancements and limitations given for Mind Reading (below) are also
              available for Mind Probe.
            </i>
          </p>
        )
      }
    ]
  },
  {
    title: 'Mind Reading',
    type: 'advantage',
    points: '30 points',
    description: (
      <p>
        You can eavesdrop on others’ surface thoughts. You must be able to see or touch the subject
        to affect him. Concentrate for one second and roll a Quick Contest of IQ vs. the subject’s
        Will. Modify the roll for range penalties to the subject (see p. 550).
        <br />
        <br />
        If you win, you can “hear” everything the subject says, subvocalizes, or actively thinks
        about as a voice in your head. Received thought comes at the speed of speech.
        <br />
        <br />
        If you do not understand the language, or if your subject isn’t sapient, you only pick up
        feelings, images, and general intent. You can maintain Mind Reading for as long as you wish
        without further concentration.
        <br />
        <br />
        If you switch to another person, you must stop reading your current subject and roll a Quick
        Contest with the new subject.
        <br />
        <br />
        To read multiple subjects at once, take Compartmentalized Mind (p. 43). If you lose, you may
        try again, at a cumulative -2 per repeated attempt on that subject in the past hour. Should
        you critically fail, you cannot read that person again for 24 hours.
        <br />
        <br />
        Mind Reading is often psionic in origin, but it is just as likely to be a magical, divine,
        or even technological ability.
        <br />
        <br />
        The Sense-Based limitation (p. 115) – especially Touch-Based – is common. If you take
        Hearing-Based, you can only read the thoughts of someone whose words you can hear, but can
        function as a “truthreader” or (with Universal) a “universal translator.”
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Cybernetic</i>
          </p>
        ),
        text: (
          <p>
            You can affect entities with the Digital Mind trait (p. 48), including all ordinary
            computers.
            <br />
            <br />
            Your IQ roll has a penalty equal to the system’s Complexity. A nonsentient system does
            not resist; just roll vs. IQ - Complexity to succeed. +50%.
          </p>
        )
      },
      {
        name: 'Sensory',
        text: (
          <p>
            You can also tap into your subject’s senses. This lets you experience everything he
            experiences. If he is tortured, knocked out, or killed, the GM may require a Will roll
            to avoid stunning – or perhaps even a Fright Check! +20%.
          </p>
        )
      },
      {
        name: 'Universal',
        text: (
          <p>
            You automatically understand thoughts, even those of nonsapient subjects and those with
            whom you do not share a language. +50%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Cybernetic Only</i>
          </p>
        ),
        text: <p>As for Cybernetic, but you can only read Digital Minds. -50%.</p>
      },
      {
        name: 'Racial',
        text: (
          <p>
            Your ability only works on those of your own race or a very similar race (for instance,
            humans are similar to elves, but not to dogs or trolls).
            <br />
            <br />
            Combine this with the Sense-Based limitation (Touch or Scent) to represent a race that
            can share thoughts through biochemical means. -20%.
          </p>
        )
      },
      {
        name: 'Sensory Only',
        text: <p>As for Sensory, but you can’t read thoughts at all. -20%.</p>
      },
      {
        name: 'Telecommunication:',
        text: (
          <p>
            Your ability only works on those with whom you are presently in contact via
            Telecommunication (p. 91). -20%.
          </p>
        )
      },
      {
        name: 'Telepathic',
        text: <p>Your ability is part of the Telepathy psi power (see p. 257). -10%.</p>
      }
    ]
  },
  {
    title: 'Mind Shield',
    type: 'advantage',
    points: '4 points/level',
    description: (
      <p>
        You have a “shield” that warns you of and defends against mental attacks. Add your Mind
        Shield level to IQ or Will whenever you resist an advantage with the Telepathic limitation
        (see Chapter 6) and whenever you resist a spell listed under Communication and Empathy
        Spells (p. 245) or Mind Control Spells (p. 250).
        <br />
        <br />
        Your shield also resists attempts to locate your mind using magic or psionics. Such
        abilities must win a Quick Contest against your Will + Mind Shield level to find you.
        <br />
        <br />
        You may voluntarily lower your Mind Shield if you wish – for instance, to let a friend read
        your mind. Lowering or raising your shield is a free action, but it must take place at the
        start of your turn.
        <br />
        <br />
        Mind Shield does protect you while you are asleep or unconscious, unless you fell asleep or
        were knocked out while your shield was voluntarily lowered.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Cybernetic</i>
          </p>
        ),
        text: (
          <p>
            Your shield protects against computer-related attacks – e.g., the “Digital” form of
            Possession and the “Cybernetic” form of Mind Probe or Mind Reading – instead of magic
            and psi.
            <br />
            <br />
            This limitation is only available to those with Digital Mind (p. 48). -50%.
          </p>
        )
      },
      {
        name: 'Telepathic',
        text: <p>Your ability is part of the Telepathy psi power (see p. 257). -10%.</p>
      }
    ]
  },
  {
    title: 'Mindlink',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You have a permanent telepathic rapport with someone – often a twin, loved one, hive member,
        etc. You automatically succeed at all attempts to contact him with Telesend (see
        Telecommunication, p. 91) and Mind Reading (p. 69), provided he chooses not to resist or has
        Slave Mentality.
        <br />
        <br />
        Mindlink does not allow automatic contact across interstellar distances (more than 0.1
        light-year), nor can it reach other dimensions, parallel worlds, etc.
        <br />
        <br />
        Mindlink costs 5 points for a single person, 10 points for 2-9 people, 20 points for 10-99
        people, 30 points for 100-999 people, and so on – add 10 points per tenfold increase in the
        number of people.
        <br />
        <br />
        As a rule, the GM should only permit PCs to buy Mindlinks with Allies, Contacts, and
        Dependents; duplicates (see Duplication, p. 50); and other PCs (if their players permit).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong>Special Modifiers</strong>
            <br />
            <br />
            <i>
              You may give Mindlink the same modifiers as your Mind Reading or Telesend advantage.
              In most cases, the GM should require this.
            </i>
          </p>
        )
      }
    ]
  },
  {
    title: 'Modular Abilities',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You have a pool of character points that you can reallocate under certain conditions. You
        may rearrange these points to add a skill (spell, technique, etc.) or mental advantage
        temporarily – or to improve such a trait, if you already have it.When you do, you lose any
        abilities to which those points were previously assigned.
        <br />
        <br />
        This advantage comes in “slots.” A slot can hold one skill or mental advantage at a time.
        Each slot has a fixed base cost, plus a cost per point in the pool for that slot. Both costs
        depend on the type of Modular Abilities you have.
      </p>
    ),
    subCategories: [
      {
        name: 'Computer Brain',
        text: (
          <p>
            Your abilities are actually computer programs. The GM decides whether a program exists
            for a given ability. If you have Telecom - munication (p. 91), you may download
            programs, usually from a network. How long this takes depends on the speed of data
            transfer in the setting – a second per character point works well. In some worlds, you
            must pay for such programs; $100 per character point is typical.
          </p>
        ),
        points: 'Cost per slot: 6 points base + 4 points per point of abilities.'
      },
      {
        name: 'Chip Slots',
        text: (
          <p>
            As above, but the programs come on physical chips that you must plug into a socket –
            usually in your skull. It takes three seconds to insert or remove a chip. Chips
            typically have negligible weight, but cost $100 to $1,000 per point of abilities.
          </p>
        ),
        points: 'Cost per slot: 5 points base + 3 points per point of abilities.'
      },
      {
        name: 'Super-Memorization',
        text: (
          <p>
            You gain new abilities through rapid study. This takes a second per character point. You
            can “forget” a memorized ability instantly. You can only memorize abilities if you have
            a suitable reference work (book, film, tape, etc.). The GM determines the cash cost of
            such works.
          </p>
        ),
        points: 'Cost per slot: 5 points base + 3 points per point of abilities.'
      },
      {
        name: 'Cosmic Power',
        text: (
          <p>
            You simply wish new abilities into being. This takes one second per ability. Unlike
            other Modular Abilities, you only ever have one “slot,” and can rearrange your points
            into as many or as few abilities as you wish, to the limit of your advantage.
          </p>
        ),
        points: '10 points per point of abilities.'
      },
      {
        text: (
          <p>
            Use Preparation Required (p. 114) to increase the time needed to rearrange your points,
            and Limited Use (p. 112) to represent an ability that you forget immediately after using
            it.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Physical</i>
          </p>
        ),
        text: (
          <p>
            Your ability is not limited to skills and mental advantages. +50% for physical
            advantages only, or +100% for any mental or physical ability.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Spells Only</i>
          </p>
        ),
        text: (
          <p>
            Your ability only works with magic spells, which must usually be “memorized” from a
            grimoire. This is mutually exclusive with Physical. -20%.
          </p>
        )
      },
      {
        name: 'Virtual',
        text: (
          <p>
            The abilities gained only apply in virtual reality, astral space, or another limited
            realm. -50%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Neutralize',
    type: 'advantage',
    points: '50 points',
    description: (
      <p>
        You can neutralize the psi powers of a single psionic individual. This is an active ability
        with an ongoing effect on the subject. It does not have to be psionic – it might represent a
        magical or high-tech way to drain psi abilities. To use Neutralize, you must touch the
        subject (requires an Attack maneuver) and win a Quick Contest of Will.
        <br />
        <br />
        If you succeed, you successfully neutralize all your victim’s psionic powers (see Chapter 6)
        for a number of minutes equal to your margin of victory. This has no effect on the subject’s
        psionic Talents. Once you have neutralized someone, you cannot affect him again until his
        power recovers.
        <br />
        <br /> A critical failure with this ability cripples it for 1d hours.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Power Theft</i>
          </p>
        ),
        text: (
          <p>
            When you successfully neutralize a psi, you acquire his powers! You gain all the psionic
            abilities you neutralized – including their enhancements and limitations – for the
            duration. You can’t use Neutralize again until these powers wear off. +200%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>One Power</i>
          </p>
        ),
        text: (
          <p>
            You can only neutralize a specific psionic power; e.g., ESP or Telepathy. See Chapter 6
            for a list of standard psi powers. -50%
          </p>
        )
      }
    ]
  },
  {
    title: 'Nictitating Membrane',
    type: 'advantage',
    points: '1 point/level',
    description: (
      <p>
        You have a transparent lens over your eyes that you can open and close like an eyelid. This
        lets you see normally underwater, and protects your eyes from sand, irritants, etc.
        <br />
        <br />
        Each level of Nictitating Membrane provides your eyes (only) with DR 1 and adds +1 to all HT
        rolls concerned with eye damage.
      </p>
    )
  },
  {
    title: 'Night Vision',
    type: 'advantage',
    points: '1 point/level',
    description: (
      <p>
        Your eyes adapt rapidly to darkness. Each level of this ability (maximum nine levels) allows
        you to ignore -1 in combat or vision penalties due to darkness, provided there is at least
        some light.
        <br />
        <br />
        Regardless of level, Night Vision only works in partial darkness. It has no effect on the
        -10 for total darkness (for that, get Dark Vision, p. 47).
      </p>
    )
  },
  {
    title: 'Obscure',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        You produce an effect that actively “jams” one particular sense, making it difficult to
        detect you and everything in your vicinity. You must specify the affected sense. This can be
        one of the five human senses or a sensory advantage such as Infravision, Radar, or one
        particular Detect. Examples include Obscure (Vision) for fog, Obscure (Hearing) for white
        noise, and Obscure (Radar) for electronic jamming.
        <br />
        <br />
        Obscure affects a two-yard radius centered on you. Add the Area Effect enhancement (p. 102)
        to increase this radius. The affected sense is at -1 per level of Obscure to detect anything
        within your radius. Ten levels will block the sense completely. The boundaries of the zone
        are easily detected by the affected sense, however; roll at +1 per level.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Defensive</i>
          </p>
        ),
        text: <p>You are unaffected by your own Obscure ability. +50%.</p>
      },
      {
        name: 'Extended',
        text: (
          <p>
            Each related sense (Infravision as well as normal vision, Sonar as well as normal
            hearing, etc.) blocked beyond the first is +20%.
          </p>
        )
      },
      {
        name: 'Ranged',
        text: (
          <p>
            Each related sense (Infravision as well as normal vision, Sonar as well as normal
            hearing, etc.) blocked beyond the first is +20%.
          </p>
        )
      },
      {
        name: 'Stealthy',
        text: (
          <p>
            Your ability works invisibly, like a magical zone of silence. There is no bonus to
            detect the boundaries of your area of effect. +100%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Always On</i>
          </p>
        ),
        text: <p>You cannot turn this ability off. -50%.</p>
      }
    ]
  },
  {
    title: 'Oracle',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You are sensitive to omens, and see hidden significance in such things as the way plants
        grow, the behavior of animals, and even changes in the weather and the sky.
        <br />
        <br /> Once per day, you may check the omens. This normally requires at least an hour, but
        if the GM has something in particular he wants to communicate, he may arbitrarily put it in
        your path.
        <br />
        <br /> The GM rolls twice, in secret, when you use this ability: once to determine whether
        you discover the omen, once to see if you interpret it correctly.
      </p>
    ),
    subCategories: [
      {
        name: 'Discovery',
        text: (
          <p>
            To detect an omen requires a Sense roll. On a success, you discover the omen; on a
            critical success, you get +5 on the subsequent interpretation roll. On a failure, you
            find nothing of oracular significance. On a critical failure, the GM lies – he tells you
            that you have found an omen, but this is, in reality, a product of your own fears or
            wishes.
          </p>
        )
      },
      {
        name: 'Interpretation',
        text: (
          <p>
            To interpret an omen requires an IQ roll.
            <br />
            On a success, the omen is very general; e.g., “an enemy approaches” or “a great power,
            long dormant, is stirring.” On a critical success, the information is more specific:
            <br />
            “you risk the wrath of the king,” “seek out the mage in the tower,” etc. On a failure,
            the omen is simply too vague to be useful. On a critical failure, you blatantly
            misinterpret the omen – possibly in a dangerous manner.
          </p>
        )
      }
    ],
    extraText: (
      <strong>
        <i>This ability differs from Precognition (p. 77), which requires no interpretation.</i>
      </strong>
    )
  },
  {
    title: 'Parabolic Hearing',
    type: 'advantage',
    points: '4 points/level',
    description: (
      <p>
        You can “zoom in” on a particular sound or area, and can filter out background noise from
        sounds of interest to you. Each level of Parabolic Hearing doubles the distance at which you
        can clearly hear any given sound (see Hearing, p. 358).
      </p>
    ),
    subCategories: [
      {
        name: '',
        text: <p></p>,
        points: 'points'
      },
      {
        name: '',
        text: <p></p>,
        points: 'points'
      }
    ]
  },
  {
    title: 'Payload',
    type: 'advantage',
    points: '1 point/level',
    description: (
      <p>
        You can carry cargo or occupants inside your body! This might be a superficial feature
        (e.g., a surgically implanted “flesh pocket” or a natural pouch like that of a kangaroo) or
        an actual internal compartment. The latter is not just for machines – a zombie might have a
        colony of spiders or snakes living in its body, for example.
        <br />
        <br />
        Each level of Payload lets you carry up to Basic Lift/10 lbs. inside you. Those without
        Injury Tolerance (Homogenous) (p. 60) or the Machine meta-trait (p. 263) should ask the GM’s
        permission before taking more than five levels of Payload. You must allocate your Payload
        between cargo and occupants when you buy the advantage:
      </p>
    ),
    subCategories: [
      {
        name: 'Cargo',
        text: (
          <p>
            20 lbs. of cargo space is roughly equal to one cubic foot of capacity. A typical car has
            about 10-20 cubic feet of storage space; a semitrailer has about 2,400 cf.
          </p>
        )
      },
      {
        name: 'Occupants',
        text: (
          <p>
            A human-sized being requires about 200 lbs. of capacity. For others, take average racial
            weight and increase it by 1/3. An actual cabin requires 10 times that weight.
            <br />
            <br /> Your defensive advantages (DR, Sealed, etc.) also protect your occupants. If your
            occupants can control you, buy Controls separately – see Compart - mentalized Mind (p.
            43).
          </p>
        )
      },
      {
        text: (
          <p>
            Treat your Payload as part of your body, not as encumbrance or carried weight, when
            calculating Move and using advantages with limited carrying capacity, such as
            Invisibility, Jumper, and Warp.
            <br />
            <br />
            Machines that can push or pull large external loads – or pick them up and carry them
            with arms, cranes, etc. – have Lifting ST (p. 65), not Payload. Ordinary cars and trucks
            have Payload, but forklifts, tugboats, and the like should buy Lifting ST to represent
            their abilities.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Exposed</i>
          </p>
        ),
        text: (
          <p>
            Your Payload cannot be concealed and is not protected by your defensive advantages. You
            can apply this to any portion of your Payload.
            <br />
            <br />
            The main use of this limitation is to create motorcycles and similar unenclosed
            vehicles. -50%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Penetrating Vision',
    type: 'advantage',
    points: '10 points/level',
    description: (
      <p>
        Penetrating Vision (sometimes called “X-ray vision”) lets you see through solid objects.
        <br />
        <br /> Each level of this advantage allows you to see through up to six inches of normal
        matter. You can just barely see the outline of the substance you are looking through – not
        enough to impair vision in any way.
        <br />
        <br /> Penetrating Vision automatically works in conjunction with all your other vision
        advantages (Infravision, Ultravision, etc.).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Blockable</i>
          </p>
        ),
        text: (
          <p>
            Some substance completely blocks your vision. Common substances, such as plastic, stone,
            or wood, are -30%; less common materials, such as brick or asphalt, are -20%; one
            specific material, such as lead, is -10%.
          </p>
        )
      },
      {
        name: 'Specific',
        text: (
          <p>
            Your ability only works through one particular substance. Common materials, such as
            brick, metal, or wood, are -40%; uncommon materials, such as ice or adobe, are -60%;
            absurd materials, such as chocolate or silk, are -80%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Perfect Balance',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You can always keep your footing, no matter how narrow the walking surface, under normal
        conditions. This lets you walk along a tightrope, ledge, tree limb, or other anchored
        surface without having to make a die roll.
        <br />
        <br />
        If the surface is wet, slippery, or unstable, you get +6 on all rolls to keep your feet. In
        combat, you get +4 to DX and DX-based skill rolls to keep your feet or avoid being knocked
        down.
        <br />
        <br />
        Finally, you get +1 to Acrobatics, Climbing, and Piloting skills.
      </p>
    )
  },
  {
    title: 'Peripheral Vision',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You have an unusually wide field of vision. You can see a 180° arc in front of you without
        turning your head, and have 30° of peripheral vision to either side of that. This gives you
        a 240° “arc of vision” for observation and ranged attacks. The figure above shows the arc of
        vision for a normal character (white) and for someone with Peripheral Vision (gray plus
        white).
        <br />
        <br />
        If you are playing with a battle map, you can make melee attacks into “side” (“right” and
        “left”) hexes as well as “front” hexes – although a onehanded attack to the opposite side
        (e.g., attacking your left hex with your right hand) is clumsy and considered a Wild Swing
        (see p. 388). You still cannot attack a foe directly behind you except with a Wild Swing.
        <br />
        <br />
        This also helps on defense! If you are attacked from a “side” hex, you defend at no penalty.
        Even against attacks from the rear, your active defense is only at -2.
        <br />
        <br />
        Out of combat, you get +3 to all rolls to detect Shadowing attempts or ambushes from behind,
        and the GM will always make a Vision roll for you to spot dangers “behind your back.”
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Easy to Hit</i>
          </p>
        ),
        text: (
          <p>
            Your eyes are on stalks, unusually large, or otherwise more vulnerable to attack. Others
            can target your eyes from within their arc of vision at only -6 to hit. -20%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Permeation',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        solid material as if it didn’t exist. You do not open a passage behind you; observers just
        see you “melt” into the surface and disappear. You need Penetrating Vision (p. 74) to see
        where you’re going. You must still breathe (unless you have Doesn’t Breathe), which limits
        trips to the length of time you can hold your breath (see Holding Your Breath, p. 351).
        <br />
        <br />
        Permeation differs from Insubstantiality. You are affected by gravity, and you are limited
        to normal movement; if you lack Flight or another movement advantage, you must walk at your
        Basic Move. Furthermore, you can be affected by any attack that can reach you within a solid
        object. You also remain vulnerable to attacks with the material you can pass through, unless
        you purchase Damage Resistance to such attacks.
        <br />
        <br />
        Cost depends on how often you are likely to encounter the material you can permeate in the
        form of a barrier. For instance, paper might be a “Common” substance, but since walls of
        paper are uncommon, it is treated as “Rare” for the purpose of Permeation.
      </p>
    ),
    subCategories: [
      {
        name: 'Very Common',
        text: (
          <p>
            Earth (including clay, mud, and sand), metal, stone (including brick, concrete, and
            plaster), wood, and other ubiquitous structural materials.
          </p>
        ),
        points: '40 points'
      },
      {
        name: 'Common',
        text: <p>Concrete, plastic, steel, and other specific, common structural materials.</p>,
        points: '20 points'
      },
      {
        name: 'Occasional',
        text: (
          <p>
            Glass, ice (including snow), sand, and anything else that a normal person could
            eventually break or tunnel through using muscle power, as well as somewhat unusual
            structural materials, such as aluminum and copper.
          </p>
        ),
        points: '10 points'
      },
      {
        name: 'Rare',
        text: (
          <p>
            Bone, flesh, paper, and other materials rarely encountered in large quantities or as
            barriers
          </p>
        ),
        points: '5 points'
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Can Carry Objects</i>
          </p>
        ),
        text: (
          <p>
            Normally, you cannot carry anything while moving through matter. This enhancement lets
            you carry objects, including clothing and armor. If dropped, they “pop” into open space
            at the point where you entered the material. You cannot leave things inside solid
            matter! No encumbrance is +10%; Light, +20%; Medium, +50%; Heavy, +100%.
          </p>
        )
      },
      {
        name: 'Tunnel',
        text: (
          <p>
            You can leave a tunnel (of about your size) behind you, if you choose. This rearranges
            the object you are moving though without inflicting damage, and does not work at all on
            living targets. For an ability that can rip holes in objects and people, see Innate
            Attack (p. 61). +40%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Plant Empathy',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You have an unusual rapport with growing things. On encountering a plant, the GM will roll
        against your IQ. On a success, he will give you a general sense of its health and whether it
        is natural or supernatural in origin.
        <br />
        <br />
        Furthermore, this advantage functions as Empathy (p. 51) with respect to sentient plants,
        and allows you to use your Influence skills (see p. 359) on such entities, which will
        usually ensure a positive reaction.
        <br />
        <br />
        This ability frequently accompanies some level of Green Thumb (see Talent, p. 89) and often
        Sense of Duty (Plants) or Vow (Use plant material only if gathered without severe injury to
        the plant).
      </p>
    )
  },
  {
    title: 'Possession',
    type: 'advantage',
    points: '100 points',
    description: (
      <p>
        You can move your consciousness from body to body. In theory, you could live forever this
        way, moving from dying bodies to healthy ones. However, you cannot survive outside a living
        host. Should your current body die, you will die! Thus, you must keep your current host
        alive . . . at least until you can find a replacement.
        <br />
        <br />
        To possess a new host, you must concentrate for one second and physically touch him.
        Attempts to possess your own Puppet (p. 78) succeed automatically. In all other cases, roll
        a Quick Contest: your IQ vs. the subject’s Will. Your victim resists at +5 if he is in
        combat with you or otherwise wary of you, so it is best to be subtle.
        <br />
        <br />
        If you lose or tie, you are mentally stunned for 1d seconds. In addition, you may never
        attempt to possess that subject again – he is “immune” to you.
        <br />
        <br />
        If you win, you take over your victim’s body, completely suppressing his personality. Your
        previous host regains control of his body (if sentient) after 1d seconds of mental stun, and
        “comes to” with no memory of the possession.
        <br />
        <br />
        You gain your new host’s ST, DX, and HT (and secondary characteristics calculated from these
        scores), as well as his physical advantages and disadvantages. You keep your own IQ,
        Perception, and Will, and all of your mental traits. Your social traits may apply, depending
        on the laws and values of your society.
        <br />
        <br />
        Skills are a special case. Your IQ-, Perception-, and Will-based skills are unchanged. Other
        skills remain at the same relative skill level. For instance, if you have Acrobatics at
        DX+3, then you would have Acrobatics-12 in a DX 9 body and Acrobatics-14 in a DX 11 body.If
        you occupy a sentient host, you have sufficient access to his memories for the first few
        hours of the takeover to learn his name and daily routine, but not enough to learn IQ-based
        skills. To recall a specific fact from the host’s memories, you must roll vs. IQ, at -1 per
        hour since the takeover. Only one attempt is allowed for any given memory!
        <br />
        <br />
        If you occupy a host for a long time, or hop between multiple bodies, the GM is free to
        adjust your point value to reflect the most expensive body you regularly occupy. For more on
        this subject, see Chapter 9.
        <br />
        <br />
        With suitable modifiers, Posses - sion can represent diverse abilities seen in speculative
        fiction. Note that the Digital, Magical, Parasitic, Spiritual, and Telepathic limitations
        are mutually exclusive.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Assimilation</i>
          </p>
        ),
        text: (
          <p>
            When you enter a new body, you may choose to “forget” any of your current skills and use
            the points this frees up – and any unspent points – to learn ST-, DX-, or HT-based
            skills known by the host, at up to (host’s level)-1. For instance, if you do not know
            Acrobatics, but your host knows it at DX+3, you can pick it up at DX+2 . . . if you have
            enough points.
            <br />
            <br />
            Skills forgotten in order to learn new skills are gone. Skills learned from your host
            will move from body to body with you. +10%.
          </p>
        )
      },
      {
        name: 'Chronic',
        text: (
          <p>
            When you exit a host, you can leave a “back door” that lets you possess him again
            without a Quick Contest. This lets you buy your former host as a Puppet. You can only
            use this enhancement if you have enough unspent points to buy a Puppet at the time you
            leave your host. +20%.
          </p>
        )
      },
      {
        name: 'Mind Swap',
        text: (
          <p>
            Your host’s mind moves into your previous body instead of being suppressed – in effect,
            you “trade places.” +10%.
          </p>
        )
      },
      {
        name: 'Telecontrol',
        text: (
          <p>
            You remotely control your new host as if he were a puppet, leaving your original body in
            a trance. You may choose to return to your body at any time, and must do so if your host
            falls unconscious or dies (but not if he sleeps). As a result, you do not die if your
            host dies. +50%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Digital</i>
          </p>
        ),
        text: (
          <p>
            This limitation is only available to Digital Minds (p. 48). You take over computers, not
            living bodies. The target system must be connected to your current host computer via a
            network, and you must have complete access to it – voluntary or otherwise (see Computer
            Hacking, p. 184).
            <br />
            <br /> The target computer’s hardware must be complex enough to run your computer
            program; in general, its Complexity must be at least half your IQ (round up).
            <br />
            <br /> You can also take over a computer using a copy of yourself while leaving the
            original intact! However, unless you have the Digital version of Duplication (p. 50),
            any system you take over this way becomes an independent NPC that thinks it is you. This
            can be good or bad – the duplicate could become any type of Associated NPC (see p. 31).
            -40%.
          </p>
        )
      },
      {
        name: 'Magical',
        text: (
          <p>
            Your advantage is an innate magic talent. If the subject is protected by a spell that
            repels hostile magic, you must win a Quick Contest of your IQ vs. that spell before you
            can make a possession attempt.
            <br />
            <br /> If your victim has Magic Resistance, it subtracts from your IQ and adds to his
            Will during the actual possession attempt. -10%.
          </p>
        )
      },
      {
        name: 'Mindlink Required',
        text: (
          <p>
            You can only possess someone with whom you have a Mindlink. If the link is ever jammed,
            out of range, etc., the possession ends. If the Mindlink has the Telecom - munication
            limitation, Mindlink Required can represent control via an implant, telepresence, or
            similar technology. -40%.
          </p>
        )
      },
      {
        name: 'No Memory Access',
        text: <p>You have no access to your host’s memories. -10%.</p>
      },
      {
        name: 'Parasitic',
        text: (
          <p>
            You enter your host’s body physically. You must have Permeation (Flesh) (p. 75) to do
            this, unless your host has sufficient Payload (p. 74) to contain you – and your victim
            must have a higher Size Modifier than you.
            <br />
            <br />
            After entering your victim’s body, you may attempt to possess him. He resists with the
            higher of HT or Will. You aren’t forced out if you lose, but he is “immune” to you, so
            you need to find another host soon.
            <br />
            <br />
            While you are in someone else’s body, he (if he is still uncontrolled) or his friends
            might be able to use technological means to detect you – and possibly remove you.
            Attacks that penetrate or ignore your host’s DR can injure you, but his HP act as extra
            DR for this purpose.
            <br />
            <br /> If you are microbial, you should purchase Injury Tolerance (Diffuse) (p. 60),
            which will protect you. The host nourishes you, and may have to eat extra food as a
            result. You can choose to leave at any time, the same way you entered.
            <br />
            <br /> You may also temporarily release your host while continuing occupation. If you
            do, you will have to win a new Quick Contest to regain control. -60%.
          </p>
        )
      },
      {
        name: 'Puppet Only',
        text: (
          <p>
            You may possess your own Puppets automatically, but you cannot possess anyone else.
            -30%.
          </p>
        )
      },
      {
        name: 'Spiritual',
        text: (
          <p>
            You must have the Spirit meta-trait (p. 263) to take this limitation. Your spirit body
            merges with and occupies the body of your host. It remains insubstantial during the
            possession, traveling inside the host but otherwise inaccessible to you and effectively
            mindless. It can be injured as detailed under Parasitic, but only by attacks that affect
            insubstantial things. A genuine exorcist can cast you out by winning a Quick Contest of
            his exorcism ability vs. your Will. You cannot return to a body you have been cast out
            of for at least 24 hours. You may choose to release your host at any time. If you are
            exorcised or leave voluntarily, the host recovers after 1d seconds of mental stun. -20%.
          </p>
        )
      },
      {
        name: 'Telepathic',
        text: <p>Your ability is part of the Telepathy psi power (see p. 257). -10%.</p>
      }
    ]
  },
  {
    title: 'Power Investiture',
    type: 'advantage',
    points: '10 points/level',
    description: (
      <p>
        A deity – god, demon lord, great spirit, cosmic power, etc. – has empowered you to cast
        “clerical” spells. Add your Power Investiture to your IQ when you learn spells granted by
        the deity who bestowed this advantage. For instance, IQ 12 and Power Investiture 2 (Thor)
        would let you learn spells granted by the god Thor (and only Thor) as if you had IQ 14.
        <br />
        <br />
        You may only learn clerical spells from a fixed list set by your deity, who may even dictate
        which specific spells you learn. The GM determines this list and takes on the role of your
        deity when you wish to learn new spells. However, because you are channeling divine will as
        opposed to studying magic, clerical spells do not have prerequisites.
        <br />
        <br />
        In general, the more Power Investiture you have, the “holier” you are. The maximum level of
        Power Investiture depends on your deity, as determined by the GM. Minor deities who have a
        limited ability to transfer power to their chosen, or a small range of possible spell
        effects, might grant only one level, while major deities might be more generous.
        <br />
        <br />
        Note that Power Investiture is a measure of your bond with your deity, while Clerical
        Investment (p. 43) and Religious Rank (p. 30) measure social power. These need not be
        related. Power Investiture might be restricted to high-ranking clerics . . . but a deity can
        grant power to anyone it wants (possibly to the chagrin of the church!).
        <br />
        <br />
        In some cases, you can add or increase Power Investiture in play. What this entails depends
        on the deity. To gain, keep, or improve Power Investiture, you nearly always have to take
        and adhere to one or more of the traits listed under Self-Imposed Mental Disadvantages (p.
        121). If you break these vows, you will lose some or all of your powers – perhaps until you
        have made proper penance, perhaps permanently. In effect, Power Investiture comes with a
        built-in Pact limitation (see p. 113); do not apply this modifier again.
        <br />
        <br />
        You may also need to meet certain physical requirements. Some deities only empower men,
        women, eunuchs, virgins . . . the GM should be creative. Should you lose a special
        requirement (such as virginity), your Power Investiture may be diminished or lost, reducing
        your point value accordingly.
        <br />
        <br />
        You can have both Magery and Power Investiture (unless your deity forbids this), but Magery
        does not improve clerical spells and Power Investiture does not aid magical spells. The
        clerical and magical versions of a given spell are entirely different spells, and clerical
        spells never count as prerequisites for magical spells. If you know both versions of a
        spell, they do not affect one another.
        <br />
        <br />
        Power Investiture is one possible way to handle “holy powers.” It is most appropriate in
        settings where priests are divinely inspired wizards. For other views of divine gifts, see
        Blessed (p. 40) and True Faith (p. 94).
      </p>
    )
  },
  {
    title: 'Precognition',
    type: 'advantage',
    points: '25 points',
    description: (
      <p>
        You receive glimpses of future events. You cannot control the content of these flashes – you
        just know that something interesting or important might happen, at some unspecified future
        date. You might learn this through visions, voices, or “sudden knowledge.” A vivid
        premonition of a terrible event might even require a Fright Check (p. 360)!
        <br />
        <br />
        Precognition only gives information that your “future self” could learn and that would
        matter to you. For instance, if you’re in New York, you are unlikely to have a premonition
        about a random murder in Los Angeles. But if the victim was a friend, or if the killing was
        important enough to make national news, you might “flash” on it.
        <br />
        <br />
        Nothing about the future is certain, though. Even if the GM has made up his mind, he could
        reconsider . . . although something related to the premonition should still happen. In most
        settings, predicted events will occur unless you take specific action to prevent them. (But
        the GM is free to rule that the future is immutable in his setting!).
        <br />
        <br />
        Whenever the GM feels a premonition would be appropriate, he will secretly make an IQ roll
        for you – usually during an encounter with a person or object. For instance, meeting someone
        with an important event in his future might set off a premonition related to that event,
        especially if it would affect you in some way. Similarly, seeing a picture of a place could
        set off a vision involving that location.
        <br />
        <br />
        A deliberate attempt to use Precognition requires 10 minutes of concentration, 2 FP, and an
        IQ roll at -8. You can attempt to read your own future, or that of another person. To
        deliberately read the future of someone else, you must be able to touch him.
        <br />
        <br />
        Precognition is normally limited to “seeing” into the near future – perhaps a week or so. At
        the GM’s option, however, a critical success or a very important event might result in
        visions from much further in the future.
        <br />
        <br />
        Note that Precognition includes Danger Sense (p. 47) – do not take both.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Cant See Own Death</i>
          </p>
        ),
        text: (
          <p>
            Can’t See Own Death: Your Precognition cannot detect people or events that the GM
            believes have a high probability of causing your death. Your ability does not include
            Danger Sense. -60%.
          </p>
        )
      },
      {
        name: 'ESP',
        text: <p>Your ability is part of the ESP psi power (see p. 255). -10%.</p>
      },
      {
        name: 'One Event',
        text: (
          <p>
            Your ability works only for a particular type of event: events involving you personally
            (if you scanned another, you would only see a significant event if you were involved);
            disasters; events related to death; events related to love, etc.
            <br />
            <br /> This limitation is mutually exclusive with Can’t See Own Death. -40%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Pressure Support',
    type: 'advantage',
    points: '5 to 15 points',
    description: (
      <p>
        Every character has a “native pressure.” For ordinary humans, this is the pressure of
        Earth’s atmosphere (“1 atmosphere”). A native pressure other than 1 atmosphere is a 0-point
        feature, but if you can survive for a prolonged period of time at a wide range of pressures,
        you have an advantage.
        <br />
        <br />
        This trait comes in three levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Pressure Support',
        text: (
          <p>
            You can survive at pressures between your native pressure and 10 times that.
            <br />
            <br /> (This would enable a human to survive on most of Earth’s continental shelves.)
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Pressure Support 2:',
        text: (
          <p>
            You can withstand pressures between your native pressure and 100 times that. (This would
            enable a human to survive anywhere in Earth’s oceans, save the deepest trenches.)
          </p>
        ),
        points: '10 points'
      },
      {
        name: 'Pressure Support 3:',
        text: <p>You are immune to the effects of high pressure.</p>,
        points: '15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Pressure Support lets your body stay at a constant internal pressure with respect to a
          constant and uniform external pressure.
          <br />
          <br />
          This protects against attacks that manipulate ambient pressure or crush the entire body,
          but provides no defense against localized or transient pressure changes. In particular,
          Pressure Support does not reduce or prevent damage from crushing attacks or explosions of
          any kind.
          <br />
          <br /> Those with Pressure Support often have the Sealed advantage (p. 82), but this is
          not required.
        </i>
      </strong>
    )
  },
  {
    title: 'Protected Sense',
    type: 'advantage',
    points: '5 points/sense',
    description: (
      <p>
        One of your ranged senses is protected against overload. It rapidly adapts to the most
        intense of stimuli, allowing you to function normally after a maximum of two seconds of
        impairment.
        <br />
        <br /> You will never suffer permanent damage to that sense as a result of excessive sensory
        input, and you get +5 to rolls to resist temporary damage and Sense-Based attacks targeting
        that sense.
        <br />
        <br />
        Protected Senses cost 5 points apiece. Protected Vision resists glare and eye damage from
        lasers, and lets Dark Vision, Infravision, and Night Vision adjust instantly from bright
        light to darkness.
        <br />
        <br />
        Protected Hearing protects against loud noises. Protected Taste/Smell filters out strong
        odors and tastes (but not toxins). The GM may permit other Protected Senses (Detect,
        Scanning Sense, etc.), with suitable justification.
      </p>
    )
  },
  {
    title: 'Psi Static',
    type: 'advantage',
    points: '30 points',
    description: (
      <p>
        You are a psionic “null.” Psionic abilities cannot directly affect you or anything you are
        carrying or wearing.
        <br />
        <br />
        For instance, a telekinetic could throw a rock at you, but he could not levitate you or grab
        a sword from your hand.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Area Effect</i>
          </p>
        ),
        text: (
          <p>
            You emit static in an area centered on you. The first level of Area Effect extends your
            static to everything within one yard. Each level after the first doubles this radius as
            usual; see Area Effect (p. 102). +50%/level.
          </p>
        )
      },
      {
        name: 'Switchable',
        text: (
          <p>
            You can switch this advantage off in order to allow friendly psis to affect you or
            operate within your area of effect. +100%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Resistable</i>
          </p>
        ),
        text: (
          <p>
            Your ability is not absolute. A psi can “burn” through your static and affect those
            protected by it by winning a Quick Contest of Will with you.
            <br />
            <br />
            If the attacking psi ability already requires a Quick Contest, the attacker rolls only
            once but the target gets +5 to resist. -50%
          </p>
        )
      }
    ]
  },
  {
    title: 'Psychometry',
    type: 'advantage',
    points: '20 points',
    description: (
      <p>
        You can sense the history of a place or inanimate object – its use, its user’s personality,
        etc. This is usually a supernatural gift of some sort (such as psi), but it could also
        represent a technological “time-scanning” power that can see the past.
        <br />
        <br />
        To use Psychometry, you must touch the subject item or location, concentrate for one second,
        and make an IQ roll. This roll is at no penalty for an event that occurred the same day, -1
        for one that occurred up to 10 days ago, -2 if up to 100 days ago, -3 if up to 3 years ago,
        -4 if up to 30 years ago, -5 if up to 300 years ago, and so on.
        <br />
        <br />
        At the GM’s option, you might notice very strong “vibes” on an IQ-4 roll, even if you aren’t
        concentrating. On a success, you receive the general sense of emotions and events tied to
        the object or place . . . if it is linked to emotionally charged events (an uneventful
        history might leave no impressions at all).
        <br />
        <br />
        This is not always a good thing – a terrifying impression might require a Fright Check (p.
        360)! On a critical success, you experience an actual vision. No matter how well you roll,
        you cannot detect magic, spirits, etc. Still, a magic item, ghostly haunt, or ritual site is
        likely to have an emotionally charged history, giving strong impressions.
        <br />
        <br />
        On a failure, you receive no impressions at all, and cannot attempt to read that object or
        place again for 24 hours.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>ESP</i>
          </p>
        ),
        text: <p>Your ability is part of the ESP psi power (see p. 255). -10%.</p>
      }
    ]
  },
  {
    title: 'Puppet',
    type: 'advantage',
    points: '5 or 10 points',
    description: (
      <p>
        <strong>
          <i>Prerequisites: Possession and either Ally or Dependent.</i>
        </strong>
        <br />
        <br />
        A Puppet is an Ally (p. 36) or Dependent (p. 131) who cannot resist your Possession
        advantage (p. 75). When you use Possession on him, you succeed automatically! This may be
        due to his nature or some special knowledge you have: a curse, his true name, the key to his
        mind, etc.
        <br />
        <br />
        A Puppet will always have IQ 0, or owe you a Duty (p. 133), or be Reprogrammable (p. 150).
        If he has a Duty, it must be Involuntary, and its frequency must be identical to the
        Puppet’s own frequency of appearance as an Ally or Dependent.
        <br />
        <br />
        Each Puppet costs 5 points. You can buy an entire group of related Allies as Puppets for 10
        points.
        <br />
        <br />
        These costs are for the Puppet advantage only; you must pay for your Ally or Dependent
        separately.
        <br />
        <br />
        It is common but not mandatory for such Allies to have the Minion enhancement or the
        Unwilling limitation.
      </p>
    )
  },
  {
    title: 'Racial Memory',
    type: 'advantage',
    points: '15 or 40 points',
    description: (
      <p>
        You have access to the memories of your direct ancestors (or earlier software generations,
        for Digital Minds). This ability comes in two forms:
      </p>
    ),
    subCategories: [
      {
        name: 'Racial Memory (Passive',
        text: (
          <p>
            Your talent is vague and totally passive. The GM secretly makes an IQ roll for you in
            any situation that your ancestors might have encountered.
            <br />
            <br />
            On a success, you get a feeling of déjà vu about the situation. It is up to you to
            interpret this.
            <br />
            <br />A critical success gives a vivid replay of ancient ancestral memories. On a
            failure, nothing happens. A critical failure results in a wrong impression.
          </p>
        ),
        points: '15 points'
      },
      {
        name: 'Racial Memory (Active)',
        text: (
          <p>
            You may use this advantage actively. If you want to know something, the GM first
            determines whether or not your ancestors knew the answer. Then he rolls against your IQ
            to see if you can gain access to the information.
            <br />
            <br /> If your ancestors didn’t have the answer and the roll succeeds, you will know
            that. On a critical failure, you will believe your ancestors didn’t know, even if they
            really did. This requires one turn of absolute concentration (the GM may require more
            elaborate preparations to recall very ancient memories).
          </p>
        ),
        points: 'points'
      }
    ]
  },
  {
    title: 'Rapid Healing',
    type: 'advantage',
    points: '5 or 15 points',
    description: <p>Your wounds heal quickly. This trait comes in two levels:</p>,
    subCategories: [
      {
        name: 'Rapid Healing',
        text: (
          <p>
            Whenever you roll to recover lost HP or to see if you can get over a crippling injury,
            you get +5 to your effective HT. Prerequisite: HT 10+.
          </p>
        ),
        points: '5 points'
      },
      {
        name: 'Very Rapid Healing',
        text: (
          <p>
            As above, but when you roll to recover lost HP, a successful HT roll means you heal two
            HP, not one. Prerequisite: HT 12+.
          </p>
        ),
        points: '15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Note that this advantage does not hasten recovery from the short-term effects of injury,
          such as stunning and knockout; get Recovery (p. 80) for that.
        </i>
      </strong>
    )
  },
  {
    title: 'Rapier Wit',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You can use witty repartee to stun your foes in combat. This does not require a combat
        maneuver – talking is a free action (p. 363).
        <br /> Roll a Quick Contest of Public Speaking skill vs. your opponent’s Will.
      </p>
    ),
    subCategories: [
      {
        name: 'Modifiers',
        text: (
          <p>
            -2 if your target has the Clueless or No Sense of Humor disadvantage; any modifier the
            GM assigns based on your description of the verbal attack; -1 per opponent beyond the
            first to affect a group (and you must know something the entire group has in common;
            e.g., they’re all flunkies of the same household or members of the same military unit).
            <br />
            <br />
            Opponents with the Unfazeable advantage (p. 95) are immune to Rapier Wit.
          </p>
        )
      },
      {
        text: (
          <p>
            If you win, your opponent is mentally stunned (see p. 420). A critical success causes
            one HP of physical damage as well – your victim injures himself accidentally (drops
            something on his foot, chokes on his own tongue, etc.).
            <br />
            <br />
            If you lose, there is no effect. On a critical failure, you enrage your opponent,
            possibly triggering such disadvantages as Berserk and Bloodlust!
          </p>
        )
      }
    ],
    extraText: (
      <strong>
        <i>This advantage is usually only appropriate in a silly campaign!</i>
      </strong>
    )
  },
  {
    title: 'Reawakened',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        techniques, etc.) learned during previous lives. You must purchase these abilities normally;
        Reawakened is just a special Unusual Background (p. 96) that explains how you learned them
        without a teacher.
        <br />
        <br />
        This trait is only available if reincarnation is a fact in the setting (GM’s decision).
      </p>
    )
  },
  {
    title: 'Recovery',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You recover from unconsciousness very quickly. When determining the length of time you
        remain unconscious for any reason, divide all times by 60: hours become minutes, minutes
        become seconds . . . even a month-long coma becomes a mere 12- hour sleep.
      </p>
    )
  },
  {
    title: 'Reduced Consumption',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        You can go for a long time without food and water, or fuel – although you still require
        these things. (For indefinite endurance, see Doesn’t Eat or Drink, p. 50.) This advantage
        comes in four levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Reduced Consumption 1:',
        text: <p>You require 2/3 as much food and water, or fuel, as usual (“two meals a day”).</p>,
        points: '2 points'
      },
      {
        name: 'Reduced Consumption 2:',
        text: <p>You require 1/3 as much food and water, or fuel, as usual (“one meal a day”).</p>,
        points: '4 points'
      },
      {
        name: 'Reduced Consumption 3:',
        text: (
          <p>
            You require food and water only once per week (“one meal a week,” or about 5% as much).
          </p>
        ),
        points: '6 points'
      },
      {
        name: 'Reduced Consumption 4:',
        text: (
          <p>
            You require food and water only once per month (“one meal a month,” or about 1% as
            much).
          </p>
        ),
        points: '8 points'
      },
      {
        text: (
          <p>
            Note that one or even two levels of this advantage might be appropriate for ascetics in
            cinematic games!
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Cast-Iron Stomach</i>
          </p>
        ),
        text: (
          <p>
            You require the standard amount of food and water, but the quality is irrelevant. You
            can eat rotten vegetables and fuzzy blue-green meat, and drink dishwater and sour milk.
            <br />
            <br />
            Instead of reducing how often you must eat, reduce your demands on life support (and
            your food costs) by a like amount: to 2/3 normal at level 1, 1/3 normal at level 2, 5%
            normal at level 3, and 1% normal at level 4.
            <br />
            <br />
            You get a bonus equal to your level (+1 to +4) to resist the effects of food-borne
            poisons or diseases not tailored expressly for you, but -3 on reactions from anyone
            watching you eat! -50%.
          </p>
        )
      },
      {
        name: 'Food Only',
        text: <p>You require less food, but the usual amount of water. -50%.</p>
      },
      {
        name: 'Water Only',
        text: <p>You require less water, but the usual amount of food. -50%.</p>
      }
    ]
  },
  {
    title: 'Regeneration',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        Your wounds heal in mere hours, minutes, or seconds! To regenerate lost limbs, you will also
        need Regrowth (below) – but Regeneration will greatly accelerate that ability.
        <br />
        <br />
        Regeneration includes Rapid Healing (p. 79) at no extra cost.
        <br />
        <br />
        You cannot have Regeneration if you have Slow Healing (p. 155) or Unhealing (p. 160).
        Regeneration is compatible with Draining (p. 132), but it does not restore the daily HP loss
        due to that disadvantage.
        <br />
        <br />
        The cost of this trait depends on your regeneration speed:
      </p>
    ),
    subCategories: [
      {
        name: 'Regeneration (Slow)',
        text: <p>You recover 1 HP every 12 hours, in addition to normal healing.</p>,
        points: '10 points'
      },
      {
        name: 'Regeneration (Regular):',
        text: <p>You recover 1 HP per hour.</p>,
        points: '25 points'
      },
      {
        name: 'Regeneration (Fast)',
        text: <p>You recover 1 HP per minute</p>,
        points: '50 points'
      },
      {
        name: 'Regeneration (Very Fast):',
        text: <p>You recover 1 HP per second.</p>,
        points: '100 points'
      },
      {
        name: 'You recover 1 HP per second.',
        text: <p>You recover 10 HP per second</p>,
        points: '150 points'
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Heals Radiation</i>
          </p>
        ),
        text: (
          <p>
            You shed accumulated rads at 10 times the rate at which you heal missing HP. For
            instance, Regeneration (Regular) removes 10 rads per hour. This will heal “permanent”
            radiation damage. +40%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Radiation Only</i>
          </p>
        ),
        text: <p>As Heals Radiation, but you only shed rads – you do not heal HP. -60%.</p>
      }
    ]
  },
  {
    title: 'Regrowth',
    type: 'advantage',
    points: '40 points',
    description: (
      <p>
        You can regrow lost limbs and organs! A lost ear, finger, toe, claw, tentacle tip, etc.
        regrows in 1d weeks; a lost hand or foot in 1d+1 months; and a lost eye, arm, or leg in 2d+2
        months.
        <br />
        <br />
        If you also have Regeneration (above), Regrowth works much faster: all lost body parts
        regrow in the time it takes you to heal to full HP.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Minor</i>
          </p>
        ),
        text: (
          <p>
            You can only regrow ears, fingers, toes, and other small bits – not hands, feet, eyes,
            etc. -50%.
          </p>
        ),
        points: 'points'
      }
    ]
  },
  {
    title: 'Resistant',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You are naturally resistant (or even immune) to noxious items or substances that are not
        direct, physical attacks. This gives you a bonus on all HT rolls to resist incapacitation or
        injury from such things.
        <br />
        <br />
        The bonus from Resistant applies to all rolls to resist noxious effects within a particular
        category – usually some combination of disease, poison, and environmental syndromes
        (altitude sickness, the bends, space sickness, etc.). It also applies to rolls to resist
        attacks that use these effects. This includes Afflictions with one of Blood Agent, Contact
        Agent, Follow- Up, or Respiratory Agent, and Innate Attacks that have such modifiers and
        inflict toxic or fatigue damage.
        <br />
        <br />
        Resistant does not protect against effects that Damage Resistance or Protected Sense either
        stop or provide a HT bonus to resist. This includes Afflictions and Innate Attacks that do
        not have any of the modifiers given above.
        <br />
        <br />
        The base cost for Resistant depends on the rarity of the effects it counteracts:
      </p>
    ),
    subCategories: [
      {
        name: 'Very Common',
        text: (
          <p>
            A broad category within the noxious items described above. Example: Metabolic Hazards
            (all threats that only affect the living, including all disease and poison, plus such
            syndromes as altitude sickness, bends, seasickness, and jet lag).
          </p>
        ),
        points: '30 points'
      },
      {
        name: 'Common',
        text: (
          <p>
            group of related items encountered as often in nature as in an attack, or some other
            suitably broad subset of “Very Common.” Example: Poison (all toxins, but not asphyxiants
            or corrosives) or Sickness (all diseases and environmental syndromes).
          </p>
        ),
        points: '15 points'
      },
      {
        name: 'Occasional',
        text: (
          <p>
            A group of closely related items more often encountered in nature than as a deliberate
            attack, or a subset of a “Common” group. Examples: Disease (all bacteria, viruses,
            fungus infections, etc.) or Ingested Poison.
          </p>
        ),
        points: '10 points'
      },
      {
        name: 'Rare',
        text: (
          <p>
            specific item or environmental syndrome, or a subset of an “Occasional” group. Examples:
            Accel - eration (blackouts due to extreme G-forces), Altitude Sickness, Bends
            (decompression sickness), Seasick - ness, or Space Sickness; Nano - machines.
          </p>
        ),
        points: '5 points'
      },
      {
        text: (
          <p className="sub-section">
            Multiply base cost to reflect your degree of resistance: You are totally immune to all
            noxious effects, and never have to make resistance rolls (write this as “Immunity” on
            your character sheet): x1.
            <br />
            <br />
            You have +8 to all HT rolls to resist: x1/2.
            <br />
            <br />
            You have +3 to all HT rolls to resist: x1/3.
            <br />
            <br />
            Drop all fractions from the final cost.
            <br />
            <br />
            An ordinary human could believably have any level of resistance to a mundane “Rare”
            item, such as Sea - sickness. He might also have Resistant to Disease (+3) [3],
            Resistant to Disease (+8) [5], or Resistant to Poison (+3) [5].
            <br />
            <br />
            Anything more would be superhuman. Golems, robots, undead, and other beings that are not
            truly “alive” must take Immunity to Metabolic Hazards [30]; this is already included in
            the Machine meta-trait (p. 263). When in doubt, the GM’s word is final.
          </p>
        )
      },
      {
        name: 'Mental Resistance',
        text: (
          <p>
            It is possible to be Resistant to a purely mental threat. This works as described above,
            except that the bonus applies to resistance rolls against IQ and Will instead of HT.
            <br />
            <br />
            “Psionics” is an allowed category, and is considered Very Common.
          </p>
        )
      }
    ]
  },
  {
    title: 'Scanning Sense',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You can emit energy, bounce it off objects, and analyze the returned signal to build up a
        “picture” of your surroundings. This lets you discern size and shape, but not color or fine
        detail (such as writing).
        <br />
        <br />
        It has nothing to do with the normal human sense of sight, and requires no light. As a
        result, you may ignore darkness penalties in combat. Perception is limited to a 120° arc in
        front of you. Your sense is “active.” Anyone who can sense the signal you emit can detect
        you, out to twice your own range. Unlike other sensory advantages, however, you can turn
        this ability off; see Turning Advantages Off and On (p. 34).
        <br />
        <br />
        Below are several varieties of Scanning Sense. Each is a separate advantage, with its own
        special rules. Where these rules contradict the general ones given above, follow the special
        rules.
        <br />
        <br />
        Each sense also has a base range. To adjust this, take Increased Range (p. 106) or Reduced
        Range (p. 115).
        <br />
        <br />
      </p>
    ),
    subCategories: [
      {
        name: 'Radar',
        text: (
          <p>
            Your Scanning Sense uses radio waves. Base range is 2,000 yards. You can only detect
            large (humansized or larger), dense objects.
            <br />
            <br />
            On a Sense roll, you get a general idea of the relative size of the object, and whether
            it is moving, but nothing more precise. You cannot get an actual “image” with Radar, or
            use it to aim attacks.
            <br />
            <br />
            Radar works best on flying targets; roll at -4 to spot anyone who is not silhouetted
            against the sky. Radar does not work at all underwater.
          </p>
        ),
        points: '20 points'
      },
      {
        name: 'Imaging Radar',
        text: (
          <p>
            Your Scanning Sense uses millimeter-wave radar. Base range is 200 yards. You can spot
            small objects and determine their shape, but you must make a Sense roll to distinguish
            fine relief (e.g., to identify a face).
            <br />
            <br />
            Imaging Radar can see through thin fabric or vegetation. You get +3 to locate objects
            like concealed weapons, and may ignore penalties for spotting objects hidden behind
            light brush. Ordinary radar detectors detect Imaging Radar at -4.
            <br />
            <br />
            Imaging Radar does not work underwater.
          </p>
        ),
        points: '20 points'
      },
      {
        name: 'Ladar',
        text: (
          <p>
            Your Scanning Sense uses a laser beam. Base range is 200 yards. Ladar is very similar to
            Imaging Radar, but the beam is narrower and offers better resolution. This gives -4 on
            rolls to locate objects of interest, but +4 on rolls to identify them.
            <br />
            <br /> Only specialized ladar detectors can detect Ladar, and at -4 even then. Ladar
            cannot penetrate dense smoke or solid objects. It has 10-50% range in falling rain or
            snow, and 1% range under - water.
          </p>
        ),
        points: '20 points'
      },
      {
        name: 'Para-Radar',
        text: (
          <p>
            Your Scanning Sense uses energy unknown to 21st-century science. Treat Para-Radar as
            Imaging Radar, except that it functions in any environment!
            <br />
            <br />
            Ordinary radar detectors cannot detect Para-Radar, although some ultra-tech sensors
            might be able to do so.
          </p>
        ),
        points: '40 points'
      },
      {
        name: 'Sonar',
        text: (
          <p>
            Your Scanning Sense uses ultrasonic sound waves. Base range is 2,000 yards underwater.
            You can spot small objects and determine their shape, but you must make a Sense roll to
            distinguish fine relief (e.g., to identify a face).
            <br />
            <br />
            Sonar does not function if you are deafened, and can be “jammed” or fooled by a very
            loud noise (e.g., an explosion). Individuals with Ultrahearing can detect Sonar.
            <br />
            <br />
            Sonar is much less effective in air: range is only 20 yards multiplied by air pressure
            in atmospheres (one atmosphere on Earth).
            <br />
            <br />
            Sonar is completely ineffective in vacuum.
          </p>
        ),
        points: '20 points'
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Extended Arc</i>
          </p>
        ),
        text: (
          <p>
            You can scan an arc greater than 120°. A 240° arc (as described for Peripheral Vision,
            p. 74) is +75%; a 360° arc (as described for 360° Vision, p. 34) is +125%.
          </p>
        )
      },
      {
        name: 'Low-Probability Intercept (LPI)',
        text: (
          <p>
            This is only available for Radar and Sonar. You can switch this enhancement on and off.
            <br />
            <br />
            Turning it on makes your signal difficult to detect. This halves range, but your
            Scanning Sense can only be detected at 1.5 times the halved range. +10%.
          </p>
        )
      },
      {
        name: 'Multi-Mode',
        text: (
          <p>
            This is only available for Radar. You can switch between Radar and Imaging Radar.
            <br />
            <br />
            (This is much cheaper than buying the two advantages separately, because they overlap to
            some extent.) +50%.
          </p>
        )
      },
      {
        name: 'Penetrating',
        text: (
          <p>
            This is only available for Para-Radar. You can “see” inside any object within range.
            This functions exactly as Penetrating Vision 2 (p. 74). +50%.
          </p>
        )
      },
      {
        name: 'Targeting',
        text: (
          <p>
            By taking an Aim maneuver, you can “lock onto” any object within range and determine its
            precise range and speed – just as if you had a high-tech rangefinder. This gives you +3
            to hit that target with an aimed ranged attack. +20%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Targeting Only</i>
          </p>
        ),
        text: (
          <p>
            As Targeting, but you can only use your sense to “lock onto” targets already spotted
            with another sense; you cannot use it to spot things. -40%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Sealed',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You are encased in a gas- and liquid- impermeable layer. This makes you waterproof, and
        grants complete immunity to corrosive or toxic agents that must touch skin or exposed
        machinery to work.
        <br />
        <br />
        You must still breathe, unless you also have Doesn’t Breathe (p. 49); however, your exterior
        breathing apparatus (nose, snorkel, etc.) is protected by this trait. Likewise, you are not
        automatically pressurized; for that, take Pressure Support (p. 77) or Vacuum Support (p.
        96).
      </p>
    )
  },
  {
    title: 'Security Clearance',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        A government agency or corporation trusts you with access to sensitive information that
        would otherwise be “off limits” to someone of your Rank or Status.
        <br />
        <br />
        For instance, a general “cleared” for military secrets commensurate with his Military Rank
        would not have to buy Security Clearance separately, but a civilian with exactly the same
        level of access would have to pay points for the privilege.
        <br />
        <br />
        Point cost depends on your degree of access:
      </p>
    ),
    subCategories: [
      {
        text: (
          <p>
            You have access to a relatively narrow range of secrets on a “need to know” basis.
            <br />
            <br />
            Example: a strategic bomber pilot, who might know secrets about aircraft, weapons, and
            targets.
          </p>
        ),
        points: '5 points'
      },
      {
        text: (
          <p>
            You have either free access to a narrow range of secrets or “need to know” access to a
            broad range of secrets.
            <br />
            <br />
            Example: a counterintelligence officer, who would have limited access to many secrets,
            as part of his job is to protect them.
          </p>
        ),
        points: '10 points'
      },
      {
        text: (
          <p>
            You have free access to a broad range of secrets.
            <br />
            <br />
            Example: a cinematic secret agent, who will know almost any secret the plot requires him
            to know
          </p>
        ),
        points: '15 points'
      }
    ],
    extraText: (
      <strong>
        <i className="sub-section">
          Halve these values (round up) if the organization that grants the Security Clearance is of
          relatively minor importance (e.g., a small corporation or municipal government).
          <br />
          <br />
          You cannot receive a security clearance without a thorough background check.
          <br />
          <br />
          The GM is free to forbid this advantage to any PC who has a suspicious past (including
          such traits as Debt or Secret) or an unstable personality (for instance, Paranoia or
          Sadism).
        </i>
      </strong>
    )
  },
  {
    title: 'See Invisible',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You can see objects or individuals that are normally invisible. Buy this advantage
        separately for each kind of invisibility.
      </p>
    )
  },
  {
    title: 'Sensitive Touch',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        Your fingertips or equivalent organs are extremely sensitive, allowing you to sense residual
        heat in a chair, faint vibrations in the floor as someone approaches, etc. You get +4 (in
        addition to any Acute Touch bonuses) on any task that utilizes the sense of touch; e.g., a
        Forensics roll to note the similarities or differences between two pieces of fabric, or a
        Search roll to feel out tiny concealed objects.
      </p>
    )
  },
  {
    title: 'Serendipity',
    type: 'advantage',
    points: '15 points/level',
    description: (
      <p>
        You have the knack of being in the right place at the right time. Each level of this trait
        entitles you to one fortuitous but plausible coincidence per game session.
        <br />
        <br />
        The details are up to the GM. For instance, the GM might declare that one of the guards you
        need to talk your way past just happens to be your cousin, or that there is a sports car
        idling in front of the bank just as you run outside in pursuit of the fleeing bank robbers.
        <br />
        <br />
        From time to time, the GM may rule that a single implausible coincidence counts as some or
        all of your lucky breaks for a given session (e.g., the mechanic at the local garage has all
        the parts you need to complete your ultra-tech contragrav belt).
        <br />
        <br />
        You are free to suggest serendipitous occurrences to the GM, but he gets the final say.
        Should he reject all your suggestions but fail to work Serendipity into the game session,
        you will get your lucky breaks next game session.
      </p>
    )
  },
  {
    title: 'Shadow Form',
    type: 'advantage',
    points: '50 points',
    description: (
      <p>
        You can become a two-dimensional shadow. This lets you slip along walls and floors – and
        through the thinnest cracks (anything wide enough to fit your shoulders through) – at your
        usual ground Move.
        <br />
        <br />
        You can also defy gravity, creeping up walls and across ceilings at half Move. Physical
        attacks do half damage to you in this form.
        <br />
        <br />
        Energy attacks do normal damage, except for light-based attacks, which do 50% extra damage.
        Magic, psi, and other purely mental abilities affect you normally.
        <br />
        <br />
        You are subject to a few major restrictions while in this form. You cannot walk through
        three-dimensional space; you must slide along an object.
        <br />
        <br />
        Furthermore, you cannot perform any purely physical attacks or actions, and you cannot carry
        ordinary items or affect them in any way. You can use magic, psi, and similar abilities,
        however.
        <br />
        <br />
        If you cannot switch out of Shadow Form, Shadow Form is a disadvantage worth -20 points.
        This will make it difficult to interact with others! You may still add enhancements, but
        they will work like limitations, reducing the value of the disadvantage. For instance, a
        +50% enhancement would reduce the value of the disadvantage by 50%, to -10 points.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Can Carry Objects</i>
          </p>
        ),
        text: (
          <p>
            You may carry objects. They take Shadow Form when picked up and return to normal when
            put down. You still may not affect non-shadow objects. No encumbrance is +10%; Light,
            +20%; Medium, +50%; Heavy, +100%.
          </p>
        ),
        points: 'points'
      }
    ]
  },
  {
    title: 'Shrinking',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        You can shrink at will. Each level of Shrinking lets you change your Size Modifier by -1, at
        the rate of -1 SM per second. You return to normal size at the same rate. By default, you
        cannot carry any equipment, not even clothing, when you shrink. The ability to carry objects
        while shrunk is an enhancement.
        <br />
        <br />
        When you shrink, find your new height from the Size Modifier Table (p. 19). Every -6 to SM
        reduces height by a factor of 10. Reduce Move, reach, damage (with unarmed attacks, Innate
        Attacks, or shrunken weapons), HP, and DR in proportion to height.
        <br />
        <br />
        Every full -2 to SM also reduces weight by a factor of 10; for odd-numbered levels, treat
        the extra -1 as an additional factor of 3 (e.g., -3 to SM reduces weight by a factor of 30).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Affects Others</i>
          </p>
        ),
        text: (
          <p>
            You can bring your friends with you when you shrink! +50% per person you can affect at
            the same time.
          </p>
        )
      },
      {
        name: 'Can Carry Objects',
        text: (
          <p>
            You may carry objects. This is limited to equipment you are actually carrying or wearing
            when you shrink.
            <br />
            <br />
            Such items regain normal size when put down; at the GM’s option, they might sweep you
            aside as they grow, or even return to normal size beneath you, stranding you high above
            the ground!
            <br />
            <br />
            No encumbrance is +10%; Light, +20%; Medium, +50%; Heavy, +100%.
            <br />
            <br />
            Full Damage: You inflict full damage when shrunk. (GMs be warned: this makes for an
            almost perfect assassin.) +100%.
            <br />
            <br />
            Full DR: You retain full DR when shrunk. +30%.
            <br />
            <br />
            Full HP: You retain full HP when shrunk. +30%.
            <br />
            <br />
            Full Move: You retain full Move when shrunk. +30%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Signature Gear',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You have distinctive, valuable possessions unrelated to your wealth level. This gear is as
        much a part of your personal legend as are your reputation and skills. You must explain
        where it came from: you won your starship in a card game, inherited your magic sword from
        your mentor, etc.
        <br />
        <br />
        For equipment normally bought with money, such as weapons and armor, each point in Signature
        Gear gives goods worth up to 50% of the average campaign starting wealth (but never cash).
        For anything built as a character, use the rules under Allies (p. 36) instead. It is up to
        the GM whether to treat android companions, faithful steeds, custom vehicles, etc. as
        equipment (with a cash cost) or characters (with a point cost).
        <br />
        <br />
        If you misplace Signature Gear or sell it unwillingly, or an NPC steals or confiscates it,
        the GM must give you an opportunity to recover it in the course of the adventure. If it is
        truly lost forever through no fault of your own, the GM will give you back your points (or
        replace the item with another of equal value). However, should you sell or give away your
        Signature Gear of your own free will, it is gone, along with the points spent on it!
      </p>
    )
  },
  {
    title: 'Silence',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        You can move and breathe noiselessly. You get +2 per level to Stealth skill when you are
        perfectly motionless, or +1 if moving (even in armor, etc.).
        <br />
        <br />
        These bonuses help only in the dark, or against listening devices, blind creatures, and
        others who must rely on hearing to find you.
      </p>
    )
  },
  {
    title: 'Single Minded',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You can really concentrate! You get +3 to success rolls for any lengthy mental task you
        concentrate on to the exclusion of other activities, if the GM feels such focus would be
        beneficial. You tend to ignore everything else while obsessed (roll vs. Will to avoid this),
        and have -5 to all rolls to notice interruptions.
        <br />
        <br />
        The GM may rule that certain complex tasks (e.g., inventing, magic, and social activities)
        require you to divide your attention. This trait has no effect in such situations.
      </p>
    )
  },
  {
    title: 'Slippery',
    type: 'advantage',
    points: '2 points/level',
    description: (
      <p>
        You are hard to hold! You might be slimy, molecularly smooth, or surrounded by a force field
        that negates friction. Each level of this trait (maximum five levels) gives +1 on all ST,
        DX, and Escape rolls to slip restraints, break free in close combat, or squeeze through
        narrow openings.
      </p>
    )
  },
  {
    title: 'Social Chameleon',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You have the knack of knowing exactly what to say – and when to say it – around your social
        “betters.” You are exempt from reaction penalties due to differences in Rank or Status.
        <br />
        <br />
        In situations where there would be no such penalty, you get +1 on reactions from those who
        demand respect (priests, kings, etc.). This is a cine - matic advantage!
      </p>
    )
  },
  {
    title: 'Social Regard',
    type: 'advantage',
    points: '5 points per +1 reaction',
    description: (
      <p>
        You are a member of a class, race, sex, or other group that your society holds in high
        regard. To be an advantage, this must be obvious to anyone who meets you. This is the
        opposite of Social Stigma (p. 155); membership in a given social group cannot result in both
        Social Regard and Social Stigma.
        <br />
        <br />
        Social Regard costs 5 points per +1 to reaction rolls, to a maximum of +4. This is not a
        Reputation, despite the similarities in cost and effect. You are treated well because of
        what you are, not because of who you are. Think of it as “privilege by association.”
        <br />
        <br />
        The way you are treated on a good reaction roll will depend on the type of Regard:
      </p>
    ),
    subCategories: [
      {
        name: 'Feared',
        text: (
          <p>
            Others will react to you much as if you had successfully used Intimidation skill (p.
            202). Those who like you stand aside, while those who dislike you flee rather than risk
            a confrontation. You are met with silent deference, and perhaps even respect, but never
            friendly familiarity. Examples: a god among men or an Amazon warrior.
          </p>
        )
      },
      {
        name: 'Respected',
        text: (
          <p>
            You receive polite and obsequious deference, much as if you had high Status (p. 28),
            regardless of your actual Status. Social interactions other than combat usually go
            smoothly for you – but there will be times when the kowtowing gets in the way.
            <br />
            <br />
            Examples: a member of a priest caste or a ruling race.
          </p>
        )
      },
      {
        name: 'Venerated',
        text: (
          <p>
            Total strangers react to you in a caring way. They give up seats, let you ahead of them
            in lines, and receive your every word as pearls of wisdom. They also take great pains to
            prevent you from putting yourself in danger or even discomfort – even when you need to
            do so! Example: an elderly person in many societies.
          </p>
        )
      }
    ]
  },
  {
    title: 'Speak Underwater',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You can talk normally while submerged, and you can understand what others say while
        underwater.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Interface Crossing</i>
          </p>
        ),
        text: (
          <p>
            You can talk to those outside of the water while submerged, and can understand people on
            the surface talking to you. +50%.
          </p>
        ),
        points: 'points'
      }
    ]
  },
  {
    title: 'Speak With Animals',
    type: 'advantage',
    points: '25 points',
    description: (
      <p>
        You can converse with animals. The quality of information you receive depends on the beast’s
        IQ and the GM’s decision on what the animal has to say.
        <br />
        <br />
        Insects and other tiny creatures might only be able to convey emotions such as hunger and
        fear, while a chimp or a cat might be able to engage in a reasonably intelligent discussion.
        <br />
        <br />
        It takes one minute to ask one question and get the answer – if the animal decides to speak
        at all. The GM may require a reaction roll (+2 to reactions if you offer food).
        <br />
        <br />
        The GM is free to rule that alien, unnatural, or mythical beasts don’t count as “animals”
        for the purpose of this advantage.
      </p>
    ),
    subCategories: [
      {
        name: 'Specialized',
        text: (
          <p>
            You can only communicate with certain animals. “All land animals” (including birds,
            insects, and land-dwelling mammals and reptiles) or “All aquatic animals” (including
            amphibians, fish, mollusks, crustaceans, and cetaceans) is -40%; one class (e.g.,
            “Mammals” or “Birds”), -50%; one family (e.g., “Felines” or “Parrots”), -60%; one
            species (e.g., “House Cats” or “Macaws”), -80%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Speak With Plants',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You can communicate empathically with plants. All earthly plants are IQ 0, but a large tree
        might be “wiser” than the average ivy, at the GM’s whim. A plant might know how recently it
        was watered or walked on, or something else that directly bears on its well-being, but would
        be unable to relate an overheard phone conversation.
        <br />
        <br />
        Any normal plant will always cooperate, within the limits of its ability. A mutant cabbage
        from Mars might require a reaction roll!
      </p>
    )
  },
  {
    title: 'Special Rapport',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You have a unique bond with another person. This acts as a potent version of Empathy (p. 51)
        that works only with one person, without regard to distance. You always know when your
        partner is in trouble, in pain, lying, or in need of help, no matter where he is.
        <br />
        This requires no IQ roll. Your partner receives the same benefits with respect to you. Both
        partners in a Special Rapport must buy this advantage.
        <br />
        <br /> Your partner need not be a lover, or even a close friend, but the GM has the final
        say. In particular, the GM may wish to forbid PCs from buying Special Rapports with powerful
        NPCs who would otherwise qualify as Patrons (or allow it, but require an Unusual
        Background).
      </p>
    )
  },
  {
    title: 'Spines',
    type: 'advantage',
    points: '1 or 3 points',
    description: (
      <p>
        You have sharp spines, like those of a porcupine or an echidna, located on strategic parts
        of your body.
        <br />
        <br />
        This is defensive weaponry, intended to discourage attackers; you cannot use your Spines
        actively. However, you get a DX-4 roll to hit each foe in close combat with you once per
        turn, as a free action. Roll at +2 against foes who attacked you from behind.
        <br />
        <br />
        Those who grapple or slam you are hit immediately and automatically – and those who slam you
        take maximum damage!
      </p>
    ),
    subCategories: [
      {
        name: 'Short Spines',
        text: <p>One or two inches long. Do 1d-2 impaling damage. Reach C.</p>,
        points: '1 point'
      },
      {
        name: 'Long Spines',
        text: <p>One or two feet long. Do 1d impaling damage. Reach C.</p>,
        points: '3 points'
      }
    ]
  },
  {
    title: 'Spirit Empathy',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You are in tune with spirits, and receive the benefits of Empathy (p. 51) when dealing with
        them.
        <br />
        <br />
        You can get a feeling for the general intentions of any spirit you encounter by making a
        successful IQ roll. As well, your Influence skills (Diplomacy, Sex Appeal, etc.) work
        normally on spirits, which sets you aside from most mortals.
        <br />
        <br />
        Spirit Empathy does not prevent evil or mischievous spirits from seeking to harm you, but at
        the GM’s option, it might make it easier to detect and counter their plots.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Specialized</i>
          </p>
        ),
        text: (
          <p>
            You are naturally in tune with the customs and moods of one specific class of spirits.
            Possibilities include angels, demons, elementals, faerie, ghosts, and anything else the
            GM wishes to allow. -50%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Stretching',
    type: 'advantage',
    points: '6 points/level',
    description: (
      <p>
        You can stretch your body in any direction. Each level of Stretching lets you increase your
        effective SM by +1 with any body part without increasing your overall SM.
        <br />
        <br />
        You can elongate your arms to increase reach (but not swinging damage, as Stretching gives
        no extra mass or muscle), your legs to negotiate obstacles, your neck to see over barriers,
        etc. For more information, see Size Modifier and Reach (p. 402).
        <br />
        <br />
        Your body parts grow or shrink at the rate of ±1 SM per second. By itself, Stretching is
        ideal for machines with telescoping manipulators. A super with a “rubber body” should add
        some combination of Elastic Skin (p. 51), Double-Jointed (p. 56), Morph (p. 84), and Super
        Jump (p. 89).
      </p>
    )
  },
  {
    title: 'Striker',
    type: 'advantage',
    points: '5, 6, 7, or 8 points',
    description: (
      <p>
        You have a body part that you can use to strike an aimed blow, but not to manipulate objects
        (see Extra Arms, p. 53) or walk on (see Extra Legs, p. 54). This might be a set of horns or
        protruding tusks, a heavy tail, a stinger, or any number of other natural weapons.
        <br />
        <br />
        Your Striker can attack at reach C (“close combat only”), inflicting thrust damage at +1 per
        die; e.g., 2d-1 becomes 2d+1. Damage is crushing or piercing for 5 points, large piercing
        for 6 points, cutting for 7 points, or impaling for 8 points. See Innate Attack (p. 61) for
        details.
        <br />
        <br />
        Roll against DX or Brawling to hit with your Striker. You can also use it to parry as if you
        had a weapon. Use the higher of (DX/2) + 3 or your Brawling parry.
      </p>
    ),
    subCategories: [
      {
        name: 'Long',
        text: (
          <p>
            Your Striker is long relative to your body. This increases your effective SM for the
            purpose of calculating reach (see Size Modifier and Reach, p. 402). +100% per +1 to SM
            if you can attack at any reach from C to maximum, or +75% per +1 to SM if you can only
            attack at maximum reach (and never in close combat).
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Cannot Parry</i>
          </p>
        ),
        text: <p>You cannot parry with your Striker. -40%.</p>
      },
      {
        name: 'Clumsy',
        text: (
          <p>
            Your Striker is unusually inaccurate.
            <br />
            <br />
            This is common for tails and similar Strikers aimed from outside your usual arc of
            vision. -20% per -1 to hit.
          </p>
        )
      },
      {
        name: 'Limited Arc',
        text: (
          <p>
            Your Striker can only attack straight ahead, straight behind, etc. Specify a direction
            when you buy the Striker.
            <br />
            <br />
            If your target isn’t in the right place, and you cannot maneuver to put him there, you
            cannot attack him at all. -40%.
          </p>
        )
      },
      {
        name: 'Weak',
        text: (
          <p>
            Your Striker is unusually blunt or light, or simply incapable of using your full ST. It
            inflicts only basic thrust damage,
          </p>
        )
      }
    ]
  },
  {
    title: 'Striking ST',
    type: 'advantage',
    points: '5 points per +1 ST',
    description: (
      <p>
        You can strike more powerful blows than your ST score would indicate. Add Striking ST to
        base ST solely for the purpose of calculating thrust and swing damage (see Damage Table, p.
        16).
        <br />
        <br />
        Striking ST has no effect on HP or Basic Lift. If you bought your ST with the No Fine
        Manipulators or Size limitation, apply the same limitation(s) to Striking ST.
      </p>
    )
  },
  {
    title: 'Subsonic Hearing',
    type: 'advantage',
    points: '0 or 5 points',
    description: (
      <p>
        You can hear very low-frequency sounds (under 40 Hz), such as the rumble of distant storms,
        the vibrations from incipient earthquakes, and the approach of stampeding herd beasts,
        armored vehicles, or dragons. This gives +1 to Tracking skill if your quarry is moving on
        the ground.
        <br />
        <br />
        Cost depends on your capabilities:
      </p>
    ),
    subCategories: [
      {
        text: <p>You can hear very low-frequency sounds only:</p>,
        points: '0 points'
      },
      {
        text: <p>You can hear very low-frequency sounds and other sounds:</p>,
        points: '5 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Note that Subsonic Hearing is included in the cost of Subsonic Speech (below); you cannot
          take both traits.
        </i>
      </strong>
    )
  },
  {
    title: 'Subsonic Speech',
    type: 'advantage',
    points: '0 or 10 points',
    description: (
      <p>
        You can converse using extremely low-frequency sounds. This trait includes Subsonic Hearing,
        above.
        <br />
        <br />
        Subsonic speech is slow (half-speed), and even if the frequency is shifted into the normal
        range, subsonic speakers are at -2 to Fast-Talk and any other skill where versatile speaking
        is important. However, subsonic speech carries twice as far as normal speech. Cost depends
        on your capabilities:
      </p>
    ),
    subCategories: [
      {
        text: <p>You can only communicate via Subsonic Speech:</p>,
        points: '0 points'
      },
      {
        text: <p>You can switch between regular speech and Subsonic Speech at will:</p>,
        points: '10 points'
      }
    ]
  },
  {
    title: 'Super Climbing',
    type: 'advantage',
    points: '3 points/level',
    description: (
      <p>
        You can climb very quickly. Each level of Super Climbing gives you +1 Move when climbing or
        using the Clinging advantage (p. 43).
      </p>
    )
  },
  {
    title: 'Super Jump',
    type: 'advantage',
    points: '10 points/level',
    description: (
      <p>
        You can make superhuman leaps! Each level of Super Jump doubles the distance and height you
        can achieve when jumping (see Jumping, p. 352).
        <br />
        <br />
        Your Move while jumping is the greater of your normal ground Move and 1/5 your maximum long
        jump distance (thus, your maximum jump never takes more than five seconds). For instance, if
        your long jump were 100 yards, your jumping Move would be the greater of 20 and your normal
        ground Move.
        <br />
        <br />
        You can jump at a foe in order to slam him. Figure the slam at your maximum jumping Move!
        You don’t need to make a separate roll to jump accurately.
        <br />
        <br />
        Finally, if you fall a distance less than or equal to your maximum high jump, you take no
        damage. You can increase this distance by five yards with a successful Acrobatics roll.
      </p>
    )
  },
  {
    title: 'Super Luck',
    type: 'advantage',
    points: '100 points',
    description: (
      <p>
        You are not just lucky – you have limited control over probability. Once per hour of play,
        you may dictate the result of any one die roll you make (or the GM makes for you) instead of
        rolling the dice. Wholly impossible attempts cannot succeed (your effective skill level must
        be at least 3), but you can choose any result that would be possible – however improbable –
        on a single normal die roll.
        <br />
        <br />
        You can have Super Luck and any degree of “normal” Luck, but no one can take Super Luck more
        than once!
      </p>
    )
  },
  {
    title: 'Supernatural Durability',
    type: 'advantage',
    points: '150 points',
    description: (
      <p>
        Like a vampire or psycho killer from a horror movie, you can “shake off” most wounds. Injury
        comes off HP as usual, and you suffer knockback, but you are completely immune to shock,
        physical stun, and knockout. You don’t need High Pain Threshold – this ability includes that
        one, and is far more potent!
        <br />
        <br />
        As long as you have 0 or more HP, you are also immune to crippling injuries, and have your
        full Move. Below 0 HP, you are at half Move and Dodge, and can be crippled, but you won’t
        die unless you are wounded by an attack to which you are specifically vulnerable (see
        below). The sole exception to this is a single attack that inflicts an injury of 10xHP or
        more. That much damage at once will blow you apart, killing you.
        <br />
        <br />
        To die, you must first be wounded to -HP or worse. After that, one specific item can kill
        you. You must specify this when you buy Supernatural Durability.
        <br />
        <br />
        Valid categories appear under Limited Defenses (p. 46); the item that can kill you must be
        of “Occasional” rarity or higher. If wounds from this item ever reduce your HP to the point
        where a normal human would have to make HT rolls to survive, you must make those HT rolls or
        die. If this item wounds you to -5xHP, you die automatically. If you are already below -5xHP
        from other damage, any wound from this item will kill you.
        <br />
        <br />
        Any item to which you have a Vulnerability (p. 161) can also kill you in this way.
      </p>
    )
  },
  {
    title: 'Teeth',
    type: 'advantage',
    points: '0, 1, or 2 points',
    description: (
      <p>
        Anyone with a mouth has blunt teeth that can bite for thrust-1 crushing damage. This costs 0
        points, and is typical of most herbivores. You have a more damaging bite:
      </p>
    ),
    subCategories: [
      {
        name: 'Sharp Teeth',
        text: (
          <p>
            Like those of most carnivores.
            <br />
            <br />
            Inflict thrust-1 cutting damage.
          </p>
        ),
        points: '1 points'
      },
      {
        name: 'Sharp Beak',
        text: (
          <p>
            Like that of a bird of prey.
            <br />
            <br />
            Inflicts thrust-1 large piercing damage.
          </p>
        ),
        points: '1 points'
      },
      {
        name: 'Fangs',
        text: (
          <p>
            Like those of a Smilodon.
            <br />
            <br />
            Inflict thrust-1 impaling damage
          </p>
        ),
        points: '2 points'
      }
    ]
  },
  {
    title: 'Telecommunication',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You can communicate over long distances without speaking aloud. You can send words at the
        speed of ordinary speech or pictures at the speed at which you could draw them.
        <br />
        <br />
        To establish contact requires one second of concentration and an IQ roll. After that, no
        concentration is required. You can maintain multiple contacts, but the IQ roll is at a
        cumulative -1 per contact after the first. Telecommunication works amid even the loudest
        noises, although interference and jamming can disrupt your signal.
        <br />
        <br />
        Those with suitable equipment may attempt to locate, intercept, or jam your transmission.
        <br />
        <br />
        This requires an Electronics Operation (Comm uni cations) roll for an electromagnetic
        signal, an Electronics Operation (Psychotronics) roll for a psionic signal, and so forth.
        <br />
        <br />
        Each variety of Telecommunication is a separate advantage with its own benefits and
        drawbacks. Some forms have limited range, which you can adjust using Increased Range (p.
        106) or Reduced Range (p. 115).
      </p>
    ),
    subCategories: [
      {
        name: 'Infrared Communication',
        text: (
          <p>
            You communicate using a modulated infrared beam. Base range is 500 yards in a direct
            line of sight.
            <br />
            <br />
            The short range and line-of-sight requirement make jamming and eavesdropping almost
            impossible under normal circumstances.
            <br />
            <br />
            You can only communicate with those who have this advantage or an infrared communicator.
          </p>
        ),
        points: '10 points'
      },
      {
        name: 'Laser Communication',
        text: (
          <p>
            You communicate using a modulated laser beam. Base range is 50 miles in a direct line of
            sight.
            <br />
            <br />
            The narrow beam and line-of-sight requirement make it extremely hard to eavesdrop on
            you.
            <br />
            <br />
            You can only communicate with people who have this advantage or a laser communicator.
          </p>
        ),
        points: '15 points'
      },
      {
        name: 'Radio',
        text: (
          <p>
            You communicate using radio waves. Base range is 10 miles. Your signal is
            omnidirectional, but because you can shift frequencies, eavesdroppers must still roll
            vs. Electronics Operation (Comm uni - cations) to listen in.
            <br />
            <br />A side benefit of this ability is that you can receive AM, FM, CB, and other
            ordinary radio signals on an IQ roll (takes one second). Note that radio-frequency
            “noise” from lightning and unshielded electronics can interfere with Radio.
            <br />
            <br />
            Radio does not work at all underwater
          </p>
        ),
        points: '10 points'
      },
      {
        name: 'Telesend',
        text: (
          <p>
            You can transmit thoughts directly to others via magic, psi, or other exotic means (be
            specific!). Your subject receives your thoughts even if he lacks this ability.
            <br />
            <br />
            Range is theoretically unlimited, but the IQ roll to use this ability takes the range
            penalties given under Long- Distance Modifiers (p. 241).
            <br />
            <br /> If you cannot see or otherwise sense your subject, you have an additional
            penalty: -1 for family, lovers, or close friends; -3 for casual friends and
            acquaintances; or -5 for someone met only briefly.
          </p>
        ),
        points: '30 points'
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Broadcast</i>
          </p>
        ),
        text: (
          <p>
            This enhancement is only available for Telesend. It lets you send your thoughts to
            everyone in a radius around you.
            <br />
            <br />
            This requires an IQ roll at the long-distance modifier for the desired radius, plus an
            additional -4. +50%.
          </p>
        )
      },
      {
        name: 'Short Wave',
        text: (
          <p>
            This is only available for Radio. You can bounce your signal off a planet’s ionosphere
            (if the planet has one).
            <br />
            <br />
            This lets you transmit to (or receive from) any point on the planet. Note that solar
            flares, weather, etc. can disrupt short-wave communications. +50%.
          </p>
        )
      },
      {
        name: 'Universal',
        text: (
          <p>
            Your messages are automatically translated into your subject’s language.
            <br />
            <br />
            The GM may limit this enhancement to individuals from advanced tech levels, or restrict
            it to Telesend. +50%.
          </p>
        )
      },
      {
        name: 'Video',
        text: (
          <p>
            You are not limited to simple pictures! You can transmit real-time video of anything you
            can see. +40%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Racial</i>
          </p>
        ),
        text: (
          <p>
            Your ability only works on those of your own race or a very similar race, per Mind
            Reading (p. 69). -20%.
          </p>
        )
      },
      {
        name: 'Recieve Only',
        text: (
          <p>You can receive but not send. This limitation is not available for Telesend. -50%.</p>
        )
      },
      {
        name: 'Send Only',
        text: (
          <p>You can send but not receive. This limitation is not available for Telesend. -50%.</p>
        )
      },
      {
        name: 'Telepathic',
        text: <p>Your ability is part of the Telepathy psi power (see p. 257). -10%.</p>
      },
      {
        name: 'Vague',
        text: (
          <p>
            You cannot send speech or pictures.
            <br />
            <br />
            You can only send a simple code (e.g., Morse code) – or general concepts and emotions,
            in the case of Telesend. -50%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Telekinesis',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        You can move objects without touching them.
        <br />
        <br />
        In effect, you manifest an invisible force that acts under your conscious direction at a
        distant point. Specify how you do this; possibilities include magnetism, psionic
        psychokinesis, an ultra-tech “tractor beam,” or a supernatural “poltergeist effect.”
        <br />
        <br />
        You can manipulate distant objects just as if you were grasping them in a pair of hands with
        ST equal to your Telekinesis (TK) level. You can move any object you have strength enough to
        lift, at a Move equal to your TK level, modified as usual for encumbrance level (see
        Encumbrance and Move, p. 17). Regardless of level, maximum range is 10 yards. To modify
        range, take Increased Range (p. 106) or Reduced Range (p. 115).
        <br />
        <br />
        Telekinesis requires constant concentration to use. In combat, this means you must take a
        Concentrate maneuver on your turn. Your TK may then perform one standard maneuver as if were
        a disembodied pair of hands at some point within your range: a Ready maneuver to pick up an
        object; a Move maneuver to lift and carry it; an Attack maneuver to throw it, or to grab or
        strike directly; and so on.
        <br />
        <br />
        <strong>
          <i>
            Example: On your turn in combat, you take a Concentrate maneuver and state that your TK
            is taking an Attack maneuver to grab a gun from a foe.
          </i>
        </strong>
        <br />
        <br />
        The following turn, you can Concentrate again and specify that your TK is taking an Aim or
        Wait maneuver to cover your enemy with the gun, an Attack maneuver to shoot him, or a Move
        maneuver to bring the gun to your hand.
        <br />
        <br />
        No rolls are necessary for ordinary lifting and movement. For more complex actions, the GM
        might require you to make a DX or skill roll. In situations where you would roll against ST,
        roll against your TK level instead. All of the above assumes that you are using TK to
        perform a task at a distance.
        <br />
        <br />
        TK can also discreetly assist you with such skills as Gambling (especially to cheat!),
        Lockpicking, and Surgery. In general, anything that would benefit from High Manual Dexterity
        (p. 59) gets a +4 bonus if you can successfully make an IQ roll to use your TK properly. On
        a failure, the GM may assess any penalty he feels is appropriate.
      </p>
    ),
    subCategories: [
      {
        name: 'Grappling and Striking',
        text: (
          <p>
            You can use TK to attack a foe directly. Roll against DX or an unarmed combat skill to
            hit. Your foe defends as if attacked by an invisible opponent (see Visibility, p. 394).
            If you grapple, your foe cannot grab hold of the TK force, but he can try to break free
            as usual – and if he also has TK, he can take a Concentrate maneuver and use his TK
            level instead of his ST. The turn after you grapple a foe using TK, your TK can use a
            Move maneuver to pick him up off the ground, provided you have enough TK to lift his
            weight. Someone in this position can’t do anything that relies on ground contact (run,
            retreat, etc.), but can perform any other action that is possible while grappled.
          </p>
        )
      },
      {
        name: 'Levitation',
        text: (
          <p>
            If you have enough TK to lift your own body weight, you can levitate.
            <br />
            <br />
            Take the Concentrate maneuver and have your TK take Move maneuvers to propel your body.
            For true psychokinetic flight, take Flight (p. 56) with the Psychokinetic limitation
            (below).
          </p>
        )
      },
      {
        name: 'Throwing',
        text: (
          <p>
            By applying a TK impulse for a fraction of a second, you can throw objects faster (and
            farther) than you can move them.
            <br />
            <br />
            Take a Concentrate maneuver and have your TK take an Attack maneuver. This works just as
            if you were throwing the object with ST equal to your TK level.
            <br />
            <br />
            Roll against Throwing or Thrown Weapon skill to hit, depending on the object being
            hurled. For 1/2D and Max purposes, measure range from the object (not yourself!) to the
            target; for the purpose of range penalties, use the sum of the distance from you to the
            object and from the object to the target.
            <br />
            <br />
            Once you throw something, you have “released” your telekinetic grip – your TK must take
            a Ready maneuver to pick it up again.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Magnetic:</i>
          </p>
        ),
        text: (
          <p>
            Your TK is “super magnetism,” and only affects ferrous metals: iron (including steel),
            nickel, and cobalt. -50%.
          </p>
        )
      },
      {
        name: 'Psychokinetic',
        text: (
          <p>
            Your ability is part of the Psychokinesis psi power (see p. 256). This makes it mental
            (2) rather than physical (3). -10%.
          </p>
        )
      },
      {
        name: 'Visible',
        text: (
          <p>
            Your TK is not an invisible force, but a disembodied hand, glowing “tractor beam,” or
            similar. This makes it much easier for others to defend against your TK attacks (do not
            use the Visibility rules). -20%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Telescopic Vision',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        You can “zoom in” with your eyes as if using binoculars.
        <br />
        <br />
        Each level lets you ignore -1 in range penalties to Vision rolls at all times, or -2 in
        range penalties if you take an Aim maneuver to zoom in on a particular target.
        <br />
        <br />
        This ability can also function as a telescopic sight, giving up to +1 Accuracy per level
        with ranged attacks provided you take an Aim maneuver for seconds equal to the bonus (see
        Scopes under Firearm Accessories, p. 411).
        <br />
        <br />
        The benefits of this trait are not cumulative with those of technological aids such as
        binoculars or scopes. If you have both, you must opt to use one or the other.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>No Targeting</i>
          </p>
        ),
        text: (
          <p>
            Your field of vision is broad and not “zeroed” to your ranged attacks. You get no
            Accuracy bonus in combat. -60%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Temperature Control',
    type: 'advantage',
    points: '5 points/level',
    description: (
      <p>
        You can alter the ambient temperature. Heating or cooling is limited to 20° per level, and
        occurs at a rate of 2° per level per second of concentration.
        <br />
        <br />
        You can affect a two-yard radius at a distance of up to 10 yards. Use Increased Range (p.
        106) or Reduced Range (p. 115) to modify range; add levels of Area Effect (p. 102) to
        increase radius.
        <br />
        <br />
        This ability never does damage directly. For that, buy Innate Attack – usually either
        burning (for flame) or fatigue (for attacks that damage by altering body temperature).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Cold</i>
          </p>
        ),
        text: <p>You can only decrease the temperature. -50%.</p>
      },
      {
        name: 'Heat',
        text: <p>You can only increase the temperature. -50%.</p>
      },
      {
        name: 'Psychokinetic',
        text: (
          <p>
            Your ability is part of the Psychokinesis psi power (see p. 256), often called
            “cryokinesis” (for cold) or “pyrokinesis” (for heat). -10%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Temperature Tolerance',
    type: 'advantage',
    points: '1 point/level',
    description: (
      <p>
        Every character has a temperature “comfort zone” within which he suffers no ill effects
        (such as FP or HP loss) due to heat or cold. For ordinary humans, this zone is 55° wide and
        falls between 35° and 90°. For nonhumans, the zone can be centered anywhere, but this is a
        0-point feature for a zone no larger than 55°. A larger zone is an advantage. Each level of
        Temperature Tolerance adds HT degrees to your comfort zone, distributed in any way you wish
        between the “cold” and “hot” ends of the zone.
        <br />
        <br />
        Temperature Tolerance confers no special resistance to attacks by fire or ice unless the
        only damage is a result of a rise or fall in the ambient temperature. In particular, it
        cannot help you if your body temperature is being manipulated.
        <br />
        <br />
        In a realistic campaign, the GM should limit normal humans to Temperature Tolerance 1 or 2.
        However, high levels of this trait are likely for nonhumans with fur or a heavy layer of
        fat.
      </p>
    )
  },
  {
    title: 'Temporal Inertia',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You are strongly rooted in probability. If history changes, you can remember both versions.
        If you are involved in a genuine time paradox, you are not erased, even if the rest of your
        world is! You have a place in the new timeline, whatever it is, and remember all your
        experiences – even the ones that never happened. (In an extreme case, you have two complete
        sets of memories, and must make an IQ roll any time you have to distinguish between them
        under stress . . . you might need Acting skill to stay out of the lunatic asylum.)
        <br />
        <br />
        There is a drawback: there is a “you” in any parallel or split timeline you encounter, and
        he is as similar to you as the timeline allows.
        <br />
        <br />
        This trait is only worthwhile in a campaign in which paradoxes or changes in history –
        erasing past events or whole timelines – are possible. See Unique (p. 160) for the opposite
        of this advantage.
      </p>
    )
  },
  {
    title: 'Tenure',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You have a job from which you cannot normally be fired. You can only lose your job (and this
        trait) as the result of extraordinary misbehavior: assault, gross immorality, etc.
        <br />
        <br />
        Otherwise, your employment and salary are guaranteed for life. This is most common among
        modern-day university professors, but also applies to judges, priests, senators, etc. in
        many societies.
      </p>
    )
  },
  {
    title: 'Terrain Adaptation',
    type: 'advantage',
    points: '0 or 5 points',
    description: (
      <p>
        You do not suffer DX or Move penalties for one specific type of unstable terrain: ice, sand,
        snow, etc.
        <br />
        <br />
        Cost depends on your capabilities: You can function normally on one specific type of
        unstable terrain, but suffer the DX and Move penalties that most characters experience on
        that terrain type when you traverse solid ground: 0 points.
        <br />
        <br />
        You can function at full DX and Move both on solid ground and on one particular type of
        unstable terrain: 5 points.
        <br />
        <br />
        You must buy this ability separately for each terrain type.
      </p>
    )
  },
  {
    title: 'Terror',
    type: 'advantage',
    points: '30 points + 10 points per -1 to fright check',
    description: (
      <p>
        You can unhinge the minds of others. There are many way this effect can manifest: a chilling
        howl, mind-warping body geometry, or even divine awe or unbearable beauty.
        <br />
        <br />
        When you activate this ability, anyone who sees you or hears you (choose one when you buy
        this trait) must roll an immediate Fright Check (see Fright Checks, p. 360).
      </p>
    ),
    subCategories: [
      {
        name: 'Modifiers',
        text: (
          <p>
            All applicable modifiers under Fright Check Modifiers (p. 360). You can buy extra
            penalties to this Fright Check for 10 points per -1 to the roll. Your victims get +1 per
            Fright Check after the first within 24 hours.
          </p>
        )
      },
      {
        text: (
          <p>
            If a victim succeeds at his Fright Check, he will be unaffected by your Terror for one
            hour. Add the Melee Attack limitation (p. 112) if your Terror affects only those you
            touch.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Always on</i>
          </p>
        ),
        text: (
          <p>
            You cannot turn off your Terror to engage in normal social activities.
            <br />
            <br />
            This limitation often accompanies the extreme levels of Appearance – usually Hideous or
            worse, but possibly also Transcendent! -20%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Trained By A Master',
    type: 'advantage',
    points: '30 points',
    description: (
      <p>
        You have been trained by – or are – a true master of the martial arts. Your exceptional
        talent means you have half the usual penalty to make a Rapid Strike (see Melee Attack
        Options, p. 370), or to parry more than once per turn (see Parrying, p. 376).
        <br />
        <br />
        These benefits apply to all your unarmed combat skills (Judo, Karate, etc.) and Melee Weapon
        skills.
        <br />
        Furthermore, you can focus your inner strength (often called “chi”) to perform amazing
        feats! This permits you to learn Flying Leap, Invisibility Art, Power Blow, and many other
        skills – anything that requires this advantage as a prerequisite (see Chapter 4).
        <br />
        <br />
        The GM is free to set prerequisites for this advantage if he wishes.
        <br />
        <br />
        Common examples from fiction include Judo, Karate, Melee Weapon skills, Philosophy, and
        Theology. This ability is definitely “larger than life.” The GM may wish to forbid it in a
        realistic campaign.
      </p>
    )
  },
  {
    title: 'True Faith',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You have a profound religious faith that protects you from “evil” supernatural beings such
        as demons and vampires. To enjoy this protection, you must actively assert your faith by
        wielding a physical symbol revered by your religion (e.g., crucifix, Torah, or Koran),
        chanting, dancing, or whatever else is appropriate to your beliefs. If you wish to use this
        ability in combat – to repel zombies, for instance – then you must choose the Concentrate
        maneuver each turn, and can do nothing else.
        <br />
        <br />
        For as long as you assert your faith, no malign supernatural entity (GM’s judgment as to
        what this covers) may approach within one yard of you. If one is forced into this radius, it
        must leave by the most direct route possible, as if it suffered from Dread (p. 132). If it
        cannot leave without coming closer, it must make a Will roll. On a success, it may run past
        you to escape, pushing you aside if necessary (but using only the minimum force required to
        escape).
        <br />
        <br />
        On a failure, the monster is cowed. It must cower, helplessly, and cannot move, defend
        itself, or take any other action. To keep True Faith, you must behave in a manner consistent
        with your religion. You will nearly always have to take and adhere to one or more of the
        traits listed under Self-Imposed Mental Disadvantages (p. 121). In effect, True Faith comes
        with a built-in Pact limitation (p. 113); do not apply this modifier again. You do not have
        to be kind, loving, or law-abiding, however.
        <br />
        <br />A violent bigot or religious terrorist can be just as sincere in his religious
        devotion as a saintly ascetic
      </p>
    )
  },
  {
    title: 'Tunneling',
    type: 'advantage',
    points: '30 points + 5 points per point of Tunneling Move',
    description: (
      <p>
        You can bore through earth and stone, spewing rubble behind you. The passage you dig is wide
        enough for you to walk through. You move through stone at half normal Tunneling Move.
        <br />
        <br />
        The GM may wish to assess a chance that your tunnel collapses behind you. Roll each minute
        vs. the highest of Engineer (Mining), Prospecting-3, and IQ-4 to dig a stable tunnel. This
        can be modified upward for hard rock and downward for soft rock or loose earth. Each halving
        of your Tunneling Move gives +1 on this roll.
      </p>
    )
  },
  {
    title: 'Ultrahearing',
    type: 'advantage',
    points: '0 or 5 points',
    description: (
      <p>
        You can hear sounds in the frequencies above the normal range of human hearing (20 kHz).
        This allows you to hear dog whistles, sonar, motion detectors, etc.
        <br />
        <br />
        You can detect active sonar at twice its effective range. Cost depends on your capabilities:
      </p>
    ),
    subCategories: [
      {
        text: <p>You can hear only high-frequency sounds:</p>,
        points: '0 points'
      },
      {
        text: <p>You can hear high-frequency sounds and other sounds:</p>,
        points: '5 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          This advantage is included in Ultrasonic Speech, below; if you have Ultrasonic Speech, you
          cannot take this as well (but don’t need to).
        </i>
      </strong>
    )
  },
  {
    title: 'Ultrasonic Speech',
    type: 'advantage',
    points: '0 or 10 points',
    description: (
      <p>
        You can converse in the ultrasonic range. This advantage includes Ultrahearing, above.
        <br />
        <br />
        Note that many creatures find it intensely annoying or even painful to be within earshot of
        sustained ultrasonic pitches! Cost depends on your capabilities:
      </p>
    ),
    subCategories: [
      {
        text: <p>You can only communicate via Ultrasonic Speech:</p>,
        points: '0 points'
      },
      {
        text: <p>You can switch between regular speech and Ultrasonic Speech at will:</p>,
        points: '10 points'
      }
    ]
  },
  {
    title: 'Ultravision',
    type: 'advantage',
    points: '0 or 10 points',
    description: (
      <p>
        You can see ultraviolet light (UV). Solar UV is present outdoors during the day, even under
        cloud cover, but is stopped by window glass or any solid barrier (earth, stone, etc.).
        <br />
        <br />
        Fluorescent lamps also emit UV. Provided UV is present, you can make out more colors than
        those with normal vision.
        <br />
        <br />
        This helps you discern outlines; spot trace quantities of dust, dyes, etc.; and identify
        minerals and plants. You get +2 to all Vision rolls made in the presence of UV, as well as
        to all Forensics, Observation, and Search rolls to spot clues or hidden objects.
        <br />
        <br />
        At night, a small amount of UV reaches the ground from the stars. This doesn’t let you see
        in the dark, but it does let you ignore -2 in darkness penalties (cumulative with Night
        Vision). UV penetrates farther underwater than visible light. This lets you halve all vision
        penalties underwater (but in total darkness, you are as blind as anyone else).
        <br />
        <br />
        Cost depends on your capabilities:
      </p>
    ),
    subCategories: [
      {
        text: (
          <p>
            You can only see UV, and are blind indoors, underground, or anywhere else there is no
            UV, even when there are normal light sources present
          </p>
        ),
        points: '0 points'
      },
      {
        text: <p>You can see both visible light and UV:</p>,
        points: '10 points'
      }
    ]
  },
  {
    title: 'Unaging',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You never grow old naturally and cannot be aged unnaturally. Your age is fixed at any point
        you choose and will never change.
        <br />
        <br /> You never have to make aging rolls.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Age Control</i>
          </p>
        ),
        text: (
          <p>You can “age” in either direction at will, at up to 10 times the normal rate. +20%.</p>
        )
      }
    ]
  },
  {
    title: 'Unfazeable',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        Nothing surprises you – at least, nothing that’s not obviously a threat. The world is full
        of strange things, and as long as they don’t bother you, you don’t bother them.
        <br />
        <br />
        You are exempt from Fright Checks, and reaction modifiers rarely affect you either way. You
        treat strangers with distant courtesy, no matter how strange they are, as long as they’re
        well-behaved. You have the normal reaction penalty toward anyone who does something rude or
        rowdy, but you remain civil even if forced to violence. Intimidation (p. 202) just does not
        work on you. You are not emotionless – you just never display strong feelings.
        <br />
        <br />
        The stereotypical aged kung fu master or English butler has this trait. You must roleplay
        this advantage fully, or the GM can declare that it has been lost. In a campaign where
        Fright Checks are an hourly occurrence, the GM can charge 20 points – or more! – or disallow
        Unfazeable altogether. This advantage is incompatible with all Phobias.
      </p>
    )
  },
  {
    title: 'Universal Digestion',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You have remarkably adaptable digestive processes that let you derive nutrition from any
        nontoxic animal or plant protein, no matter how alien or fantastic.
        <br />
        <br />
        This enables you to subsist on things that would normally be harmless but non-nutritious.
        You have no special resistance to poison, though; for that, buy Resistant (p. 80).
        <br />
        <br />
        One side benefit of this trait is that you can quickly and safely dispose of any nontoxic,
        organic evidence by eating it!
      </p>
    )
  },
  {
    title: 'Unkillable',
    type: 'advantage',
    points: '50 to 150 points',
    description: (
      <p>
        You cannot be killed! You are subject to all the other effects of injury. You feel pain,
        your wounds slow you, and you can be stunned or knocked out. You lose the use of any limb
        that receives a crippling wound, and you might even lose the limb itself.
        <br />
        <br />
        You can even lose attribute levels, advantages, etc. to disease, injury, or poison. However,
        you will only die if your body is physically destroyed – and sometimes not even then. This
        advantage comes in three levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Unkillable 1',
        text: (
          <p>
            Injury affects you normally, but you need never make a HT roll to stay alive.
            <br />
            <br />
            You can survive (and even function, if you remain conscious) down to -10¥HP, at which
            point your body is physically destroyed and you die. As long as you are alive, you heal
            at your usual rate – typically 1 HP/day, modified for any Regeneration (p. 80) you may
            have.
            <br />
            <br />
            Crippled limbs do heal, but severed limbs are gone for good unless you have Regrowth (p.
            80).
          </p>
        ),
        points: '50 points'
      },
      {
        name: 'Unkillable 2',
        text: (
          <p>
            As Unkillable 1, but you do not die at -10xHP. Once you reach -10xHP, you are reduced to
            an indestructible skeleton and automatically fall unconscious.
            <br />
            <br />
            You sustain no further damage from any attack. Once the damage stops, you heal normally
            – even if you’ve been hacked to pieces – and any severed body parts will grow back. You
            regain consciousness once you have positive HP.
            <br />
            <br />
            Note that your enemies can imprison your remains while you are unconscious, or even
            expose them to a source of continuous damage (fire is a common choice) to prevent you
            from healing.
          </p>
        ),
        points: '100 points'
      },
      {
        name: 'Unkillable 3',
        text: (
          <p>
            As Unkillable 2, except that at -10¥HP, you become a ghost, an energy pattern, or some
            other incorporeal form that cannot be contained or damaged through normal means. At this
            stage, you fall unconscious and heal normally.
            <br />
            <br />
            Once you are at full HP, your fully intact body will coalesce in a location of the GM’s
            choosing.
          </p>
        ),
        points: '150 points'
      },
      {
        text: (
          <p className="sub-section">
            With the GM’s permission, if you have Unkillable 2 or 3 and are taken to -10xHP, you can
            trade in Unkillable and use the points to buy a spirit or undead racial template (if
            such things exist in the setting), becoming a ghost, revenant, etc. once you heal all
            your HP.
            <br />
            <br />
            By default, you age normally, and will eventually die of old age. To be truly immortal,
            combine Unkillable with Unaging (above) – and possibly one or more of Doesn’t Breathe
            (p.49), Injury Tolerance (p. 60), Regeneration (p. 80), and Resistant (p. 80).
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Achilles’ Heel</i>
          </p>
        ),
        text: (
          <p>
            Damage from one particular source (possibly one to which you have a Vulnerability, p.
            161) can kill you normally.
            <br />
            <br />
            You must make normal HT rolls to survive at -HP and below, and die automatically if this
            damage takes you below -5xHP. The limitation value depends on the rarity of the attack,
            as defined under Limited Defenses (p. 46): -10% if “Rare,” -30% if “Occasional,” or -50%
            if “Common” or “Very Common.”
          </p>
        )
      },
      {
        name: 'Hindrance',
        text: (
          <p>
            A specific substance (e.g., silver or wood) prevents healing – whether by natural means
            or Regeneration – for as long as it remains in your body.
            <br />
            <br />
            Once you pass out from your injuries, you stay dormant until this substance is removed.
            The limitation value depends on the rarity of the substance: -5% if “Rare,” -15% if
            “Occasional,” or -25% if “Common”.
          </p>
        )
      },
      {
        name: 'Reincarnation',
        text: (
          <p>
            This is only available for Unkillable 2 or 3. When reduced to -10xHP, you recover at
            your usual rate, but you wake up in an entirely new body with new abilities.
            <br />
            <br />
            The GM creates the new form (or may allow you to do so), but you always retain the
            Unkillable advantage. -20%.
          </p>
        )
      },
      {
        name: 'Trigger',
        text: (
          <p>
            This is only available for Unkillable 2 or 3. Once reduced to -10xHP, you require some
            substance (such as human blood) or condition (such as a ritual) before you will start to
            heal.
            <br />
            <br />
            Until then, you will remain dormant. The limitation value depends on the rarity of the
            trigger: -25% if “Rare,” -15% if “Occasional,” or -5% if “Common” or “Very Common.”
          </p>
        )
      }
    ]
  },
  {
    title: 'Unusual Background',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        This is a “catch-all” trait that the GM can use to adjust the point total of any character
        with special abilities that are not widely available in the game world.
        <br />
        <br />
        “Special abilities” might mean cinematic traits, magic spells, exotic advantages (for a
        human), supernatural advantages (for anyone), or almost anything else – it depends on the
        setting. Players are free to suggest Unusual Backgrounds to the GM, but the GM decides
        whether a proposed Unusual Background is acceptable, and if so, what its cost and benefits
        are.
      </p>
    ),
    subCategories: [
      {
        name: 'Example 1',
        text: (
          <p>
            “Raised by wizards” to justify access to magic spells might be a 0-point special effect
            in a fantasy world where magic is common, a 10- point Unusual Background in a conspiracy
            campaign where magic is known but kept secret, and a 50-point Unusual Background – or
            simply forbidden – in a horror game where a PC who wields supernatural power would
            reduce the suspense.
          </p>
        )
      },
      {
        name: 'Example 2',
        text: (
          <p>
            Daughter of the God of Magic” to justify the Unkillable advantage would be an Unusual
            Background in any setting, and would be worth as much as the advantage itself – 50
            points or more – if the GM allowed it at all.
          </p>
        )
      }
    ],
    extraText: (
      <strong>
        <i>
          Not every unusual character concept merits an Unusual Background. The GM should only
          charge points when the character enjoys a tangible benefit. For instance, it would be
          unusual for a human to be raised by wolves, but unless this gave him special capabilities
          (such as Speak with Animals), it would be background color, worth 0 points.
        </i>
      </strong>
    )
  },
  {
    title: 'Vacuum Support',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You are immune to deleterious effects associated with vacuum and decompression (see Vacuum,
        p. 437). This advantage does not give you an air supply; buy Doesn’t Breathe (p. 49) for
        that.
        <br />
        <br />
        Those with Vacuum Support usually have the Sealed advantage (p. 82), and often have
        Radiation Tolerance (p. 79) and Temperature Tolerance (p. 93), but none of these traits are
        required.
      </p>
    )
  },
  {
    title: 'Vampiric Bite',
    type: 'advantage',
    points: '30 points + 5 points per extra HP drained',
    description: (
      <p>
        You can bite people and drain their life force, healing your own wounds in the process. You
        can only feed if your victim is helpless (pinned, stunned, unconscious, etc.), grappled, or
        willing. If he is wearing armor, your biting damage must penetrate its DR. Once you’ve
        bitten through your victim’s DR, you can drain 1 HP per second from him. For every 3 HP
        stolen, you heal 1 HP or 1 FP (your choice). You cannot raise your HP or FP above normal
        this way.
        <br />
        <br />
        The basic Vampiric Bite described above costs 30 points. You may buy increased HP drain for
        5 points per additional HP drained per second; for instance, to drain 10 HP per second, pay
        75 points.
        <br />
        <br />
        Vampiric Bite also lets you bite in combat without feeding. Treat this as Teeth (Sharp
        Teeth) or Teeth (Sharp Beak) (p. 91) – your choice. You do not need to purchase that
        advantage separately.
      </p>
    )
  },
  {
    title: 'Versatile',
    type: 'advantage',
    points: '5 points',
    description: (
      <p>
        You are extremely imaginative.
        <br />
        <br />
        You get a +1 bonus on any task that requires creativity or invention, including most rolls
        against Artist skill, all Engineer rolls for new inventions, and all skill rolls made to use
        the Gadgeteer advantage.
      </p>
    )
  },
  {
    title: 'Vibration Sense',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You can detect the location and size of objects by sensing vibrations with your skin,
        whiskers, or antennae. You must specify whether this ability works in the air or in the
        water.
        <br />
        <br />
        Vibration Sense is not a substitute for vision. You can locate an opponent in the dark, but
        you cannot detect details (e.g., whether he is armed). In a perfectly still, dark chamber,
        you would have only a vague notion of the size of the area, but you would be able to sense a
        barrier before you ran into it, and could find openings by sensing the flow of air or water.
        <br />
        <br />
        To use Vibration Sense, make a Sense roll. Consult the Size and Speed/Range Table (p. 550)
        and apply separate bonuses for the target’s size and speed, and a penalty for the range to
        the target. Wind (in air) or swift currents (in water) will generate “noise” that interferes
        with your sense. Find the speed of the wind or current on the table and assess the relevant
        speed penalty.
        <br />
        <br />
        A successful roll reveals the rough size, location, speed, and direction of movement of the
        target. It does not provide any information about the object’s shape, color, etc. Once you
        have detected something, you may target it with an attack.
        <br />
        <br />
        The modifiers that applied to your Sense roll also apply to your attack roll, but can never
        give you a bonus to hit. Note that if you are outside the element (air or water) where your
        ability functions, or if you are wearing a sealed suit, this ability does not work at all!
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Universal</i>
          </p>
        ),
        text: <p>Your Vibration Sense works both in the air and in the water. +50%.</p>,
        points: 'points'
      }
    ]
  },
  {
    title: 'Visualization',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You can improve your chances at a task by visualizing yourself successfully performing it.
        The closer your mental picture is to the actual circumstances, the greater the bonus.
        <br />
        <br />
        The visualization must be detailed and must involve a clear and specific action. This makes
        it useless in combat, where the situation changes faster than you can visualize it.
        <br />
        <br />
        To use this talent, you must concentrate for one minute. You, the player, must describe the
        scene you visualize (which can include senses other than sight) and the results you hope to
        achieve.
        <br />
        <br />
        Then make an IQ roll. You get a +1 bonus to the action you visualized for every point by
        which you succeed – if the circumstances correspond almost exactly to the visualization. If
        they are not quite the same, which will almost always be true, halve the bonus (minimum +1).
        And if something is clearly different, divide the bonus by 3 (no minimum). The GM can assess
        a further bonus of up to +2, or a penalty of any size, for a good or bad description!
      </p>
    )
  },
  {
    title: 'Voice',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You have a naturally clear, resonant, and attractive voice. This gives you +2 with the
        following skills: Diplomacy, Fast-Talk, Mimicry, Per - formance, Politics, Public Speaking,
        Sex Appeal, and Singing.
        <br />
        <br />
        You also get +2 on any reaction roll made by someone who can hear your voice.
      </p>
    )
  },
  {
    title: 'Walk on Air',
    type: 'advantage',
    points: '20 points',
    description: (
      <p>
        Air, smoke, and other gases are like solid ground beneath your feet, allowing you to walk up
        and down “invisible stairs” at your ground Move. This won’t work in a vacuum – there has to
        be some kind of air present.
        <br />
        <br />
        If you get knocked down or slip, you fall! You may attempt one DX roll per second of
        falling. If you succeed, you stop in thin air, unharmed. Otherwise, you hit the ground for
        normal falling damage (see Falling, p. 431).
      </p>
    )
  },
  {
    title: 'Walk on Liquid',
    type: 'advantage',
    points: '15 points',
    description: (
      <p>
        You can walk on the surface of any liquid as if it were solid ground.
        <br />
        <br />
        You move at your usual ground Move. This doesn’t protect you from any damage that you would
        take from coming into contact with the liquid, however. You can’t traverse volcanic lava or
        boiling acid without taking damage!
      </p>
    )
  },
  {
    title: 'Weapon Master',
    type: 'advantage',
    points: 'Variable',
    description: (
      <p>
        You have a high degree of training or unnerving talent with a particular class of
        muscle-powered weapons (swords, bows, etc. – not guns).
        <br />
        <br />
        Available classes are:
      </p>
    ),
    subCategories: [
      {
        text: <p>All muscle-powered weapons.</p>,
        points: '45 points'
      },
      {
        text: <p>A large class of weapons. Examples: all bladed weapons, all onehanded weapons</p>,
        points: '40points'
      },
      {
        text: <p>A medium class of weapons. Examples: all swords, all ninja weapons</p>,
        points: '35 points'
      },
      {
        text: (
          <p>
            A small class of weapons. Examples: fencing weapons (maingauche, rapier, saber, and
            smallsword), knightly weapons (broadsword, mace, shield, and lance).
          </p>
        ),
        points: '35 points'
      },
      {
        text: (
          <p>
            Two weapons normally used together. Examples: broadsword and shield, rapier and
            main-gauche.
          </p>
        ),
        points: '25 points'
      },
      {
        text: <p>One specific weapon</p>,
        points: '20 points'
      },
      {
        text: (
          <p>
            In all cases, if a weapon can be thrown, the benefits of this advantage also apply when
            throwing that weapon.
            <br />
            <br />
            When using a suitable weapon, add +1 per die to basic thrust or swing damage if you know
            the relevant weapon skill at DX+1. Add +2 per die if you know that skill at DX+2 or
            better. You also have half the usual penalty to make a Rapid Strike (see Melee Attack
            Options, p. 369), or to parry more than once per turn (see Parrying, p. 376). None of
            these benefits apply to default use.
            <br />
            <br />
            You are familiar with – if not proficient in – every weapon within your class. This
            gives you an improved default: DX/Easy weapon skills default to DX-1, DX/Average ones to
            DX-2, and DX/Hard ones to DX-3. Note that these skills are no easier to learn, and may
            not be “bought up” from the improved defaults in order to save points.
            <br />
            <br />
            Finally, you may learn any cinematic skill that names this advantage as a prerequisite
            (see Chapter 4) – e.g., Blind Fighting and Power Blow – if you could reasonably use that
            skill with your weapons of choice. The GM is the final arbiter in all cases. This trait
            is best suited to a “cinematic” swashbuckling game.
            <br />
            <br /> The GM may wish to forbid it in a realistic campaign.
          </p>
        )
      }
    ]
  },
  {
    title: 'Wild Talent',
    type: 'advantage',
    points: '20 points/level',
    description: (
      <p>
        You can simply do things without knowing how. Once per game session per level of this
        advantage, you may attempt a roll against any skill, using your score in the appropriate
        attribute: IQ for IQ-based skills, DX for DX-based skills, etc.
        <br />
        <br />
        You do not incur any default penalties, but situational and equipment modifiers apply
        normally, as do any modifiers for advantages or disadvantages.
        <br />
        <br />
        Tech level is irrelevant: a TL3 monk could make an IQ roll to use Computer Programming/TL12!
        <br />
        <br />
        Wild Talent does apply to skills that normally have no default, provided you meet any
        advantage requirements. For instance, you could cast unknown magic spells provided you had
        Magery, or use unknown cinematic martial-arts skills provided you have Trained By A Master.
        <br />
        <br />
        Wild Talent has no effect on skills you already know.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Retention</i>
          </p>
        ),
        text: (
          <p>
            You can learn the skills you use! To do so, you must have one unspent character point
            available when you attempt the skill roll. On a success, you may buy the skill at the
            one-point level.
            <br />
            <br />
            You cannot improve a skill learned this way for one month, during which time you use it
            at -2. On a critical success, you can start improving the skill immediately, and there
            is no -2. On a failure, you cannot learn the skill; on a critical failure, you also lose
            your unspent character point!
            <br />
            <br />
            Regardless of success, if you lack any of the skill’s prerequisites, your skill is at -4
            until you acquire them, and you cannot improve the skill in the interim.
            <br />
            <br />
            This enhancement does not let you learn skills from a TL higher than your own. +25%.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Emergencies Only</i>
          </p>
        ),
        text: (
          <p>
            Your Wild Talent only works in life-threatening situations, such as mortal combat. To
            use it, you must ask for a particular result related to your predicament.
            <br />
            <br />
            Your request must be specific (e.g., “Get him away from me.”), but you cannot specify a
            skill (e.g., “Use Judo” or “Cast the Command spell”). The GM will then choose a skill
            that could bring about the desired result. He is not limited to mundane skills; he may
            choose a spell if you have Magery, a cinematic martial-arts skill if you have Trained By
            A Master, and so forth.
            <br />
            <br />
            Once the GM has chosen, roll against the governing attribute, as usual. If the GM feels
            you already have skills equal to the task, he will advise you on which skill to use.
            This still counts as one of your uses of Wild Talent! -30%.
          </p>
        )
      },
      {
        name: 'Focused',
        text: (
          <p>
            You can only use (and if you have Retention, learn) one specific class of skills.
            Options include Mental (mundane skills based on IQ, Perception, or Will), Physical
            (mundane skills based on ST, DX, or HT), Magical (spells), and Chi (cinematic
            martial-arts skill). -20%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Zeroed',
    type: 'advantage',
    points: '10 points',
    description: (
      <p>
        You do not officially exist. Even the highest authorities in the land know nothing about
        you. In a fantasy setting, you are a “mysterious wanderer”; magical divination cannot
        discover conclusive details about your past or true identity.
        <br />
        <br />
        In a high-tech world, you don’t appear in the public records – and if computer databases
        exist, they contain no evidence of your existence. You must provide a reason for this; e.g.,
        your parents hid you away at birth, you are legally dead, or you somehow managed to destroy
        all the records (explain how!).
        <br />
        <br />
        To maintain this status, you must deal strictly in cash or commodities. Credit and bank
        accounts must be blind (keyed to pass-code, not a person – the “Swiss bank account”) or set
        up through a Temporary Identity (see p. 31).
        <br />
        <br />
        If the authorities investigate you, they will initially assume that there has been an error.
        They will become increasingly concerned as no information can be found about your life.
        <br />
        <br />
        Eventually, they will attempt to apprehend you. If they can’t find you, then they’re likely
        to give up. But if they catch you, you are in for a thorough interrogation, possibly
        involving torture, mind probes, or worse. After all, a nonperson has no rights . . . and it
        will be very difficult for your allies to prove that you are being held, as you don’t
        officially exist!
      </p>
    )
  }
];

export default AdvantagesArray;
