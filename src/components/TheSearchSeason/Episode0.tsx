import _ from 'lodash';
import {
  getTheSearchSeasonState,
  setTheSearchSeasonState,
  useTheSearchSeasonState,
} from 'hooks/useTheSearchSeasonState';
import { ContestantId } from 'types';
import { createContestants } from 'utils/contestant-builder';
import {
  getContestantsRanking,
  makeContestantDictionaryFromList,
  contestantMethods,
  rankContestants,
} from 'utils/contestant-helpers';
import { useEffectOnce } from 'react-use';
import { ContestantSnippet } from 'components/ContestantCard/ContestantSnippet';
import { Button, Space, Spin, Tag, Timeline } from 'antd';
import { TimelineEntry } from './TimelineEntry';

export function Episode0() {
  const [episode0] = useTheSearchSeasonState('episode0');
  const [contestants] = useTheSearchSeasonState('contestants');
  const [, setEpisode] = useTheSearchSeasonState('episode');

  useEffectOnce(() => {
    performEpisode0();
  });

  if (episode0.complete === false) {
    return (
      <Space>
        <Spin />
      </Space>
    );
  }

  return (
    <div className="episode-wrapper">
      <h1>Episode 0 - Teasers</h1>

      <Timeline>
        <TimelineEntry type="event">Promos are dropped and 4 contestants are revealed</TimelineEntry>
        <TimelineEntry type="info">
          <ContestantSnippet contestant={contestants?.[episode0.dance]} points={20} /> is featured.{' '}
          <Tag>The best dancer</Tag>
        </TimelineEntry>
        <TimelineEntry type="info">
          {Boolean(contestants?.[episode0.dance]) && (
            <ContestantSnippet contestant={contestants?.[episode0.stagePresence]} points={20} />
          )}{' '}
          is featured. <Tag>The one with most Stage Presence</Tag>
        </TimelineEntry>
        <TimelineEntry type="info">
          {Boolean(contestants?.[episode0.dance]) && (
            <ContestantSnippet contestant={contestants?.[episode0.visual]} points={20} />
          )}{' '}
          is featured. <Tag>The most handsome one</Tag>
        </TimelineEntry>
        <TimelineEntry type="info">
          {' '}
          {Boolean(contestants?.[episode0.dance]) && (
            <ContestantSnippet contestant={contestants?.[episode0.charisma]} points={45} />
          )}{' '}
          is heavily featured as the face of the show as <Tag>the one with most charisma</Tag>
        </TimelineEntry>
        <TimelineEntry type="info">
          {Boolean(contestants?.[episode0.vocal]) && (
            <ContestantSnippet contestant={contestants?.[episode0.vocal]} points={0} />
          )}{' '}
          and
          {Boolean(contestants?.[episode0.rap]) && (
            <ContestantSnippet contestant={contestants?.[episode0.rap]} points={0} />
          )}{' '}
          are featured in the theme song, but get no points yet because nobody knows them yet
        </TimelineEntry>
        <TimelineEntry type="event">The show starts next week...</TimelineEntry>
      </Timeline>

      <Space>
        <Button type="primary" size="large" onClick={() => setEpisode(1)}>
          Next Episode
        </Button>
      </Space>
    </div>
  );
}

function performEpisode0() {
  const episodeNumber = 0;
  if (getTheSearchSeasonState('episode0').complete) {
    return;
  }

  console.count('PERFORMING_EPISODE_0');
  // Gather 30 participais
  const newContestantsDict = createContestants(30);

  // Determine MVPs
  const contestants = Object.values(newContestantsDict);

  const counts: Record<ContestantId, Record<string, any>> = {};

  contestants.forEach((contestant) => {
    counts[contestant.id] = {
      id: contestant.id,
      stageStats:
        _.sum(Object.values(contestant.stats.stage)) * (1 + contestant.stats.multipliers.notability),
      generalStats:
        _.sum(Object.values(contestant.stats.general)) * (1 + contestant.stats.multipliers.likeability),
    };

    counts[contestant.id].total = counts[contestant.id].stageStats + counts[contestant.id].generalStats;
  });

  const rankedVocals = _.orderBy(
    contestants,
    ['stats.stage.vocal', 'stats.skills.memory', 'stats.general.charisma', 'stats.multipliers.likeability'],
    'desc'
  );

  const rankedRappers = _.orderBy(
    contestants,
    [
      'stats.stage.rap',
      'stats.skills.adaptability',
      'stats.general.stagePresence',
      'stats.multipliers.notability',
    ],
    'desc'
  );

  const rankedDancers = _.orderBy(
    contestants,
    [
      'stats.stage.dance',
      'stats.skills.stamina',
      'stats.multipliers.learning',
      'stats.general.stagePresence',
    ],
    'desc'
  );

  const rankedStagePresence = _.orderBy(
    contestants,
    [
      'stats.general.stagePresence',
      'stats.general.charisma',
      'stats.general.visual',
      'stats.multipliers.likeability',
      'stats.multipliers.notability',
    ],
    'desc'
  );

  const rankedVisuals = _.orderBy(
    contestants,
    [
      'stats.general.visual',
      'stats.general.charisma',
      'stats.general.stagePresence',
      'stats.multipliers.notability',
    ],
    'desc'
  );

  const rankedCharismas = _.orderBy(
    contestants,
    [
      'stats.general.charisma',
      'stats.general.stagePresence',
      'stats.general.visual',
      'stats.multipliers.likeability',
    ],
    'desc'
  );

  const previouslyChosen: ContestantId[] = [];
  const mpvs = {
    overall: '',
    vocal: '',
    rap: '',
    dance: '',
    visual: '',
    stagePresence: '',
    charisma: '',
  };

  // Determine the Best Overall
  const bestOverall = _.maxBy(Object.values(counts), 'total');
  mpvs.overall = bestOverall!.id;

  // Determine SP-vocal who will sing the theme song
  mpvs.vocal = rankedVocals[0].id;
  contestantMethods.addKeyword(rankedVocals[0], 'THEME_SONG_SINGER');
  // Determine SP-rap who will rap the theme song
  mpvs.rap = rankedRappers[0].id;
  contestantMethods.addKeyword(rankedRappers[0], 'THEME_SONG_SINGER');

  // Determine UNIQUE performers for the teaser
  let choice = rankedStagePresence[0];
  let index = 0;

  // Determine PP-presence
  mpvs.stagePresence = choice.id;
  previouslyChosen.push(choice.id);
  contestantMethods.addKeyword(choice, 'TEASER_FEATURE');
  contestantMethods.addCount(choice, 'audiencePopularity', 20, episodeNumber);

  // Determine SP-dancer
  while (previouslyChosen.includes(choice.id)) {
    choice = rankedDancers[index];
    mpvs.dance = choice.id;
    index += 1;
  }
  contestantMethods.addKeyword(choice, 'TEASER_FEATURE');
  contestantMethods.addCount(choice, 'audiencePopularity', 20, episodeNumber);
  previouslyChosen.push(choice.id);
  index = 0;

  // Determine PP-visual
  while (previouslyChosen.includes(choice.id)) {
    choice = rankedVisuals[index];
    mpvs.visual = choice.id;
    index += 1;
  }
  contestantMethods.addKeyword(choice, 'TEASER_FEATURE');
  contestantMethods.addCount(choice, 'audiencePopularity', 20, episodeNumber);
  previouslyChosen.push(choice.id);
  index = 0;

  // Determine PP-charisma
  while (previouslyChosen.includes(choice.id)) {
    choice = rankedCharismas[index];
    mpvs.charisma = choice.id;
    index += 1;
  }
  contestantMethods.addKeyword(choice, 'TEASER_FEATURE');
  contestantMethods.addCount(choice, 'audiencePopularity', 45, episodeNumber);

  // Distribute initial random points based on the bestOverall
  contestants.forEach((contestant) => {
    if (contestant.status === 'ACTIVE') {
      contestantMethods.addCount(
        contestant,
        'staffPopularity',
        Math.round((100 * counts[contestant.id].total) / (bestOverall?.total ?? 1)),
        episodeNumber
      );
    } else {
      // Eliminated contestants get 0
      contestantMethods.addCount(contestant, 'staffPopularity', 0, episodeNumber);
    }
  });

  rankContestants(contestants, ['total'], episodeNumber);

  setTheSearchSeasonState('ranking', getContestantsRanking(contestants));
  setTheSearchSeasonState('contestants', makeContestantDictionaryFromList(contestants));
  setTheSearchSeasonState('episode0', { ...mpvs, complete: true });

  console.log(contestants);
}
