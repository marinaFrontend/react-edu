export const range = (start: number, end: number) => {
  return [...Array(end).keys()].map((el) => el + start);
};

export const cropString = (str: string, maxLength: number | 50) => {
  return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
};
