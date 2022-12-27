import { Layout } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import './Footer.scss';

export function Footer() {
  return (
    <Layout.Footer className="footer">
      <p>
        Made for <a href="https://github.com/kavispires">myself</a> with <HeartFilled /> | Uicons by{' '}
        <a href="https://www.flaticon.com/uicons">Flaticon</a>
      </p>
    </Layout.Footer>
  );
}
