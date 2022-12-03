import { getTrackPosition } from '../../utils/contestant-builder';
import type { Contestant } from '../../utils/types';
import { ContestantAvatar } from '../ContestantAvatar';

type HeaderProps = {
  contestant: Contestant;
  avatarClassName?: string;
};
export function Header({ contestant, avatarClassName }: HeaderProps) {
  return (
    <div className="contestant-card-header">
      <ContestantAvatar className={avatarClassName} color={contestant.color} dna={contestant.dna} />
      <h2 className="contestant-card-header__name">{contestant.name}</h2>
      <span className="contestant-card-header__position">
        {getTrackPosition(contestant.track)} [{contestant.personalityType.type}]
      </span>
    </div>
  );
}
