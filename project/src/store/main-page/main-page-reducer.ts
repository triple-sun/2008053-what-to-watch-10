import {createReducer} from '@reduxjs/toolkit';
import { Genre } from '../../const/enums';
import { MainPageInitialState } from '../../types/state';
import { setGenre } from './main-page-actions';
import { fetchMainPageDataAction } from './main-page-api-actions';

const initialState: MainPageInitialState = {
  data: {
    movies: [],
    promo: null,
  },
  selectedGenre: Genre.AllGenres,
  isLoading: false
};

const mainPageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMainPageDataAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchMainPageDataAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    })
    .addCase(setGenre, (state, action) => {
      state.selectedGenre = action.payload;
    });
});

export default mainPageReducer;
