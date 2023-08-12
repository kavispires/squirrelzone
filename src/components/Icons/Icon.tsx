import { Avatar, AvatarProps } from 'antd';
import icons from 'assets/images/icons.svg';

type IconProps = {
  type: string;
} & AvatarProps;
export function Icon({ type, size, ...rest }: IconProps) {
  return (
    <Avatar
      size={size ?? 24}
      src={
        <svg viewBox="0 0 2666.66 2666.66">
          <use href={icons + `#${type}`} />
        </svg>
      }
      {...rest}
    />
  );
}
