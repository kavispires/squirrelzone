export const SPECIES = {
  squirrel: "squirrel",
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
  small: "small",
  medium: "medium",
  large: "large",
};

export const TRACK = {
  VOCAL: "VOCAL",
  RAP: "RAP",
  DANCE: "DANCE",
};

export const ALIGNMENT_X_LABELS = {
  0: "good",
  1: "neutral",
  2: "evil",
};

export const ALIGNMENT_Y_LABELS = {
  0: "lawful",
  1: "neutral",
  2: "chaotic",
};

export const ALIGNMENT_ARCHETYPE = {
  "0.0": "CRUSADER",
  "0.1": "BENEFACTOR",
  "0.2": "REBEL",
  "1.0": "JUDGE",
  "1.1": "UNDECIDED",
  "1.2": "FREE_SPIRIT",
  "2.0": "DOMINATOR",
  "2.1": "MALEFACTOR",
  "2.2": "CRUSADER",
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

const DEFAULT_4_VARIATION = {
  0: 40, // 4 x 10
  1: 30, // 3 x 10
  2: 20, // 2 x 10
  3: 10, // 1 x 10
};

const DEFAULT_8_VARIATION = {
  0: 24, // 6 x 4
  1: 18, // 6 x 3
  2: 12, // 6 x 2
  3: 6, // 6 x 1
  4: 16, // 4 x 4
  5: 12, // 4 x 3
  6: 8, // 4 x 2
  7: 4, // 4 x 1
};

const DEFAULT_12_VARIATION = {
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

const DEFAULT_16_VARIATION = {
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

export const VARIATION_KEYS = {
  DEFAULT_4_VARIATION: "DEFAULT_4_VARIATION",
  DEFAULT_8_VARIATION: "DEFAULT_8_VARIATION",
  DEFAULT_12_VARIATION: "DEFAULT_12_VARIATION",
  DEFAULT_16_VARIATION: "DEFAULT_16_VARIATION",
  HEIGHT: "HEIGHT",
  BUILD: "BUILD",
  D6_STATS_DEFAULT: "D6_STATS_DEFAULT",
  D6_STATS_TRACKED: "D6_STATS_TRACKED",
  D6_STATS_UNTRACKED: "D6_STATS_UNTRACKED",
};

export const VARIATIONS = {
  [VARIATION_KEYS.BUILD]: BUILD,
  [VARIATION_KEYS.DEFAULT_4_VARIATION]: DEFAULT_4_VARIATION,
  [VARIATION_KEYS.DEFAULT_8_VARIATION]: DEFAULT_8_VARIATION,
  [VARIATION_KEYS.DEFAULT_12_VARIATION]: DEFAULT_12_VARIATION,
  [VARIATION_KEYS.DEFAULT_16_VARIATION]: DEFAULT_16_VARIATION,
  [VARIATION_KEYS.HEIGHT]: HEIGHT,
  [VARIATION_KEYS.D6_STATS_DEFAULT]: D6_STATS_DEFAULT,
  [VARIATION_KEYS.D6_STATS_TRACKED]: D6_STATS_TRACKED,
  [VARIATION_KEYS.D6_STATS_UNTRACKED]: D6_STATS_UNTRACKED,
};
