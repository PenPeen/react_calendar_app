import { useDispatch } from 'react-redux';

import { scheduleFormSlice } from '@/stores/scheduleForm';

const { openDialog, closeDialog } = scheduleFormSlice.actions;

export const useScheduleForm = () => {
  const dispatch = useDispatch();
  const handleSetValue = () => console.log('TODO');
  const handleOpenDialog = () => dispatch(openDialog());
  const handleCloseDialog = () => dispatch(closeDialog());

  return {
    handleOpenDialog,
    handleCloseDialog,
    handleSetValue,
  };
};
