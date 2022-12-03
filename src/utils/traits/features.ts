import { D6, MULTIPLIER, PERCENTAGE, RANGE } from '../constants';
import { Trait } from 'types';

export const FEATURES: Trait[] = [
  {
    keyword: 'ANDROGYNOUS',
    title: 'Androgynous',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.stagePresence': D6.ADD,
        'stats.personality.gentleness': RANGE.SOME,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
        'stats.multipliers.likeability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'BAREFOOT',
    title: 'Barefoot',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.SUBTRACT,
        'stats.personality.sincerity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'BLUSHING',
    title: 'Blushing',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.ADD,
        'stats.personality.extroversion': RANGE.BIT,
        'stats.personality.gentleness': RANGE.SOME,
        'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'BODY_ODOR',
    title: 'Body odor',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.BIT,
        'stats.multipliers.likeability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'BOOMING_VOICE',
    title: 'Booming voice',
    description: '',
    type: 'feature',
    group: 'voice',
    track: '',
    setup: {
      update: {
        'stats.general.rhetoric': D6.ADD,
        'stats.general.leadership': D6.ADD,
        'stats.personality.gentleness': RANGE.BIT,
        'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'BROAD_SHOULDERS',
    title: 'Broad shoulders',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.ADD,
        'stats.general.leadership': D6.ADD,
        'stats.personality.sensitivity': RANGE.BIT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'COUNTRY_ACCENT',
    title: 'Country Accent',
    description: '',
    type: 'feature',
    group: 'voice',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.BIT,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CRAZY_LAUGHTER',
    title: 'Crazy laughter',
    description: '',
    type: 'feature',
    group: 'habit',
    track: '',
    setup: {
      update: {
        'stats.personality.gentleness': RANGE.SOME,
        'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CREEPY_SMILE',
    title: 'Creepy smile',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.SUBTRACT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CROOKED_NOSE',
    title: 'Crooked nose',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.SUBTRACT,
        'stats.personality.sincerity': RANGE.BIT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CROOKED_TEETH',
    title: 'Crooked teeth',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.SUBTRACT,
        'stats.personality.gentleness': RANGE.BIT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CUTE',
    title: 'Cute',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.SUBTRACT,
        'stats.general.stagePresence': D6.ADD,
        'stats.general.leadership': D6.SUBTRACT,
        'stats.personality.gentleness': RANGE.SOME,
        'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'DEEP_VOICE',
    title: 'Deep voice',
    description: '',
    type: 'feature',
    group: 'voice',
    track: '',
    setup: {
      update: {
        'stats.personality.gentleness': RANGE.MORE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'EMOTIONAL_EYES',
    title: 'Emotional eyes',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.personality.sensitivity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'EUPHONIOUS_VOICE',
    title: 'Euphonious voice',
    description: '',
    type: 'feature',
    group: 'voice',
    track: '',
    setup: {
      update: {
        'stats.stage.vocal': D6.ADD,
        'stats.personality.gentleness': RANGE.SOME,
        'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'EXTRA_FINGER',
    title: 'Extra finger',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.personality.sensitivity': RANGE.SOME,
        'stats.personality.extroversion': RANGE.BIT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'FAMOUS',
    title: 'Famous',
    description: '',
    type: 'feature',
    group: 'identity',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
        'stats.multipliers.notability': MULTIPLIER.ULTRA,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'FASHIONABLE',
    title: 'Fashionable',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'FORCEFUL_GESTURES',
    title: 'Forceful gestures',
    description: '',
    type: 'feature',
    group: 'habit',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
        'stats.personality.discipline': RANGE.BIT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'GENTLE_SMILE',
    title: 'Gentle smile',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.ADD,
        'stats.personality.gentleness': RANGE.SOME,
        'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'GIGGLES_A_LOT',
    title: 'Giggles a lot',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.personality.sensitivity': RANGE.SOME,
        'stats.multipliers.likeability': MULTIPLIER.NEGATIVE,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'GORGEOUS',
    title: 'Gorgeous',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.ADD,
        'stats.multipliers.style': MULTIPLIER.POSITIVE,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'JIGGLING_LEGS',
    title: 'Jiggling legs',
    description: '',
    type: 'feature',
    group: 'habit',
    track: '',
    setup: {
      update: {
        'stats.personality.sensitivity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'KILLER_SMILE',
    title: 'Killer smile',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.ADD,
        'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'MUMBLES_A_LOT',
    title: 'Mumbles a lot',
    description: '',
    type: 'feature',
    group: 'habit',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.SUBTRACT,
        'stats.personality.extroversion': RANGE.BIT,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
        'stats.multipliers.likeability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PAINTED_FINGERNAILS',
    title: 'Painted fingernails',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PERFECT_TEETH',
    title: 'Perfect teeth',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.ADD,
        'stats.general.rhetoric': D6.ADD,
        'stats.personality.discipline': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'POKER_FACE',
    title: 'Poker face',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.leadership': D6.SUBTRACT,
        'stats.general.charisma': D6.SUBTRACT,
        'stats.personality.sensitivity': RANGE.BIT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'POOR_HYGIENE',
    title: 'Poor hygiene',
    description: '',
    type: 'feature',
    group: 'health',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.LEAST,
        'stats.personality.intelligence': RANGE.LESS,
        'stats.multipliers.likeability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'POORLY_DRESSED',
    title: 'Poorly dressed',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.BIT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'REGIONAL_DIALECT',
    title: 'Regional Dialect',
    description: '',
    type: 'feature',
    group: 'voice',
    track: '',
    setup: {
      update: {
        'stats.general.charisma': D6.ADD,
        'stats.personality.curiosity': RANGE.BIT,
        'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SEDUCING_SCENT',
    title: 'Seducing scent',
    description: '',
    type: 'feature',
    group: 'body',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SENSUOUS_VOICE',
    title: 'Sensuous voice',
    description: '',
    type: 'feature',
    group: 'voice',
    track: '',
    setup: {
      update: {
        'stats.general.leadership': D6.ADD,
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SEXY_ACCENT',
    title: 'Sexy accent',
    description: '',
    type: 'feature',
    group: 'voice',
    track: '',
    setup: {
      update: {
        'stats.general.rhetoric': D6.ADD,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SHAKY_HANDS',
    title: 'Shaky hands',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.personality.sensitivity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SLOW_SPEAKER',
    title: 'Slow speaker',
    description: '',
    type: 'feature',
    group: 'voice',
    track: '',
    setup: {
      update: {
        'stats.general.rhetoric': D6.SUBTRACT,
        'stats.personality.gentleness': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SNORE',
    title: 'Snore',
    description: '',
    type: 'feature',
    group: 'habit',
    track: '',
    setup: {
      update: {
        'stats.multipliers.likeability': MULTIPLIER.NEGATIVE,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SOULFUL_VOICE',
    title: 'Soulful voice',
    description: '',
    type: 'feature',
    group: 'voice',
    track: '',
    setup: {
      update: {
        'stats.stage.vocal': D6.ADD,
        'stats.personality.gentleness': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'STUTTERING',
    title: 'Stuttering',
    description: '',
    type: 'feature',
    group: 'voice',
    track: '',
    setup: {
      update: {
        'stats.general.rhetoric': D6.SUBTRACT,
        'stats.personality.extroversion': RANGE.BIT,
        'stats.multipliers.notability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SWEATY',
    title: 'Sweaty',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.personality.sincerity': RANGE.BIT,
        'stats.multipliers.notability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SYMMETRICAL_FACE',
    title: 'Symmetrical face',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.SUBTRACT,
        'stats.personality.sincerity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'TOO_MANY_SLANGS',
    title: 'Too many slangs',
    description: '',
    type: 'feature',
    group: 'habit',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.BIT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'UNDERDOG',
    title: 'Underdog',
    description: '',
    type: 'feature',
    group: 'quality',
    track: '',
    setup: {
      update: {
        'stats.general.charisma': D6.ADD,
        'stats.personality.gentleness': RANGE.SOME,
        'stats.multipliers.likeability': MULTIPLIER.ULTRA,
        'stats.multipliers.luck': MULTIPLIER.ULTRA,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'UNSTYLISH',
    title: 'Unstylish',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.charisma': D6.SUBTRACT,
        'stats.personality.curiosity': RANGE.BIT,
        'stats.multipliers.style': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'WEIRD_SMILE',
    title: 'Weird smile',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.general.visual': D6.ADD,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'FLEXIBLE',
    title: 'Flexible',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.skills.stamina': PERCENTAGE.MAX,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'BIG_HANDS',
    title: 'Big hands',
    description: '',
    type: 'feature',
    group: 'appearance',
    track: '',
    setup: {
      update: {
        'stats.personality.gentleness': RANGE.BIT,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
];
