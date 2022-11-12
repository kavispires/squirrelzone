import { ReactNode } from "react";

type DataEntryPersonalityProps = {
  label: ReactNode;
  value: number;
};
export function DataEntryPersonality({ label, value }: DataEntryPersonalityProps) {
  return (
    <div className="card-data-personality">
      <span className="card-data-personality__label">{label}</span>
      <span className="card-data-personality__value">{value}</span>
    </div>
  );
}
