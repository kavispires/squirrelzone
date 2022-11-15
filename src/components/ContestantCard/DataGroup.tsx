import { ReactNode } from "react";

type DataGroupProps = {
  children: ReactNode;
  label: ReactNode;
};
export function DataGroup({ label, children }: DataGroupProps) {
  return (
    <div className="card-data-group">
      <span className="card-data-group__label">{label}</span>
      <div className="card-data-group__content">{children}</div>
    </div>
  );
}
