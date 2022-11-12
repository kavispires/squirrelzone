import { Tooltip } from "antd";

type DataValueD6Props = {
  value: number;
};
export function DataValueD6({ value }: DataValueD6Props) {
  return (
    <Tooltip title={value}>
      {/* <Progress
        percent={getPercentage(value, 6)}
        size="small"
        steps={6}
        strokeColor="gold"
        showInfo={false}
      /> */}
      <span className="data-value">
        <span className="data-value__on">{Array(value).fill("•").join("")}</span>
        <span className="data-value__off">
          {Array(6 - value)
            .fill("•")
            .join("")}
        </span>
      </span>
    </Tooltip>
  );
}
