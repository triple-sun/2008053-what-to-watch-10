import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute, ChangeAction } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TMovie from '../../types/movie';
import State from '../../types/state';
import { setDataLoadedStatus } from '../app/app-actions';
import { loadFavorites, loadMovies, loadPromo, toggleFavorite } from './main-page-actions';

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchMovies,
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
  FetchAction.FetchPromo,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie[]>(APIRoute.Movies);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadMovies(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchFavorites,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie[]>(APIRoute.Favorites);
    dispatch(loadFavorites(data));
  },
);

export const toggleFavoriteAction = createAsyncThunk<void, {id: number, status: number}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ChangeAction.ToggleFavorite,
  async ({id, status}, {dispatch, extra: api}) => {
    const {data: favorite} = await api.post<TMovie>(`${APIRoute.Favorites}/${id}/${status}`);
    dispatch(toggleFavorite(favorite));
  },
);
