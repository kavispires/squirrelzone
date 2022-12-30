import { Appearance, HSLColor } from 'types';

type EyeAccessoriesProps = {
  appearance: Appearance;
  color: HSLColor;
};

export function EyeAccessories({ appearance, color }: EyeAccessoriesProps) {
  const colorStr = `hsl(${color.hue},${color.saturation}%,${Math.max(color.lightness - 20, 10)}%)`;
  const kind = appearance.accessories.eyes;

  switch (kind) {
    // None
    case 0:
      return (
        <>
          <></>
        </>
      );
    // Shades Basic
    case 1:
      return (
        <>
          <path
            fill={colorStr}
            opacity="0.95"
            d="M141.48 214.92s25.36-15.3 68.65-14.24S333 210.33 333 210.33s69.92-6 104.82 14 22.11 41.84 17.94 51.51-22.66 56.94-44.76 61-57.94-1.25-65.47-7.29-14.14-22.37-19.86-21.1-17.28 19.78-22.31 22.91-13.81 4.67-24.73 5.74-84.09 12.16-104.8 8.75-30.79-31.95-30.79-31.95-13.8-38.17-13.45-61.9 2.79-28.75 11.89-37.08z"
          ></path>
          <path d="M184.62 351.52a74.24 74.24 0 01-11.58-.71c-23.36-3.84-34.24-33.93-34.69-35.21-.56-1.56-14.1-39.28-13.74-63.65.35-23.91 2.62-30.76 13.49-40.72a5.16 5.16 0 01.8-.59c1.08-.66 27.09-16 71.36-15 41.26 1 116.12 8.92 122.82 9.63 6.87-.55 72.56-5.21 107.24 14.68 36.65 21 25.6 45.5 20.89 55.95l-.84 1.88c-.25.58-.59 1.38-1 2.28-10.37 24.62-26.57 57.81-47.48 61.69-21.56 4-59.88-.59-69.51-8.31-3.71-3-6.86-7.53-9.91-11.93-1.87-2.7-4.6-6.64-6.19-7.89-2.42 1.64-7.36 7.74-10.12 11.15-4.55 5.62-7.48 9.15-10.18 10.83-5.14 3.19-13.18 5.13-26.89 6.47-2.05.2-6.68.81-12.53 1.58-21.99 2.92-59.72 7.87-81.94 7.87zM144.44 219c-7.18 6.63-9.49 10.22-9.83 33.12-.34 22.53 13 59.76 13.16 60.13s9.39 25.84 26.89 28.72c15.93 2.62 66.39-4 90.64-7.18 6.18-.81 10.64-1.4 12.86-1.61 7.4-.73 17.79-2 22.58-5 1.41-.87 5-5.36 7.69-8.63 6.95-8.58 11.51-13.87 16.17-14.91 6.62-1.47 11.24 5.2 16.13 12.25 2.64 3.82 5.38 7.77 7.94 9.83s11.71 4.75 24.77 6.38c13.7 1.71 27.07 1.67 36.67-.11 8.22-1.52 21.85-12.43 40.08-55.73l1-2.36c.28-.64.57-1.31.9-2 4.79-10.62 12-26.66-16.74-43.16-33.13-19-101.22-13.41-101.91-13.35a5.13 5.13 0 01-1 0c-.79-.08-79.88-8.58-122.47-9.62-38.26-1.03-62.21 11.38-65.53 13.23z"></path>
          <path
            fill={colorStr}
            opacity="0.95"
            d="M84.7 226l44.9 38.21s-1.4-26.9 0-32.9-44.9-15.6-44.9-15.6z"
          ></path>
          <path d="M129.6 269.24a5 5 0 01-3.24-1.19l-44.9-38.22A5 5 0 0179.7 226v-10.26a5 5 0 016-4.89c.42.08 10.46 2.17 21.16 5 20.42 5.47 24.89 8.82 26.68 11.62a6.43 6.43 0 01.91 5c-.85 3.67-.44 20.63.12 31.51a5 5 0 01-5 5.26zm-39.9-45.52L124.14 253c-.21-7.17-.3-15.74.24-20.59-4.48-2.72-19.87-7.16-34.68-10.5z"></path>
        </>
      );
    // ?
    case 2:
      return (
        <>
          <path
            fill={colorStr}
            opacity="0.95"
            d="M151.62 216.82l122.71 3.53s19.62 1.94 20.95 20.42S281.83 313 262 323.52s-99 2.24-106-6.4-11.68-26.94-15.18-79.12c0 0-1.5-21.47 10.8-21.18zm278.47-3.24l-95.47 3.53s-15.27 1.94-16.3 20.42 10.46 72.19 25.93 82.75 77 2.24 82.48-6.4 9-26.94 11.76-79.15c0 0 1.17-21.44-8.4-21.15z"
          ></path>
          <path
            fill={colorStr}
            opacity="0.95"
            d="M86.44 226.33l54.38 11.64-.85 17.07-53.53-28.71zm207.86 26.71l-1.88 14.77h29.36l-2.97-14.77H294.3z"
          ></path>
          <path d="M437.9 211.83a10.44 10.44 0 00-8-3.25l-95.51 3.53h-.44c-6.71.85-19.66 7.2-20.66 25.1a77 77 0 00.34 10.79h-13.51a51.72 51.72 0 00.15-7.63c-1.3-17.94-17.21-24.22-25.45-25h-.35l-122.73-3.53a13.17 13.17 0 00-10.07 4.1c-4 4.23-5.36 10.9-5.76 15.89l-48.42-10.39a5 5 0 00-3.41 9.3l53.4 28.63c3.6 39.61 8.35 53.18 14.57 60.89 6.52 8.07 41.19 11.41 51.66 12.24 5.51.44 14.23 1 23.57 1 13.71 0 28.77-1.17 37-5.55 14.22-7.55 25.28-32.79 31.22-55.12h22.2c.78 3.48 1.64 7 2.57 10.39 4.13 15 11.14 34.37 21.16 41.21 6.3 4.3 17.69 5.84 29.91 5.84a193.76 193.76 0 0036.87-3.8c19-4 21.73-8.28 22.75-9.91 5.57-8.86 9.6-25.6 12.52-81.54.15-2.78.59-16.87-5.58-23.19zM135.37 246.9l-15.45-8.29 15.7 3.36zm124.24 72.2c-7.63 4-28.82 5.43-54 3.52-25.8-2-43.14-6.31-45.83-8.72a25.57 25.57 0 01-3.49-6l107.27 8.31a19.88 19.88 0 01-3.95 2.89zM271 306.87a4.66 4.66 0 00-.65-.12L153 297.66c-.68-2.84-1.35-6.14-2-10l125.91 8.08a97.31 97.31 0 01-5.91 11.13zM281 286l-131.44-8.44c-.47-3.65-.94-7.67-1.4-12.1l136.7 8.92c-1.2 3.85-2.49 7.76-3.86 11.62zm7.41-25.9c-.31 1.56-.65 3.14-1 4.76a5 5 0 00-1.73-.45l-138.44-9q-.45-5.26-.89-11.2l143 8.44zm-142.56-26c.17-3.94 1-9.05 3.11-11.29a3.12 3.12 0 012.59-1L274 225.34a24.2 24.2 0 018.19 2.81 15.23 15.23 0 018.15 13c0 .48.06 1 .07 1.51zm152.3 28.7l.38-3.05.31-1.72h15.93l.95 4.77zm124.45 48.31c-2.14 2.24-15.71 6.45-34.94 8.3-19 1.83-34.95.54-40.54-3.27a15.69 15.69 0 01-2.51-2.22l80.4-8a27.05 27.05 0 01-2.46 5.2zm5.1-15.53l-89.15 8.89a104.3 104.3 0 01-4.59-11l95.39-7.89c-.56 3.72-1.11 7.05-1.7 10.01zm2.87-20.16l-99.76 8.24c-1.11-3.8-2.12-7.71-3-11.59l103.89-8.74c-.42 4.36-.79 8.38-1.18 12.1zm1.86-22.19L326 262.18l-.27.05-.48-2.38c-.57-3.33-1-6.53-1.37-9.5l109.17-8.3c-.2 3.95-.43 7.64-.67 11.19zm-109.18-12.86c0-.91 0-1.77.06-2.56.74-13.17 10.11-15.42 11.78-15.72l95.15-3.51c.2 0 .26 0 .5.24 1.89 1.92 2.75 8.18 2.8 13.16z"></path>
        </>
      );
    // ?
    case 3:
      return (
        <>
          <path
            fill={colorStr}
            opacity="0.95"
            d="M289 321.44s15-21.44 30.85-22.15 36.69 34.72 48 37.76 62.33-8.29 67.37-12.29 10.27-106.1 2.76-111.18-77.15-11.19-113.4-13.19-162 1.33-201.85 18.63c0 0-9 4-7.68 10s12 90.92 16.81 94.5 88.17 20.6 112.76 17.54 35.87-9.79 44.38-19.62z"
          ></path>
          <path d="M237.41 346.42c-16.57 0-42.23-4-57.48-6.72-.46-.08-45.54-8.06-51.08-12.16-3.37-2.5-5.79-7.46-16.17-80.34a522.11 522.11 0 00-2.55-17.07c-1.8-7.86 5.77-13.56 10.52-15.68 40.71-17.64 167.63-21.06 204.17-19 1 .06 104.35 6.19 115.93 14 2.58 1.75 5 5 5.73 25.08.55 14.82 0 36.39-1.34 56.28-2.38 34.33-5 36.38-6.86 37.88-6.42 5.09-59 16.62-71.77 13.2-6.12-1.65-12.45-8.52-20.47-17.22s-19.12-20.7-26-20.38c-11 .5-23.19 14.62-27 20-.1.13-.2.27-.31.39C282.19 337 268.42 343.13 245.2 346a64.51 64.51 0 01-7.79.42zm-102.12-26.78C145.42 323.42 220.64 339 244 336.1c23.8-3 33.67-9.24 41.06-17.75 1.83-2.55 17.19-23.27 34.57-24.06 11.53-.52 22.86 11.74 33.8 23.59 5.52 6 12.39 13.44 15.72 14.34 9 2.42 54-7 62.33-11.05 1.45-4.57 3.77-23.75 4.82-51.62 1.21-32.12-.28-48.32-1.7-52.12-8.69-3.71-66.75-9.65-110.29-12-18.1-1-58.92-.61-98.95 2.07-48.35 3.24-84.1 9-100.64 16.14-2.41 1.1-5 3.41-4.8 4.3.38 1.66 1.14 7 2.7 17.89 2.55 18.17 9.31 65.57 12.67 73.81zm153.71 1.8zm-153.34-1.09zm298.68-103.42z"></path>
          <path
            fill={colorStr}
            opacity="0.95"
            d="M86.77 218.35L115 229l3.5 23.68L86.77 229s-4.44-7.5 0-10.65z"
          ></path>
          <path d="M118.51 257.7a5 5 0 01-3-1L83.78 233a5 5 0 01-1.31-1.46c-4.69-7.93-2.67-14.4 1.42-17.29a5 5 0 014.65-.6l28.23 10.67a5 5 0 013.18 3.94l3.51 23.74a5 5 0 01-4.95 5.73zm-27.83-32l21.11 15.76-1.3-8.79-20.07-7.59.26.61z"></path>
        </>
      );
    //
    case 4:
      return (
        <>
          <path
            fill="#87276b"
            d="M294.25 192.26s15-15.64 30.85-16.16 36.69 25.33 48 27.55 66.45-5.66 71.48-8.58-26.74-80.42-34.25-84.13-36.25-5.32-74.53-2c-2.44.22-11.2 7.67-22.24 7.65-12 0-37.07-6.68-43.9-7-67.84-3-114.37-.72-141.69 7.92 0 0-18.83 7.57-17.47 11.92s21.77 61.71 26.6 64.32 88.18 15 112.76 12.8 35.92-7.12 44.39-14.29z"
          ></path>
          <path d="M242.67 211.84c-16.42 0-42-2.94-57.22-4.89-12.58-1.62-46.22-6.35-50.71-8.78-2.09-1.12-4.7-2.53-16.89-34.11a901.68 901.68 0 01-12.11-33.12c-2.09-6.66 6.83-11.45 10.63-13.49 4.73-2.54 9.55-4.48 9.75-4.56l.36-.13c27.4-8.67 73-11.25 143.41-8.15 3.13.14 8.72 1.27 15.8 2.69 9.45 1.91 21.22 4.28 27.89 4.29 6.41 0 12.17-3.17 16-5.26 2.42-1.33 4-2.21 5.8-2.37 36.12-3.13 67.85-2.11 77.17 2.5 1.9.94 4.44 2.92 10.52 14.65a368.33 368.33 0 0111.7 25.42c6.92 16.45 15.09 38.45 15.35 46.33.13 3.88-1.58 5.7-3 6.54-6.67 3.87-63.12 11.48-74.95 9.15-5.91-1.16-12.55-6.41-20.24-12.49-8.56-6.78-19.26-15.2-26.63-15-13.6.45-27.27 14.49-27.41 14.63l-.37.35C287 205 273.3 209.47 250.33 211.55c-2.21.2-4.8.29-7.66.29zm-102.81-22.38c9.27 2.67 86.33 14.25 109.56 12.13 25.43-2.3 35-7.59 41.42-13 2-2 17.25-16.94 34.1-17.49 11.06-.38 22.81 8.92 33.17 17.12 6.1 4.83 12.42 9.83 16 10.52 9.14 1.79 54.09-4.2 65.86-7.32-.92-5.21-5.05-18.5-13.23-38.27-9.44-22.81-16.6-35.69-18.84-37.85-6-2.67-31.66-4.82-71.19-1.41-.5.22-1.46.75-2.26 1.19-4.42 2.44-11.81 6.51-20.8 6.51h-.05c-7.65 0-19.45-2.39-29.85-4.48-6.12-1.24-11.9-2.4-14.26-2.51-68.12-3-113.85-.5-139.78 7.64-5.79 2.35-11.68 5.5-13.85 7.36 3.69 11.07 19.28 53.4 24 59.86zm154.39 2.8zm-154-2.36z"></path>
          <path
            fill="#87276b"
            d="M77.46 224.29s24.51-76.09 35.7-87.24l9.84 26.33-37.56 64.36a8.07 8.07 0 00-7.98-3.45z"
          ></path>
          <path d="M85.51 232.9h-.18a4.7 4.7 0 01-4.18-2.59 3.22 3.22 0 00-3.15-1.05 5 5 0 01-5.33-6.5c.07-.19 6.25-19.36 13.72-39.64 15.43-41.87 21.29-47.7 23.21-49.61a5 5 0 018.22 1.8l9.78 26.33a5 5 0 01-.37 4.26l-37.5 64.35a5 5 0 01-4.22 2.65zM111.9 148c-8 15.31-20 48.38-27.84 72.16l33.37-57.26z"></path>
        </>
      );
    // Glasses Round
    case 5:
      return (
        <>
          <ellipse cx="216.77" cy="271.95" fill="#bfffff" rx="84.96" ry="76.91" opacity="0.3"></ellipse>
          <path d="M216.77 353.86c-49.6 0-90-36.75-90-81.91s40.35-81.9 90-81.9 90 36.74 90 81.9-40.39 81.91-90 81.91zm0-153.81c-44.08 0-80 32.25-80 71.9s35.87 71.91 80 71.91 80-32.26 80-71.91-35.91-71.9-80-71.9z"></path>
          <ellipse
            cx="384.17"
            cy="271.95"
            fill="#bfffff"
            rx="61.16"
            ry="76.91"
            transform="rotate(-13.72 384.1 271.9)"
            opacity="0.3"
          ></ellipse>
          <path d="M390.77 353.06c-31.26 0-61.45-26.82-70.88-65.42-10.71-43.87 9.41-86.61 44.86-95.26 17.38-4.24 35.71.21 51.6 12.53 15.56 12.07 27 30.3 32.09 51.35 10.71 43.88-9.41 86.61-44.85 95.26a54 54 0 01-12.82 1.54zm-13.08-152.23a44.49 44.49 0 00-10.57 1.27c-30.09 7.34-46.91 44.65-37.51 83.17 8.31 34 34.36 57.8 61.07 57.8a44.53 44.53 0 0010.54-1.26c30.09-7.35 46.91-44.66 37.51-83.18-4.6-18.86-14.73-35.13-28.51-45.81-10.17-7.89-21.43-11.99-32.53-11.99z"></path>
          <path d="M322.16 263.59a5 5 0 01-3.72-1.66c-2.08-2.31-4.17-3.49-6.21-3.49-3 0-5.88 2.49-6.73 3.45a5 5 0 01-7.54-6.57c.6-.7 6.1-6.8 14.13-6.88 3.5-.05 8.68 1.12 13.79 6.8a5 5 0 01-3.71 8.35zM135.33 255a5 5 0 01-2.26-.54l-47.23-24a5 5 0 014.53-8.92l47.23 24a5 5 0 01-2.27 9.46z"></path>
        </>
      );
    // Glasses Square
    case 6:
      return (
        <>
          <path
            fill="#bfffff"
            d="M291.48 314.85a21.62 21.62 0 01-21.24 20H158.09a22 22 0 01-21.55-19.94l-7-89.88A18.26 18.26 0 01148 205.05h130.28A18.61 18.61 0 01297 225zm34.25.01a21.76 21.76 0 0021.35 19.95h70.6a21.52 21.52 0 0021.17-20l5.3-89.84a18.67 18.67 0 00-18.82-20h-87.07A18.49 18.49 0 00319.61 225z"
            opacity="0.3"
          ></path>
          <path
            fill="#bfffff"
            d="M296.22 238.3h24.3l.76 11.16h-25.75l.69-11.16zM84.68 216.82l45.14 11.57v15.62L84.7 226.03l-.02-9.21z"
            opacity="0.3"
          ></path>
          <path d="M442.75 207.48a23.69 23.69 0 00-17.42-7.43h-87.08a23.49 23.49 0 00-23.63 25.29l.55 8h-13.63l.49-8a23.61 23.61 0 00-23.75-25.27H148a23.21 23.21 0 00-23.46 21.82L85.92 212a5 5 0 00-4.31.9 5 5 0 00-1.93 4v9.21a5 5 0 003.15 4.63l43.5 17.26 5.22 67.26a27.08 27.08 0 0026.54 24.55h112.15a26.66 26.66 0 0026.23-24.65l3.76-60.7h16.38l4.13 60.74a26.8 26.8 0 0026.34 24.61h70.6a26.56 26.56 0 0026.16-24.67l5.3-89.83a23.67 23.67 0 00-6.39-17.83zm-317.93 29.16L94.13 224.4l30.69 7.87zm161.67 77.9a16.73 16.73 0 01-16.25 15.27H158.09a17.12 17.12 0 01-16.57-15.32l-7-89.89A13.27 13.27 0 01148 210.05h130.28a13.61 13.61 0 0113.77 14.65l-.82 13.3-.69 11.16zm14.36-70.08l.07-1.16h14.93v.22l.06.94zm138.31-19.74l-5.3 89.83a16.64 16.64 0 01-16.18 15.26h-70.6a16.87 16.87 0 01-16.37-15.29l-4.45-65.4-.75-11.12-.9-13.29a13.47 13.47 0 0113.65-14.61h87.08a13.67 13.67 0 0113.83 14.67z"></path>
        </>
      );
    // Shades Heart
    case 7:
      return (
        <>
          <path
            fill="#d00081"
            d="M301.73 254.58c-.83-27.44-23.55-49.71-52.59-49.71a53.72 53.72 0 00-40.28 17.76 53.72 53.72 0 00-40.28-17.76c-29.05 0-52.59 22.25-52.59 49.71 0 51.81 65.6 85.13 92.87 85.13s94.37-35.23 92.87-85.13zm148.05-2.12c-.65-27.44-8.56-49.72-31.45-49.72-9 0-14.15 6.91-21.75 17.77-7.6-10.86-29-17.77-41.75-17.77-22.9 0-41.45 22.26-41.45 49.72 0 51.81 51.71 85.13 73.2 85.13s64.42-35.23 63.2-85.13z"
            opacity="0.3"
          ></path>
          <path
            fill="#d00081"
            d="M84.7 226s27.4-.83 32 20.19a45.14 45.14 0 0111.59-23.62s-5.3-19.95-46.2-5.78c.03.03-4.09 4.43 2.61 9.21zm217.03 28.58s8.46-6.58 11.65-2.12c0 0 .4-9.86 1.79-14.5 0 0-8.36-6.67-16.79 0 0 .04 3.37 12.97 3.35 16.62z"
            opacity="0.3"
          ></path>
          <path d="M454.78 252.34c-1.07-45.12-20.41-54.6-36.45-54.6-10 0-16.12 6.46-22.24 14.82-5.08-4.52-11.53-7.66-16.64-9.66-8.26-3.23-17.46-5.16-24.62-5.16-19.12 0-35.57 13.68-42.69 33.15a18 18 0 00-11.37.09c-9.4-18.55-28.92-31.11-51.63-31.11a59.06 59.06 0 00-40.28 15.61 59.73 59.73 0 00-79.64-.79 22.11 22.11 0 00-5.87-4.48c-9.8-5.21-24.22-4.58-42.87 1.88a5.08 5.08 0 00-2 1.29 10.17 10.17 0 00-2.6 7.74c.23 2.34 1.44 5.8 5.91 9a5 5 0 003 .92 42.87 42.87 0 0112.83 2c7.57 2.53 12.26 7 14 13.37a52 52 0 00-.64 8.14c0 55.15 68.82 90.13 97.87 90.13 18.4 0 52.18-14.35 74.68-37.53 14.91-15.37 22.88-32.57 23.19-49.92a15.09 15.09 0 011.75-.88c1.1 22.53 11.65 44.3 30 61.7 15.22 14.43 35 24.51 48.1 24.51 11.78 0 27.24-8.35 40.36-21.78 10.75-10.97 28.66-34.5 27.85-68.44zM309.51 240.5a61.7 61.7 0 00-.8 5.5 15.28 15.28 0 00-2.77.65 55.45 55.45 0 00-1.47-6.36 8.14 8.14 0 015.04.21zM86.48 221l-.28-.3c17.87-5.78 27.29-4.25 32.1-1.86a11.85 11.85 0 014 3.09 52.17 52.17 0 00-6.75 11C107.69 224 94.84 221.2 86.48 221zm189.88 79.19c-21.84 22.51-53.23 34.5-67.5 34.5-25.34 0-87.87-31.94-87.87-80.13 0-24.65 21.35-44.71 47.59-44.71A48.76 48.76 0 01205.12 226a5 5 0 007.48 0 48.76 48.76 0 0136.54-16.08c20.35 0 37.6 12.14 44.45 29.52a141 141 0 013.09 14.43c0 .31 0 .61.05.91.59 19.58-10.73 35.52-20.37 45.43zm143.42 13.61c-12.65 13-25.79 18.77-33.2 18.77-19.66 0-68.14-31.9-68.2-80a100.56 100.56 0 011-10.5c3.84-19.65 18.27-34.31 35.45-34.31 15 0 32.59 8.41 37.65 15.64a5 5 0 008.19 0c7.79-11.11 11.56-15.64 17.66-15.64 16.84 0 25.75 15.09 26.45 44.84.72 30.25-15.35 51.4-25 61.22z"></path>
        </>
      );

    default:
      return <></>;
  }
}
