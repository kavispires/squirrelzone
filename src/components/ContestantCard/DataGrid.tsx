import { ReactNode } from 'react';

type DataGridProps = {
  children: ReactNode;
  cols?: number;
};
export function DataGrid({ cols = 1, children }: DataGridProps) {
  return (
    <div className="card-data-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {children}
    </div>
  );
}
