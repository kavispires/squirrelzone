import { shuffle } from '../helpers';
import { Trait } from 'types';
import { FEATURES } from './features';
import { HISTORY } from './history';
import { INTERESTS } from './interests';
import { PERSONALITIES } from './personalities';

export const TRAITS_DICT = [...FEATURES, ...HISTORY, ...INTERESTS, ...PERSONALITIES].reduce(
  (acc: Record<string, Trait>, entry) => {
    acc[entry.keyword] = entry;

    return acc;
  },
  {}
);

export const SHUFFLED_TRAITS = {
  FEATURES: shuffle(FEATURES),
  HISTORY: shuffle(HISTORY),
  INTERESTS: shuffle(INTERESTS),
  PERSONALITIES: shuffle(PERSONALITIES),
};
