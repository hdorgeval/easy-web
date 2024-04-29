import { useMemo } from 'react';

export interface CalendarOptions {
  /**
   * Start date in iso format : yyyy/mm/dd
   *
   * @type {string}
   * @memberof CalendarOptions
   */
  startDate: string;
  /**
   * End date in iso format : yyyy/mm/dd
   *
   * @type {string}
   * @memberof CalendarOptions
   */
  endDate: string;
}

export interface DateInfos {
  date: string;
  day: string;
  weekday: string;
  month: string;
  year: string;
  isPassed: boolean;
  longDate: string;
}

export function capitalizeFirstLetter(word: string) {
  const firstLetter = word.charAt(0).toLocaleUpperCase();
  return [firstLetter, ...word.slice(1)].join('');
}

export function extractDateInfosFromIsoDate(isoDate: string): DateInfos {
  const year = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(new Date(isoDate));
  const day = new Intl.DateTimeFormat('fr', { day: 'numeric' }).format(new Date(isoDate));
  const weekday = new Intl.DateTimeFormat('fr', { weekday: 'long' }).format(new Date(isoDate));
  const month = new Intl.DateTimeFormat('fr', { month: 'long' }).format(new Date(isoDate));
  const isPassed = new Date() >= new Date(isoDate);
  const longDate = new Intl.DateTimeFormat('fr', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  }).format(new Date(isoDate));

  return {
    day,
    weekday,
    month,
    year,
    date: isoDate,
    longDate,
    isPassed,
  };
}

export function buildDateRangeLabel(startDate: string, endDate: string): string {
  const startDateInfos = extractDateInfosFromIsoDate(startDate);
  const endDateInfos = extractDateInfosFromIsoDate(endDate);

  if (startDate === endDate) {
    return `${capitalizeFirstLetter(startDateInfos.weekday)} ${startDateInfos.day} ${
      startDateInfos.month
    } ${startDateInfos.year}`;
  }

  if (startDateInfos.year === endDateInfos.year && startDateInfos.month === endDateInfos.month) {
    return `Du ${startDateInfos.day} au ${endDateInfos.day} ${startDateInfos.month} ${startDateInfos.year}`;
  }

  if (startDateInfos.year === endDateInfos.year && startDateInfos.month !== endDateInfos.month) {
    return `Du ${startDateInfos.day} ${startDateInfos.month} au ${endDateInfos.day} ${endDateInfos.month} ${startDateInfos.year}`;
  }
  return `Du ${startDateInfos.day} ${startDateInfos.month} ${startDateInfos.year} au ${endDateInfos.day} ${endDateInfos.month} ${endDateInfos.year}`;
}

export const useCurrentYear = () => {
  const currentYear = useMemo(() => {
    return new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(new Date());
  }, []);

  return currentYear;
};

export const useDate = (isoDate: string) => {
  const dateInfos = useMemo(() => {
    return extractDateInfosFromIsoDate(isoDate);
  }, [isoDate]);
  return dateInfos;
};

export const useCalendar = (options: CalendarOptions) => {
  const startDateInfos = extractDateInfosFromIsoDate(options.startDate);
  const endDateInfos = extractDateInfosFromIsoDate(options.endDate);

  const fromStartDateToEndDateText = useMemo(() => {
    if (startDateInfos.year === endDateInfos.year && startDateInfos.month === endDateInfos.month) {
      return `Du ${startDateInfos.day} au ${endDateInfos.day} ${startDateInfos.month} ${startDateInfos.year}`;
    }

    if (startDateInfos.year === endDateInfos.year && startDateInfos.month !== endDateInfos.month) {
      return `Du ${startDateInfos.day} ${startDateInfos.month} au ${endDateInfos.day} ${endDateInfos.month} ${startDateInfos.year}`;
    }
    return `Du ${startDateInfos.day} ${startDateInfos.month} ${startDateInfos.year} au ${endDateInfos.day} ${endDateInfos.month} ${endDateInfos.year}`;
  }, [
    endDateInfos.day,
    endDateInfos.month,
    endDateInfos.year,
    startDateInfos.day,
    startDateInfos.month,
    startDateInfos.year,
  ]);
  return { startDateInfos, endDateInfos, fromStartDateToEndDateText };
};
