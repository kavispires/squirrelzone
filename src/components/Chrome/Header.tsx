import { Breadcrumb, Col, Row, Typography } from 'antd';
import { ReactNode } from 'react';
import './Header.scss';
import { useTitle } from 'react-use';
import { NavLink } from 'react-router-dom';

type HeaderProps = {
  /**
   * The title of the page.
   */
  title: ReactNode;
  /**
   * The actions to render in the header.
   */
  actions?: ReactNode;
  /**
   * The breadcrumbs to render in the header.
   */
  breadcrumbs?: unknown[];
  /**
   * The title to render in the browser tab.
   */
  browserTitle?: string;
};

export function Header({ title, actions, browserTitle }: HeaderProps) {
  // Set up Tab title
  useTitle(`${browserTitle ?? String(title)} | Squirrel Zone`);

  return (
    <header className="header">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="header__title-row">
        <Col span={12}>
          <Typography.Title level={2} className="header__title">
            {title}
          </Typography.Title>
        </Col>
        {actions && (
          <Col span={12}>
            <div className="header__actions">{actions}</div>
          </Col>
        )}
      </Row>
      <Row>
        <Col>
          <Breadcrumb
            items={[
              {
                title: <NavLink to="/">Home</NavLink>,
              },
              {
                title: title,
              },
            ]}
          />
        </Col>
      </Row>
    </header>
  );
}
