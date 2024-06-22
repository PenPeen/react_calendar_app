import { useDispatch } from 'react-redux';

import { scheduleFormSlice } from '@/stores/scheduleForm';
import { Schedule } from '@/types/schedule';

const { openDialog, closeDialog, setValue } = scheduleFormSlice.actions;

export const useScheduleForm = () => {
  const dispatch = useDispatch();

  const handleSetValue = (field: keyof Schedule, value: string) => {
    dispatch(setValue({ [field]: value }));
  };
  const handleOpenDialog = (day: string) => dispatch(openDialog(day));
  const handleCloseDialog = () => dispatch(closeDialog());

  return {
    handleOpenDialog,
    handleCloseDialog,
    handleSetValue,
  };
};
