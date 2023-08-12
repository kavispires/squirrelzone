import type {
  Build,
  Contestant,
  Height,
  HSLColor,
  NumericVariant16,
  NumericVariant4,
  NumericVariant8,
  Track,
} from 'types';
import NAMES from './names.json';
import { getRandomItem, getRandomUniqueItem } from './helpers';
import {
  buildGeneralStats,
  buildStageStats,
  cleanupStats,
  determineAlignment,
  determinePersonalityType,
  distributeTraits,
  generateContestantAge,
  generateContestantId,
  generateDNA,
  generateHSLAColors,
  generateRelationships,
  getVariant,
  getVariant32Values,
} from './contestant-helpers';
import { TRACK, VARIATION_KEYS } from './constants';
import { DNA_DISTRIBUTION } from './squirrel-appearance';

const usedNames: string[] = [];

type Options = {
  name?: string;
  color?: HSLColor;
};

const HAIR_TYPES = getVariant32Values();

export function createContestant(index: number, options?: Options) {
  const name = options?.name || getRandomUniqueItem(NAMES, usedNames);
  usedNames.push(name);
  const id = generateContestantId(name);

  const newContestant: Contestant = {
    id,
    name,
    status: 'ACTIVE',
    color: options?.color ?? {
      hue: 0,
      saturation: 0,
      lightness: 40,
    },
    type: 'contestant',
    age: generateContestantAge(),
    species: 'squirrel',
    height: getVariant(VARIATION_KEYS.HEIGHT, true) as Height,
    build: getVariant(VARIATION_KEYS.BUILD, true) as Build,
    dna: '',
    appearance: {
      fur: {
        color: getVariant(DNA_DISTRIBUTION['fur.color'].distributionType) as NumericVariant16,
        type: getVariant(DNA_DISTRIBUTION['fur.type'].distributionType) as NumericVariant4,
      },
      snout: {
        color: getVariant(DNA_DISTRIBUTION['snout.color'].distributionType) as NumericVariant4,
        nose: getVariant(DNA_DISTRIBUTION['snout.nose'].distributionType) as NumericVariant8,
        mouth: getVariant(DNA_DISTRIBUTION['snout.mouth'].distributionType) as NumericVariant16,
      },
      eye: {
        color: getVariant(DNA_DISTRIBUTION['eye.color'].distributionType) as NumericVariant16,
        lids: getVariant(DNA_DISTRIBUTION['eye.lids'].distributionType) as NumericVariant16,
      },
      face: {
        variations: getVariant(DNA_DISTRIBUTION['face.variations'].distributionType) as NumericVariant16,
      },
      hair: {
        type: HAIR_TYPES[index],
        bangs: HAIR_TYPES[index],
        color: getVariant(DNA_DISTRIBUTION['hair.color'].distributionType) as NumericVariant16,
        facial: getVariant(DNA_DISTRIBUTION['hair.facial'].distributionType) as NumericVariant16,
      },
      accessories: {
        arm: getVariant(DNA_DISTRIBUTION['accessories.arm'].distributionType) as NumericVariant8,
        ear: getVariant(DNA_DISTRIBUTION['accessories.ear'].distributionType) as NumericVariant4,
        nose: getVariant(DNA_DISTRIBUTION['accessories.nose'].distributionType) as NumericVariant4,
        eyebrow: getVariant(DNA_DISTRIBUTION['accessories.eyebrow'].distributionType) as NumericVariant4,
        eyes: getVariant(DNA_DISTRIBUTION['accessories.eyes'].distributionType) as NumericVariant8,
        head: getVariant(DNA_DISTRIBUTION['accessories.head'].distributionType) as NumericVariant8,
        neck: getVariant(DNA_DISTRIBUTION['accessories.neck'].distributionType) as NumericVariant4,
      },
    },
    track: getRandomItem(Object.values(TRACK)) as Track,
    grade: null,
    personalityType: {
      type: 'unknown',
      name: 'unknown',
    },
    stats: {
      stage: {
        vocal: 1,
        rap: 1,
        dance: 1,
      },
      general: {
        stagePresence: 1,
        visual: 1,
        charisma: 1,
        rhetoric: 1,
        leadership: 1,
      },
      alignment: {
        x: 1,
        y: 1,
      },
      skills: {
        learning: 0.5,
        memory: 0.5,
        sanity: 0.5,
        stamina: 0.5,
        adaptability: 0.5,
      },
      personality: {
        discipline: 0,
        curiosity: 0,
        extroversion: 0,
        sensitivity: 0,
        gentleness: 0,
        sincerity: 0,
        intelligence: 0,
        happiness: 0,
      },
      multipliers: {
        likeability: 0,
        notability: 0,
        style: 0,
        luck: 0,
      },
    },
    traits: [],
    counts: {
      rank: [],
      GPA: [],
      total: [],
      performancePoints: [],
      varietyPoints: [],
      audiencePopularity: [],
      fanPopularity: [],
      staffPopularity: [],
      peerPopularity: [],
      screenTime: [],
    },
    relationships: {},
    staffLikeability: 0,
    keywords: [],
    usedKeywords: [],
    sortingValue: 0,
  };

  // Add Stage Stats based on track
  buildStageStats(newContestant);

  // Add General Stats making a total of 21 points
  buildGeneralStats(newContestant, 0);

  // Add Skills Stats
  // buildSkillsStats(newContestant);

  // Distribute personality traits
  distributeTraits(newContestant, 'PERSONALITIES', 3);

  // // Distribute features
  distributeTraits(newContestant, 'FEATURES', 1);

  // // Distribute history
  distributeTraits(newContestant, 'HISTORY', 1);

  // // Distribute interests
  distributeTraits(newContestant, 'INTERESTS', 1);

  // TODO: Update stats according to physical appearance

  // Clean up stats (remove anything outside of the stat limit)
  cleanupStats(newContestant);

  // Setup alignment
  determineAlignment(newContestant);

  // Setup personality type
  determinePersonalityType(newContestant);

  // TODO: Generate DNA (svg key)
  newContestant.dna = generateDNA(newContestant);

  return newContestant;
}

export function createContestants(quantity = 12) {
  const colors = [
    ...generateHSLAColors(90, 60, 1.0, quantity / 3 + 3),
    ...generateHSLAColors(70, 50, 1.0, quantity / 3 + 5),
    ...generateHSLAColors(30, 80, 1.0, quantity / 3 + 7),
  ];

  const contestants: Record<string, Contestant> = {};

  Array(quantity)
    .fill(0)
    .forEach((_, index) => {
      const newContestant = createContestant(index, { color: colors[index] });
      contestants[newContestant.id] = newContestant;
    });

  generateRelationships(contestants);

  return contestants;
}

export function getTrackPosition(track: Track) {
  return {
    [TRACK.DANCE]: 'Dancer',
    [TRACK.RAP]: 'Rapper',
    [TRACK.VOCAL]: 'Vocalist',
  }[track as string];
}
