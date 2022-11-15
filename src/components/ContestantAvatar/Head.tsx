import { FUR_COLOR, SNOUT_COLOR } from "../../utils/appearance-constants";
import { Appearance } from "../../utils/types";

type HeadProps = {
  appearance: Appearance;
};

export function Head({ appearance }: HeadProps) {
  const furColor = FUR_COLOR[appearance.fur.color].hex;
  const snoutColor = SNOUT_COLOR[appearance.snout.color].hex;

  return (
    <>
      <path
        fill={furColor}
        d="M437 252.56C426.37 163.75 403.12 49.91 250.59 44 98.8 38.08 86.86 202.45 92.06 236.44 84 231 70.58 227.14 52.33 239c-32 20.75-16.42 64.84-16.42 64.84s15.27 47.25 58.49 30.25a31.48 31.48 0 0 0 14.41-10.84c10.24 28.87 27.67 59 58.22 81.53a66.5 66.5 0 0 1 2-6.59c10.56-28.7 47.28-65.78 176.65-65.56 0 0 58.44 8.3 81.46 32a38.39 38.39 0 0 1 4.91 6.15c8.78-27.36 11.27-65.35 4.95-118.22ZM90 299.37c0 .59-.76 1-1.65 1s-1.59-.54-1.58-1.1a64.33 64.33 0 0 0-1.24-15.66A39.68 39.68 0 0 0 80 269.79a26.66 26.66 0 0 0-2-2.62 47.79 47.79 0 0 0-6.24 5.42 23 23 0 0 0-4.77 7.7 26.81 26.81 0 0 0-1.65 9.2 24 24 0 0 0 2 9.58c.14.31-.4.87-1.19 1.28s-1.58.42-1.75.06a45.19 45.19 0 0 1-3.34-10.51 25 25 0 0 1 .46-11.41 23.21 23.21 0 0 1 2.36-5.38 29.74 29.74 0 0 1 3.52-4.65 26.63 26.63 0 0 1 6.66-5 13.38 13.38 0 0 0-4.88-2.09 28.39 28.39 0 0 0-14.89.83c-.47.15-1.07-.33-1.4-1.08a1.27 1.27 0 0 1 .38-1.7A31.89 31.89 0 0 1 70 257.21a25.77 25.77 0 0 1 8.42 3 18.91 18.91 0 0 1 6.58 6.35c3.17 5.13 4.34 10.88 4.84 16.38a120.35 120.35 0 0 1 .16 16.43Z"
      />
      <path d="M443.43 251.79c-5.72-47.8-14.64-97.61-41-138.14a155.8 155.8 0 0 0-56.78-52.77c-26-14.07-57.88-21.94-94.82-23.38-49.74-1.93-89.71 13.59-118.77 46.14-25 28-36.54 63.06-41.83 87.57-4.53 21-6 40.77-5.54 54.82-8.88-2.41-21.12-2.08-35.89 7.51-15 9.72-23 25.48-23.17 45.58a86.73 86.73 0 0 0 4.13 26.76c.59 1.81 8.54 24.82 28.65 34.33 11.47 5.42 24.37 5.38 38.35-.12a40.93 40.93 0 0 0 9.54-5.23c12.35 30.32 30.49 54.84 54 73 33.42 25.77 78 38.87 132.49 38.95h2.39c21.71 0 44.48-.48 65.21-4.87 24.43-5.17 43-15.19 56.7-30.62C444 381 452.65 328.81 443.43 251.79Zm-12.3 121.81-.14.43q-1 2.85-2.09 5.54c0 .13-.11.25-.16.38l-1 2.46c0 .06-.05.13-.08.19-.39.89-.79 1.76-1.19 2.62l-.09.17c-.37.79-.75 1.56-1.13 2.32l-.25.29q-1.25 2.44-2.57 4.73l-.2.34c-.89 1.52-1.81 3-2.76 4.42l-.17.26c-.44.65-.88 1.29-1.33 1.92l-.15.21c-.5.71-1 1.39-1.51 2.07v.05c-.49.64-1 1.26-1.48 1.88l-.22.27q-1.55 1.92-3.18 3.69l-.22.25c-.52.56-1 1.12-1.58 1.66l-.06.06a92.8 92.8 0 0 1-1.73 1.71l-.16.16-1.59 1.48-.22.19q-1.74 1.58-3.56 3l-.28.21c-1.21 1-2.44 1.89-3.7 2.77l-.25.18-1.76 1.2-.16.1c-.65.43-1.31.85-2 1.26l-.13.08-1.84 1.1-.28.17q-2 1.14-4 2.19l-.31.16-2 1-2.13 1-.26.12c-.63.28-1.27.56-1.92.83l-.25.1a87.84 87.84 0 0 1-4.26 1.66l-.35.13c-1.45.53-2.91 1-4.39 1.49l-.35.11q-1 .33-2.07.63l-.16.05c-.76.23-1.53.44-2.3.65l-.24.07c-.68.19-1.37.37-2.06.54l-.35.09c-1.52.38-3.05.74-4.6 1.08l-.41.09q-2.32.5-4.68.93l-.38.07-2.11.36h-.29c-.8.14-1.61.27-2.41.39h-.23l-2.17.32-.43.06c-1.6.22-3.2.42-4.82.61l-.47.05-2.21.24h-.21l-2.46.24h-.4l-2.12.19h-.43l-2.47.19H331l-2.27.16h-.53c-1.64.1-3.29.19-4.94.27h-.51c-.71 0-1.43.07-2.15.09h-.37l-2.49.09h-.41l-2.14.07h-.52l-2.52.06-2.45.05H292.57c-1.72 0-3.43 0-5.12-.05l-1.85-.05c-1.14 0-2.28-.05-3.41-.09-.72 0-1.43-.06-2.15-.09l-3-.13-2.24-.13-2.82-.17-2.29-.17-2.69-.21-2.27-.21-2.6-.25-2.27-.25-2.51-.29-2.25-.29-2.44-.32-2.22-.33-2.38-.36-2.2-.37-2.3-.4-2.17-.4-2.25-.43-2.13-.44-2.18-.46-2.11-.48-2.13-.5a78.7 78.7 0 0 1-2.08-.51l-2.06-.53-2.05-.54-2-.56-2-.58-1.95-.59-2-.62-1.91-.62-1.95-.65-1.85-.64-1.92-.68-1.8-.67-1.88-.72-1.75-.7-1.86-.75-1.7-.72-1.82-.78c-.56-.24-1.1-.49-1.65-.74l-1.8-.82-1.59-.76c-.59-.28-1.19-.56-1.77-.85l-1.54-.78-1.75-.89-1.49-.79-1.72-.92-1.44-.81c-.56-.32-1.13-.63-1.69-1l-1.38-.81-1.68-1-1.31-.81-1.67-1.05-1.21-.79-1.7-1.11-1-.69c-33.39-22.78-52-54.49-62.77-84.77a31.48 31.48 0 0 1-14.45 11.33c-43.22 17-58.49-30.25-58.49-30.25S20.35 259.72 52.33 239c18.25-11.83 31.62-8 39.73-2.53C86.86 202.45 98.8 38.08 250.59 44 403.12 49.91 426.37 163.75 437 252.56c6.54 54.74 3.64 93.54-5.87 121.04ZM89.79 282.94a120.35 120.35 0 0 1 .2 16.43c0 .59-.76 1-1.65 1s-1.59-.54-1.58-1.1a64.33 64.33 0 0 0-1.24-15.66A39.68 39.68 0 0 0 80 269.79a26.66 26.66 0 0 0-2-2.62 47.79 47.79 0 0 0-6.24 5.42 23 23 0 0 0-4.77 7.7 26.81 26.81 0 0 0-1.65 9.2 24 24 0 0 0 2 9.58c.14.31-.4.87-1.19 1.28s-1.58.42-1.75.06a45.19 45.19 0 0 1-3.34-10.51 25 25 0 0 1 .46-11.41 23.21 23.21 0 0 1 2.36-5.38 29.74 29.74 0 0 1 3.52-4.65 26.63 26.63 0 0 1 6.66-5 13.38 13.38 0 0 0-4.88-2.09 28.39 28.39 0 0 0-14.89.83c-.47.15-1.07-.33-1.4-1.08a1.27 1.27 0 0 1 .38-1.7A31.89 31.89 0 0 1 70 257.21a25.77 25.77 0 0 1 8.42 3 18.91 18.91 0 0 1 6.58 6.35c3.12 5.13 4.29 10.88 4.79 16.38Z" />
      <path
        fill={snoutColor}
        d="M427.18 364.58c-23-23.68-81.46-32-81.46-32-129.37-.22-166.09 36.86-176.65 65.56a66.82 66.82 0 0 0-2 6.61c1.48 1.09 3 2.16 4.55 3.22l1 .69 1.7 1.11 1.21.79 1.67 1.05 1.31.81 1.68 1 1.38.81c.56.33 1.13.64 1.69 1l1.44.81 1.72.92 1.49.79 1.75.89 1.54.78c.58.29 1.18.57 1.77.85l1.59.76 1.8.82c.55.25 1.09.5 1.65.74l1.82.78 1.7.72 1.86.75 1.75.7 1.88.72 1.8.67 1.92.68 1.85.64 1.95.65 1.91.62 2 .62 1.95.59 2 .58 2 .56 2.05.54 2.06.53c.69.18 1.39.35 2.08.51l2.13.5 2.11.48 2.18.46 2.13.44 2.25.43 2.17.4 2.3.4 2.2.37 2.38.36 2.22.33 2.44.32 2.25.29 2.51.29 2.27.25 2.6.25 2.27.21 2.69.21 2.29.17 2.82.17 2.24.13 3 .13c.72 0 1.43.07 2.15.09 1.13 0 2.27.06 3.41.09l1.85.05c1.69 0 3.4 0 5.12.05h17.01l2.45-.05 2.52-.06h.52l2.14-.07h.41l2.49-.09h.37c.72 0 1.44-.06 2.15-.09h.51c1.65-.08 3.3-.17 4.94-.27h.53l2.27-.16h.19l2.47-.19h.43l2.12-.19h.4l2.46-.24h.21l2.21-.24.47-.05c1.62-.19 3.22-.39 4.82-.61l.43-.06 2.17-.32h.23c.8-.12 1.61-.25 2.41-.39h.29l2.11-.36.38-.07q2.36-.44 4.68-.93l.41-.09c1.55-.34 3.08-.7 4.6-1.08l.35-.09c.69-.17 1.38-.35 2.06-.54l.24-.07a86.7 86.7 0 0 0 2.3-.65l.16-.05q1.05-.3 2.07-.63l.35-.11c1.48-.47 2.94-1 4.39-1.49l.35-.13c.69-.25 1.39-.51 2.08-.78.73-.28 1.46-.57 2.18-.88l.25-.1c.65-.27 1.29-.55 1.92-.83l.26-.12c.72-.32 1.43-.65 2.13-1l2-1 .31-.16q2-1.05 4-2.19l.28-.17 1.84-1.1.13-.08 2-1.26.16-.1 1.76-1.2.25-.18a75.77 75.77 0 0 0 3.7-2.77l.28-.21q1.81-1.46 3.56-3l.22-.19 1.59-1.48.16-.16a92.8 92.8 0 0 0 1.73-1.71l.06-.06c.53-.54 1.06-1.1 1.58-1.66l.22-.25q1.63-1.77 3.18-3.69l.22-.27c.5-.62 1-1.24 1.48-1.88v-.05c.51-.68 1-1.36 1.51-2.07l.15-.21c.45-.63.89-1.27 1.33-1.92l.17-.26c.95-1.42 1.87-2.9 2.76-4.42l.2-.34q1.32-2.28 2.57-4.73l.17-.33c.38-.76.76-1.53 1.13-2.32l.09-.17c.4-.86.8-1.73 1.19-2.62 0-.06.05-.13.08-.19.36-.81.7-1.63 1-2.46l.16-.38q1.32-3.11 2.32-6l.14-.43c.33-.94.65-1.89 1-2.86a38 38 0 0 0-4.96-6.13Z"
      />
    </>
  );
}