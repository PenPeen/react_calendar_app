import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ScheduleItem } from '@/types/schedule';

export interface CurrentScheduleState {
  current: ScheduleItem;
  isDialogOpen: boolean;
}

const initialState: CurrentScheduleState = {
  current: {
    id: null as never,
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
    setCurrent(state, action: PayloadAction<ScheduleItem>) {
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
