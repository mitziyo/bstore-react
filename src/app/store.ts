import { configureStore } from '@reduxjs/toolkit';
import { logger as reduxLogger } from 'redux-logger'; // default import Vite'da funksiya emas, modul obyektini beradi
import HomePageReducer from './screens/homePage/slice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
