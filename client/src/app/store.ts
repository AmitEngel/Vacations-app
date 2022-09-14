import { configureStore } from '@reduxjs/toolkit';
import authSlice, { authMiddleware } from '../features/authSlice';
import vacationSlice from '../features/vacationSlice';
import followSlice from '../features/followSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    vacation: vacationSlice,
    follow: followSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});

