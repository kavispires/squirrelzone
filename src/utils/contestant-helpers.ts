import _, { constant } from 'lodash';
import { AGES, TRACK, VARIATIONS, VARIATION_KEYS } from './constants';
import {
  getLastItem,
  getRandomItem,
  getRandomNumber,
  makeNewArray,
  rollDice,
  rollDices,
  shuffle,
} from './helpers';
import { SHUFFLED_TRAITS } from './traits';
import {
  Appearance,
  Contestant,
  ContestantId,
  CountKeys,
  D6,
  NumericVariant16,
  NumericVariant32,
  NumericVariant4,
  NumericVariant8,
  Trait,
} from 'types';
import { DNA_DISTRIBUTION } from './squirrel-appearance';

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
  }
  return variantCache[name];
}

/**
 * Generates the age of the contestant based on common ages
 * @returns the age
 */
export function generateContestantAge(): number {
  const ageIndex = getVariant(VARIATION_KEYS.VARIATION_3x4_DEFAULT) as number;
  const age = AGES[ageIndex];
  const increment = getRandomNumber(0, 9);
  return Number(age) + increment / 10;
}

/**
 * Get a value of the contestant
 * @param contestant
 * @param path
 * @returns contestant
 */
function get(contestant: Contestant, path: string) {
  return _.get(contestant, path);
}

/**
 * Add any value to a contestant property
 * @param contestant
 * @param path
 * @param value
 * @returns contestant
 */
function set(contestant: Contestant, path: string, value: unknown): Contestant {
  return _.set(contestant, path, value);
}

/**
 * Updates value in given path
 * @param contestant
 * @param path
 * @param value
 */
function update(contestant: Contestant, path: string, value: unknown): Contestant {
  return _.update(contestant, path, (n: unknown) => {
    // If number and number, add values
    if (typeof n === 'number' && typeof value === 'number') {
      return n + value;
    }

    // If array, concat is value is array or push
    if (Array.isArray(n)) {
      if (Array.isArray(value)) {
        return [...n, ...value];
      }
      n.push(value);
      return n;
    }

    // If object, add or remove
    if (typeof n === 'object' && n !== null) {
      if (typeof value === 'object') {
        return { ...n, ...value };
      }
    }

    return value;
  });
}

/**
 * Add a keyword to contestant
 * @param contestant
 * @param keyword
 */
function addKeyword(contestant: Contestant, keyword: string): Contestant {
  contestant.keywords.push(keyword);
  return contestant;
}

/**
 * Move a keyword to the usedKeywords list
 * @param contestant
 * @param keyword
 */
function useKeyword(contestant: Contestant, keyword: string): Contestant {
  const usedKeyword = _.pull(contestant.keywords, keyword);
  if (usedKeyword.length > 0) {
    contestant.usedKeywords = [...contestant.usedKeywords, ...usedKeyword];
  }
  return contestant;
}

/**
 * Check if contestant has keyword
 * @param contestant
 * @param keyword
 */
function hasKeyword(contestant: Contestant, keyword: string): boolean {
  return contestant.keywords.includes(keyword);
}

/**
 * Add p
 * @param contestant
 * @param type
 * @param points
 * @param index
 * @returns
 */
function addCount(contestant: Contestant, type: CountKeys, points: number, index: number) {
  return _.update(contestant, 'counts', (counts: Record<CountKeys, number[]>) => {
    const position = index ?? counts[type].length - 1;
    // if (Number.isNaN(points)) {
    //   debugger;
    // }

    counts[type][position] = (counts[type][position] ?? 0) + points;

    if (type !== 'total') {
      counts.total[position] = (counts.total[position] ?? 0) + points;
      console.log(contestant.name, type, counts[type][position], counts.total.join(', '));
    }

    return counts;
  });
}

function getTrackStageSkill(contestant: Contestant, track?: string): D6 {
  const selectedTrack = track || String(contestant.track);
  return (
    {
      VOCAL: contestant.stats.stage.vocal,
      RAP: contestant.stats.stage.rap,
      DANCE: contestant.stats.stage.dance,
    }[selectedTrack] ?? 1
  );
}

/**
 * Makes D6 rolls, but only accept the value if at max +1 than stat
 * @param stat
 * @returns
 */
function stageRoll(stat: D6) {
  const roll = rollDices(stat);
  return roll >= stat + 1 ? stat : roll;
}

function gateKeepStatRoll(stat: number, roll: number) {
  return roll > stat ? stat : roll;
}

/**
 * Makes a D6 roll and return 1 if roll is equal or less than the stat
 * @param stat
 * @returns 1 | 0
 */
function generalRoll(stat: D6) {
  const roll = rollDice();
  return roll <= stat ? 1 : 0;
}

function perform(contestant: Contestant, track: string) {
  // Roll D6s equal to tracked skill but contestant can never get more than +1 of tracked skill
  const stageSkill = getTrackStageSkill(contestant, track);
  const roll = stageRoll(stageSkill);

  // Roll 1D6 for charisma, stagePresence, and visual. Keep pips up to each state
  const charisma = generalRoll(contestant.stats.general.charisma);
  const stagePresence = generalRoll(contestant.stats.general.stagePresence);
  const visual = generalRoll(contestant.stats.general.visual);

  return roll + charisma + stagePresence + visual;
}

export const contestantMethods = {
  get,
  set,
  update,
  addKeyword,
  useKeyword,
  hasKeyword,
  addCount,
  getTrackStageSkill,
  perform,
  stageRoll,
  generalRoll,
};

function setSortingValue(contestant: Contestant, sortingTypes: CountKeys[], index: number): number {
  const value = sortingTypes.reduce((acc, countName) => {
    const count = get(contestant, `counts.${countName}`) ?? [];
    acc += index < 0 ? getLastItem(count) : count[index];
    return acc;
  }, 0);
  set(contestant, 'sortingValue', value);
  return value;
}

export function rankContestants(
  contestants: Record<ContestantId, Contestant> | Contestant[],
  sortingTypes: CountKeys[],
  episodeNumber: number
) {
  const contestantsList = Object.values(contestants);
  // Build and set sorting value while saving the sorting values to a rankings array
  const rankings: number[] = contestantsList.map((contestant) =>
    setSortingValue(contestant, sortingTypes, -1)
  );
  // Sort
  rankings.sort((a, b) => b - a);

  const usedRanks: Record<string, true> = {};
  contestantsList.forEach((contestant) => {
    if (contestant.status === 'ACTIVE') {
      let rank = rankings.indexOf(contestant.sortingValue) + 1;

      while (usedRanks[rank] !== undefined) {
        rank += 1;
      }
      usedRanks[rank] = true;
      contestantMethods.set(contestant, `counts.rank.[${episodeNumber}]`, rank);
    } else {
      contestantMethods.set(
        contestant,
        `counts.rank.[${episodeNumber}]`,
        getLastItem(contestant.counts.rank)
      );
    }
  });
}

/**
 * Makes contestant dictionary from list
 * @param contestants
 * @returns
 */
export function makeContestantDictionaryFromList(contestants: Contestant[]) {
  return contestants.reduce((acc: Record<ContestantId, Contestant>, contestant) => {
    acc[contestant.id] = contestant;
    return acc;
  }, {});
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
  contestantMethods.set(
    contestant,
    'stats.stage.vocal',
    contestant.track === TRACK.VOCAL ? trackedStat : currentStat
  );
  currentStat = contestant.track === TRACK.VOCAL ? currentStat : untrackedStat2;

  contestantMethods.set(
    contestant,
    'stats.stage.rap',
    contestant.track === TRACK.RAP ? trackedStat : currentStat
  );
  currentStat = contestant.track === TRACK.RAP ? currentStat : untrackedStat2;

  contestantMethods.set(
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
  // const values = shuffle([1, 2, 2, 3, 3, 4, 4, 4, 4, 4]);
  const values = [3, 3, 3, 3, 3, 3];
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
    contestantMethods.set(contestant, `stats.general.${key}`, shuffledResults[index]);
  });
}

export function buildSkillsStats(contestant: Contestant) {
  // Learning (min: 0.5)
  contestantMethods.set(
    contestant,
    'stats.skills.learning',
    Math.max(0.5, Math.round(Math.random() * 100) / 100)
  );
  // Memory (min: 0.5)
  contestantMethods.set(
    contestant,
    'stats.skills.memory',
    Math.max(0.5, Math.round(Math.random() * 100) / 100)
  );
  // Style (no minimum)
  contestantMethods.set(contestant, 'stats.skills.style', Math.round(Math.random() * 100) / 100);
  // Memory (min: 0.75)
  contestantMethods.set(
    contestant,
    'stats.skills.sanity',
    Math.max(0.75, Math.round(Math.random() * 100) / 100)
  );
  // Stamina (min: 0.5)
  contestantMethods.set(
    contestant,
    'stats.skills.stamina',
    Math.max(0.5, Math.round(Math.random() * 100) / 100)
  );
  // Luck (no minimum)
  contestantMethods.set(contestant, 'stats.skills.luck', Math.round(Math.random() * 100) / 100);
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
      contestantMethods.update(contestant, path, value);
    });
  });

  contestantMethods.set(contestant, 'keywords', [
    ...contestant.keywords,
    ...contestantTraits.map((t) => t.keyword),
  ]);
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

  contestantMethods.set(contestant, 'stats.alignment.x', x);
  contestantMethods.set(contestant, 'stats.alignment.y', y);
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
    contestantMethods.set(contestant, `stats.stage.${key}`, cleanupD6(value));
  });
  // General
  Object.entries(contestant.stats.general).forEach(([key, value]) => {
    contestantMethods.set(contestant, `stats.general.${key}`, cleanupD6(value));
  });
  // Skills
  Object.entries(contestant.stats.skills).forEach(([key, value]) => {
    contestantMethods.set(contestant, `stats.skills.${key}`, cleanupPercentage(value));
  });
  // Personality
  Object.entries(contestant.stats.personality).forEach(([key, value]) => {
    contestantMethods.set(contestant, `stats.personality.${key}`, cleanupRange(value));
  });
  // Multipliers
  Object.entries(contestant.stats.multipliers).forEach(([key, value]) => {
    contestantMethods.set(contestant, `stats.multipliers.${key}`, cleanupMultiplier(value));
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

  contestantMethods.set(contestant, `personalityType.type`, types.join(''));
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
  const dnaDistribution = Object.values(DNA_DISTRIBUTION);
  const dna: number[] = makeNewArray(dnaDistribution.length);

  dnaDistribution.forEach(({ index, part, type }) => {
    dna[index] = _.get(contestant, `appearance.${part}.${type}`) ?? 0;
  });

  return dna.join(':');
}

export function parseDNA(dna: string): Appearance {
  const splitDNA = dna.split(':').map((v) => Number(v));

  return {
    fur: {
      color: splitDNA[DNA_DISTRIBUTION['fur.color'].index] as NumericVariant16,
      type: splitDNA[DNA_DISTRIBUTION['fur.type'].index] as NumericVariant4,
    },
    snout: {
      color: splitDNA[DNA_DISTRIBUTION['snout.color'].index] as NumericVariant4,
      mouth: splitDNA[DNA_DISTRIBUTION['snout.mouth'].index] as NumericVariant16,
      nose: splitDNA[DNA_DISTRIBUTION['snout.nose'].index] as NumericVariant8,
    },
    eye: {
      color: splitDNA[DNA_DISTRIBUTION['eye.color'].index] as NumericVariant16,
      lids: splitDNA[DNA_DISTRIBUTION['eye.lids'].index] as NumericVariant16,
    },
    face: {
      variations: splitDNA[DNA_DISTRIBUTION['face.variations'].index] as NumericVariant16,
    },
    hair: {
      color: splitDNA[DNA_DISTRIBUTION['hair.color'].index] as NumericVariant16,
      type: splitDNA[DNA_DISTRIBUTION['hair.type'].index] as NumericVariant32,
      bangs: splitDNA[DNA_DISTRIBUTION['hair.bangs'].index] as NumericVariant32,
      facial: splitDNA[DNA_DISTRIBUTION['hair.facial'].index] as NumericVariant16,
    },
    accessories: {
      arm: splitDNA[DNA_DISTRIBUTION['accessories.arm'].index] as NumericVariant8,
      ear: splitDNA[DNA_DISTRIBUTION['accessories.ear'].index] as NumericVariant4,
      eyebrow: splitDNA[DNA_DISTRIBUTION['accessories.eyebrow'].index] as NumericVariant4,
      eyes: splitDNA[DNA_DISTRIBUTION['accessories.eyes'].index] as NumericVariant8,
      head: splitDNA[DNA_DISTRIBUTION['accessories.head'].index] as NumericVariant8,
      nose: splitDNA[DNA_DISTRIBUTION['accessories.nose'].index] as NumericVariant4,
      neck: splitDNA[DNA_DISTRIBUTION['accessories.neck'].index] as NumericVariant4,
    },
  };
}

export const getContestantsRanking = (contestants: Contestant[]) => {
  const rank: ContestantId[] = [];

  contestants.forEach((contestant) => {
    rank[getLastItem(contestant.counts.rank) - 1] = contestant.id;
  });

  return rank;
};
