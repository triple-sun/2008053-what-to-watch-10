import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FetchAction, APIRoute } from '../../const/enums';
import AppDispatch from '../../types/app-dispatch';
import { TMainPageData } from '../../types/data';
import TMovie from '../../types/movie';
import { State } from '../../types/state';

export const fetchMainPageDataAction = createAsyncThunk<TMainPageData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  FetchAction.FetchMainPageData,
  async (_arg, {dispatch, extra: api}) => {
    const {data: movies} = await api.get<TMovie[]>(APIRoute.Movies);
    const {data: promo} = await api.get<TMovie>(APIRoute.Promo);
    return {
      movies,
      promo
    };
  },
);
