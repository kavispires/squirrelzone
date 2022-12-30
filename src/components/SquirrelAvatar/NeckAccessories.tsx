import { Appearance, HSLColor } from 'types';

type NeckAccessoriesProps = {
  appearance: Appearance;
  color: HSLColor;
};

export function NeckAccessories({ appearance, color }: NeckAccessoriesProps) {
  const colorStr = `hsl(${color.hue},${color.saturation}%,${Math.max(color.lightness - 20, 10)}%)`;
  const kind = appearance.accessories.neck;

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

    default:
      return <></>;
  }
}
