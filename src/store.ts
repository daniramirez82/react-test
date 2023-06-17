
import { configureStore } from '@reduxjs/toolkit';
import sortOrderReducer from './sortOrderSlice';

const store = configureStore({
  reducer: {
    sortOrder: sortOrderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
