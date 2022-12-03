import { Button, Space, Typography } from 'antd';

import { useAsyncFn } from 'react-use';

export function Intro() {
  return (
    <>
      <Typography.Title>The Search for the Next Squirrel</Typography.Title>
      <Space>
        <Button type="primary">Start</Button>
      </Space>
    </>
  );
}
