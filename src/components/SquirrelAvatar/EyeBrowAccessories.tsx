import { Appearance } from 'types';
import { HEXtoHSL } from 'utils/colors';
import { DNA_DISTRIBUTION } from 'utils/squirrel-appearance';

type EyeBrowAccessoriesProps = {
  appearance: Appearance;
};

export function EyeBrowAccessories({ appearance }: EyeBrowAccessoriesProps) {
  const kind = appearance.accessories.eyebrow;
  const furColor = DNA_DISTRIBUTION['fur.color'].options[appearance.fur.color].hex;
  const hslFur = HEXtoHSL(furColor);
  const colorStr = `hsl(${hslFur.hue},${hslFur.saturation}%,${Math.min(hslFur.lightness + 20, 100)}%)`;

  switch (kind) {
    // None
    case 0:
      return (
        <>
          <></>
        </>
      );
    // Piercing Single
    case 1:
      return (
        <>
          <path
            fill="#f4ef4d"
            d="M136.33 239.43s2.47 14.3-8.51 16.71c0 0-8 2.58-12.3-8.23-4.72-11.89 9.29-16.29 9.29-16.29a76 76 0 012 10.67c.81 6.28 9.52-2.86 9.52-2.86z"
          ></path>
          <path d="M125.69 259.68c-4.15 0-9.86-2.21-13.18-10.57a13.87 13.87 0 010-11.43c3.11-6.52 11-9.05 11.29-9.15a3.23 3.23 0 014.08 2.18 74.94 74.94 0 012 9.95 24.92 24.92 0 004.12-3.46 3.24 3.24 0 015.54 1.68c1 6 .07 17.9-10.88 20.39a10.26 10.26 0 01-2.97.41zm-3.13-23.43a10.62 10.62 0 00-4.16 4.24 7.54 7.54 0 00.13 6.23c3 7.42 7.47 6.56 8.34 6.32a1.17 1.17 0 01.25-.07c3.76-.82 5.31-3.76 5.9-6.64-2 1.14-4 1.77-5.91 1.16-1.13-.37-3.08-1.49-3.5-4.79a89.32 89.32 0 00-1.05-6.45z"></path>
        </>
      );
    // Shaved Brow
    case 2:
      return (
        <>
          <path
            fill={colorStr}
            d="M374.31 193.14l-2.95 13.3c6.4-.49 13.11-.89 19.59-1.06l2.84-16a171.4 171.4 0 00-19.48 3.76zm47.5 14.74s-.61-13.63-4.38-20.28c0 0-5.62-.1-14.23.66l-4.45 17c9.45.08 17.81.79 23.06 2.62zm-84.3 2c-.17.13 11.16-1.43 25.83-2.77l3-11.66c-10.08 3.26-20.22 7.88-28.83 14.43z"
          ></path>
        </>
      );
    // Piercing Double
    case 3:
      return (
        <>
          <path
            fill="#f4ef4d"
            d="M136.33 239.43s2.47 14.3-8.51 16.71c0 0-8 2.58-12.3-8.23-4.72-11.89 9.29-16.29 9.29-16.29a76 76 0 012 10.67c.81 6.28 9.52-2.86 9.52-2.86z"
          ></path>
          <path d="M125.69 259.68c-4.15 0-9.86-2.21-13.18-10.57a13.87 13.87 0 010-11.43c3.11-6.52 11-9.05 11.29-9.15a3.23 3.23 0 014.08 2.18 74.94 74.94 0 012 9.95 24.92 24.92 0 004.12-3.46 3.24 3.24 0 015.54 1.68c1 6 .07 17.9-10.88 20.39a10.26 10.26 0 01-2.97.41zm-3.13-23.43a10.62 10.62 0 00-4.16 4.24 7.54 7.54 0 00.13 6.23c3 7.42 7.47 6.56 8.34 6.32a1.17 1.17 0 01.25-.07c3.76-.82 5.31-3.76 5.9-6.64-2 1.14-4 1.77-5.91 1.16-1.13-.37-3.08-1.49-3.5-4.79a89.32 89.32 0 00-1.05-6.45z"></path>
          <path
            fill="#f4ef4d"
            d="M145.28 231s-1.86 14.39-13.06 13.45c0 0-8.41.11-9.33-11.48-1-12.75 13.68-12.84 13.68-12.84a77.08 77.08 0 01-1.22 10.8c-1.09 6.23 9.93.07 9.93.07z"
          ></path>
          <path d="M133.28 247.73h-1.19c-4 0-11.53-3.07-12.43-14.47a13.86 13.86 0 013.41-10.91c4.88-5.31 13.13-5.42 13.48-5.42a3.24 3.24 0 013.24 3.29 77 77 0 01-1.06 10.08 24.84 24.84 0 004.95-2.09 3.24 3.24 0 014.79 3.24c-.72 5.76-4.87 16.28-15.19 16.28zm-1-6.52h.22c3.82.31 6.18-2 7.59-4.61-2.2.51-4.38.5-6-.64-1-.68-2.51-2.32-1.93-5.6.45-2.58.73-4.78.9-6.48a10.56 10.56 0 00-5.23 2.83 7.55 7.55 0 00-1.71 6c.63 8 5.2 8.47 6.11 8.5z"></path>
        </>
      );

    default:
      return <></>;
  }
}