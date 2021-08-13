const AdvantagesArray = [
     {
        title: "Absolute Direction",
        type: "advantage",
        points: "5 or 10 points",
        description: <p>You have an excellent sense of direction.This ability comes in two levels:</p>,
        subCategories: [{
                name: "Absolute Direction",
                text: <p>You always know which way is north, and you can always retrace a path you have followed within the past month, no matter how faint or confusing. This ability does not work in environments such as interstellar space or the limbo of the astral plane, but it does work underground, underwater, and on other planets. This gives +3 to Body Sense and Navigation (Air, Land, or Sea).<br/><br/>(<strong>Note:</strong> <i>The navigational sense that guides migratory creatures to their destination is too crude to qualify; treat it as a 0-point feature.)</i></p>,
                points: "5 points"
            },
            {
                name: "3D Spatial Sense",
                text: <p>As above, but works in three dimensions. This ability is useful in deep space – although it does not help you if you travel across dimensions.<br/>You get the skill bonuses to Piloting and +2 to Aerobatics, Free Fall, and Navigation (Hyperspace or Space).</p>,
                points: "10 points"
            }
        ]
    },
    
     {
        title: "Absolute Timing",
        type: "advantage",
        points: "2 or 5 points",
        description: <p>You have an accurate mental clock. This ability comes in two levels, both of which are somewhat cinematic:</p>,
        subCategories: [{
                name: "Absolute Timing",
                text: <p>You always know what time it is, with a precision equal to the best personal timepieces widely available in your culture (but never better than a few seconds). You can measure elapsed time with equal accuracy.<br/>Neither changes of time zone nor sleep interferes with this ability, and you can wake up at a predetermined time if you choose. Being knocked unconscious, hypnotized, etc. may prevent this advantage from working, and time travel will confuse you until you find out what the “new” time is.</p>,
                points: "2 points"
            },
            {
                name: "Chronolocation",
                text: <p>As above, but time travel does not interfere – you alwaysknow what time it is in an absolute sense. Note that things like Daylight Savings Time and calendar reform can still confuse you!<br/>When you travel in time, the GM may tell you, “You have gone back exactly 92,876.3 days,” and let you or your character – deal with questions like, “What about leap year?</p>,
                points: "5 points"
            }
        ]
    },
    
    {
        title: "Acute Senses",
        type: "advantage",
        points: "2 points/level",
        description: <p>You have superior senses. Each Acute Sense is a separate advantage that gives +1 per level to all Sense rolls (p. 358) you make – or the GM makes for you – using that one sense. Acute Hearing gives you a bonus to hear something, or to notice a sound (for instance, someone taking the safety off a gun in the dark).</p>,
        subCategories: [{
            name: "Acute Taste and Smell",
            text: <p>Gives you a bonus to notice a taste or smell (for instance, poison in your drink).</p>,
            points: "2 points/level"
        }, {
            name: "Acute Touch",
            text: <p>Gives you a bonus to detect something by touch (for instance, a concealed weapon when patting down a suspect).</p>,
            points: "2 points/level"
        }, {
            name: "Acute Vision",
            text: <p>Gives you a bonus to spot things visually, and whenever you do a visual search (for instance, looking for traps or footprints).</p>,
            points: "2 points/level"
        }],
        extraText: <strong><i>With the GM’s permission, you may also buy Acute Sense advantages for specialized senses such as Scanning Sense and Vibration Sense. You cannot usually buy Acute Senses in play – raise your Perception instead. However, if you lose a sense, the GM may allow you to spend earned points on other Acute Senses to compensate. For instance, if you are blinded, you might acquire Acute Hearing.</i></strong>
    }
]

export default AdvantagesArray;
