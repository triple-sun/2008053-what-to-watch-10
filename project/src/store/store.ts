import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api/api';
import appStatusReducer from './app/app-reducer';
import { redirect } from './middlewares/redirect';
import mainPageReducer from './main-page/main-page-reducer';
import userReducer from './user/user-reducer';
import moviePageReducer from './movie-page/movie-page-reducer';
import reviewReducer from './review/review-reducer';

export const rootReducer = combineReducers({mainPageReducer, moviePageReducer, reviewReducer, userReducer, appStatusReducer});

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
