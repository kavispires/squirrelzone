import { ReactNode } from "react";

type DataEntryPersonalityProps = {
  label: ReactNode;
  value: number;
};
export function DataEntryPersonality({ label, value }: DataEntryPersonalityProps) {
  const pos = (100 * (4.5 + value)) / 11;
  console.log({ label, value, pos });
  return (
    <div className="card-data-personality">
      <span className="card-data-personality__label">{label}</span>
      <span className="card-data-personality__bar">
        <span className="card-data-personality__bullet" style={{ left: `calc(${pos}%` }} />
      </span>
      <span className="card-data-personality__value">{value}</span>
    </div>
  );
}
