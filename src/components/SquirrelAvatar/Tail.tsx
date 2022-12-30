import { DNA_DISTRIBUTION } from 'utils/squirrel-appearance';
import { Appearance } from 'types';

type TailProps = {
  appearance: Appearance;
};

export function Tail({ appearance }: TailProps) {
  const furColor = DNA_DISTRIBUTION['fur.color'].options[appearance.fur.color].hex;
  const kind = appearance.fur.type;

  switch (kind) {
    // Simple
    case 0:
      return (
        <>
          <path
            fill={furColor}
            d="M273.68 243.44c-30.34-64.17-83.68-110.27-150.1-129.79-35.24-10.36-72.22-12.75-109.9-7.12-4.58.68-9.14 1.47-13.68 2.4v290.56A306.71 306.71 0 0 0 55.48 376a3.37 3.37 0 0 1 1.19-.41 23.29 23.29 0 0 1 2.81-.14c5.86 0 20.2 1.51 37.2 14.19 26.5 19.77 47.31 56.89 62 110.4h173.07Q333 486.32 333 472c.17-68.07-19.8-145-59.32-228.56Z"
          />
          <path d="M339.5 472c0 9.55-.45 18.87-1.24 28h-6.51q1.25-13.68 1.25-28c.16-68.07-19.81-145-59.33-228.56-30.33-64.17-83.67-110.27-150.09-129.79-35.24-10.36-72.22-12.75-109.9-7.12-4.58.68-9.14 1.47-13.68 2.4v-6.6a291.6 291.6 0 0 1 12.72-2.22c38.63-5.76 76.53-3.3 112.68 7.32 68.26 20 123 67.37 154.14 133.23C319.48 325.14 339.65 403 339.5 472ZM96.68 389.6c-17-12.68-31.34-14.19-37.2-14.19a23.29 23.29 0 0 0-2.81.14 3.37 3.37 0 0 0-1.19.41A306.71 306.71 0 0 1 0 399.49v6.78a318.27 318.27 0 0 0 58.08-24.33c3-.17 17.55-.18 35.27 13.27 17.33 13.15 41 41.94 58.56 104.79h6.73c-14.64-53.51-35.46-90.63-61.96-110.4Z" />
        </>
      );
    // Hairy
    case 1:
      return (
        <>
          <path
            fill={furColor}
            d="M314.42 349.75c-11.63-40.52-25-75.21-40.95-106.08a399.56 399.56 0 0 0-30.48-50C210.25 148.22 163.91 109.31 105.26 78q-5.33-2.84-10.79-5.59l4 4.49a3.25 3.25 0 0 1-3 5.37C64.42 77.07 32.21 71.66.51 76.09l-.51.07v97.05a213.64 213.64 0 0 1 18.17-12.79c-1.19.21-2.38.45-3.55.72a4.29 4.29 0 0 1-3.62-7.58l.21-.16A182.35 182.35 0 0 1 47.85 133 96.83 96.83 0 0 1 68 126.74a47.77 47.77 0 0 1 10.66-.74 34.93 34.93 0 0 1 10.55 2.13 1.5 1.5 0 0 1-.95 2.84c-6.27-1.88-13-1.49-19.36.09a92.2 92.2 0 0 0-18.61 7.28 174.51 174.51 0 0 0-23.4 14.05c1.74.14 3.48.34 5.19.61a3.26 3.26 0 0 1 1.33 6A204.65 204.65 0 0 0 0 184.21v10.86a3.09 3.09 0 0 1 .59 1.55 3.34 3.34 0 0 1-.25 1.58L0 199v59.08c.28.44.54.89.83 1.32A32.39 32.39 0 0 0 17.19 272a1.41 1.41 0 0 1-.86 2.69A35.17 35.17 0 0 1 0 264.26v72.59a78.16 78.16 0 0 0 43.74 2.73 1.66 1.66 0 0 1 2 1.24 1.68 1.68 0 0 1-1.21 2 81.5 81.5 0 0 1-38.13.28q-3.22-.75-6.39-1.75v74.47l1-.41a3.23 3.23 0 0 1 3.84 1.15 3.22 3.22 0 0 1 .45 2.81l.85-.63C12 414.3 17.1 408.8 22.47 403c8.3-9 16.89-18.29 28.66-23.31a34.46 34.46 0 0 1 13.65-2.81c6.69 0 13.69 1.88 20.94 5.64 11.4 5.9 21 15.22 27 22 24.55 27.7 37.31 62.91 46 95.49h173.03c4.08-45.42-1.75-95.88-17.33-150.26Z"
          />
          <path d="M338.25 500h-6.5c4.08-45.41-1.73-95.87-17.33-150.25-11.63-40.52-25-75.21-40.95-106.08a399.56 399.56 0 0 0-30.48-50C210.25 148.22 163.91 109.31 105.26 78q-5.33-2.84-10.79-5.59l4 4.49a3.25 3.25 0 0 1-3 5.37C64.42 77.07 32.21 71.66.51 76.09l-.51.07v-6.54c29.41-4 58.84 0 87.49 4.75l-8.9-9.86a3.24 3.24 0 0 1 3.78-5.11 517.47 517.47 0 0 1 25.94 12.91c59.54 31.75 106.62 71.31 139.94 117.57a406.36 406.36 0 0 1 31 50.81C295.36 272 308.91 307 320.65 348c15.76 54.89 21.66 105.94 17.6 152ZM85.72 382.5c-7.25-3.76-14.25-5.64-20.94-5.64a34.46 34.46 0 0 0-13.65 2.81C39.36 384.69 30.77 394 22.47 403 17.1 408.8 12 414.3 6.15 418.73l-.85.63a3.22 3.22 0 0 0-.45-2.81A3.23 3.23 0 0 0 1 415.4l-1 .41V431q4.81-3.15 10.05-7.1c6.34-4.78 11.85-10.75 17.18-16.52 8.2-8.88 16-17.27 26.44-21.75 7.34-3.13 27.3-7.14 54.17 23.18C131.11 435.07 143.5 468.65 152 500h6.71c-8.69-32.58-21.45-67.79-46-95.49-6.03-6.79-15.59-16.11-26.99-22.01Zm-41.2-39.69a1.68 1.68 0 0 0 1.21-2 1.66 1.66 0 0 0-2-1.24A78.16 78.16 0 0 1 0 336.85v4.49q3.17 1 6.39 1.75a81.5 81.5 0 0 0 38.13-.28ZM33.4 159a3.26 3.26 0 0 0-1.33-6 68.67 68.67 0 0 0-5.19-.61 174.51 174.51 0 0 1 23.4-14.05 92.2 92.2 0 0 1 18.61-7.28c6.38-1.58 13.09-2 19.36-.09a1.5 1.5 0 0 0 .95-2.84A34.93 34.93 0 0 0 78.66 126a47.77 47.77 0 0 0-10.69.72A96.83 96.83 0 0 0 47.85 133a182.35 182.35 0 0 0-36.6 20.37l-.21.16a4.29 4.29 0 0 0 3.58 7.58c1.17-.27 2.36-.51 3.55-.72A213.64 213.64 0 0 0 0 173.21v11a204.65 204.65 0 0 1 33.37-25.16ZM.59 196.62a3.09 3.09 0 0 0-.59-1.55V199l.34-.8a3.34 3.34 0 0 0 .25-1.58Zm5.42 73a35.7 35.7 0 0 0 10.31 5 1.41 1.41 0 0 0 .86-2.69A32.39 32.39 0 0 1 .83 259.4c-.29-.43-.55-.88-.83-1.32v6.18a35.76 35.76 0 0 0 6 5.39Z" />
        </>
      );
    // Curly
    case 2:
      return (
        <>
          <path
            fill={furColor}
            d="M331.75 500H158.63c-11.59-42.08-32.07-91.49-67-113.87q2.07-3.86 3.9-7.83a133.61 133.61 0 0 0 12.37-51.12 109.58 109.58 0 0 0-2.29-26.57 93.44 93.44 0 0 0-9.26-25.24 85.79 85.79 0 0 0-16.49-21.45 94.18 94.18 0 0 0-22.12-15.55c-2-1-4.07-1.9-6.11-2.85l-1.54-.7c-.52-.23-1.08-.42-1.62-.64l-1.64-.62c-.54-.19-1.1-.36-1.65-.54a79.59 79.59 0 0 0-13.4-3.02 98.29 98.29 0 0 0-27.14 0c-1.55.21-3.1.48-4.64.77V108.29a300.48 300.48 0 0 1 50.13-4.69 238.88 238.88 0 0 1 59.71 6.79c50.44 12.46 97 41.75 131.25 82.48a279.24 279.24 0 0 1 33.16 50.41c19.82 38 32.84 80.44 40.92 109.1 15.04 53.38 20.59 102.95 16.58 147.62ZM60.84 416.44a124.92 124.92 0 0 0 23.49-30.38q2.81-5.12 5.13-10.46a126.63 126.63 0 0 0 10.72-48.6 102.25 102.25 0 0 0-2.64-24.58 85 85 0 0 0-8.93-22.74 79.38 79.38 0 0 0-15.15-18.91 84.74 84.74 0 0 0-20.13-13.62c-1.83-.9-3.73-1.66-5.6-2.5l-1.4-.61c-.47-.2-.92-.34-1.38-.52l-1.38-.5-1.42-.43a69.48 69.48 0 0 0-11.72-2.45 88.06 88.06 0 0 0-24.21.46c-2.1.31-4.17.73-6.22 1.22v70.75a31.6 31.6 0 0 0 9.8-7 1.75 1.75 0 0 1 2.69 2.23 33.15 33.15 0 0 1-9.94 9.41 21.5 21.5 0 0 1-2.55 1.4v123.67c22.67-2.38 44.29-10.3 60.83-25.82Z"
          />
          <path d="M338.26 500h-6.51c4-44.67-1.54-94.24-16.58-147.62-8.08-28.66-21.1-71.14-40.92-109.1a279.24 279.24 0 0 0-33.16-50.41c-34.2-40.73-80.81-70-131.25-82.48a238.88 238.88 0 0 0-59.71-6.79A300.48 300.48 0 0 0 0 108.29v-6.58a305.73 305.73 0 0 1 50.06-4.59 245.22 245.22 0 0 1 61.33 7c51.76 12.78 99.59 42.83 134.66 84.6A285.69 285.69 0 0 1 280 240.28c20.09 38.49 33.25 81.41 41.41 110.34 15.19 53.92 20.83 104.07 16.85 149.38ZM91.63 386.13q2.07-3.86 3.9-7.83a133.61 133.61 0 0 0 12.37-51.12 109.58 109.58 0 0 0-2.29-26.57 93.44 93.44 0 0 0-9.26-25.24 85.79 85.79 0 0 0-16.49-21.45 94.18 94.18 0 0 0-22.12-15.55c-2-1-4.07-1.9-6.11-2.85l-1.54-.7c-.52-.23-1.08-.42-1.62-.64l-1.64-.62c-.54-.19-1.1-.36-1.65-.54a79.59 79.59 0 0 0-13.4-3.02 98.29 98.29 0 0 0-27.14 0c-1.55.21-3.1.48-4.64.77v11.06c2.05-.49 4.12-.91 6.22-1.22a88.06 88.06 0 0 1 24.21-.46 69.48 69.48 0 0 1 11.72 2.45l1.42.43 1.38.5c.46.18.91.32 1.38.52l1.4.61c1.87.84 3.77 1.6 5.6 2.5a84.74 84.74 0 0 1 20.13 13.62 79.38 79.38 0 0 1 15.15 18.91 85 85 0 0 1 8.93 22.74 102.25 102.25 0 0 1 2.64 24.57 126.63 126.63 0 0 1-10.7 48.58q-2.33 5.34-5.13 10.46a124.92 124.92 0 0 1-23.49 30.38C44.29 432 22.67 439.9 0 442.28v6.46c24.24-2.43 47.48-10.85 65.28-27.57a130.85 130.85 0 0 0 23.25-29.35C108 404.49 133.4 433.56 151.91 500h6.72c-11.63-42.08-32.07-91.49-67-113.87Zm-79.14-78.3a1.75 1.75 0 0 0-2.69-2.23 31.6 31.6 0 0 1-9.8 7v6a21.5 21.5 0 0 0 2.55-1.37 33.15 33.15 0 0 0 9.94-9.4Z" />
        </>
      );
    // Spiky
    case 3:
      return (
        <>
          <path
            fill={furColor}
            d="M329.91 460c-.41-41.15-6.91-86.66-20.46-143.21-9.46-39.54-18.72-72.14-29.13-102.6-1-2.81-2.42-6-3.95-9.42l-.4-.87a3.25 3.25 0 0 1-5-1 538.83 538.83 0 0 0-88.09-127.76 75.25 75.25 0 0 1 .24 23.86 3.25 3.25 0 0 1-5.66 1.64c-21.52-25-42.61-50.8-62.81-76.95a50.34 50.34 0 0 1-2.88 19.94 3.24 3.24 0 0 1-5.76.66A259.81 259.81 0 0 0 69.51 0h-31l1 33.62a3.24 3.24 0 0 1-4.86 2.91L0 16.49v89.28a188 188 0 0 1 30 22.68l-2.37-12.28v-.06a2.81 2.81 0 0 1 4.65-2.59A137.52 137.52 0 0 1 72 178a1.64 1.64 0 0 1-3.15.93 133.21 133.21 0 0 0-34.06-55.44l2.45 12.68a2.81 2.81 0 0 1-4.73 2.56A180.83 180.83 0 0 0 0 113.17V260.8c1.8.53 3.58 1.08 5.37 1.67a99 99 0 0 1 9.93 3.81c6.48 2.92 12.78 6.83 17.64 12.33a1.92 1.92 0 0 1-2.84 2.59c-4.53-4.8-10.38-8.2-16.58-10.8a94.43 94.43 0 0 0-9.59-3.34c-1.3-.39-2.62-.74-3.93-1.1v152.82c8.46-.75 16.87-2 25.16-3.25 5.63-.84 11.46-1.71 17.21-2.42 18.56-2.26 35.51-.71 50.36 4.62 17.84 6.4 33.31 18.48 46 35.89 10.15 13.94 15.23 28.49 20.6 43.9l.86 2.48h168.06a375.77 375.77 0 0 0 1.66-40Z"
          />
          <path d="M334.77 500h-6.52a375.77 375.77 0 0 0 1.66-40c-.41-41.15-6.91-86.66-20.46-143.21-9.46-39.54-18.72-72.14-29.13-102.6-1-2.81-2.42-6-3.95-9.42l-.4-.87a3.25 3.25 0 0 1-5-1 538.83 538.83 0 0 0-88.09-127.76 75.25 75.25 0 0 1 .24 23.86 3.25 3.25 0 0 1-5.66 1.64c-21.52-25-42.61-50.8-62.81-76.95a50.34 50.34 0 0 1-2.88 19.94 3.24 3.24 0 0 1-5.76.66A259.81 259.81 0 0 0 69.51 0h9.19a266.62 266.62 0 0 1 28.78 34.85 44 44 0 0 0-1.82-23.12 3.24 3.24 0 0 1 5.62-3.08 1845.48 1845.48 0 0 0 66.14 82 68.77 68.77 0 0 0-3.89-25.74 3.25 3.25 0 0 1 5.38-3.35 544.93 544.93 0 0 1 90.69 124.51l-.14-2.14a3.24 3.24 0 1 1 6.47-.42c.35 5.38 3.4 12.13 6.35 18.65 1.59 3.54 3.1 6.89 4.17 10 10.34 30.24 19.92 64 29.31 103.19 13.66 57 20.21 103 20.63 144.65a383 383 0 0 1-1.62 40ZM38 36.51a3.25 3.25 0 0 0 1.58-2.89L38.53 0H32l.88 28L0 9v7.49l34.72 20a3.24 3.24 0 0 0 3.28.02Zm100.71 417.11c-12.67-17.41-28.14-29.49-46-35.89-14.85-5.33-31.8-6.88-50.36-4.62-5.75.71-11.58 1.58-17.21 2.42A436.79 436.79 0 0 1 0 418.78v6.52a424.2 424.2 0 0 0 26.12-3.36c5.59-.83 11.37-1.7 17-2.39 17.54-2.15 33.49-.7 47.38 4.28 16.59 6 31 17.26 42.93 33.6 9.59 13.17 14.51 27.28 19.72 42.22l.12.35h6.86l-.86-2.48c-5.33-15.41-10.41-29.96-20.56-43.9ZM13.52 270.4c6.2 2.57 12.05 6 16.57 10.79a1.92 1.92 0 0 0 2.84-2.59c-4.86-5.5-11.16-9.41-17.64-12.33a99 99 0 0 0-9.93-3.81c-1.79-.59-3.57-1.14-5.37-1.67V266c1.31.36 2.63.71 3.93 1.1a94.43 94.43 0 0 1 9.6 3.3Zm19-131.69a2.81 2.81 0 0 0 4.73-2.56l-2.45-12.68a133.21 133.21 0 0 1 34.06 55.44A1.64 1.64 0 0 0 72 178a137.52 137.52 0 0 0-39.7-64.47 2.81 2.81 0 0 0-4.65 2.59v.06L30 128.45a188 188 0 0 0-30-22.68v7.4a180.83 180.83 0 0 1 32.51 25.51Z" />
        </>
      );
    default:
      return <></>;
  }
}
