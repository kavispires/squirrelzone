import { DNA_DISTRIBUTION } from 'utils/squirrel-appearance';
import { Appearance } from 'types';

type EyeLidsProps = {
  appearance: Appearance;
};

export function EyeLids({ appearance }: EyeLidsProps) {
  const furColor = DNA_DISTRIBUTION['fur.color'].options[appearance.fur.color].hex;
  const kind = appearance.eye.lids;

  switch (kind) {
    // Basic // Nothing
    case 0:
      return (
        <>
          <></>
        </>
      );
    // Serene
    case 1:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82a79 79 0 0 0-40.78 10.92l82.59.65a78.65 78.65 0 0 0-41.81-11.57Z"
          />
          <path d="M258 231.67a62.13 62.13 0 0 0-4.74-3.28l-82.59-.65a61.95 61.95 0 0 0-8.87 6.41l100.17.79a68.89 68.89 0 0 0-3.97-3.27Z" />
          <path
            fill={furColor}
            d="M382.25 216.82A42.76 42.76 0 0 0 352.73 229h59a42.76 42.76 0 0 0-29.48-12.18Z"
          />
          <path d="M414.89 232.26c-1-1.13-2-2.22-3.11-3.24h-59c-1.08 1-2.12 2.11-3.12 3.24s-1.78 2.12-2.61 3.24h70.51a88.61 88.61 0 0 0-2.67-3.24Z" />
        </>
      );
    // Bored
    case 2:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82c-33 0-60.5 18.88-66.25 43.72l132.72 1c-5.2-25.31-33.02-44.72-66.47-44.72Z"
          />
          <path d="M278.45 264.83c-.14-1.1-.33-2.18-.55-3.25l-132.72-1a39.66 39.66 0 0 0-.99 6.47l134.53 1.06a38.85 38.85 0 0 0-.27-3.28Z" />
          <path
            fill={furColor}
            d="M382.25 216.82c-23.19 0-42.47 19.63-45.9 45.2h91.8c-3.42-25.57-22.7-45.2-45.9-45.2Z"
          />
          <path d="M428.49 265.26a57.3 57.3 0 0 0-.34-3.24h-91.8q-.21 1.61-.33 3.24a57.56 57.56 0 0 0-.17 3.24h92.81a68.84 68.84 0 0 0-.17-3.24Z" />
        </>
      );
    // Judgy
    case 3:
      return (
        <>
          <path
            fill={furColor}
            d="M278.79 270.17c0-29.42-30.22-53.35-67.36-53.35s-67.37 23.93-67.37 53.35a42.69 42.69 0 0 0 1.29 10.37l131.87 1a42.64 42.64 0 0 0 1.57-11.37Z"
          />
          <path d="M145.35 280.54c.28 1.09.59 2.18 1 3.25s.78 2.18 1.24 3.25l127.35 1c.47-1.06.9-2.14 1.3-3.23s.73-2.14 1-3.23Z" />
          <path
            fill={furColor}
            d="M428.69 270.17c0-29.42-20.83-53.35-46.44-53.35s-46.44 23.93-46.44 53.35A60.66 60.66 0 0 0 337 282h90.54a60.66 60.66 0 0 0 1.15-11.83Z"
          />
          <path d="M337 282a58.5 58.5 0 0 0 1.66 6.48h87.23a57.38 57.38 0 0 0 1.65-6.48Z" />
        </>
      );
    // Shy
    case 4:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 323.52c26.43 0 49.35-12.13 60.37-29.73H151.05c11.02 17.6 33.95 29.73 60.38 29.73Z"
          />
          <path d="M147.65 287.31a41.45 41.45 0 0 0 3.4 6.48H271.8a47.65 47.65 0 0 0 3.4-6.48Z" />
          <path
            fill={furColor}
            d="M382.25 323.52c18.23 0 34-12.13 41.63-29.73h-83.25c7.6 17.6 23.37 29.73 41.62 29.73Z"
          />
          <path d="M338.28 287.31a54.55 54.55 0 0 0 2.35 6.48h83.25a61.09 61.09 0 0 0 2.34-6.48Z" />
        </>
      );
    // Tired
    case 5:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 323.52a80.57 80.57 0 0 0 34.88-7.73h-69.77a80.61 80.61 0 0 0 34.89 7.73Z"
          />
          <path d="M165.72 309.31q2.33 1.71 4.86 3.24 2.86 1.74 6 3.24h69.77a78.4 78.4 0 0 0 6-3.24q2.53-1.53 4.87-3.24Z" />
          <path
            fill={furColor}
            d="M382.25 323.52a41.81 41.81 0 0 0 24.05-7.73h-48.1a41.83 41.83 0 0 0 24.05 7.73Z"
          />
          <path d="M350.74 309.31q1.61 1.71 3.35 3.24a48.71 48.71 0 0 0 4.11 3.24h48.1a45.7 45.7 0 0 0 4.11-3.24c1.17-1 2.28-2.1 3.36-3.24Z" />
        </>
      );
    // Skeptical
    case 6:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82c-27.93 0-51.94 13.53-62.14 32.75l124.76 1c-9.89-19.76-34.22-33.75-62.62-33.75Z"
          />
          <path d="M275.53 253.8c-.45-1.1-.94-2.18-1.48-3.25l-124.76-1a47.95 47.95 0 0 0-2.81 6.46l130.24 1c-.35-1.01-.72-2.14-1.19-3.21Z" />
          <path
            fill={furColor}
            d="M211.43 323.52c26.43 0 49.35-12.13 60.37-29.73H151.05c11.02 17.6 33.95 29.73 60.38 29.73Z"
          />
          <path d="M147.65 287.31a41.45 41.45 0 0 0 3.4 6.48H271.8a47.65 47.65 0 0 0 3.4-6.48Z" />
          <path
            fill={furColor}
            d="M382.25 323.52c18.23 0 34-12.13 41.63-29.73h-83.25c7.6 17.6 23.37 29.73 41.62 29.73Z"
          />
          <path d="M338.28 287.31a54.55 54.55 0 0 0 2.35 6.48h83.25a61.09 61.09 0 0 0 2.34-6.48Z" />
          <path
            fill={furColor}
            d="M382.25 216.82c-19.73 0-36.62 14.22-43.33 34.2h86.67c-6.72-20.02-23.59-34.2-43.34-34.2Z"
          />
          <path d="M426.58 254.26q-.45-1.65-1-3.24h-86.66a55.45 55.45 0 0 0-1.77 6.48h90.21a56.66 56.66 0 0 0-.78-3.24Z" />
        </>
      );
    // Unstable
    case 7:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82c-32.11 0-59 17.88-65.74 41.72l131.76 1c-6.22-24.32-33.45-42.72-66.02-42.72Z"
          />
          <path d="M278.13 262.82a44.35 44.35 0 0 0-.68-3.24l-131.76-1a43.72 43.72 0 0 0-1.31 6.47l134.19 1.06a44.12 44.12 0 0 0-.44-3.29Z" />
          <path
            fill={furColor}
            d="M382.25 216.82A42.3 42.3 0 0 0 355 227h54.53a42.34 42.34 0 0 0-27.28-10.18Z"
          />
          <path d="M413 230.26q-1.69-1.72-3.51-3.24H355a44.59 44.59 0 0 0-3.51 3.24q-1.51 1.55-2.91 3.24h67.37q-1.41-1.69-2.95-3.24Z" />
        </>
      );
    // Feisty
    case 8:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82c-29.85 0-55.21 15.46-64 36.79L278.47 265c-3.3-27-32.1-48.18-67.04-48.18Z"
          />
          <path d="M278.73 268.27c-.05-1.1-.13-2.19-.26-3.27L147.4 253.61a38.16 38.16 0 0 0-2.08 6.33l133.42 11.59c0-.46.05-.91.05-1.36 0-.64-.03-1.27-.06-1.9Z" />
          <path
            fill={furColor}
            d="M382.25 216.82c-24.89 0-45.26 22.61-46.38 50.9l91.23-11.37c-5.31-22.74-23.4-39.53-44.85-39.53Z"
          />
          <path d="M427.76 259.53q-.28-1.61-.66-3.18l-91.23 11.37c0 .81-.06 1.62-.06 2.45v.82c0 1.09.06 2.17.13 3.25l92.27-11.5c-.11-1.08-.21-2.15-.45-3.21Z" />
        </>
      );
    // Angry
    case 9:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82a83 83 0 0 0-21.91 2.91l73.13 15.85c-12.36-11.47-30.73-18.76-51.22-18.76Z"
          />
          <path d="M266.75 239.78a57.89 57.89 0 0 0-4.1-4.2l-73.13-15.85a70.07 70.07 0 0 0-6.2 2 75.35 75.35 0 0 0-5.3 2.17l91.92 19.92q-1.48-2.08-3.19-4.04Z" />
          <path
            fill={furColor}
            d="M382.25 216.82c-15.65 0-29.51 9-37.93 22.62l61.9-14.95a41.75 41.75 0 0 0-23.97-7.67Z"
          />
          <path d="M409.53 227a49.95 49.95 0 0 0-3.31-2.53l-61.9 14.95a57 57 0 0 0-3.92 7.62l72-17.4c-.91-.9-1.88-1.78-2.87-2.64Z" />
        </>
      );
    // Sassy
    case 10:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82a81.1 81.1 0 0 0-31.67 6.28l80.71 10.56c-12.29-10.36-29.72-16.84-49.04-16.84Z"
          />
          <path d="M264.59 237.46q-1.95-2-4.12-3.8l-80.71-10.56a69.03 69.03 0 0 0-5.42 2.56q-2.39 1.25-4.62 2.66l98.2 12.85a52.59 52.59 0 0 0-3.33-3.71Z" />
          <ellipse cx="382.25" cy="270.17" fill={furColor} rx="46.44" ry="53.35" />
          <path d="M378 296.34c-3.5-.52-7-1.09-10.45-1.87s-6.86-1.66-10.23-2.66a118.04 118.04 0 0 1-14.75-5.53l-.86-.4-.36-.17 85.29-31.57a59.44 59.44 0 0 0-2-5.87l-.11-.27-81.68 30.23c.88-1.12 1.78-2.23 2.68-3.32q3.27-3.9 6.83-7.55t7.37-7c2.54-2.28 5.22-4.35 7.95-6.4h.05a1.87 1.87 0 0 0-2.13-3.07c-3 1.88-5.93 3.82-8.73 6s-5.57 4.34-8.21 6.68-5.23 4.76-7.7 7.28a147.96 147.96 0 0 0-4.82 5.17 62 62 0 0 0 .61 4.57c0 .09 0 .19.05.29.17 1 .38 2 .6 3 0 .17.09.33.13.5.21.88.43 1.74.68 2.6 0 .09.05.18.08.28a59.41 59.41 0 0 0 1.8 5.22c1.74.62 3.48 1.21 5.23 1.74q5.3 1.61 10.66 2.77a136.14 136.14 0 0 0 21.67 2.87 1.74 1.74 0 0 0 1.82-1.47 1.72 1.72 0 0 0-1.47-2.05Z" />
        </>
      );
    // Vicious
    case 11:
      return (
        <>
          <path
            fill={furColor}
            d="M278.79 270.17c0-29.42-30.22-53.35-67.36-53.35-30.27 0-55.94 15.89-64.4 37.7l129.87 28.15a42.92 42.92 0 0 0 1.89-12.5Z"
          />
          <path d="M147 254.52c-.4 1-.74 2-1.06 3.09s-.59 2.08-.83 3.13l129.4 28.05c.48-1 .91-2 1.31-3s.74-2.05 1-3.09Z" />
          <path
            fill={furColor}
            d="M382.25 216.82c-25.61 0-46.44 23.93-46.44 53.35a61 61 0 0 0 1.85 14.88l90.62-21.89c-3-26.16-22.49-46.34-46.03-46.34Z"
          />
          <path d="M428.57 266.42a70.45 70.45 0 0 0-.29-3.26l-90.62 21.89a62.27 62.27 0 0 0 1.94 6.2l89.08-21.52c0-1.11-.05-2.21-.11-3.31Z" />
        </>
      );
    // Insecure
    case 12:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82c-23.23 0-43.75 9.36-55.87 23.56l79.09-20.29a82.77 82.77 0 0 0-23.22-3.27Z"
          />
          <path d="M240.31 222a75.09 75.09 0 0 0-5.66-1.89l-79.09 20.29q-1.71 2-3.21 4.17-1.33 1.95-2.48 4l95.38-24.48a53.75 53.75 0 0 0-4.94-2.09Z" />
          <path
            fill={furColor}
            d="M382.25 216.82a41.47 41.47 0 0 0-21.87 6.3L419.29 238c-8.49-12.85-21.93-21.18-37.04-21.18Z"
          />
          <path d="M421.65 242q-1.11-2-2.36-3.94l-58.91-14.9a44.84 44.84 0 0 0-6.66 5l69.82 17.66a33.1 33.1 0 0 0-1.89-3.82Z" />
        </>
      );
    // Sad
    case 13:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82c-37.15 0-67.37 23.93-67.37 53.35a42.35 42.35 0 0 0 .49 6.29l133.76-12.52c-3.9-26.49-32.4-47.12-66.88-47.12Z"
          />
          <path d="M278.68 267.17a43.11 43.11 0 0 0-.37-3.23l-133.76 12.52a42.94 42.94 0 0 0 1.45 6.38l132.78-12.43v-.24c.01-1.01-.03-2.01-.1-3Z" />
          <path
            fill={furColor}
            d="M382.25 216.82c-24.13 0-44 21.25-46.23 48.31l92.63 3.07c-.9-28.51-21.36-51.38-46.4-51.38Z"
          />
          <path d="M428.65 268.2 336 265.13a68.84 68.84 0 0 0-.17 3.24v3.24l92.67 3.07c.08-1.07.13-2.15.16-3.23v-1.28c.03-.66.01-1.31-.01-1.97Z" />
        </>
      );
    // Depressed
    case 14:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82c-37.15 0-67.37 23.93-67.37 53.35a43.09 43.09 0 0 0 3.25 16.33l128.14-32.89c-8.82-21.33-34.18-36.79-64.02-36.79Z"
          />
          <path d="M276.6 256.66c-.34-1-.73-2-1.15-3.05L147.31 286.5c.41 1 .87 2 1.35 3s1 2 1.58 2.94l127.26-32.66a48.3 48.3 0 0 0-.9-3.12Z" />
          <path
            fill={furColor}
            d="M428.69 270.17c0-29.42-20.83-53.35-46.44-53.35-22.09 0-40.62 17.82-45.29 41.6l90.7 22.93a61.25 61.25 0 0 0 1.03-11.18Z"
          />
          <path d="M337 258.42a58.72 58.72 0 0 0-.92 6.45l90.08 22.78a57.76 57.76 0 0 0 1.54-6.3Z" />
        </>
      );
    // Damaged
    case 15:
      return (
        <>
          <path
            fill={furColor}
            d="M211.43 216.82c-32.57 0-59.81 18.4-66 42.76l124.34-16.07c-11.69-15.94-33.45-26.69-58.34-26.69Z"
          />
          <path d="M271.79 246.52c-.64-1-1.33-2-2.05-3L145.4 259.58a42.61 42.61 0 0 0-1.14 6.69l129.29-16.71a54.41 54.41 0 0 0-1.76-3.04Z" />
          <path
            fill={furColor}
            d="M211.43 323.52c28.39 0 52.72-14 62.62-33.73H148.81c9.89 19.73 34.19 33.73 62.62 33.73Z"
          />
          <path d="M146.14 283.31a43.48 43.48 0 0 0 2.67 6.48h125.24c.53-1.07 1-2.14 1.48-3.24s.83-2.15 1.19-3.24Z" />
          <path
            fill={furColor}
            d="M382.25 323.52c19.58 0 36.35-14 43.17-33.73h-86.34c6.82 19.73 23.6 33.73 43.17 33.73Z"
          />
          <path d="M337.24 283.31a59.04 59.04 0 0 0 1.82 6.48h86.34c.37-1.07.72-2.14 1-3.24s.58-2.15.82-3.24Z" />
          <path
            fill={furColor}
            d="M382.25 216.82c-17 0-31.88 10.55-40 26.24l85.57 17c-4.11-24.61-22.98-43.24-45.57-43.24Z"
          />
          <path d="M428.31 263.43a61.81 61.81 0 0 0-.47-3.4l-85.57-17c-.5 1-1 2-1.44 3s-.86 2-1.25 3.06l89 17.65c-.05-1.08-.15-2.2-.27-3.31Z" />
        </>
      );

    default:
      return <></>;
  }
}
