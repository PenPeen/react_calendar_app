import dayjs from 'dayjs';

dayjs.locale('ja');
const firstDay = dayjs().startOf('month');

export const createCalendar = (): dayjs.Dayjs[] => {
  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDay.day();
      const day = firstDay.add(diffFromFirstDay, 'day');

      return day;
    });
};
