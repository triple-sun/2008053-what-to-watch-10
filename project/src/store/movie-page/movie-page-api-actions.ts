import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TMovie from '../../types/movie';
import State from '../../types/state';
import { loadSimilarMovies } from './movie-page-actions';

const SIMILAR_MOVIES_URL_SUFFIX = '/similar';

export const fetchMoviePageDataAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchSimilarMovies,
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie[]>(`${APIRoute.Movies}/${id}${SIMILAR_MOVIES_URL_SUFFIX}`);
    dispatch(loadSimilarMovies(data));
  },
);
