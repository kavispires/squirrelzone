import { HSLColor } from '../../utils/types';

type BackgroundProps = {
  color: HSLColor;
};

export function Background({ color }: BackgroundProps) {
  return (
    <path fill={`hsl(${color.hue},${color.saturation}%,${color.lightness - 30}%)`} d="M0 0h500v500H0z" />
  );
}
