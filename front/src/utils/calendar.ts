import dayjs from 'dayjs';

import { CalendarState } from '@/stores';
import { ScheduleItem } from '@/types/schedule';

dayjs.locale('ja');

export const createCalendar = (
  count: number,
  calendar: CalendarState,
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

export const getFirstDayOfMonth = ({
  year,
  month,
}: CalendarState): dayjs.Dayjs => {
  return dayjs(`${year}-${month}`);
};

export const isCurrentMonth = (
  day: dayjs.Dayjs,
  currentMonth: number,
): boolean => {
  return day.month() + 1 === currentMonth;
};

export const isToday = (day: dayjs.Dayjs): boolean => {
  const today = dayjs();
  return day.format('YYYYMMDD') === today.format('YYYYMMDD');
};

export const isFirstDay = (day: dayjs.Dayjs): boolean => {
  return day.date() === 1;
};

export const isSameDay = (d1: dayjs.Dayjs, d2: dayjs.Dayjs) => {
  const format = 'YYYYMMDD';
  return d1.format(format) === d2.format(format);
};

export const shiftedMonth = (
  calendar: CalendarState,
  diff: number,
): CalendarState => {
  const date = getFirstDayOfMonth(calendar).add(diff, 'month');
  return formatMonth(date);
};

export const formatMonth = (date: dayjs.Dayjs): CalendarState => ({
  month: date.month() + 1,
  year: date.year(),
});

export const mapSchedulesToDate = (
  calendar: dayjs.Dayjs[],
  schedules: ScheduleItem[],
) => {
  return calendar.map((date) => ({
    date,
    schedules: schedules.filter((schedule) =>
      isSameDay(dayjs(schedule.date), date),
    ),
  }));
};
