import { Layout } from 'antd';
import { useGlobalState } from '../../hooks/useGlobalState';
import { Episode0 } from './Episode0';
import { Intro } from './Intro';
import './TheSearch.scss';

export function TheSearch() {
  const [episode] = useGlobalState('episode');

  let ActiveComponent = Intro;

  switch (episode) {
    case -1:
      ActiveComponent = Intro;
      break;
    case 0:
      ActiveComponent = Episode0;
      break;
    default:
      ActiveComponent = Intro;
  }

  return (
    <Layout className="the-search-layout">
      <Layout.Header className="the-search-header">
        The Search for the Next Squirrel <span>Episode {episode}</span>
      </Layout.Header>
      <Layout.Content className="the-search-content">
        <ActiveComponent />
      </Layout.Content>
    </Layout>
  );
}
