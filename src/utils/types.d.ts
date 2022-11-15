import { ALIGNMENT_X_LABELS, ALIGNMENT_Y_LABELS, BUILD, HEIGHT, SIZE, SPECIES, TRACK } from "./constants";

export type Species = keyof typeof SPECIES;
export type Height = keyof typeof HEIGHT;
export type Build = keyof typeof BUILD;
export type Size = keyof typeof SIZE;
export type Track = keyof typeof TRACK;

export type Range0to3 = 0 | 1 | 2 | 3;
export type Range4to7 = 4 | 5 | 6 | 7;
export type Range8to15 = 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
export type Range16to31 = 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;

export type NumericVariant4 = Range0to3;
export type NumericVariant8 = Range0to3 | Range4to7;
export type NumericVariant16 = Range0to3 | Range4to7 | Range8to15;
export type NumericVariant32 = Range0to3 | Range4to7 | Range8to15 | Range16to31;

export type D6 = 1 | 2 | 3 | 4 | 5 | 6;
export type PolarRange = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;

export type ContestantId = string;
export type StaffId = string;

export interface Alignment {
  x: keyof typeof ALIGNMENT_X_LABELS;
  y: keyof typeof ALIGNMENT_Y_LABELS;
}

export type TraitUpdateAction = Record<string, number>;

export type HSLColor = {
  hue: number;
  saturation: number;
  lightness: number;
};

export interface Appearance {
  fur: {
    /**
     * Color of the fur (influences personality)
     */
    color: NumericVariant16;
    /**
     * Type of fur [simple, hairy, curly, fuzzy] (influences personality and modifies tail)
     */
    type: NumericVariant4;
  };
  snout: {
    /**
     * Color of the snout
     */
    color: NumericVariant4;
    /**
     * Color of the nose
     */
    nose: NumericVariant8;
  };
  eye: {
    /**
     * Color of the eye
     */
    color: NumericVariant16;
    /**
     * Eye lids type (influences personality)
     */
    lids: NumericVariant16;
  };
  mouth: {
    /**
     * The mouth style (influences personality)
     */
    type: NumericVariant32;
  };
  face: {
    /**
     * Facial hair like mustache, goatee, beard
     */
    hair: NumericVariant16;
    /**
     * Variations like marks, freckles, tattoos, acne, moles
     */
    variations: NumericVariant16;
  };
  hair: {
    /**
     * Forehead hair coverage
     */
    bangs: NumericVariant32;
    /**
     * The color of the hair
     */
    color: NumericVariant16;
    /**
     * Overall head hair
     */
    type: NumericVariant32;
    /**
     * When type is #12, a special color is generated
     */
    specialColor?: string;
  };
  /**
   * Any accessories like earrings, piercings, sunglasses, hats, tattoos
   */
  accessories: {
    arm: NumericVariant16;
    ear: NumericVariant4;
    eyebrow: NumericVariant4;
    eyes: NumericVariant4;
    head: NumericVariant4;
    nose: NumericVariant4;
  };
}

export interface Trait {
  keyword: string;
  title: string;
  description: string;
  type: string;
  group: string;
  setup: {
    set?: TraitUpdateAction;
    update: TraitUpdateAction;
  };
  effect: string;
}

export interface Contestant {
  /**
   * Unique id
   */
  id: ContestantId;
  /**
   * The type of individual
   */
  type: "contestant";
  /**
   * The name of the contestant
   */
  name: string;
  /**
   * The status of the contestant in relation to the show
   */
  status: "ACTIVE" | "ELIMINATED";
  /**
   * The signature hsl color of the contestant
   */
  color: HSLColor;
  /**
   * The age of the contestant in years
   */
  age: number;
  /**
   * The species of the contestant
   */
  species: Species;
  /**
   * The height type of the contestant (influences personality)
   */
  height: Height;
  /**
   * The build body type of the contestant (influences personality)
   */
  build: Build;
  /**
   *
   */
  dna: string;
  /**
   * Appearance details
   */
  appearance: Appearance;
  /**
   * One of the 3 main tracks a contestant can be in
   */
  track: Track;
  /**
   * Grade given during audition
   */
  grade: "A" | "B" | "C" | "D" | "F" | null;
  /**
   * Myers–Briggs Type Indicator (auto-generated)
   */
  personalityType: {
    type: string;
    name: string;
  };
  /**
   * Statistics about skills, identity, and personality of the contestant
   */
  stats: {
    /**
     * Value of stage performances properties
     */
    stage: {
      vocal: D6;
      rap: D6;
      dance: D6;
    };
    /**
     * Value of general performance properties
     */
    general: {
      stagePresence: D6;
      visual: D6;
      charisma: D6;
      rhetoric: D6;
      leadership: D6;
    };
    /**
     * Moral alignment
     */
    alignment: Alignment;
    /**
     * Stats used during tasks, challenges
     */
    skills: {
      /**
       * Ability to learn choreography fast (percentage)
       */
      learning: number;
      /**
       * Ability to memorize lyrics or lines fast (percentage)
       */
      memory: number;
      /**
       * Ability to keep yp with the stressful environment (percentage)
       */
      sanity: number;
      /**
       *  Ability to keep up with the routine, practices, and shooting (percentage)
       */
      stamina: number;
      /**
       * Ability to adapt to things outside of their comfort zone
       */
      adaptability: number;
    };
    /**
     * Personality stats auto-generated based other stats
     */
    personality: {
      /**
       * organized, diligent, hard-working VS disorganized, reckless, lazy
       */
      discipline: PolarRange;
      /**
       * curious, creative, unconventional VS close-minded, prosaic, conventional
       */
      curiosity: PolarRange;
      /**
       * Extroverted, social, assertive VS introverted, shy, reserved
       */
      extroversion: PolarRange;
      /**
       *
       */
      sensitivity: PolarRange;
      /**
       *
       */
      gentleness: PolarRange;
      /**
       *
       */
      sincerity: PolarRange;
      /**
       *
       */
      intelligence: PolarRange;
      /**
       *
       */
      happiness: PolarRange;
    };
    /**
     * Multipliers that increase contestant points
     */
    multipliers: {
      /**
       * Coefficient for likeability (0.1-0.125)
       */
      likeability: number;
      /**
       * Coefficient for how much they leave a mark with the audience, good or bad (0.1-0.125)
       */
      notability: number;
      /**
       * Ability to look fresh and cool (0.1-0.125)
       */
      style: number;
      /**
       * How likely they are to turn things on their favor by chance (0.1-0.125)
       */
      luck: number;
    };
  };
  traits: Trait[];
  counts: {
    /**
     * Broadcast rank based on popularity (per episode)
     */
    rank: number[];
    /**
     * Grade Point Average solely based on performance during competition (per episode)
     */
    GPA: number[];
    /**
     * Total points during the competition (per episode)
     */
    total: number[];
    /**
     * Points gained during stage performances (per episode)
     */
    performancePoints: number[];
    /**
     * Points gained during variety challenges (per episode)
     */
    varietyPoints: number[];
    /**
     * General Popularity among broadcast audience (per episode)
     */
    audiencePopularity: number[];
    /**
     * Popularity among fans of the show and the original group (per episode)
     */
    fanPopularity: number[];
    /**
     * Popularity among the show's staff (per episode)
     */
    staffPopularity: number[];
    /**
     * Popularity among other contestants (per episode)
     */
    peerPopularity: number[];
    /**
     * How long they were on screen (in minutes)
     */
    screenTime: number[];
  };
  /**
   * Relationship between this and every other contestant (how much he likes contestant X)
   */
  relationships: Record<ContestantId, number>;
  /**
   * How much staff members (host, judges, coaches, produces) like the contestant
   */
  staffLikeability: Record<StaffId, number>;
  /**
   * Keywords that influence how thew game works
   */
  keywords: string[];
  /**
   * Keywords that have triggered an effect and should not be reused
   */
  usedKeywords: string[];
  /**
   *
   */
  sortingValue: number;
}

export interface ColorData {
  rate: number;
  name: string;
  hex: string;
  update: TraitUpdateAction;
}

export interface AppearanceData {
  rate: number;
  name: string;
  update: TraitUpdateAction;
}
