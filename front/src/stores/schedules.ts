import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ScheduleItem } from '@/types/schedule';

interface SchedulesState {
  items: ScheduleItem[];
  isLoading: boolean;
}

const initialState: SchedulesState = {
  items: [],
  isLoading: false,
};

export const schedulesSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    addSchedule(state, action: PayloadAction<ScheduleItem>) {
      state.items.push(action.payload);
    },
    removeSchedule(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.isLoading = false;
    },
    fetchSchedule(state, action: PayloadAction<ScheduleItem[]>) {
      state.items = action.payload;
      state.isLoading = false;
    },
    setLoading(state) {
      state.isLoading = true;
    },
  },
});
