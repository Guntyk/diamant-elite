import { configureStore } from '@reduxjs/toolkit';
import teamReducer from '@redux/features/teamSlice';

export const store = configureStore({
  reducer: {
    team: teamReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
});
