import { memo } from 'react';
import { HSLColor } from 'types';
import { parseDNA } from '../../utils/contestant-helpers';

import { Background } from './Background';
import { Bangs } from './Bangs';
import { Body } from './Body';
import { EyeLids } from './EyeLids';
import { Eyes } from './Eyes';
import { Hair } from './Hair';
import { Head } from './Head';
import { Mouth } from './Mouth';
import { Nose } from './Nose';
import { Tail } from './Tail';

type SquirrelAvatarProps = {
  dna: string;
  className?: string;
  color: HSLColor;
};
export const SquirrelAvatar = memo<SquirrelAvatarProps>(({ dna, color, className }) => {
  const parsedDNA = parseDNA(dna);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={className}>
      <Background color={color} />
      <Tail appearance={parsedDNA} />
      <Hair appearance={parsedDNA} color={color} />
      <Body appearance={parsedDNA} color={color} />
      <Head appearance={parsedDNA} />
      <Mouth appearance={parsedDNA} />
      <Nose appearance={parsedDNA} />
      <Eyes appearance={parsedDNA} />
      <EyeLids appearance={parsedDNA} />
      <Bangs appearance={parsedDNA} color={color} />
    </svg>
  );
});
