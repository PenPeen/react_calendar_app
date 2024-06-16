import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

interface CalenderState {
  year: number;
  month: number;
}

const day = dayjs();

const initialState: CalenderState = {
  year: day.year(),
  month: day.month() + 1,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    set_month(state, action: PayloadAction<number>) {
      state.month = action.payload;
    },
  },
});

export default calendarSlice;
