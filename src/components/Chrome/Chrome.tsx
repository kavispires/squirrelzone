import './Chrome.scss';

import { Layout } from 'antd';
import { AuthWrapper } from 'components/Auth';
import { useAuthContext } from 'hooks/useAuthContext';
import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Menu } from './Menu';
import clsx from 'clsx';

type ChromeProps = {
  /**
   * The content to render in the chrome.
   */
  children: ReactNode;
  /**
   * The class name to apply to the content container.
   */
  className?: string;
};

export function Chrome({ children, className = '' }: ChromeProps) {
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
          <AuthWrapper>
            <div className={clsx('page', className)}>{children}</div>
          </AuthWrapper>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
