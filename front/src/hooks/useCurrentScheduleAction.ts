import { useDispatch } from 'react-redux';

import { currentScheduleSlice } from '@/stores/currentSchedule';
import { ScheduleItem } from '@/types/schedule';

const { openDialog, closeDialog, setCurrent } = currentScheduleSlice.actions;

export const useCurrentScheduleAction = () => {
  const dispatch = useDispatch();

  const handleSetCurrent = (current: ScheduleItem) => {
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
