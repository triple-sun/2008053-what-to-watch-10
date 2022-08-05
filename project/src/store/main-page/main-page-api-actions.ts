import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { FetchAction, APIRoute, ChangeAction, ErrorMessage } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TMovie from '../../types/movie';
import { State } from '../../types/state';
import { loadFavorites, loadMovies, loadPromo } from './main-page-actions';

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchPromo,
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TMovie>(APIRoute.Promo);
      dispatch(loadPromo(data));
    } catch {
      toast.warn(ErrorMessage.PromoError);
    }
  },
);

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchMovies,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie[]>(APIRoute.Movies);
    dispatch(loadMovies(data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchFavorites,
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TMovie[]>(APIRoute.Favorites);
      dispatch(loadFavorites(data));
    } catch {
      toast.warn(ErrorMessage.FavoritesError);
    }
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
