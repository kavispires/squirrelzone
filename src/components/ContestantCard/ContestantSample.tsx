import { BarChartOutlined, FileDoneOutlined, RiseOutlined } from '@ant-design/icons';
import { Card, Drawer, Tooltip } from 'antd';
import { getLastItem } from '../../utils/helpers';
import type { Contestant } from 'types';

import { Header } from './Header';

import { useState } from 'react';
import { ContestantCard } from './ContestantCard';

type ContestantSampleProps = {
  contestant: Contestant;
};
export function ContestantSample({ contestant }: ContestantSampleProps) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={showDrawer} className="contestant-button">
        <Card
          key={contestant.name}
          bordered
          className="contestant-card"
          actions={[
            <Tooltip title="Rank">
              <RiseOutlined /> {getLastItem(contestant.counts.rank) ?? '?'}
            </Tooltip>,
            <Tooltip title="Grade">
              <FileDoneOutlined /> {contestant.grade ?? '?'}
            </Tooltip>,
            <Tooltip title="Total">
              <BarChartOutlined /> {getLastItem(contestant.counts.total) ?? '?'}
            </Tooltip>,
          ]}
        >
          <Header contestant={contestant} />
        </Card>
      </button>

      <Drawer title="Contestant" placement="right" onClose={onClose} open={open} width={480}>
        <>
          <ContestantCard contestant={contestant} />
        </>
      </Drawer>
    </>
  );
}
