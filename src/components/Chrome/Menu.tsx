import { Divider, Layout } from 'antd';
import clsx from 'clsx';
import { LogoIcon, LogoText } from 'components/Logos';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout.Sider
      className="menu"
      collapsedWidth={64}
      collapsed={collapsed}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      defaultCollapsed
    >
      <nav className={clsx('menu__nav', collapsed && 'menu__nav--collapsed')}>
        <NavLink to="/" className="menu__home">
          <LogoIcon className="menu__logo" /> {!collapsed && <LogoText className="menu__logo-text" />}
        </NavLink>

        <NavLink to="/history" className="menu__nav-link">
          <i className="fi fi-rr-calendar" /> {!collapsed && <span className="menu__nav-text">History</span>}
        </NavLink>

        <NavLink to="/groups" className="menu__nav-link">
          <i className="fi fi-rr-users-alt" /> {!collapsed && <span className="menu__nav-text">Groups</span>}
        </NavLink>

        <NavLink to="/artists" className="menu__nav-link">
          <i className="fi fi-rr-portrait" /> {!collapsed && <span className="menu__nav-text">Artists</span>}
        </NavLink>

        <NavLink to="/search" className="menu__nav-link">
          <i className="fi fi-rr-tv-music" />{' '}
          {!collapsed && <span className="menu__nav-text">The Search</span>}
        </NavLink>

        <NavLink to="/tools" className="menu__nav-link">
          <i className="fi fi-rr-wrench-simple" />{' '}
          {!collapsed && <span className="menu__nav-text">Tools</span>}
        </NavLink>

        <Divider />

        <NavLink to="/settings" className="menu__nav-link">
          <i className="fi fi-rr-settings" /> {!collapsed && <span className="menu__nav-text">Settings</span>}
        </NavLink>
      </nav>
    </Layout.Sider>
  );
}
