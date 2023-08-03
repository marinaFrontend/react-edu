export const range = (start: number, end: number) => {
  return [...Array(end).keys()].map((el) => el + start);
};

export const cropString = (str: string | undefined, maxLength: number | 50) => {
  if (!str) {
    console.warn('Warning: method cropString. String is undefined');
    return null;
  }
  return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
};
