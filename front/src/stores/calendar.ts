import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import { formatMonth, shiftedMonth } from '@/utils/calendar';

export interface CalendarState {
  year: number;
  month: number;
}

const day = dayjs();
const initialState = formatMonth(day);

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setNextMonth(state) {
      Object.assign(state, shiftedMonth(state, 1));
    },
    setPrevMonth(state) {
      Object.assign(state, shiftedMonth(state, -1));
    },
    setDate(state, action: PayloadAction<{ year: number; month: number }>) {
      Object.assign(state, action.payload);
    },
  },
});

export default calendarSlice;
