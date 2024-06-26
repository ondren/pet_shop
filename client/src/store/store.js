import { configureStore } from '@reduxjs/toolkit';
import userStateReducer from '../features/userState/userStateSlice';
import deviceReducer from '../features/deviceSlice/deviceSlice';

export const store = configureStore({
  reducer: {
    user: userStateReducer,
    device: deviceReducer,
  },
});
