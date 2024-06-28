import './Artists.scss';

import { Typography } from 'antd';
import { Chrome, Content } from 'components/Chrome';
import { Header } from 'components/Chrome/Header';
import { CreateArtistForm } from 'components/Forms/CreateArtistForm';
import { SquirrelAvatar } from 'components/SquirrelAvatar';
import { ArtistEntry, HSLColor } from 'types';

const parseColor = (color: string): HSLColor => {
  const [hue, saturation, lightness] = color.split(':');
  return { hue: Number(hue), saturation: Number(saturation), lightness: Number(lightness) };
};

export function ArtistsCreate() {
  return (
    <Chrome>
      <Header title="Create Artist" />

      <Content>
        <CreateArtistForm />
      </Content>
    </Chrome>
  );
}
