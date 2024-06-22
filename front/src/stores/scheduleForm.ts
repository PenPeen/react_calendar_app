import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Schedule } from '@/types/schedule';

export interface ScheduleState {
  form: Schedule;
  isDialogOpen: boolean;
}

const initialState: ScheduleState = {
  form: {
    title: '',
    description: '',
    date: '',
    location: '',
  },
  isDialogOpen: false,
};

export const scheduleFormSlice = createSlice({
  name: 'scheduleForm',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<object>) {
      state.form = { ...state.form, ...action.payload };
    },
    openDialog(state, action: PayloadAction<string>) {
      state.isDialogOpen = true;
      state.form = { ...initialState.form, date: action.payload };
    },
    closeDialog(state) {
      state.isDialogOpen = false;
    },
  },
});
