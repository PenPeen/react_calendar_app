import { useDispatch } from 'react-redux';

import { scheduleFormSlice } from '@/stores/scheduleForm';
import { schedulesSlice } from '@/stores/schedules';
import { Schedule } from '@/types/schedule';
import { post } from '@/utils/api';
const { setLoading, addSchedule } = schedulesSlice.actions;
const { openDialog, closeDialog, setValue } = scheduleFormSlice.actions;

export const useScheduleFormAction = () => {
  const dispatch = useDispatch();

  const handleSetValue = (field: keyof Schedule, value: string) => {
    dispatch(setValue({ [field]: value }));
  };
  const handleOpenDialog = (day: string) => dispatch(openDialog(day));
  const handleCloseDialog = () => dispatch(closeDialog());
  const handleStoreForm = async (schedule: Schedule) => {
    dispatch(setLoading());

    const body = { ...schedule, date: schedule.date };
    const result = await post('schedules', body);

    dispatch(addSchedule(result));
    dispatch(closeDialog());
  };

  return {
    handleOpenDialog,
    handleCloseDialog,
    handleSetValue,
    handleStoreForm,
  };
};
