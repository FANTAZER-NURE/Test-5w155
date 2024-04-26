import passwordReducer from './slices/passwordSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    password: passwordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
