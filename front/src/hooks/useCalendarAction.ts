import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';

import calendarSlice from '@/stores/calendar';
import { formatMonth } from '@/utils/calendar';

const { setNextMonth, setPrevMonth, setDate } = calendarSlice.actions;

export const useCalendar = () => {
  const dispatch = useDispatch();
  const dispatchPrevMonth = () => dispatch(setPrevMonth());
  const dispatchNextMonth = () => dispatch(setNextMonth());
  const dispatchSetMonth = (date: dayjs.Dayjs | null) => {
    if (date) {
      dispatch(setDate(formatMonth(date)));
    }
  };

  return {
    dispatchPrevMonth,
    dispatchNextMonth,
    dispatchSetMonth,
  };
};
