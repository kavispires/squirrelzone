import { NOSE_COLOR } from '../../utils/appearance-constants';
import { Appearance } from 'types';

type NoseProps = {
  appearance: Appearance;
};

export function Nose({ appearance }: NoseProps) {
  const noseColor = NOSE_COLOR[appearance.snout.nose].hex;

  return (
    <>
      <path
        fill={noseColor}
        d="M331.6 330.88s17.39-.65 19.91 4.39-13.51 33.31-21.69 33.31-26.53-29.83-22.82-34.28 21.74-3.4 24.6-3.42Z"
      />
      <path d="M329.82 371.82c-8.54 0-19.83-17.88-23.67-26-3.23-6.87-3.75-11.05-1.68-13.56 3.72-4.5 14.46-4.88 25.54-4.62h1.52c5.89-.21 19.77 0 22.88 6.19.67 1.34 2.14 6.91-7.15 21.94-3.7 5.99-10.9 16.05-17.44 16.05Zm-20.11-35.69c-.1 3 5.2 14 12.27 22.51 4.55 5.49 7.2 6.69 7.84 6.69 0 0 2.07-.06 6.57-5.45 7.23-8.66 12.39-20.51 12.15-23.26-1.28-1.57-9.32-2.78-16.82-2.5H329.85c-15.15-.39-19.12 1.22-20.14 2.01Zm0-.27 21.86-5Z" />
    </>
  );
}
