import { Chrome } from 'components/Chrome';
import { LogoIcon, LogoText } from 'components/Logos';
import './Home.scss';

export function Home() {
  return (
    <Chrome>
      <div className="home">
        <LogoIcon className="home__logo" />
        <LogoText className="home__logo-text" />
        <h3 className="home__tagline">On the Microphone</h3>
      </div>
    </Chrome>
  );
}
