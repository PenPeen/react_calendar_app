import { configureStore } from '@reduxjs/toolkit';

import calendarSlice from './calendar';
import { scheduleFormSlice } from './scheduleForm';
import { schedulesSlice } from './schedules';

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    scheduleForm: scheduleFormSlice.reducer,
    schedules: schedulesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export * from './calendar';

export default store;
