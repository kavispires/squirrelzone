import { Chrome } from 'components/Chrome';
import { SquirrelAvatar } from 'components/SquirrelAvatar';
import { NavLink } from 'react-router-dom';
import './Tools.scss';

export function Tools() {
  return (
    <Chrome>
      <div className="container tools">
        <h2>/tools</h2>
        <NavLink to="/tools/dna">Create DNA</NavLink>
      </div>
    </Chrome>
  );
}
