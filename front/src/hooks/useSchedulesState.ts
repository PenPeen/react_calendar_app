import { useSelector } from 'react-redux';

import { RootState } from '@/stores';
import { ScheduleItem } from '@/types';

export const useSchedulesState = () => {
  const schedules = useSelector<RootState, ScheduleItem[]>(
    (state) => state.schedules.items,
  );

  return schedules;
};
