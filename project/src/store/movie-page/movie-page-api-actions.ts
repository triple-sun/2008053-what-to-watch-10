import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TReview from '../../types/review';
import TMovie from '../../types/movie';
import { State } from '../../types/state';
import { TMoviePageData } from '../../types/data';

const SIMILAR_MOVIES_URL_SUFFIX = '/similar';

export const fetchMoviePageDataAction = createAsyncThunk<TMoviePageData, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchMoviePageData,
  async (id, {dispatch, extra: api}) => {
    const {data: currentMovie} = await api.get<TMovie>(`${APIRoute.Movies}/${id}`);
    const {data: currentReviews} = await api.get<TReview[]>(`${APIRoute.Review}/${id}`);
    const {data: similarMovies} = await api.get<TMovie[]>(`${APIRoute.Movies}/${id}${SIMILAR_MOVIES_URL_SUFFIX}`);
    return {currentMovie, currentReviews, similarMovies};
  },
);
