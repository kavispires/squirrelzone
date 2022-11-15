import { shuffle } from "../helpers";
import { Trait } from "../types";
import { COMMON_TRAITS } from "./common";
import { INTERESTS } from "./interests";

export const TRAITS_DICT = [...COMMON_TRAITS, ...INTERESTS].reduce((acc: Record<string, Trait>, entry) => {
  acc[entry.keyword] = entry;

  return acc;
}, {});

export const SHUFFLED_TRAITS = shuffle(COMMON_TRAITS);

export const SHUFFLED_INTERESTS = shuffle(INTERESTS);
