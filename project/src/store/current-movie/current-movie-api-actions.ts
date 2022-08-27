import { State, TReviewState } from '../../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute, ChangeAction, AppRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TMovie from '../../types/movie';
import TReview from '../../types/review';
import { redirectToRoute } from '../common/common-actions';
import { TCurrentMovieData } from '../../types/data';
import { SIMILAR_MOVIES_URL_SUFFIX } from '../../const/const';

export const fetchCurrentMovieDataAction = createAsyncThunk<TCurrentMovieData, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchCurrentMovie,
  async (id, {dispatch, extra: api}) => {
    const {data: movie} = await api.get<TMovie>(`${APIRoute.Movies}/${id}`);
    const {data: reviews} = await api.get<TReview[]>(`${APIRoute.Review}/${id}`);
    const {data: similar} = await api.get<TMovie[]>(`${APIRoute.Movies}/${id}${SIMILAR_MOVIES_URL_SUFFIX}`);
    return {movie, reviews, similar};
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
    dispatch(fetchCurrentMovieDataAction(id));
    dispatch(redirectToRoute(`${AppRoute.Movies}${id}`));
  },
);
