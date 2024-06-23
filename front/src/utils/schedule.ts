import dayjs from 'dayjs';

import { isSameDay } from './calendar';

import { ScheduleItem } from '@/types/schedule';

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
