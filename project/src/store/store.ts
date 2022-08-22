import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api/api';
import { redirect } from './middlewares/redirect';
import mainPageReducer from './main-page/main-page-reducer';
import currentMovieReducer from './current-movie/current-movie-reducer';
import userReducer from './user/user-reducer';
import { Reducer } from '../const/enums';

export const rootReducer = combineReducers({
  [Reducer.MainPage]: mainPageReducer,
  [Reducer.CurrentMovie]: currentMovieReducer,
  [Reducer.User]: userReducer
});

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
