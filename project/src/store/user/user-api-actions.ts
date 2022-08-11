import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { APIRoute, AppRoute, ChangeAction, ErrorMessage, FetchAction, UserAction } from '../../const/enums';
import { dropToken, saveToken } from '../../services/token/token';
import AppDispatch from '../../types/app-dispatch';
import { TAuthData, TUserData, TUserInfo } from '../../types/data';
import TMovie from '../../types/movie';
import { State } from '../../types/state';
import { redirectToRoute } from '../common/common-actions';

export const checkAuthAction = createAsyncThunk<TUserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  UserAction.CheckAuth,
  async (_arg, {dispatch, extra: api}) => {
    const {data: userInfo} = await api.get<TUserInfo>(APIRoute.Login);
    const {data: favorites} = await api.get<TMovie[]>(APIRoute.Favorites);
    return {userInfo: userInfo, favorites: favorites};
  },
);

export const loginAction = createAsyncThunk<TUserInfo, TAuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  UserAction.Login,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserInfo>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  }
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
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const fetchFavoritesAction = createAsyncThunk<TMovie[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchFavorites,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie[]>(APIRoute.Favorites);
    return data;
  },
);

export const toggleFavoriteAction = createAsyncThunk<void, {id: number, status: number}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ChangeAction.ToggleFavorite,
  async ({id, status}, {dispatch, extra: api}) => {
    try {
      await api.post<TMovie>(`${APIRoute.Favorites}/${id}/${status}`);
    } catch {
      toast.warn(ErrorMessage.AddFavoriteError);
    }
  },
);
