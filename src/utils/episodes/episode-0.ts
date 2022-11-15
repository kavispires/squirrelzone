import _ from "lodash";
import { setContestant } from "../contestant-helpers";
import { getLastItem } from "../helpers";
import { Contestant, ContestantId } from "../types";

const OVERALL_SKILLS_POINTS = 100;

export function performEpisode0(show: any, contestants: Contestant[]) {
  // Rank contestants by Stage and Performance Stats
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

  const bestOverall = _.maxBy(Object.values(counts), "total");

  console.log({ bestOverall });

  const bestVocal = _.maxBy(contestants, (o) => o.stats.stage.vocal);

  console.log({ bestVocal });

  const bestRap = _.maxBy(contestants, (o) => o.stats.stage.rap);

  console.log({ bestRap });

  const bestDance = _.maxBy(contestants, (o) => o.stats.stage.dance);

  console.log({ bestDance });

  // Update points
  const rankings: number[] = [];

  const episodeIndex = 0;
  contestants.forEach((contestant) => {
    setContestant(
      contestant,
      `counts.total.[${episodeIndex}]`,
      Math.round((100 * counts[contestant.id].total) / (bestOverall?.total ?? 1))
    );

    setContestant(contestant, "sortingValue", getLastItem(contestant.counts.total));

    rankings.push(contestant.sortingValue);
  });

  rankings.sort((a, b) => b - a);

  contestants.forEach((contestant) => {
    setContestant(contestant, `counts.rank.[${episodeIndex}]`, rankings.indexOf(contestant.sortingValue) + 1);
  });
}
