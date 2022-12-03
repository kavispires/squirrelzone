import { Tooltip } from 'antd';

type DataValuePercentageProps = {
  value: number;
};
export function DataValuePercentage({ value }: DataValuePercentageProps) {
  return (
    <Tooltip title={value}>
      <span className="card-data__percentage">{Math.round(value * 100)}%</span>
    </Tooltip>
  );
}
