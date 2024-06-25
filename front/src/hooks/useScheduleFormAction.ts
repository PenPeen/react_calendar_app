import { useDispatch } from 'react-redux';

import { scheduleFormSlice } from '@/stores/scheduleForm';
import { schedulesSlice } from '@/stores/schedules';
import { Schedule } from '@/types/schedule';
import { storeScheduleRequest } from '@/utils/api';
const { setLoading, addSchedule } = schedulesSlice.actions;
const { openDialog, closeDialog, setValue, editing, endEditing } =
  scheduleFormSlice.actions;

export const useScheduleFormAction = () => {
  const dispatch = useDispatch();

  const request = async (schedule: Schedule) => {
    const body: Schedule = { ...schedule, date: schedule.date };
    return await storeScheduleRequest('schedules', body);
  };

  const dispatchSetValue = (field: keyof Schedule, value: string) => {
    dispatch(setValue({ [field]: value }));
  };

  const dispatchOpenDialog = (day: string) => dispatch(openDialog(day));

  const dispatchCloseDialog = () => {
    dispatch(closeDialog());
    dispatch(endEditing());
  };

  const dispatchStoreForm = async (schedule: Schedule) => {
    if (schedule.title === '') {
      dispatch(editing());
      return;
    }

    dispatch(setLoading());
    dispatch(addSchedule(await request(schedule)));
    dispatch(closeDialog());
    dispatch(endEditing());
  };

  const dispatchEditing = () => dispatch(editing());

  return {
    dispatchOpenDialog,
    dispatchCloseDialog,
    dispatchSetValue,
    dispatchStoreForm,
    dispatchEditing,
  };
};
