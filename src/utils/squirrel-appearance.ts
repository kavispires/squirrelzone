import { AppearanceData, ColorData } from 'types';
import { D6, MULTIPLIER, RANGE, VARIATION_KEYS } from './constants';

// Rate Distribution: [4,3,2,1][4,3,2,1]
const FUR_COLOR: Record<string, ColorData> = {
  0: {
    rate: 16,
    name: 'Caramel Dark',
    hex: '#a5711f',
    update: {
      'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
    },
  },
  1: {
    rate: 12,
    name: 'Caramel Light',
    hex: '#c49a48',
    update: {
      'stats.general.visual': D6.ADD,
    },
  },
  2: {
    rate: 8,
    name: 'Caramel Medium',
    hex: '#c28b40',
    update: {
      'stats.general.visual': D6.ADD,
      'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
    },
  },
  3: {
    rate: 4,
    name: 'Caramel Muted',
    hex: '#b2915d',
    update: {
      'stats.personality.gentleness': RANGE.SOME,
      'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
    },
  },
  4: {
    rate: 12,
    name: 'Gold Medium',
    hex: '#ab8925',
    update: {},
  },
  5: {
    rate: 9,
    name: 'Gold Dark',
    hex: '#977725',
    update: {
      'stats.personality.gentleness': RANGE.LESS,
      'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
    },
  },
  6: {
    rate: 6,
    name: 'Gold Bright',
    hex: '#d3b437',
    update: {
      'stats.general.visual': D6.SUBTRACT,
    },
  },
  7: {
    rate: 3,
    name: 'Gold Light',
    hex: '#d3b437',
    update: {
      'stats.general.visual': D6.SUBTRACT,
    },
  },
  8: {
    rate: 8,
    name: 'Brown Light',
    hex: '#8c754a',
    update: {
      'stats.personality.gentleness': RANGE.SOME,
      'stats.general.visual': D6.SUBTRACT,
    },
  },
  9: {
    rate: 6,
    name: 'Brown Medium',
    hex: '#7b623e',
    update: {
      'stats.general.visual': D6.SUBTRACT,
      'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
    },
  },
  10: {
    rate: 4,
    name: 'Brown Dark',
    hex: '#574639',
    update: {
      'stats.multipliers.notability': MULTIPLIER.POSITIVE,
    },
  },
  11: {
    rate: 2,
    name: 'Brown Muted',
    hex: '#a3967a',
    update: {
      'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      'stats.personality.gentleness': RANGE.SOME,
      'stats.general.visual': D6.ADD,
    },
  },
  12: {
    rate: 4,
    name: 'Red Medium',
    hex: '#bf6c30',
    update: {
      'stats.multipliers.notability': MULTIPLIER.POSITIVE,
    },
  },
  13: {
    rate: 3,
    name: 'Red Muted',
    hex: '#8c5f3e',
    update: {
      'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
    },
  },
  14: {
    rate: 2,
    name: 'Red Dark',
    hex: '#8b4935',
    update: {
      'stats.multipliers.notability': MULTIPLIER.POSITIVE,
    },
  },
  15: {
    rate: 1,
    name: 'Red Bright',
    hex: '#bf4c30',
    update: {
      'stats.multipliers.notability': MULTIPLIER.POSITIVE,
      'stats.general.visual': D6.SUBTRACT,
    },
  },
};

// Rate Distribution: [10][4,3,2,1]
const FUR_TYPE: Record<string, AppearanceData> = {
  0: {
    rate: 40,
    name: 'Simple',
    update: {
      'stats.multipliers.likeability': MULTIPLIER.POSITIVE,
    },
  },
  1: {
    name: 'Hairy',
    update: {
      'stats.general.stagePresence': D6.ADD,
    },
    rate: 30,
  },
  2: {
    rate: 20,
    name: 'Curly',
    update: {
      'stats.general.visual': D6.ADD,
    },
  },
  3: {
    rate: 10,
    name: 'Spiky',
    update: {
      'stats.multipliers.notability': MULTIPLIER.POSITIVE,
    },
  },
};

// Rate Distribution: [6,4][6,4]
const SNOUT_COLOR: Record<string, ColorData> = {
  0: {
    rate: 36,
    name: 'Orange',
    hex: '#f2d4b1',
    update: {
      'stats.multipliers.luck': MULTIPLIER.POSITIVE,
    },
  },
  1: {
    rate: 24,
    name: 'Cream',
    hex: '#f6ebb4',
    update: {
      'stats.personality.gentleness': RANGE.SOME,
    },
  },
  2: {
    name: 'Dust',
    hex: '#dacdbd',
    update: {
      'stats.personality.gentleness': RANGE.LESS,
    },
    rate: 24,
  },
  3: {
    rate: 16,
    name: 'Salmon',
    hex: '#f5dccb',
    update: {
      'stats.personality.extroversion': RANGE.BIT,
    },
  },
};

// Rate Distribution: [6,3,1][4,3,2,1]
const NOSE_COLOR: Record<string, ColorData> = {
  0: {
    rate: 24,
    name: 'Black Coffee',
    hex: '#37250c',
    update: {},
  },
  1: {
    rate: 18,
    name: 'Brown Dark',
    hex: '#522906',
    update: {},
  },
  2: {
    rate: 12,
    name: 'Black Mud',
    hex: '#2b230e',
    update: {},
  },
  3: {
    rate: 6,
    name: 'Pure Black',
    hex: '#140e08',
    update: {},
  },
  4: {
    rate: 12,
    name: 'Red Muted',
    hex: '#b46838',
    update: {
      'stats.personality.gentleness': RANGE.SOME,
    },
  },
  5: {
    rate: 9,
    name: 'Brown Caramel',
    hex: '#522906',
    update: {},
  },
  6: {
    rate: 6,
    name: 'Brown Bronze',
    hex: '#725f10',
    update: {},
  },
  7: {
    rate: 3,
    name: 'Dark Red',
    hex: '#9c3930',
    update: {
      'stats.personality.gentleness': RANGE.SOME,
    },
  },
  8: {
    rate: 4,
    name: 'Red Muted',
    hex: '#b46838',
    update: {
      'stats.personality.gentleness': RANGE.SOME,
    },
  },
  9: {
    rate: 3,
    name: 'Albino Pink',
    hex: '#efdfd5',
    update: {
      'stats.personality.sensitivity': RANGE.SOME,
      'stats.multipliers.notability': MULTIPLIER.POSITIVE,
    },
  },
  10: {
    rate: 2,
    name: 'Albino Gray',
    hex: '#e6e4db',
    update: {
      'stats.personality.sensitivity': RANGE.SOME,
      'stats.multipliers.notability': MULTIPLIER.POSITIVE,
    },
  },
  11: {
    rate: 1,
    name: 'Albino Beige',
    hex: '#f8efd5',
    update: {
      'stats.personality.sensitivity': RANGE.SOME,
      'stats.multipliers.notability': MULTIPLIER.POSITIVE,
    },
  },
};

// Rate Distribution: [4,3,2,1][4,3,2,1]
const EYE_COLOR: Record<string, ColorData> = {
  0: {
    rate: 16,
    name: 'Hazel Dark',
    hex: '#42210a',
    update: {},
  },
  1: {
    rate: 12,
    name: 'Hazel Medium',
    hex: '#5e3a21',
    update: {},
  },
  2: {
    rate: 8,
    name: 'Hazel Light',
    hex: '#6e4822',
    update: {},
  },
  3: {
    rate: 4,
    name: 'Hazel Rad',
    hex: '#693026',
    update: {},
  },
  4: {
    rate: 12,
    name: 'Blue Deep',
    hex: '#3f76bb',
    update: {},
  },
  5: {
    rate: 9,
    name: 'Blue Dark',
    hex: '#294d7a',
    update: {},
  },
  6: {
    rate: 6,
    name: 'Blue Aqua',
    hex: '#6fcbd6',
    update: {},
  },
  7: {
    rate: 3,
    name: 'Blue Sapphire',
    hex: '#016683',
    update: {},
  },
  8: {
    rate: 8,
    name: 'Green Emerald',
    hex: '#31c482',
    update: {},
  },
  9: {
    rate: 6,
    name: 'Green Bright',
    hex: '#3ab44a',
    update: {},
  },
  10: {
    rate: 4,
    name: 'Green Dark',
    hex: '#1b694a',
    update: {},
  },
  11: {
    rate: 2,
    name: 'Green Jade',
    hex: '#018376',
    update: {},
  },
  12: {
    rate: 4,
    name: 'Black Dark',
    hex: '#261e03',
    update: {},
  },
  13: {
    rate: 3,
    name: 'Black Pure',
    hex: '#171202',
    update: {},
  },
  14: {
    rate: 2,
    name: 'Black Gray',
    hex: '#44453e',
    update: {},
  },
  15: {
    rate: 1,
    name: 'Black Blind',
    hex: '#c0beb9',
    update: {},
  },
};

// Rate Distribution: [4,3,2,1][4,3,2,1]
const EYE_LIDS: Record<string, AppearanceData> = {
  0: {
    rate: 16,
    name: 'Basic',
    update: {},
  },
  1: {
    rate: 12,
    name: 'Serene',
    update: {},
  },
  2: {
    rate: 8,
    name: 'Bored',
    update: {},
  },
  3: {
    rate: 4,
    name: 'Judgy',
    update: {},
  },
  4: {
    rate: 12,
    name: 'Shy',
    update: {},
  },
  5: {
    rate: 9,
    name: 'Tired',
    update: {},
  },
  6: {
    rate: 6,
    name: 'Skeptical',
    update: {},
  },
  7: {
    rate: 3,
    name: 'Unstable',
    update: {},
  },
  8: {
    rate: 8,
    name: 'Feisty',
    update: {},
  },
  9: {
    rate: 6,
    name: 'Angry',
    update: {},
  },
  10: {
    rate: 4,
    name: 'Sassy',
    update: {},
  },
  11: {
    rate: 2,
    name: 'Vicious',
    update: {},
  },
  12: {
    rate: 4,
    name: 'Insecure',
    update: {},
  },
  13: {
    rate: 3,
    name: 'Sad',
    update: {},
  },
  14: {
    rate: 2,
    name: 'Depressed',
    update: {},
  },
  15: {
    rate: 1,
    name: 'Damaged',
    update: {},
  },
};

// Rate Distribution: [4,3,2,1][4,3,2,1]
const MOUTH: Record<string, AppearanceData> = {
  0: {
    rate: 16,
    name: 'Regular Smile',
    update: {},
  },
  1: {
    rate: 12,
    name: 'Regular Teeth',
    update: {},
  },
  2: {
    rate: 8,
    name: 'Regular Frown',
    update: {},
  },
  3: {
    rate: 4,
    name: 'Regular Tiny',
    update: {},
  },
  4: {
    rate: 12,
    name: 'Straight Up',
    update: {},
  },
  5: {
    rate: 9,
    name: 'Straight Line',
    update: {},
  },
  6: {
    rate: 6,
    name: 'Straight Down',
    update: {},
  },
  7: {
    rate: 3,
    name: 'Straight Angle',
    update: {},
  },
  8: {
    rate: 8,
    name: 'Open Normal',
    update: {},
  },
  9: {
    rate: 6,
    name: 'Open Wide',
    update: {},
  },
  10: {
    rate: 4,
    name: 'Open Flipped',
    update: {},
  },
  11: {
    rate: 2,
    name: 'Open Triangle',
    update: {},
  },
  12: {
    rate: 4,
    name: 'Special Kiss',
    update: {},
  },
  13: {
    rate: 3,
    name: 'Special Wiggle',
    update: {},
  },
  14: {
    rate: 2,
    name: 'Special Creepy',
    update: {},
  },
  15: {
    rate: 1,
    name: 'Special Braces',
    update: {},
  },
};

// Rate Distribution: [4,3,2,1][4,3,2,1]
const HAIR_COLOR: Record<string, ColorData> = {
  0: {
    rate: 16,
    name: 'Brunette Dark',
    hex: '#3b2110',
    update: {},
  },
  1: {
    rate: 12,
    name: 'Brunette Medium',
    hex: '#603813',
    update: {},
  },
  2: {
    rate: 8,
    name: 'Brunette Light',
    hex: '#754c28',
    update: {},
  },
  3: {
    rate: 4,
    name: 'Brunette Orange',
    hex: '#ffbe4d',
    update: {},
  },
  4: {
    rate: 12,
    name: 'Black Chocolate',
    hex: '#24180a',
    update: {},
  },
  5: {
    rate: 9,
    name: 'Black Pure',
    hex: '#140d08',
    update: {},
  },
  6: {
    rate: 6,
    name: 'Black Olive',
    hex: '#2b230e',
    update: {},
  },
  7: {
    rate: 3,
    name: 'Black Gray',
    hex: '#231f20',
    update: {},
  },
  8: {
    rate: 8,
    name: 'Blond Golden',
    hex: '#d3a40f',
    update: {},
  },
  9: {
    rate: 6,
    name: 'Blond Dark',
    hex: '#705a17',
    update: {},
  },
  10: {
    rate: 4,
    name: 'Blond Bright',
    hex: '#fff64d',
    update: {},
  },
  11: {
    rate: 2,
    name: 'Blond Desert',
    hex: '#d3bd5e',
    update: {},
  },
  12: {
    rate: 4,
    name: 'Special Different',
    hex: '#662d91',
    update: {},
  },
  13: {
    rate: 3,
    name: 'Special Burgundy',
    hex: '#581600',
    update: {},
  },
  14: {
    rate: 2,
    name: 'Special Ginger',
    hex: '#e33e3d',
    update: {},
  },
  15: {
    rate: 1,
    name: 'Special White',
    hex: '#c6bec8',
    update: {},
  },
};

// Distribution: [7, 1, 1, 1][7, 1, 1, 1]
const FACIAL_HAIR: Record<string, AppearanceData> = {
  0: {
    rate: 49,
    name: 'None',
    update: {},
  },
  1: {
    rate: 7,
    name: 'Mustache Single',
    update: {},
  },
  2: {
    rate: 7,
    name: 'Mustache Thin',
    update: {},
  },
  3: {
    rate: 7,
    name: 'Goatee Mustache',
    update: {},
  },
  4: {
    rate: 7,
    name: 'Goatee Square',
    update: {},
  },
  5: {
    rate: 1,
    name: 'Mustache Classic',
    update: {},
  },
  6: {
    rate: 1,
    name: 'Mustache Wiggle',
    update: {},
  },
  7: {
    rate: 1,
    name: 'Mustache Large',
    update: {},
  },
  8: {
    rate: 7,
    name: 'Goatee Wavey',
    update: {},
  },
  9: {
    rate: 1,
    name: 'Goatee Hippie',
    update: {},
  },
  10: {
    rate: 1,
    name: 'Goatee Small',
    update: {},
  },
  11: {
    rate: 1,
    name: 'Mustache Preteen',
    update: {},
  },
  12: {
    rate: 7,
    name: 'Beard Unshaved',
    update: {},
  },
  13: {
    rate: 1,
    name: 'Beard Amish',
    update: {},
  },
  14: {
    rate: 1,
    name: 'Beard Short',
    update: {},
  },
  15: {
    rate: 1,
    name: 'Beard Long',
    update: {},
  },
};

// Distribution: [7, 1, 1, 1][7, 1, 1, 1]
const FACIAL_VARIATIONS: Record<string, AppearanceData> = {
  0: {
    rate: 49,
    name: 'None',
    update: {},
  },
  1: {
    rate: 7,
    name: 'Snout Freckles',
    update: {},
  },
  2: {
    rate: 7,
    name: 'Snout Rosacea',
    update: {},
  },
  3: {
    rate: 7,
    name: 'Snout Acne',
    update: {},
  },
  4: {
    rate: 7,
    name: 'Birthmark Minimal',
    update: {},
  },
  5: {
    rate: 1,
    name: 'Birthmark Small',
    update: {},
  },
  6: {
    rate: 1,
    name: 'Birthmark Large',
    update: {},
  },
  7: {
    rate: 1,
    name: 'Birthmark Vitiligo',
    update: {},
  },
  8: {
    rate: 7,
    name: 'Mole Eye',
    update: {},
  },
  9: {
    rate: 1,
    name: 'Mole Cheek',
    update: {},
  },
  10: {
    rate: 1,
    name: 'Mole Nose',
    update: {},
  },
  11: {
    rate: 1,
    name: 'Mole Forehead',
    update: {},
  },
  12: {
    rate: 7,
    name: 'Special Butt Chin',
    update: {},
  },
  13: {
    rate: 1,
    name: 'Special Tattoo',
    update: {},
  },
  14: {
    rate: 1,
    name: 'Special Cheeks',
    update: {},
  },
  15: {
    rate: 1,
    name: 'Special Scar',
    update: {},
  },
};

// Distribution: [5,3,2][4,3,2,1]
const ACCESSORIES_EAR = {
  0: {
    rate: 20,
    name: 'None',
    update: {},
  },
  1: {
    rate: 12,
    name: 'Earring Single Ring',
    update: {},
  },
  2: {
    rate: 8,
    name: 'Earring Top Ring',
    update: {},
  },
  3: {
    rate: 15,
    name: 'Earring Single Round',
    update: {},
  },
  4: {
    rate: 9,
    name: 'Earring Double Ring',
    update: {},
  },
  5: {
    rate: 6,
    name: 'Earring Cross',
    update: {},
  },
  6: {
    rate: 10,
    name: 'Earring Triangle',
    update: {},
  },
  7: {
    rate: 6,
    name: 'Earring Triple Ring',
    update: {},
  },
  8: {
    rate: 4,
    name: 'Earring Triple Round',
    update: {},
  },
  9: {
    rate: 5,
    name: 'Earring Double Round',
    update: {},
  },
  10: {
    rate: 3,
    name: 'Special Hoop',
    update: {},
  },
  11: {
    rate: 2,
    name: 'Special Hearing Aid',
    update: {},
  },
};

// Rate Distribution: [9,1][6,2,1,1]
const ACCESSORIES_EYE = {
  0: {
    rate: 54,
    name: 'None',
    update: {},
  },
  1: {
    rate: 6,
    name: 'Shades Basic',
    update: {},
  },
  2: {
    rate: 18,
    name: 'Shades Future',
    update: {},
  },
  3: {
    rate: 2,
    name: 'Shades Cool',
    update: {},
  },
  4: {
    rate: 9,
    name: 'Shades Forehead',
    update: {},
  },
  5: {
    rate: 1,
    name: 'Glasses Round',
    update: {},
  },
  6: {
    rate: 1,
    name: 'Glasses Square',
    update: {},
  },
  7: {
    rate: 1,
    name: 'Shades Heart',
    update: {},
  },
};

// Rate Distribution: [8,2][9,1]
const ACCESSORIES_EYE_BROWS = {
  0: {
    rate: 72,
    name: 'None',
    update: {},
  },
  1: {
    rate: 18,
    name: 'Piercing Single',
    update: {},
  },
  2: {
    rate: 16,
    name: 'Shaved brow',
    update: {},
  },
  3: {
    rate: 2,
    name: 'Piercing Double',
    update: {},
  },
};

// Distribution: [5,3,2][4,3,2,1]
const ACCESSORIES_HEAD = {
  0: {
    rate: 20,
    name: 'None',
    update: {},
  },
  1: {
    rate: 12,
    name: 'Cap',
    update: {},
  },
  2: {
    rate: 8,
    name: 'Headband',
    update: {},
  },
  3: {
    rate: 15,
    name: 'Beanie',
    update: {},
  },
  4: {
    rate: 9,
    name: 'Shades',
    update: {},
  },
  5: {
    rate: 6,
    name: 'Tiara',
    update: {},
  },
  6: {
    rate: 10,
    name: 'Reverse cap',
    update: {},
  },
  7: {
    rate: 6,
    name: 'Spike Cap',
    update: {},
  },
  8: {
    rate: 4,
    name: 'Cap Color',
    update: {},
  },
  9: {
    rate: 5,
    name: 'Color Beanie',
    update: {},
  },
  10: {
    rate: 3,
    name: 'Visor',
    update: {},
  },
  11: {
    rate: 2,
    name: 'Fedora',
    update: {},
  },
};

// Rate Distribution: [8,2][9,1]
const ACCESSORIES_NOSE = {
  0: {
    rate: 72,
    name: 'None',
    update: {},
  },
  1: {
    rate: 18,
    name: 'Piercing round',
    update: {},
  },
  2: {
    rate: 16,
    name: 'Piercing ring',
    update: {},
  },
  3: {
    rate: 2,
    name: 'Bull Ring',
    update: {},
  },
};

// Rate Distribution: [9,1][6,2,1,1]
const ACCESSORIES_NECK = {
  0: {
    rate: 54,
    name: 'None',
    update: {},
  },
  1: {
    rate: 6,
    name: 'Necklace Extravagant',
    update: {},
  },
  2: {
    rate: 18,
    name: 'Necklace Simple',
    update: {},
  },
  3: {
    rate: 2,
    name: 'Choker',
    update: {},
  },
  4: {
    rate: 9,
    name: 'Necklace Chain',
    update: {},
  },
  5: {
    rate: 1,
    name: 'Necklace Religious',
    update: {},
  },
  6: {
    rate: 1,
    name: 'Neck Tattoo',
    update: {},
  },
  7: {
    rate: 1,
    name: 'Scar',
    update: {},
  },
};

export const DNA_DISTRIBUTION = {
  'fur.color': {
    index: 0,
    part: 'fur',
    type: 'color',
    variations: 16,
    options: FUR_COLOR,
    distributionType: VARIATION_KEYS.VARIATION_4x4_DEFAULT,
  },
  'fur.type': {
    index: 1,
    part: 'fur',
    type: 'type',
    variations: 4,
    options: FUR_TYPE,
    distributionType: VARIATION_KEYS.VARIATION_1x3_DEFAULT,
  },
  'snout.color': {
    index: 2,
    part: 'snout',
    type: 'color',
    variations: 4,
    options: SNOUT_COLOR,
    distributionType: VARIATION_KEYS.VARIATION_2x2_DEFAULT,
  },
  'snout.mouth': {
    index: 3,
    part: 'snout',
    type: 'mouth',
    variations: 16,
    options: MOUTH,
    distributionType: VARIATION_KEYS.VARIATION_4x4_DEFAULT,
  },
  'snout.nose': {
    index: 4,
    part: 'snout',
    type: 'nose',
    variations: 12,
    options: NOSE_COLOR,
    distributionType: VARIATION_KEYS.VARIATION_3x4_DEFAULT,
  },
  'eye.color': {
    index: 5,
    part: 'eye',
    type: 'color',
    variations: 16,
    options: EYE_COLOR,
    distributionType: VARIATION_KEYS.VARIATION_4x4_DEFAULT,
  },
  'eye.lids': {
    index: 6,
    part: 'eye',
    type: 'lids',
    variations: 16,
    options: EYE_LIDS,
    distributionType: VARIATION_KEYS.VARIATION_4x4_DEFAULT,
  },
  'face.variations': {
    index: 7,
    part: 'face',
    type: 'variations',
    variations: 16,
    options: FACIAL_VARIATIONS,
    distributionType: VARIATION_KEYS.VARIATION_4x4_WEIGHTED,
  },
  'hair.color': {
    index: 8,
    part: 'hair',
    type: 'color',
    variations: 16,
    options: HAIR_COLOR,
    distributionType: VARIATION_KEYS.VARIATION_4x4_DEFAULT,
  },
  'hair.type': {
    index: 9,
    part: 'hair',
    type: 'type',
    variations: 32,
    options: {} as Record<number, AppearanceData>,
  },
  'hair.bangs': {
    index: 10,
    part: 'hair',
    type: 'bangs',
    variations: 32,
    options: {} as Record<number, AppearanceData>,
  },
  'hair.facial': {
    index: 11,
    part: 'hair',
    type: 'facial',
    variations: 16,
    options: FACIAL_HAIR,
    distributionType: VARIATION_KEYS.VARIATION_4x4_WEIGHTED,
  },
  'accessories.arm': {
    index: 12,
    part: 'accessories',
    type: 'arm',
    variations: 8,
    options: {} as Record<number, AppearanceData>,
    distributionType: VARIATION_KEYS.VARIATION_1x8_RARE,
  },
  'accessories.ear': {
    index: 13,
    part: 'accessories',
    type: 'ear',
    variations: 12,
    options: ACCESSORIES_EAR,
    distributionType: VARIATION_KEYS.VARIATION_1x12_RARE,
  },
  'accessories.eyebrow': {
    index: 14,
    part: 'accessories',
    type: 'eyebrow',
    variations: 4,
    options: ACCESSORIES_EYE_BROWS,
    distributionType: VARIATION_KEYS.VARIATION_1x3_RARE,
  },
  'accessories.eyes': {
    index: 15,
    part: 'accessories',
    type: 'eyes',
    variations: 8,
    options: ACCESSORIES_EYE,
    distributionType: VARIATION_KEYS.VARIATION_1x8_RARE,
  },
  'accessories.head': {
    index: 16,
    part: 'accessories',
    type: 'head',
    variations: 12,
    options: ACCESSORIES_HEAD,
    distributionType: VARIATION_KEYS.VARIATION_1x12_RARE,
  },
  'accessories.neck': {
    index: 17,
    part: 'accessories',
    type: 'neck',
    variations: 8,
    options: ACCESSORIES_NECK,
    distributionType: VARIATION_KEYS.VARIATION_1x8_RARE,
  },
  'accessories.nose': {
    index: 18,
    part: 'accessories',
    type: 'nose',
    variations: 4,
    options: ACCESSORIES_NOSE,
    distributionType: VARIATION_KEYS.VARIATION_1x3_RARE,
  },
};
