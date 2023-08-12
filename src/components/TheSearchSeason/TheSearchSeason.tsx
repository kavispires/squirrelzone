import { Drawer, Layout } from 'antd';
import { ContestantCard } from 'components/ContestantCard';
import { useTheSearchSeasonState } from 'hooks/useTheSearchSeasonState';
import { Episode0 } from './Episode0';
import { Episode1 } from './Episode1';
import { Intro } from './Intro';
import './TheSearchSeason.scss';

export function TheSearchSeason() {
  const [episode] = useTheSearchSeasonState('episode');
  const [openContestant, setOpen] = useTheSearchSeasonState('openContestant');

  let ActiveEpisode = Intro;

  switch (episode) {
    case -1:
      ActiveEpisode = Intro;
      break;
    case 0:
      ActiveEpisode = Episode0;
      break;
    case 1:
      ActiveEpisode = Episode1;
      break;
    default:
      ActiveEpisode = Intro;
  }

  return (
    <>
      <Layout.Header className="the-search-header">
        The Search for the Next Squirrel <span>Episode {episode}</span>
      </Layout.Header>
      <Layout.Content className="the-search-content">
        <ActiveEpisode />
        <Drawer
          title="Contestant"
          placement="right"
          onClose={() => setOpen(undefined)}
          open={Boolean(openContestant)}
          width={480}
        >
          <>{Boolean(openContestant) && <ContestantCard contestant={openContestant!} />}</>
        </Drawer>
      </Layout.Content>
    </>
  );
}
