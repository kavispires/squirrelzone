import { Appearance, HSLColor } from 'types';

type HeadAccessoriesProps = {
  appearance: Appearance;
  color: HSLColor;
};

export function HeadAccessories({ appearance, color }: HeadAccessoriesProps) {
  const colorStr = `hsl(${color.hue},${color.saturation}%,${Math.max(color.lightness - 20, 10)}%)`;
  const kind = appearance.accessories.head;

  switch (kind) {
    // ?
    case 0:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 1:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 2:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 3:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 4:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 5:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 6:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 7:
      return (
        <>
          <></>
        </>
      );

    default:
      return <></>;
  }
}
