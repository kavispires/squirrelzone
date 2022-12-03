import _ from 'lodash';
import { AGES, TRACK, VARIATIONS, VARIATION_KEYS } from './constants';
import { getRandomItem, getRandomNumber, shuffle } from './helpers';
import { SHUFFLED_INTERESTS, SHUFFLED_TRAITS } from './traits';
import {
  Appearance,
  Contestant,
  NumericVariant16,
  NumericVariant32,
  NumericVariant4,
  NumericVariant8,
  Trait,
} from 'types';

/**
 * Generates a contestant id based of their name
 * @param name
 * @returns
 */
export function generateContestantId(name: string): string {
  return `_${name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Replace characters with accents
    .toLowerCase()}`;
}

const variantCache: Record<string, string[]> = {};

function getVariantArray(variantObj: Record<string, number>, name: string) {
  if (variantCache[name] === undefined) {
    variantCache[name] = Object.keys(variantObj)
      .map((key) => Array(variantObj[key]).fill(key))
      .flat();
    console.log({ [name]: variantCache[name] });
  }
  return variantCache[name];
}

/**
 * Generates the age of the contestant based on common ages
 * @returns the age
 */
export function generateContestantAge(): number {
  const ageIndex = getVariant(VARIATION_KEYS.DEFAULT_12_VARIATION) as number;
  const age = AGES[ageIndex];
  const increment = getRandomNumber(0, 9);
  return Number(age) + increment / 10;
}

/**
 * Sets contestant given property with given value
 * @param contestant
 * @param path
 * @param value
 * @returns
 */
export function setContestant(contestant: Contestant, path: string, value: any): Contestant {
  return _.set(contestant, path, value);
}

/**
 * Sets contestant given property with given value
 * @param contestant
 * @param path
 * @param value
 * @returns
 */
export function updateContestantValue(contestant: Contestant, path: string, value: number): Contestant {
  return _.update(contestant, path, (n: number) => n + value);
}

/**
 * Gets variant number based on given key
 * @param key
 * @param keepAsString
 * @returns
 */
export function getVariant(key: string, keepAsString = false): number | string {
  const variationObj = VARIATIONS?.[key as keyof typeof VARIATIONS];
  const res = getRandomItem(getVariantArray(variationObj ?? VARIATIONS.DEFAULT_16_VARIATION, key));
  return keepAsString ? res : Number(res);
}

export function buildStageStats(contestant: Contestant) {
  const trackedStat = getVariant(VARIATION_KEYS.D6_STATS_TRACKED);
  let untrackedStat1 = getVariant(VARIATION_KEYS.D6_STATS_UNTRACKED);
  // A untracked stat cannot be lower than the track stat
  if (trackedStat < untrackedStat1) {
    untrackedStat1 = trackedStat;
  }
  let untrackedStat2 = getVariant(VARIATION_KEYS.D6_STATS_UNTRACKED);
  // A untracked stat cannot be lower than the track stat
  if (trackedStat < untrackedStat2) {
    untrackedStat2 = trackedStat;
  }
  let currentStat = untrackedStat1;

  // Vocals
  setContestant(
    contestant,
    'stats.stage.vocal',
    contestant.track === TRACK.VOCAL ? trackedStat : currentStat
  );
  currentStat = contestant.track === TRACK.VOCAL ? currentStat : untrackedStat2;

  setContestant(contestant, 'stats.stage.rap', contestant.track === TRACK.RAP ? trackedStat : currentStat);
  currentStat = contestant.track === TRACK.RAP ? currentStat : untrackedStat2;

  setContestant(
    contestant,
    'stats.stage.dance',
    contestant.track === TRACK.DANCE ? trackedStat : currentStat
  );
}

export function getVariant32Values() {
  return shuffle(
    Array(32)
      .fill(0)
      .map((e, i) => e + i)
  );
}

export function buildGeneralStats(contestant: Contestant, max: number) {
  const highValue = getRandomItem([4, 5, 5, 6]);
  let remainingPoints = max - highValue;
  const result = [highValue];
  const values = shuffle([1, 2, 2, 3, 3, 4, 4, 4, 4, 4]);
  const keys = ['stagePresence', 'visual', 'charisma', 'likeability', 'rhetoric', 'leadership'];
  for (let i = 1; i < keys.length; i++) {
    let val = values[i];
    const positionsLeft = keys.length - i - 1;
    if (remainingPoints - val < positionsLeft) {
      val = 2;
    }
    result.push(val);
  }

  const shuffledResults = shuffle(result);

  keys.forEach((key, index) => {
    setContestant(contestant, `stats.general.${key}`, shuffledResults[index]);
  });
}

export function buildSkillsStats(contestant: Contestant) {
  // Learning (min: 0.5)
  setContestant(contestant, 'stats.skills.learning', Math.max(0.5, Math.round(Math.random() * 100) / 100));
  // Memory (min: 0.5)
  setContestant(contestant, 'stats.skills.memory', Math.max(0.5, Math.round(Math.random() * 100) / 100));
  // Style (no minimum)
  setContestant(contestant, 'stats.skills.style', Math.round(Math.random() * 100) / 100);
  // Memory (min: 0.75)
  setContestant(contestant, 'stats.skills.sanity', Math.max(0.75, Math.round(Math.random() * 100) / 100));
  // Stamina (min: 0.5)
  setContestant(contestant, 'stats.skills.stamina', Math.max(0.5, Math.round(Math.random() * 100) / 100));
  // Luck (no minimum)
  setContestant(contestant, 'stats.skills.luck', Math.round(Math.random() * 100) / 100);
}

const usedTraits: Record<string, boolean> = {};

/**
 * Gather N unique trais for a contestant
 * @param contestant
 * @param quantity
 */
export function distributeTraits(contestant: Contestant, kind: keyof typeof SHUFFLED_TRAITS, quantity = 3) {
  const traitLibrary = SHUFFLED_TRAITS[kind];
  const contestantTraits: Trait[] = [];
  const contestantGroups: Record<string, boolean> = {};
  let index = 0;
  while (contestantTraits.length < quantity || index >= traitLibrary.length) {
    const selectedTrait = traitLibrary[index];
    const { keyword, type, group } = selectedTrait;
    const groupKey = `${type}-${group}`;
    // If it is not a used trait and not in a contestant used group
    if (!usedTraits[keyword] && !contestantGroups[groupKey]) {
      contestantTraits.push(selectedTrait);
      contestantGroups[groupKey] = true;
      usedTraits[keyword] = true;
    }
    index += 1;
  }

  // Apply setup
  contestantTraits.forEach((trait) => {
    Object.entries(trait.setup.update).forEach(([path, value]) => {
      updateContestantValue(contestant, path, value);
    });
  });

  setContestant(contestant, 'keywords', [...contestant.keywords, ...contestantTraits.map((t) => t.keyword)]);
}

export function determineAlignment(contestant: Contestant) {
  let x = contestant.stats.alignment.x as number; // Lawful vs Chaotic
  let y = contestant.stats.alignment.y as number; // Good vs evil

  const updateAxis = (prevVal: number, val: number) => {
    if ((prevVal === 2 && val > 0) || (prevVal === 0 && val < 0)) {
      return prevVal;
    }
    return prevVal + val;
  };

  const determineValue = (stat: number) => {
    if (stat > 0) return 1;
    if (stat < 0) return -1;
    return 0;
  };

  // Discipline
  x = updateAxis(x, determineValue(contestant.stats.personality.discipline * -1));
  // Curiosity
  x = updateAxis(x, determineValue(contestant.stats.personality.curiosity));
  // Extroversion
  x = updateAxis(x, determineValue(contestant.stats.personality.extroversion));
  // Sensitivity
  y = updateAxis(y, determineValue(contestant.stats.personality.sensitivity * -1));
  // Gentleness
  y = updateAxis(y, determineValue(contestant.stats.personality.gentleness * -1));
  // Sincerity
  y = updateAxis(x, determineValue(contestant.stats.personality.sincerity * -1));
  // Happiness

  setContestant(contestant, 'stats.alignment.x', x);
  setContestant(contestant, 'stats.alignment.y', y);
}

function cleanupD6(value: number) {
  if (value < 1) return 1;
  if (value > 6) return 6;
  return value;
}

function cleanupPercentage(value: number) {
  if (value < 0) return 0;
  if (value > 1) return 1;
  return value;
}

function cleanupMultiplier(value: number) {
  if (value <= 0) return 0.01;
  if (value > 1) return 1;
  return value;
}

function cleanupRange(value: number) {
  if (value < -5) return -5;
  if (value > 5) return 5;
  if (value === 0) {
    return getRandomItem([-1, 1]);
  }
  return value;
}

export function cleanupStats(contestant: Contestant) {
  // Stage
  Object.entries(contestant.stats.stage).forEach(([key, value]) => {
    setContestant(contestant, `stats.stage.${key}`, cleanupD6(value));
  });
  // General
  Object.entries(contestant.stats.general).forEach(([key, value]) => {
    setContestant(contestant, `stats.general.${key}`, cleanupD6(value));
  });
  // Skills
  Object.entries(contestant.stats.skills).forEach(([key, value]) => {
    setContestant(contestant, `stats.skills.${key}`, cleanupPercentage(value));
  });
  // Personality
  Object.entries(contestant.stats.personality).forEach(([key, value]) => {
    setContestant(contestant, `stats.personality.${key}`, cleanupRange(value));
  });
  // Multipliers
  Object.entries(contestant.stats.multipliers).forEach(([key, value]) => {
    setContestant(contestant, `stats.multipliers.${key}`, cleanupMultiplier(value));
  });
}

export function determinePersonalityType(contestant: Contestant) {
  const counts = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };
  // Extroverts
  if (contestant.stats.personality.extroversion > 0) {
    counts.E += contestant.stats.personality.extroversion;
  }
  // Introverts
  if (contestant.stats.personality.extroversion < 0) {
    counts.I += Math.abs(contestant.stats.personality.extroversion);
  }
  // Sensors
  if (contestant.stats.personality.intelligence > 0) {
    counts.S += contestant.stats.personality.intelligence;
  }
  if (contestant.stats.personality.curiosity < 0) {
    counts.S += Math.abs(contestant.stats.personality.curiosity);
  }
  // Intuitives
  if (contestant.stats.personality.curiosity > 0) {
    counts.N += contestant.stats.personality.curiosity;
  }
  if (contestant.stats.personality.intelligence < 0) {
    counts.N += Math.abs(contestant.stats.personality.intelligence);
  }
  if (contestant.stats.personality.sensitivity > 0) {
    counts.N += contestant.stats.personality.sensitivity;
  }
  // Thinkers
  if (contestant.stats.personality.intelligence > 0) {
    counts.T += contestant.stats.personality.intelligence;
  }
  if (contestant.stats.personality.sensitivity < 0) {
    counts.F += Math.abs(contestant.stats.personality.sensitivity);
  }
  // Feelers
  if (contestant.stats.personality.sincerity > 0) {
    counts.F += contestant.stats.personality.sincerity;
  }
  if (contestant.stats.personality.sensitivity > 0) {
    counts.F += contestant.stats.personality.sensitivity;
  }
  // Judgers
  if (contestant.stats.personality.discipline > 0) {
    counts.J += contestant.stats.personality.discipline;
  }
  if (contestant.stats.personality.sincerity < 0) {
    counts.J += Math.abs(contestant.stats.personality.sincerity);
  }
  if (contestant.stats.personality.gentleness < 0) {
    counts.J += Math.abs(contestant.stats.personality.gentleness);
  }
  // Perceivers
  if (contestant.stats.personality.discipline < 0) {
    counts.P += Math.abs(contestant.stats.personality.discipline);
  }
  if (contestant.stats.personality.gentleness > 0) {
    counts.P += contestant.stats.personality.gentleness;
  }

  const types: string[] = ['E', 'N', 'T', 'J'];
  types[0] = counts.E > counts.I ? 'E' : 'I';
  types[1] = counts.N > counts.S ? 'N' : 'S';
  types[2] = counts.T > counts.F ? 'T' : 'F';
  types[3] = counts.J > counts.P ? 'J' : 'P';

  setContestant(contestant, `personalityType.type`, types.join(''));
}

export function generateRelationships(contestants: Record<string, Contestant>) {
  Object.values(contestants).forEach((contestant) => {
    Object.values(contestants).forEach((friend) => {
      if (contestant.id !== friend.id) {
        contestant.relationships[friend.id] = 0;
      }
    });
  });
}

export function generateHSLAColors(saturation: number, lightness: number, alpha: number, amount: number) {
  let colors = [];
  let hueDelta = Math.trunc(360 / amount);

  for (let i = 0; i < amount; i++) {
    let hue = i * hueDelta;
    colors.push({
      hue,
      saturation,
      lightness,
    });
  }

  return colors;
}

export function generateDNA(contestant: Contestant) {
  const dna: number[] = [
    _.get(contestant, 'appearance.fur.color'),
    _.get(contestant, 'appearance.fur.type'),
    _.get(contestant, 'appearance.snout.color'),
    _.get(contestant, 'appearance.snout.mouth'),
    _.get(contestant, 'appearance.snout.nose'),
    _.get(contestant, 'appearance.eye.color'),
    _.get(contestant, 'appearance.eye.lids'),
    _.get(contestant, 'appearance.hair.bangs'),
    _.get(contestant, 'appearance.hair.color'),
    _.get(contestant, 'appearance.hair.type'),
    _.get(contestant, 'appearance.face.hair'),
    _.get(contestant, 'appearance.face.variations'),
    _.get(contestant, 'appearance.accessories.arm'),
    _.get(contestant, 'appearance.accessories.ear'),
    _.get(contestant, 'appearance.accessories.eyebrow'),
    _.get(contestant, 'appearance.accessories.eyes'),
    _.get(contestant, 'appearance.accessories.head'),
    _.get(contestant, 'appearance.accessories.nose'),
  ];

  return dna.join(':');
}

export function parseDNA(dna: string): Appearance {
  const splitDNA = dna.split(':').map((v) => Number(v));

  return {
    fur: {
      color: splitDNA[0] as NumericVariant16,
      type: splitDNA[1] as NumericVariant4,
    },
    snout: {
      color: splitDNA[2] as NumericVariant4,
      mouth: splitDNA[3] as NumericVariant16,
      nose: splitDNA[4] as NumericVariant8,
    },
    eye: {
      color: splitDNA[5] as NumericVariant16,
      lids: splitDNA[6] as NumericVariant16,
    },
    face: {
      hair: splitDNA[7] as NumericVariant16,
      variations: splitDNA[8] as NumericVariant16,
    },
    hair: {
      bangs: splitDNA[9] as NumericVariant32,
      color: splitDNA[10] as NumericVariant16,
      type: splitDNA[11] as NumericVariant32,
    },
    accessories: {
      arm: splitDNA[12] as NumericVariant16,
      ear: splitDNA[13] as NumericVariant4,
      eyebrow: splitDNA[14] as NumericVariant4,
      eyes: splitDNA[15] as NumericVariant4,
      head: splitDNA[16] as NumericVariant4,
      nose: splitDNA[17] as NumericVariant4,
    },
  };
}
