import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Schedule, ScheduleItem } from '@/types/schedule';

interface SchedulesState {
  items: ScheduleItem[];
  isLoading: boolean;
}

const initialState: SchedulesState = {
  // TODO: DBからデータを取得して初期値を表示させる
  items: [],
  isLoading: false,
};

export const schedulesSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    addSchedule(state, action: PayloadAction<Schedule>) {
      // TODO: idは一意なものを指定する
      state.items.push({ id: state.items.length + 1, ...action.payload });
    },
    removeSchedule(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
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
