import { Avatar } from 'antd';
import clsx from 'clsx';
import { SquirrelAvatar } from 'components/SquirrelAvatar';
import { useTheSearchSeasonState } from 'hooks/useTheSearchSeasonState';
import { getLastItem } from 'utils/helpers';
import './Rankings.scss';

export function Rankings() {
  const [contestants] = useTheSearchSeasonState('contestants');
  const [ranking] = useTheSearchSeasonState('ranking');
  const [, setOpen] = useTheSearchSeasonState('openContestant');

  const top5 = ranking.slice(0, 5);

  const rest = ranking.slice(5);
  return (
    <div className="rankings">
      <div className="rankings__top">
        {top5.map((contestantId) => {
          const contestant = contestants[contestantId];
          return (
            <div className="rankings__entry" key={`ranked-contestant-${contestant.id}`}>
              <button className="rankings__button" onClick={() => setOpen(contestant)}>
                <SquirrelAvatar dna={contestant.dna} color={contestant.color} className="rankings__avatar" />
                <div className="rankings__name">{contestant.name}</div>
                <div className="rankings__name">
                  <Avatar shape="square" style={{ backgroundColor: 'gold' }} size="small">
                    {getLastItem(contestant.counts.rank)}
                  </Avatar>
                  {' | '}
                  <Avatar shape="square" style={{ backgroundColor: 'gray' }} size="small">
                    {contestant.grade}
                  </Avatar>
                </div>
              </button>
            </div>
          );
        })}
      </div>
      <div className="rankings__rest">
        {rest.map((contestantId) => {
          const contestant = contestants[contestantId];
          return (
            <div
              className={clsx(
                'rankings__entry',
                contestant.status === 'ELIMINATED' && 'rankings__entry--eliminated'
              )}
              key={`ranked-contestant-${contestant.id}`}
            >
              <button className="rankings__button" onClick={() => setOpen(contestant)}>
                <SquirrelAvatar dna={contestant.dna} color={contestant.color} className="rankings__avatar" />
                <div className="rankings__name">{contestant.name}</div>
                <div className="rankings__name">
                  <Avatar shape="square" style={{ backgroundColor: 'gold' }} size="small">
                    {getLastItem(contestant.counts.rank)}
                  </Avatar>
                  {' | '}
                  <Avatar shape="square" style={{ backgroundColor: 'gray' }} size="small">
                    {contestant.grade}
                  </Avatar>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
