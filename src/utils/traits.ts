import { shuffle } from "./helpers";
import { Trait } from "./types";

const MULTIPLIER = {
  POSITIVE: 0.025,
  NEGATIVE: -0.025,
  ULTRA: 0.25,
};
const PERCENTAGE = {
  POSITIVE: 0.1,
  NEGATIVE: -0.1,
  GOOD: 0.85,
  BAD: 0.15,
};
const RANGE = {
  MOST: 5,
  MORE: 3,
  SOME: 1,
  BIT: -1,
  LESS: -3,
  LEAST: -5,
};
const D6 = {
  ADD: 1,
  SUBTRACT: -1,
};

const TRAITS: Trait[] = [
  {
    keyword: "ADAPTABLE",
    title: "Adaptable",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.MORE,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
        "stats.general.stagePresence": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "ADVENTUROUS",
    title: "Adventurous",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MOST,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "AMBITIOUS",
    title: "Ambitious",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.MOST,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "ANDROGYNOUS",
    title: "Androgynous",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.SOME,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
        "stats.multiplier.likeability": MULTIPLIER.NEGATIVE,
        "stats.general.stagePresence": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "ANTAGONISTIC",
    title: "Antagonistic",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MORE,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "ANXIOUS",
    title: "Anxious",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.MORE,
        "stats.multiplier.likeability": MULTIPLIER.NEGATIVE,
        "stats.general.stagePresence": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "ASSERTIVE",
    title: "Assertive",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MORE,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "BAD_KNEE",
    title: "Bad knee",
    description: "",
    type: "physical",
    group: "health",
    setup: {
      update: {
        "stats.skills.stamina": PERCENTAGE.BAD,
        "stats.multiplier.likeability": MULTIPLIER.NEGATIVE,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "BAREFOOT",
    title: "Barefoot",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.SOME,
        "stats.general.visual": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "BATTLING_CANCER",
    title: "Battling cancer",
    description: "",
    type: "secret",
    group: "health",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LESS,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "BLUSHING",
    title: "Blushing",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.BIT,
        "stats.personality.gentleness": RANGE.SOME,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
        "stats.general.visual": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "BODY_ODOR",
    title: "Body odor",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.BIT,
        "stats.multiplier.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "BOOMING VOICE",
    title: "Booming voice",
    description: "",
    type: "feature",
    group: "voice",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.BIT,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
        "stats.general.rhetoric": D6.ADD,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "BORING",
    title: "Boring",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MORE,
        "stats.multiplier.likeability": MULTIPLIER.NEGATIVE,
        "stats.multiplier.notability": MULTIPLIER.NEGATIVE,
        "stats.general.charisma": D6.ADD,
        "stats.general.stagePresence": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "BROAD_SHOULDERS",
    title: "Broad shoulders",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.BIT,
        "stats.general.visual": D6.ADD,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "BUBBLE GUM",
    title: "Bubble gum",
    description: "",
    type: "personality",
    group: "identity",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.SOME,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
        "stats.general.stagePresence": D6.ADD,
        "stats.general.leadership": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "BULLY",
    title: "Bully",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.LEAST,
        "stats.multiplier.likeability": MULTIPLIER.NEGATIVE,
        "stats.general.leadership": D6.ADD,
        "stats.general.charisma": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CALM",
    title: "Calm",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MORE,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
        "stats.multiplier.notability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CHAMELEON",
    title: "Chameleon",
    description: "",
    type: "special",
    group: "special",
    setup: {
      update: {
        "stats.skills.learning": PERCENTAGE.GOOD,
        "stats.skills.memory": PERCENTAGE.GOOD,
        "stats.skills.style": PERCENTAGE.GOOD,
        "stats.skills.sanity": D6.SUBTRACT,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
        "stats.general.stagePresence": D6.ADD,
        "stats.general.leadership": D6.ADD,
        "stats.general.rhetoric": D6.SUBTRACT,
        "stats.general.visual": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CHOREOGRAPHER",
    title: "Choreographer",
    description: "",
    type: "status",
    group: "history",
    setup: {
      update: {
        "stats.skills.learning": PERCENTAGE.GOOD,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
        "stats.general.stagePresence": D6.ADD,
        "stats.stage.dance": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CLUMSY",
    title: "Clumsy",
    description: "",
    type: "personality",
    group: "identity",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.BIT,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "COCKY",
    title: "Cocky",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.LESS,
        "stats.multiplier.likeability": MULTIPLIER.NEGATIVE,
        "stats.general.stagePresence": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "COMPLAINER",
    title: "Complainer",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.happiness": RANGE.LESS,
        "stats.multiplier.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CONSERVATIVE",
    title: "Conservative",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.LEAST,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
        "stats.personality.happiness": RANGE.BIT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CONVENTIONAL",
    title: "Conventional",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.LESS,
        "stats.general.stagePresence": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "COOPERATIVE",
    title: "Cooperative",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MORE,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "COUNTRY_ACCENT",
    title: "Country Accent",
    description: "",
    type: "feature",
    group: "voice",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.BIT,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CRAZY_LAUGHTER",
    title: "Crazy laughter",
    description: "",
    type: "feature",
    group: "habit",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.SOME,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CREATIVE",
    title: "Creative",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MORE,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
        "stats.general.charisma": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CREEPY_SMILE",
    title: "Creepy smile",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.notability": MULTIPLIER.POSITIVE,
        "stats.general.visual": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CROOKED_NOSE",
    title: "Crooked nose",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.BIT,
        "stats.general.visual": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CROOKED_TEETH",
    title: "Crooked teeth",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.BIT,
        "state.general.visual": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CURIOUS",
    title: "Curious",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MORE,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CUTE",
    title: "Cute",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.SOME,
        "stats.multiplier.likeability": MULTIPLIER.POSITIVE,
        "stats.multiplier.notability": MULTIPLIER.POSITIVE,
        "stats.general.visual": D6.SUBTRACT,
        "stats.general.stagePresence": D6.ADD,
        "stats.general.leadership": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "CYNICAL",
    title: "Cynical",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.LEAST,
        "stats.multiplier.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "DANCE_COMPETITION_PARTICIPANT",
    title: "Dance competition participant",
    description: "",
    type: "activity",
    group: "history",
    setup: {
      update: {
        "stats.skills.learning": PERCENTAGE.POSITIVE,
        "stats.skills.sanity": PERCENTAGE.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "DANCE_COMPETITION_WINNER",
    title: "Dance competition winner",
    description: "",
    type: "activity",
    group: "history",
    setup: {
      update: {
        "stats.skills.learning": PERCENTAGE.POSITIVE,
        "stats.skills.sanity": PERCENTAGE.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "DECEITFUL",
    title: "Deceitful",
    description: "Tends to mislead others",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "DEEP_VOICE",
    title: "Deep voice",
    description: "",
    type: "feature",
    group: "voice",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "DELUSIONAL",
    title: "Delusional",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "DILIGENT",
    title: "Diligent",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "DISORGANIZED",
    title: "Disorganized",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.LEAST,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "DOWN-TO-EARTH",
    title: "Down-to-earth",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "DOWNER",
    title: "Downer",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.TBD": 0,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "ELOQUENT",
    title: "Eloquent",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "EMOTIONAL EYES",
    title: "Emotional eyes",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "ENVIOUS",
    title: "Envious",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "EXTRA FINGER",
    title: "Extra finger",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.SOME,
        "stats.personality.extroversion": RANGE.BIT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "EXTRA TOE",
    title: "Extra toe",
    description: "",
    type: "secret",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "EXTRAVAGANT",
    title: "Extravagant",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "EXTROVERTED",
    title: "Extroverted",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MOST,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FAIR",
    title: "Fair",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MORE,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FAMOUS",
    title: "Famous",
    description: "",
    type: "feature",
    group: "identity",
    setup: {
      update: {
        "stats.multipliers.notability": MULTIPLIER.ULTRA,
        "stats.personality.extroversion": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FASHIONABLE",
    title: "Fashionable",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FEARLESS",
    title: "Fearless",
    description: "",
    type: "personality",
    group: "identity",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MORE,
        "stats.personality.extroversion": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FEMININE",
    title: "Feminine",
    description: "",
    type: "personality",
    group: "identity",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MORE,
        "stats.personality.sensitivity": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FLEXIBLE",
    title: "Flexible",
    description: "",
    type: "physical",
    group: "appearance",
    setup: {
      update: {
        "stats.skills.stamina": PERCENTAGE.GOOD,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FLIRTATIOUS",
    title: "Flirtatious",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MOST,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.personality.happiness": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FOCUSED",
    title: "Focused",
    description: "",
    type: "personality",
    group: "identity",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.MORE,
        "stats.multipliers.notability": MULTIPLIER.NEGATIVE,
        "stats.personality.happiness": RANGE.BIT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FOOLISH",
    title: "Foolish",
    description: "",
    type: "personality",
    group: "identity",
    setup: {
      update: {
        "stats.personality.happiness": RANGE.BIT,
        "stats.multipliers.notability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FORCEFUL_GESTURES",
    title: "Forceful gestures",
    description: "",
    type: "feature",
    group: "habit",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.SOME,
        "stats.personality.discipline": RANGE.BIT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FORGIVING",
    title: "Forgiving",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MORE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "FUN-LOVING",
    title: "Fun-loving",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MOST,
        "stats.personality.happiness": RANGE.MOST,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "GENTLE",
    title: "Gentle",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MOST,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "GENTLE_SMILE",
    title: "Gentle smile",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.SOME,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
        "stats.general.visual": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "GIGGLES A LOT",
    title: "Giggles a lot",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.SOME,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.multipliers.happiness": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "GREEDY",
    title: "Greedy",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "HARD-WORKING",
    title: "Hard-working",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.MORE,
        "stats.multipliers.luck": MULTIPLIER.ULTRA,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "HARDENED",
    title: "Hardened",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.LEAST,
        "stats.personality.happiness": RANGE.LESS,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "HATES_EVERYTHING",
    title: "Hates everything",
    description: "",
    type: "personality",
    group: "mood",
    setup: {
      update: {
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
        "stats.personality.happiness": RANGE.LEAST,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "HONEST",
    title: "Honest",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "HONORABLE",
    title: "Honorable",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "HUMBLE",
    title: "Humble",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "HYPOCRITICAL",
    title: "Hypocritical",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LEAST,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "IMPULSIVE",
    title: "Impulsive",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.LEAST,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "INNOCENT",
    title: "Innocent",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MOST,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "INSECURE",
    title: "Insecure",
    description: "",
    type: "personality",
    group: "identity",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.MORE,
        "stats.personality.happiness": RANGE.LESS,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "INTELLIGENT",
    title: "Intelligent",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.MORE,
        "stats.multipliers.luck": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "INTENSE",
    title: "Intense",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MORE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "INTROVERTED",
    title: "Introverted",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.LEAST,
        "stats.general.stagePresence": D6.SUBTRACT,
        "stats.general.charisma": D6.SUBTRACT,
        "stats.skills.memory": PERCENTAGE.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "IRRESPONSIBLE",
    title: "Irresponsible",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.LEAST,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "JEALOUS",
    title: "Jealous",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "JIGGLING LEGS",
    title: "Jiggling legs",
    description: "",
    type: "feature",
    group: "habit",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "JUST",
    title: "Just",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MOST,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "KILLED SOMEONE IN A CAR ACCIDENT",
    title: "Killed someone in a car accident",
    description: "",
    type: "secret",
    group: "history",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LEAST,
        "stats.personality.happiness": RANGE.LESS,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "KILLER SMILE",
    title: "Killer smile",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.general.visual": D6.ADD,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "KIND",
    title: "Kind",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MOST,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "LAZY",
    title: "Lazy",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.LEAST,
        "stats.skill.learning": PERCENTAGE.NEGATIVE,
        "stats.skill.memory": PERCENTAGE.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "LOST FRIEND IN THE PAST",
    title: "Lost friend in the past",
    description: "",
    type: "history",
    group: "history",
    setup: {
      update: {
        "stats.personality.happiness": RANGE.LESS,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "LYRICIST",
    title: "Lyricist",
    description: "",
    type: "status",
    group: "history",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MORE,
        "stats.stage.rap": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "MACHO",
    title: "Macho",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.LEAST,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.general.visual": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "MANIPULATIVE",
    title: "Manipulative",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LEAST,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "MODEST",
    title: "Modest",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
        "stats.personality.happiness": RANGE.SOME,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "MUMBLES A LOT",
    title: "Mumbles a lot",
    description: "",
    type: "feature",
    group: "habit",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.BIT,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.general.visual": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "NARROW-MINDED",
    title: "Narrow-minded",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.LEAST,
        "stats.skills.learning": PERCENTAGE.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "NON-BINARY",
    title: "Non-binary",
    description: "",
    type: "physical",
    group: "identity",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.SOME,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.general.leadership": D6.SUBTRACT,
        "stats.general.visual": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "NURTURING",
    title: "Nurturing",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MOST,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "OBNOXIOUS",
    title: "Obnoxious",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.general.charisma": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "OBSESSIVE",
    title: "Obsessive",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.LESS,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "OPENLY BI",
    title: "Openly bi",
    description: "",
    type: "personality",
    group: "sexuality",
    setup: {
      update: {
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.multipliers.style": MULTIPLIER.POSITIVE,
        "stats.general.charisma": D6.ADD,
        "stats.personality.happiness": RANGE.MOST,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "OPENLY GAY",
    title: "Openly gay",
    description: "",
    type: "personality",
    group: "sexuality",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MORE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.personality.curiosity": RANGE.SOME,
        "stats.personality.happiness": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "OPENLY TRANS",
    title: "Openly trans",
    description: "",
    type: "personality",
    group: "identity",
    setup: {
      update: {
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.personality.happiness": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "OPTIMIST",
    title: "Optimist",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.happiness": RANGE.MOST,
        "stats.general.charisma": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "ORGANIZED",
    title: "Organized",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "ORPHAN",
    title: "Orphan",
    description: "",
    type: "family",
    group: "history",
    setup: {
      update: {
        "stats.personality.happiness": RANGE.LESS,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PAINTED_FINGERNAILS",
    title: "Painted fingernails",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PAST_HEART_SURGERY",
    title: "Past heart surgery",
    description: "",
    type: "secret",
    group: "history",
    setup: {
      update: {
        "stats.personality.introversion": RANGE.BIT,
        "stats.personality.sincerity": RANGE.BIT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PATIENT",
    title: "Patient",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MORE,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PERFECT TEETH",
    title: "Perfect teeth",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.SOME,
        "stats.general.visual": D6.ADD,
        "stats.general.rhetoric": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PERFECTIONIST",
    title: "Perfectionist",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.MOST,
        "stats.general.leadership": D6.ADD,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PESSIMIST",
    title: "Pessimist",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.personality.happiness": RANGE.LESS,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "POKER_FACE",
    title: "Poker face",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.BIT,
        "stats.general.leadership": D6.SUBTRACT,
        "stats.general.charisma": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "POOR_HYGIENE",
    title: "Poor hygiene",
    description: "",
    type: "feature",
    group: "health",
    setup: {
      update: {
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "POORLY DRESSED",
    title: "Poorly dressed",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.BIT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PREJUDICED",
    title: "Prejudiced",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.personality.happiness": RANGE.LESS,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PRETENTIOUS",
    title: "Pretentious",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LESS,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PROMISCUOUS",
    title: "Promiscuous",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.personality.happiness": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PROSAIC",
    title: "Prosaic",
    description: "Lacking poetic beauty",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.LEAST,
        "stats.general.charisma": D6.SUBTRACT,
        "stats.general.rhetoric": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "PROUD",
    title: "Proud",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.happiness": RANGE.MORE,
        "stats.personality.gentleness": RANGE.BIT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "RECKLESS",
    title: "Reckless",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MORE,
        "stats.personality.curiosity": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "REGIONAL_DIALECT",
    title: "Regional Dialect",
    description: "",
    type: "feature",
    group: "voice",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.BIT,
        "stats.general.charisma": D6.ADD,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "RELAXED",
    title: "Relaxed",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.LEAST,
        "stats.personality.happiness": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "RESERVED",
    title: "Reserved",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MORE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "ROUGH",
    title: "Rough",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SAD",
    title: "Sad",
    description: "",
    type: "personality",
    group: "health",
    setup: {
      update: {
        "stats.personality.happiness": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "TOO_MANY_SLANGS",
    title: "Too many slangs",
    description: "",
    type: "feature",
    group: "habit",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.BIT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SECRET_DRUG_ADDICTION",
    title: "Secret drug addiction",
    description: "",
    type: "secret",
    group: "health",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LESS,
        "stats.general.stamina": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SECRETLY_ADULT_CONTENT_ACTOR",
    title: "Secretly adult content actor",
    description: "",
    type: "secret",
    group: "scandal",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LESS,
        "stats.personality.extroversion": RANGE.MORE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.multipliers.style": MULTIPLIER.POSITIVE,
        "stats.general.stamina": D6.ADD,
        "stats.general.charisma": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SECRETLY_BISEXUAL",
    title: "Secretly bisexual",
    description: "",
    type: "secret",
    group: "sexuality",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LESS,
        "stats.personality.happiness": RANGE.LESS,
        "stats.multipliers.style": MULTIPLIER.POSITIVE,
        "stats.general.charisma": D6.ADD,
        "stats.multipliers.notability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SECRETLY_DEPRESSED",
    title: "Secretly depressed",
    description: "",
    type: "secret",
    group: "health",
    setup: {
      update: {
        "stats.personality.happiness": RANGE.LEAST,
        "stats.personality.sincerity": RANGE.LESS,
        "stats.multipliers.notability": MULTIPLIER.NEGATIVE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SECRETLY_GAY",
    title: "Secretly gay",
    description: "",
    type: "secret",
    group: "sexuality",
    setup: {
      update: {
        "stats.personality.happiness": RANGE.LESS,
        "stats.personality.sincerity": RANGE.LESS,
        "stats.multipliers.notability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SECRETLY_TRANS",
    title: "Secretly trans",
    description: "",
    type: "secret",
    group: "identity",
    setup: {
      update: {
        "stats.personality.happiness": RANGE.LESS,
        "stats.personality.sincerity": RANGE.LESS,
        "stats.multipliers.notability": MULTIPLIER.NEGATIVE,
        "stats.general.visual": D6.ADD,
        "stats.general.charisma": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SECURE",
    title: "Secure",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SEDUCING_SCENT",
    title: "Seducing scent",
    description: "",
    type: "feature",
    group: "body",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SELF-CENTERED",
    title: "Self-centered",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LESS,
        "stats.personality.happiness": RANGE.MOST,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SELFISH",
    title: "Selfish",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LESS,
        "stats.general.leadership": D6.SUBTRACT,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SENSITIVE",
    title: "Sensitive",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SENSUAL",
    title: "Sensual",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MOST,
        "stats.general.stagePresence": D6.ADD,
        "stats.general.charisma": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SENSUOUS_VOICE",
    title: "Sensuous voice",
    description: "",
    type: "feature",
    group: "voice",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.SOME,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SENTIMENTAL",
    title: "Sentimental",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.MORE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SEXY_ACCENT",
    title: "Sexy accent",
    description: "",
    type: "feature",
    group: "voice",
    setup: {
      update: {
        "stats.general.rhetoric": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SEXY_SPEAKING_VOICE",
    title: "Sexy speaking voice",
    description: "",
    type: "physical",
    group: "voice",
    setup: {
      update: {
        "stats.general.charisma": D6.ADD,
        "stats.general.rhetoric": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SHAKY_HANDS",
    title: "Shaky hands",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.SOME,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SHY",
    title: "Shy",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.LEAST,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SLEPT_WITH_PRODUCER",
    title: "Slept with producer",
    description: "",
    type: "secret",
    group: "scandal",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.SOME,
        "stats.personality.curiosity": RANGE.SOME,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.general.stagePresence": D6.SUBTRACT,
        "stats.general.rhetoric": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SLOW_SPEAKER",
    title: "Slow speaker",
    description: "",
    type: "feature",
    group: "voice",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.SOME,
        "stats.general.rhetoric": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SNORE",
    title: "Snore",
    description: "Snores loudly in the dorms",
    type: "feature",
    group: "habit",
    setup: {
      update: {
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SOCIAL",
    title: "Social",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SON_OF_FAMOUS_PERSON",
    title: "Son of famous person",
    description: "",
    type: "status",
    group: "history",
    setup: {
      update: {
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.multipliers.luck": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SON_OF_PRODUCER",
    title: "Son of producer",
    description: "",
    type: "secret",
    group: "scandal",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.LESS,
        "stats.multipliers.luck": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SONGWRITER",
    title: "Songwriter",
    description: "",
    type: "status",
    group: "history",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MORE,
        "stats.skills.memory": PERCENTAGE.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SPEECH IMPEDIMENT",
    title: "Speech Impediment",
    description: "",
    type: "physical",
    group: "voice",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.LESS,
        "stats.general.rhetoric": PERCENTAGE.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SPIRITUAL",
    title: "Spiritual",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SQUEAKY_SPEAKING_VOICE",
    title: "Squeaky speaking voice",
    description: "",
    type: "physical",
    group: "voice",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.BIT,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "STUBBORN",
    title: "Stubborn",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "STUTTERING",
    title: "Stuttering",
    description: "",
    type: "feature",
    group: "voice",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.BIT,
        "stats.multipliers.notability": MULTIPLIER.NEGATIVE,
        "stats.general.rhetoric": PERCENTAGE.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SUBSERVIENT",
    title: "Subservient",
    description: "Prepared to obey others unquestioningly",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SWEATY",
    title: "Sweaty",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.BIT,
        "stats.multipliers.notability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SYMMETRICAL_FACE",
    title: "Symmetrical face",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.SOME,
        "stats.general.visual": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "TASK-ORIENTED",
    title: "Task-oriented",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.MOST,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "THICK-SKINNED",
    title: "Thick-skinned",
    description: "",
    type: "personality",
    group: "quality",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.MORE,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "TIRED_RESEMBLANCE",
    title: "Tired Resemblance",
    description: "",
    type: "physical",
    group: "appearance",
    setup: {
      update: {
        "stats.general.visual": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "TOO_NICE",
    title: "Too nice",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.general.charisma": D6.ADD,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "UNCONVENTIONAL",
    title: "Unconventional",
    description: "",
    type: "personality",
    group: "neutral",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.MORE,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "UNDERDOG",
    title: "Underdog",
    description: "",
    type: "feature",
    group: "quality",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.SOME,
        "stats.multipliers.likeability": MULTIPLIER.ULTRA,
        "stats.multipliers.luck": MULTIPLIER.ULTRA,
        "stats.general.charisma": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "UNSTYLISH",
    title: "Unstylish",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.curiosity": RANGE.BIT,
        "stats.general.charisma": D6.SUBTRACT,
        "stats.multipliers.style": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "VEGAN",
    title: "Vegan",
    description: "",
    type: "personality",
    group: "identity",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.MORE,
        "stats.personality.discipline": RANGE.SOME,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "VERY_SHORT",
    title: "Very short",
    description: "",
    type: "physical",
    group: "height",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.MORE,
        "stats.multipliers.notability": MULTIPLIER.NEGATIVE,
        "stats.general.leadership": D6.SUBTRACT,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "VERY_TALL",
    title: "Very tall",
    description: "",
    type: "physical",
    group: "height",
    setup: {
      update: {
        "stats.personality.sincerity": RANGE.SOME,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "VIRGIN",
    title: "Virgin",
    description: "",
    type: "status",
    group: "history",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.MORE,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SECRETLY_WEARS_A_WIG",
    title: "Secretly wears a wig",
    description: "",
    type: "secret",
    group: "appearance",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.LESS,
        "stats.general.visual": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "WEIRD_SMILE",
    title: "Weird smile",
    description: "",
    type: "feature",
    group: "appearance",
    setup: {
      update: {
        "stats.general.visual": D6.ADD,
        "stats.multipliers.notability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "WITHDRAWN",
    title: "Withdrawn",
    description: "Doesn't want to communicate with other people.",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.extroversion": RANGE.LEAST,
        "stats.multipliers.notability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "WORKAHOLIC",
    title: "Workaholic",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.discipline": RANGE.MORE,
        "stats.general.leadership": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "WORRYWART",
    title: "Worrywart",
    description: "",
    type: "personality",
    group: "flaw",
    setup: {
      update: {
        "stats.personality.sensitivity": RANGE.MOST,
        "stats.multipliers.likeability": MULTIPLIER.NEGATIVE,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "SOULFUL_VOICE",
    title: "Soulful voice",
    description: "Voice expresses deep feelings, especially sadness or love",
    type: "feature",
    group: "voice",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.SOME,
        "stats.stage.vocal": D6.ADD,
      },
    },
    effect: "TBD",
  },
  {
    keyword: "EUPHONIOUS_VOICE",
    title: "Euphonious voice",
    description: "Pleasant in sound",
    type: "feature",
    group: "voice",
    setup: {
      update: {
        "stats.personality.gentleness": RANGE.SOME,
        "stats.stage.vocal": D6.ADD,
        "stats.multipliers.likeability": MULTIPLIER.POSITIVE,
      },
    },
    effect: "TBD",
  },
];

export const TRAITS_DICT = TRAITS.reduce((acc: Record<string, Trait>, entry) => {
  acc[entry.keyword] = entry;

  return acc;
}, {});

export const SHUFFLED_TRAITS = shuffle(TRAITS);
