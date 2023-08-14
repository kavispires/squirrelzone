import './Chrome.scss';

import { Layout } from 'antd';
import { AuthWrapper } from 'components/Auth';
import { useAuthContext } from 'hooks/useAuthContext';
import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Menu } from './Menu';

type ChromeProps = {
  children: ReactNode;
};

export function Chrome({ children }: ChromeProps) {
  const { isAuthenticated } = useAuthContext();

  return (
    <Layout className="chrome">
      {isAuthenticated && <Menu />}
      <Layout
        className="chrome-layout"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/cover.jpg')`,
        }}
      >
        <Layout.Content className="chrome-layout-content">
          <AuthWrapper>{children}</AuthWrapper>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
