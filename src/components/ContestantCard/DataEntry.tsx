import { ReactNode } from "react";

type DataEntryProps = {
  label: ReactNode;
  children: ReactNode;
};
export function DataEntry({ label, children }: DataEntryProps) {
  return (
    <div className="card-data">
      <span className="card-data__label">{label}</span>
      <span className="card-data__value">{children}</span>
    </div>
  );
}
