import { getTrackPosition } from "../../utils/contestant-builder";
import type { Contestant } from "../../utils/types";
import { Avatar } from "./Avatar";

type HeaderProps = {
  contestant: Contestant;
};
export function Header({ contestant }: HeaderProps) {
  return (
    <div className="contestant-card-header">
      <Avatar className="contestant-card-header__avatar" />
      <h2 className="contestant-card-header__name">{contestant.name}</h2>
      <h3 className="contestant-card-header__position">
        {getTrackPosition(contestant.track)} [{contestant.personalityType.type}]
      </h3>
    </div>
  );
}
