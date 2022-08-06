import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { FetchAction, APIRoute, ErrorMessage, LoadAction } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TReview from '../../types/comment';
import TMovie from '../../types/movie';
import { State } from '../../types/state';
import { loadCurrentMovie, loadReviews, loadSimilarMovies } from './movie-page-actions';

const SIMILAR_MOVIES_URL_SUFFIX = '/similar';

export const fetchSimilarMoviesAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchSimilarMovies,
  async (id, {dispatch, extra: api}) => {
    try {
      const {data: similarMovies} = await api.get<TMovie[]>(`${APIRoute.Movies}/${id}${SIMILAR_MOVIES_URL_SUFFIX}`);
      dispatch(loadSimilarMovies(similarMovies));
    } catch {
      toast.warn(ErrorMessage.SimilarError);
    }
  },
);

export const fetchCurrentMovieAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchSimilarMovies,
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TMovie>(`${APIRoute.Movies}/${id}`);
      dispatch(loadCurrentMovie(data));
    } catch {
      toast.warn(ErrorMessage.CurrentError);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  LoadAction.LoadReviews,
  async (id, {dispatch, extra: api}) => {
    const {data: reviews} = await api.get<TReview[]>(`${APIRoute.Review}/${id}`);
    dispatch(loadReviews(reviews));
  },
);
