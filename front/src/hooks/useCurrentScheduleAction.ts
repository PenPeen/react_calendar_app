import { useDispatch } from 'react-redux';

import { currentScheduleSlice } from '@/stores/currentSchedule';
import { schedulesSlice } from '@/stores/schedules';
import { ScheduleItem } from '@/types/schedule';
import { removeScheduleRequest } from '@/utils/api';

const { openDialog, closeDialog, setCurrent } = currentScheduleSlice.actions;
const { setLoading, removeSchedule: removeSchedule } = schedulesSlice.actions;

export const useCurrentScheduleAction = () => {
  const dispatch = useDispatch();

  const dispatchSetCurrent = (current: ScheduleItem) => {
    dispatch(setCurrent(current));
  };
  const dispatchOpenDialog = () => dispatch(openDialog());
  const dispatchCloseDialog = () => dispatch(closeDialog());
  const dispatchDeleteForm = async (id: number) => {
    const result = window.confirm('本当によろしいですか？');

    if (result === true) {
      dispatch(setLoading());
      await removeScheduleRequest(`schedules/${id}`);
      dispatch(removeSchedule(id));
      dispatch(closeDialog());
    }
  };

  return {
    dispatchOpenDialog,
    dispatchCloseDialog,
    dispatchSetCurrent,
    dispatchDeleteForm,
  };
};
