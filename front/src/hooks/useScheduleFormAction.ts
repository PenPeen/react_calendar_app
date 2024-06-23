import { useDispatch } from 'react-redux';

import { scheduleFormSlice } from '@/stores/scheduleForm';
import { schedulesSlice } from '@/stores/schedules';
import { Schedule } from '@/types/schedule';

const { openDialog, closeDialog, setValue } = scheduleFormSlice.actions;
const { addSchedule } = schedulesSlice.actions;

export const useScheduleFormAction = () => {
  const dispatch = useDispatch();

  const handleSetValue = (field: keyof Schedule, value: string) => {
    dispatch(setValue({ [field]: value }));
  };
  const handleOpenDialog = (day: string) => dispatch(openDialog(day));
  const handleCloseDialog = () => dispatch(closeDialog());
  const handleStoreForm = (schedule: Schedule) => {
    dispatch(addSchedule(schedule));
    dispatch(closeDialog());
  };

  return {
    handleOpenDialog,
    handleCloseDialog,
    handleSetValue,
    handleStoreForm,
  };
};
