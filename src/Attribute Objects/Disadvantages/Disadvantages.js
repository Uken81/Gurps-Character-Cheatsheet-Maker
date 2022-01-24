const DisadvantagesArray = [
  {
    title: 'Absent-Mindedness',
    points: '-15 points',
    type: 'disadvantage',
    description: (
      <p>
        You have trouble focusing on anything not of immediate interest. You have -5 on all IQ and
        IQ-based skill rolls, save those for the task you are currently concentrating on. If no
        engaging task or topic presents itself, your attention will drift to more interesting
        matters in five minutes, and you will ignore your immediate surroundings until something
        catches your attention and brings you back. Once adrift in your own thoughts, you must roll
        against Perception-5 in order to notice any event short of personal physical injury. <br />
        <br />
        You may attempt to rivet your attention on a boring topic through sheer strength of will. To
        do so, make a Will-5 roll once every five minutes. “Boring topics” include small talk,
        repetitive manual tasks, guard duty, driving on an empty highway . . . <br />
        <br />
        Absent-minded individuals also tend to forget trivial tasks (like paying the bills) and
        items (like car keys and checkbooks). Whenever it becomes important that you have performed
        such a task or brought such an item, the GM should call for a roll against IQ-2. On a
        failure, this detail slipped your attention.
      </p>
    ),
    extraText: (
      <strong>
        Example: An absent-minded detective is in a shootout. He was involved in gunplay earlier in
        the day, in which he fired four rounds, so the GM calls for an IQ-2 roll. The detective
        fails the roll, and discovers too late that he forgot to reload his weapon, so his revolver
        has only two bullets left!
      </strong>
    )
  },
  {
    title: 'Addiction',
    points: 'Variable',
    type: 'disadvantage',
    description: (
      <p>
        You are addicted to a drug, which you must use daily or suffer withdrawal. The value of this
        disadvantage depends on the cost, effects, and legality of the drug:
      </p>
    ),
    subCategories: [
      {
        name: 'Cost (per day)',
        text: (
          <p>
            <strong>Cheap</strong>(up to 0.1% of average starting wealth): -5 points. <br />
            <strong>Expensive</strong>(up to 0.5% of average starting wealth): -10 points.
            <br />
            <strong>Very expensive</strong>(more than 0.5% of average starting wealth): -20 points.
          </p>
        )
      },
      {
        name: 'Effects',
        text: (
          <p>
            <strong>Effects Minimal or stimulating:</strong>+0 points.
            <br />
            <strong>Incapacitating or hallucinogenic:</strong>-10 points.
            <br />
            <strong>Highly addictive (-5 on withdrawal roll):</strong>-5 points.
            <br />
            <strong>Totally addictive (-10 on withdrawal roll):</strong>-10 points.
          </p>
        ),
        points: ''
      },
      {
        name: 'Legality',
        text: (
          <p>
            <strong>Illegal:</strong>+0 points.
            <br />
            <strong>Legal:</strong>+5 points.
          </p>
        ),
        points: ''
      },
      {
        name: 'Examples:',
        text: (
          <p>
            <i>
              Tobacco is cheap, highly addictive, and legal; a chain-smoker has a -5-point
              Addiction. Heroin is very expensive, incapacitating, totally addictive, and illegal; a
              heroin addict has a -40-point Addiction.
            </i>
          </p>
        ),
        points: ''
      }
    ],
    extraText: (
      <p>
        <strong>Non-Chemical Addictions:</strong>
        <br />
        You can take Addiction to an activity instead of a drug – for instance, telepathic contact
        or spending time in virtual reality. If this costs money, price the Addiction based on its
        daily cost. If it is free (e.g., telepathic contact), treat it as “Cheap” if it you can do
        it almost anywhere (telepathic contact with anyone) or as “Expensive” if restrictive
        conditions apply (telepathic contact with one specific person). Such Addictions almost
        always cause psychological dependency (see Withdrawal, below).
        <br />
        <br />
        <strong>Effects of Drugs:</strong>
        <br />A stimulating drug leaves you feeling energized . . . until it wears off. Then you are
        depressed and irritable. An incapacitating drug renders you unconscious (or just blissfully,
        uselessly drowsy) for about two hours. A hallucinogenic drug renders you useless for work or
        combat, though you might be active and talkative. Some drugs (e.g., tobacco) have none of
        these effects, while others have unique effects. Side effects are also possible. For
        detailed rules, see Addictive Drugs (p. 440).
        <br />
        <br />
        <strong>Withdrawal:</strong>
        <br />
        Sometimes, voluntarily or otherwise, you must try to give up your Addiction. Addiction to a
        drug that causes psychological dependency is a mental disadvantage; withdrawal from such a
        drug requires a series of Will rolls, and may result in mental problems. Addiction to a drug
        that induces physiological dependency is a physical disadvantage; withdrawal is a function
        of your HT, and may cause physical injury. For details, see Drug Withdrawal (p. 440).
        <br /> Should you successfully withdraw from an Addiction, you must immediately buy off this
        disadvantage.
        <strong>Minor Addictions</strong>For an Addiction worth only -5 points, the GM may rule that
        the expense, stigma, and detrimental long-term effects of use are the whole of the
        disadvantage, and waive the usual withdrawal rules. This is appropriate for such drugs as
        tobacco and caffeine. If forced to go without, you must make a Will or HT roll as usual, but
        the only effects on a failure are general anxiety, irritability, or restlessness. <br />
        This manifests as a temporary -1 to DX, IQ, self-control rolls, or reaction rolls not as
        insanity or injury. Successive failures prolong the duration of the effects; they do not
        increase the size of the penalty. If you can make 14 successful rolls in succession, you
        must buy off your Addiction. <br />
        It is also possible to create a 0- point Addiction using these rules. Such Addictions are
        always Minor Addictions, and you may take them as -1-point quirks (see Quirks, p. 162).
      </p>
    )
  },
  {
    title: 'Alcoholism',
    points: '-15 or -20 points',
    type: 'disadvantage',
    description: (
      <p>
        You are an alcohol addict. Alcoholism uses the Addiction rules (above). <br />
        It is cheap, incapacitating, and usually legal, so it would normally be a -10-point
        Addiction. But it is also insidious; therefore, it is worth -15 points or -20 points if it
        is illegal. <br />
        Most of the time, you may confine your drinking to the evenings, and therefore function
        normally (for game purposes). However, any time you are in the presence of alcohol, you must
        roll vs. Will to avoid partaking. A failed roll means you go on a binge lasting 2d hours,
        followed by a hangover; see Drinking and Intoxication (p. 439). Alcoholics on a binge are
        characterized by sudden mood swings from extreme friendliness to extreme hostility and may
        attack friends, talk too freely, or make other mistakes. <br />
        The other drawback of Alcoholism is that it is hard to get rid of. Should you manage to
        withdraw, you no longer need to drink daily . . . but you must still make a Will+4 roll
        whenever you are in the presence of alcohol. A failed roll does not reinstate the addiction,
        but does set off a binge. (Three binges in a week will reinstate the addiction.) Thus, there
        is no normal way to buy off this disadvantage. <br />
      </p>
    ),
    extraText: (
      <p>
        Continued Alcoholism will steal your abilities. You must roll yearly against HT+2 until you
        withdraw. Failure means you lose a level from one of your four basic attributes roll
        randomly to determine which.
      </p>
    )
  },
  {
    title: 'Amnesia',
    type: 'disadvantage',
    points: '-10 or -25 points',
    description: (
      <p>
        You’ve lost your memory. You can’t remember any of your past life, including your name. This
        disadvantage comes in two levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Partial Amnesia',
        text: (
          <p>
            You, the player, can see your character sheet, but the GM may reserve up to -30 points
            of your disadvantage allotment for “secret” disadvantages of his choosing. You know that
            you can use certain skills, but have no idea where you learned them.
            <br />
            <br />
            You are likely to have enemies – and possibly friends – that you can’t remember. If you
            turn yourself in to the police, they can perform their standard ID checks . . . but you
            might turn out to be a wanted criminal. Even if you aren’t, finding out your name won’t
            restore your memory! -
          </p>
        ),
        points: '- 10points'
      },
      {
        name: 'Total Amnesia',
        text: (
          <p>
            The only traits you can specify during character creation are those you could see in a
            mirror. The GM assigns everything else – and holds onto your full character sheet until
            your memory returns! You have no idea of your full abilities.
            <br />
            <br />
            Since the GM knows your quirks and mental traits, and you don’t, he will sometimes
            overrule your statements about what you’re doing. He will also make all skill rolls for
            you, because you have no idea what you can do until you try it! Your IQ-based skill
            rolls are at -2 unless the GM feels that memory would have no effect at all on the task
            at hand.
          </p>
        ),
        points: '-25 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          You can only buy off Amnesia if there is some reason why you might recover your memory;
          e.g., meeting an old friend, reliving some fateful event, or the ever-popular blow to the
          head. In most cases, the cure will be related to the cause of the memory loss.
          <br />
          <br />
          Particularly twisted GMs might enjoy making the cause in question some form of
          brainwashing. In this case, one of the hidden disadvantages will probably be an Enemy with
          sufficient resources to have arranged the brainwashing in the first place.
        </i>
      </strong>
    )
  },
  {
    title: 'Bad Back',
    type: 'disadvantage',
    points: '15 or 25 points',
    description: (
      <p>
        For whatever reason, your spinal column is in bad shape. During strenuous physical activity,
        you may “throw your back” and suffer crippling pain or further injury.
        <br />
        <br />
        Whenever you make a ST roll, and whenever you roll 17 or 18 on an attack or defense roll in
        melee combat, or on a roll for an “athletic” skill such as Acrobatics, make a HT roll as
        well.
      </p>
    ),
    subCategories: [
      {
        name: 'Modifiers',
        text: (
          <p>
            Any modifiers to the success roll for the activity that triggered the HT roll. For a
            long task that allows the luxury of planning, you can try to minimize the strain on your
            back; a successful IQ-2 or Physiology+4 roll gives +2 on the HT roll.
          </p>
        )
      },
      {
        text: (
          <p>
            On a failure, you throw your back. Consequences depend on the severity of your case:
          </p>
        )
      },
      {
        name: 'Mild',
        text: (
          <p>
            You are at -3 DX until you rest or someone helps you; a First Aid- 2 roll will reset
            your back. You are also at -3 IQ, but during the next second only (for your next turn,
            in combat).
            <br />
            <br />
            On a critical failure, you are at -5 DX and must make a Will roll to perform any
            physical action.
          </p>
        ),
        points: '15 points'
      },
      {
        name: 'Severe',
        text: (
          <p>
            The HT roll is at -2. On a failure, DX and IQ are both at -4 until you receive rest or
            help; you are in constant agony.
            <br />
            <br />
            On a critical failure, you take 1d-3 damage and are at -6 DX and -4 IQ.
          </p>
        ),
        points: '25 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          High Pain Threshold (p. 59) halves all DX and IQ penalties (drop fractions), but does not
          eliminate them completely.
        </i>
      </strong>
    )
  },
  {
    title: 'Bad Grip',
    type: 'disadvantage',
    points: '-5 points/level',
    description: (
      <p>
        You have a penalty on tasks that require a firm grip. Each level (maximum three levels)
        gives -2 with such tasks. This penalty is overall – not per hand. Affected tasks include
        melee weapon use, climbing, catching things, and anything else the GM deems requires a firm
        grip (e.g., an Acrobatics roll to catch a trapeze).
        <br />
        <br />
        This disadvantage is mutually exclusive with No Fine Manipulators (p. 145).
      </p>
    )
  },
  {
    title: 'Bad Sight',
    type: 'disadvantage',
    points: '-25 points',
    description: (
      <p>
        You have poor vision. This applies to all your visual senses: regular vision, Infravision,
        Ultravision, etc. You may be nearsighted or farsighted – your choice.
      </p>
    ),
    subCategories: [
      {
        name: 'Nearsighted',
        text: (
          <p>
            You cannot read small print, computer displays, etc., more than a foot away, or road
            signs, etc., at more than about 10 yards. You are at -6 to Vision rolls to spot items
            more than one yard away.
            <br />
            <br />
            When making a melee attack, you are at -2 to skill. When making a ranged attack, double
            the actual distance to the target when calculating the range modifier.
          </p>
        ),
        points: '-25 points'
      },
      {
        name: 'Farsighted',
        text: (
          <p>
            You cannot read text except with great difficulty (triple normal time). You are at -6 to
            Vision rolls to spot items within one yard, and you have -3 to DX on any close manual
            task, including close combat.
          </p>
        ),
        points: '-25 points'
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Mitigator</i>
          </p>
        ),
        text: (
          <p>
            At TL5+, you can acquire glasses that compensate totally for Bad Sight while they are
            worn. At TL7+, contact lenses are available. In both cases, remember that accidents can
            happen . . . and that enemies can deprive you of these items.
            <br />
            <br />
            If you are starting at a tech level in which vision can be corrected, you must take this
            limitation. -60%.
          </p>
        ),
        points: '-25 points'
      }
    ]
  },
  {
    title: 'Bad Smell',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You exude an appalling odor that you cannot remove, such as the stench of death and decay.
        This causes a -2 reaction from most people and animals (although pests or carrion-eating
        scavengers might be unusually attracted to you!).
        <br />
        <br />
        You can mask the smell with perfumes, but the overpowering amount needed results in the same
        reaction penalty.
      </p>
    )
  },
  {
    title: 'Bad Temper',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are not in full control of your emotions. Make a self-control roll in any stressful
        situation.
        <br />
        <br />
        If you fail, you lose your temper and must insult, attack, or otherwise act against the
        cause of the stress.
      </p>
    )
  },
  {
    title: 'Berserk',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You tend to rampage out of control when you or a loved one is harmed, making frenzied
        attacks against whoever or whatever you see as the cause of the trouble. If you also suffer
        from Bad Temper (above), any stress may trigger Berserk.
        <br />
        <br />
        Make a self-control roll any time you suffer damage over 1/4 your HP in the space of one
        second, and whenever you witness equivalent harm to a loved one. If you fail, you go
        berserk. You go berserk automatically if you fail a self-control roll for Bad Temper! You
        may deliberately go berserk by taking the Concentrate maneuver and making a successful Will
        roll.
        <br />
        <br />
        Once you are berserk, the following rules apply:
      </p>
    ),
    subCategories: [
      {
        text: (
          <p>
            If armed with a hand weapon, you must make an All-Out Attack each turn a foe is in
            range.
            <br />
            <br />
            If no foe is in range, you must use a Move maneuver to get as close as possible to a foe
            – and if you can Move and Attack, or end your Move with a slam, you will.
          </p>
        )
      },
      {
        text: (
          <p>
            If the enemy is more than 20 yards away, you may attack with a ranged weapon if you have
            one, but you may not take the Aim maneuver.
            <br />
            <br />
            If using a gun, you blaze away at your maximum rate of fire until your gun is empty. You
            cannot reload unless your weapon – and your Fast-Draw skill – lets you reload “without
            thought” (can take no more than one second).
            <br />
            <br />
            Once your gun is empty, you must either draw another gun or charge into melee combat.
          </p>
        )
      },
      {
        text: (
          <p>
            You are immune to stun and shock, and your injuries cause no penalty to your Move score.
            <br />
            <br />
            You make all rolls to remain conscious or alive at +4 to HT. If you don’t fail any
            rolls, you remain alive and madly attacking until you reach -5¥HP. Then you fall – dead!
          </p>
        )
      },
      {
        text: (
          <p>
            When you down a foe, you may (if you wish) attempt another self-control roll to see if
            you snap out of the berserk state.
            <br />
            <br />
            If you fail (or do not roll), you remain berserk and attack the next foe. Treat any
            friend who attempts to restrain you as a foe! You get to roll again each time you down a
            foe, and you get one extra roll when no more foes remain. If you are still berserk, you
            start to attack your friends . . .<br />
            <br />
            Once you snap out of the berserk state, all your wounds immediately affect you. Roll at
            normal HT to see whether you remain conscious and alive.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Battle Rage</i>
          </p>
        ),
        text: (
          <p>
            You go berserk in any combat situation, regardless of whether you have been injured.
            <br />
            <br />
            To avoid this, you must make a self-control roll when you first enter combat (even a
            barroom brawl or a boxing match). +50%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Bestial',
    type: 'disadvantage',
    points: '-10 or -15 points',
    description: (
      <p>
        You think and react like a wild animal. You have no concept of “civilized” standards of
        morality or propriety, and no concept of property. You fight or flee from those who frighten
        or threaten you. You cannot learn skills that, in the GM’s opinion, rely on “civilized”
        notions of art or social interaction, and you have no default with such skills.
        <br />
        <br />
        You are not necessarily out of control; you simply react in an animalistic manner. You will
        usually ignore those who leave you alone (unless they’re food!), and might even come to
        display affection for those who treat you with special kindness. You cannot understand
        property in the human sense, but (depending on your race) you might understand territory and
        avoid doing damage to objects on another’s territory. Whether you regard humans as
        individuals with territory rights is an open question! You might also understand dominance,
        and respect or even obey a human who has proved to be stronger than you.
        <br />
        <br />
        You cannot take an Odious Personal Habit for your beast-like behavior; that’s included in
        the cost of Bestial. But if your behavior is extremely repugnant to humans – equivalent in
        severity to a -15-point Odious Personal Habit – the GM might rule that Bestial is worth -15
        points instead of the usual -10. You are free to take Odious Personal Habits unrelated to
        beast-like behavior (including “eats humans”), however.
        <br />
        <br />
        Bestial is not necessarily tied to low IQ, but roleplaying a character who is both Bestial
        and remarkably intelligent would be a major challenge requiring a lot of thought and effort.
        The GM may therefore choose to restrict Bestial to characters with IQ scores under 10 (or
        even under 6!), or simply reserve it for NPCs. Note that the Wild Animal metatrait (p. 263)
        includes this disadvantage.
      </p>
    )
  },
  {
    title: 'Blindness',
    type: 'disadvantage',
    points: '-50 points',
    description: (
      <p>
        You cannot see at all. In unfamiliar territory, you must travel slowly and carefully, or
        have a companion or guide animal lead you. Many actions are impossible for you; the GM
        should use common sense.
        <br />
        <br />
        You are at -6 to all combat skills. You can use hand weapons, but you cannot target a
        particular hit location. If using a ranged weapon, you can only attack randomly, or engage
        targets so close that you can hear them. All this assumes you are accustomed to blindness.
        If you suddenly lose your eyesight, you fight at -10, just as if you were in total darkness.
        In either case, you suffer no extra penalties for operating in the dark.
        <br />
        <br />
        If you have Blindness, you cannot purchase superhuman vision abilities. If you see in a
        spectrum other than the visible one, you have the 0-point version of Infravision (p. 60) or
        Ultravision (p. 94) – not Blindness and the 10-point version of one of those advantages.
        Note that Scanning Sense (p. 81) and Vibration Sense (p. 96) are not vision; you may take
        either of these traits in conjunction with Blindness, at the usual point costs.
      </p>
    )
  },
  {
    title: 'Bloodlust',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You want to see your foes dead. In battle, you must go for killing blows, and put in an
        extra shot to make sure of a downed foe.
        <br />
        <br />
        You must make a self-control roll whenever you need to accept a surrender, evade a sentry,
        take a prisoner, etc. If you fail, you attempt to kill your foe instead – even if that means
        breaking the law, compromising stealth, wasting ammo, or violating orders.
        <br />
        <br />
        Out of combat, you never forget that a foe is a foe. This may seem a truly evil trait, but
        many fictional heroes suffer from it.
        <br />
        <br />
        The hero is not a fiend or sadist; his animosity is limited to “legitimate” enemies, be they
        criminals, enemy soldiers, or feuding clansmen. He often has a good reason for feeling as he
        does. And, in an ordinary tavern brawl, he would use his fists like anyone else. On the
        other hand, a gladiator or duelist with Bloodlust would be very unpopular, a policeman would
        soon be up on charges, and a soldier would risk a court-martial.
      </p>
    )
  },
  {
    title: 'Bully',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You like to push people around whenever you can get away with it. Depending on your
        personality and position, this might take the form of physical attacks, intellectual
        harassment, or social “cutting.” Make a selfcontrol roll to avoid gross bullying when you
        know you shouldn’t – but to roleplay your character properly, you should bully anybody you
        can.
        <br />
        <br />
        Since nobody likes a bully, others react to you at -2.
      </p>
    )
  },
  {
    title: 'Callous',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You are merciless, if not cruel. You can decipher others’ emotions, but you do so only to
        manipulate them – you don’t care about their feelings or pain. This gives you -3 on all
        Teaching rolls, on Psychology rolls made to help others (as opposed to deduce weaknesses or
        conduct scientific research), and on any skill roll made to interact with those who have
        suffered the consequences of your callousness in the past (GM’s decision).
        <br />
        <br />
        As well, past victims, and anyone with Empathy, will react to you at -1. But ruthlessness
        has its perks: you get an extra +1 to Interrogation and Intimidation rolls when you use
        threats or torture.
      </p>
    )
  },
  {
    title: 'Cannot Learn',
    type: 'disadvantage',
    points: '-30 points',
    description: (
      <p>
        You cannot spend earned character points to add or improve DX, IQ, skills, or mental
        advantages, nor can you acquire new techniques (see Techniques, p. 229) or familiarities
        (see Familiarity, p. 169) to accompany existing skills. You are stuck with your starting
        abilities!
        <br />
        <br />
        You can still increase your ST and HT, and add physical advantages (with the GM’s
        permission). As well, Cannot Learn doesn’t prevent you from temporarily acquiring skills
        using the Modular Abilities advantage (p. 71).
        <br />
        <br />
        Those with computer brains often possess both traits. This trait is most suitable for
        golems, mindless undead, robots, and other automata.
      </p>
    )
  },
  {
    title: 'Cannot Speak',
    type: 'disadvantage',
    points: '-15 or -25 points',
    description: <p>You have a limited capacity for speech. This trait comes in two levels:</p>,
    subCategories: [
      {
        name: 'Cannot Speak',
        text: (
          <p>
            You can make vocal sounds (bark, growl, trill, etc., as appropriate), but your speech
            organs are incapable of the subtle modulations required for language. You may still have
            the Mimicry or Voice advantage, or the Disturbing Voice disadvantage (but not
            Stuttering). Most animals have this trait.
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Mute',
        text: (
          <p>
            You cannot vocalize at all. All communications with others must be nonverbal: writing,
            sign language, Morse code, telepathy, etc. Time spent communicating this way counts at
            full value for study of the related skills (see Chapter 9).
            <br />
            <br />
            No roll is required (or allowed!) when you try to communicate with PCs who don’t know
            your sign language – roleplay this on your own! You cannot have any other voice-related
            traits.
          </p>
        ),
        points: '-25 points'
      }
    ]
  },
  {
    title: 'Charitable',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You are acutely aware of others’ emotions, and feel compelled to help those around you –
        even legitimate enemies. Make a self-control roll in any situation where you could render
        aid or are specifically asked for help, but should resist the urge.
        <br />
        <br />
        If you fail, you must offer assistance, even if that means violating orders or walking into
        a potential trap
      </p>
    )
  },
  {
    title: 'Chronic Depression',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You’ve lost your will to live. You’d commit suicide, but it seems like so much trouble. Make
        a self-control roll to do anything but acquire and consume the minimum necessities for
        survival (for instance, to motivate yourself to go to a movie, attend a job interview, or
        keep a date), or whenever you must choose between two or more actions. If you fail, you take
        the path of least resistance. This usually means staying put and doing nothing.
        <br />
        <br />
        If your self-control number is sufficiently low, you will find it almost impossible to do
        anything at all for yourself, unless someone physically drags you out of your lair. If
        somebody shows up and demands that you go out and do something with him, make a self-control
        roll. If you fail, you go along with his plan out of apathy.
        <br />
        <br />
        You may eventually replace this disadvantage with another one of equivalent value that is
        more conducive to self-esteem.
        <br />
        <br />
        The GM need only allow this evolution if you roleplay it convincingly.
        <br />
        <br />
        The GM may also require you to roleplay both disadvantages (the new one constantly, the
        Chronic Depression whenever the GM decides to bring it into play) during the transition
        period.
        <br />
        <br />
        You may also acquire this disadvantage in play. If you violate a selfimposed mental
        disadvantage (see p. 121), or lose a Dependent, the GM may replace that disadvantage with
        this one.
      </p>
    )
  },
  {
    title: 'Chronic Pain',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You have an injury, disorder, or illness that leaves you in severe pain on a regular basis –
        perhaps even constantly. Examples include arthritis, bone cancer, migraines, and pieces of
        shrapnel embedded in the body (an “old war wound”).
        <br />
        <br />
        Roll against the frequency of appearance for your Chronic Pain once per day. If you roll
        below this number, you suffer a bout of pain. The timing of this attack is up to the GM, but
        it usually occurs during waking hours – you might wake up with it, or it might be set off by
        stress (fatigue, exertion, etc.) during the day.
        <br />
        <br />
        While in pain, reduce your DX and IQ by the amount specified for the severity of your pain
        (see below). Reduce self-control rolls to resist disadvantages such as Bad Temper and
        Berserk by the same amount – someone in pain is more likely to lose his cool. If the GM
        rules that the attack occurs while you are trying to sleep, you suffer penalties for sleep
        deprivation instead of the usual effects of this disadvantage.
        <br />
        <br />
        Chronic Pain attacks endure for a fixed “interval,” after which you may attempt a HT roll to
        recover. If you succeed, you have dealt with your pain . . . today. If you fail, the attack
        continues for another interval, after which you may attempt another HT roll. And so on.
        <br />
        <br />
        Find the point cost of Chronic Pain by choosing a severity and then multiplying the given
        cost to reflect the interval and frequency of attacks. Drop all fractions.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Severity</strong>
            <br />
            <br />
            <i>Mild:</i>
          </p>
        ),
        text: <p>-2 to DX, IQ, and self-control rolls:</p>,
        points: '-5 points'
      },
      {
        name: 'Severe',
        text: <p>-4 to DX, IQ, and self-control rolls:</p>,
        points: '-10 points'
      },
      {
        name: 'Agonizing',
        text: <p>-6 to DX, IQ, and selfcontrol rolls:</p>,
        points: '-15 points'
      },
      {
        name: (
          <p>
            <strong className="limitation">Interval</strong>
          </p>
        ),
        text: <p>1 hour: x0.5.</p>
      },
      {
        text: <p>2 hours: x1.</p>
      },
      {
        text: <p>4 hours: x1.5</p>
      },
      {
        text: <p>8 hours: x2.</p>
      },
      {
        name: (
          <p>
            <strong className="enhancement">Frequency of Appearance</strong>
          </p>
        ),
        text: <p>Attack occurs on a roll of 6 or less: x0.5.</p>
      },
      {
        text: <p>Attack occurs on a roll of 9 or less: x1.</p>
      },
      {
        text: <p>Attack occurs on a roll of 12 or less: x2.</p>
      },
      {
        text: <p>Attack occurs on a roll of 15 or less: x3.</p>
      }
    ]
  },
  {
    title: 'Chummy',
    type: 'disadvantage',
    points: '-5 or -10 points',
    description: (
      <p>You work well with others and seek out company. This trait comes in two levels:</p>
    ),
    subCategories: [
      {
        name: 'Chummy',
        text: (
          <p>
            You react to others at +2 most of the time.
            <br />
            <br />
            When alone, you are unhappy and distracted, and suffer a -1 penalty to IQ-based skills.
            -
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Gregarious',
        text: (
          <p>
            You usually react to others at +4.
            <br />
            <br />
            You are miserable when alone, and use IQ-based skills at -2 – or at -1 if in a group of
            four or less.
          </p>
        ),
        points: '-10 points'
      }
    ]
  },
  {
    title: 'Clueless',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You totally miss the point of any wit aimed at you, and are oblivious to attempts to seduce
        you (+4 to resist Sex Appeal). The meanings of colloquial expressions escape you.
        <br />
        <br />
        Sophisticated manners are also beyond you, giving -4 to Savoir-Faire skill.
        <br />
        <br />
        You have many minor habits that annoy others (e.g., leaving the turn signal on while driving
        from Chicago to Albuquerque), and may take one or two of these as quirks. Most people will
        react to you at -2. Unlike No Sense of Humor (p. 146), you may make jokes – albeit lame ones
        – and you can appreciate slapstick and written humor. However, you rarely “get” verbal
        humor, especially if you are the target (roll vs. IQ-4 roll to realize you’re the butt of
        the joke). And unlike Gullibility (p. 137), you normally realize when someone is trying to
        take advantage of you, except in social situations. You are no more susceptible to Fast-Talk
        than normal, save when someone is trying to convince you that an attractive member of the
        appropriate sex is interested in you . . .<br />
        <br />
        This disadvantage is most appropriate for ivory-tower geniuses, aliens from Mars, etc.
      </p>
    )
  },
  {
    title: 'Code of Honor',
    type: 'disadvantage',
    points: '-5 or -15 points',
    description: (
      <p>
        You take pride in a set of principles that you follow at all times. The specifics can vary,
        but they always involve “honorable” behavior. You will do nearly anything – perhaps even
        risk death – to avoid the label “dishonorable” (whatever that means).
        <br />
        <br />
        You must do more than pay lip service to a set of principles to get points for a Code of
        Honor. You must be a true follower of the Code! This is a disadvantage because it often
        requires dangerous – if not reckless – behavior. Furthermore, you can often be forced into
        unfair situations, because your foes know you are honorable.
        <br />
        <br />
        Code of Honor is not the same as Duty (p. 133) or Sense of Duty (p. 153). A samurai or
        British grenadier marches into battle against fearful odds out of duty, not for his personal
        honor (though of course he would lose honor by fleeing). The risks you take for your honor
        are solely on your own account.
        <br />
        <br />
        The point value of a particular Code of Honor depends on how much trouble it is liable to
        get you into and how arbitrary and irrational its requirements are. An informal Code that
        applies only among your peers is worth -5 points.
        <br />
        <br />A formal Code that applies only among peers, or an informal one that applies all the
        time, is worth -10 points. A formal Code that applies all the time, or that requires suicide
        if broken, is worth -15 points. The GM has the final say! Some examples:
      </p>
    ),
    subCategories: [
      {
        name: 'Code of Honor (Pirate’s)',
        text: (
          <p>
            Always avenge an insult, regardless of the danger; your buddy’s foe is your own; never
            attack a fellow crewman or buddy except in a fair, open duel.
            <br />
            <br />
            Anything else goes. This is also suitable for brigands, bikers, etc.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Code of Honor (Professional)',
        text: (
          <p>
            Adhere to the ethics of your profession; always do your job to the best of your ability;
            support your guild, union, or professional association.
            <br />
            <br />
            This is most suitable for lawyers and physicians (Hippocratic Oath), but dedicated
            tradesmen, merchants, and so forth may have a similar Code
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Code of Honor (Gentleman’s)',
        text: (
          <p>
            Never break your word. Never ignore an insult to yourself, a lady, or your flag; insults
            may only be wiped out by an apology or a duel (not necessarily to the death!).
            <br />
            <br />
            Never take advantage of an opponent in any way; weapons and circumstances must be equal
            (except in open war).
            <br />
            <br />
            This only applies between gentlemen. A discourtesy from anyone of Status 0 or less calls
            for a whipping, not a duel!
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Code of Honor (Soldier’s)',
        text: (
          <p>
            An officer should be tough but fair, lead from the front, and look out for his men; an
            enlisted man should look out for his buddies and take care of his kit.
            <br />
            <br />
            Every soldier should be willing to fight and die for the honor of his unit, service, and
            country; follow orders; obey the “rules of war”; treat an honorable enemy with respect
            (a dishonorable enemy deserves a bullet); and wear the uniform with pride.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Code of Honor (Chivalry)',
        text: (
          <p>
            As Code of Honor (Gentleman’s), except that flags haven’t been invented. Respond to any
            insult to your liege-lord or to your faith. Protect any lady, and anyone weaker than
            yourself.
            <br />
            <br />
            Accept any challenge to arms from anyone of greater or equal rank. Even in open war,
            sides and weapons must be equal if the foe is also noble and chivalrous.
          </p>
        ),
        points: '15 points'
      },
      {
        name: 'Cold-Blooded',
        text: (
          <p>
            Your body temperature fluctuates with the temperature of the environment. You are less
            susceptible to damage from high or low body temperature (+2 HT to resist the effects of
            temperature), and require only 1/3 the food needed by a warm-blooded being of equal
            mass, but you tend to “stiffen up” in cold weather.
            <br />
            <br />
            After 30 minutes in cold conditions (or one hour if you have any level of Temperature
            Tolerance), you get -1 to Basic Speed and DX per 10° below your “threshold temperature”
            (see below). At temperatures below 32°, you must roll vs. HT or take 1 HP of damage.
            Warm clothing gives +2 to this roll.
            <br />
            <br />
            You regain lost Basic Speed and DX at the rate of one point of each per hour once you
            return to a warm climate. Double this rate in an exceptionally warm environment.
            <br />
            <br />
            Point value depends on your “threshold temperature”:
          </p>
        ),
        points: '-5 or -10 points'
      },
      {
        text: <p>You “stiffen up” below 50°</p>,
        points: '-5 points'
      },
      {
        text: <p>You “stiffen up” below 65°</p>,
        points: '-10 points'
      }
    ]
  },
  {
    title: 'Colorblindness',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You cannot see any colors at all (this is total colorblindness).
        <br />
        <br />
        In any situation requiring color identification (e.g., gem buying, livery identification, or
        pushing the red button to start the motor), the GM should give you appropriate difficulties.
        <br />
        <br />
        Certain skills are always harder for you. In particular, you are at -1 on most Artist,
        Chemistry, Driving, Merchant, Piloting, and Tracking rolls.
      </p>
    )
  },
  {
    title: 'Combat Paralysis',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You tend to “freeze up” in combat situations, and receive -2 to all Fright Checks. This has
        nothing to do with Cowardice (p. 129) – you may be brave, but your body betrays you. In any
        situation in which personal harm seems imminent, make a HT roll.
        <br />
        <br />
        Do not roll until the instant you need to fight, run, pull the trigger, or whatever. Any
        roll over 13 is a failure, even if you have HT 14+. On a success, you can act normally. On a
        failure, you are mentally stunned (see Effects of Stun, p. 420). Make another HT roll every
        second, at a cumulative +1 per turn after the first, to break the freeze. A quick slap from
        a friend gives +1 to your cumulative roll.
        <br />
        <br />
        Once you unfreeze, you will not freeze again until the immediate danger is over. Then, in
        the next dangerous situation, you may freeze once again. This trait is the opposite of
        Combat Reflexes (p. 43). You cannot have both.
      </p>
    )
  },
  {
    title: 'Compulsive Behavior',
    type: 'disadvantage',
    points: '-5 to -15points',
    description: (
      <p>
        You have a habit – often a vice – that wastes a good deal of your time or money. Youmust
        indulge at least once per day, if at all possible, and do so any time you have the
        opportunity unless you can make a self-control roll.
        <br />
        <br />
        You seek to avoid any situation where you know you will be unable to indulge for more than a
        day. You must make a self-control roll to enter into such a situation; if you succeed (or
        are forced into the situation), you suffer from Bad Temper (p. 124) the whole time, with the
        same self-control roll as your Compulsive Behavior. It’s bad roleplaying to try to avoid
        your compulsion regularly!
        <br />
        <br />
        The point value of this disadvantage depends on how much your habit costs and how much
        trouble it is likely to get you into. The GM is the final judge. Examples include:
      </p>
    ),
    subCategories: [
      {
        name: 'Compulsive Carousing',
        text: (
          <p>
            You cannot resist the urge to party! Once per day, you must seek out a social gathering
            and lounge around – feasting, drinking, singing, and joking – for at least an hour. If
            you are not invited, you crash the party; if there is no party, you attempt to liven
            things up. Money is no object! If you have it, you will spend it.
            <br />
            <br />
            You try almost any mindaltering substance without a second thought, never refuse a
            social drink, and aren’t particularly picky about your romantic partners. You get +1 to
            reactions from like-minded extroverts, but -1 or worse from sober-minded citizens – and
            -4 in puritanical settings.
          </p>
        ),
        points: '-5 points* (-10 points* in puritanical settings).'
      },
      {
        name: 'Compulsive Gambling',
        text: (
          <p>
            You cannot pass up an opportunity to gamble. Bets, wagers, games of chance, and even
            lotteries hold an uncanny fascination for you. If there is no game of chance or bet
            going, you will start one. You try any gambling game proposed to you, whether you know
            it or not.
            <br />
            <br />
            You do not have to have the Gambling skill, but if you don’t, you will need a steady
            source of wealth! If you are prevented from gambling – for instance, by traveling with
            nongamblers – you will quickly earn a reaction penalty (-1 per -5 points in this
            disadvantage, after the self-control multiplier) by constantly talking about gambling
            and attempting to draw others into games or wagers
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Compulsive Generosity',
        text: (
          <p>
            You are too open-handed. If a beggar asks for cash, you give – and where others give
            copper, you give silver. You always listen to larger requests for financial aid, if they
            are even remotely plausible, and you must make a self-control roll whenever you hear a
            good hard-luck story (if you are broke when asked, you apologize profusely).
            <br />
            <br />
            You aren’t a complete sucker – you just feel guilty about being better off than others.
            In a society with a lot of beggars around, increase your cost of living:
          </p>
        )
      },
      {
        text: (
          <p>
            <table>
              <tr>
                <th>
                  Self-Control
                  <br />
                  Number{' '}
                </th>
                <th>
                  Cost of Living
                  <br />
                  Increase
                </th>
              </tr>
              <tr>
                <td>6</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>9</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>12</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>15</td>
                <td>5%</td>
              </tr>
            </table>
            <br />
            <br />
            This may earn you a +1 reaction bonus from pious folk; if you are poor yourself, the
            reaction bonus may be even higher.
            <br />
            <br />
            This trait is incompatible with Miserliness.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Compulsive Lying',
        text: (
          <p>
            You lie constantly, for no reason other than the joy of telling the tale. You delight in
            inventing stories about your deeds, lineage, wealth – whatever might impress your
            audience. Even when exposed as a liar, you cling to your stories tenaciously, calling
            your accuser a liar and a scoundrel.
            <br />
            <br />
            Make a self-control roll to tell the pure, unvarnished truth. If you fail, you lie – no
            matter how dire the consequences. When you roll to tell the truth to your fellow party
            members, roll out of sight of the other players. Thus, they can never be sure they are
            getting accurate information.
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Compulsive Spending',
        text: (
          <p>
            Cash just runs through your fingers! You enjoy being seen as a big spender, are too fond
            of luxury, or find the experience of buying to be fun – perhaps all three. Make a
            self-control roll whenever someone offers you a purchase that matches any of your quirks
            or interests, and the cash in your pocket is more than twice the asking price.
            <br />
            <br />
            If you fail, you buy. This raises your cost of living, and gives you a penalty to
            Merchant skill when you bargain or haggle:
          </p>
        ),
        points: '-15 points'
      },
      {
        text: (
          <p>
            <table>
              <tr>
                <th>
                  Self-Control
                  <br />
                  Number{' '}
                </th>
                <th>
                  Cost of Living
                  <br />
                  Increase
                </th>
                <th>
                  Merchant Skill
                  <br />
                  Penalty
                </th>
              </tr>
              <tr>
                <td>6</td>
                <td>80%</td>
                <td>-4</td>
              </tr>
              <tr>
                <td>9</td>
                <td>40%</td>
                <td>-3</td>
              </tr>
              <tr>
                <td>12</td>
                <td>20%</td>
                <td>-2</td>
              </tr>
              <tr>
                <td>15</td>
                <td>10%</td>
                <td>-1</td>
              </tr>
            </table>
            <br />
            <br />
            Compulsive Spending is not limited to the wealthy! A poor farmer can be a spendthrift.
            <br />
            <br />
            This trait is incompatible with Miserliness (it’s the opposite!), but you can combine it
            with Greed.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Compulsive Vowing',
        text: (
          <p>
            You never simply decide to do something; you must make it an oath. Although these vows
            are often trivial in nature, you approach them all with the same solemnity and
            dedication. You may tack extraneous vows onto legitimate ones.
          </p>
        ),
        points: '-5 points'
      }
    ]
  },
  {
    title: 'Confused',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        To you, the world seems a strange and incomprehensible place most of the time. You are not
        necessarily stupid, but you are slow to pick up on new facts or situations.
        <br />
        <br />
        In particular, you respond poorly to excessive stimulation. When alone in the peace and
        quiet of your own home, you function normally. But in a strange place, or when there’s a
        commotion going on, you must make a self-control roll. On a failure, you freeze up instead
        of taking decisive or appropriate action. This often prevents you from making Tactics rolls
        and engaging in other sorts of longrange planning.
        <br />
        <br />
        The GM should adjust the self-control roll in accordance with the stimuli in the area. To
        resist confusion from two friends chatting quietly in a familiar room would require an
        unmodified roll, but a nightclub with flashing lights and pounding music might give -5, and
        a full-scale riot or battle would give -10! If this disadvantage strikes in combat, you must
        take the Do Nothing maneuver each turn. You are not stunned, and if you are directly and
        physically attacked, you can defend yourself normally.
        <br />
        <br />
        You can even launch a counterattack against that one foe. But you never act – only react.
      </p>
    )
  },
  {
    title: 'Cowardice',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are extremely careful about your physical well-being. Make a selfcontrol roll any time
        you are called on to risk physical danger. Roll at -5 if you must risk death.
        <br />
        <br />
        If you fail, you must refuse to endanger yourself unless threatened with greater danger!
        Cowardice gives a penalty to Fright Checks whenever physical danger is involved:
      </p>
    ),
    subCategories: [
      {
        text: (
          <p>
            <table>
              <tr>
                <th>
                  Self-Control
                  <br />
                  Number{' '}
                </th>
                <th>
                  Fright Check
                  <br />
                  Penalty
                </th>
              </tr>
              <tr>
                <td>6</td>
                <td>80%</td>
                <td>-4</td>
              </tr>
              <tr>
                <td>9</td>
                <td>40%</td>
                <td>-3</td>
              </tr>
              <tr>
                <td>12</td>
                <td>20%</td>
                <td>-2</td>
              </tr>
              <tr>
                <td>15</td>
                <td>10%</td>
                <td>-1</td>
              </tr>
            </table>
          </p>
        )
      }
    ],
    extraText: (
      <strong>
        <i>
          In some times and places, soldiers, police, etc., react to you at a similar penalty if
          they know you are a coward.
        </i>
      </strong>
    )
  },
  {
    title: 'Curious',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You are naturally very inquisitive. This is not the curiosity that affects all PCs (“What’s
        in that cave? Where did the flying saucer come from?”), but the real thing (“What happens if
        I push this button?”).
        <br />
        <br />
        Make a self-control roll when presented with an interesting item or situation. If you fail,
        you examine it – push buttons, pull levers, open doors, unwrap presents, etc. – even if you
        know it could be dangerous. Good roleplayers won’t try to make this roll very often . . .
        <br />
        <br />
        In general, you do everything in your power to investigate any situation with which you
        aren’t 100% familiar. When faced with a real mystery, you simply cannot turn your back on
        it. You try to rationalize your curiosity to others who try to talk you out of it. Common
        Sense doesn’t help – you know you are taking a risk, but you’re curious anyway
      </p>
    )
  },
  {
    title: 'Cursed',
    type: 'disadvantage',
    points: '-75 points',
    description: (
      <p>
        worse. When anything goes wrong for your party, it happens to you, first and worst. If
        something goes right, it misses you. Any time the GM feels like hosing you, he can, and you
        have no complaint coming, because you are Cursed.
        <br />
        <br />
        You can’t buy this off just by spending points – you must determine what has cursed you and
        deal with it, and then spend the points.
      </p>
    )
  },
  {
    title: 'Deafness',
    type: 'disadvantage',
    points: '-20 points',
    description: (
      <p>
        You cannot hear anything. You must receive information in writing (if you are literate) or
        sign language. However, time you spend communicating this way counts at full value for study
        of the skills used (Gesture, Lip- Reading, etc.); see Chapter 9.
      </p>
    )
  },
  {
    title: 'Decreased Time Rate',
    type: 'disadvantage',
    points: '-100 points',
    description: (
      <p>
        This is the disadvantageous counterpart to Altered Time Rate (p. 38). You experience time
        half as fast as normal: one subjective second for every two real seconds that pass.
        <br />
        <br /> You only get a turn every two seconds in combat! (Gaming groups that enjoy extra
        detail might wish to give characters with Decreased Time Rate “halfturns” instead: splitting
        a Move maneuver across two turns, declaring an Attack maneuver one turn and rolling to hit
        the next, etc.)
      </p>
    )
  },
  {
    title: 'Delusions',
    type: 'disadvantage',
    points: '-5 to -15 points',
    description: (
      <p>
        You believe something that simply is not true. This may cause others to consider you insane.
        And they may be right! If you suffer from a Delusion, you must roleplay your belief at all
        times.
        <br />
        <br />
        The point value of the Delusion depends on its nature:
      </p>
    ),
    subCategories: [
      {
        name: 'Minor',
        text: (
          <p>
            This Delusion affects your behavior, and anyone around you will soon notice it, but it
            does not keep you from functioning more-or-less normally. Those who notice your Delusion
            will react at -1. Examples: “Squirrels are messengers from God.” “The Illuminati are
            watching me constantly – but only to protect me.” “I am the rightful Duke of Fnordia,
            stolen at birth by Gypsies and doomed to live among commoners.”
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Major',
        text: (
          <p>
            This Delusion strongly affects your behavior, but does not keep you from living a fairly
            normal life. Others will react at -2.
            <br />
            <br />
            Examples: “The government has all phones tapped.” “I have Eidetic Memory and Absolute
            Direction.”
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Severe',
        text: (
          <p>
            This Delusion affects your behavior so much that it may keep you from functioning in the
            everyday world. Others react to you at -3, but they are more likely to fear or pity you
            than to attack.
            <br />
            <br />A Delusion this severe can keep you from participating meaningfully in the
            campaign; therefore, you should always clear it with the GM first. Examples: “I am
            Napoleon.” “I am immortal.” “Ice cream makes machines work better, especially computers.
            Spoon it right in.”
          </p>
        ),
        points: '-15 points'
      },
      {
        text: (
          <p>
            Depending on your behavior, the same Delusion could be a quirk (-1 point) or worth -5,
            -10, or -15 points. Consider “Everything colored purple is alive.” If you pat purple
            things and say hello, that’s a quirk. If you won’t discuss serious matters with purple
            things in the room, it’s a Minor Delusion. If you picket the Capitol demanding Civil
            Rights For Purple Things, that’s Major. If you attack purple things on sight, that’s
            Severe!
            <br />
            <br />
            Regardless of how insane you really are, you may not get more than -40 points, total,
            from Delusions. A GM who wants to shake up his players can have a Delusion turn out to
            be true. This does not suit all Delusions. Of those listed above, for instance, the ones
            about squirrels, ice cream, and Napoleon seem unlikely.
            <br />
            <br />
            But the Illuminati might really exist, or Gypsies might really have stolen the heir to
            the throne of Fnordia . . . Have fun! If your Delusion turns out to be true, you don’t
            have to buy it off until the other players realize it’s true. (And remember: the GM
            won’t tell you that you are not really crazy. You can be right and still be crazy . . .)
          </p>
        )
      }
    ]
  },
  {
    title: 'Dependency',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You must regularly ingest a substance (e.g., a drug or magic potion), touch or carry an
        object (e.g., a holy shrine or magical amulet), or spend time in an environment (e.g., your
        coffin or your home country, planet, or plane) in order to survive. If you fail to do so,
        you start to lose HP and will eventually die. Point value depends on the rarity of the item
        you depend on:
      </p>
    ),
    subCategories: [
      {
        name: 'Rare',
        text: <p>cannot be bought; must be found or made</p>,
        points: '-30 points'
      },
      {
        name: 'Occasional',
        text: <p>very expensive or hard to find</p>,
        points: '-20 points'
      },
      {
        name: 'Common',
        text: <p>expensive, somewhat hard to find.</p>,
        points: '-10 points'
      },
      {
        name: 'Very Common',
        text: <p>available almost anywhere</p>,
        points: '-5 points'
      },
      {
        text: (
          <p>
            <strong>
              Add -5 points to these values for items that are illegal in your game world.
            </strong>
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">
              Apply a multiplier based on the frequency with which you must receive the item:
            </strong>
          </p>
        )
      },
      {
        name: 'Constantly',
        text: (
          <p>
            You must carry and use the substance at all times – for example, an exotic atmosphere.
            <br />
            <br />
            Lose 1 HP per minute without the substance. x5.
          </p>
        )
      },
      {
        name: 'Hourly',
        text: <p>Lose 1 HP per 10 minutes after missing an hourly dose. x4.</p>
      },
      {
        name: 'Daily',
        text: <p>Lose 1 HP per hour after missing a daily dose. x3.</p>
      },
      {
        name: 'Weekly',
        text: <p>Lose 1 HP per six hours after missing a weekly dose. x2.</p>
      },
      {
        name: 'Monthly',
        text: <p>Lose 1 HP per day after missing a monthly dose. x1.</p>
      },
      {
        name: 'Seasonally:',
        text: (
          <p>
            Lose 1 HP per three days after missing a seasonal dose (a “season” is three months for
            this purpose). x1/3 (drop all fractions).
          </p>
        ),
        points: 'points'
      },
      {
        name: 'Yearly',
        text: <p>Lose 1 HP per two weeks after missing a yearly dose. x1/10 (drop all fractions)</p>
      },
      {
        text: (
          <p>
            If you need to touch an object or spend time in an environment, you must do so for time
            equal to your damage interval in order to avoid damage.
            <br />
            <br />
            For instance, to avoid losing 1 HP per hour to a daily Dependency on rest in your
            coffin, you must spend at least one hour per day in your coffin. To avoid losing 1 HP
            every two weeks to a yearly Dependency on visiting your home planet, you must visit your
            home planet for at least two weeks per year.
            <br />
            <br />
            With the GM’s permission, normal humans may take this disadvantage to represent the
            special requirements of certain chronic illnesses. Not every life-support requirement
            qualifies as Dependency.
            <br />
            <br />
            Use Maintenance (p. 143) if you require skilled care – not a substance, object, or
            environment – to avoid HT loss (not injury). Use Restricted Diet (p. 151) for special
            dietary requirements that result in slow starvation as opposed to rapid HP loss when you
            are forced to do without.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Aging</i>
          </p>
        ),
        text: (
          <p>
            You age unnaturally without the item you depend on. For each HP lost, you also age two
            years (even if you are normally Unaging). +30%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Dependents',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        A “Dependent” is an NPC for whom you are responsible; e.g., your child, kid brother, or
        spouse. You must take care of your Dependents.
        <br />
        <br />
        Furthermore, your foes can strike at you through them. (If you have both an Enemy and a
        Dependent, and the dice indicate that both appear, then the GM can build an entire adventure
        around this theme!)
        <br />
        <br />
        If your Dependent ends up kidnapped or otherwise in danger during play, you must go to the
        rescue as soon as possible. If you don’t go to his aid immediately, the GM can deny you
        bonus character points for “acting out of character.” Furthermore, you never earn any
        character points for a game session in which your Dependent is killed or badly hurt.
        <br />
        <br />
        Three factors determine the disadvantage value of a Dependent: his competence, his
        importance (to you!), and his frequency of appearance.
      </p>
    ),
    subCategories: [
      {
        name: 'Competence',
        text: (
          <p>
            Specify the number of points your Dependent is built on. The more points you use to
            “build” your Dependent, the more competent he will be, and the fewer points he will be
            worth as a disadvantage.
            <br />
            <br />
            “Point Total” is the Dependent’s point total as a fraction of the PC’s, except for the
            last line, which is absolute; “Cost” is the number of character points the disadvantage
            is worth.
            <br />
            <br />
          </p>
        )
      },
      {
        text: (
          <table>
            <tr>
              <th>Point Total</th>
              <th>Cost</th>
            </tr>
            <tr>
              <td>No more than 100%</td>
              <td>-1 point</td>
            </tr>
            <tr>
              <td>No more than 75%</td>
              <td>-2 points</td>
            </tr>
            <tr>
              <td>No more than 50%</td>
              <td>-5 points</td>
            </tr>
            <tr>
              <td>No more than 25%</td>
              <td>-10 points</td>
            </tr>
            <tr>
              <td>0 or fewer points</td>
              <td>-15 points</td>
            </tr>
          </table>
        )
      },
      {
        text: (
          <p>
            The same person can be both a Dependent and an Ally (p. 36)! Add the cost of Ally and
            Dependent together, and treat the combination as a single trait: an advantage if the
            total point cost is positive, a disadvantage if it is negative. You must use the same
            point total for him in both cases, but frequency of appearance can differ.
            <br />
            <br />
            Roll separately for his appearance as a Dependent and as an Ally. If he appears as a
            Dependent, he shows up in a way that causes you trouble (e.g., he’s captured). If he
            appears as an Ally, he manages to be helpful and take care of himself.
            <br />
            <br />
            If he appears as both, he is helpful and troublesome at the same time; for instance, he
            uses his skills to assist you, but also wanders off, is singled out by the enemy, or
            otherwise causes problems equal to the assistance he offers.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="enhancement">Importance</strong>
            <br />
            <br />
            <i>Employer or acquaintance</i>
          </p>
        ),
        text: (
          <p>
            You feel a responsibility toward this person, but you may weigh risks to him in a
            rational fashion. x1/2.
          </p>
        )
      },
      {
        name: 'Friend',
        text: (
          <p>
            You must always try to protect this person.
            <br />
            <br />
            You may only risk harm to him if something very important (such as the safety of many
            other people) is at stake. x1.
          </p>
        )
      },
      {
        name: 'Loved Ones',
        text: (
          <p>
            The Dependent is a relative or a lover. You may not put anything before his safety! x2.
          </p>
        )
      },
      {
        name: 'Frequency of Appearance',
        text: (
          <p>
            Choose a frequency of appearance, as explained under Frequency of Appearance (p. 36).
            <br />
            <br />
            This should fit the “story” behind the Dependent. If the Dependent were your infant
            child, for instance, it would be odd for him to appear “quite rarely”!
          </p>
        )
      },
      {
        name: 'Multiple Dependents',
        text: (
          <p>
            You cannot earn points for more than two Dependents. However, if you have a group of
            Dependents, you may count the entire group as your two Dependents. Work out the value of
            an average member of the group as a Dependent, and then claim twice this point value.
          </p>
        )
      },
      {
        name: 'Dependents in Play',
        text: (
          <p>
            As you earn points, the GM will scale your Dependent’s abilities proportionally to keep
            his point total a fixed percentage of your own. Thus, his value as a disadvantage will
            not change. Children grow up, adults earn money, and everyone learns new skills.
            Dependents who spend a lot of time around you might become adventurers in their own
            right.
            <br />
            <br />
            You are free to suggest reasonable improvements for your Dependents, but the GM’s word
            is final.
            <br />
            <br />
            If your Dependent is killed, or so seriously injured that the GM decides he is
            effectively out of the campaign, you must make up the bonus points you got for him.
            <br />
            <br />
            You have three options: buy off the amount by spending earned character points, take a
            new disadvantage (e.g., Chronic Depression, p. 126), or get a new Dependent. New
            Dependents are usually inappropriate, but a mental disability brought on by the loss is
            a good solution. (Ever since the octopus got Amy, you’ve been afraid of the ocean . . .)
          </p>
        )
      },
      {
        name: 'Examples of Dependents',
        text: (
          <p>
            For anyone: elderly relatives, teachers, friends, children, younger brothers or sisters,
            lovers, husbands or wives.
            <br />
            <br />
            For crimefighters: young sidekicks, reporters, or wards.
            <br />
            <br />
            For wizards: apprentices.
            <br />
            <br />
            For ship captains (ocean- or space-going): ensigns or cabin boys.
            <br />
            <br />
            For soldiers: orphans or new recruits.
            <br />
            <br />
            For criminals or mad scientists: incompetent henchmen.
          </p>
        )
      }
    ]
  },
  {
    title: 'Destiny',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        A disadvantageous Destiny functions identically to an advantageous one (see p. 48), save
        that it always leads to something bad – but perhaps not immediately, and not without a
        chance to gain honor by dealing with it well.
        <br />
        <br />A fated, tragic death can be an end worthy of a hero! This kind of Destiny comes in
        three levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Minor Disadvantage',
        text: (
          <p>
            You are fated to play a small part in a larger story, and you will not come off so well.
            You are guaranteed at least one tragic experience or embarrassing failure – although
            these things are unlikely to result in your death except under the most desperate and
            heroic of circumstances.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Major Disadvantage',
        text: (
          <p>
            You are fated to play a key role in a sorry turn of events. For instance, you might be
            late with a message that could save the day . . . or execute the only competent general
            in a threatened province, causing its loss to barbarian invaders.
            <br /> Still, you will survive.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Great Disadvantage',
        text: (
          <p>
            Death stalks you. Something out there has your name on it. It knows where you are and
            it’s getting closer all the time. You will either die or be ruined, and your fall will
            have terrible repercussions for others.
            <br />
            <br />
            This kind of Destiny is not suitable for every campaign! The GM does not have to allow
            it – and if he does, he should plan on letting the campaign take a radical turn, or end,
            when the Destiny is fulfilled.
          </p>
        ),
        points: '-15 points'
      },
      {
        text: (
          <p>
            You must buy off a disadvantageous Destiny as soon as it is fulfilled. This is automatic
            if the outcome strips you of Allies, Status, Wealth, etc.
            <br />
            <br />
            worth the same number of points. If you lack the points to buy off your Destiny, you
            gain Unluckiness (p. 160), regardless of the point value of the Destiny.
            <br />
            <br />
            It is up to the GM whether you can buy off the Unluckiness!
            <br />
            <br />
            Alternatively, the GM might assign you a new bad Destiny, Divine Curse (below), or other
            supernatural disadvantage.
          </p>
        )
      }
    ]
  },
  {
    title: 'Disciplines of Faith',
    type: 'disadvantage',
    points: '-5 to -15 points',
    description: (
      <p>
        You live by a strict set of rules in order to achieve a greater understanding of your faith.
        <br />
        <br />
        This might be a personal decision or a requirement of your religion.
        <br />
        <br />
        Such rules are optional in many faiths, though – indeed, some religions might forbid them as
        excesses! Disciplines of Faith are often a prerequisite for abilities that channel divine
        power: Power Investiture, True Faith, etc.
        <br />
        <br />
        Some examples of Disciplines of Faith:
      </p>
    ),
    subCategories: [
      {
        name: 'Asceticism',
        text: (
          <p>
            You have renounced the comforts of society to lead a life of self-denial and
            self-discipline. This often involves some sort of isolation in bleak, austere settings.
            <br />
            <br />
            It might even involve sporadic bouts of severe selfpunishment to excise the mortal taint
            of earthly desire.
            <br />
            <br />
            You must try to transcend all need for worldly possessions, and in any event cannot have
            aboveaverage Wealth, or Status beyond that granted by your Religious Rank (if any)
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Monasticism',
        text: (
          <p>
            You lead a life apart from worldly concerns. You are completely devoted to religious
            pursuits, which often involves the denial of ego and self.
            <br />
            <br />
            You must spend at least 75% of your time sequestered from the world, and cannot have
            above-average Wealth, or Status beyond that granted by your Religious Rank (if any).
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Mysticism',
        text: (
          <p>
            You engage in deep meditation and trance-like contemplation, with the aim of obtaining a
            closer union with the divine.
            <br />
            <br />
            You spend most of your time engaged in these rituals, complete with chanting and any
            other necessary trappings.
            <br />
            <br />
            Individuals other than devout co-religionists will consider you a bit mad, and will
            react at -2.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Ritualism',
        text: (
          <p>
            You adhere strictly to elaborate rituals regarding every aspect of life – from waking to
            eating to bathing to sex.
            <br />
            <br />
            Each ritual has its proper place, time, words, trappings, and ceremony. Your fundamental
            belief is that, through the perfect performance of these rituals, you bring each aspect
            of your life closer to the divine.
          </p>
        ),
        points: '-15 points'
      }
    ]
  },
  {
    title: 'Disturbing Voice',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        Your voice is naturally unpleasant or obviously artificial. Details can vary.
        <br />
        <br />
        You might be a robot, or use a technological aid to mitigate the Mute disadvantage. Your
        voice might be raspy, hollow, or squeaky, or your speech might be monotonous and without
        inflection.
        <br />
        <br />
        The game effects in all cases are identical to those of Stuttering (p. 157), although you do
        not necessarily stutter. This trait is the opposite of the Voice advantage (p. 97); you
        cannot have both.
      </p>
    )
  },
  {
    title: 'Divine Curse',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You suffer from a curse placed by a god or similar supernatural force. The curse might be on
        just you, on your entire family, or even on your nation or race.
        <br />
        <br />
        Divine Curse can take any form the GM desires. It can be a continuing commandment (e.g.,
        “You may never sleep at night,” -10 points), a misfortune (e.g., “Every child born to you
        will die young,” -5 points), or even a particularly nasty disadvantage such as Berserk,
        Blindness, or Epilepsy (at the usual cost). What makes it distinct from other disadvantages
        is the potential for removal. The curse was given for a reason, and you can try to uncover
        this reason and atone in play, thereby lifting the curse.
        <br />
        <br />
        The GM should judge the point value of Divine Curse on a case-bycase basis, using existing
        disadvantages as guidelines: the more encompassing or debilitating the curse, the higher its
        value. Curses that result in standard disadvantages should never be worth more points than
        those disadvantages. Price commandments as if they were Vows.
        <br />
        <br />
        The terms of atonement will often be nearly as bad as the curse itself, or require great
        effort to discover and satisfy. Halve the point value if this is not the case.
      </p>
    )
  },
  {
    title: 'Draining',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        Once per day, at a specific time – sunrise, noon, sunset, midnight, etc. – you take 2 HP of
        damage. You can do nothing to prevent this, and cannot heal the damage naturally (even if
        you have Regeneration!), technologically, or supernaturally.
        <br />
        <br />
        The only way to regain your lost HP is to receive a daily dose of a particular substance.
        Point cost depends on the rarity of this substance:
      </p>
    ),
    subCategories: [
      {
        name: '',
        text: <p>Rare (e.g., a special potion)</p>,
        points: '-15 points'
      },
      {
        name: '',
        text: <p>Occasional (e.g., virgin’s blood)</p>,
        points: 'points'
      },
      {
        name: '',
        text: <p>Common (e.g., human blood)</p>,
        points: '-5 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Add -5 points to these values for items that are illegal in your game world. This is not
          the same as Dependency (p. 130). You can have both!
        </i>
      </strong>
    )
  },
  {
    title: 'Dread',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You suffer from a supernatural aversion that compels you to keep a certain, minimum distance
        from a particular item or substance. If outside forces bring you and the item you dread
        closer together than that, you must move away as fast as you can, by the most direct route
        possible. You may do nothing else until you are beyond the range of your Dread. If you
        cannot put at least that much distance between yourself and the object of your Dread, your
        Dread will render you helpless!
        <br />
        <br />
        You can instantly sense the presence of the dreaded substance as soon as you enter the
        forbidden radius. You do not know exactly where it is, but you know what direction it lies
        in and are compelled to go exactly the other way.
        <br />
        <br />
        Base value of Dread is -10 points, which prohibits you from coming within one yard of the
        dreaded substance. A larger radius gives an additional -1 point per yard, to a maximum of
        -20 points at 11 yards. Find the final disadvantage value by multiplying the point value for
        your range to reflect the rarity of the substance, as described for Weakness (p. 161).
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Cannot Be Trapped</i>
          </p>
        ),
        text: (
          <p>
            You cannot enter the forbidden zone of your own volition, but if carried there by an
            outside force, you no longer feel your Dread. You can act normally in the forbidden zone
            until you leave the substance’s presence, at which time the prohibition reactivates.
            -50%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Duty',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        If your occupation and social situation saddle you with a significant personal obligation
        toward others, and occasionally require you to obey hazardous orders, you have a “Duty.”
        Duty most often accompanies Rank (p. 29), a Patron (p. 72), or one of the traits discussed
        under Privilege (p. 30).
        <br />
        <br />
        A particularly arduous job might qualify as a Duty, but most ordinary jobs would not. A
        wholly self-imposed feeling of duty is not a Duty, either (but it can still be a
        disadvantage; see Sense of Duty, p. 153).
        <br />
        <br />
        Finally, you cannot claim points for a Duty toward Dependents (p. 131); the points you get
        for Dependents already reflect your obligations in this regard. The GM may restrict the
        Duties allowed in a campaign, or even forbid them entirely, if he feels they would unduly
        disrupt the flow of the adventure. If you have a Duty, the GM rolls at the beginning of each
        adventure to see whether it comes into play.
        <br />
        <br />
        Being “called to duty” could delay your plans . . . or be the reason for the adventure!
        Alternatively, your master might give you a secret agenda to pursue, or his associates might
        harass you while you are officially “on leave.”
        <br />
        If you try to avoid your Duty, your GM is within his rights to penalize you for bad
        roleplaying.
        <br />
        <br />
        The basic point cost of a Duty depends on the frequency with which comes up in play:
      </p>
    ),
    subCategories: [
      {
        text: <p>Almost all the time (roll of 15 or less)</p>,
        points: '-15 points'
      },
      {
        text: <p>Quite often (roll of 12 or less)</p>,
        points: '-10 points'
      },
      {
        text: <p>Fairly often (roll of 9 or less)</p>,
        points: '-5 points'
      },
      {
        text: <p>Quite rarely (roll of 6 or less)</p>,
        points: '-2 points'
      },
      {
        text: (
          <p>
            This cost is for an occasionally hazardous Duty imposed through normal social means.
            <br />
            <br />
            If this does not describe your Duty, you should modify the cost:
          </p>
        )
      },
      {
        name: 'Extremely Hazardous',
        text: (
          <p>
            You are always at risk of death or serious injury when your Duty comes up.
            <br />
            <br />
            There are significant penalties if you refuse to take these risks: dismissal in
            disgrace, imprisonment, perhaps even death.
            <br />
            <br />
            The GM has the final say as to whether a given Duty is “extremely hazardous” in his
            campaign
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Involuntary',
        text: (
          <p>
            Your Duty is enforced by threats to you or your loved ones, or is imposed by exotic mind
            control, a curse, etc. This is unrelated to how hazardous the Duty is when you carry it
            out – the danger here lies in what will happen if you don’t carry it out! A Duty can be
            Involuntary and either Extremely Hazardous or Nonhazardous.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Nonhazardous',
        text: (
          <p>
            Your Duty never requires you to risk your life. This option is mutually exclusive with
            Extremely Hazardous. +5 points. (If this raises the cost of your Duty to 0 points or
            more, the obligation is too trivial to qualify as a Duty.)
          </p>
        )
      }
    ]
  },
  {
    title: 'Dyslexia',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You have a crippling reading disability. Even simple maps and road signs are beyond you. You
        start with a written comprehension level of “None” in your native language.
        <br />
        <br />
        This is included in Dyslexia; you get no extra points for it. Furthermore, you may never
        improve your written comprehension level beyond “None” in any language.
        <br />
        <br />
        For more on language comprehension, see Language (p. 23). You can learn “book-learned”
        skills at normal speed if you have a teacher to substitute for your inability to use texts.
        Attempts to learn such a skill without a teacher progress at 1/4 speed – if the skill is one
        you can teach yourself without books.
        <br />
        <br />
        The GM’s word is final in all cases. In traditional fantasy settings, magic is a booklearned
        skill, and Dyslexia prevents you from ever becoming a wizard.
        <br />
        <br />
        Note that this is a severe case. Mild dyslexia is not significant in game terms, except
        possibly as a quirk.
      </p>
    )
  },
  {
    title: 'Easy to Kill',
    type: 'disadvantage',
    points: '-2 points/level',
    description: (
      <p>
        You have a health problem or structural weakness that leaves you prone to catastrophic
        system failure if you suffer enough damage.
        <br />
        <br />
        Each level of Easy to Kill gives -1 to HT rolls made for survival at -HP or below, and on
        any HT roll where failure would mean instant death (e.g., heart failure).
        <br />
        <br />
        This does not affect most normal HT rolls – only those to avoid certain death.
        <br />
        <br />
        You may not reduce your HT roll below 3. For instance, if you have HT 10, you are limited to
        Easy to Kill 7.
      </p>
    )
  },
  {
    title: 'Easy to Read',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        Your body language betrays your true intentions. This is not the same as Truthfulness (p.
        159). You have no moral problem with lying, and may even possess Fast-Talk at a high level,
        but your face or stance gives the game away.
        <br />
        <br />
        Easy to Read gives others +4 on all Empathy, Body Language, and Psychology rolls to discern
        your intentions or the truth of your words. As well, they get +4 to their IQ, Detect Lies,
        and Gambling rolls in any Quick Contest with your Acting, Fast-Talk, or Gambling skill when
        you try to lie or bluff. (If you also have Truthfulness, your Fast-Talk skill is at -5 on
        top of this.)
        <br />
        <br />
        This is a crippling disadvantage for a would-be spy, con man, or gambler!
        <br />
        <br />
        This is a mental disadvantage, despite its physical manifestations; with enough practice,
        you can “buy it off.”
      </p>
    )
  },
  {
    title: 'Electrical',
    type: 'disadvantage',
    points: '-20 points',
    description: (
      <p>
        Your body contains unshielded electronics, or relies on electrical power for its vital
        energy.
        <br />
        <br />
        This makes you susceptible to attacks that only affect electrical systems, such as spells,
        advantages, and ultra-tech weapons that drain power or produce “surge” effects, and the
        electromagnetic pulse from a nuclear blast.
        <br />
        <br />A critical hit from an electrical attack causes you to “short-circuit,” rendering you
        unconscious in addition to any other damage effects. This disadvantage usually accompanies
        the Machine meta-trait (p. 263), but this is not required. Afflictions and Innate Attacks
        that only affect those with this trait are possible. Apply the -20% Accessibility limitation
        “Only on Electrical” to all such attacks.
      </p>
    )
  },
  {
    title: 'Enemies',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        An “Enemy” is an NPC, group of NPCs, or organization that actively works against you,
        personally, on your adventures. Some Enemies want to kill you . . . others have more devious
        goals.
        <br />
        <br />
        Determine the nature of your Enemy when you create your character, and explain to the GM why
        the Enemy is after you. The GM is free to fill in additional details as he sees fit.
        <br />
        <br />
        Three factors determine the disadvantage value of an Enemy: its power, its intent, and its
        frequency of appearance.
      </p>
    ),
    subCategories: [
      {
        name: 'Power',
        text: (
          <p>
            The more powerful the Enemy, the more points it is worth as a disadvantage. The GM sets
            this value.
            <br />
            <br />
            Note that when your Enemy is an organization, the point value is based on the number of
            individuals who are after you – not on the total size of the group!
          </p>
        )
      },
      {
        name: '',
        text: (
          <p>
            One person, less powerful than the PC (built on about 50% of the PC’s starting points).
          </p>
        ),
        points: '-5 points'
      },
      {
        name: '',
        text: (
          <p>
            One person, equal in power to the PC (built on about 100% of the PC’s starting points),
            or a small group of less-powerful people (3 to 5 people).
            <br />
            <br />
            Examples: A mad scientist, or the four brothers of the man you killed in a duel.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: '',
        text: (
          <p>
            One person, more powerful than the PC (built on at least 150% of the PC’s starting
            points), or a mediumsized group of less-powerful people (6 to 20 people).
            <br />
            <br />
            Examples: a single superhuman or a city police department (which numbers in the
            hundreds, but they’re not all after you at once).
          </p>
        ),
        points: '-20 points'
      },
      {
        name: '',
        text: (
          <p>
            A large group of less-powerful people (21 to 1,000 people), or a mediumsized group that
            includes some formidable or superhuman individuals.
            <br />
            <br />
            Examples: the FBI or the Mafia.
          </p>
        ),
        points: '-30 points'
      },
      {
        name: '',
        text: (
          <p>
            An entire government, a whole guild of powerful wizards, an organization of supers, or
            some other utterly formidable group.
          </p>
        ),
        points: '-40 points'
      },
      {
        name: <strong>Special Cases</strong>,
        text: (
          <p>
            There are two special cases for which you should adjust the costs given above before
            multiplying for intent and frequency of appearance
          </p>
        )
      },
      {
        name: 'Evil Twin:',
        text: (
          <p>
            Your Enemy looks and sounds like you, and perhaps even uses your name, but acts
            completely opposite. Often, others will think you suffer from Split Personality (p.
            156), and react appropriately (-3 to reactions).
            <br />
            <br />
            You might never meet your Evil Twin, but you will hear about him – usually when you’re
            taking the blame for something you didn’t do. Normally, an Evil Twin has exactly the
            same skills and abilities as you, but his mental disadvantages are opposite or skewed.
            <br />
            <br />
            This makes him an even match: a -10-point Enemy. If he is more capable than you, he is
            worth extra points, because he is better equipped to make you look insane, and you are
            less able to predict and thwart his actions.
            <br />
            <br />
            Evil Twin is more skilled than you <i>or</i> possesses abilities that you do not (GM
            decides)
            <br />
            <br />
            <strong>-5 points</strong>
            <br />
            <br />
            Evil Twin is more skilled than you <i>and</i> possesses abilities that you do not (GM
            decides)
            <br />
            <br />
            <strong>-10 points</strong>
            <br />
            <br />
            <strong>Unknown:</strong>
            <br />
            <br />
            You know you have an Enemy, but you have no idea who it is. Tell the GM the power level
            of your Enemy.
            <br />
            <br />
            He will create the Enemy in secret and give you no details whatsoever! The advantage of
            surprise increases your Enemy’s effective power level, and hence its disadvantage value.
            <br />
            <br />
            <strong>-5 points</strong>
          </p>
        )
      },
      {
        name: 'Intent',
        text: (
          <p>
            The more unpleasant the Enemy’s intentions, the more you multiply its worth in points.
            <br />
            <br />
            <strong>Watcher:</strong>
            <br />
            <br />
            Your Enemy stalks you or spies on you. This is annoying, and makes it hard to keep
            secrets, but it is rarely more than a minor inconvenience.
            <br />
            <br />
            Examples: an aggressive journalist dogging a politician, detectives shadowing a
            suspected criminal. x1/4.
            <br />
            <br />
            <strong>Rival:</strong>
            <br />
            <br />
            Your Enemy wishes to upstage or inconvenience you, or plays cruel practical jokes on you
            (this is typical of most Evil Twins), but stops short of anything that would do lasting
            harm. Examples: a politician’s bitter political rival, detectives harassing a suspected
            criminal. x1/2.
            <br />
            <br />
            <strong>Hunter:</strong>
            <br />
            <br />
            The Enemy intends to arrest, bankrupt, injure, or otherwise harm you in some lasting way
            – or simply wants to kill you.
            <br />
            <br />
            Examples: an assassin gunning for a politician, detectives out to arrest a suspected
            criminal. x1.
          </p>
        )
      },
      {
        name: 'Frequency of Appearance',
        text: (
          <p>
            Choose a frequency of appearance, as explained under Frequency of Appearance (p. 36).
            Roll at the beginning of each adventure, or at the start of each session of a continuing
            adventure.
          </p>
        )
      },
      {
        name: 'Limits',
        text: (
          <p>
            You may not take more than two Enemies, or claim more than -60 points in Enemies. (If
            the whole U.S. government is out to get you, the fact that your old college professor
            has lost his mind, and is also after you, pales to insignificance.)
          </p>
        )
      },
      {
        name: 'Enemies in Play',
        text: (
          <p>
            If the dice indicate that an Enemy should show up, the GM must decide how and where the
            Enemy becomes involved. If an Enemy is very powerful, or if a number of different
            Enemies show up at the same time, this may influence the whole adventure.
            <br />
            <br />
            If you take an extremely powerful Enemy, you are likely to be jailed or killed before
            long. So it goes. You can get a 60-point bonus by taking Enemy (FBI, 12 or less;
            Hunter), but your every adventure will be that of a hunted criminal.
            <br />
            <br />
            Even with an extra 60 points, your career may be short. If you start with a weak Enemy,
            or play cleverly, you might manage to eliminate your foe or permanently change his
            attitude toward you.
            <br />
            <br />
            But as the saying goes, “There ain’t no such thing as a free lunch.” If you get rid of
            an Enemy, you have three choices:
            <br />
            <br />
            1. Pay enough character points to buy off the original bonus you got for that Enemy.
            <br />
            <br />
            2. Take a disadvantage to make up for the point bonus. For instance, you might have been
            kicked in the head during the final battle, leaving you partially deaf. Or a giant
            spider might have attacked you, leaving you with arachnophobia.
            <br />
            <br />
            3. Take a new Enemy of equal value. You might have destroyed the fiendish Dr. Scorpion –
            but his brother is continuing his evil work.
          </p>
        )
      }
    ]
  },
  {
    title: 'Epilepsy',
    type: 'disadvantage',
    points: '-30 points',
    description: (
      <p>
        You suffer from severe epilepsy. You are subject to seizures during which your limbs tremble
        uncontrollably and you cannot speak or think clearly.
        <br />
        <br />
        Make a HT roll whenever you are in a stressful situation (especially if your life or the
        life of a friend is threatened). If you have any sort of Phobia, exposure to the object of
        your fear counts as a stressful situation; roll vs. HT once every 10 minutes.
        <br />
        <br />
        On a failure, you suffer a seizure that lasts 1d minutes and costs you 1d FP. You can do
        nothing during that time.
        <br />
        <br />
        You may attempt to induce a seizure through autohypnosis. This requires one minute of
        concentration and a successful Will or Autohypnosis roll. Seizures near areas charged with
        supernatural energies might produce visions. Whether these are useful is up to the GM.
        <br />
        <br />
        Low-tech individuals who do not understand “fits” may be awed by them, and perhaps even
        believe your seizure represents a communication from the gods. Make a reaction roll at +1. A
        reaction of “Very Good” or better indicates religious awe! “Poor” or worse causes the
        observers to flee – not to attack (unless they had other provocation).
      </p>
    )
  },
  {
    title: 'Extra Sleep',
    type: 'disadvantage',
    points: '-2 points/level',
    description: (
      <p>
        You need more sleep than most people. A normal human requires 8 hours of sleep per night.
        <br />
        <br />
        Each level (maximum of four levels) means you need one additional hour of sleep. Thus, you
        must go to bed early or sleep in for a few hours each day.
        <br />
        <br />
        This gives you less time each day in which to study or work on other projects.
      </p>
    )
  },
  {
    title: 'Fanaticism',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You believe so strongly in a country, organization, philosophy, or religion that you put it
        ahead of everything else.
        <br />
        <br />
        You might even be willing to die for it! If the object of your Fanaticism demands obedience
        to a code of behavior or loyalty to a leader, you oblige willingly and unquestioningly.
        <br />
        <br />
        You must roleplay your unwavering dedication.
        <br />
        <br />
        Fanaticism does not make you mindless or evil. A glaring priest of Set, brandishing his
        bloody dagger, is a fanatic. But so is a kamikaze pilot, exchanging himself for an aircraft
        carrier. And so is a patriot who says, “Give me liberty or give me death!” <br />
        <br />
        Fanaticism is a state of mind; it is what you are fanatic about that makes the difference.
      </p>
    ),
    subCategories: [
      {
        name: 'Extreme Fanaticism',
        text: (
          <p>
            This is an advanced case of Fanaticism. You get +3 on Will rolls to resist Brain -
            washing, Interrogation, and supernatural mind control in any situation where failure to
            resist would lead to betrayal of your cult or organization.
            <br />
            <br />
            On the other hand, you will not hesitate to die for your cause, and will undertake
            suicide missions “matterof- factly.” <br />
            <br /> This is still worth -15 points. Your willingness to die is offset by the
            significant bonus to Will (which will apply a good deal of the time, if you are
            roleplaying properly).
          </p>
        ),
        points: 'points'
      }
    ]
  },
  {
    title: 'Fearfulness',
    type: 'disadvantage',
    points: '-2 points/level',
    description: (
      <p>
        You are nervous and timid. Subtract your Fearfulness from your Will whenever you make a
        Fright Check, and whenever you must resist the Intimidation skill (p. 202) or a supernatural
        power that causes fear. As well, add your Fearfulness level to all Intimidation rolls made
        against you.
        <br />
        <br />
        You may not reduce your Will roll below 3. For instance, if you have Will 11, you are
        limited to Fearfulness 8.
        <br />
        <br />
        This trait is the opposite of Fearlessness (p. 55); you cannot have both.
      </p>
    )
  },
  {
    title: 'Flashbacks',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You tend to experience “flashbacks” when under stress. These are vivid hallucinations,
        full-participation replays of memories, or similar phenomena.
        <br />
        <br />
        You should choose the type of flashback you experience when you take this disadvantage. The
        content of each episode is up to the GM. In any situation that the GM feels is stressful, he
        will roll 3d. On a 6 or less, you have a flashback.
        <br />
        <br />
        The GM will roll whenever you miss a Fright Check or make the roll exactly, and whenever you
        fail a self-control roll for another stress-related disadvantage. The flashback occurs in
        addition to any other results! Point value depends on the severity of the flashback:
      </p>
    ),
    subCategories: [
      {
        name: 'Mild',
        text: (
          <p>
            Duration is 2d seconds. The attendant hallucinations give -2 on all skill rolls, but
            they are minor – you realize that you are experiencing a flashback
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Severe',
        text: (
          <p>
            Duration is 1d minutes. The hallucinations give -5 on all skill rolls, and seem real.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Crippling',
        text: (
          <p>
            Duration is 3d minutes. The hallucinations are so severe that they preclude all skill
            use. The flashback seems completely, 100% real, and can be potentially fatal, as you are
            receiving no input from the real world.
          </p>
        ),
        points: '-20 points'
      }
    ]
  },
  {
    title: 'Fragile',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You are susceptible to wounding effects that do not apply to normal humans.
        <br />
        <br />
        Attacks do not injure you any more than usual (that’s Vulnerability, p. 161), but enough
        penetrating damage can trigger results more catastrophic than stunning, unconsciousness, or
        bleeding.
        <br />
        Possibilities include:
      </p>
    ),
    subCategories: [
      {
        name: 'Brittle',
        text: (
          <p>
            You are brittle (like a creature of ice or crystal) or rotten (like a decaying undead
            monster). Whenever an injury cripples one of your limbs or extremities, it breaks off.
            <br />
            <br />
            If you can make a HT roll, it falls off in one piece; otherwise, it shatters or
            liquefies irrecoverably.
            <br />
            <br />
            Furthermore, should you fail any HT roll to avoid death, you are instantly destroyed –
            you shatter, melt, decay to goo, etc., and instantly go to -10xHP.
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Combustible',
        text: (
          <p>
            Your body burns more easily than flesh. Perhaps it is dry, resinous, or made of wood.
            <br />
            <br />
            Make a HT roll to avoid catching fire whenever you receive a major wound from a burning
            or explosive attack. You catch fire automatically if such an attack inflicts 10+ HP of
            injury.
            <br />
            <br />
            Once aflame, you suffer 1d-1 injury per second until you extinguish the fire by
            immersion in water, rolling on the ground (takes 3 seconds), etc.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Explosive',
        text: (
          <p>
            Your body contains explosives, compressed gas, or something else unstable.
            <br />
            <br />
            On any critical failure on the HT roll for a major wound, you explode! You also explode
            if you fail any HT roll to avoid death by 3+. Treat this as a 6dx(HP/10) crushing
            explosion.
            <br />
            <br />
            The blast instantly reduces you to -10xHP, regardless of the damage it inflicts.
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Flammable',
        text: (
          <p>
            Your body contains something highly flammable: gasoline, hydrogen gas, etc. Make a HT
            roll to avoid catching fire, with effects as per Combustible, after a major wound from
            any kind of attack.
            <br />
            <br />
            Roll at -3 for a burning or explosive attack, -3 if the attack struck the vitals, and -6
            if both. Once you are burning, a critical failure on any HT roll to avoid death means
            you explode as described for Explosive.
            <br />
            <br />
            You may be Combustible as well. If so, any burning or explosive attack that inflicts
            either a major wound or 10+ HP of injury automatically sets you ablaze.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Unnatural',
        text: (
          <p>
            You are summoned, conjured, or a magical or weird-science “construct” (e.g., demon,
            golem, or undead).
            <br />
            <br />
            You automatically fail the HT roll to stay alive if reduced to -HP or below, as that
            much damage severs your ties with the force that animates you.
          </p>
        ),
        points: '-50 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          It sometimes makes sense to take more than one of the above (in particular, Explosive and
          Flammable often occur together). The GM must personally approve any combination of Fragile
          with Injury Tolerance (p. 60), as these traits are in many ways opposites.
        </i>
      </strong>
    )
  },
  {
    title: 'Frightens Animals',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        Animals react to you with fear and aggression. Horses do not permit you to ride them, dogs
        shy away from you or attack savagely, and your mere scent is enough to panic most creatures.
        You get -4 on all reaction rolls made by animals.
        <br />
        <br />
        Anyone who sees how animals react to you – and those with Animal Empathy – reacts to you at
        -1. Note that guards or police with guard animals, “sniffer” dogs, etc. decide how to deal
        with you based on the animal’s reaction roll, not their own!
        <br />
        <br />
        If your disadvantage is due to lycanthropy, vampirism, or a similar trait, observers get +1
        on all rolls to deduce your secret!
      </p>
    )
  },
  {
    title: 'G-Intolerance',
    type: 'disadvantage',
    points: '-10 or -20 points',
    description: (
      <p>
        You function well under a narrow range of gravities. For a normal human, the penalties for
        non-native gravity accrue in increments of 0.2G; see Different Gravity (p. 350). An
        increment of 0.1G is worth -10 points. An increment of 0.05G is worth -20 points.
        <br />
        <br />
        This disadvantage is only allowed in campaigns that feature regular space travel.
      </p>
    )
  },
  {
    title: 'Gluttony',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You are overly fond of good food and drink. Given the chance, you must always burden
        yourself with extra provisions.
        <br />
        <br />
        You should never willingly miss a meal. Make a self-control roll when presented with a
        tempting morsel or good wine that, for some reason, you should resist. If you fail, you
        partake – regardless of the consequences.
      </p>
    )
  },
  {
    title: 'Greed',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You lust for wealth. Make a selfcontrol roll any time riches are offered – as payment for
        fair work, gains from adventure, spoils of crime, or just bait. If you fail, you do whatever
        it takes to get the payoff.
        <br />
        <br />
        The GM may modify this roll if the money involved is small relative to your own wealth.
        Small sums do not tempt you much if you are rich, but if you are poor, you get -5 or more on
        your self-control roll if a rich prize is in the offing. If you have Honesty (p. 138), your
        self-control roll is at +5 for a shady deal and +10 for outright crime. However, it is
        almost a foregone conclusion that you will eventually do something illegal.
      </p>
    )
  },
  {
    title: 'Guilt Complex',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You feel personally responsible for those who play a significant role in your life. This
        includes adventuring companions, employers, subordinates, Allies, Dependents, and those
        toward whom you have a Duty or a Sense of Duty. If anything bad happens to someone like
        this, you will be wracked by anxiety and guilt – even if there was nothing you could have
        done to avert the disaster.
        <br />
        <br />
        If the mishap was not your fault, you will suffer the effects of Chronic Depression (p. 126)
        for (15 - Will) days, minimum one day. Use your Will as your effective self-control number.
        If the mishap was your fault, the effects of Chronic Depression will last (20 - Will) days,
        minimum two days, and your effective self-control number is Will-3.
        <br />
        <br />
        Others may attempt to help you overcome your feelings of guilt by making Fast-Talk or
        Psychology rolls. The GM is free to modify their rolls, depending on how convincing they
        sounded. Roleplay it!
      </p>
    )
  },
  {
    title: 'Gullibility',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        There’s one born every minute, and you’re it. You believe everything you hear. You’ll
        swallow even the most ridiculous story, if it’s told with conviction. Make a self-control
        roll, modified by the plausibility of the story, whenever you are confronted with a lie – or
        an improbable truth, for that matter. If you fail, you believe what you were told!
        <br />
        <br />
        A lie well told, or involving something you have no familiarity with (“My father is the
        chief of police in this town, and he won’t stand for this!”) gives -6 to the self-control
        roll.
        <br />
        <br />A lie concerning a topic you are familiar with (“Didn’t you know they bred ducks in
        your village, Torg?”) gives -3. You believe even a totally outlandish tale (“Of course the
        Eskimos are descended from Spanish conquistadors; everyone knows that!”), if you fail an
        unmodified self-control roll. You also suffer a -3 penalty on any Merchant skill roll, or in
        any situation in which your credulity might be exploited. You can never learn the Detect
        Lies skill.
      </p>
    )
  },
  {
    title: 'Ham-Fisted',
    type: 'disadvantage',
    points: '-5 0r -10points',
    description: (
      <p>
        You have unusually poor motor skills. You suffer a penalty to any DXbased roll to do fine
        work using the skills listed under High Manual Dexterity (p. 59), and to Fast-Draw skill.
        For -5 points, the penalty is -3; for -10 points, it is -6. This does not affect IQ-based
        tasks or large-scale DX-based tasks, nor does it modify combat-related die rolls other than
        Fast-Draw.
        <br />
        <br />
        You are also a messy eater, can’t tie a necktie properly, and so on. At the GM’s option, you
        get -1 per level of this trait on any Influence or reaction roll where being tidy or
        well-groomed would matter.
        <br />
        <br />
        This disadvantage is mutually exclusive with High Manual Dexterity.
      </p>
    )
  },
  {
    title: 'Hard of Hearing',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are not deaf, but you have some hearing loss.
        <br />
        <br />
        You are at -4 on any Hearing roll, and on any skill roll where it is important that you
        understand someone (if you are the one talking, this disadvantage doesn’t affect you).
      </p>
    )
  },
  {
    title: 'Hemophilia',
    type: 'disadvantage',
    points: '-30 points',
    description: (
      <p>
        You are a “bleeder.” Even a small wound will not heal unless well-bandaged – and you may
        bleed to death. Any untreated wound bleeds at a rate equal to its original damage every
        minute. For instance, an untreated 3 HP wound bleeds for 3 HP of damage per minute until
        stanched.
        <br />
        <br />
        First Aid is enough to staunch most wounds, but an impaling wound to the torso causes slow
        internal bleeding. It does damage every minute, as above, until you receive First Aid.
        Furthermore, it continues to do damage equal to its original damage once per day until
        properly treated.
        <br />
        <br />
        Only a Surgery roll or supernatural healing can stop internal bleeding or restore HP lost to
        it. If proper treatment is not available, you will soon die. If you suffer from this
        disadvantage, your HT score may not exceed 10.
      </p>
    )
  },
  {
    title: 'Hidebound',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You find it difficult to come up with an original thought. You have a -2 penalty on any task
        that requires creativity or invention, including most rolls against Artist skill, all
        Engineer rolls for new inventions, and all skill rolls made to use the Gadgeteer advantage.
      </p>
    )
  },
  {
    title: 'Honesty',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You must obey the law, and do your best to get others to do so as well. In an area with
        little or no law, you do not “go wild” – you act as though the laws of your own home were in
        force.
        <br />
        <br />
        You also assume that others are honest unless you know otherwise (make an IQ roll to realize
        someone might be dishonest if you haven’t seen proof).
        <br />
        <br />
        This is a disadvantage, because it often limits your options! Make a selfcontrol roll when
        faced with the “need” to break unreasonable laws; if you fail, you must obey the law,
        whatever the consequences. If you manage to resist your urges and break the law, make a
        second self-control roll afterward. If you fail, you must turn yourself in to the
        authorities!
        <br />
        <br />
        You may fight (or even start a fight, if you do it in a legal way). You may even kill in a
        legal duel or in selfdefense – but you may never murder. You may steal if there is great
        need, but only as a last resort, and you must attempt to pay your victims back later. If you
        are jailed for a crime you did not commit, but treated fairly and assured of a trial, you
        will not try to escape.
        <br />
        <br />
        You always keep your word. (In a war, you may act “dishonestly” against the enemy, but you
        will not be happy about it!) However, you are allowed to lie if it does not involve breaking
        the law. Truthfulness (p. 159) is a separate disadvantage.
        <br />
        <br />
        Honesty has its rewards, of course. If you stay alive and in one place long enough for your
        honesty to become known, the GM should give you +1 on any noncombat reaction roll – or +3 if
        a question of trust or honor is involved. This is essentially a free Reputation (see
        Reputation, p. 26).
      </p>
    )
  },
  {
    title: 'Horizontal',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You have a horizontal posture, like a cat. You can stand on your hind legs for short
        periods, but find this very uncomfortable.
        <br />
        <br />
        You can use one hand (if you have hands) while standing on your other limbs, or two hands
        while sitting on your haunches; in both cases, your ground Move is 0 while doing so. You can
        carry but not use an object in one hand if moving at half Move.
        <br />
        <br />
        If you are human-sized, you take up two hexes on a battle map. A horizontal build does not
        let you put your full weight behind a kick. As a result, your thrusting damage is at -1 per
        die when you kick. Ignore this penalty if you have Claws (p. 42) – that trait includes the
        necessary adaptations to strike at full power. The penalty does apply if you have Hooves,
        however.
        <br />
        <br />
        Do not take this disadvantage if you are Aerial or Aquatic (see No Legs, p. 145). If you are
        fully adapted to a three-dimensional environment, body posture is irrelevant.
      </p>
    )
  },
  {
    title: 'Hunchback',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You have a spinal deformity that forces you into a twisted or hunched position, usually
        resulting in a noticeable hump or lump on one or both shoulders.
        <br />
        <br />
        This reduces height by 6” without changing weight or build. Normal clothing and armor will
        fit badly, giving you -1 to DX; to avoid this, you must pay an extra 10% for specially made
        gear.
        <br />
        <br />
        Most people find you disturbing to see and react at -1. This penalty is cumulative with
        regular appearance modifiers (see Physical Appearance, p. 21), and you may have no better
        than Average appearance. Your appearance is also distinctive, which gives you -3 to Disguise
        or Shadowing skill, and +3 to others’ attempts to identify or follow you.
        <br />
        <br />
        Realistic hunchbacks should have the Bad Back disadvantage (p. 123) as well, but this is not
        required.
      </p>
    )
  },
  {
    title: 'Impulsiveness',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You hate talk and debate. You prefer action! When you are alone, you act first and think
        later. In a group, when your friends want to stop and discuss something, you should put in
        your two cents’ worth quickly – if at all – and then do something.
        <br />
        <br />
        Roleplay it! Make a self-control roll whenever it would be wise to wait and ponder. If you
        fail, you must act.
      </p>
    )
  },
  {
    title: 'Increased Consumption',
    type: 'disadvantage',
    points: '-10 points/level',
    description: (
      <p>
        One “meal” keeps you going for a much shorter period of time than it would a normal human.
        <br />
        <br />
        This is suitable for small creatures that must eat often, or for machines that rapidly
        exhaust their fuel or energy supply.
      </p>
    ),
    subCategories: [
      {
        name: 'Increased Consumption 1',
        text: (
          <p>
            You must eat six meals a day. If you have the Machine meta-trait (p. 263), you have a
            4-hour endurance
          </p>
        )
      },
      {
        name: 'Increased Consumption 2',
        text: (
          <p>
            You must eat 12 meals a day. If you have the Machine meta-trait, you have a 2- hour
            endurance.
          </p>
        )
      },
      {
        name: 'Increased Consumption 3',
        text: (
          <p>
            You must eat 24 meals a day. If you have the Machine meta-trait, you have a 1- hour
            endurance.
          </p>
        )
      }
    ],
    extraText: (
      <strong>
        <i>
          . . . and so on, doubling consumption and halving endurance for each additional level.
          <br />
          <br />A single level of this trait is appropriate for normal humans who have a build of
          Overweight or heavier (see Build, p. 19), or the Gluttony disadvantage (p. 137).
        </i>
      </strong>
    )
  },
  {
    title: 'Increased Life Support',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        Your environmental requirements in a life-support situation are greater than those of a
        normal human. Some examples:
      </p>
    ),
    subCategories: [
      {
        name: 'Extreme Heat/Cold',
        text: <p>You require a temperature above 200° or below 0°</p>,
        points: '-10 points'
      },
      {
        name: 'Massive',
        text: (
          <p>
            You require more than a ton of additional weight in order to survive aboard a spacecraft
            or a submarine, or in any other setting where resources and space are limited.
            <br />
            <br />
            If you can wear an environment suit, this always weighs at least a ton
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Pressurized',
        text: <p>You require a separate pressurized compartment to survive.</p>,
        points: '-10 points'
      },
      {
        name: 'Radioactive',
        text: <p>You are radioactive or require a radioactive environment</p>,
        points: '-10 points'
      },
      {
        text: (
          <p>
            The GM may allow other kinds of Increased Life Support. These should worth no more than
            -10 points apiece unless they are extremely exotic. Add together the value of multiple
            special requirements, but note that the total disadvantage value cannot exceed -40
            points.
            <br />
            <br />
            Increased Life Support represents the logistical inconvenience of special life-support
            requirements, while Dependency (p. 130), Maintenance (p. 143), and Restricted Diet (p.
            151) all reflect the health effects of doing without such requirements. The same
            requirement can qualify in both categories if it has consequences for both health and
            logistics. But note that a Dependency you can satisfy with a one-ounce inhaler of a drug
            does not let you claim Increased Life Support for a pressurized cabin full of the stuff!
            The GM’s word is final.
            <br />
            <br />
            With the GM’s permission, normal humans may take this disadvantage to represent the
            special requirements of certain chronic illnesses.
          </p>
        )
      }
    ]
  },
  {
    title: 'Incurious',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You hardly ever notice things unrelated to the business at hand. Make a self-control roll
        when confronted with something strange. If you fail, you ignore it! You react at -1 to new
        things
      </p>
    )
  },
  {
    title: 'Indecisive',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You find it difficult to make up your mind. As long as there is a single path before you,
        you are fine, but as soon as there is a choice, you begin to dither. Make a self-control
        roll whenever a choice confronts you, modified downward by the number of alternatives you
        can see: -2 if there are two choices, -3 if there are three, etc. If you fail, you do
        nothing. Roll again every minute (or every second in combat or a similar high-stress
        situation) until you make up your mind, after which you may act normally until the next time
        you face a decision.
        <br />
        <br />
        If you are Indecisive and Confused (p. 129), you must roll as described above to decide on a
        course of action. When you finally succeed, you must make another self-control roll – this
        one for Confused – to see whether you can act on your decision immediately.
      </p>
    )
  },
  {
    title: 'Infectious Attack',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You have an infectious supernatural condition. This works identically to the Dominance
        advantage (p. 50), except that you do not control those you infect and cannot add them as
        Allies. This is a disadvantage, because enemies who survive (or don’t survive!) violent
        encounters with you become stronger through the “gift” of supernatural powers, and are
        completely free to use their new abilities to seek vengeance for what you have done to them.
        <br />
        <br />
        To prevent PCs with this trait from turning their friends into powerful monsters for free,
        the GM should consider making infected PCs pay points for supernatural racial templates
        gained this way. If they cannot afford such a template, the GM is free to balance its point
        cost with supernatural drawbacks such as Cursed, Dread, Revulsion, and Weakness.
      </p>
    )
  },
  {
    title: 'Innumerate',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You have little or no grasp of mathematics. You cannot learn – and get no default with –
        Computer Program - ming, Economics, or any of the skills that benefit from Mathematical
        Ability (see Talent, p. 89). You effectively have Incompetence (p. 164) in those areas. This
        has many frustrating side effects: you must use your fingers to count or perform arithmetic,
        you have no idea if the results computed by calculating machines are correct (making them
        basically useless), and you are easily cheated by dishonest merchants (-4 to rolls to notice
        you’ve been had).
        <br />
        <br />
        In “innumerate” cultures, including many cultures at TL4 or below, this disadvantage is
        widespread, and the GM should not count it against the campaign disadvantage limit (if any).
        In societies that prize technological or mercantile ability, Innumerate individuals are
        liable to have a Social Stigma as well. This is worth an additional -5 points and gives -1
        to reaction rolls.
      </p>
    )
  },
  {
    title: 'Insomniac',
    type: 'disadvantage',
    points: '-10 or -15 points',
    description: (
      <p>
        You go through periods where falling asleep is very difficult. During such an episode, you
        must make a HT- 1 roll once per night. On a success, you fall asleep easily, ending that
        episode of insomnia. On a failure, you lose two hours of sleep that night (and suffer all
        the usual effects; see Missed Sleep, p. 426) and the episode continues for another night. On
        a critical failure, you get no sleep that night. Point value depends on severity:
      </p>
    ),
    subCategories: [
      {
        name: 'Mild',
        text: <p>The GM secretly rolls 3d for the number of days between episodes.</p>,
        points: '-10 points'
      },
      {
        name: 'Severe',
        text: <p>The GM rolls 2d-1 for the number of days between episodes</p>,
        points: '-15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Regardless of severity, whenever you suffer prolonged stress, the GM can require a HT
          roll. Failure means an episode starts immediately.
        </i>
      </strong>
    )
  },
  {
    title: 'Intolerance',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You dislike and distrust some (or all) people who are different from you. You may be
        prejudiced on the basis of class, ethnicity, nationality, religion, sex, or species. Victims
        of your Intolerance will react to you at -1 to -5 (GM’s decision). Point value depends on
        the scope of your Intolerance. If you are thoroughly intolerant, you react at -3 toward
        anyone not of your own class, ethnicity, nationality, religion, or species (pick one). On a
        “Good” reaction, you tolerate the person and are as civil as possible (but are stiff and
        cold toward him). On a “Neutral” reaction, you still tolerate him, but make it plain in
        words and deeds that you don’t care to be around him and consider him inferior or offensive.
        On any worse reaction, you attack or refuse to associate with the victim. Total Intolerance
        of this kind is worth -10 points.
        <br />
        <br />
        Intolerance directed at only one specific class, ethnicity, nationality, religion, sex, or
        species is worth from -5 points for a commonly encountered victim to -1 point (a nasty
        quirk) for a rare victim.
      </p>
    )
  },
  {
    title: 'Invertebrate',
    type: 'disadvantage',
    points: '-20 points',
    description: (
      <p>
        You have no spine, exoskeleton, or other natural body support. Use your full Basic Lift for
        the purpose of pushing, but only 1/4 your BL to calculate the weight you can lift, carry, or
        pull. This trait has a small side benefit, however: you can squeeze through much smaller
        openings than your size might suggest!
        <br />
        <br />
        Note that this trait differs somewhat from the biological term “invertebrate.”
      </p>
    )
  },
  {
    title: 'Jealousy',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You react poorly toward those who seem smarter, more attractive, or better off than you! You
        resist any plan proposed by a “rival,” and hate it if someone else is in the limelight.
        (Jealousy goes well with Megalomania.)
        <br />
        <br />
        If an NPC is jealous, the GM will apply a -2 to -4 reaction penalty toward the victim(s) of
        his jealousy.
      </p>
    )
  },
  {
    title: 'Killjoy',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        Your brain’s pleasure center is burned out or absent. You cannot appreciate the taste of
        good food, the joy of sex, the savage beauty of combat, and so on. You might not even
        remember what these pleasures were like! You can “go through the motions,” but you have -3
        on all Carousing, Connoisseur, Erotic Art, and Gambling rolls. Others react to you at -1 to
        -3 in any situation where your lack of appreciation becomes obvious (GM’s decision). A bad
        reaction indicates ridicule from cultured folk, rejection by a lover, etc. – not violence.
        <br />
        <br />
        Some ultra-tech societies might use surgery to inflict this state as a form of punishment!
        If so, you won’t plot your revenge . . . because there won’t be any pleasure in it.
      </p>
    )
  },
  {
    title: 'Kleptomania',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You are compelled to steal – not necessarily things of value, but anything you can get away
        with. Make a self-control roll whenever you are presented with a chance to steal, at up to
        -3 if the item is especially interesting to you (not necessarily valuable, unless you are
        poor or have Greed). If you fail, you must try to steal it. You may keep or sell stolen
        items, but you may not return or discard them.
      </p>
    )
  },
  {
    title: 'Klutz',
    type: 'disadvantage',
    points: '-5 or -15 points',
    description: (
      <p>
        You have an uncanny affinity for gross physical blunders. You do not necessarily have a low
        DX (you may have up to DX 13 and still select this trait) but you are more awkward than your
        DX would suggest. This disadvantage comes in two levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Klutz',
        text: (
          <p>
            Make a DX roll to get through the day without doing a pratfall, dropping books, or
            knocking over shelves filled with fragile items. This is rarely life-threatening, but it
            is inconvenient and often expensive.
            <br />
            <br />
            The GM should be creative in inventing minor torments. You should especially avoid
            laboratories, explosives, china shops, etc.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Total Klutz',
        text: (
          <p>
            As above, but in addition, any failure on a DX roll or DXbased skill roll is considered
            a critical failure for you!
          </p>
        ),
        points: '-15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          This trait might seem silly, but it need not be. Most realistic TL7-8 robots have this
          disadvantage!
        </i>
      </strong>
    )
  },
  {
    title: 'Lame',
    type: 'disadvantage',
    points: '-10 to -30 points',
    description: <p>You have some degree of impaired mobility:</p>,
    subCategories: [
      {
        name: 'Crippled Legs',
        text: (
          <p>
            You have all of your legs, but some of them are damaged. For a human, this means one bad
            leg. You are at -3 to use any skill that requires the use of your legs, including all
            Melee Weapon and unarmed combat skills (but not ranged combat skills). You must reduce
            your Basic Move to half your Basic Speed (round down), but you get full points for this
            (see Basic Move, p. 17).
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Missing Legs',
        text: (
          <p>
            You have lost some, but not all, of your legs. For a human, this means you have one leg.
            You are at -6 to use any skill that requires the use of your legs. Using crutches or a
            peg leg, you can stand up and walk slowly. You must reduce Basic Move to 2, but you get
            full points for this.
            <br />
            <br />
            You can still kick, but between the standard -2 for a kick and the -6 for this
            disadvantage, you do so at DX-8! Without your crutches or peg leg, you cannot stand,
            walk, or kick
          </p>
        ),
        points: '-20 points'
      },
      {
        name: 'Legless',
        text: (
          <p>
            You are missing all of your legs, no matter how many you started out with. You are at -6
            to use any skill that requires the use of your legs, and you cannot stand, kick, or walk
            at all. You must reduce Basic Move to 0, but you get full points for this.
          </p>
        ),
        points: '-30 points'
      },
      {
        name: 'Paraplegic',
        text: (
          <p>
            You have all of your legs, but they are paralyzed. The effects and point value are
            identical to Legless.
            <br />
            <br />
            Unlike a Legless character, you can be struck in the legs for damage. This is balanced
            by the fact that it isn’t inconceivable that you could regain the use of your legs (a
            Legless character is out of luck).
          </p>
        ),
        points: '-30 points'
      },
      {
        name: 'Technological Assistance',
        text: (
          <p>
            A muscle-powered wheelchair or wheeled platform has ground Move equal to 1/4 your ST
            (round down), but cannot pass through narrow doorways, negotiate staircases or steep
            curbs, enter most vehicles, etc.
            <br />
            <br />
            If you have advanced prosthetics that cancel this disadvantage while worn, apply a
            Mitigator limitation (p. 112) to Lame and any reduced Basic Move. If surgery or
            ultra-tech replacement parts eliminate this disadvantage completely, you must pay back
            the points you received for Lame and reduced Basic Move.
          </p>
        )
      }
    ]
  },
  {
    title: 'Laziness',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are violently averse to labor. Your chances of getting a raise or promotion in any job
        are halved.
        <br />
        <br />
        If you are self-employed, halve your monthly pay (see Jobs, p. 516). You must avoid work –
        especially hard work – at all costs. Roleplay it!
      </p>
    )
  },
  {
    title: 'Lecherousness',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You have an unusually strong desire for romance. Make a self-control roll whenever you have
        more than the briefest contact with an appealing member of the sex you find attractive – at
        -5 if this person is Handsome/Beautiful, or at -10 if Very Handsome/Very Beautiful. If you
        fail, you must make a “pass,” using whatever wiles and skills you can bring to bear. You
        must then suffer the consequences of your actions, successful or not: physical retribution,
        jail, communicable disease, or (possibly) an adoring new friend.
        <br />
        <br />
        Unless the object of your affection is Very Handsome/Very Beautiful, you need not roll more
        than once a day to avoid making a pass. If someone turns you down very firmly (e.g., a black
        eye, or an arrest for sexual harassment) the GM may give you a bonus to future self-control
        rolls regarding that individual . . .<br />
        <br />
        Note that you are likely to change your standards of attractiveness if no truly attractive
        members of the appropriate sex are available!
      </p>
    )
  },
  {
    title: 'Lifebane',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You have a supernatural aura of death about you. Grass dies in your footprints and will
        never grow there again, larger plants wilt instantly in your presence, and insects and other
        tiny creatures die if they get within a yard of you. Your aura has no effect on animals that
        weigh more than a few ounces, on very large plants such as trees (but the leaves closest to
        you might die, and a tree you pass daily for years will eventually be affected), on ordinary
        life forms controlled by supernatural means (e.g., insect swarms conjured up using magic),
        or on supernatural entities of any kind.
        <br />
        <br />
        Lifebane gives -2 on reaction rolls made by anyone in a position to notice it. If it stems
        from demonic powers, vampirism, etc., observers get +2 on all rolls to deduce your secret!
        This trait makes it difficult to use stealthor invisibility-related abilities outdoors, too:
        +2 on rolls to locate you in most outdoor environments.
        <br />
        <br />
        It has its side benefits, however. For instance, you need never buy insect repellent!
      </p>
    )
  },
  {
    title: 'Light Sleeper',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You do not sleep as soundly or as easily as most people. Whenever you must sleep in an
        uncomfortable place, or whenever there is more than the slightest noise, you must make a HT
        roll in order to fall asleep. On a failure, you can try again after one hour, but you will
        suffer all the usual effects of one hour of missed sleep (see Missed Sleep, p. 426).
        <br />
        <br />
        You usually wake up if there is activity going on around you (but you are stunned unless you
        have Combat Reflexes). If you wish to continue sleeping, you must fail a Sense roll. If you
        wake up, you must make HT rolls to get back to asleep, as above.
        <br />
        <br />
        This can occasionally be to your advantage, but the most likely effect is that you miss
        sleep whenever inconsiderate companions trade watches or return from a night on the town.
      </p>
    )
  },
  {
    title: 'Loner',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You require a great deal of “personal space.” Make a self-control roll whenever anyone
        lingers nearby, watches over your shoulder, etc. If you fail, you lash out at that person
        just as if you had Bad Temper (p. 124). Loner NPCs always react to others at a penalty.
      </p>
    ),
    subCategories: [
      {
        text: (
          <table>
            <tr>
              <th>
                Self-Control
                <br />
                Number
              </th>
              <th>Reaction Penalty</th>
            </tr>
            <tr>
              <td>6</td>
              <td>-4</td>
            </tr>
            <tr>
              <td>9</td>
              <td>-3</td>
            </tr>
            <tr>
              <td>12</td>
              <td>-2</td>
            </tr>
            <tr>
              <td>15</td>
              <td>-1</td>
            </tr>
          </table>
        )
      }
    ]
  },
  {
    title: 'Low Empathy',
    type: 'disadvantage',
    points: '-20 points',
    description: (
      <p>
        all. This doesn’t prevent you from having and showing emotions of your own (unless you have
        something like No Sense of Humor) – your problem is that you don’t really understand them.
        As a result, you have difficulty interacting socially.
        <br />
        <br />
        You may not take the Empathy advantage, and suffer a -3 penalty on all skills that rely in
        whole or in part on understanding someone’s emotional motivation, including Acting,
        Carousing, Criminology, Detect Lies, Diplomacy, Enthrallment, Fast-Talk, Interrogation,
        Leadership, Merchant, Politics, Psychology, Savoir-Faire, Sex Appeal, Sociology, and
        Streetwise. You can still have these skills – you just aren’t as good at them as someone
        without this disadvantage.
        <br />
        <br />
        Low Empathy is common in androids, demons, golems, the undead, and some aliens. It is also
        appropriate for certain humans! This trait is mutually exclusive with the somewhat similar
        disadvantages Callous (p. 125) and Oblivious (p. 146), both of which assume some
        understanding of emotions, however flawed.
      </p>
    )
  },
  {
    title: 'Low Pain Threshold',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are very sensitive to pain of all kinds. Double the shock from any injury; e.g., if you
        take 2 HP of damage, you are at -4 to DX on your next turn. You roll at -4 to resist
        knockdown, stunning, and physical torture.
        <br />
        <br />
        Whenever you take a wound that does more than 1 HP of damage, you must make a Will roll to
        avoid crying out. This can give away your presence, and may earn you a -1 reaction from
        “macho” individuals.
      </p>
    )
  },
  {
    title: 'Low Self-Image',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You lack self-confidence and underrate your abilities to such a degree that it interferes
        with your performance. You are at -3 to all skill rolls whenever you believe that the odds
        are against you or others expect you to fail (GM’s judgment).
        <br />
        <br />
        For instance, if you’re a mechanic, you have no penalty to repair an engine in your shop . .
        . but you are at -3 to make the same repairs on the road, in the rain, with only a portable
        tool kit, and an enemy hot on your trail – on top of the usual modifiers that would apply in
        that situation!
      </p>
    )
  },
  {
    title: 'Lunacy',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        The moon has a dramatic and inconvenient effect on your personality. During the full moon,
        you are extremely emotional and volatile (-2 to all Will and self-control rolls), while on
        nights of the new moon, you are very passive (you temporarily suffer from the Laziness
        disadvantage, p. 142). While the moon is waxing, you are focused and pleasant; while it is
        waning, you are apathetic and a little touchy. Roleplay it!
      </p>
    )
  },
  {
    title: 'Magic Susceptibility',
    type: 'disadvantage',
    points: '-3 points/level',
    description: (
      <p>
        Magic is more likely to affect you. Add your Magic Susceptibility to the skill of anyone
        casting a spell on you, and subtract it from your roll to resist any spell that you can
        resist. For instance, if you have Magic Susceptibility 4, wizards have +4 to cast spells on
        you and you get -4 to resist.
        <br />
        <br />
        Magic Susceptibility only makes you more vulnerable to spells cast directly on you. It does
        not affect Missile spells, attacks by magic weapons, or information-gathering spells that
        aren’t cast directly on you. It also has no effect on supernatural powers other than magic;
        e.g., divine miracles, psionics, or the innate powers of spirits.
        <br />
        <br />
        Magic Susceptibility works normally against Area spells; do not double its effects as you
        would those of Magic Resistance (p. 67). Magic Susceptibility, and its precise level, can be
        recognized by any mage who looks at your aura or by anyone who casts a spell on you.
        <br />
        <br />
        You may have no more than five levels of Magic Susceptibility.
        <br />
        <br />
        You can combine Magic Susceptibility with Magery but not with Magic Resistance.
      </p>
    )
  },
  {
    title: 'Maintenance',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You require skilled attention at regular intervals to avoid HT loss. Examples include a
        robot that needs a mechanic, a chronically ill person who needs a doctor’s attention, or a
        god that requires devout prayer.
        <br />
        <br />
        Decide on the care you require and the skill needed to provide it. Possibilities include
        electronic maintenance (use Electronics Repair), mechanical maintenance (use Mechan ic),
        medical care (use Physician), and physical repairs (use Carpentry, Electrician, etc.). You
        may specify an advantage or disadvantage instead; e.g., a god might require worshippers with
        Disciplines of Faith.
        <br />
        <br />
        You can split Maintenance between multiple skills; for instance, a robot might require
        Electronics Repair and Mechanic.
        <br />
        <br />
        Those who maintain you must have access to the appropriate facilities: a mechanic needs
        tools, worshippers must pray at a temple, etc. No resources are consumed, however; for that,
        take Dependency (p. 130).
        <br />
        <br />
        Each installment of maintenance takes one hour. The base point value depends on the number
        of people needed to perform it:
      </p>
    ),
    subCategories: [
      {
        text: (
          <table>
            <tr>
              <th>Number of People</th>
              <th>Point Value</th>
            </tr>
            <tr>
              <td>1</td>
              <td>-10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>-20</td>
            </tr>
            <tr>
              <td>3-5</td>
              <td>-30</td>
            </tr>
            <tr>
              <td>6-10</td>
              <td>-40</td>
            </tr>
            <tr>
              <td>11-20</td>
              <td>-50</td>
            </tr>
            <tr>
              <td>21-50</td>
              <td>-60</td>
            </tr>
            <tr>
              <td>51-100</td>
              <td>-70</td>
            </tr>
          </table>
        )
      },
      {
        text: (
          <p>
            Add another -10 points per full doubling of the number of people required; e.g., a god
            that requires 10,000 worshippers would have a base -130-point disadvantage.
            <br />
            <br />
            Extra manhours of maintenance may substitute for extra people, if the GM approves.
            <br />
            <br />
            The frequency with which you require maintenance modifies this base cost.
          </p>
        )
      },
      {
        text: (
          <table>
            <tr>
              <th>Maintenance Interval</th>
              <th>Multiplier</th>
            </tr>
            <tr>
              <td>Monthly</td>
              <td>1/5</td>
            </tr>
            <tr>
              <td>Bi-Weekly</td>
              <td>1/3</td>
            </tr>
            <tr>
              <td>Weekly</td>
              <td>1/2</td>
            </tr>
            <tr>
              <td>Every Other Day</td>
              <td>3/4</td>
            </tr>
            <tr>
              <td>Daily</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Twice Daily</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3-5 times Daily</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Constant</td>
              <td>5</td>
            </tr>
          </table>
        )
      },
      {
        text: (
          <p>
            If you miss a maintenance period, your HT attribute drops by 1 and you must make a HT
            roll. Failure results in some additional incapacity of the GM’s choosing. Critical
            failure means a potentially fatal outcome; e.g., a human might suffer a heart attack, or
            a vehicle’s brakes might fail while it is moving.
            <br />
            <br />
            To restore lost HT and capabilities requires suitable intervention and skill rolls
            (repairs if you’re a machine, surgery if you’re a living being, etc.).
            <br />
            <br />
            If you require an unusual form of maintenance, this might call for exotic measures!
          </p>
        )
      }
    ]
  },
  {
    title: 'Manic-Depressive',
    type: 'disadvantage',
    points: '-20 points',
    description: (
      <p>
        Your moods are on a seesaw. You bounce back and forth between bubbling enthusiasm and morose
        withdrawal.
        <br />
        <br />
        At the beginning of each play session, roll 1d. On 1-3, you are in your manic phase; 4-6
        indicates depression. Every five hours of game time thereafter, roll 3d. A 10 or less
        indicates that you begin a mood swing. Over the next hour, you shift from your current phase
        to the opposite one. You remain in the new phase for at least five hours, after which you
        must again roll 3d.
        <br />
        <br />
        In the manic phase, you suffer the effects of Overconfidence (p. 148) and Workaholic (p.
        162). You are friendly, outgoing, and excited about whatever it is you’re doing. In the
        depressive phase, you suffer the effects of Chronic Depression (p. 126).
        <br />
        <br />
        You are not interested in doing anything but lying in bed, sitting in a dark room and
        moping, etc. Your effective selfcontrol number for these effects is equal to your Will.
        <br />
        <br />
        Emergencies can also cause mood swings; in that case, the switch is immediate. On a roll of
        10 or less on 3d, you change phases. This can be good (an emergency jars you into action) or
        bad (a problem triggers depression and you become worthless).
      </p>
    )
  },
  {
    title: 'Megalomania',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You believe you are a superman, that you have been chosen for some great task, or that you
        are destined to conquer. You must choose a grand goal – most often conquest or the
        completion of some fantastic task. You must let nothing stand between you and this goal.
        <br />
        <br />
        You may attract followers with Fanaticism, but nobody else enjoys hearing you talk about
        your brilliance and great plans. Young or naive characters, and fanatics looking for a new
        cause, react to you at +2; others will react at -2.
        <br />
        <br />
        This is a better disadvantage for NPCs than it is for PCs.
      </p>
    )
  },
  {
    title: 'Miserliness',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are preoccupied with conserving your wealth. You must always hunt for the best deal
        possible. Make a self-control roll any time you are called on to spend money.
        <br />
        <br />
        If the expenditure is large, this roll may be at -5 or worse (GM’s decision). If you fail,
        you refuse to spend the money. If you absolutely must spend the money, you should haggle and
        complain interminably.
        <br />
        <br />
        Note that you may have both Greed (p. 137) and Miserliness!
      </p>
    )
  },
  {
    title: 'Missing Digit',
    type: 'disadvantage',
    points: '-2 or -5 points',
    description: <p>You are missing a finger or thumb.</p>,
    subCategories: [
      {
        name: 'Missing Fingers',
        text: <p>Gives -1 DX with that hand (only).</p>,
        points: '-2 points'
      },
      {
        name: 'Missing Thumbs',
        text: <p>Gives -5 DX with that hand (only)</p>,
        points: '-5 points'
      }
    ]
  },
  {
    title: 'Motion Sickness',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are miserable whenever you are in a moving vehicle, be it an automobile, train,
        airplane, balloon, ship, or spacecraft. You may never learn any vehicle-operation skill. You
        must roll vs. HT as soon as you are aboard a moving vehicle.
        <br />
        <br />
        On a failure, you vomit and are at -5 on all DX, IQ, and skill rolls for the rest of the
        journey. On a success, you are merely miserably queasy and at -2 on DX, IQ, and skill rolls.
        Roll daily on long journeys.
      </p>
    )
  },
  {
    title: 'Mundane Background',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You have a complete lack of experience with the supernatural and the weird. When you first
        enter play, you can only have mundane skills and equipment. Magic spells, cinematic skills,
        etc. are off-limits. So are Hidden Lore and Occultism!
        <br />
        <br />
        You can have supernatural advantages, but you can neither use them nor learn any skills that
        would allow you to use them. In fact, you have no idea that you possess such talents, save
        perhaps for the odd dream now and then.
        <br />
        <br />
        You must buy off this disadvantage if you wish to use supernatural advantages actively or
        learn any skill related to the supernatural or the weird.
        <br />
        <br />
        Mundane Background is only available in settings with supernatural or weird elements!
        <br />
        <br />
        It is not a valid disadvantage in perfectly mundane game worlds.
      </p>
    )
  },
  {
    title: 'Neurological Disorder',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You suffer from one of several neurological disorders that cause tremors, involuntary
        movements, facial contortions, etc. Point value depends on severity:
      </p>
    ),
    subCategories: [
      {
        name: 'Mild',
        text: (
          <p>
            Your condition is obvious to anyone who observes you for more than a few seconds. You
            are at -2 to tasks that involve fine manipulation (see High Manual Dexterity, p. 59),
            and such tasks take twice the normal time.
            <br />
            <br />
            You also have -2 to social skills such as Acting, Leadership, Performance, Public
            Speaking, and Sex Appeal in any situation where your condition would be apparent (GM’s
            decision).
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Severe',
        text: (
          <p>
            You find it difficult to function in normal society. You are at -4 to tasks that involve
            fine manipulation, and such tasks take four times as long.
            <br />
            <br />
            Your DX and Basic Move cannot exceed your racial average (DX 10 and Move 5 for a human),
            and might be lower. You get -4 to social skills whenever your condition becomes
            apparent.
          </p>
        ),
        points: '-35 points'
      },
      {
        name: 'Crippling',
        text: (
          <p>
            You find it almost impossible to function in normal society. You are at -6 to tasks that
            involve fine manipulation, and such tasks take six times as long.
            <br />
            <br />
            Your DX and Basic Move cannot exceed 80% of your racial average (DX 8 and Move 4 for a
            human), and might be considerably lower. You get -6 to social skills most of the time
          </p>
        ),
        points: '-55 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Many other symptoms are possible, including gross motor impairment (buy down DX or Move),
          involuntary vocalizations (treat as Noisy, p. 146), and facial contortions (reduce
          appearance level; see Physical Appearance, p. 21). Violent tics and profane involuntary
          vocalizations might qualify as Odious Personal Habits (p. 22).
        </i>
      </strong>
    )
  },
  {
    title: 'Night Blindness',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You have poor night vision. If the vision or combat penalty for poor lighting is between -1
        and -4 for most people, your penalty is the worse of double the usual penalty or -3. If the
        usual penalty is -5 or worse, you function as though you were completely blind (see
        Blindness, p. 124).
        <br />
        <br />
        If you have Acute Vision (p. 35), it only applies in situations with no darkness penalty.
        This trait is mutually exclusive with both Night Vision (p. 71) and Dark Vision (p. 47).
      </p>
    )
  },
  {
    title: 'Nightmares',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You are tormented each night by horrible nightmares. Sometimes they’re so harrowing that
        they affect your efficiency during waking hours. Make a self-control roll each morning upon
        awakening.
        <br />
        <br />
        If you fail, you suffered nightmares; this costs you 1 FP that you can only recover through
        sleep. On a roll of 17 or 18, you are left shaking, and are at -1 to all skill and
        Perception rolls for the entire day. These nightmares can be so vivid that they’re
        indistinguishable from reality.
        <br />
        <br />
        The GM might choose to play them out in the game, starting out like a normal scenario and
        steadily becoming more horrible. The victim should only gradually come to suspect that he is
        dreaming. Such dreams can have a dramatic effect on the dreamer’s waking life, such as
        temporary Obsessions or Phobias, or even a psychosomatic loss of HP or attribute levels.
        <br />
        <br />
        If other PCs are involved in the nightmare, they’re completely unaffected by anything that
        occurs there (but if the nightmare takes a long time to play out, the GM might wish to
        reward the players with a bonus character point as a token of appreciation for their time –
        maybe two points if they roleplayed the dream-situation particularly well). It’s the GM’s
        option whether to let the other players know in advance that the scenario is a dream. Either
        way can lead to unique and fascinating roleplaying.
      </p>
    )
  },
  {
    title: 'No Depth Perception',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You have two eyes, but you lack effective binocular vision and cannot visually judge
        distances. This might be due to a vision disorder or a quirk of your racial neurology.
        <br />
        <br />
        The game effects are identical to One Eye (p. 147); you may not take both disadvantages.
      </p>
    )
  },
  {
    title: 'No Fine Manipulators',
    type: 'disadvantage',
    points: '-30 or -50 points',
    description: (
      <p>
        Your body lacks hands and possibly limbs. Point value depends on the extent of your
        limitation:
      </p>
    ),
    subCategories: [
      {
        name: 'No Fine Manipulators',
        text: (
          <p>
            You have no body part more agile than paws or hooves. You cannot use your limbs to make
            repairs, pick locks, tie knots, wield weapons, etc., or even to grasp firmly.
            <br />
            <br />
            You may only select this trait if you have nothing approaching the human hand in terms
            of overall versatility. If you have a beak, tongue, prehensile tail, etc. that is as
            good as a hand, you do not have No Fine Manipulators!
          </p>
        ),
        points: '-30 points'
      },
      {
        name: 'No Manipulators',
        text: (
          <p>
            You have no limbs.
            <br />
            <br />
            The only way for you to manipulate objects is to push them around with your body or
            head. You can still move, and are capable of rolling, wriggling, bouncing, etc. at your
            Basic Move unless you buy it down to 0.
          </p>
        ),
        points: '-50 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Note that this trait is limited to nonhumans and supers. Either level qualifies you to buy
          ST and DX with the -40% No Fine Manipulators limitation.
        </i>
      </strong>
    )
  },
  {
    title: 'No Legs',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You are a member of a legless race. There are several different forms of this trait, but in
        all cases, you cannot kick, cannot be struck in the legs in combat, and need not wear leg
        armor.
        <br />
        <br />
        The point costs below assume that the benefit of having no legs for foes to target in combat
        balances the drawback of being unable to kick.
      </p>
    ),
    subCategories: [
      {
        name: 'Aerial',
        text: (
          <p>
            You cannot move on land, but you can hover, glide, or fly. You must purchase the Flight
            advantage (p. 56). Calculate Basic Speed as usual and use twice this value to determine
            your basic air Move, as described for Flight. Your ground Move is 0.
          </p>
        ),
        points: '0 points'
      },
      {
        name: 'Aquatic',
        text: (
          <p>
            You cannot move on land, but you are adapted to movement on or in water, like a ship or
            a fish. Calculate Basic Move and use this as your basic water Move.
            <br />
            <br />
            Your ground Move is 0. You suffer no skill penalties for working in or under water. 0
            points.
            <br />
            <br />
            If your mobility depends on fins, masts, paddles, or sails that you can’t armor, or you
            can’t dive:
          </p>
        ),
        points: '-5 points. If both: -10 points'
      },
      {
        name: 'Bounces',
        text: (
          <p>
            Rolls, or Slithers: You move on land without using legs, like a snake or a wheel-form
            robot. Work out Basic Move and use it as your ground Move, just as a legged character
            would.
          </p>
        ),
        points: '0 points'
      },
      {
        name: 'Semi-Aquatic',
        text: (
          <p>
            You “walk” on flippers, like a seal. Use Basic Move as your basic water Move and 1/5
            this as your groundMove – that is, reverse the normal relationship between ground and
            water Move. You suffer standard skill penalties in the water.
          </p>
        ),
        points: '0 points'
      },
      {
        name: 'Sessile',
        text: (
          <p>
            Your base is anchored where you sit, like a tree or a building. You can’t move under
            your own power in any environment, and lack the option of using a moving platform
            (although you can be moved, with considerable effort).
            <br />
            <br />
            Your Basic Move is automatically 0, and you get no extra points for this. You can still
            have manipulators.
            <br />
            <br />
            If so, you wield weapons at no DX penalty, because unlike those with the Lame
            disadvantage, you have a very stable base! -
          </p>
        ),
        points: '-50 points'
      },
      {
        name: 'Tracked or Wheeled',
        text: (
          <p>
            You have tracks or wheels instead of legs. Specify how many – one to four, or any higher
            even number.
            <br />
            <br />
            If using hit locations, treat each track or wheel as if it were a leg. You can neither
            jump nor negotiate obstacles that require arms and legs working together (e.g., a ladder
            or rope).
            <br />
            <br />
            You always leave a visible trail (giving others a Tracking bonus: +1 for Wheeled, +2 for
            Tracked). Tracks are also noisy (+2 to all Hearing rolls to detect you), but let you
            handle rough terrain more easily. Tracked and Wheeled do not reduce Move; in fact, you
            may buy up to three levels of Enhanced Move (Ground).
            <br />
            <br />
            This disadvantage usually accompanies the Machine meta-trait (p. 263).
          </p>
        ),
        points: '-20 points'
      }
    ]
  },
  {
    title: 'No Sense of Humor',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You never get any jokes; you think everyone is earnestly serious at all times.
        <br />
        <br />
        Likewise, you never joke, and you are earnestly serious at all times.
        <br />
        <br />
        Others react at -2 to you in any situation where this disadvantage becomes evident.
      </p>
    )
  },
  {
    title: 'No Sense of Smell/Taste',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        This affliction – known as anosmia – prevents you from smelling or tasting anything. Thus,
        you are unable to detect certain hazards that ordinary people spot quickly.
        <br />
        <br />
        However, the disability has its advantages . . . you need never worry about skunks, and can
        always eat what is set before you.
      </p>
    )
  },
  {
    title: 'Nocturnal',
    type: 'disadvantage',
    points: '-20 points',
    description: (
      <p>
        You can only be active when the sun is below the horizon. This represents more than a
        preference for night over day! As soon as dawn starts to break, you become lethargic – and
        when the sun clears the horizon, you fall paralyzed and comatose until the sun goes down
        again.
        <br />
        <br />
        Note that this is not the same as the biological term “nocturnal.”
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="enhancement">Special Enhancements</strong>
            <br />
            <br />
            <i>Permanent Paralysis</i>
          </p>
        ),
        text: (
          <p>
            You turn to stone or suffer some other permanent incapacitation if struck by the sun’s
            rays. Only one specific power or item – most often a powerful magic spell – can reverse
            this effect. Details are up to the GM. +100%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Noisy',
    type: 'disadvantage',
    points: '-2 points/level',
    description: (
      <p>
        You make a lot of noise! Perhaps you’re a ghost with clanking chains, a cyborg with a
        rasping ventilator, or a machine with a loud engine . . . or perhaps you’re absurdly inept
        at stealth.
        <br />
        <br />
        You make noise constantly – even when standing still – unless you are comatose (for animate
        beings) or powered down (for machines). Each level gives +2 to Sense rolls to hear you or -2
        to your Stealth rolls, as the situation warrants.
        <br />
        <br />
        In some circumstances (e.g., at the opera), each level might also give -1 to reactions! You
        may not take more than five levels of Noisy without the GM’s permission.
      </p>
    )
  },
  {
    title: 'Non-Iconographic',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are incapable of processing abstract images and symbols.
        <br />
        <br />
        Graphical computer interfaces, maps, heraldic devices, and magical runes are completely
        meaningless to you.
        <br />
        <br />
        Like Dyslexia (p. 134), this is a structural shortcoming of your brain; you cannot normally
        buy it off. You cannot learn Cartography, Heraldry, Symbol Drawing, or any similar skill
        used mainly to design or arrange patterns and symbols.
        <br />
        <br />
        You also cannot use graphical computer interfaces; you are limited to text interfaces and
        immersive virtual realities. Finally, since you cannot grasp magical symbols, you cannot
        learn magic save through oral tradition.
        <br />
        <br />
        Note that you can process text without difficulty, and may learn written languages normally
        (see Language, p. 23).
      </p>
    )
  },
  {
    title: 'Numb',
    type: 'disadvantage',
    points: '-20 points',
    description: (
      <p>
        You have no sense of touch. You have a limited degree of pressure sense – enough to feel
        your weight and stand up and walk without falling over – but you cannot distinguish textures
        by touch at all. Feats that depend on touch alone (e.g., touch-typing, or untying your hands
        behind your back) are impossible for you.
        <br />
        <br />
        When performing a task that requires hand-eye coordination, you suffer all the effects of
        one level of Ham-Fisted (p. 138) unless you take twice as long to perform the action and can
        clearly see what you’re doing. If you also have Ham-Fisted, add its effects.
        <br />
        <br />
        You experience pain, temperature, and shock as acutely as anyone else, unless you also have
        High Pain Threshold (p. 59), but you won’t know where you were injured without looking.
        Instead, you feel pain as generalized shock throughout your entire body.
        <br /> As a result, you cannot perform First Aid on yourself if you can’t see the injury.
      </p>
    )
  },
  {
    title: 'Oblivious',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You understand others’ emotions but not their motivations. This makes you awkward in
        situations involving social manipulation.
        <br />
        <br />
        You are the classic “nerd”! You have -1 to use or resist Influence skills (see Influence
        Rolls, p. 359): Diplomacy, Fast-Talk, Intimidation, Savoir-Faire, Sex Appeal, and
        Streetwise.
      </p>
    )
  },
  {
    title: 'Obsession',
    type: 'disadvantage',
    points: '-5 or -15 points',
    description: (
      <p>
        Your entire life revolves around a single goal. Unlike Compulsive Behavior (p. 128), this is
        not a daily habit, but an overpowering fixation that motivates all of your actions. And
        unlike Fanaticism (p. 136), this does not necessarily imply a set of philosophical beliefs.
        <br />
        <br />
        You must rationalize all of your actions as an attempt to reach your goal. Make a
        self-control roll whenever it would be wise to deviate from your goal. If you fail, you
        continue to pursue your Obsession, regardless of the consequences.
        <br />
        <br />
        Point cost depends on the time needed to realize your goal. A shortterm goal (e.g.,
        assassinating someone) is worth -5 points, while a longterm goal (e.g., becoming President)
        is worth -10 points. In both cases, modify the base cost to reflect your selfcontrol number.
        If your Obsession causes others to react badly, take Odious Personal Habit (p. 22) or
        Delusion (p. 130) as well.
        <br />
        <br />
        Should you ever reach your goal, you must either substitute a new goal or buy off your
        Obsession.
      </p>
    )
  },
  {
    title: 'On the Edge',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You take grossly unreasonable risks in the face of mortal danger. Make a self-control roll
        whenever you face a life-threatening situation: piloting a burning vehicle, staring down an
        entire street gang while armed only with a toothbrush, etc. If you fail, you may not back
        down from the challenge – but you may roll again after every success roll or reaction roll
        relating to the situation. This might be once per second in a potential combat situation but
        only once per day on a dangerous space mission.
        <br />
        <br />
        In combat, make a self-control roll every time you take your turn. If you fail, you must
        make an All-Out attack or engage in some other kind of nearinsane, suicidal behavior.
        <br />
        <br />
        Most people think you’re crazy if they witness this behavior, giving -2 on reaction rolls.
        <br />
        <br />
        Individuals who value bravery over self-preservation (GM’s decision) will react at +2.
      </p>
    )
  },
  {
    title: 'One Arm',
    type: 'disadvantage',
    points: '-20 points',
    description: (
      <p>
        You have only one arm. You cannot use two-handed weapons, wield two weapons at once (or a
        weapon and a shield), or perform any task that requires two arms. You get -4 on tasks that
        are possible with one arm but that are usually executed with two (e.g., most Climbing and
        Wrestling rolls).
        <br />
        <br />
        You have no penalty on tasks that require only one arm. In all cases, the GM’s ruling is
        final. When in doubt, try a quick reality check if possible! If you originally had two arms,
        assume that you lost the left arm if you were right-handed, or vice versa. If you are a
        nonhuman who only had one arm to begin with, your “arm” need not be an arm at all – it can
        be any appendage capable of fine manipulation. For instance, a parrot that used its beak and
        tongue would have One Arm (and not No Fine Manipulators).
        <br />
        <br />
        If you have advanced prosthetics that cancel One Arm while worn, apply a Mitigator
        limitation (p. 112). Should you ever eliminate One Arm completely through surgery or an
        ultra-tech replacement limb, you must pay back the points you received for it.
      </p>
    )
  },
  {
    title: 'One Eye',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You have only one eye. Either you are missing an eye (in which case you may wear a glass eye
        or cover the missing eye with a patch) or you have only a single, cyclopean eye. You suffer
        -1 to DX in combat and on any task involving hand-eye coordination, and -3 on ranged attacks
        (unless you Aim first) and on rolls to operate any vehicle faster than a horse and buggy.
        <br />
        <br />
        Some cultures regard those who are missing an eye as unattractive. If this is generally true
        in your game world, losing an eye will also reduce your appearance by one level (see
        Physical Appearance, p. 21).
        <br />
        <br />
        If you start with this trait, assume that it is already factored into your appearance – do
        not apply an additional reaction modifier.
      </p>
    )
  },
  {
    title: 'One Hand',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You have only one hand. For the most part, use the rules under One Arm (above).
        <br />
        <br />
        The difference is that you may make unarmed parries with a handless arm, and possibly strap
        something to it (e.g., a shield). Good-quality prosthetic replacements use the rules under
        One Arm.
        <br />
        <br />
        Not all prosthetics are good enough to count as Mitigators, though. A lowtech mechanical
        replacement gives you -2 (for a grabber) or -4 (for a hook or claw) on tasks involving that
        hand.
        <br />
        <br />A hook or claw also counts as an undroppable large knife in combat (use Knife skill),
        and gives +1 to Intimidation skill if waved at your foes. In some societies, such crude
        replacements will reduce appearance as described under One Eye (above).
      </p>
    )
  },
  {
    title: 'Overcofident',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You believe that you are far more powerful, intelligent, or competent than you really are.
        You may be proud and boastful or just quietly determined, but you must roleplay this trait.
        <br />
        <br />
        You must make a self-control roll any time the GM feels you show an unreasonable degree of
        caution. If you fail, you must go ahead as though you were able to handle the situation!
        Caution is not an option.
        <br />
        <br />
        You receive +2 on all reaction rolls from young or naive individuals (who believe you are as
        good as you say you are), but -2 on reactions from experienced NPCs.
        <br />
        <br />
        Overconfidence is like Mega lo - mania (p. 144) on a smaller scale. Robin Hood was
        overconfident – he challenged strangers to quarterstaff duels.
        <br />
        <br />
        Hitler was a megalomaniac – he invaded Russia! Heroes are rarely megalomaniacal but often
        overconfident.
      </p>
    )
  },
  {
    title: 'Pacifism',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>You are opposed to violence. This can take several forms. Choose one of the following:</p>
    ),
    subCategories: [
      {
        name: 'Reluctant Killer',
        text: (
          <p>
            You are psychologically unprepared to kill people.
            <br />
            <br />
            Whenever you make a deadly attack (e.g., with a knife or a gun) against an obvious
            person whose face is visible to you, you are at -4 to hit and may not Aim. If you cannot
            see the foe’s face (due to a mask, darkness, or distance, or because you attacked from
            behind), the penalty is only -2, save in close combat. You have no penalty to attack a
            vehicle (even an occupied one), an opponent you do not believe is a person (including
            things with Horrific or Monstrous appearance), or a target you can’t actually see (e.g.,
            a set of map coordinates or a blip on a radar screen). If you kill a recognizable
            person, the effect on you is the same as for Cannot Kill (see below).
            <br />
            <br />
            You have no problem with your allies killing; you may even supply ammo, loaded weapons,
            and encouragement! You just can’t do the killing yourself.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Cannot Harm Innocents',
        text: (
          <p>
            You may fight – you may even start fights – but you may only use deadly force on a foe
            that is attempting to do you serious harm. Capture is not “serious harm” unless you are
            already under penalty of death or have a Code of Honor that would require suicide if
            captured.
            <br />
            <br />
            You never intentionally do anything that causes, or even threatens to cause, injury to
            the uninvolved – particularly if they are “ordinary folks.” This trait is especially
            appropriate for crimefighters, supers, etc.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Cannot Kill',
        text: (
          <p>
            You may fight – you may even start fights – but you may never do anything that seems
            likely to kill another. This includes abandoning a wounded foe to die “on his own”!
            <br />
            <br />
            You must do your best to keep your companions from killing, too. If you do kill someone
            (or feel responsible for a death), you immediately suffer a nervous breakdown. Roll 3d
            and be totally morose and useless (roleplay it!) for that many days.
            <br />
            <br />
            During this time, you must make a Will roll to offer any sort of violence toward anyone,
            for any reason.
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Self Defense Only',
        text: (
          <p>
            You only fight to defend yourself or those in your care, using only as much force as
            necessary (no pre-emptive strikes allowed!).
            <br />
            <br />
            You must do your best to discourage others from starting fights.
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Total Nonviolence',
        text: (
          <p>
            You will not lift a hand against another intelligent creature, for any reason.
            <br />
            <br />
            You must do your nonviolent best to discourage violent behavior in others, too. You are
            free to defend yourself against attacks by animals, mosquitoes, etc.
          </p>
        ),
        points: '-30 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          In a high-realism campaign, the GM might require all PCs to start out with Reluctant
          Killer or even Cannot Kill, giving them extra points but putting them at a disadvantage
          when facing hardened foes.
        </i>
      </strong>
    )
  },
  {
    title: 'Paranoia',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are out of touch with reality, and think that everyone is plotting against you. You
        never trust anyone except old friends . . . and you keep an eye on them, too, just in case.
        <br />
        <br />
        Most people, understandably, react to you at -2. A paranoid NPC reacts at -4 toward any
        stranger, and any “legitimate” reaction penalty (e.g., for an unfriendly race or
        nationality) is doubled.
        <br />
        <br />
        Paranoia goes very well with Delusions (p. 130), which of course have their own disadvantage
        value!
      </p>
    )
  },
  {
    title: 'Phantom Voices',
    type: 'disadvantage',
    points: '-5 to -15 points',
    description: (
      <p>
        You are plagued by whispered phrases that only you can hear. These voices might be
        unintelligible, or they might repeat the same words over and over. Eventually, your sanity
        (such as it is) will start to erode.
        <br />
        <br />
        In any situation that the GM feels is stressful, he may roll 3d. On a 6 or less, you hear
        voices. The GM will always roll whenever you miss a Fright Check or make the roll exactly,
        and whenever you fail a self-control roll for another stress-related disadvantage.
        <br />
        <br />
        The voices occur in addition to any other results! Point value depends on the nature of the
        voices:
      </p>
    ),
    subCategories: [
      {
        name: 'Annoying',
        text: (
          <p>
            You hear voices, but you are reasonably sure that they are not real, and they do not
            harm you directly.
            <br />
            <br />
            Still, most people who see you responding to unheard noises will react at -2.
          </p>
        ),
        points: '-2 points'
      },
      {
        name: 'Disturbing',
        text: (
          <p>
            As above, but in addition, the voices can drown out normal sounds, and may even startle
            and frighten you (possibly requiring a Fright Check).
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Diabolical',
        text: (
          <p>
            The voices tell you to kill – yourself or others – or perform other terrible deeds.
            <br />
            <br />
            If you are already under stress, or under the influence of drugs, you might need to make
            a Will roll to avoid carrying out the “orders” (GM’s discretion).
          </p>
        ),
        points: '-15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Phantom Voices are usually due to mental problems, but they may also be symptomatic of
          some form of supernatural possession. If so, psychotherapy cannot reveal the cause, much
          less cure the problem. If you manage to exorcise the evil spirits, you are cured and must
          buy off this disadvantage.
        </i>
      </strong>
    )
  },
  {
    title: 'Phobias',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You are afraid of a specific item, creature, or circumstance. Many fears are reasonable, but
        a Phobia is an unreasonable, unreasoning, morbid fear. The point value depends on how common
        the object of your fear is – fear of darkness is far more troublesome than fear of
        left-handed plumbers.
        <br />
        <br />
        Make a self-control roll whenever you are exposed to the object of your Phobia. If you fail,
        roll 3d, add the amount by which you failed your selfcontrol roll, and look up the result on
        the Fright Check Table (p. 360). For instance, if your self-control number is 9 but you
        rolled a 13, roll 3d+4 on the table. The result from the table affects you immediately!
        <br />
        <br />
        If you succeed, you have successfully mastered your Phobia (for now), but you are still
        shaken, and have a penalty to all DX, IQ, and skill rolls while the cause of your fear
        persists. The penalty depends on your selfcontrol number.
      </p>
    ),
    subCategories: [
      {
        text: (
          <table>
            <tr>
              <th>
                Self Control
                <br />
                Number
              </th>
              <th>Penalty</th>
            </tr>
            <tr>
              <td>6</td>
              <td>-4</td>
            </tr>
            <tr>
              <td>9</td>
              <td>-3</td>
            </tr>
            <tr>
              <td>12</td>
              <td>-2</td>
            </tr>
            <tr>
              <td>15</td>
              <td>-1</td>
            </tr>
            <tr>
              <td>Daily</td>
              <td>1</td>
            </tr>
          </table>
        )
      },
      {
        text: (
          <p>
            You must roll again every 10 minutes to see if the fear overcomes you. Even the mere
            threat of the feared object requires a self-control roll, although this is at +4. If
            your enemies actually inflict the feared object on you, you must make an unmodified
            self-control roll, as described above. If you fail, you might break down, depending on
            the Fright Check results, but you won’t necessarily talk.
            <br />
            <br />
            Some people can panic and fall apart, but still refuse to talk – just as some people do
            not talk under torture. A phobic situation is by definition stressful.
            <br />
            <br />
            If you have other mental disadvantages that are triggered by stress, you are likely to
            have these reactions if you fail to resist a Phobia. Some common phobias:
          </p>
        )
      },
      {
        name: 'Being Alone (Autophobia)',
        text: <p>You cannot stand to be alone, and do anything in your power to avoid it.</p>,
        points: '-15 points'
      },
      {
        name: 'Blood (Hemophobia)',
        text: (
          <p>
            The sight of blood gives you the screaming willies! You need to make a self-control roll
            during most combats . . .
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Cats (Ailurophobia):',
        points: '-5 points'
      },
      {
        name: 'Crowds (Demophobia)',
        text: (
          <p>
            Any group of over a dozen people sets off this fear unless they are all well known to
            you.
            <br />
            <br />
            The self-control roll is at -1 for over 25 people, -2 for a crowd of 100 or more, -3 for
            1,000, -4 for 10,000, and so on.
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Darkness (Scotophobia):',
        text: (
          <p>
            A common fear, but crippling.
            <br />
            <br />
            You should avoid being underground if possible; if something happens to your flashlight
            or torch, you might well lose your mind before you can relight it.
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Death and the Dead (Necrophobia)',
        text: (
          <p>
            You are terrified by the idea of death. Make a self-control roll in the presence of any
            dead body (animals don’t count, but portions of human bodies do).
            <br />
            <br />
            Roll at -4 if the body is that of someone you know, or -6 if the body is unnaturally
            animated in some way.
            <br />
            <br />A ghost (or apparent ghost) also requires a roll at -6.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Dirt (Mysophobia)',
        text: (
          <p>
            You are deathly afraid of infection, or just of dirt and filth.
            <br />
            <br />
            Make a self-control roll when you must do something that might get you dirty. Roll at -5
            to eat any unaccustomed food. You should act as “finicky” as possible
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Dogs (Cynophobia)',
        text: <p>This includes all canines: foxes, wolves, coyotes, wild dogs, etc.</p>,
        points: '-5 points'
      },
      {
        name: 'Enclosed Spaces (Claustrophobia)',
        text: (
          <p>
            A common, crippling fear. You are uncomfortable any time you can’t see the sky – or at
            least a very high ceiling. In a small room or vehicle, you feel the walls closing in on
            you . . .<br />
            <br />
            You need air! This is a dangerous fear for someone who plans to go underground
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Fire (Pyrophobia)',
        text: <p>Even a burning cigarette bothers you if it comes within five yards.</p>,
        points: '-5 points'
      },
      {
        name: 'Heights (Acrophobia)',
        text: (
          <p>
            You may not voluntarily go more than 15 feet above ground, unless you are inside a
            building and away from windows.
            <br />
            <br />
            If there is some chance of an actual fall, selfcontrol rolls are at -5.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Insects (Entomophobia)',
        text: (
          <p>
            You are afraid of all “bugs.” Large or poisonous ones give -3 to self-control rolls.
            <br />
            <br />
            Very large ones, or large numbers, give -6. Avoid hills of giant ants.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Loud Noises (Brontophobia)',
        text: (
          <p>
            You avoid any situation where loud noises are likely.
            <br />
            <br />A sudden loud noise requires an immediate self-control roll. A thunderstorm is a
            traumatic experience for you!
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Machinery (Technophobia)',
        text: (
          <p>
            You can never learn to repair any sort of machine and refuse to learn to use anything
            more complicated than a crossbow or bicycle. Any highly technological environment calls
            for a selfcontrol roll; dealings with robots or computers require a roll at -3, and
            hostility from intelligent machines requires a roll at -6.
          </p>
        ),
        points: '-5 points at TL4 or below, -15 points at TL5 or above.'
      },
      {
        name: 'Magic (Manaphobia)',
        text: (
          <p>
            You can never learn to use magic, and you react badly to any user of magic. Make a
            self-control roll whenever you are in the presence of magic. This roll is at -3 if you
            are to be the target of friendly magic, and -6 if you are the target of hostile magic.
            (The magic does not have to be real, if you believe in it!)
          </p>
        ),
        points:
          '-15 points in a setting where magic is common,-10 if it is known but uncommon,-5 if “real” magic is essentially unknown'
      },
      {
        name: 'Monsters (Teratophobia)',
        text: (
          <p>
            Any “unnatural” creature sets off this fear. You have -1 to -4 on the self-control roll
            if the monster seems very large or dangerous, or if there are a lot of them. Note that
            the definition of “monster” depends on experience.
            <br />
            <br />
            An American Indian would consider an elephant monstrous, while an African pygmy would
            not!
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Number 13 (Triskaidekaphobia)',
        text: (
          <p>
            You must make a self-control roll whenever you have to deal with the number 13 – visit
            the 13th floor, buy something for $13.00, etc. Roll at -5 if Friday the 13th is
            involved!
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Oceans (Thalassophobia)',
        text: (
          <p>
            You are afraid of any large body of water. Ocean travel, or even air travel over the
            ocean, is basically impossible for you, and encounters with aquatic monsters are also
            upsetting.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Open Spaces (Agoraphobia)',
        text: (
          <p>
            You are uncomfortable whenever you are outside, and actually become frightened when
            there are no walls within 50 feet.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Psionic Powers (Psionophobia)',
        text: (
          <p>
            You are afraid of those with known psionic powers. An actual exhibition of power in your
            presence requires a self-control roll. You do not voluntarily allow anyone to use a
            psionic power on you. The power does not have to be real – all that matters is that you
            believe it is!
          </p>
        ),
        points:
          '-15 points if psi powers are common, -10 if they are uncommon, -5 if they are essentially unknown.'
      },
      {
        name: 'Reptiles (Herpetophobia)',
        text: (
          <p>
            You come unglued at the thought of reptiles, amphibians, and similar scaly slimies. A
            very large reptile, or a poisonous one, gives -2 to self-control rolls; a horde of
            reptiles (such as a snake pit) gives -4.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Sex (Coitophobia)',
        text: (
          <p>You are terrified by the idea of sexual relations or the loss of your virginity.</p>
        ),
        points: '-10 points'
      },
      {
        name: 'Sharp Things (Aichmophobia)',
        text: (
          <p>
            You are afraid of anything pointed. Swords, spears, knives, and hypodermic needles all
            give you fits. Trying to use a sharp weapon, or being threatened with one, requires a
            self-control roll at -2.
          </p>
        ),
        points: '-15 points at TL5 or below, -10 at TL6 or above'
      },
      {
        name: 'Spiders (Arachnophobia):',
        points: '-5 points'
      },
      {
        name: 'Strange and Unknown Things (Xenophobia)',
        text: (
          <p>
            You are upset by any sort of strange circumstances, and in particular by strange people.
            <br />
            <br />
            Make a self-control roll when surrounded by people of another race or nationality; roll
            at -3 if the people are not human.
            <br />
            <br />
            If you lose control, you might well attack strangers out of fear
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Sun (Heliophobia)',
        points: '-15 points'
      },
      {
        name: 'Weapons (Hoplophobia)',
        text: (
          <p>
            The presence of any sort of weaponry is stressful. Trying to use a weapon, or being
            threatened with one, requires a selfcontrol roll at -2.
          </p>
        ),
        points: '-20 points'
      }
    ]
  },
  {
    title: 'Post-Combat Shakes',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You are shaken and sickened by combat, but only after it’s over. Make a self-control roll at
        the end of any battle. It is up to the GM to determine when a battle has truly ended, and he
        may apply a penalty if the combat was particularly dangerous or gruesome. If you fail, roll
        3d, add the amount by which you failed your self-control roll, and look up the result on the
        Fright Check Table (p. 360).
        <br />
        <br />
        For instance, if your self-control number is 12 but you rolled a 14, roll 3d+2 on the table.
        <br />
        <br />
        The result from the table affects you immediately!
      </p>
    )
  },
  {
    title: 'Pyromania',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You like fires! You like to set fires, too. For good roleplaying, you must never miss a
        chance to set a fire, or to appreciate one you encounter. Make a self-control roll whenever
        you have an opportunity to set a fire.
      </p>
    )
  },
  {
    title: 'Quadriplegic',
    type: 'disadvantage',
    points: '-80 points',
    description: (
      <p>
        You are paralyzed in all your arms and legs, or lack limbs entirely. You can neither
        manipulate objects nor move yourself without assistance.
        <br />
        <br />
        You suffer all the bad effects of Paraplegic (see Lame, p. 141) and No Manipulators (see No
        Fine Manipulators, p. 145).
        <br />
        <br />
        If the GM is enforcing a disadvantage limit, Quadriplegic counts against the limit – but you
        may reduce ST and DX by up to four levels each without the resulting disadvantage points
        counting against the limit (points gained from further reductions count normally).
        <br />
        <br />
        For rules governing prosthetic limbs and surgical cures, see Lame (p. 141) and One Arm (p.
        147) for legs and arms, respectively.
      </p>
    )
  },
  {
    title: 'Reprogrammable',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You can be programmed to obey a master. If you have Slave Mentality (p. 154), you must obey
        slavishly, and remain strictly within the letter of your master’s commands.
        <br />
        <br />
        If you lack Slave Mentality, you may interpret his orders creatively, as long as you remain
        within either their letter or spirit (your choice). If you are nonsentient (IQ 0), you have
        no interest in doing anything but following your programming!
        <br />
        <br />
        You may have both Duty and Reprogrammable. If so, you must do your best to fulfill both
        obligations. Should the two come into conflict, your programming always comes first.
        <br />
        <br />
        This trait is most appropriate for golems, mindless undead, robots, and similar automata. It
        is rarely suitable for PCs, and the GM may choose to forbid it entirely.
      </p>
    )
  },
  {
    title: 'Restricted Diet',
    type: 'disadvantage',
    points: '-10 to -40 points',
    description: (
      <p>
        You require a specialized food or fuel that is hard to come by. Unlike Dependency (p. 130),
        you do not take damage if you go without . . . you just can’t eat or refuel, which will
        eventually incapacitate you.
        <br />
        <br />
        Point value depends on the rarity of the item you consume:
      </p>
    ),
    subCategories: [
      {
        name: 'Rare',
        text: <p>Dragon’s blood, exotic nutrient mixture, weapons-grade uranium.</p>,
        points: '-40 points'
      },
      {
        name: 'Occasional',
        text: <p>Virgin’s blood, rocket fuel, babies, radioactives.</p>,
        points: '-30 points'
      },
      {
        name: 'Common',
        text: <p>Human flesh, gasoline, liquid hydrogen.</p>,
        points: '-20 points'
      },
      {
        name: 'Very Common',
        text: (
          <p>
            Fresh meat, any hydrocarbon fuel (gasoline, diesel, etc.), electric batteries, fresh
            blood.
          </p>
        ),
        points: '-10 points'
      },
      {
        text: (
          <p>
            <strong>
              Restricted Diet is appropriate for normal humans with chronic gastrointestinal
              disorders.
            </strong>
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Substitution</i>
          </p>
        ),
        text: (
          <p>
            You can try to consume a food or fuel similar to the one you require. For instance, a
            cyborg that requires exotic nutrients could try ordinary human food, or a machine that
            requires gasoline could try diesel. This sustains you, but you must make a HT roll after
            each meal or refueling.
            <br />
            <br />
            Failure means your HT attribute drops by one until you receive appropriate medical or
            mechanical attention. Critical failure means an incapacitating reaction (GM’s decision):
            severe immune response, engine failure, etc.
            <br />
            <br />
            Those who lack this limitation but for some reason attempt substitution derive no
            sustenance at all and must still make the HT roll above; treat success as failure and
            failure as critical failure. -50%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Restricted Vision',
    type: 'disadvantage',
    points: '-15 or -30 points',
    description: (
      <p>
        You have an unusually narrow field of vision.
        <br />
        <br />A normal character can see a 120° arc in front of him without turning his head, and
        has 30° of peripheral vision to either side, giving him a 180° “arc of vision” for
        observation and ranged attacks. On a battle map, this means he has three “front” hexes, two
        “side” hexes (“left” and “right”), and a single “back” hex. Your vision is considerably more
        restricted.
        <br />
        <br />
        This comes in two levels:
      </p>
    ),
    subCategories: [
      {
        name: 'No Peripheral Vision',
        text: (
          <p>
            Your arc of vision is a 120° wedge to the front. On a map, your “left” and “right” hexes
            become “back” hexes – that is, you have three “back” hexes, and get no defense against
            attacks originating from these hexes!
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Tunnel Vision',
        text: (
          <p>
            Your arc of vision is a 60° wedge to the front. On a map, your only “front” hex is the
            one directly ahead of you.
            <br />
            <br />
            The hexes to either side of this are “side” hexes: you are at -2 to defend against
            attacks from these hexes, and can only attack into those hexes with a Wild Swing.
            <br />
            <br />
            Everything else is a “back” hex, as above.
          </p>
        ),
        points: '-30 points'
      }
    ]
  },
  {
    title: 'Revulsion',
    type: 'disadvantage',
    points: '-5 to -15 points',
    description: (
      <p>
        You have an incapacitating supernatural reaction to an ordinarily innocuous substance. If
        you touch or breathe the substance, you must immediately make a HT roll.
        <br />
        <br />
        On a failure, you are at -5 to all skills and attributes for the next 10 minutes. If you
        ingest the substance, you are at -5 to attributes and -10 to all skills and Sense rolls for
        10 minutes.
        <br />
        <br />
        Point value depends on the rarity of the substance:
      </p>
    ),
    subCategories: [
      {
        name: 'Occasional (leather, soap)',
        points: '-5 points'
      },
      {
        name: 'Common (smoke, wood)',
        points: '-10 points'
      },
      {
        name: 'Very Common (grass, metal)',
        points: '-15 points'
      }
    ],
    extraText: (
      <strong>
        <i>This reaction is physical in nature. For mental aversions, see Dread (p. 132).</i>
      </strong>
    )
  },
  {
    title: 'Sadism',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You delight in cruelty . . . mental, physical, or both. Make a self-control roll whenever
        you have an opportunity to indulge your desires and know you shouldn’t (e.g., because the
        prisoner is one who should be released unharmed). If you fail, you cannot restrain yourself.
        <br />
        <br />
        Those who become aware of your problem react at -3 unless they are from a culture that holds
        life in little esteem.
        <br />
        <br />
        This is a particularly “evil” trait, more appropriate to villainous NPCs than to heroic PCs.
        The GM may completely prohibit Sadism if he does not want anyone roleplaying it in his
        campaign.
        <br />
        <br />
        It is possible, though despicable, to possess both Bully (p. 125) and Sadism.
      </p>
    )
  },
  {
    title: 'Secret',
    type: 'disadvantage',
    points: '-5 to -30',
    description: (
      <p>
        A Secret is an aspect of your life or your past that you must keep hidden. Revelation would
        result in lasting negative consequences.
        <br />
        <br />
        The point value depends on the severity of those consequences:
      </p>
    ),
    subCategories: [
      {
        name: 'Serious Embarrassment',
        text: (
          <p>
            If this information gets around, you can forget about ever getting a promotion, getting
            elected, or marrying well.
            <br />
            <br />
            Alternatively, revelation of your Secret might simply attract unwelcome public attention
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Utter Rejection',
        text: (
          <p>
            If your Secret is revealed, it will change your whole life. Perhaps you will lose your
            job and be rejected by friends and loved ones. Perhaps admirers, cultists, long-lost
            relatives, or the press will harass you.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Imprisonment or Exile',
        text: (
          <p>
            If the authorities uncover your Secret, you’ll have to flee, or be imprisoned for a long
            time (GM’s discretion).
          </p>
        ),
        points: '-20 points'
      },
      {
        name: 'Possible Death',
        text: (
          <p>
            Your Secret is so terrible that you might be executed by the authorities, lynched by a
            mob, or assassinated (by the Mafia, CIA, etc.) were it revealed. You would be a hunted
            man
          </p>
        ),
        points: '-30 points'
      },
      {
        name: 'Frequency of Appearance',
        text: (
          <p>
            In general, a Secret appears in a particular game session if the GM rolls a 6 or less on
            3d before the adventure begins.
            <br />
            <br /> However, as for all other disadvantages of this type, the GM need not feel
            constrained by the appearance roll. If he thinks that the Secret should come into play,
            it does!
            <br />
            <br />
            When a Secret appears in play, it is not automatically made public. The GM will give you
            a chance to prevent your Secret from being revealed. This might require you to cave in
            to blackmail or extortion, steal incriminating documents, or even silence the person who
            knows the Secret.
            <br />
            <br />
            Regardless of the solution, however, it’s only temporary – the Secret will appear again
            and again until either you buy it off with earned character points or it is finally
            revealed.
          </p>
        )
      },
      {
        name: 'Effects of Revelation',
        text: (
          <p>
            If a Secret is made public, there is an immediate negative effect ranging from serious
            embarrassment to possible death, depending on the severity of the Secret (see above).
            <br />
            <br />
            There is also a lasting effect: you suddenly acquire new, permanent disadvantages – or
            lose advantages – worth points equal to twice what the Secret was worth! These new
            disadvantages replace the Secret on your character sheet, and reduce your point value
            accordingly.
            <br />
            <br />
            The GM chooses the new disadvantages and lost advantages, which should always be
            appropriate to the Secret. Most Secrets turn into Enemies (p. 135), negative Reputations
            (p. 26), and Social Stigmas (p. 155), or reduce or remove advantages described under
            Wealth and Influence (pp. 25-30). Some could even turn into mental or physical
            disadvantages.
          </p>
        )
      }
    ]
  },
  {
    title: 'Secret Identity',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        A Secret Identity is a special kind of Secret (above): it is another persona that you use
        for deeds that you don’t want connected with your “public” self. Only your closest family
        and friends know, and you are willing to go to great lengths to keep your privacy. This is a
        disadvantage because it limits your behavior. It is difficult (and often illegal) to
        maintain a Secret Identity.
        <br />
        <br />
        The GM will roll to see whether your Secret Identity factors into a game session, just as
        for any Secret. If it does, this usually takes the form of someone who threatens to expose
        your real identity.
        <br />
        <br />
        Anyone with Status 3 or higher gets an extra -10 points for a Secret Identity, because of
        the attention the media and public pay to his every move, but the GM will introduce a
        challenge to his identity on a roll of 7 or less instead of the usual 6 or less.
        <br />
        <br />A Secret Identity otherwise works just like any other Secret, its point value
        depending on the severity of the consequences should it be exposed.
      </p>
    )
  },
  {
    title: 'Self-Destruct',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        As soon as you reach your aging threshold (age 50 for a normal human), your organs and
        immune system begin to fail. You start to age rapidly, making aging rolls every day at -3 to
        HT.
        <br />
        <br />
        You cannot get points for both this disadvantage and Terminally Ill (p. 158). If you are
        going to selfdestruct soon, take Terminally Ill instead of Self-Destruct.
      </p>
    )
  },
  {
    title: 'Selfish',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You are self-important and statusconscious, and spend much of your time striving for social
        dominance. Make a self-control roll whenever you experience a clear social slight or “snub.”
        On a failure, you lash out at the offending party just as if you had Bad Temper (p. 124) –
        likely resulting in a bad reaction (-3 to the target’s reactions toward you) and putting you
        in an awkward social situation.
        <br />
        <br />
        Selfish NPCs react to perceived slights at a penalty:
      </p>
    ),
    subCategories: [
      {
        text: (
          <p>
            <table>
              <tr>
                <th>
                  Self Control
                  <br />
                  Number
                </th>
                <th>Penalty</th>
              </tr>
              <tr>
                <td>6</td>
                <td>-5</td>
              </tr>
              <tr>
                <td>9</td>
                <td>-4</td>
              </tr>
              <tr>
                <td>12</td>
                <td>-3</td>
              </tr>
              <tr>
                <td>15</td>
                <td>-2</td>
              </tr>
              <tr>
                <td>Daily</td>
                <td>1</td>
              </tr>
            </table>
          </p>
        )
      }
    ]
  },
  {
    title: 'Selfless',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You are altruistic and self-sacrificing, and put little importance on personal fame and
        wealth.
        <br />
        <br />
        You must make a self-control roll to put your needs – even survival – before those of
        someone else. A Selfless race will have a “hive mentality.”
      </p>
    )
  },
  {
    title: 'Semi-Upright',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You have a semi-upright posture, like a chimpanzee. You can stand up more-or-less
        comfortably, allowing you to use your forelimbs to bash enemies, hold babies, or even
        manipulate objects.
        <br />
        <br />
        You can manage a clumsy gait while upright (-40% to Move), but you must use all of your
        limbs to run at full Move. If you have DX 12 or more, you can carry a small object or two
        while walking.
      </p>
    )
  },
  {
    title: 'Sense of Duty',
    type: 'disadvantage',
    points: '-2 to -20points',
    description: (
      <p>
        You feel a strong sense of commitment toward a particular class of people. You will never
        betray them, abandon them when they’re in trouble, or let them suffer or go hungry if you
        can help. This is different from a Duty (p. 133), which is imposed upon you. A Sense of Duty
        always comes from within.
        <br />
        <br />
        If you are known to have a Sense of Duty, the GM will adjust the reactions of others by +2
        when rolling to see whether they trust you in a dangerous situation. However, if you go
        against your Sense of Duty by acting against the interests of those you are supposed to be
        looking out for, the GM will penalize you for bad roleplaying.
        <br />
        <br />
        The GM will assign a point value to your Sense of Duty based on the size of the group you
        feel compelled to aid:
      </p>
    ),
    subCategories: [
      {
        name: 'Individual (the President, your wingman, etc.)',
        points: '-2 points'
      },
      {
        name: 'Small Group (e.g., your close friends, adventuring companions, orsquad)',
        points: '-5 points'
      },
      {
        name: 'Large Group (e.g., a nation or religion, or everyone you know personally)',
        points: '-10 points'
      },
      {
        name: 'Entire Race (all humanity, all elves,etc.)',
        points: '-15 points'
      },
      {
        name: 'Every Living Being',
        points: '-20 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          You cannot claim points for a Sense of Duty toward Allies, Dependents, or Patrons. The
          point costs of these traits already take such a bond into account. You can take a Sense of
          Duty toward adventuring companions. If you do, you must share equipment with and render
          aid to the other members of your adventuring party, and go along with majority decisions.
          The GM might make this mandatory in games where the party needs to get along. This gives
          everyone a “free” 5 points to spend . . . but if you start backstabbing, running off on
          your own, etc., the GM is free to overrule your actions and point to these bonus points as
          the reason why.
        </i>
      </strong>
    )
  },
  {
    title: 'Short Attention Span',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You find it difficult to concentrate on a single task for longer than a few minutes.
        <br />
        <br />
        Make a self-control roll whenever you must maintain interest in something for an extended
        period of time, or whenever a distraction is offered. If you fail, you automatically fail at
        the task at hand.
        <br />
        <br />
        The GM might give you a small bonus to the self-control roll in situations where
        concentration is crucial, such as when your survival is at stake.
      </p>
    )
  },
  {
    title: 'Short Lifespan',
    type: 'disadvantage',
    points: '-10 points/level',
    description: (
      <p>
        Your lifespan is much shorter than the human norm.
        <br />
        <br />
        Each level of this disadvantage halves your lifespan (round down).
        <br />
        <br />
        This affects the age at which you reach maturity, the ages at which aging rolls begin and
        increase in frequency, and the interval between aging rolls; see the table (above right). No
        more than four levels are possible.
        <br />
        <br />
        Short Lifespan is often found in conjunction with Self-Destruct (p. 153).
      </p>
    )
  },
  {
    title: 'Shyness',
    type: 'disadvantage',
    points: '-5, -10, or -20 points',
    description: (
      <p>
        You are uncomfortable around strangers. Roleplay it! This disadvantage comes in three
        levels; you can buy it off one level at a time.
      </p>
    ),
    subCategories: [
      {
        name: 'Mild',
        text: (
          <p>
            You are uneasy with strangers, especially assertive or attractive ones.
            <br />
            <br />
            You have -1 on skills that require you to deal with people, including Acting, Carousing,
            Diplomacy, Fast-Talk, Intimidation, Leadership, Merchant, Panhandling, Performance,
            Politics, Public Speaking, Savoir-Faire, Sex Appeal, Streetwise, and Teaching.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Severe',
        text: (
          <p>
            You are very uncomfortable around strangers, and tend to be quiet even among friends. -2
            the skills listed above.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Crippling',
        text: (
          <p>
            You avoid strangers whenever possible. You may not learn the skills listed above at all,
            and are at -4 on default rolls on such skills.
          </p>
        ),
        points: '-20 points'
      }
    ]
  },
  {
    title: 'Slave Mentality',
    type: 'disadvantage',
    points: '-40 points',
    description: (
      <p>
        You have no initiative, and become confused and ineffectual without a “master” to give you
        orders. You must make an IQ roll at -8 before you can take any action that isn’t either
        obeying a direct order or part of an established routine. As well, you automatically fail
        any Will roll to assert yourself or resist social influence except in circumstances where
        the GM rules that success might be possible, in which case you roll at -6.
        <br />
        <br />
        This doesn’t necessarily imply low IQ or Will. You might be intelligent enough to obey the
        command, “Program the computer to detect quarks,” but if you were starving and found $10,
        you would have to roll vs. IQ-8 to decide to pick up the money and go buy food without being
        told to do so. Similarly, you might be strongwilled enough to make all your Fright Checks in
        the presence of terrifying monsters, yet roll at Will-6 to resist the unsubtle manipulations
        of an obvious con man.
        <br />
        <br />
        This disadvantage is rarely appropriate for PCs, and the GM may choose to forbid it
        entirely.
      </p>
    )
  },
  {
    title: 'Sleepwalker',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You walk in your sleep (“somnambulate”). This is merely annoying or embarrassing under most
        circumstances (unless you fall down the stairs), but it can be very dangerous to sleepwalk
        while encamped in hostile territory!
        <br />
        <br />
        If sleepwalking would matter during an adventure, the GM will make a self-control roll for
        you whenever you go to sleep. If you fail, you sleepwalk sometime during the night. You wake
        up after walking for 1d minutes, or if someone awakens you. The GM will make DX rolls to see
        if you trip while going down stairs or walking over rough ground – if this happens, you wake
        up suddenly and are mentally stunned.
        <br />
        <br />
        You are considered to be in a hypnagogic state while sleepwalking, and thus are very
        susceptible to telepathic influences. If you possess supernatural abilities, you might use
        these while sleepwalking (e.g., if you have Warp, you might “sleepwarp” instead).
      </p>
    )
  },
  {
    title: 'Sleepy',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        This is a racial trait. Members of the race need to sleep more than the human norm of 1/3 of
        the time. Point value depends on the fraction of the time they must spend asleep:
      </p>
    ),
    subCategories: [
      {
        text: (
          <table>
            <tr>
              <th>
                Time Spent
                <br />
                Asleep
              </th>
              <th>Cost</th>
            </tr>
            <tr>
              <td>1/2 of the day</td>
              <td>-8 points</td>
            </tr>
            <tr>
              <td>2/3 of the time</td>
              <td>-16 points</td>
            </tr>
            <tr>
              <td>3/4 of the day</td>
              <td>-20 points</td>
            </tr>
            <tr>
              <td>7/8 of the day</td>
              <td>-26 points</td>
            </tr>
          </table>
        )
      }
    ],
    extraText: (
      <strong>
        <i>
          The race’s precise schedule is a “special effect.” For instance, a race that sleeps 3/4 of
          the time might be awake and active for three days straight and then sleep for a full nine
          days. This trait can also represent hibernation. For instance, if a race is awake and
          active on a human schedule for six months, and then hibernates for two months straight,
          then on the average, that’s equivalent to sleeping 1/2 of the time.
        </i>
      </strong>
    )
  },
  {
    title: 'Slow Eater',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You spend a lot of your time eating. Each meal takes about two hours, as opposed to about
        1/2 hour for most humans. This reduces the time available for study, long tasks, and travel
        on foot by 4 1/2 hours per day.
      </p>
    )
  },
  {
    title: 'Slow Healing',
    type: 'disadvantage',
    points: '-5 points/level',
    description: (
      <p>
        Your body heals very slowly. Each level (maximum three levels) doubles the interval between
        HT rolls to regain lost HP: roll every two days for Slow Healing 1, every four days for Slow
        Healing 2, and every eight days for Slow Healing 3. Take Unhealing (p. 160) if you heal even
        more slowly. Each level also doubles the time allowed between Physician rolls when under the
        care of a competent physician (see Medical Care, p. 424). Normal humans may take no more
        than one level of Slow Healing.
      </p>
    )
  },
  {
    title: 'Slow Riser',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You are not a “morning person.” For one hour after you awaken from any sleep longer than a
        one-hour nap, you have -2 on all self-control rolls and -1 to IQ and IQ-based skills.
        <br />
        <br />
        Furthermore, whenever the GM assesses attribute penalties for missed sleep, you suffer an
        extra -1.
      </p>
    )
  },
  {
    title: 'Social Disease',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You have contracted a contagious, antibiotic-resistant bacteria, retrovirus, or similar
        disease. This is only transmitted by close, unprotected physical contact.
        <br />
        <br />
        Those who know about it react to you at -1 and automatically resist your seduction attempts.
        The disease isn’t fatal – at least not immediately – but may produce physical symptoms (left
        to the imagination of the player or GM).
      </p>
    )
  },
  {
    title: 'Social Stigma',
    type: 'disadvantage',
    points: '-5 to -20 points',
    description: (
      <p>
        You belong to a race, class, sex, or other group that your society deems inferior. To be
        worth points, this must be obvious from your physical appearance (a visible brand, tattoo,
        or magical mark counts), dress, manner, or speech; or easily learned by anyone who cares to
        check up on you (only valid in societies with free and easy access to information); or the
        result of public denouncement (e.g., by a powerful leader or media figure) that ensures that
        everyone you meet knows that you, personally, belong to the disdained group.
        <br />
        <br />A Social Stigma gives you a reaction penalty (-1 per -5 points of Social Stigma),
        restricts your social mobility, or both. Examples include:
      </p>
    ),
    subCategories: [
      {
        name: 'Criminal Record',
        text: (
          <p>
            You have been convicted of a crime that your society considers serious.
            <br />
            <br />
            You may be prohibited from legally acquiring certain items (e.g., weapons), taking
            certain kinds of employment, receiving security clearances, or even traveling outside
            your country.
            <br />
            <br />
            Many noncriminals who learn of your past react at -1; police, judges, vigilantes, and
            other law-and-order types usually react at -2.
            <br />
            <br />
            If you are also wanted, take an appropriate Enemy.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Disowned',
        text: (
          <p>
            Your family has publicly snubbed you.
            <br />
            <br />
            This is only worth points in settings where family ties play a significant social role,
            and never applies to those who voluntarily part ways with their family. This Social
            Stigma comes in two levels:
            <br />
            <br />
            You would normally be an heir in your culture, but someone else has been named in your
            stead. This is embarrassing, but you may still count yourself as part of the family.
            <br />
            <br />
            This gives -1 on reaction rolls.
            <br />
            <br />
            <strong>-5 points</strong>
            <br />
            <br />
            The head of your family – or your entire clan – has wholly and publicly disowned you.
            This gives -2 on reaction rolls.
            <br />
            <br />
            <strong>-10 points</strong>
          </p>
        )
      },
      {
        name: 'Excommunicated',
        text: (
          <p>
            Your church has cast you out. Followers of your faith react to you at -3.
            <br />
            <br />
            This is only a disadvantage if you are excommunicated by a powerful and widespread
            religion (most likely state-backed) that plays a significant role in day-to-day life.
          </p>
        ),
        points: '-5 points'
      },
      {
        text: (
          <p>
            If your religion has true supernatural power, and you are surrounded by an aura that
            conveys your shame to co-religionists, angels, and anyone else who would care, no matter
            how well you disguise yourself, your Social Stigma is worth twice as much.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Ignorant',
        text: (
          <p>
            You have not learned a skill required of all responsible adults in your society (that
            is, you have no points in the skill). Others look down upon you as a slacker or a fool.
            <br />
            <br />
            This gives -1 on reactions for each “expected” skill you lack, up to a maximum of four
            skills.
            <br />
            <br />
            This is only worth points in highly structured societies, or in primitive ones where
            individuals depend on one another for survival.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Minor',
        text: (
          <p>
            You are underage by your culture’s standards. You suffer -2 on reaction rolls whenever
            you try to deal with others as an adult; they might like you, but they do not fully
            respect you.
            <br />
            <br />
            You might also be barred from nightclubs, vehicle operation, war parties, guild
            membership, etc., depending on the culture and setting. You must buy off this trait when
            you reach “legal age” (usually 18) for your time and place.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Minoroty Group',
        text: (
          <p>
            You are a member of a minority that the dominant culture around you regards as
            “barbarians” or “inferior.” You get -2 on all reaction rolls made by anyone except your
            own kind.
            <br />
            <br />
            In an area, profession, or situation where your minority is especially rare, you get +2
            on reaction rolls made by your own kind.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Monster',
        text: (
          <p>
            You are a large carnivore, magical abomination, or other being that is hated or feared
            regardless of actual appearance or disposition. This gives you -3 on all reaction rolls,
            and you are liable to be hunted on sight.
            <br />
            <br />
            However, you get +3 to Intimidation rolls in situations where you have the upper hand
            (GM’s opinion). Examples: a bear or a vampire.
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Second-Class Citizen',
        text: (
          <p>
            You belong to a group that receives fewer rights and privileges than “full citizens.”
            This gives -1 on all reaction rolls except from others of your own kind.
            <br />
            <br />
            Examples: a woman in 19th-century America, or members of some religions.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Subjugated',
        text: (
          <p>
            You are a member of a slave nation or race. Within the overlords’ culture, you have no
            rights, and suffer the negative effects of Second- Class Citizen and Valuable Property.
            <br />
            <br />
            If you manage to escape to freedom, you acquire the entire overlord nation or race as an
            Enemy.
          </p>
        ),
        points: '-20 points'
      },
      {
        name: 'Uneducated',
        text: (
          <p>
            You are from a class, race, or subculture that lacks a cultural repository of wisdom,
            eschews formal schooling, and takes a dim view of activities that do not relate directly
            to survival or procreation.
            <br />
            <br />
            You receive -1 to reactions from more sophisticated folk in any situation where your
            lack of schooling would be apparent, and you may not start with any “booklearned” skills
            (GM’s discretion; most IQ/Hard skills qualify).
            <br />
            <br />
            You may buy off this trait once you have lived in “civilized” parts for long enough
            (GM’s decision).
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Valuable Property',
        text: (
          <p>
            Your society regards you as somebody’s property rather than as a “legal person.” This
            takes the form of limited freedom or lack of intellectual respect more than as a
            reaction modifier.
            <br />
            <br />
            Examples: a woman in 18th-century America or 16th-century Japan.
          </p>
        ),
        points: '-10 points'
      },
      {
        text: (
          <p>
            Social Stigmas must bind those who take them.
            <br />
            <br />
            For example, a medieval Japanese lady must pay for her 10-point bonus by giving up her
            freedom of movement in many cases, and must defer to older male relatives when they are
            present.
            <br />
            <br />A black slave in 19th-century America is allowed to learn very little and own
            almost no property, and has little freedom of any kind unless he manages to escape. (If
            he does escape, he has traded his Social Stigma for a powerful Enemy!)
          </p>
        )
      }
    ],
    extraText: (
      <strong>
        <i>
          It is possible to have multiple Social Stigmas, provided they do not significantly overlap
          (GM’s decision). For instance, a teenager who drops out of school and joins a street gang
          could believably end up with Minor, Uneducated, and Criminal Record.
        </i>
      </strong>
    )
  },
  {
    title: 'Space Sickness',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are miserable in free fall. You can never learn Free Fall skill; you must always roll at
        default. In addition, you are at -4 on your HT roll to avoid “space adaptation syndrome”
        (see p. 434) – and if you fail the first HT roll, the only way for you to recover is to
        return to normal gravity.
        <br />
        <br />
        This t\rait is only allowed in campaigns that feature regular space travel.
      </p>
    )
  },
  {
    title: 'Split Personality',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You have two or more distinct personalities, each with its own set of behavior patterns.
        They may interpret their memories differently, and even use different names.
        <br />
        <br />
        For each personality, select a “package” of mental disadvantages and up to five quirks. The
        GM may also permit variations in IQ, Perception, Will, and mental advantages, where these
        would make sense.
        <br />
        <br />
        Each package of mental traits must be worth the same number of points.
        <br />
        <br />
        When calculating the value of your character, count the “package price” once – not once for
        each personality. All your personalities have the same physical traits and skills (although
        some personalities might not use certain skills), and share any mental trait that is not
        part of one of these packages.
        <br />
        <br />
        You must make a self-control roll in any stressful situation (but no more than once per hour
        of game time). On a failure, one of your other personalities emerges, and you behave
        according to its mental disadvantages and quirks. If there are several possibilities, the GM
        should either choose a personality appropriate to the situation or roll randomly.
        <br />
        <br />
        All your personalities are somewhat shallow and affected, which gives -1 to reactions at all
        times.
        <br />
        <br />
        Those who witness a personality change will feel (possibly with justification) that you are
        a dangerous nutcase, and react at -3.
        <br />
        <br />
      </p>
    )
  },
  {
    title: 'Squeamish',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You dislike “yucky stuff”: little bugs and crawly things, blood and dead bodies, slime, etc.
        When exposed to such things, you react just as if you had a Phobia; see Phobias, p. 148.
        <br />
        <br />
        Note that you do not suffer from the standard fears of insects, reptiles, dirt, and the
        dead! What bothers you isn’t huge bugs or reptiles, ordinary “clean” dirt, and ghosts; it’s
        nasty creepy things, filth, and bits of grue.
      </p>
    )
  },
  {
    title: 'Stress Atavism',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You temporarily “regress” when frightened, angered, fatigued, or injured. Make a
        self-control roll in those situations. On a failure, you behave like an animal, acting on
        impulse and instinct.
        <br />
        <br />
        Once the stressful situation has passed, make a self-control roll every minute. If friends
        comfort you, roll at +2. If one of these people has Animal Empathy or Empathy, apply an
        additional +2. On a success, the attack ends and you return to normal.
        <br />
        <br />
        If you pass out from fatigue or injury before you succeed, you recover automatically when
        you wake up.
        <br />
        <br />
        Point value depends on the severity of the attacks:
      </p>
    ),
    subCategories: [
      {
        name: 'Mild',
        text: (
          <p>
            You have trouble speaking, and must roll vs. IQ to utter a sentence.
            <br />
            <br />
            You cannot operate complicated machinery, although you may attack wildly with weapons
            (-4 to hit). -
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Moderate',
        text: (
          <p>
            You suffer from all of the above problems, and have trouble understanding commands from
            others as well: roll vs. IQ to understand a sentence spoken by someone else.
            <br />
            <br />
            If you are attacked or challenged, you must make a self-control roll to avoid acting “on
            instinct.”
          </p>
        ),
        points: '-15 points'
      },
      {
        name: 'Severe',
        text: (
          <p>
            You cannot speak or understand others, or use tools (except possibly as clubs), and
            automatically act on instinct at all times. You behave like your primitive ancestors!
          </p>
        ),
        points: '-20 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Stress Atavism may result in additional troublesome behavior. Pick a suitable mental
          disadvantage, halve its value (drop all fractions), and add this point cost to the above
          costs before applying the self-control multiplier
        </i>
      </strong>
    )
  },
  {
    title: 'Stubbornness',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You always want your own way. Make yourself generally hard to get along with – roleplay it!
        Your friends may have to make a lot of Fast-Talk rolls to get you to go along with perfectly
        reasonable plans. Others react to you at -1.
      </p>
    )
  },
  {
    title: 'Stuttering',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You suffer from a stammer or other speech impediment.
        <br />
        <br />
        This gives -2 on any reaction roll where conversation is required, and -2 to Diplomacy,
        Fast-Talk, Performance, Public Speaking, Sex Appeal, and Singing.
        <br />
        <br />
        Certain occupations (interpreter, newsreader, etc.) are always closed to you.
      </p>
    )
  },
  {
    title: 'Supernatural Features',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You have disturbing features that mark you as a demon, vampire, or other supernatural being.
        You can pass for a normal mortal to casual observers, but closer inspection reveals that you
        are not quite right. This might give away your secret to the trained eye.
        <br />
        <br />
        Supernatural Features differ from Unnatural Features (p. 22) in that they aren’t usually
        obvious; they only become apparent under a specific set of circumstances. When they are
        noticed, though, they result in a reaction penalty. They also give those who know what to
        look for a bonus to any skill roll (against Hidden Lore, Occultism, etc.) made to identify
        your true nature.
        <br />
        <br />
        Supernatural Features can accompany appearance levels Hideous through Transcendent (see
        Physical Appearance, p. 21).
        <br />
        <br />
        You cannot get points for Supernatural Features if you are Monstrous or Horrific, however.
        If you look that scary, you’re not hiding any secrets!
      </p>
    ),
    subCategories: [
      {
        name: 'No Body Heat',
        text: (
          <p>
            You are cold to the touch. -1 on reaction rolls made by those who touch you, shake your
            hand, kiss you, etc.; +1 on all rolls to deduce your secret.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'No Reflection',
        text: (
          <p>
            You produce no reflection. You do not show up in mirrors, still water, and similar
            reflective surfaces, and technological devices such as cameras do not display your
            image.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'No Shadow',
        text: (
          <p>
            You produce no shadow, regardless of the intensity or direction of the light source. -2
            on reaction rolls made by those who notice; +2 on all rolls to deduce your secret.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Pallor',
        text: (
          <p>
            You look like a corpse, with bloodless skin, sunken eyes, etc. -2 on reaction rolls made
            by anyone who can see you without makeup in good light; +2 on all rolls to deduce your
            secret
          </p>
        ),
        points: '-10 points'
      }
    ]
  },
  {
    title: 'Supersensitive',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You are telepathically sensitive to the presence of others all the time. You experience a
        constant, irritating buzz of low-level psychic noise.
        <br />
        <br />
        This does not imply any kind of useful telepathic ability – the thoughts and emotions you
        receive remain just below the threshold of conscious understanding.
        <br />
        <br />
        If there are any sapient beings (IQ 6+) with 20 yards, you suffer -1 to DX and IQ. This
        becomes -2 for 10 or more people, -3 for 100 or more, -4 for 1,000 or more, and so on. If DX
        or IQ drops below half its original score because of this penalty, you collapse and can take
        no action until the “noise” goes away. Machine intelligences and individuals behind
        telepathic shielding (psionic, technological, or otherwise) do not bother you.
        <br />
        <br />
        There is one beneficial side effect to Supersensitive: the psychic noise you receive warns
        you if there are people within 20 yards, and the noise level tells you roughly how many. The
        noise is too diffuse to let you determine their locations, however.
      </p>
    )
  },
  {
    title: 'Susceptible',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You are extremely sensitive to a particular class of noxious items or substances; e.g.,
        disease or poison. You have a penalty to all HT rolls to resist the negative effects of
        these things. You do not suffer extra damage, however; for that, see Vulnerability (p. 161).
        <br />
        <br />
        If you are exposed to trace quantities of an item to which you are Susceptible – a dose so
        tiny that it would not affect most people – you must roll against HT+1, modified by your
        usual penalty for this disadvantage. If you fail, you suffer half the effects (fatigue,
        injury, attribute loss, period of incapacitation, etc.) you would suffer from a full dose.
        For instance, Susceptible to Poison would require a roll if you ingested highly diluted
        industrial waste in drinking water, while Susceptible to Disease would require a roll if you
        received a “live” vaccine (one that contains weakened microbes). Should there be any doubt
        as to exposure or effects, the GM’s decision is final.
        <br />
        <br />
        Point cost depends on the item’s rarity in the environment:
      </p>
    ),
    subCategories: [
      {
        name: 'Very Common (e.g., Disease, Poison):',
        points: '-4 points/-1 to HT rolls'
      },
      {
        name: 'Common (e.g., Bacteria, Gases):',
        points: '-2 points/-1 to HT rolls.'
      },
      {
        name: 'Occasional (e.g., Intestinal Disease, Ingested Poison):',
        points: '-1 point/-1 to HT rolls.'
      }
    ],
    extraText: (
      <strong>
        <i>
          You may not take more than five levels of Susceptible to a given item, or more than two
          separate Susceptible disadvantages, without the GM’s permission. You cannot take more
          levels of Susceptible than would reduce your effective HT to 3. For instance, if your HT
          is 7, you are limited to four levels of Susceptible. If you have any form of Resistant (p.
          80) that protects against a given item, you cannot also be Susceptible to that item. This
          trait can simulate many common health problems. Use Susceptible to Disease for a weak
          immune system, Susceptible to Ingested Poison for a tendency not to vomit up noxious
          substances (a “weak vomit reflex”), etc.
        </i>
      </strong>
    )
  },
  {
    title: 'Terminally Ill',
    type: 'disadvantage',
    points: '-50, -75 or -100 points',
    description: (
      <p>
        You are going to die . . . soon. This could be due to a nasty disease, a potent curse, an
        irremovable explosive device embedded in the base of your skull, or something else that will
        result in certain death. Point cost depends on how much time you have left:
      </p>
    ),
    subCategories: [
      {
        text: (
          <table>
            <tr>
              <th>Time Until Death</th>
              <th>Cost</th>
            </tr>
            <tr>
              <td>Up to one Month</td>
              <td>-100 points</td>
            </tr>
            <tr>
              <td>Up to one year</td>
              <td>-75 points</td>
            </tr>
            <tr>
              <td>Up to two years</td>
              <td>-50 points</td>
            </tr>
          </table>
        )
      }
    ],
    extraText: (
      <strong>
        <i>
          More than two years is worth nothing. Anyone might be hit by a truck in that time! If you
          acquire a “miracle cure,” upload yourself into a new body, or otherwise extend your life
          past your termination date during the course of the campaign, you must buy off this
          disadvantage. If you cannot afford to do so, the GM is free to make up the difference with
          new disadvantages related to your illness or its cure (e.g., Chronic Pain, Dependency,
          Mainten - ance, or Susceptible). If the GM is running a one-shot adventure or short
          campaign, he should disallow this disadvantage as meaningless.
        </i>
      </strong>
    )
  },
  {
    title: 'Time Sickness',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        Time travel, dimension travel, and teleportation make you ill. You cannot have psionic
        talents, magic spells, or technological skills that have to do with this kind of travel, nor
        can you learn the Body Sense skill. You must make a HT roll whenever you journey through
        time or across dimensions, and whenever you teleport.
        <br />
        <br />
        On a failure, you are effectively stunned for 1d hours (doubled on a critical failure!). On
        a success, you are only stunned for 1dx10 minutes.
        <br />
        <br />
        Timesickness is only allowed if dimension travel, teleportation, or time travel occur
        regularly in the campaign. The GM may wish to permit a variation on this trait in settings
        with faster-than-light hyperdrives (“Hypersickness”) or jump drives (“Jump Sickness”).
      </p>
    )
  },
  {
    title: 'Trademark',
    type: 'disadvantage',
    points: '-5 to -15 points',
    description: (
      <p>
        You have a special symbol – something that you leave at the scene of action, as a way of
        “signing your work.” The classic fictional example is the carved initial “Z” of Zorro.
      </p>
    ),
    subCategories: [
      {
        name: 'Simple',
        text: (
          <p>
            Your Trademark takes very little time to leave and cannot be used to trace your
            identity, but you absolutely must leave it.
            <br />
            <br />
            You cannot leave the scene until you do, even if your enemies are breaking down the
            door. A typical example is something left at the scene – a playing card, a small stuffed
            animal, etc. – as long as it can’t be traced and takes little time. -
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Complex',
        text: (
          <p>
            As above, but leaving your Trademark measurably increases your chances of being caught –
            initial carving, notes, traceable clues, etc. Leaving this sort of Trademark takes a
            minimum of 30 seconds.
            <br />
            <br />
            Anyone searching the scene receives +2 to Criminology and Forensics rolls to trace or
            identify you.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Elaborate',
        text: (
          <p>
            Your trademark is so elaborate – dousing the captured thugs with a certain cologne,
            painting the entire crime scene pink, writing a long poem to the police – that it
            virtually ensures your eventual capture.
            <br />
            <br />
            The GM may give investigators clues without a successful Criminology or Forensics roll!
          </p>
        ),
        points: '-15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          You may have only one Trademark. Multiple actions (e.g., binding your victims with purple
          phone wire, painting a frog on the wall, and wrecking every computer in the building)
          simply give you a higher level of Trademark – they are not multiple Trademarks. Note also
          that a Trademark is an action separate from capturing the crooks, committing the crime,
          etc. It’s the particular way that it is done. Destroying files on a computer is not a
          Trademark; trashing them by substituting a “7” for each “5” is.
        </i>
      </strong>
    )
  },
  {
    title: 'Trickster',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You crave the excitement of outwitting dangerous foes.
        <br />
        <br />
        This is not ordinary practical joking. Playing simple tricks on innocent or harmless folk is
        no fun at all – it has to be perilous! There may be no need for this at all (in fact, there
        probably isn’t), but you need the thrill of a battle of wits and dexterity.
        <br />
        <br />
        Make a self-control roll each day. If you fail, you must try to trick a dangerous subject: a
        skilled warrior, a dangerous monster, a whole group of reasonably competent opponents, etc.
        <br />
        <br />
        If you resist, you get a cumulative -1 per day to your self-control roll until you finally
        fail a roll!
      </p>
    )
  },
  {
    title: 'Truthfulness',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You hate to tell a lie – or you are just very bad at it. Make a self-control roll whenever
        you must keep silent about an uncomfortable truth (lying by omission).
        <br />
        <br />
        Roll at -5 if you actually have to tell a falsehood! If you fail, you blurt out the truth,
        or stumble so much that your lie is obvious.
        <br />
        <br />
        You have a permanent -5 to Fast Talk skill, and your Acting skill is at -5 when your purpose
        is to deceive.
      </p>
    )
  },
  {
    title: 'Uncontrollable Appetite',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        You consume something that you must obtain from other sapient beings through force or guile,
        and you have difficulty controlling your appetites. You must specify what it is you crave.
        This could be blood, “life force,” sex, or anything else the GM permits. Whenever you have
        an opportunity to indulge, you must make a self-control roll. Roll at -2 if someone
        deliberately tempts you, or if the item you feed on is available in large quantities within
        range of your senses. If feeding would restore lost HP, this roll is at -1 per missing HP.
        If you fail, you must feed. Make a second self-control roll to stop feeding once you have
        had your fill. If you fail, you go into frenzy and overindulge, which could kill your
        victim.
      </p>
    )
  },
  {
    title: 'Unfit',
    type: 'disadvantage',
    points: '-5 or -15 points',
    description: (
      <p>
        You have worse cardiovascular health than your HT alone would indicate. This comes in two
        levels:
      </p>
    ),
    subCategories: [
      {
        name: 'Unfit',
        text: (
          <p>
            You get -1 to all HT rolls to remain conscious, avoid death, resist disease or poison,
            etc.
            <br />
            <br />
            This does not reduce your HT attribute or HT-based skills! As well, you lose FP at twice
            the normal rate.
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Very Unfit',
        text: (
          <p>
            As above, but the penalty to HT rolls is -2. In addition, you recover FP at only half
            the normal rate.
            <br />
            <br />
            You may not purchase any level of Resistant (p. 80).
          </p>
        ),
        points: '-15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          In both cases, this disadvantage applies only to FP lost to exertion, heat, etc. It has no
          effect on FP “spent” to power psi or magic spells.
        </i>
      </strong>
    )
  },
  {
    title: 'Unhealing',
    type: 'disadvantage',
    points: '-20 or -30 points',
    description: (
      <p>
        In both cases, this disadvantage applies only to FP lost to exertion, heat, etc. It has no
        effect on FP “spent” to power psi or magic spells.
      </p>
    ),
    subCategories: [
      {
        name: 'Partial',
        text: (
          <p>
            You can heal naturally if a rare condition is met (e.g., when you are immersed in blood
            or bathed in lava).
            <br />
            <br />
            You can also heal yourself by stealing HP from others using Vampiric Bite (p. 96),
            magic, or psionics.
          </p>
        ),
        points: '-20 points'
      },
      {
        name: 'Total',
        text: <p>You can never heal naturally, and you cannot steal HP from others.</p>,
        points: '-30 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Depending on your nature, you might be able to regain lost HP and the use of crippled
          limbs unnaturally through surgery, repairs (if you’re a machine), or exotic means (healing
          spells, alchemy, psionics, etc.).
        </i>
      </strong>
    )
  },
  {
    title: 'Unique',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You exist only in one timeline. If a time paradox occurs, you have no memory of it. If it is
        particularly severe, you are likely to vanish.
        <br />
        <br />
        In most settings, you would be unaware of this danger until it happened . . . and then
        nobody would even remember you! Thus, this disadvantage is usually inappropriate for PCs.
        <br />
        <br />
        In an alternate-world campaign, being Unique means that you do not exist in any form in an
        alternate world, even one very much like your own.
        <br />
        <br />
        This deprives you of the chance to befriend “yourself” when you visit such a world.
        <br />
        <br />
        There is one benefit, though: you are effectively Zeroed (p. 100) at no point cost in any
        alternate world.
        <br />
        <br />
        Unique is only a disadvantage in campaigns in which paradoxes or changes in history –
        erasing past events or whole timelines – are possible.
        <br />
        <br />
        See Temporal Inertia (p. 93) for the opposite of this trait.
      </p>
    )
  },
  {
    title: 'Unluckiness',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You have rotten luck. Things go wrong for you – and usually at the worst possible time.
        <br />
        <br />
        Once per play session, the GM will arbitrarily and maliciously make something go wrong for
        you. You miss a vital die roll, or the enemy (against all odds) shows up at the worst
        possible time.
        <br />
        <br />
        If the plot of the adventure calls for something bad to happen to someone, it’s you. The GM
        may not kill you outright with “bad luck,” but anything less than that is fine. (For
        lethally bad luck, see Cursed, p. 129.)
        <br />
        <br />
        If you wish, you may specify a recurring “theme” for your Unluckiness – for instance, your
        weapons tend to break, you’re always 5 minutes late, or objects have a nasty habit of
        falling on your head. The GM should do his best to make your Unluckiness work this way.
        However, this is a characterization tool and not a hard-and-fast game mechanic.
        <br />
        <br />
        Bad luck can always manifest in other ways if the GM wants to keep you on your toes!
      </p>
    )
  },
  {
    title: 'Unusual Biochemistry',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You can subsist on human food, but your biochemistry is sufficiently different from that of
        humans that drugs intended for humans don’t work or have unpredictable effects. Drugs that
        are specific to your biochemistry work normally, but cost 10 times as much as usual.
        <br />
        <br />
        When you receive a drug intended for humans, roll 1d:
        <br />
        <strong>1-3</strong> - Normal Effect
        <br />
        <strong>4-5</strong> - Normal effect, plus an additional harmful effect of the GM’s
        choosing: lose 1d FP (sickness and nausea), suffer an amplified version of the drug’s usual
        negative side effects, etc.
        <br />
        <strong>6</strong> - No effect at all.
      </p>
    )
  },
  {
    title: 'Vow',
    type: 'disadvantage',
    points: '-5 to -15 points',
    description: (
      <p>
        You have sworn an oath to do (or not to do) something. Whatever the oath, you take it
        seriously; if you didn’t, it would not be a disadvantage. This trait is especially
        appropriate for knights, holy men, and fanatics. The point value of a Vow should be directly
        related to the inconvenience it causes you. The GM is the final judge.
        <br />
        <br />
        Some examples:
      </p>
    ),
    subCategories: [
      {
        name: 'Minor Vow',
        text: (
          <p>
            Silence during daylight hours; vegetarianism; chastity (yes, for game purposes, this is
            minor).
          </p>
        ),
        points: '-5 points'
      },
      {
        name: 'Major Vow',
        text: (
          <p>
            Use no edged weapons; keep silence at all times; never sleep indoors; own no more than
            your horse can carry.
          </p>
        ),
        points: '-10 points'
      },
      {
        name: 'Great Vow',
        text: (
          <p>
            Never refuse any request for aid; always fight with the wrong hand; hunt a given foe
            until you destroy him; challenge every knight you meet to combat.
          </p>
        ),
        points: '-15 points'
      }
    ],
    extraText: (
      <strong>
        <i>
          Note that if you could represent your Vow using another disadvantage, you only get points
          for one of the two disadvantages (your choice). No one may get points for Vow (Poverty)
          and Wealth (Dead Broke), Vow (Never kill) and Pacifism (Cannot Kill), etc. Many Vows end
          after a specified period of time. You must buy off such a Vow when it ends. Vows for a
          period of less than a year are frivolous! If you want to end a Vow before its stated time,
          the GM may exact a penalty; for instance, in a medieval world, you might have to undertake
          a quest by way of penance.
        </i>
      </strong>
    )
  },
  {
    title: 'Vulnerability',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You take extra damage from a particular attack form. Whenever this type of attack hits you,
        the GM applies a special wounding multiplier to damage that penetrates your DR.
        <br />
        <br />
        Regular wounding multipliers (for cutting, impaling, etc.) further multiply the damage.
        <br />
        <br />
        Use the categories under Limited Defenses (p. 46) to assess rarity. The GM has the final say
        on the rarity of a given attack form. You may not take more than two types of Vulnerability
        without GM permission.
        <br />
        <br />
        You cannot have Vulnerability to anything against which you have a specific defense:
        Resistant, Damage Resistance limited to work only against that attack form, etc.
        <br />
        <br />
        You can have both Vulnerability and Supernatural Durability (p. 89), but this reduces the
        utility of Supernatural Durability.
      </p>
    ),
    subCategories: [
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Fatigue Only</i>
          </p>
        ),
        text: (
          <p>
            You are vulnerable to an attack that drains FP instead of HP, or to some form of mundane
            fatigue loss (e.g., x2 FP from hot weather). -50%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Weak Bite',
    type: 'disadvantage',
    points: '-2 points',
    description: (
      <p>
        Your jaw is not structured to make full use of your strength while biting. Calculate biting
        damage normally, then apply an extra -2 per die. This trait is common for large herbivores
        (e.g., horses), uncommon for small herbivores and omnivores, and very rare for carnivores.
      </p>
    )
  },
  {
    title: 'Weakness',
    type: 'disadvantage',
    points: 'Variable',
    description: (
      <p>
        You suffer injury merely by being in the presence of a particular substance or condition
        (which cannot be a food item or something equally easy to avoid). This injury comes off your
        HP directly, regardless of your DR or defensive advantages.
        <br />
        <br />
        The more quickly you take damage, the more points your Weakness is worth:
      </p>
    ),
    subCategories: [
      {
        text: (
          <table>
            <tr>
              <th>
                Frequency of
                <br />
                Damage
              </th>
              <th>Value</th>
            </tr>
            <tr>
              <td>1d per minute</td>
              <td>-20 points</td>
            </tr>
            <tr>
              <td>1d per 5 minutes</td>
              <td>-10 points</td>
            </tr>
            <tr>
              <td>1d per 30 minutes</td>
              <td>-5 points</td>
            </tr>
          </table>
        )
      },
      {
        text: (
          <p>
            Multiply the base value to reflect the rarity of the damaging substance or condition:
          </p>
        )
      },
      {
        name: 'Rare (e.g., exotic radiation or minerals): x1/2.'
      },
      {
        name: 'Occasional (e.g., microwave radiation, intense normal cold, airborne pollen): x1.'
      },
      {
        name: 'Common (e.g., smoke, nearby magic, horses, loud noises): x2.'
      },
      {
        name: (
          <p>
            Very Common (e.g., sunlight, living plants): x3.
            <br />
            <br />
            You may not take more than two types of Weakness without GM permission.
          </p>
        )
      },
      {
        name: (
          <p>
            <strong className="limitation">Special Limitations</strong>
            <br />
            <br />
            <i>Fatigue Only</i>
          </p>
        ),
        text: <p>Your Weakness drains FP instead of HP. -50%.</p>
      },
      {
        name: 'Variable',
        text: (
          <p>
            Your Weakness is sensitive to received intensity. You may specify one relatively common
            class of barriers that halves the rate at which you take damage (e.g., heavy clothing or
            sunscreen, for sunlight).
            <br />
            <br />
            On the other hand, intense sources (GM’s decision) double the rate at which you suffer
            harm! -40%.
          </p>
        )
      }
    ]
  },
  {
    title: 'Weirdness Magnet',
    type: 'disadvantage',
    points: '-15 points',
    description: (
      <p>
        Strange and bizarre things happen to you with alarming frequency.
        <br />
        <br /> You are the one demons stop and chat with. Magic items with disturbing properties
        find their way to you. The only talking dog on 21st-century Earth comes to you with his
        problems.
        <br />
        <br />
        Dimensional gates sealed for centuries crack open just so that you can be bathed in the
        energies released . . . or perhaps the entities on the other side invite you to tea.
        <br />
        <br />
        Nothing lethal happens to you, at least not immediately, and occasionally some weirdness is
        beneficial. But most of the time it is terribly, terribly inconvenient.
        <br />
        <br />
        People who understand what a Weirdness Magnet is (and that you are one) react to you at -2.
        The exceptions are parapsychologists, fringe cultists, unhinged conspiracy theorists, and
        thrill-seekers, who follow you around!
      </p>
    )
  },
  {
    title: 'Workaholic',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You tend to drive yourself past your limits, and find it hard to relax and turn away from
        your work.
        <br />
        <br />
        You always work at least half again as long as a normal working day. This often results in
        missed sleep (see Missed Sleep, p. 426).
        <br />
        <br />
        Most people regard you with respect at first (+1 to reaction rolls), but you eventually
        suffer -1 or -2 to reactions – especially from friends and loved ones who rarely get to
        spend time with you.
      </p>
    )
  },
  {
    title: 'Wounded',
    type: 'disadvantage',
    points: '-5 points',
    description: (
      <p>
        You have an open wound that will not completely heal, for whatever reason (botched surgery,
        backfired healing spell, etc.). You are not missing any HP, but your wound serves as a path
        for infection and toxins, and may complicate new injuries.
        <br />
        <br />
        A foe who knows about your wound may deliberately target it, at -7 to hit. Such attacks have
        a wounding multiplier of 1.5 (that is, you take 50% more damage).
        <br />
        <br />
        Blood agents that reach your wound affect you as if carried on a weapon that broke your
        skin. You must carefully dress your wound each day (requires a First Aid or Physician roll)
        or get -3 to all HT rolls to resist infection in a plague-ridden area.
        <br />
        <br />
        At the GM’s option, you may acquire a wound like this in play due to torture, scalping, etc.
        Certain wounds have other effects; for instance, scalping would cost you a level of
        appearance.
      </p>
    )
  },
  {
    title: 'Xenophilia',
    type: 'disadvantage',
    points: '-10 points',
    description: (
      <p>
        You are instinctively fascinated and attracted by strangers and aliens, no matter how
        dangerous or frightening they appear to be.
        <br />
        <br />
        Make a self-control roll whenever you meet someone (or something) like this. If you fail,
        you assume that this person is interested in interacting with you socially.
        <br />
        <br />A xenophile finds himself offering drinks to glaring foreign soldiers, making passes
        at cute vampires, and shaking tentacles with Things Man Was Not Meant To Know while his
        companions are pointing weapons or running the other way . . .<br />
        <br />
        As partial compensation, you get a bonus to Fright Checks when meeting strange creatures
      </p>
    ),
    subCategories: [
      {
        text: (
          <table>
            <tr>
              <th>
                Self Control
                <br />
                Number
              </th>
              <th>Bonus</th>
            </tr>
            <tr>
              <td>6</td>
              <td>+4</td>
            </tr>
            <tr>
              <td>9</td>
              <td>+3</td>
            </tr>
            <tr>
              <td>12</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>15</td>
              <td>+1</td>
            </tr>
          </table>
        )
      }
    ],
    extraText: (
      <strong>
        <i>NPCs with this trait will react to exotic PCs at a similar bonus.</i>
      </strong>
    )
  }
];

export default DisadvantagesArray;
