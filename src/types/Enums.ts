// THIS FILE SHOULD BE MOVED TO UTILS

/**
 * Enum for firebase collections
 */
export const COLLECTIONS = {
  artists: 'artists',
  distributions: 'distributions',
  groups: 'groups',
  songs: 'songs',
};

export type Collection = keyof typeof COLLECTIONS;

export const LISTINGS = {
  artists: 'artists',
  groups: 'groups',
  songs: 'songs',
};

export type Listing = keyof typeof LISTINGS;

/**
 * A performer's main area of focus
 */
export const TRACKS = {
  VOCAL: 'VOCAL',
  RAP: 'RAP',
  DANCE: 'DANCE',
};

/**
 * A performer's main area of focus
 */
export type Track = keyof typeof TRACKS;

/**
 * The type of an individual
 */
export const SPECIES = {
  squirrel: 'squirrel',
  duck: 'duck',
  dog: 'dog',
  rabbit: 'rabbit',
  bear: 'bear',
};

/**
 * The type of an individual
 */
export type Species = keyof typeof SPECIES;

/**
 * The height type of an individual
 */
export const HEIGHT = {
  EXTRA_SHORT: 'EXTRA_SHORT',
  SHORT: 'SHORT',
  AVERAGE: 'AVERAGE',
  TALL: 'TALL',
  EXTRA_TALL: 'EXTRA_TALL',
};

/**
 * The height type of an individual
 */
export type Height = keyof typeof HEIGHT;

/**
 * The build body type of an individual
 */
export const BUILD = {
  MUSCULAR: 'MUSCULAR',
  ATHLETIC: 'ATHLETIC',
  AVERAGE: 'AVERAGE',
  SLIM: 'SLIM',
  SKINNY: 'SKINNY',
};

/**
 * The build body type of an individual
 */
export type Build = keyof typeof BUILD;

/**
 * The necessary skill of a song line
 */
export const SKILL = {
  AD_LIB: 'AD_LIB',
  CHOIR: 'CHOIR',
  DANCE: 'DANCE',
  RAP: 'RAP',
  VOCAL: 'VOCAL',
};

export type Skill = keyof typeof SKILL;

export type SkillLevel = 1 | 2 | 3;

/**
 * The skill subtype for a skill
 */
export const SKILL_SUBTYPE = {
  [SKILL.AD_LIB]: {
    BELT: 'BELT',
    SFX: 'SFX',
    SHOUT: 'SHOUT',
    RAP: 'RAP',
    REGULAR: 'REGULAR',
    RUN: 'RUN',
    WHISPER: 'WHISPER',
  },
  [SKILL.CHOIR]: {
    CHANTING: 'CHANTING',
    REGULAR: 'REGULAR',
    SHOUTING: 'SHOUTING',
  },
  [SKILL.DANCE]: {
    GROUP: 'GROUP',
    LIPSYNC: 'LIPSYNC',
    POSING: 'POSING',
    SOLO: 'SOLO',
  },
  [SKILL.RAP]: {
    SLOW: 'SLOW',
    REGULAR: 'REGULAR',
    FAST: 'FAST',
    SPOKEN: 'SPOKEN',
  },
  [SKILL.VOCAL]: {
    HIGH: 'HIGH',
    LOW: 'LOW',
    REGULAR: 'REGULAR',
  },
};

export type SkillType = typeof SKILL_SUBTYPE[Skill][keyof typeof SKILL_SUBTYPE[Skill]];

export const SECTION_KIND = {
  BREAK: 'BREAK',
  BRIDGE: 'BRIDGE',
  CHORUS: 'CHORUS',
  DANCE_BREAK: 'DANCE_BREAK',
  DROP: 'DROP',
  HOOK: 'HOOK',
  INSTRUMENTAL_SOLO: 'INSTRUMENTAL_SOLO',
  INTRO: 'INTRO',
  OUTRO: 'OUTRO',
  POST_CHORUS: 'POST_CHORUS',
  PRE_CHORUS: 'PRE_CHORUS',
  RAP: 'RAP',
  SPECIAL: 'SPECIAL',
  UNKNOWN: 'UNKNOWN',
  VERSE: 'VERSE',
};

export type SectionKind = keyof typeof SECTION_KIND;
