import { configureStore } from '@reduxjs/toolkit';

import calendarSlice from './calendar';
import { scheduleFormSlice } from './scheduleForm';

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    scheduleForn: scheduleFormSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export * from './calendar';

export default store;
