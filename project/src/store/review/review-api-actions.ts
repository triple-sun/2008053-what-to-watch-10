import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { APIRoute, AppRoute, ChangeAction, LoadAction } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TReview from '../../types/comment';
import { TReviewState } from '../../types/review-state';
import State from '../../types/state';
import { redirectToRoute } from '../app/app-actions';
import { loadReviews } from './review-actions';

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

export const addReviewAction = createAsyncThunk<void, TReviewState & {id: number}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  ChangeAction.AddReview,
  async ({rating, comment, id}, {dispatch, extra: api}) => {
    try {
      await api.post<TReview[]>(`${APIRoute.Review}/${id}`, {comment, rating});
      dispatch(redirectToRoute(`${AppRoute.Movies}${id}`));
    } catch (err) {
      toast.warn('aaaa');
    }
  },
);
