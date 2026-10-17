import { configureStore } from '@reduxjs/toolkit';
import HomePageReducer from './screens/homePage/slice';

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
