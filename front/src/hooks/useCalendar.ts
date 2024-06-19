import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/stores';
import calendarSlice, { CalendarState } from '@/stores/calendar';
import { formatMonth } from '@/utils/calendar';

const { setNextMonth, setPrevMonth, setDate } = calendarSlice.actions;

export const useCalendar = () => {
  const calendar = useSelector<RootState, CalendarState>(
    (state) => state.calendar,
  );

  const dispatch = useDispatch();
  const handlePrevMonth = () => dispatch(setPrevMonth());
  const handleNextMonth = () => dispatch(setNextMonth());
  const handleSetMonth = (date: dayjs.Dayjs | null) => {
    if (date) {
      dispatch(setDate(formatMonth(date)));
    }
  };

  return {
    handlePrevMonth,
    handleNextMonth,
    handleSetMonth,
    calendar,
  };
};
