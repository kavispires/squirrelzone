import { createGlobalState } from 'react-hooks-global-state';
import { Contestant, ContestantId } from 'types';

interface InitialState {
  episode: number;
  ranking: ContestantId[];
  contestants: Record<ContestantId, Contestant>;
  episode0: {
    complete: boolean;
    overall: ContestantId;
    vocal: ContestantId;
    rap: ContestantId;
    dance: ContestantId;
    visual: ContestantId;
    stagePresence: ContestantId;
    charisma: ContestantId;
  };
  episode1: {
    complete: boolean;
    auditions: Record<string, any>[];
  };

  openContestant?: Contestant;
}

const initialState: InitialState = {
  episode: -1,
  contestants: {},
  ranking: [],
  episode0: {
    complete: false,
    overall: '',
    vocal: '',
    rap: '',
    dance: '',
    visual: '',
    stagePresence: '',
    charisma: '',
  },
  episode1: {
    complete: false,
    auditions: [],
  },
  openContestant: undefined,
};

const {
  useGlobalState: useTheSearchSeasonState,
  getGlobalState: getTheSearchSeasonState,
  setGlobalState: setTheSearchSeasonState,
} = createGlobalState(initialState);

export { useTheSearchSeasonState, getTheSearchSeasonState, setTheSearchSeasonState };
