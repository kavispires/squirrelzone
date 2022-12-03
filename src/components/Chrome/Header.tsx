import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';

import { LogoFull } from 'components/Logos';

type HeaderProps = {
  isAuthenticated: boolean;
};

export function Header({ isAuthenticated }: HeaderProps) {
  return (
    <Layout.Header>
      <LogoFull className="header__logo" />

      {isAuthenticated && (
        <nav className="header__nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
            <li>
              <NavLink to="/groups">Groups</NavLink>
            </li>
            <li>
              <NavLink to="/artists">Artists</NavLink>
            </li>
            <li>
              <NavLink to="/the-search">The Search</NavLink>
            </li>
            <li>
              <NavLink to="/tools">Tools</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </Layout.Header>
  );
}
