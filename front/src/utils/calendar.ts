import dayjs from 'dayjs';

dayjs.locale('ja');
const firstDay = dayjs().startOf('month');

export const createCalendar = (count: number): dayjs.Dayjs[] => {
  return Array(count)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDay.day();
      const day = firstDay.add(diffFromFirstDay, 'day');

      return day;
    });
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
