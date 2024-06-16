import dayjs from 'dayjs';

import { CalenderState } from '@/stores';

dayjs.locale('ja');

export const createCalendar = (
  count: number,
  calendar: CalenderState,
): dayjs.Dayjs[] => {
  const firstDay = getFirstDayOfMonth(calendar);

  return Array(count)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDay.day();
      const day = firstDay.add(diffFromFirstDay, 'day');

      return day;
    });
};

export const getFirstDayOfMonth = ({ year, month }: CalenderState) => {
  return dayjs(`${year}-${month}`);
};

export const isCurrentMonth = (day: dayjs.Dayjs) => {
  const today = dayjs();
  return day.month() === today.month();
};

export const isToday = (day: dayjs.Dayjs) => {
  const today = dayjs();
  return day.format('YYYYMMDD') === today.format('YYYYMMDD');
};

export const isFirstDay = (day: dayjs.Dayjs) => {
  return day.date() === 1;
};
