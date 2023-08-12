import { Button, Space, Typography } from 'antd';
import { useTheSearchSeasonState } from 'hooks/useTheSearchSeasonState';

export function Intro() {
  const [, setEpisode] = useTheSearchSeasonState('episode');

  return (
    <>
      <Typography.Title>The Search for the Next Squirrel</Typography.Title>
      <Space>
        <Button type="primary" size="large" onClick={() => setEpisode(0)}>
          Start
        </Button>
      </Space>
    </>
  );
}
