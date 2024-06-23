import { useDispatch } from 'react-redux';

import { currentScheduleSlice } from '@/stores/currentSchedule';
import { schedulesSlice } from '@/stores/schedules';
import { ScheduleItem } from '@/types/schedule';
import { removeScheduleRequest } from '@/utils/api';

const { openDialog, closeDialog, setCurrent } = currentScheduleSlice.actions;
const { setLoading, removeSchedule: removeSchedule } = schedulesSlice.actions;

export const useCurrentScheduleAction = () => {
  const dispatch = useDispatch();

  const handleSetCurrent = (current: ScheduleItem) => {
    dispatch(setCurrent(current));
  };
  const handleOpenDialog = () => dispatch(openDialog());
  const handleCloseDialog = () => dispatch(closeDialog());
  const handleDeleteForm = async (id: number) => {
    dispatch(setLoading());
    await removeScheduleRequest(`schedules/${id}`);
    dispatch(removeSchedule(id));
    dispatch(closeDialog());
  };

  return {
    handleOpenDialog,
    handleCloseDialog,
    handleSetCurrent,
    handleDeleteForm,
  };
};