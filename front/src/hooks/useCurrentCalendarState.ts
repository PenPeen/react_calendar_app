import { useSelector } from 'react-redux';

import { CalendarState, RootState } from '@/stores';

export const useCurrentCalendarState = () => {
  const currentCalendar = useSelector<RootState, CalendarState>(
    (state) => state.calendar,
  );

  return currentCalendar;
};
