import { Chrome } from 'components/Chrome';
import { NavLink } from 'react-router-dom';
import './Tools.scss';
import { Typography } from 'antd';

export function Tools() {
  return (
    <Chrome>
      <div className="page tools">
        <Typography.Title level={2}>Tools</Typography.Title>
        <NavLink to="/tools/dna">Create DNA</NavLink>
      </div>
    </Chrome>
  );
}
