import { memoize } from 'lodash';

/**
 * Converts an RBG color HEX
 * @param r
 * @param g
 * @param b
 * @returns
 */
export const RGBtoHEX = memoize((r: number, g: number, b: number): string => {
  let red = r.toString(16);
  let green = g.toString(16);
  let blue = b.toString(16);

  if (red.length === 1) red = '0' + red;
  if (green.length === 1) green = '0' + green;
  if (blue.length === 1) blue = '0' + blue;

  return '#' + red + green + blue;
});

/**
 *
 * @param hex
 * @returns
 */
export const HEXtoRGB = memoize((hex: string) => {
  let r = '';
  let g = '';
  let b = '';

  // 3 digits
  if (hex.length === 4) {
    r = '0x' + hex[1] + hex[1];
    g = '0x' + hex[2] + hex[2];
    b = '0x' + hex[3] + hex[3];

    // 6 digits
  } else if (hex.length === 7) {
    r = '0x' + hex[1] + hex[2];
    g = '0x' + hex[3] + hex[4];
    b = '0x' + hex[5] + hex[6];
  }

  return { r: Number(r), g: Number(g), b: Number(b) };
});

export const RGBtoHSL = memoize((r: number, g: number, b: number) => {
  let red = r / 255;
  let green = g / 255;
  let blue = b / 255;
  const l = Math.max(red, green, blue);
  const s = l - Math.min(red, green, blue);
  const h = s
    ? l === red
      ? (green - blue) / s
      : l === green
      ? 2 + (blue - red) / s
      : 4 + (red - green) / s
    : 0;
  return {
    hue: 60 * h < 0 ? 60 * h + 360 : 60 * h,
    saturation: 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    lightness: (100 * (2 * l - s)) / 2,
  };
});

export const HSLtoRGB = memoize((h: number, s: number, l: number) => {
  const hDecimal = h / 100;
  const sDecimal = s / 100;
  const lDecimal = l / 100;

  let r, g, b;

  if (s === 0) {
    return { r: lDecimal, g: lDecimal, b: lDecimal };
  }

  const HueToRGB = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let q = lDecimal < 0.5 ? lDecimal * (1 + sDecimal) : lDecimal + sDecimal - lDecimal * sDecimal;
  let p = 2 * lDecimal - q;

  r = HueToRGB(p, q, hDecimal + 1 / 3);
  g = HueToRGB(p, q, hDecimal);
  b = HueToRGB(p, q, hDecimal - 1 / 3);

  return { r: r * 255, g: g * 255, b: b * 255 };
});

export const HEXtoHSL = memoize((hex: string) => {
  const rbg = HEXtoRGB(hex);
  return RGBtoHSL(rbg.r, rbg.b, rbg.g);
});

export const HSLtoHEX = memoize((h: number, s: number, l: number) => {
  const rbg = HSLtoRGB(h, s, l);
  return RGBtoHEX(rbg.r, rbg.g, rbg.b);
});

export const getHEXComplementary = memoize((hex: string): string => {
  const hsl = HEXtoHSL(hex);
  const complementaryHsl = getHSLComplementary(hsl.hue, hsl.saturation, hsl.lightness);
  return HSLtoHEX(complementaryHsl.hue, complementaryHsl.saturation, complementaryHsl.lightness);
});

export const getHSLComplementary = memoize((h: number, s: number, l: number) => {
  const newHue = h + 180;
  return {
    hue: newHue % 360,
    saturation: s,
    lightness: l,
  };
});
