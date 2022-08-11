import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api/api';
import { redirect } from './middlewares/redirect';
import mainPageReducer from './main-page/main-page-reducer';
import similarMoviesReducer from './similar-movies/similar-movies-reducer';
import movieReducer from './movie/movie-reducer';
import userReducer from './user/user-reducer';

export const rootReducer = combineReducers({mainPageReducer, similarMoviesReducer, movieReducer, userReducer});

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
