import { BarChartOutlined, FileDoneOutlined, RiseOutlined } from "@ant-design/icons";
import { Card, Divider, Input } from "antd";
import { getLastItem, humanize } from "../../utils/helpers";
import type { Contestant } from "../../utils/types";
import { DataEntry } from "./DataEntry";
import { DataGroup } from "./DataGroup";
import { DataValueD6 } from "./DataValueD6";
import { DataValuePercentage } from "./DataValuePercentage";
import "./ContestantCard.scss";
import { Header } from "./Header";
import { AlignmentGrid } from "./AlignmentGrid";
import { DataEntryPersonality } from "./DataEntryPersonality";
import { DataValueMultiplier } from "./DataValueMultiplier";

type ContestantCardProps = {
  contestant: Contestant;
};
export function ContestantCard({ contestant }: ContestantCardProps) {
  return (
    <Card
      key={contestant.name}
      bordered
      className="contestant-card"
      actions={[
        <span>
          <RiseOutlined /> {getLastItem(contestant.counts.rank) ?? "?"}
        </span>,
        <span>
          <FileDoneOutlined /> {contestant.grade ?? "?"}
        </span>,
        <span>
          <BarChartOutlined /> {getLastItem(contestant.counts.total) ?? "?"}
        </span>,
      ]}
    >
      <Header contestant={contestant} />

      <Divider className="contestant-card__divider--short" />

      <DataGroup cols={2}>
        <DataGroup>
          <DataEntry label="Vocal">
            <DataValueD6 value={contestant.stats.stage.vocal} />
          </DataEntry>
          <DataEntry label="Rap">
            <DataValueD6 value={contestant.stats.stage.rap} />
          </DataEntry>
          <DataEntry label="Dance">
            <DataValueD6 value={contestant.stats.stage.dance} />
          </DataEntry>
        </DataGroup>
        <DataGroup>
          <DataEntry label="Age">{contestant.age}</DataEntry>
          <DataEntry label="Height">{humanize(contestant.height)}</DataEntry>
          <DataEntry label="Build">{humanize(contestant.build)}</DataEntry>
        </DataGroup>
      </DataGroup>

      <Divider className="contestant-card__divider--short" />

      <DataGroup cols={2}>
        <DataEntry label="Charisma">
          <DataValueD6 value={contestant.stats.general.charisma} />
        </DataEntry>
        <DataEntry label="Leadership">
          <DataValueD6 value={contestant.stats.general.leadership} />
        </DataEntry>
        <DataEntry label="Presence">
          <DataValueD6 value={contestant.stats.general.stagePresence} />
        </DataEntry>
        <DataEntry label="Rhetoric">
          <DataValueD6 value={contestant.stats.general.rhetoric} />
        </DataEntry>
        <DataEntry label="Visual">
          <DataValueD6 value={contestant.stats.general.visual} />
        </DataEntry>
      </DataGroup>

      <Divider className="contestant-card__divider--short" />

      <DataGroup cols={2}>
        <DataGroup>
          <DataEntry label="Learning">
            <DataValuePercentage value={contestant.stats.skills.learning} />
          </DataEntry>
          <DataEntry label="Memory">
            <DataValuePercentage value={contestant.stats.skills.memory} />
          </DataEntry>
          <DataEntry label="Sanity">
            <DataValuePercentage value={contestant.stats.skills.sanity} />
          </DataEntry>
          <DataEntry label="Stamina">
            <DataValuePercentage value={contestant.stats.skills.stamina} />
          </DataEntry>
        </DataGroup>

        <DataGroup>
          <DataEntry label="Likeability">
            <DataValueMultiplier value={contestant.stats.multipliers.likeability} />
          </DataEntry>
          <DataEntry label="Notability">
            <DataValueMultiplier value={contestant.stats.multipliers.notability} />
          </DataEntry>
          <DataEntry label="Style">
            <DataValueMultiplier value={contestant.stats.multipliers.style} />
          </DataEntry>
          <DataEntry label="Luck">
            <DataValueMultiplier value={contestant.stats.multipliers.luck} />
          </DataEntry>
        </DataGroup>
      </DataGroup>

      <Divider className="contestant-card__divider--short" />

      <DataGroup cols={2}>
        <DataGroup>
          <AlignmentGrid id={contestant.id} alignment={contestant.stats.alignment} />
        </DataGroup>
        <DataGroup>
          <DataEntryPersonality label="Discipline" value={contestant.stats.personality.discipline} />
          <DataEntryPersonality label="Curiosity" value={contestant.stats.personality.curiosity} />
          <DataEntryPersonality label="Extroversion" value={contestant.stats.personality.extroversion} />
          <DataEntryPersonality label="Sensitivity" value={contestant.stats.personality.sensitivity} />
          <DataEntryPersonality label="Gentleness" value={contestant.stats.personality.gentleness} />
          <DataEntryPersonality label="Sincerity" value={contestant.stats.personality.sincerity} />
          <DataEntryPersonality label="Happiness" value={contestant.stats.personality.happiness} />
        </DataGroup>
      </DataGroup>

      <Divider className="contestant-card__divider--short" />

      <ul className="contestant-card__keywords">
        {contestant.keywords.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>

      <Divider className="contestant-card__divider--short" />

      <Input.TextArea value={JSON.stringify(contestant, null, 2)} rows={2} cols={30} />
    </Card>
  );
}
