import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FormInput {
  title: string;
  description: string;
  date: string | null;
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
    date: null,
    location: '',
  },
  isDialogOpen: false,
};

export const scheduleFormSlice = createSlice({
  name: 'scheduleForm',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<FormInput>) {
      state.form = action.payload;
    },
    openDialog(state) {
      state.isDialogOpen = true;
    },
    closeDialog(state) {
      state.isDialogOpen = false;
    },
  },
});
