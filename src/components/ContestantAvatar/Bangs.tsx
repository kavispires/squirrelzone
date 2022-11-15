import { HAIR_COLOR } from "../../utils/appearance-constants";
import { Appearance } from "../../utils/types";

type BangsProps = {
  appearance: Appearance;
};

export function Bangs({ appearance }: BangsProps) {
  const hairColor = HAIR_COLOR[appearance.hair.color].hex;

  return (
    <>
      <path
        fill={hairColor}
        d="M437.93 230.67c-.17 4.47-.76 9.18-3.46 12.74-.5-12.82-1.32-26.58-9.24-36.67a95.71 95.71 0 0 1-1.32 28.56c.94-13.26-8.43-24.76-17.24-34.72a19.68 19.68 0 0 1 1.6 13.73c-3.48-21.33-23.55-30.37-42.31-35a64.26 64.26 0 0 0-15.07-2.31 56.59 56.59 0 0 0-20 3.42c-2.29.89-4.56 2-7 2.13 3.35-7.53 5.51-10.17 11.38-15.55-1.88 0-10.75-1-11.92.27a63.4 63.4 0 0 0 9.57-12.93 49.79 49.79 0 0 0-32.3 9.76l-1.53-15.45a39.58 39.58 0 0 0-9.78 20.51 89.88 89.88 0 0 0-23.93-19.32 48.74 48.74 0 0 1 4.6 14.82 25.49 25.49 0 0 0-17.58-11.45 50.86 50.86 0 0 1 17.68 21.38c-10-11.43-27.19-6-39.86-3.23a11.22 11.22 0 0 1 11.59-4 77.55 77.55 0 0 0-51.63 14.35c.9-1.72 0-4 1.44-5.39a70.91 70.91 0 0 1 10-8 114.28 114.28 0 0 0-46.08 30 26.15 26.15 0 0 1 4.75-11.17 89.12 89.12 0 0 0-26.73 27c-3.59 5.9-4.84 14.24-5.1 21-.15 4.09-.59 16.34 2.82 19.3A35 35 0 0 1 120.67 238c-2.14 16.37 3.08 31.09 12 44.53.28.43.56 1 .22 1.41a1.09 1.09 0 0 1-.86.27c-3.8 0-7-2.77-9.42-5.7s-4.54-6.28-7.8-8.22a100.23 100.23 0 0 0 23.07 44.8c-4.79-2.06-9.78-2.77-14.41-5.42A43.75 43.75 0 0 1 110 297.22a55 55 0 0 0 3.56 15.6c-1.39-3.57-6.08-7.33-8-11-2.08-4-4.17-8-6.15-12.06a111.84 111.84 0 0 1-9.57-29c-3.72-20.07-1.93-33-1.93-33l-9.16-25.86s13.93-100.25 58.12-138S299.58 26.74 336.26 51s86.75 54.63 90.52 78.88 12 78.83 11.15 100.79Z"
      />
      <path d="M137.86 318.33a3.2 3.2 0 0 1-1.28-.27c-1.79-.76-3.63-1.33-5.58-1.94a43.88 43.88 0 0 1-9.16-3.64 42.42 42.42 0 0 1-6.59-4.69c.39 1.3.83 2.58 1.32 3.85a3.24 3.24 0 1 1-6 2.35 21.5 21.5 0 0 0-3.59-4.93 32.33 32.33 0 0 1-4.28-5.78 548.45 548.45 0 0 1-6.19-12.13 117.14 117.14 0 0 1-4.58-91.84 3.24 3.24 0 1 1 6.07 2.28 110.62 110.62 0 0 0 4.34 86.7c1.47 3 3 6 4.46 8.81a3.24 3.24 0 0 1 5.88-1.77 40 40 0 0 0 12.43 11.52 24 24 0 0 0 3.29 1.55 103.17 103.17 0 0 1-16.77-37.4 3.24 3.24 0 0 1 4.82-3.49c3.08 1.83 5.15 4.49 7.15 7.06l1.49 1.87.41.49c-7.14-13.2-9.77-26.14-8-39.35a3.24 3.24 0 0 1 6.33-.49 29 29 0 0 0 1.3 3.59c0-1.73 0-3.6.09-5.63.25-6.53 1.42-15.76 5.58-22.59a92.48 92.48 0 0 1 27.74-28.06 3.24 3.24 0 0 1 4.12.52 3.17 3.17 0 0 1 .78 1.42 117.27 117.27 0 0 1 37.13-21.06 3.24 3.24 0 0 1 3.77 4.84 81.69 81.69 0 0 1 33.14-6.26 13.72 13.72 0 0 1 5.18.36 3.15 3.15 0 0 1 1.55.93c5.49-.84 11.22-1.13 16.51.19a47.59 47.59 0 0 0-10.14-9.45 3.24 3.24 0 0 1 2.31-5.88 28.4 28.4 0 0 1 10.86 4c-.39-.93-.8-1.85-1.25-2.75a3.24 3.24 0 0 1 4.47-4.28 92.72 92.72 0 0 1 20.58 15.52 43.13 43.13 0 0 1 9.17-16.05 3.24 3.24 0 0 1 5.62 1.86l1 10.09a53.53 53.53 0 0 1 29.78-7.32 3.25 3.25 0 0 1 2.65 4.82 66.09 66.09 0 0 1-5 7.6l2.1.12c1 .06 2 .13 2.31.12a3.24 3.24 0 0 1 2.26 5.63 40.44 40.44 0 0 0-7.12 7.78 59.33 59.33 0 0 1 20.6-3.41 67.83 67.83 0 0 1 15.83 2.36c18.4 4.58 31.05 11.73 38.22 21.7a3.24 3.24 0 0 1 4.13.6c5 5.68 10 11.6 13.41 18a91.32 91.32 0 0 0-.5-9.34 3.24 3.24 0 0 1 5.78-2.33 39.62 39.62 0 0 1 6.4 12.39 92.58 92.58 0 0 0-18.6-45.95 3.24 3.24 0 0 1 5.11-4 98.9 98.9 0 0 1 20.48 63.6c-.19 4.76-.82 10.22-4.12 14.57a3.24 3.24 0 0 1-5.82-1.84c-.3-7.82-.76-15.1-2.38-21.58a98.39 98.39 0 0 1-1.76 14 3.24 3.24 0 0 1-6.41-.85c.58-8.17-3.34-15.81-8.72-23a22.38 22.38 0 0 1-.54 3 3.25 3.25 0 0 1-6.35-.27c-2.57-15.77-15.62-26.37-39.89-32.4a61.53 61.53 0 0 0-14.31-2.18 52.82 52.82 0 0 0-18.88 3.24l-1.15.46a22 22 0 0 1-6.81 1.88 3.25 3.25 0 0 1-3.17-4.56c2.3-5.17 4.15-8.27 6.83-11.33a15.36 15.36 0 0 0-2.7.09 3.24 3.24 0 0 1-4.06-5 59.38 59.38 0 0 0 6-7.39 46.83 46.83 0 0 0-24.49 9.07 3.24 3.24 0 0 1-5.16-2.28l-.69-6.93a36.49 36.49 0 0 0-4.2 12.16 3.24 3.24 0 0 1-5.64 1.65 86.29 86.29 0 0 0-15-13.57 52.29 52.29 0 0 1 1.34 6.47 3.24 3.24 0 0 1-2.09 3.5 2.82 2.82 0 0 1-.79.18 53.78 53.78 0 0 1 2.78 5.44 3.24 3.24 0 0 1-5.41 3.44c-7.74-8.83-21-5.79-32.74-3.1q-2.06.48-4 .9a3.25 3.25 0 0 1-3.88-3.72 74.53 74.53 0 0 0-34.95 13.51 3.24 3.24 0 0 1-4.77-4.13 5.34 5.34 0 0 0 .14-1.18c0-.33.05-.7.09-1.09a110.82 110.82 0 0 0-29.64 22.58 3.24 3.24 0 0 1-5.57-2.74l.12-.69a82.68 82.68 0 0 0-16.14 18.75c-2.68 4.4-4.32 11.31-4.63 19.47-.54 14.31 1.47 16.52 1.7 16.72a3.24 3.24 0 0 1-4.17 5h-.06a37.73 37.73 0 0 1-5.35-5.73c1.1 9.74 4.94 19.51 11.59 29.56a4.23 4.23 0 0 1 0 5.33 4.15 4.15 0 0 1-3.29 1.37c-3.53 0-6.95-1.67-10.21-5a96.71 96.71 0 0 0 18.47 30.44 3.24 3.24 0 0 1-2.41 5.41Z" />
    </>
  );
}
