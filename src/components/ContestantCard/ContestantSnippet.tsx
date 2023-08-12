import { ArrowUpOutlined } from '@ant-design/icons';
import { SquirrelAvatar } from 'components/SquirrelAvatar';
import { useTheSearchSeasonState } from 'hooks/useTheSearchSeasonState';
import { Contestant } from 'types';
import './ContestantSnippet.scss';

type ContestantSnippetProps = {
  contestant: Contestant;
  points: number | string;
};

export function ContestantSnippet({ contestant, points }: ContestantSnippetProps) {
  const [, setOpen] = useTheSearchSeasonState('openContestant');
  return (
    <div className="contestant-snippet">
      <button className="contestant-snippet__button" onClick={() => setOpen(contestant)}>
        <SquirrelAvatar
          dna={contestant.dna}
          color={contestant.color}
          className="contestant-snippet__avatar"
        />

        <span className="contestant-snippet__name">{contestant.name}</span>
        {Boolean(points) && (
          <div className="contestant-snippet__points">
            {typeof points == 'number' && <ArrowUpOutlined />} {points}
          </div>
        )}
      </button>
    </div>
  );
}
