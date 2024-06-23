import { useDispatch } from 'react-redux';

import { currentScheduleSlice } from '@/stores/currentSchedule';
import { Schedule } from '@/types/schedule';

const { openDialog, closeDialog, setCurrent } = currentScheduleSlice.actions;

export const useCurrentSchedule = () => {
  const dispatch = useDispatch();

  const handleSetCurrent = (current: Schedule) => {
    dispatch(setCurrent(current));
  };
  const handleOpenDialog = () => dispatch(openDialog());
  const handleCloseDialog = () => dispatch(closeDialog());

  return {
    handleOpenDialog,
    handleCloseDialog,
    handleSetCurrent,
  };
};
