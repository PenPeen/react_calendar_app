import { configureStore } from '@reduxjs/toolkit';

import calendarSlice from './calendar';

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export * from './calendar';

export default store;
