import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import HomePageReducer from './screens/homePage/slice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
