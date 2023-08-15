import { Chrome, Content, Header } from 'components/Chrome';
import { NavLink } from 'react-router-dom';
import './Tools.scss';

export function Tools() {
  return (
    <Chrome>
      <Header title="Tools" />

      <Content>
        <NavLink to="/tools/dna">Create DNA</NavLink>
      </Content>
    </Chrome>
  );
}
