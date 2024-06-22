import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface FormInput {
  title: string;
  description: string;
  date: string;
  location: string;
}

export interface ScheduleState {
  form: FormInput;
  isDialogOpen: boolean;
}

const initialState: ScheduleState = {
  form: {
    title: '',
    description: '',
    // TODO: 本日の日付を仮で初期値指定
    date: dayjs().toISOString(),
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
    openDialog(state) {
      state.isDialogOpen = true;
    },
    closeDialog(state) {
      state.isDialogOpen = false;
    },
  },
});
