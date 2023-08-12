import _ from 'lodash';
import { Button, Space, Spin, Tag, Timeline } from 'antd';
import { ContestantSnippet } from 'components/ContestantCard/ContestantSnippet';
import {
  getTheSearchSeasonState,
  setTheSearchSeasonState,
  useTheSearchSeasonState,
} from 'hooks/useTheSearchSeasonState';
import { useEffectOnce } from 'react-use';
import {
  getContestantsRanking,
  makeContestantDictionaryFromList,
  contestantMethods,
  rankContestants,
} from 'utils/contestant-helpers';
import { TimelineEntry } from './TimelineEntry';
import { Contestant, ContestantId, D6 } from 'types';
import { TRACK } from 'utils/constants';
import { getLastItem, wait } from 'utils/helpers';
import { Rankings } from './Rankings';
import { performOpeningSequence } from 'utils/show-helpers';

export function Episode1() {
  const [episode1] = useTheSearchSeasonState('episode1');
  const [contestants] = useTheSearchSeasonState('contestants');
  const [, setEpisode] = useTheSearchSeasonState('episode');

  useEffectOnce(() => {
    performEpisode1();
  });

  if (episode1.complete === false) {
    return (
      <Space>
        <Spin />
      </Space>
    );
  }

  const { auditions } = episode1;

  return (
    <div className="episode-wrapper">
      <h1>Episode 1 - The Auditions</h1>

      <Timeline>
        <TimelineEntry type="host">
          "Welcome to The Search for the Next Squirrels! I'm your host and you can help us find the next
          Squirrel Zone group! We have 30 contestants for you and this episode each of them must audition in
          front of a panel of judges."
          <br />
          Each will perform one of the preselected songs and will be graded A, B, C, D or F. Are you ready?
        </TimelineEntry>
        <TimelineEntry type="video">
          Opening Sequence: The participating members get popularity points
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={0} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={1} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={2} />
        </TimelineEntry>
        <TimelineEntry type="info">Commercial Break</TimelineEntry>
        <TimelineEntry type="host">
          "The auditions are at full speed and these contestants got these scores"
        </TimelineEntry>
        <TimelineEntry type="video">
          A sequence of videos shows some contestants for a minute, can any of them catch your attention?
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={3} />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={4} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={5} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={6} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={7} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={8} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={9} />
        </TimelineEntry>
        <TimelineEntry type="video">
          Another sequence with more contestants is shown. Now they are even more of them! Maybe all the
          performances were mediocre?
          <br />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={10} />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={11} />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={12} />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={13} />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={14} />
        </TimelineEntry>
        <TimelineEntry type="info">Commercial Break</TimelineEntry>
        <TimelineEntry type="event">
          An amazing performance! The judges are wowed! <br />
          <Audition contestants={contestants} auditions={auditions} index={15} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={16} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={17} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={18} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={19} />
        </TimelineEntry>
        <TimelineEntry type="video">
          New video sequence:
          <br />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={20} />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={21} />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={22} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={23} />
        </TimelineEntry>
        <TimelineEntry type="info">Commercial Break</TimelineEntry>
        <TimelineEntry type="host">
          "With only 6 contestants to audition, we're approaching the end of the episodes. Do you already have
          a favorite?"
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={24} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={25} />
        </TimelineEntry>
        <TimelineEntry type="video">
          Last video sequence <br />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={26} />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={27} />
          <AuditionOffScreen contestants={contestants} auditions={auditions} index={28} />
        </TimelineEntry>
        <TimelineEntry type="event">
          <Audition contestants={contestants} auditions={auditions} index={29} />
        </TimelineEntry>
        <TimelineEntry type="host">
          "And this was the last performer for tonight. Tune in next week where we will have the first
          elimination!"
        </TimelineEntry>
      </Timeline>

      <Space>
        <Button type="primary" size="large" onClick={() => setEpisode(1)}>
          Next Episode
        </Button>
      </Space>

      <Rankings />
    </div>
  );
}

type AuditionProps = {
  contestants: Record<string, Contestant>;
  auditions: Record<string, any>[];
  index: number;
};

function Audition({ contestants, auditions, index }: AuditionProps) {
  const contestant = contestants[auditions[index].contestantId];
  const audition = auditions[index];
  return (
    <>
      <ContestantSnippet contestant={contestant} points={audition.grade} /> performed{' '}
      <Tag>{audition.performed}</Tag> and did {audition.did}.
    </>
  );
}

function AuditionOffScreen({ contestants, auditions, index }: AuditionProps) {
  const contestant = contestants[auditions[index].contestantId];
  const audition = auditions[index];
  return (
    <>
      <ContestantSnippet contestant={contestant} points={audition.grade} />
    </>
  );
}

const AUDITION_SCREEN_TIME = 3;
const SKIPPED_AUDITION_SCREEN_TIME = 1;
const SKIPPED_AUDITION_KEYWORD = 'SKIPPED_AUDITION';

async function performEpisode1() {
  const episodeNumber = 1;
  if (getTheSearchSeasonState('episode1').complete) {
    return;
  }

  console.count('PERFORMING_EPISODE_1');

  performOpeningSequence();

  await wait();

  const contestantsDict = getTheSearchSeasonState('contestants');
  // Randomly determine the order of the contestants' auditions
  const contestants = _.shuffle(Object.values(contestantsDict));

  const usedSongs: Record<string, number> = {};

  const auditionResults: Record<ContestantId, Record<string, any>> = {};

  // Auditions
  contestants.forEach((contestant) => {
    // Choose song
    const song = chooseSong(contestant);
    contestantMethods.addKeyword(contestant, song.keyword);
    if (usedSongs[song.keyword] === undefined) usedSongs[song.keyword] = 0;
    usedSongs[song.keyword] += 1;

    // Perform
    const scores = performSong(contestant, song, usedSongs[song.keyword]);

    // Get grade
    contestantMethods.update(contestant, 'grade', scores.grade);

    // Update counts (performancePoints, staffPopularity)
    contestantMethods.addCount(contestant, 'performancePoints', scores.points, episodeNumber);
    contestantMethods.addCount(
      contestant,
      'staffPopularity',
      scores.performance + scores.disparity,
      episodeNumber
    );

    // Update relationships
    // TODO

    auditionResults[contestant.id] = {
      ...scores,
      ...song,
      performedInFrontOf: Object.keys(auditionResults).length,
    };
  });

  const auditions: Record<string, any>[] = [];

  // Order participants by greatness to determine broadcast order, update screen time, update audience points accordingly
  rankContestants(contestants, ['performancePoints'], episodeNumber);
  const ranking = getContestantsRanking(contestants);

  const firstEpisodeBlock = [2, 9, 26];
  const firstEpisodeSequence = [13, 16];
  const secondEpisodeBlock = [6, 7, 1, 22, 27];
  const secondEpisodeSequence = [10, 19, 14, 12, 21];
  const thirdEpisodeBlock = [0, 5, 28, 25, 15];
  const thirdEpisodeSequence = [18, 20, 24];
  const forthEpisodeBlock = [29];
  const fourthEpisodeSequence = [8, 17, 23];
  const fifthEpisodeBlock = [3, 4];
  const finalEpisodeBlock = [11];

  const broadcastIndexes = [
    ...firstEpisodeBlock,
    ...secondEpisodeBlock,
    ...thirdEpisodeBlock,
    ...forthEpisodeBlock,
    ...fifthEpisodeBlock,
    ...finalEpisodeBlock,
  ];

  // Broadcast contestants
  broadcastIndexes.forEach((index) => {
    const contestantId = ranking[index];
    const contestant = contestantsDict[contestantId];
    const audition = auditionResults[contestantId];

    // Screen time
    contestantMethods.addCount(contestant, 'screenTime', AUDITION_SCREEN_TIME, episodeNumber);
    // Peer popularity
    contestantMethods.addCount(
      contestant,
      'peerPopularity',
      Math.round(getPeerPopularityByScore(audition.points) * (1 + audition.performedInFrontOf / 100)),
      episodeNumber
    );

    auditions.push({
      contestantId,
      performed: audition.title,
      did: getDidText(audition.percentage),
      grade: audition.grade,
      disparity: audition.disparity < 0,
    });

    // Audience points
    const audiencePoints = Math.round(
      getPeerPopularityByScore(audition.points) *
        (2 + contestant.stats.multipliers.likeability) *
        (1 + contestant.stats.multipliers.luck) *
        (1 + contestant.stats.multipliers.style)
    );
    contestantMethods.addCount(contestant, 'audiencePopularity', audiencePoints, episodeNumber);
  });

  // Skipped contestants

  const skippedIndexes = [
    ...firstEpisodeSequence,
    ...secondEpisodeSequence,
    ...thirdEpisodeSequence,
    ...fourthEpisodeSequence,
  ];

  skippedIndexes.forEach((index) => {
    const contestantId = ranking[index];
    const contestant = contestantsDict[contestantId];
    const audition = auditionResults[contestantId];

    // Screen time
    contestantMethods.addCount(contestant, 'screenTime', SKIPPED_AUDITION_SCREEN_TIME, episodeNumber);
    // Peer popularity
    contestantMethods.addCount(
      contestant,
      'peerPopularity',
      getPeerPopularityByScore(audition.points),
      episodeNumber
    );

    auditions.push({
      contestantId,
      performed: audition.title,
      did: getDidText(audition.percentage),
      grade: audition.grade,
      disparity: audition.disparity < 0,
    });

    // Audience points
    const audiencePoints = Math.round(
      (getPeerPopularityByScore(audition.points) / 3) *
        (2 + contestant.stats.multipliers.notability) *
        (1 + contestant.stats.multipliers.luck)
    );
    contestantMethods.addCount(contestant, 'audiencePopularity', audiencePoints, episodeNumber);

    contestantMethods.addKeyword(contestant, SKIPPED_AUDITION_KEYWORD);
  });

  // Final Rank by total
  rankContestants(contestants, ['total'], episodeNumber);

  setTheSearchSeasonState('contestants', makeContestantDictionaryFromList(contestants));
  setTheSearchSeasonState('ranking', getContestantsRanking(contestants));
  setTheSearchSeasonState('episode1', { auditions, complete: true });
}

type AuditionSong = {
  keyword: string;
  title: string;
  difficulty: number;
  points: number;
};

const auditionSongs: Record<string, AuditionSong[]> = {
  [TRACK.VOCAL]: [
    {
      keyword: 'AUDITION_YOU_AND_I',
      title: 'You and I',
      difficulty: 5,
      points: 100,
    },
    {
      keyword: 'AUDITION_GO_ROUND',
      title: 'Go Round',
      difficulty: 3,
      points: 75,
    },
    {
      keyword: 'AUDITION_LOVER_SQUIRREL_GIRL',
      title: 'Lover Squirrel Girl',
      difficulty: 1,
      points: 30,
    },
  ],
  [TRACK.RAP]: [
    {
      keyword: 'AUDITION_HOW_U_WANNA_GET_DOWN',
      title: 'How U Wanna Get Down',
      difficulty: 4,
      points: 90,
    },
    {
      keyword: 'AUDITION_TIME_BOMB',
      title: 'Time Bomb',
      difficulty: 3,
      points: 60,
    },
    {
      keyword: 'AUDITION_NO_ONE_CAN_TELL_ME',
      title: 'No One Can Tell Me',
      difficulty: 1,
      points: 30,
    },
  ],
  [TRACK.DANCE]: [
    {
      keyword: 'AUDITION_DONT_BREAK_MY_HEART',
      title: "Don't Break My Heart",
      difficulty: 4,
      points: 80,
    },
    {
      keyword: 'AUDITION_BASIC_RULES',
      title: 'Basic Rules',
      difficulty: 3,
      points: 70,
    },
    {
      keyword: 'AUDITION_WRONG_RIGHT',
      title: 'Wrong/Right',
      difficulty: 1,
      points: 30,
    },
  ],
};

function chooseSong(contestant: Contestant): AuditionSong {
  const track = String(contestant.track);
  const choices = auditionSongs[track];
  const stageSkill = contestantMethods.getTrackStageSkill(contestant);
  const { intelligence, curiosity, extroversion } = contestant.stats.personality;
  const isChaotic = contestant.stats.alignment.x < 0;

  // Intelligence: choose song that fits skill
  if (intelligence > 0) {
    return choices.filter((song) => song.difficulty <= stageSkill)[0];
  }

  // Curious: choose song that is one level higher
  if (curiosity > 0 && !isChaotic) {
    return choices.filter((song) => song.difficulty <= stageSkill + 1)[0];
  }

  // If chaotic, choose anything
  if (isChaotic) {
    return _.shuffle(choices)[0];
  }

  // Introvert, choose easy song
  if (extroversion < -1) {
    return getLastItem(choices);
  }

  return choices[1];
}

function performSong(contestant: Contestant, song: AuditionSong, usedSongLevel: number) {
  const stageSkill = contestantMethods.getTrackStageSkill(contestant);
  const performance = contestantMethods.perform(contestant, String(contestant.track));

  const percentage = performance / song.difficulty;
  const points = Math.round(
    percentage *
      song.points *
      (1 + contestant.stats.multipliers.likeability) *
      (1 + contestant.stats.multipliers.luck) -
      usedSongLevel
  );

  return {
    performance,
    percentage,
    points,
    grade: getGrade(points),
    // How deviating from their skill is the song they've chosen
    disparity: song.difficulty - stageSkill,
  };
}

function getGrade(points: number) {
  const grades = ['A', 'B', 'C', 'D', 'F'];
  const values = [165, 150, 120, 100, 0];

  for (let i = 0; i < values.length; i++) {
    if (points >= values[i]) {
      return grades[i];
    }
  }
  return 'F';
}

function getDidText(percentage: number) {
  if (percentage <= 0) return 'terrible';
  if (percentage <= 1.75) return 'decent';
  if (percentage <= 4) return 'well';
  return 'excellent';
}

function getPeerPopularityByScore(points: number) {
  const score = [100, 75, 60, 45, 15];
  const values = [165, 150, 120, 100, 0];

  for (let i = 0; i < values.length; i++) {
    if (points >= values[i]) {
      return score[i];
    }
  }
  return 1;
}
