import "./App.css";
import { createContestants } from "./utils/contestant-builder";
import { mean, orderBy } from "lodash";
import { Contestant } from "./utils/types";
import { ContestantCard } from "./components/ContestantCard";
import { performEpisode0 } from "./utils/episodes/episode-0";
import { ContestantSample } from "./components/ContestantCard/ContestantSample";
import { TheSearch } from "./components/TheSearch";

let CONTESTANTS = orderBy(
  Object.values(createContestants(30)),
  ["track", "age", "name"],
  ["desc", "asc", "asc"]
);

performEpisode0({}, CONTESTANTS);

CONTESTANTS = orderBy(CONTESTANTS, ["sortingValue", "track", "age", "name"], ["desc", "desc", "asc", "asc"]);

const calculateStatistics = (contestants: Contestant[]) => {
  const tracks: Record<string, number> = {};
  const averages = {
    age: 0,
    vocal: 0,
    rap: 0,
    dance: 0,
    charisma: 0,
    stagePresence: 0,
    visual: 0,
    leadership: 0,
    rhetoric: 0,
  };

  contestants.forEach((entry) => {
    if (tracks[entry.track] === undefined) {
      tracks[entry.track] = 0;
    }
    tracks[entry.track] += 1;
    averages.age += entry.age;
    averages.vocal += entry.stats.stage.vocal;
    averages.rap += entry.stats.stage.rap;
    averages.dance += entry.stats.stage.dance;
    averages.charisma += entry.stats.general.charisma;
    averages.stagePresence += entry.stats.general.stagePresence;
    averages.visual += entry.stats.general.visual;
    averages.leadership += entry.stats.general.leadership;
    averages.rhetoric += entry.stats.general.rhetoric;
  });

  const total = contestants.length;

  return {
    tracks,
    averages: {
      age: Math.round(averages.age / total),
      vocal: Math.round(averages.vocal / total),
      rap: Math.round(averages.rap / total),
      dance: Math.round(averages.dance / total),
      charisma: Math.round(averages.charisma / total),
      stagePresence: Math.round(averages.stagePresence / total),
      visual: Math.round(averages.visual / total),
      leadership: Math.round(averages.leadership / total),
      rhetoric: Math.round(averages.rhetoric / total),
    },
  };
};

const STATISTICS = calculateStatistics(CONTESTANTS);

function App() {
  return (
    <div className="App">
      <TheSearch />
      <div className="summary">
        <span>VOCAL: {STATISTICS.tracks.VOCAL}</span>
        <span>DANCE: {STATISTICS.tracks.DANCE}</span>
        <span>RAP: {STATISTICS.tracks.RAP}</span>
        <span>Average Vocal: {STATISTICS.averages.vocal}</span>
        <span>Average Rap: {STATISTICS.averages.rap}</span>
        <span>Average Dance: {STATISTICS.averages.dance}</span>
        <span>Average Age: {STATISTICS.averages.age}</span>
        <span>Charisma: {STATISTICS.averages.charisma}</span>
        <span>Stage Presence: {STATISTICS.averages.stagePresence}</span>
        <span>Visual: {STATISTICS.averages.visual}</span>
        <span>Leadership: {STATISTICS.averages.leadership}</span>
        <span>Rhetoric: {STATISTICS.averages.rhetoric}</span>
      </div>
      <div className="contestants">
        {CONTESTANTS.map((entry) => (
          <ContestantSample contestant={entry} key={entry.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
