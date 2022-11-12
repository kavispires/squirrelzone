import { ReactNode } from "react";

type DataGroupProps = {
  children: ReactNode;
  cols?: number;
};
export function DataGroup({ cols = 1, children }: DataGroupProps) {
  return (
    <div className="card-data-group" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {children}
    </div>
  );
}
