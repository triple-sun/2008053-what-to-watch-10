import { State } from '../../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TMovie from '../../types/movie';
import TReview from '../../types/review';

export const fetchMovieAction = createAsyncThunk<TMovie, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchMovie,
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie>(`${APIRoute.Movies}/${id}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<TReview[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchReviews,
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TReview[]>(`${APIRoute.Review}/${id}`);
    return data;
  },
);
