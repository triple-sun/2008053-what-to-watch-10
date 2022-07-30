import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus, UserAction } from '../../const/enums';
import { dropToken, saveToken } from '../../services/token/token';
import AppDispatch from '../../types/app-dispatch';
import TAuthData from '../../types/auth-data';
import State from '../../types/state';
import TUserData from '../../types/user-data';
import { redirectToRoute } from '../app/app-actions';
import { loadUserData, setAuthStatus } from './user-actions';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  UserAction.CheckAuth,
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
      dispatch(loadUserData(data));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  UserAction.Login,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
    dispatch(loadUserData(data));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  UserAction.Logout,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

