import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from '@redux/features/locationsSlice';
import teamReducer from '@redux/features/teamSlice';

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    team: teamReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
});
