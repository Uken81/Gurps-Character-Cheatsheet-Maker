const DisadvantagesArray = [{
        title: 'Absent-Mindedness',
        points: '-15 points',
        type: 'disadvantage',
        description: <p>You have trouble focusing on anything not of immediate interest. You have -5 on all IQ and IQ-based skill rolls, save those for the task you are currently concentrating on. If no engaging task or topic presents itself, your attention will drift to more interesting matters in five minutes, and you will ignore your immediate surroundings until something catches your attention and brings you back. Once adrift in your own thoughts, you must roll against Perception-5 in order to notice any event short of personal physical injury. <br/><br/>You may attempt to rivet your attention on a boring topic through sheer strength of will. To do so, make a Will-5 roll once every five minutes. “Boring topics” include small talk, repetitive manual tasks, guard duty, driving on an empty highway . . .  <br/><br/>Absent-minded individuals also tend to forget trivial tasks (like paying the bills) and items (like car keys and checkbooks). Whenever it becomes important that you have performed such a task or brought such an item, the GM should call for a roll against IQ-2. On a failure, this detail slipped your attention.</p>,
        extraText: <strong>Example: An absent-minded detective is in a shootout. He was involved in gunplay earlier in the day, in which he fired four rounds, so the GM calls for an IQ-2 roll. The detective fails the roll, and discovers too late that he forgot to reload his weapon, so his revolver has only two bullets left!</strong>
    },
    {
        title: 'Addiction',
        points: 'Variable',
        type: 'disadvantage',
        description: <p>You are addicted to a drug, which you must use daily or suffer withdrawal. The value of this disadvantage depends on the cost, effects, and legality of the drug:</p>,
        subCategories: [{
            
                name: 'Cost (per day)',
                text: <p><strong>Cheap</strong>(up to 0.1% of average starting wealth): -5 points. <br/> 
                <strong>Expensive</strong>(up to 0.5% of average starting wealth): -10 points.<br/>
                <strong>Very expensive</strong>(more than 0.5% of average starting wealth): -20 points.</p>
            },
            {
                name: 'Effects',
                text: <p><strong>Effects Minimal or stimulating:</strong>+0 points.<br/> 
                <strong>Incapacitating or hallucinogenic:</strong>-10 points.<br/>
                <strong>Highly addictive (-5 on withdrawal roll):</strong>-5 points.<br/>
                <strong>Totally addictive (-10 on withdrawal roll):</strong>-10 points.</p>,
                points: ''
            },
            {
                name: 'Legality',
                text: <p><strong>Illegal:</strong>+0 points.<br/><strong>Legal:</strong>+5 points.</p>,
                points: ''
            },
            {
                name: 'Examples:',
                text: <p><i>Tobacco is cheap, highly addictive, and legal; a chain-smoker has a -5-point Addiction. Heroin is very expensive, incapacitating, totally addictive, and illegal; a heroin addict has a -40-point Addiction.</i></p>,
                points: ''
            }
        ],
        extraText: <p><strong>Non-Chemical Addictions:</strong><br/>You can take Addiction to an activity instead of a drug – for instance, telepathic contact or spending time in virtual reality. If this costs money, price the Addiction based on its daily cost. If it is free (e.g., telepathic contact), treat it as “Cheap” if it you can do it almost anywhere (telepathic contact with anyone) or as “Expensive” if restrictive conditions apply (telepathic contact with one specific person). Such Addictions almost always cause psychological dependency (see Withdrawal, below).<br/><br/>
        <strong>Effects of Drugs:</strong><br/>A stimulating drug leaves you feeling energized . . . until it wears off. Then you are depressed and irritable. An incapacitating drug renders you unconscious (or just blissfully, uselessly drowsy) for about two hours. A hallucinogenic drug renders you useless for work or combat, though you might be active and talkative. Some drugs (e.g., tobacco) have none of these effects, while others have unique effects. Side effects are also possible. For detailed rules, see Addictive Drugs (p. 440).<br/><br/>
        <strong>Withdrawal:</strong><br/>Sometimes, voluntarily or otherwise, you must try to give up your Addiction. Addiction to a drug that causes psychological dependency is a mental disadvantage; withdrawal from such a drug requires a series of Will rolls, and may result in mental problems. Addiction to a drug that induces physiological dependency is a physical disadvantage; withdrawal is a function of your HT, and may cause physical injury. For details, see Drug Withdrawal (p. 440).<br/> Should you successfully withdraw from an Addiction, you must immediately buy off this disadvantage.
        <strong>Minor Addictions</strong>For an Addiction worth only -5 points, the GM may rule that the expense, stigma, and detrimental long-term effects of use are the whole of the disadvantage, and waive the usual withdrawal rules. This is appropriate for such drugs as tobacco and caffeine. If forced to go without, you must make a Will or HT roll as usual, but the only effects on a failure are general anxiety, irritability, or restlessness. <br />
        This manifests as a temporary -1 to DX, IQ, self-control rolls, or reaction rolls not as insanity or injury. Successive failures prolong the duration of the effects; they do not increase the size of the penalty. If you can make 14 successful rolls in succession, you must buy off your Addiction. <br />
        It is also possible to create a 0- point Addiction using these rules. Such Addictions are always Minor Addictions, and you may take them as -1-point quirks (see Quirks, p. 162).</p>
    },
    {
        title: 'Alcoholism',
        points: '-15 or -20 points',
        type: 'disadvantage',
        description: <p>You are an alcohol addict. Alcoholism uses the Addiction rules (above). <br />
        It is cheap, incapacitating, and usually legal, so it would normally be a -10-point Addiction. But it is also insidious; therefore, it is worth -15 points or -20 points if it is illegal. <br />
        Most of the time, you may confine your drinking to the evenings, and therefore function normally (for game purposes). However, any time you are in the presence of alcohol, you must roll vs. Will to avoid partaking. A failed roll means you go on a binge lasting 2d hours, followed by a hangover; see Drinking and Intoxication (p. 439). Alcoholics on a binge are characterized by sudden mood swings from extreme friendliness to extreme hostility and may attack friends, talk too freely, or make other mistakes. <br />
        The other drawback of Alcoholism is that it is hard to get rid of. Should you manage to withdraw, you no longer need to drink daily . . . but you must still make a Will+4 roll whenever you are in the presence of alcohol. A failed roll does not reinstate the addiction, but does set off a binge. (Three binges in a week will reinstate the addiction.) Thus, there is no normal way to buy off this disadvantage. <br />
        </p>,
        extraText: <p>Continued Alcoholism will steal your abilities. You must roll yearly against HT+2 until you withdraw. Failure means you lose a level from one of your four basic attributes roll randomly to determine which.</p>
    },

]

export default DisadvantagesArray;