import { useDispatch } from 'react-redux';

import { FormInput, scheduleFormSlice } from '@/stores/scheduleForm';

const { openDialog, closeDialog, setValue } = scheduleFormSlice.actions;

export const useScheduleForm = () => {
  const dispatch = useDispatch();

  const handleSetValue = (field: keyof FormInput, value: string) => {
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
