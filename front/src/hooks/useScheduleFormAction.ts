import { useDispatch } from 'react-redux';

import { scheduleFormSlice } from '@/stores/scheduleForm';
import { schedulesSlice } from '@/stores/schedules';
import { Schedule, ScheduleItem } from '@/types/schedule';
import { storeScheduleRequest } from '@/utils/api';
const { setLoading, addSchedule } = schedulesSlice.actions;
const { openDialog, closeDialog, setValue, editing, endEditing } =
  scheduleFormSlice.actions;

export const useScheduleFormAction = () => {
  const dispatch = useDispatch();

  const handleSetValue = (field: keyof Schedule, value: string) => {
    dispatch(setValue({ [field]: value }));
  };
  const handleOpenDialog = (day: string) => dispatch(openDialog(day));
  const handleCloseDialog = () => {
    dispatch(closeDialog());
    dispatch(endEditing());
  };
  const handleStoreForm = async (schedule: Schedule) => {
    if (schedule.title === '') {
      dispatch(editing());
      return;
    }

    dispatch(setLoading());

    const body: Schedule = { ...schedule, date: schedule.date };
    const result: ScheduleItem = await storeScheduleRequest('schedules', body);

    dispatch(addSchedule(result));
    dispatch(closeDialog());
  };
  const handleEditing = () => dispatch(editing());

  return {
    handleOpenDialog,
    handleCloseDialog,
    handleSetValue,
    handleStoreForm,
    handleEditing,
  };
};
