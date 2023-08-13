import { Typography } from 'antd';
import { Chrome } from 'components/Chrome';

export function Settings() {
  return (
    <Chrome>
      <div className="page settings">
        <Typography.Title level={2}>Settings</Typography.Title>
      </div>
    </Chrome>
  );
}
