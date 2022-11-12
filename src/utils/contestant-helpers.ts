import _, { shuffle } from "lodash";
import { AGES, TRACK, VARIATIONS, VARIATION_KEYS } from "./constants";
import { getRandomItem, getRandomNumber } from "./helpers";
import { SHUFFLED_TRAITS } from "./traits";
import { Contestant, Trait } from "./types";

/**
 * Generates a contestant id based of their name
 * @param name
 * @returns
 */
export function generateContestantId(name: string): string {
  return `_${name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Replace characters with accents
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
 * Updates contestant given property with given value
 * @param contestant
 * @param path
 * @param value
 * @returns
 */
export function updateContestant(contestant: Contestant, path: string, value: any): Contestant {
  return _.set(contestant, path, value);
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
  updateContestant(
    contestant,
    "stats.stage.vocal",
    contestant.track === TRACK.VOCAL ? trackedStat : currentStat
  );
  currentStat = contestant.track === TRACK.VOCAL ? currentStat : untrackedStat2;

  updateContestant(contestant, "stats.stage.rap", contestant.track === TRACK.RAP ? trackedStat : currentStat);
  currentStat = contestant.track === TRACK.RAP ? currentStat : untrackedStat2;

  updateContestant(
    contestant,
    "stats.stage.dance",
    contestant.track === TRACK.DANCE ? trackedStat : currentStat
  );
}

export function buildGeneralStats(contestant: Contestant, max: number) {
  const highValue = getRandomItem([4, 5, 5, 6]);
  let remainingPoints = max - highValue;
  const result = [highValue];
  const values = shuffle([1, 2, 2, 3, 3, 4, 4, 4, 4, 4]);
  const keys = ["stagePresence", "visual", "charisma", "likeability", "rhetoric", "leadership"];
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
    updateContestant(contestant, `stats.general.${key}`, shuffledResults[index]);
  });
}

export function buildSkillsStats(contestant: Contestant) {
  const values = Array(6)
    .fill(0)
    .map((_) => Math.random());

  const keys = ["learning", "memory", "style", "sanity", "stamina", "luck"];

  keys.forEach((key, index) => {
    updateContestant(contestant, `stats.skills.${key}`, Math.round(values[index] * 100) / 100);
  });
}

const usedTraits: Record<string, boolean> = {};

export function distributeTraits(contestant: Contestant) {
  // Gather 3 unique traits
  const contestantTraits: Trait[] = [];
  const contestantGroups: Record<string, boolean> = {};
  let index = 0;
  while (contestantTraits.length < 3) {
    const selectedTrait = SHUFFLED_TRAITS[index];
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
      updateContestant(contestant, path, value);
    });
  });

  updateContestant(
    contestant,
    "keywords",
    contestantTraits.map((t) => t.keyword)
  );
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

  updateContestant(contestant, "stats.alignment.x", x);
  updateContestant(contestant, "stats.alignment.y", y);
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
    updateContestant(contestant, `stats.stage.${key}`, cleanupD6(value));
  });
  // General
  Object.entries(contestant.stats.general).forEach(([key, value]) => {
    updateContestant(contestant, `stats.general.${key}`, cleanupD6(value));
  });
  // Skills
  Object.entries(contestant.stats.skills).forEach(([key, value]) => {
    updateContestant(contestant, `stats.skills.${key}`, cleanupPercentage(value));
  });
  // Personality
  Object.entries(contestant.stats.personality).forEach(([key, value]) => {
    updateContestant(contestant, `stats.personality.${key}`, cleanupRange(value));
  });
  // Multipliers
  Object.entries(contestant.stats.multipliers).forEach(([key, value]) => {
    updateContestant(contestant, `stats.multipliers.${key}`, cleanupMultiplier(value));
  });
}

export function determinePersonalityType(contestant: Contestant) {
  const types: string[] = ["E", "N", "T", "J"];
  // Extroverts vs Introverts
  types[0] = contestant.stats.personality.extroversion > 0 ? "E" : "I";
  // Sensors vs Intuitives
  if (contestant.stats.personality.sensitivity > 0) types[1] = "S";
  if (contestant.stats.personality.curiosity > 0) types[1] = "N";
  // Thinkers vs Feelers
  if (contestant.stats.personality.sensitivity < 0) types[2] = "T";
  if (contestant.stats.personality.gentleness > 0) types[2] = "F";
  // Judgers vs Perceivers
  if (contestant.stats.personality.sincerity < 0) types[3] = "J";
  if (contestant.stats.personality.sensitivity < 0) types[3] = "P";

  updateContestant(contestant, `personalityType.type`, types.join(""));
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
