import { getTheSearchSeasonState } from 'hooks/useTheSearchSeasonState';
import { contestantMethods } from './contestant-helpers';

export const performOpeningSequence = () => {
  const episodeNumber = getTheSearchSeasonState('episode');
  const contestants = getTheSearchSeasonState('contestants');
  const episode0 = getTheSearchSeasonState('episode0');

  // Add members in the sequence
  if (episodeNumber > 0) {
    contestantMethods.addCount(contestants[episode0.charisma], 'audiencePopularity', 2, episodeNumber);
    contestantMethods.addCount(contestants[episode0.stagePresence], 'audiencePopularity', 2, episodeNumber);
    contestantMethods.addCount(contestants[episode0.visual], 'audiencePopularity', 2, episodeNumber);
  }

  // After audience know the voices of the participants, they also score points
  if (episodeNumber > 1) {
    contestantMethods.addCount(contestants[episode0.vocal], 'audiencePopularity', 3, episodeNumber);
    contestantMethods.addCount(contestants[episode0.rap], 'audiencePopularity', 3, episodeNumber);
  }
};
