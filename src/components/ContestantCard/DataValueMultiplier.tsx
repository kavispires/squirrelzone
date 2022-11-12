import { Tooltip } from "antd";

type DataValueMultiplierProps = {
  value: number;
};
export function DataValueMultiplier({ value }: DataValueMultiplierProps) {
  return (
    <Tooltip title={value}>
      <span className="card-data__percentage">{value}</span>
    </Tooltip>
  );
}
