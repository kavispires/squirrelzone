import { MULTIPLIER, PERCENTAGE, RANGE } from '../constants';
import { Trait } from 'types';

export const INTERESTS: Trait[] = [
  {
    keyword: 'ACTION_FIGURE_COLLECTOR',
    title: 'Action Figure Collector',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.LESS,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'ANIME',
    title: 'Anime',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.LEAST,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'BAKING',
    title: 'Baking',
    description: '',
    type: 'interest',
    group: 'activity',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.MORE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'BASKETBALL',
    title: 'Basketball',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.skills.stamina': PERCENTAGE.UP,
        'stats.multipliers.style': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'BOARD_GAMES',
    title: 'Board Games',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.LESS,
        'stats.personality.gentleness': RANGE.BIT,
        'stats.personality.intelligence': RANGE.SOME,
        'stats.skills.adaptability': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'BOWLING',
    title: 'Bowling',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CALLIGRAPHY',
    title: 'Calligraphy',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CAN_COLLECTOR',
    title: 'Can collector',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.SOME,
        'stats.personality.extroversion': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CARD_COLLECTOR',
    title: 'Card collector',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.LESS,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CHATTING',
    title: 'Chatting',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.MORE,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CHEWING_GUM',
    title: 'Chewing gum',
    description: '',
    type: 'interest',
    group: 'habit',
    track: '',
    setup: {
      update: {
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
        'stats.multipliers.likeability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CHILL',
    title: 'Chill',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.multipliers.style': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'COIN_COLLECTOR',
    title: 'Coin collector',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.SOME,
        'stats.personality.extroversion': RANGE.LEAST,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'COMICS',
    title: 'Comics',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.LESS,
        'stats.personality.intelligence': RANGE.BIT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'COOKING',
    title: 'Cooking',
    description: '',
    type: 'interest',
    group: 'activity',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CRACKING_JOINTS',
    title: 'Cracking joints',
    description: '',
    type: 'interest',
    group: 'habit',
    track: '',
    setup: {
      update: {
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
        'stats.multipliers.likeability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CROSSWORD_PUZZLES',
    title: 'Crossword puzzles',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
        'stats.personality.intelligence': RANGE.MOST,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'CYCLING',
    title: 'Cycling',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.skills.stamina': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'DOODLING',
    title: 'Doodling',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
        'stats.personality.sensitivity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'DRAWING',
    title: 'Drawing',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'DRINKING',
    title: 'Drinking',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'FASHION_DESIGN',
    title: 'Fashion design',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.MORE,
        'stats.personality.gentleness': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'FISHING',
    title: 'Fishing',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.MOST,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'FOODIE',
    title: 'Foodie',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'GAMBLING',
    title: 'Gambling',
    description: '',
    type: 'interest',
    group: 'activity',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.LEAST,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'GARDENING',
    title: 'Gardening',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.gentleness': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'GOING_TO_THE_BEACH',
    title: 'Going to the beach',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.multipliers.notability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'GRAPHIC_DESIGNER',
    title: 'Graphic Designer',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'GYM',
    title: 'Gym',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.MORE,
        'stats.personality.gentleness': RANGE.LESS,
        'stats.personality.intelligence': RANGE.LESS,
        'stats.personality.discipline': RANGE.MORE,
        'stats.skills.stamina': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'HAD_A_BAND',
    title: 'Had a band',
    description: '',
    type: 'interest',
    group: 'music',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.SOME,
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'JOGGING',
    title: 'Jogging',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.personality.happiness': RANGE.SOME,
        'stats.personality.discipline': RANGE.SOME,
        'stats.skills.stamina': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'JOURNALING',
    title: 'Journaling',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.LESS,
        'stats.personality.gentleness': RANGE.SOME,
        'stats.personality.intelligence': RANGE.SOME,
        'stats.skills.sanity': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'KARATE',
    title: 'Karate',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.skills.stamina': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'KNITTING',
    title: 'Knitting',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'LEGO_SETS',
    title: 'LEGO sets',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.LESS,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'MAGIC',
    title: 'Magic',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.MOST,
        'stats.personality.extroversion': RANGE.BIT,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'MOVIES',
    title: 'Movies',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.multipliers.notability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'MUSIC_PRODUCER',
    title: 'Music producer',
    description: '',
    type: 'interest',
    group: 'music',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'NAP',
    title: 'Nap',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.multipliers.notability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'ORIGAMI',
    title: 'Origami',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
        'stats.personality.discipline': RANGE.MORE,
        'stats.personality.gentleness': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PAINTING',
    title: 'Painting',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
        'stats.personality.sensitivity': RANGE.MORE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PARTY_PLANNING',
    title: 'Party planning',
    description: '',
    type: 'interest',
    group: 'activity',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
        'stats.personality.discipline': RANGE.MORE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PHOTOGRAPHY',
    title: 'Photography',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
        'stats.personality.gentleness': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PLAYING_CARDS',
    title: 'Playing cards',
    description: '',
    type: 'interest',
    group: 'activity',
    track: '',
    setup: {
      update: {
        'stats.multipliers.luck': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PLAYING_DARTS',
    title: 'Playing darts',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.MORE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PLAYS_BASS',
    title: 'Plays bass',
    description: '',
    type: 'interest',
    group: 'music',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.LESS,
        'stats.personality.discipline': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PLAYS_DRUMS',
    title: 'Plays drums',
    description: '',
    type: 'interest',
    group: 'music',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.BIT,
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PLAYS_GUITAR',
    title: 'Plays guitar',
    description: '',
    type: 'interest',
    group: 'music',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.SOME,
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PLAYS_PIANO',
    title: 'Plays piano',
    description: '',
    type: 'interest',
    group: 'music',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.MORE,
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PLAYS_VIOLIN',
    title: 'Plays violin',
    description: '',
    type: 'interest',
    group: 'music',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'POETRY_WRITING',
    title: 'Poetry writing',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'PUZZLE',
    title: 'Puzzle',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.skills.memory': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'READING',
    title: 'Reading',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.sensitivity': RANGE.SOME,
        'stats.personality.intelligence': RANGE.MORE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'ROCK_CLIMBING',
    title: 'Rock Climbing',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.skills.stamina': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'RUNNING',
    title: 'Running',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.personality.happiness': RANGE.MORE,
        'stats.skills.stamina': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SCULPTURE',
    title: 'Sculpture',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
        'stats.personality.discipline': RANGE.MOST,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SHOE_COLLECTOR',
    title: 'Shoe collector',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SLEEPING',
    title: 'Sleeping',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.BIT,
        'stats.multipliers.notability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SPORTS',
    title: 'Sports',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
        'stats.personality.gentleness': RANGE.LESS,
        'stats.personality.intelligence': RANGE.BIT,
        'stats.personality.happiness': RANGE.SOME,
        'stats.skills.stamina': PERCENTAGE.UP,
        'stats.skills.adaptability': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'STRETCHING',
    title: 'Stretching',
    description: '',
    type: 'interest',
    group: 'habit',
    track: '',
    setup: {
      update: {
        'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SUNBATHING',
    title: 'Sunbathing',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.multipliers.notability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SURFING',
    title: 'Surfing',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.skills.stamina': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'SWIMMING',
    title: 'Swimming',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.skills.stamina': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'T-SHIRT_MAKING',
    title: 'T-shirt making',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.MORE,
        'stats.personality.gentleness': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'TABLE_TENNIS',
    title: 'Table tennis',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.skills.stamina': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'TALKING_ON_THE_PHONE',
    title: 'Talking on the phone',
    description: '',
    type: 'interest',
    group: 'action',
    track: '',
    setup: {
      update: {
        'stats.personality.sincerity': RANGE.MORE,
        'stats.personality.extroversion': RANGE.SOME,
        'stats.personality.discipline': RANGE.LESS,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'TRAVELING',
    title: 'Traveling',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.personality.curiosity': RANGE.SOME,
        'stats.multipliers.notability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'TUTORING',
    title: 'Tutoring',
    description: '',
    type: 'interest',
    group: 'nerd',
    track: '',
    setup: {
      update: {
        'stats.personality.intelligence': RANGE.MOST,
        'stats.skills.learning': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'TV_SHOWS',
    title: 'TV Shows',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.multipliers.notability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'VINYL_COLLECTOR',
    title: 'Vinyl collector',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.discipline': RANGE.SOME,
        'stats.personality.curiosity': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'VOLUNTEERING',
    title: 'Volunteering',
    description: '',
    type: 'interest',
    group: 'activity',
    track: '',
    setup: {
      update: {
        'stats.personality.gentleness': RANGE.MORE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'WALKING',
    title: 'Walking',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.multipliers.notability': MULTIPLIER.NEGATIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'WATCHES_COLLECTOR',
    title: 'Watches collector',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.extroversion': RANGE.SOME,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'WINE_TASTING',
    title: 'Wine tasting',
    description: '',
    type: 'interest',
    group: 'basic',
    track: '',
    setup: {
      update: {
        'stats.multipliers.style': MULTIPLIER.POSITIVE,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'YOGA',
    title: 'Yoga',
    description: '',
    type: 'interest',
    group: 'sport',
    track: '',
    setup: {
      update: {
        'stats.personality.gentleness': RANGE.MORE,
        'stats.skills.stamina': PERCENTAGE.UP,
      },
    },
    effect: 'TDB',
  },
  {
    keyword: 'VIDEO_GAMES',
    title: 'Video Games',
    description: '',
    type: 'interest',
    group: 'hobby',
    track: '',
    setup: {
      update: {
        'stats.personality.gentleness': RANGE.BIT,
        'stats.skills.adaptability': PERCENTAGE.DOWN,
      },
    },
    effect: 'TDB',
  },
];
