import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute, AppRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import { TCurrentMovieData } from '../../types/data';
import TMovie from '../../types/movie';
import TReview from '../../types/review';
import { State } from '../../types/state';
import { redirectToRoute } from '../common/common-actions';

export const fetchCurrentMovieAction = createAsyncThunk<TCurrentMovieData, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchPlayerPageData,
  async (id, {dispatch, extra: api}) => {
    try {
      const {data: movie} = await api.get<TMovie>(`${APIRoute.Movies}/${id}`);
      const {data: reviews} = await api.get<TReview[]>(`${APIRoute.Review}/${id}`);
      return {movie, reviews};
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
      return {movie: null, reviews: []};
    }
  },
);
