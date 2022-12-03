import { Layout } from 'antd';
import { Footer } from 'components/Chrome/Footer';
import { Header } from 'components/Chrome/Header';
import { LogoIcon, LogoText } from 'components/Logos';

export function Home() {
  return (
    <Layout className="container">
      <Header isAuthenticated={true} />
      <Layout.Content className="main home">
        <div className="home__logo-container">
          <LogoIcon />
          <LogoText />
          <h3 className="home__tagline">On the Microphone</h3>
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}
