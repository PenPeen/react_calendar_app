import { useDispatch } from 'react-redux';

import { Schedule, scheduleFormSlice } from '@/stores/scheduleForm';

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
