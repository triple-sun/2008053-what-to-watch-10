import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { createAPI } from '../services/api/api';
import { redirect } from './middlewares/redirect';
import { mainPage } from './main-page/main-page';
import { currentMovie } from './current-movie/current-movie';
import { userProcess } from './user/user';
import { NameSpace } from '../const/enums';

export const rootReducer = combineReducers({
  [NameSpace.MainPage]: mainPage.reducer,
  [NameSpace.CurrentMovie]: currentMovie.reducer,
  [NameSpace.User]: userProcess.reducer
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
