import { State, TReviewState } from '../../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute, ChangeAction, AppRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TMovie from '../../types/movie';
import TReview from '../../types/review';
import { redirectToRoute } from '../common/common-actions';

const SIMILAR_MOVIES_URL_SUFFIX = '/similar';

export const fetchCurrentMovieAction = createAsyncThunk<TMovie, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchCurrentMovie,
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

export const fetchSimilarMoviesAction = createAsyncThunk<TMovie[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchSimilarMovies,
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie[]>(`${APIRoute.Movies}/${id}${SIMILAR_MOVIES_URL_SUFFIX}`);
    return data;
  },
);

export const addReviewAction = createAsyncThunk<void, TReviewState & {id: number}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ChangeAction.AddReview,
  async ({rating, comment, id}, {dispatch, extra: api}) => {
    await api.post<TReview[]>(`${APIRoute.Review}/${id}`, {comment, rating});
    dispatch(fetchReviewsAction(id));
    dispatch(fetchCurrentMovieAction(id));
    dispatch(redirectToRoute(`${AppRoute.Movies}${id}`));
  },
);
