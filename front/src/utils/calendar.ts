import dayjs from 'dayjs';

import { CalendarState } from '@/stores';

dayjs.locale('ja');

/**
 * 指定された月のカレンダーデータを生成する
 * @param {number} count - 生成する日数
 * @param {CalendarState} calendar - 年と月の情報
 * @returns {dayjs.Dayjs[]} 日付オブジェクトの配列
 */
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

/**
 * 指定された年月の月初日を取得する
 * @param {CalendarState} { year, month } - 年と月
 * @returns {dayjs.Dayjs} 月初日の日付
 */
export const getFirstDayOfMonth = ({
  year,
  month,
}: CalendarState): dayjs.Dayjs => {
  return dayjs(`${year}-${month}`);
};

/**
 * 指定された日が現在の月であるかどうかを判定する
 * @param {dayjs.Dayjs} day - 日付
 * @param {number} currentMonth - 現在の月
 * @returns {boolean} 判定結果
 */
export const isCurrentMonth = (
  day: dayjs.Dayjs,
  currentMonth: number,
): boolean => {
  return day.month() + 1 === currentMonth;
};

/**
 * 指定された日が本日であるかを判定する
 * @param {dayjs.Dayjs} day - 日付
 * @returns {boolean} 判定結果
 */
export const isToday = (day: dayjs.Dayjs): boolean => {
  const today = dayjs();
  return day.format('YYYYMMDD') === today.format('YYYYMMDD');
};

/**
 * 指定された日が月初日であるかを判定する
 * @param {dayjs.Dayjs} day - 日付
 * @returns {boolean} 判定結果
 */
export const isFirstDay = (day: dayjs.Dayjs): boolean => {
  return day.date() === 1;
};

/**
 * 二つの日付が同じ日であるかを判定する
 * @param {dayjs.Dayjs} d1 - 日付1
 * @param {dayjs.Dayjs} d2 - 日付2
 * @returns {boolean} 判定結果
 */
export const isSameDay = (d1: dayjs.Dayjs, d2: dayjs.Dayjs) => {
  const format = 'YYYYMMDD';
  return d1.format(format) === d2.format(format);
};

/**
 * 指定された月数分、月をシフトした新しいカレンダーを生成します。
 * @param {CalendarState} calendar - 元のカレンダーステート
 * @param {number} diff - シフトする月数
 * @returns {CalendarState} 新しいカレンダーステート
 */
export const shiftedMonth = (
  calendar: CalendarState,
  diff: number,
): CalendarState => {
  const date = getFirstDayOfMonth(calendar).add(diff, 'month');
  return formatMonth(date);
};

/**
 * 指定された日付から新しいカレンダーを生成する
 * @param {dayjs.Dayjs} date - 日付
 * @returns {CalendarState} 新しいカレンダーステート
 */
export const formatMonth = (date: dayjs.Dayjs): CalendarState => ({
  month: date.month() + 1,
  year: date.year(),
});
