import moment from 'moment';

export const range = (start: number, end: number) => {
  return [...Array(end).keys()].map((el) => el + start);
};

export const cropString = (str: string, maxLength: number | 50) => {
  return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
};

export const getFormattedDate = (date: Date, format: string = 'DD.MM.YYYY') => {
  if (!date) return '';
  return moment(date).locale('ru').format(format);
};

export const sortByDate = <T>(array: T[], sortKey: string | number, inverse: boolean = false) => {
  if (!array || !Array.isArray(array) || !array.length) return array;

  function isDate(date?: Date | string) {
    return moment(date, moment.ISO_8601, true).isValid();
  }
  function isShortDate(date?: Date | string) {
    return moment(date, 'DD.MM.YYYY', true).isValid();
  }
  function toFullDate(date?: Date | string) {
    return moment(date, 'DD.MM.YYYY').toString();
  }
  function getTime(date?: Date | string) {
    if (!date || typeof date === 'string') return 0;
    return date.getTime();
  }

  return array.slice().sort((a: T, b: T) => {
    const dateA = a[sortKey as keyof T] as unknown as string | Date | undefined;
    const dateB = b[sortKey as keyof T] as unknown as string | Date | undefined;

    if (isDate(dateA) && isDate(dateB)) {
      return inverse ? getTime(dateA) - getTime(dateB) : getTime(dateB) - getTime(dateA);
    } else if (isShortDate(dateA) && isShortDate(dateB)) {
      return inverse
        ? getTime(new Date(toFullDate(dateA))) - getTime(new Date(toFullDate(dateB)))
        : getTime(new Date(toFullDate(dateB))) - getTime(new Date(toFullDate(dateA)));
    } else return -1;
  });
};
