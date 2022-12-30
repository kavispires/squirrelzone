export const SPECIES = {
  squirrel: 'squirrel',
};

export const HEIGHT = {
  EXTRA_SHORT: 1,
  SHORT: 3,
  AVERAGE: 6,
  TALL: 3,
  EXTRA_TALL: 1,
};

export const BUILD = {
  MUSCULAR: 1,
  ATHLETIC: 3,
  AVERAGE: 6,
  SLIM: 3,
  SKINNY: 1,
};

export const SIZE = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export const TRACK = {
  VOCAL: 'VOCAL',
  RAP: 'RAP',
  DANCE: 'DANCE',
};

export const ALIGNMENT_X_LABELS = {
  0: 'good',
  1: 'neutral',
  2: 'evil',
};

export const ALIGNMENT_Y_LABELS = {
  0: 'lawful',
  1: 'neutral',
  2: 'chaotic',
};

export const ALIGNMENT_ARCHETYPE = {
  '0.0': 'CRUSADER',
  '0.1': 'BENEFACTOR',
  '0.2': 'REBEL',
  '1.0': 'JUDGE',
  '1.1': 'UNDECIDED',
  '1.2': 'FREE_SPIRIT',
  '2.0': 'DOMINATOR',
  '2.1': 'MALEFACTOR',
  '2.2': 'CRUSADER',
};

export const AGES = [18, 19, 20, 22, 21, 17, 23, 24, 25, 26, 27, 15];

export const D6_STATS_DEFAULT = {
  1: 3,
  2: 4,
  3: 5,
  4: 2,
  5: 2,
  6: 1,
};

export const D6_STATS_TRACKED = {
  1: 1,
  2: 2,
  3: 5,
  4: 4,
  5: 3,
  6: 1,
};

export const D6_STATS_UNTRACKED = {
  1: 4,
  2: 5,
  3: 3,
  4: 1,
  5: 1,
  6: 0,
};

// Rate Distribution: [94,3,2,1]
const VARIATION_1x3_RARE = {
  0: 94,
  1: 3,
  2: 2,
  3: 1,
};

// Rate Distribution: [82,4,3,3,3,2,2,1]
const VARIATION_1x8_RARE = {
  0: 82,
  1: 4,
  2: 3,
  3: 2,
  4: 3,
  5: 3,
  6: 2,
  7: 1,
};

// Rate Distribution: [,5,4,4,4,4,3,3,3,2,2,1]
const VARIATION_1x12_RARE = {
  0: 65,
  1: 5,
  2: 4,
  3: 4,
  4: 4,
  5: 4,
  6: 3,
  7: 3,
  8: 3,
  9: 2,
  10: 2,
  11: 1,
};

const VARIATION_1x16_RARE = {
  0: 45,
  1: 5,
  2: 5,
  3: 5,
  4: 5,
  5: 5,
  6: 4,
  7: 4,
  8: 4,
  9: 4,
  10: 3,
  11: 3,
  12: 3,
  13: 2,
  14: 2,
  15: 1,
};

// Rate Distribution: [10][4,3,2,1]
const VARIATION_1x3_DEFAULT = {
  0: 40, // 4 x 10
  1: 30, // 3 x 10
  2: 20, // 2 x 10
  3: 10, // 1 x 10
};

// Rate Distribution: [6,4][6,4]
const VARIATION_2x2_DEFAULT = {
  0: 36, // 6 x 6
  1: 24, // 6 x 4
  2: 24, // 4 x 6
  3: 16, // 4 x 4
};

// Rate Distribution: [9,1][8,2]
const VARIATION_2x2_WEIGHTED = {
  0: 72, // 9 x 8
  1: 18, // 9 x 2
  2: 8, // 1 x 8
  3: 2, // 1 x 2
};

// Rate Distribution: [6,4][4,3,2,1]
const VARIATION_2x4_DEFAULT = {
  0: 24, // 6 x 4
  1: 18, // 6 x 3
  2: 12, // 6 x 2
  3: 6, // 6 x 1
  4: 16, // 4 x 4
  5: 12, // 4 x 3
  6: 8, // 4 x 2
  7: 4, // 4 x 1
};

// Rate Distribution: [9,1][4,3,2,1]
const VARIATION_2x4_WEIGHTED = {
  0: 24, // 9 x 6
  1: 18, // 9 x 2
  2: 12, // 9 x 1
  3: 6, // 9 x 1
  4: 16, // 1 x 6
  5: 12, // 1 x 2
  6: 8, // 1 x 1
  7: 4, // 1 x 1
};

// Rate Distribution: [6,3,1][4,3,2,1]
const VARIATION_3x4_DEFAULT = {
  0: 24, // 6 x 4
  1: 18, // 6 x 3
  2: 12, // 6 x 2
  3: 6, // 6 x 1
  4: 12, // 3 x 4
  5: 9, // 3 x 3
  6: 6, // 3 x 2
  7: 3, // 3 x 1
  8: 4, // 1 x 4
  9: 3, // 1 x 3
  10: 2, // 1 x 2
  11: 1, // 1 x 1
};

// Rate Distribution: [5,3,2][4,3,2,1]
const VARIATION_3x4_WEIGHTED = {
  0: 20, // 5 x 4
  1: 15, // 5 x 3
  2: 10, // 5 x 2
  3: 5, // 5 x 1
  4: 12, // 3 x 4
  5: 9, // 3 x 3
  6: 6, // 3 x 2
  7: 3, // 3 x 1
  8: 8, // 2 x 4
  9: 6, // 2 x 3
  10: 4, // 2 x 2
  11: 2, // 2 x 1
};

// Rate Distribution: [4,3,2,1][4,3,2,1]
const VARIATION_4x4_DEFAULT = {
  0: 16, // 4 x 4
  1: 12, // 4 x 3
  2: 8, // 4 x 2
  3: 4, // 4 x 1
  4: 12, // 3 x 4
  5: 9, // 3 x 3
  6: 6, // 3 x 2
  7: 3, // 3 x 1
  8: 8, // 2 x 4
  9: 6, // 2 x 3
  10: 4, // 2 x 2
  11: 2, // 2 x 1
  12: 4, // 1 x 4
  13: 3, // 1 x 3
  14: 2, // 1 x 2
  15: 1, // 1 x 1
};

// Rate Distribution: [7,1,1,1][7,1,1,1]
const VARIATION_4x4_WEIGHTED = {
  0: 49, // 7 x 7
  1: 7, // 7 x 1
  2: 7, // 7 x 1
  3: 7, // 7 x 1
  4: 7, // 1 x 7
  5: 1, // 1 x 1
  6: 1, // 1 x 1
  7: 1, // 1 x 1
  8: 7, // 1 x 7
  9: 1, // 1 x 1
  10: 1, // 1 x 1
  11: 1, // 1 x 1
  12: 7, // 1 x 7
  13: 1, // 1 x 1
  14: 1, // 1 x 1
  15: 1, // 1 x 1
};

export const VARIATION_KEYS = {
  HEIGHT: 'HEIGHT',
  BUILD: 'BUILD',
  D6_STATS_DEFAULT: 'D6_STATS_DEFAULT',
  D6_STATS_TRACKED: 'D6_STATS_TRACKED',
  D6_STATS_UNTRACKED: 'D6_STATS_UNTRACKED',
  VARIATION_1x3_DEFAULT: 'VARIATION_1x3_DEFAULT',
  VARIATION_2x2_DEFAULT: 'VARIATION_2x2_DEFAULT',
  VARIATION_2x2_WEIGHTED: 'VARIATION_2x2_WEIGHTED',
  VARIATION_2x4_DEFAULT: 'VARIATION_2x4_DEFAULT',
  VARIATION_2x4_WEIGHTED: 'VARIATION_2x4_WEIGHTED',
  VARIATION_3x4_DEFAULT: 'VARIATION_3x4_DEFAULT',
  VARIATION_3x4_WEIGHTED: 'VARIATION_3x4_WEIGHTED',
  VARIATION_4x4_DEFAULT: 'VARIATION_4x4_DEFAULT',
  VARIATION_4x4_WEIGHTED: 'VARIATION_4x4_WEIGHTED',
  VARIATION_1x3_RARE: 'VARIATION_1x3_RARE',
  VARIATION_1x8_RARE: 'VARIATION_1x8_RARE',
  VARIATION_1x12_RARE: 'VARIATION_1x12_RARE',
  VARIATION_1x16_RARE: 'VARIATION_1x16_RARE',
};

export const VARIATIONS = {
  [VARIATION_KEYS.BUILD]: BUILD,
  [VARIATION_KEYS.HEIGHT]: HEIGHT,
  [VARIATION_KEYS.D6_STATS_DEFAULT]: D6_STATS_DEFAULT,
  [VARIATION_KEYS.D6_STATS_TRACKED]: D6_STATS_TRACKED,
  [VARIATION_KEYS.D6_STATS_UNTRACKED]: D6_STATS_UNTRACKED,
  [VARIATION_KEYS.VARIATION_1x3_DEFAULT]: VARIATION_1x3_DEFAULT,
  [VARIATION_KEYS.VARIATION_2x2_DEFAULT]: VARIATION_2x2_DEFAULT,
  [VARIATION_KEYS.VARIATION_2x2_WEIGHTED]: VARIATION_2x2_WEIGHTED,
  [VARIATION_KEYS.VARIATION_2x4_DEFAULT]: VARIATION_2x4_DEFAULT,
  [VARIATION_KEYS.VARIATION_2x4_WEIGHTED]: VARIATION_2x4_WEIGHTED,
  [VARIATION_KEYS.VARIATION_3x4_DEFAULT]: VARIATION_3x4_DEFAULT,
  [VARIATION_KEYS.VARIATION_3x4_WEIGHTED]: VARIATION_3x4_WEIGHTED,
  [VARIATION_KEYS.VARIATION_4x4_DEFAULT]: VARIATION_4x4_DEFAULT,
  [VARIATION_KEYS.VARIATION_4x4_WEIGHTED]: VARIATION_4x4_WEIGHTED,
  [VARIATION_KEYS.VARIATION_1x3_RARE]: VARIATION_1x3_RARE,
  [VARIATION_KEYS.VARIATION_1x8_RARE]: VARIATION_1x8_RARE,
  [VARIATION_KEYS.VARIATION_1x12_RARE]: VARIATION_1x12_RARE,
  [VARIATION_KEYS.VARIATION_1x16_RARE]: VARIATION_1x16_RARE,
};

export const MULTIPLIER = {
  POSITIVE: 0.025,
  NEGATIVE: -0.025,
  ULTRA: 0.25,
};

export const PERCENTAGE = {
  UP: 0.1,
  DOWN: -0.1,
  MAX: 0.85,
  MIN: 0.15,
};

export const RANGE = {
  MOST: 5,
  MORE: 3,
  SOME: 1,
  BIT: -1,
  LESS: -3,
  LEAST: -5,
};

export const D6 = {
  ADD: 1,
  SUBTRACT: -1,
};
