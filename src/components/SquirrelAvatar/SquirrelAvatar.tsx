import { memo } from 'react';
import { HSLColor } from 'types';
import { parseDNA } from '../../utils/contestant-helpers';

import { Background } from './Background';
import { Bangs } from './Bangs';
import { Body } from './Body';
import { EarAccessories } from './EarAccessories';
import { EyeAccessories } from './EyeAccessories';
import { EyeBrowAccessories } from './EyeBrowAccessories';
import { EyeLids } from './EyeLids';
import { Eyes } from './Eyes';
import { FacialHair } from './FacialHair';
import { FacialHairBehind } from './FacialHairBehind';
import { FacialVariations } from './FacialVariations';
import { Hair } from './Hair';
import { Head } from './Head';
import { HeadAccessories } from './HeadAccessories';
import { Mouth } from './Mouth';
import { NeckAccessories } from './NeckAccessories';
import { Nose } from './Nose';
import { NoseAccessories } from './NoseAccessories';
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
      <NeckAccessories appearance={parsedDNA} color={color} />
      <Head appearance={parsedDNA} />
      <FacialVariations appearance={parsedDNA} />
      <FacialHairBehind appearance={parsedDNA} />
      <Mouth appearance={parsedDNA} />
      <EarAccessories appearance={parsedDNA} />
      <FacialHair appearance={parsedDNA} />
      <Eyes appearance={parsedDNA} />
      <EyeLids appearance={parsedDNA} />
      <EyeBrowAccessories appearance={parsedDNA} />
      <EyeAccessories appearance={parsedDNA} color={color} />
      <Nose appearance={parsedDNA} />
      <NoseAccessories appearance={parsedDNA} />
      <Bangs appearance={parsedDNA} color={color} />
      <HeadAccessories appearance={parsedDNA} color={color} />
    </svg>
  );
});
