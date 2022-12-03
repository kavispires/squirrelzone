import { StarFilled } from '@ant-design/icons';
import clsx from 'clsx';
import { Fragment } from 'react';
import type { Alignment, ContestantId } from 'types';

type AlignmentGridProps = {
  id: ContestantId;
  alignment: Alignment;
};

const axisArr = Array(3).fill('');

export function AlignmentGrid({ id, alignment }: AlignmentGridProps) {
  return (
    <div className="alignment-grid">
      <div className="alignment-grid__lawful">Lawful</div>
      <div className="alignment-grid__good">Good</div>
      <div className="alignment-grid__chaotic">Chaotic</div>
      <div className="alignment-grid__evil">Evil</div>
      <div className="alignment-grid__boxes">
        {axisArr.map((_, xIndex) => {
          return (
            <Fragment key={clsx(id, xIndex)}>
              {axisArr.map((_, yIndex) => {
                const active = alignment.x === xIndex && alignment.y === yIndex;
                return (
                  <div
                    key={`${id}-${xIndex}-${yIndex}`}
                    className={clsx('alignment-grid__box', active && 'alignment-grid__box--active')}
                  >
                    {active && <StarFilled />}
                  </div>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
