import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
      state.form = { ...state.form, date: action.payload };
    },
    closeDialog(state) {
      state.isDialogOpen = false;
    },
  },
});
