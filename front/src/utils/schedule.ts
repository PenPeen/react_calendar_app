import dayjs from 'dayjs';

import { isSameDay } from './calendar';

import { ScheduleItem } from '@/types/schedule';

/**
 * 指定されたカレンダーの各日付に保存されているスケジュールをマッピングする。
 *
 * @param {dayjs.Dayjs[]} calendar - 日付の配列
 * @param {ScheduleItem[]} schedules - スケジュール一覧
 * @returns {Object[]} 各日付と関連するスケジュールの配列を持つオブジェクトの配列
 */
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
