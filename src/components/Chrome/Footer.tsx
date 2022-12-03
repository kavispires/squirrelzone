import { Layout } from 'antd';
import { HeartFilled } from '@ant-design/icons';

export function Footer() {
  return (
    <Layout.Footer className="footer">
      <p>
        Made for <a href="https://github.com/kavispires">myself</a> with <HeartFilled />
      </p>
    </Layout.Footer>
  );
}
