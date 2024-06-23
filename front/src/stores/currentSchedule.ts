import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Schedule } from '@/types/schedule';

type ScheduleState = {
  current: Schedule;
  isDialogOpen: boolean;
};

const initialState: ScheduleState = {
  current: {
    title: '',
    description: '',
    date: '',
    location: '',
  },
  isDialogOpen: false,
};

export const currentScheduleSlice = createSlice({
  name: 'currentSchedule',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<object>) {
      state.current = { ...state.current, ...action.payload };
    },
    openDialog(state) {
      state.isDialogOpen = true;
    },
    closeDialog(state) {
      state.isDialogOpen = false;
    },
  },
});
