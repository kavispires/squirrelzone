import { DNA_DISTRIBUTION } from 'utils/squirrel-appearance';
import { Appearance } from 'types';

type EarAccessoriesProps = {
  appearance: Appearance;
};

export function EarAccessories({ appearance }: EarAccessoriesProps) {
  const kind = appearance.accessories.ear;

  switch (kind) {
    // None
    case 0:
      return (
        <>
          <></>
        </>
      );
    // Earring Single Ring OK
    case 1:
      return (
        <>
          <path
            fill="#f4ef4d"
            d="M77 326.76s13.59 10.42 6.69 22.15c0 0-3.8 10.42-15.67 5.65s-7.31-16.73-7.31-16.73a77.5 77.5 0 009.78 3.45c6.07 1.77 6.51-14.52 6.51-14.52z"
          ></path>
          <path d="M73.84 359.06a18.82 18.82 0 01-7-1.5c-11.72-4.72-11.1-15.72-9.13-20.88a3.24 3.24 0 014.38-1.8 74.29 74.29 0 009.19 3.25c1.18-1.12 2.37-6.52 2.51-11.46a3.24 3.24 0 015.21-2.49c5.46 4.19 14 15 7.64 26.15a14.66 14.66 0 01-7.28 7.58 13.2 13.2 0 01-5.52 1.15zm-10.73-16.78a11.26 11.26 0 000 2c.39 3.4 2.37 5.78 6.07 7.27 3 1.19 5.46 1.33 7.46.44a8.4 8.4 0 003.95-4.19 3.26 3.26 0 01.26-.53c2.23-3.8 2-7.76-.72-12.12a16.2 16.2 0 00-.7-1.06c-.7 3.65-2 7.55-4.54 9.39a6.08 6.08 0 01-5.36.92c-2.53-.76-4.75-1.5-6.42-2.12z"></path>
        </>
      );
    // Earring Top Ring OK
    case 2:
      return (
        <>
          <path
            fill="#f4ef4d"
            d="M38.66 241.32s-3.38-16.8 9.54-21.09c0 0 9.72-5.34 15.51 6.06s-5.5 17.4-5.5 17.4a78.33 78.33 0 00-5.09-9c-3.42-5.35-14.46 6.63-14.46 6.63z"
          ></path>
          <path d="M58.21 246.94a3.18 3.18 0 01-1.05-.18 3.21 3.21 0 01-1.9-1.73 75.66 75.66 0 00-4.79-8.49c-1.62.07-6.07 3.34-9.43 7a3.23 3.23 0 01-5.56-1.54c-1.35-6.73-.68-20.5 11.45-24.71a14.71 14.71 0 0110.48-.92c3.84 1.19 6.93 4.05 9.19 8.51 5.72 11.26-2 19.14-6.87 21.73a3.26 3.26 0 01-1.52.33zm-7.56-16.88h.56a6.06 6.06 0 014.64 2.83c1.47 2.29 2.62 4.29 3.48 5.85a11 11 0 001.28-1.53c2-2.82 2-5.92.21-9.47-1.42-2.81-3.2-4.56-5.27-5.22a8.33 8.33 0 00-5.81.55 4.77 4.77 0 01-.52.22c-4.18 1.39-6.61 4.53-7.44 9.59-.07.43-.12.85-.16 1.26 2.75-2.14 6.06-4.08 9.03-4.08z"></path>
        </>
      );
    // Earring Single Round OK
    case 3:
      return (
        <>
          <circle cx="80.48" cy="321.21" r="8.78" fill="#f4ef4d"></circle>
          <path d="M80.48 333.24a12 12 0 1112-12 12 12 0 01-12 12zm0-17.57a5.55 5.55 0 105.52 5.54 5.55 5.55 0 00-5.52-5.54z"></path>
        </>
      );
    // Earring Double Ring OK
    case 4:
      return (
        <>
          <path
            fill="#f4ef4d"
            d="M77 326.76s13.59 10.42 6.69 22.15c0 0-3.8 10.42-15.67 5.65s-7.31-16.73-7.31-16.73a77.5 77.5 0 009.78 3.45c6.07 1.77 6.51-14.52 6.51-14.52z"
          ></path>
          <path d="M73.84 359.06a18.82 18.82 0 01-7-1.5c-11.72-4.72-11.1-15.72-9.13-20.88a3.24 3.24 0 014.38-1.8 74.29 74.29 0 009.19 3.25c1.18-1.12 2.37-6.52 2.51-11.46a3.24 3.24 0 015.21-2.49c5.46 4.19 14 15 7.64 26.15a14.66 14.66 0 01-7.28 7.58 13.2 13.2 0 01-5.52 1.15zm-10.73-16.78a11.26 11.26 0 000 2c.39 3.4 2.37 5.78 6.07 7.27 3 1.19 5.46 1.33 7.46.44a8.4 8.4 0 003.95-4.19 3.26 3.26 0 01.26-.53c2.23-3.8 2-7.76-.72-12.12a16.2 16.2 0 00-.7-1.06c-.7 3.65-2 7.55-4.54 9.39a6.08 6.08 0 01-5.36.92c-2.53-.76-4.75-1.5-6.42-2.12z"></path>
          <path
            fill="#f4ef4d"
            d="M57.2 316.55s4.37 16.56-8.26 21.61c0 0-9.39 5.92-15.85-5.12s4.45-17.7 4.45-17.7a78 78 0 005.62 8.71c3.73 5.12 14.04-7.5 14.04-7.5z"
          ></path>
          <path d="M43.13 343a13.57 13.57 0 01-3.15-.37c-3.9-.95-7.16-3.63-9.69-7.94-6.39-10.91.85-19.23 5.56-22.1a3.24 3.24 0 014.56 1.26 78.26 78.26 0 005.28 8.15c1.62-.17 5.87-3.71 9-7.53a3.24 3.24 0 015.65 1.22c1.75 6.64 1.9 20.43-10 25.35a15.15 15.15 0 01-7.21 1.96zm-6.41-22.66a12.22 12.22 0 00-1.19 1.61c-1.77 2.93-1.66 6 .35 9.46 1.6 2.72 3.47 4.37 5.58 4.9a8.45 8.45 0 005.77-.89 3.4 3.4 0 01.5-.26c4.09-1.63 6.33-4.91 6.85-10q.08-.64.09-1.26c-2.78 2.46-6.2 4.73-9.33 4.64a6 6 0 01-4.8-2.55 108.6 108.6 0 01-3.82-5.66z"></path>
        </>
      );
    // Earring
    case 5:
      return (
        <>
          <path
            fill="#f4ef4d"
            d="M86.3 336.86h-7.15v-6.12a5.58 5.58 0 00-11.16 0v6.12h-7.15a5.27 5.27 0 00-5.26 5.26v.65a5.27 5.27 0 005.26 5.23H68v14a5.58 5.58 0 1011.16 0v-14h7.14a5.27 5.27 0 005.26-5.25v-.65a5.27 5.27 0 00-5.26-5.24z"
          ></path>
          <path d="M73.57 370.81a8.84 8.84 0 01-8.83-8.81v-10.74h-3.9a8.5 8.5 0 01-8.5-8.49v-.65a8.51 8.51 0 018.5-8.5h3.9v-2.88a8.83 8.83 0 1117.65 0v2.88h3.91a8.51 8.51 0 018.5 8.5v.65a8.5 8.5 0 01-8.5 8.49h-3.91V362a8.84 8.84 0 01-8.82 8.81zM60.84 340.1a2 2 0 00-2 2v.65a2 2 0 002 2H68a3.24 3.24 0 013.23 3.25v14a2.34 2.34 0 004.68 0v-14a3.24 3.24 0 013.24-3.24h7.15a2 2 0 002-2v-.65a2 2 0 00-2-2h-7.15a3.24 3.24 0 01-3.24-3.24v-6.12a2.34 2.34 0 00-4.68 0v6.12A3.24 3.24 0 0168 340.1z"></path>
        </>
      );
    // Earring Triangle
    case 6:
      return (
        <>
          <path
            fill="#f4ef4d"
            d="M76.79 328.98l-10.6-2.03-10.61-2.02 7.06-8.18 7.05-8.17 3.55 10.2 3.55 10.2z"
          ></path>
          <path d="M76.79 332.22a3.23 3.23 0 01-.61-.06L55 328.11a3.24 3.24 0 01-1.84-5.3l14.11-16.35a3.24 3.24 0 015.51 1.05l7.1 20.4a3.24 3.24 0 01-3.06 4.31zM61.7 322.8l10.18 1.94-3.4-9.74z"></path>
        </>
      );
    // Earring Triple Ring
    case 7:
      return (
        <>
          <path
            fill="#f4ef4d"
            d="M77 326.76s13.59 10.42 6.69 22.15c0 0-3.8 10.42-15.67 5.65s-7.31-16.73-7.31-16.73a77.5 77.5 0 009.78 3.45c6.07 1.77 6.51-14.52 6.51-14.52z"
          ></path>
          <path d="M73.84 359.06a18.82 18.82 0 01-7-1.5c-11.72-4.72-11.1-15.72-9.13-20.88a3.24 3.24 0 014.38-1.8 74.29 74.29 0 009.19 3.25c1.18-1.12 2.37-6.52 2.51-11.46a3.24 3.24 0 015.21-2.49c5.46 4.19 14 15 7.64 26.15a14.66 14.66 0 01-7.28 7.58 13.2 13.2 0 01-5.52 1.15zm-10.73-16.78a11.26 11.26 0 000 2c.39 3.4 2.37 5.78 6.07 7.27 3 1.19 5.46 1.33 7.46.44a8.4 8.4 0 003.95-4.19 3.26 3.26 0 01.26-.53c2.23-3.8 2-7.76-.72-12.12a16.2 16.2 0 00-.7-1.06c-.7 3.65-2 7.55-4.54 9.39a6.08 6.08 0 01-5.36.92c-2.53-.76-4.75-1.5-6.42-2.12z"></path>
          <path
            fill="#f4ef4d"
            d="M57.2 316.55s4.37 16.56-8.26 21.61c0 0-9.39 5.92-15.85-5.12s4.45-17.7 4.45-17.7a78 78 0 005.62 8.71c3.73 5.12 14.04-7.5 14.04-7.5z"
          ></path>
          <path d="M43.13 343a13.57 13.57 0 01-3.15-.37c-3.9-.95-7.16-3.63-9.69-7.94-6.39-10.91.85-19.23 5.56-22.1a3.24 3.24 0 014.56 1.26 78.26 78.26 0 005.28 8.15c1.62-.17 5.87-3.71 9-7.53a3.24 3.24 0 015.65 1.22c1.75 6.64 1.9 20.43-10 25.35a15.15 15.15 0 01-7.21 1.96zm-6.41-22.66a12.22 12.22 0 00-1.19 1.61c-1.77 2.93-1.66 6 .35 9.46 1.6 2.72 3.47 4.37 5.58 4.9a8.45 8.45 0 005.77-.89 3.4 3.4 0 01.5-.26c4.09-1.63 6.33-4.91 6.85-10q.08-.64.09-1.26c-2.78 2.46-6.2 4.73-9.33 4.64a6 6 0 01-4.8-2.55 108.6 108.6 0 01-3.82-5.66z"></path>
          <path
            fill="#f4ef4d"
            d="M46.44 291.34s-1.75 17-15.35 17.32c0 0-10.87 2.23-13-10.38s10.41-15 10.41-15a78.94 78.94 0 002.18 10.13c1.66 6.11 15.76-2.07 15.76-2.07z"
          ></path>
          <path d="M29.19 312.06a14.32 14.32 0 01-8.06-2.39c-3.31-2.27-5.42-5.92-6.27-10.85-2.13-12.45 7.57-17.69 13-18.72a3.22 3.22 0 013.82 2.78 78.3 78.3 0 002.06 9.53c1.58.41 6.79-1.4 11.08-3.87a3.23 3.23 0 014.84 3.13c-.7 6.84-5.41 19.79-18.25 20.22a14.08 14.08 0 01-2.22.17zm-3.25-24.4a12.27 12.27 0 00-1.68 1.09c-2.69 2.12-3.68 5.05-3 9 .54 3.13 1.73 5.35 3.54 6.58a8.45 8.45 0 005.65 1.17 3.68 3.68 0 01.58-.07c5.81-.11 8.9-4.29 10.51-8.13-3.48 1.33-7.51 2.26-10.41 1.08a6.07 6.07 0 01-3.59-4.08 95.6 95.6 0 01-1.6-6.64z"></path>
        </>
      );
    // Earring
    case 8:
      return (
        <>
          <circle cx="80.48" cy="321.21" r="8.78" fill="#f4ef4d"></circle>
          <path d="M80.48 333.24a12 12 0 1112-12 12 12 0 01-12 12zm0-17.57a5.55 5.55 0 105.52 5.54 5.55 5.55 0 00-5.52-5.54z"></path>
          <circle cx="52.74" cy="308.69" r="8.78" fill="#f4ef4d"></circle>
          <path d="M52.74 320.71a12 12 0 1112-12 12 12 0 01-12 12zm0-17.56a5.54 5.54 0 105.54 5.54 5.55 5.55 0 00-5.54-5.54z"></path>
          <circle cx="44.49" cy="278.78" r="8.78" fill="#f4ef4d"></circle>
          <path d="M44.49 290.8a12 12 0 1112-12 12 12 0 01-12 12zm0-17.56a5.54 5.54 0 105.51 5.54 5.54 5.54 0 00-5.51-5.54z"></path>
        </>
      );
    // Earring Triple Round
    case 9:
      return (
        <>
          <circle cx="80.48" cy="321.21" r="8.78" fill="#f4ef4d"></circle>
          <path d="M80.48 333.24a12 12 0 1112-12 12 12 0 01-12 12zm0-17.57a5.55 5.55 0 105.52 5.54 5.55 5.55 0 00-5.52-5.54z"></path>
          <circle cx="52.74" cy="308.69" r="8.78" fill="#f4ef4d"></circle>
          <path d="M52.74 320.71a12 12 0 1112-12 12 12 0 01-12 12zm0-17.56a5.54 5.54 0 105.54 5.54 5.55 5.55 0 00-5.54-5.54z"></path>
        </>
      );
    // Earring Hoop
    case 10:
      return (
        <>
          <path
            fill="#f4ef4d"
            d="M67.59 310.41c-5 3.89.25 11.78 1.88 14 4.63 4.51 7.66 12.08 7.66 20.67 0 13.83-7.87 25-17.58 25S42 358.9 42 345.07a32.63 32.63 0 013.21-14.41 103.2 103.2 0 01-5.59-7.16 41.28 41.28 0 00-5.86 21.57c0 19.53 12.64 35.36 28.23 35.36s28.22-15.83 28.22-35.36c-.03-17.07-9.73-31.39-22.62-34.66z"
          ></path>
          <path d="M62 383.67c-17.35 0-31.47-17.32-31.47-38.6a44.31 44.31 0 016.34-23.27 3.24 3.24 0 015.39-.2 99.11 99.11 0 005.37 6.9 3.23 3.23 0 01.49 3.6 29.33 29.33 0 00-2.87 13c0 11.81 6.57 21.79 14.34 21.79s14.34-10 14.34-21.79c0-7.41-2.5-14.27-6.68-18.35a4.23 4.23 0 01-.34-.4c-5.73-7.74-6.21-14.64-1.27-18.47a3.23 3.23 0 012.78-.58c14.51 3.68 25 19.58 25 37.8 0 21.25-14.11 38.57-31.42 38.57zm-21.87-54.1a38.87 38.87 0 00-3.13 15.5c0 17.71 11.21 32.12 25 32.12s25-14.41 25-32.12c0-14.41-7.51-27-18.13-30.89-.65 2.6 2.42 7.1 3.13 8.1 5.29 5.29 8.44 13.78 8.44 22.79 0 15.59-9.35 28.28-20.83 28.28s-20.82-12.69-20.82-28.28a36.53 36.53 0 012.65-13.88q-.66-.73-1.35-1.62z"></path>
        </>
      );
    // Hearing Aid
    case 11:
      return (
        <>
          <path
            fill="#999"
            d="M85.78 284.91L84 223.12s-1.1-17.41-15.29-15.3-27.79 14.34-30.58 34.33c0 0 16.76-14.47 26.5-15.37 0 0 7.62-1.08 9.4 8.16S77.8 268 77.8 268s-15.74 4.66-14.19 15.85 12.2 10.75 12.2 10.75 9.66-.34 9.97-9.69z"
          ></path>
          <path d="M75.42 297.86c-4.81 0-13.53-2.77-15-13.55-.82-5.88 1.91-11.15 7.89-15.25a34 34 0 016.06-3.24c-.56-6.3-2.12-23-3.51-30.27-1.08-5.63-4.72-5.67-5.81-5.55h-.11c-7.12.65-20.22 10.75-24.67 14.59a3.24 3.24 0 01-5.33-2.9c2.74-19.63 16.12-34.54 33.31-37.09a14.69 14.69 0 0111.88 2.91c6.4 5.17 7.09 15 7.12 15.39a.37.37 0 000 .11l1.75 61.8v.2c-.32 9.8-8.71 12.68-13.1 12.84zm-9.93-74.38c3.93 0 10.06 2.19 11.72 10.85 1.79 9.3 3.73 32.43 3.82 33.41a3.26 3.26 0 01-2.31 3.38c-.13 0-13 4-11.9 12.3.47 3.43 2 5.71 4.62 7a10.68 10.68 0 004.26 1c1.08-.06 6.59-.63 6.84-6.48l-1.78-61.61c-.05-.57-.71-7.5-4.74-10.74a8.42 8.42 0 00-6.84-1.59c-13.05 1.93-21.64 11.8-25.63 22.73 6-4.37 14.37-9.58 20.71-10.2a9.3 9.3 0 011.23-.05z"></path>
        </>
      );
    // Default

    default:
      return <></>;
  }
}
