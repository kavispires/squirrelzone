import { getTrackPosition } from "../../utils/contestant-builder";
import type { Contestant } from "../../utils/types";
import { ContestantAvatar } from "../ContestantAvatar";

type HeaderProps = {
  contestant: Contestant;
};
export function Header({ contestant }: HeaderProps) {
  return (
    <div className="contestant-card-header">
      <ContestantAvatar
        className="contestant-card-header__ContestantAvatar"
        color={contestant.color}
        dna={contestant.dna}
      />
      <h2 className="contestant-card-header__name">{contestant.name}</h2>
      <h3 className="contestant-card-header__position">
        {getTrackPosition(contestant.track)} [{contestant.personalityType.type}]
      </h3>
    </div>
  );
}
