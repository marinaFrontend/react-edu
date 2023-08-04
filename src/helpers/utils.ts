export const range = (start: number, end: number) => {
  return [...Array(end).keys()].map((el) => el + start);
};

export const cropString = (str: string, maxLength: number | 50) => {
  return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
};

export const convertToRGB = (hexColor: string) => {
  if (hexColor.length !== 6) return [];
  const aRgbHex = hexColor.match(/.{1,2}/g);
  if (!aRgbHex) return [];
  return [parseInt(aRgbHex[0], 16), parseInt(aRgbHex[1], 16), parseInt(aRgbHex[2], 16)];
};
