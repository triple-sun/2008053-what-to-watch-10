import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import TMovie from '../../types/movie';
import { State } from '../../types/state';

export const fetchCurrentMovieAction = createAsyncThunk<TMovie, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchPlayerPageData,
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TMovie>(`${APIRoute.Movies}/${id}`);
    return data;
  },
);
