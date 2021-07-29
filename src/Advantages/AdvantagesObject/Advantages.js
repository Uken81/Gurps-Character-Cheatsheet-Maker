const AdvantagesListArray = [
     {
        title: "Absolute Direction",
        points: "5 or 10 points",
        description: "You have an excellent sense of direction.This ability comes in two levels:",
        subCategories: [{
                name: "Absolute Direction",
                text: "You always know which way is north, and you can always retrace a path you have followed within the past month, no matter how faint or confusing. This ability does not work in environments such as interstellar space or the limbo of the astral plane, but it does work underground, underwater, and on other planets. This gives +3 to Body Sense and Navigation (Air, Land, or Sea).<br> (Note: The navigational sense that guides migratory creatures to their destination is too crude to qualify; treat it as a 0-point feature.)",
                points: "5 points"
            },
            {
                name: "3D Spatial Sense",
                text: "As above, but works in three dimensions. This ability is useful in deep space – although it does not help you if you travel across dimensions. You get the skill bonuses to Piloting and +2 to Aerobatics, Free Fall, and Navigation (Hyperspace or Space).",
                points: "10 points"
            }
        ]
    },
    
     {
        title: "Absolute Timing",
        points: "2 or 5 points",
        description: "You have an accurate mental clock. This ability comes in two levels, both of which are somewhat cinematic:",
        subCategories: [{
                name: "Absolute Timing",
                text: "You always know what time it is, with a precision equal to the best personal timepieces widely available in your culture (but never better than a few seconds). You can measure elapsed time with equal accuracy. Neither changes of time zone nor sleep interferes with this ability, and you can wake up at a predetermined time if you choose. Being knocked unconscious, hypnotized, etc. may prevent this advantage from working, and time travel will confuse you until you find out what the “new” time is. ",
                points: "2 points"
            },
            {
                name: "Chronolocation",
                text: "As above, but time travel does not interfere – you alwaysknow what time it is in an absolute sense. Note that things like Daylight Savings Time and calendar reform can still confuse you! When you travel in time, the GM may tell you, “You have gone back exactly 92,876.3 days,” and const you – or your character – deal with questions like, “What about leap year?",
                points: "5 points"
            }
        ]
    },
    
    {
        title: "Acute Senses",
        points: "2 points/level",
        description: "You have superior senses. Each Acute Sense is a separate advantage that gives +1 per level to all Sense rolls (p. 358) you make – or the GM makes for you – using that one sense. Acute Hearing gives you a bonus to hear something, or to notice a sound (for instance, someone taking the safety off a gun in the dark).",
        subCategories: [{
            name: "Acute Taste and Smell",
            text: "Gives you a bonus to notice a taste or smell (for instance, poison in your drink).",
            points: "2 points/level"
        }, {
            name: "Acute Touch",
            text: "Gives you a bonus to detect something by touch (for instance, a concealed weapon when patting down a suspect).",
            points: "2 points/level"
        }, {
            name: "Acute Vision",
            text: "Gives you a bonus to spot things visually, and whenever you do a visual search (for instance, looking for traps or footprints).",
            points: "2 points/level"
        }],
        extraText: "With the GM’s permission, you may also buy Acute Sense advantages for specialized senses such as Scanning Sense and Vibration Sense. You cannot usually buy Acute Senses in play – raise your Perception instead. However, if you lose a sense, the GM may allow you to spend earned points on other Acute Senses to compensate. For instance, if you are blinded, you might acquire Acute Hearing."
    }
]

export default AdvantagesListArray;
