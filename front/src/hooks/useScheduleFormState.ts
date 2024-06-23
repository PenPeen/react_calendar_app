import { useSelector } from 'react-redux';

import { RootState } from '@/stores';
import { ScheduleState } from '@/stores/scheduleForm';

export const useScheduleFormState = () => {
  const scheduleForm = useSelector<RootState, ScheduleState>(
    (state) => state.scheduleForm,
  );

  return scheduleForm;
};
