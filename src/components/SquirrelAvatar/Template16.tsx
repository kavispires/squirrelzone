import { DNA_DISTRIBUTION } from 'utils/squirrel-appearance';
import { Appearance } from 'types';

type Template16Props = {
  appearance: Appearance;
};

export function Template16({ appearance }: Template16Props) {
  const furColor = DNA_DISTRIBUTION['fur.color'].options[appearance.fur.color].hex;
  const kind = appearance.eye.lids;

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
    // ?
    case 8:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 9:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 10:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 11:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 12:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 13:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 14:
      return (
        <>
          <></>
        </>
      );
    // ?
    case 15:
      return (
        <>
          <></>
        </>
      );

    default:
      return <></>;
  }
}
