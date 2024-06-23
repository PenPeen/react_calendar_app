import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Schedule } from '@/types/schedule';

export interface CurrentScheduleState {
  current: Schedule;
  isDialogOpen: boolean;
}

const initialState: CurrentScheduleState = {
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
    setCurrent(state, action: PayloadAction<Schedule>) {
      state.current = action.payload;
    },
    openDialog(state) {
      state.isDialogOpen = true;
    },
    closeDialog(state) {
      state.isDialogOpen = false;
    },
  },
});
