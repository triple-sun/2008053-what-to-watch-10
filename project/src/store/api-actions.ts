import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TIMEOUT_SHOW_ERROR } from '../const/const';
import { Action, APIRoute, AuthorizationStatus } from '../const/enums';
import { dropToken, saveToken } from '../services/token/token';
import AppDispatch from '../types/app-dispatch';
import TAuthData from '../types/auth-data';
import TMovie from '../types/movie';
import State from '../types/state';
import TUserData from '../types/user-data';
import { loadMovies, loadPromo, requireAuthorization, setDataLoadedStatus, setError } from './main-page-actions';
import { store } from './store';

export const clearErrorAction = createAsyncThunk(
  Action.ClearError,
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.FetchMovies,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie>(APIRoute.Promo);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadPromo(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.FetchPromo,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie[]>(APIRoute.Movies);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadMovies(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.CheckAuth,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.Login,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<TUserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  Action.Logout,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
