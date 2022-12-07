import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './phoneBookSlice';

const store = configureStore({
  reducer: phoneBookSlice.reducer,
});

export default store;
