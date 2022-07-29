import {configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api/api';
import mainPageReducer from './main-page-reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: mainPageReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
