import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TMovie from '../../types/movie';
import { State } from '../../types/state';

export const fetchPromoAction = createAsyncThunk<TMovie, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchPromo,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie>(APIRoute.Promo);
    return data;
  },
);

export const fetchAllMoviesAction = createAsyncThunk<TMovie[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchAllMovies,
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie[]>(APIRoute.Movies);
    return data;
  },
);
