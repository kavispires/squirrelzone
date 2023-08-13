import { Layout } from 'antd';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Menu } from './Menu';
import './Chrome.scss';

type ChromeProps = {
  children: ReactNode;
};

export function Chrome({ children }: ChromeProps) {
  const isAuthenticated = true; // TODO
  return (
    <Layout className="chrome">
      {isAuthenticated && <Menu />}
      <Layout
        className="chrome-layout"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/cover.jpg')`,
        }}
      >
        <Layout.Content className="chrome-layout-content">{children}</Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
