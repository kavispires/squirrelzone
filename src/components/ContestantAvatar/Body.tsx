import { FUR_COLOR } from "../../utils/appearance-constants";
import { Appearance, HSLColor } from "../../utils/types";

type BodyProps = {
  appearance: Appearance;
  color: HSLColor;
};

export function Body({ appearance, color }: BodyProps) {
  const furColor = FUR_COLOR[appearance.fur.color].hex;

  return (
    <>
      <path
        fill={`hsl(${color.hue},${color.saturation}%,${color.lightness}%)`}
        d="M343.61 433.85c-5.32-5.48-13.29-8.11-20.88-8.44h-1.64c-.75 0-1.49 0-2.22.07a34.61 34.61 0 0 0-5.44.76l-2.56-1.24-1.91-.83-1.42-.61v1.17c0 1.19.05 2.37 0 3.57v.62a66.42 66.42 0 0 1-3 19 54.22 54.22 0 0 1-2.21 5.84 49.45 49.45 0 0 1-2.6 5.07 43.8 43.8 0 0 1-2.63 3.91c-.61.8-1.23 1.6-1.9 2.36a33.37 33.37 0 0 1-17.11 10.57A33.71 33.71 0 0 1 258 474a48.55 48.55 0 0 1-16.54-11.22 67 67 0 0 1-11.52-16 80.64 80.64 0 0 1-6.73-18.41 83 83 0 0 1-1.88-13.72c-2.2.11-4.4.24-6.57.41-1.35.11-2.68.24-4 .4a29.21 29.21 0 0 0-3.63.6c-5.39 1.44-10.81 2.61-16 4s-10.21 3-14.18 5.75a19.88 19.88 0 0 0-3.42 3l-1.33.12a2.84 2.84 0 0 1-.07 1 2.68 2.68 0 0 1-.72 1.22l-.44.42a5.66 5.66 0 0 1-1.26.88c-.42.21-.85.37-1.28.57s-.89.3-1.33.45c-.2.06-.4.15-.6.23l-.72.32c-.43.2-.88.36-1.31.59l-1.29.7a10.59 10.59 0 0 0-1 .55l-1.55 1a61.88 61.88 0 0 0-9.37 7.79A136.49 136.49 0 0 0 135.38 464q-5.2 7.63-9.82 15.69c1.29.52 2.56 1 3.85 1.59a255.2 255.2 0 0 1 8.1 3.59q8 3.75 15.75 8.06 4.31 2.46 8.49 5.14l3 1.93h25.46c1.3-2 2.53-4.11 3.65-6.25a50.62 50.62 0 0 0 5.12-14.05 1.19 1.19 0 0 1 1.26-.94h.14a1.18 1.18 0 0 1 .95 1.18 43 43 0 0 1-3.41 15.7 61.52 61.52 0 0 1-1.94 4.39h158a285.5 285.5 0 0 0-3.49-20.32 1.39 1.39 0 0 1 1.08-1.65 1.4 1.4 0 0 1 1.64 1q1.92 7.89 3.35 15.9l1-1a63.72 63.72 0 0 1 4-3.65 53.58 53.58 0 0 1 6.33-4.62c-7.71-21.28-17.16-44.51-24.28-51.84Z"
      />
      <path
        fill={furColor}
        d="m370.61 493.56 2.21 6.44h-13.53c.67-.49 1.36-1 2-1.42a62.17 62.17 0 0 1 4.17-2.56 46.67 46.67 0 0 1 5.15-2.46Zm-245-1.92a182.1 182.1 0 0 0-5.7-1.65q-2.57 5-4.94 10h33.62q-7.37-3.12-14.92-5.74c-2.67-.92-5.33-1.8-8.02-2.61Zm177.79-68.42c0-.39 0-.77-.06-1.16a68.15 68.15 0 0 0-.81-6.95c-4.49-1.22-8.95-2.2-13.48-3a267.55 267.55 0 0 0-33.19-3.75q-13-.7-26-.47a58.04 58.04 0 0 0-.01 6.49 74.64 74.64 0 0 0 7.32 28.73 60.4 60.4 0 0 0 9.71 14.43 41.59 41.59 0 0 0 13.69 10.06 26.19 26.19 0 0 0 30.6-6.26 38.8 38.8 0 0 0 4.93-6.49 45.89 45.89 0 0 0 2.59-4.91 44.46 44.46 0 0 0 2.54-7.06 60.91 60.91 0 0 0 2-11.27q.12-1.4.18-2.79v-1.73c.08-1.32.05-2.6-.01-3.87Z"
      />
      <path d="M379.66 500h-6.84l-2.21-6.44a46.67 46.67 0 0 0-5.1 2.46 62.17 62.17 0 0 0-6.17 3.98h-5.44a285.5 285.5 0 0 0-3.49-20.32 1.39 1.39 0 0 1 1.08-1.65 1.4 1.4 0 0 1 1.64 1q1.92 7.89 3.35 15.9l1-1a63.72 63.72 0 0 1 4-3.65 53.58 53.58 0 0 1 6.33-4.62c-7.63-21.24-17.08-44.47-24.2-51.8-5.32-5.48-13.29-8.11-20.88-8.44h-1.64c-.75 0-1.49 0-2.22.07a34.61 34.61 0 0 0-5.44.76l-2.56-1.25-1.91-.83-1.42-.61v1.17c0 1.19.05 2.37 0 3.57v.62a66.42 66.42 0 0 1-3 19 54.22 54.22 0 0 1-2.21 5.84 49.45 49.45 0 0 1-2.6 5.07 43.8 43.8 0 0 1-2.63 3.91c-.61.8-1.23 1.6-1.9 2.36a33.37 33.37 0 0 1-17.11 10.57A33.71 33.71 0 0 1 258 474a48.55 48.55 0 0 1-16.54-11.22 67 67 0 0 1-11.52-16 80.64 80.64 0 0 1-6.73-18.41 83 83 0 0 1-1.88-13.72c-2.2.11-4.4.24-6.57.41-1.35.11-2.68.24-4 .4a29.21 29.21 0 0 0-3.63.6c-5.39 1.44-10.81 2.61-16 4s-10.21 3-14.18 5.75a19.88 19.88 0 0 0-3.42 3 8 8 0 0 1-4.28 3.85l-.82.37c-.44.17-.89.3-1.33.45-.2.06-.4.15-.6.23l-.72.32c-.43.2-.88.36-1.31.59l-1.29.7a10.59 10.59 0 0 0-1 .55l-1.55 1a61.88 61.88 0 0 0-9.37 7.79A136.49 136.49 0 0 0 135.38 464q-5.2 7.63-9.82 15.69c1.29.52 2.56 1 3.85 1.59a255.2 255.2 0 0 1 8.1 3.59q8 3.75 15.75 8.06 4.31 2.46 8.49 5.14l3 1.93h-16.12q-7.37-3.12-14.92-5.74a204.29 204.29 0 0 0-13.76-4.27q-2.57 5-4.94 10h-7.78q4.11-9 8.86-17.64a248 248 0 0 1 13.65-22.26 143 143 0 0 1 16.74-20.35 67.65 67.65 0 0 1 10.45-8.58c1-.61 1.92-1.26 3-1.79l1.55-.82c.52-.27 1.08-.49 1.62-.73a18.31 18.31 0 0 1 3.8-1.3 26.81 26.81 0 0 1 6.31-6.09 37.17 37.17 0 0 1 8-4.12 79.73 79.73 0 0 1 8.2-2.57c5.44-1.43 10.79-2.59 16-4a34.93 34.93 0 0 1 4.5-.78c1.43-.17 2.83-.31 4.23-.42 2.36-.19 4.71-.33 7.06-.44l1.31-.07c1 0 2-.05 3-.08 1.44-.05 2.88-.1 4.33-.13a58.04 58.04 0 0 0-.01 6.49 74.64 74.64 0 0 0 7.32 28.73 60.4 60.4 0 0 0 9.71 14.43 41.59 41.59 0 0 0 13.69 10.06 26.19 26.19 0 0 0 30.6-6.26 38.8 38.8 0 0 0 4.93-6.49 45.89 45.89 0 0 0 2.59-4.91 44.46 44.46 0 0 0 2.54-7.06 60.91 60.91 0 0 0 2-11.27q.12-1.4.18-2.79v-1.73c0-1.28 0-2.56-.08-3.83 0-.39 0-.77-.06-1.16a68.15 68.15 0 0 0-.81-6.95l2.19.61.78.22 1.36.41.75.22 2.05.83c1.31.54 2.6 1.09 3.89 1.68l.75.35c11.29-1.84 25.24.92 34 9.9 6.45 6.64 15 24.59 25.37 53.35a612.53 612.53 0 0 1 6.08 17.35Zm-179.32-21.27h-.14a1.19 1.19 0 0 0-1.26.94 50.62 50.62 0 0 1-5.12 14.05 84.86 84.86 0 0 1-3.65 6.25h5.77c.7-1.44 1.35-2.89 1.94-4.39a43 43 0 0 0 3.41-15.7 1.18 1.18 0 0 0-.95-1.15Z" />
    </>
  );
}
