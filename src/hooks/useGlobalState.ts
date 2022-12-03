import { createGlobalState } from 'react-hooks-global-state';
import { Contestant, ContestantId } from 'types';

interface InitialState {
  episode: number;
  contestants: Record<ContestantId, Contestant>;
}

const initialState: InitialState = {
  episode: -1,
  contestants: {},
};

const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState };
