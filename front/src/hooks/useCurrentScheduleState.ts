import { useSelector } from 'react-redux';

import { RootState } from '@/stores';
import { CurrentScheduleState } from '@/stores/currentSchedule';

export const useCurrentScheduleState = () => {
  const currentSchedule = useSelector<RootState, CurrentScheduleState>(
    (state) => state.currentSchedule,
  );

  return currentSchedule;
};
