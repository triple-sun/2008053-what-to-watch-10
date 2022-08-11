import {createReducer} from '@reduxjs/toolkit';
import { Genre } from '../../const/enums';
import { MainPageInitialState } from '../../types/state';
import { setGenre } from './main-page-actions';
import { fetchMoviesAction, fetchPromoAction } from './main-page-api-actions';

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
    .addCase(fetchMoviesAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchMoviesAction.fulfilled, (state, action) => {
      state.data.movies = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchPromoAction.fulfilled, (state, action) => {
      state.data.promo = action.payload;
    })
    .addCase(setGenre, (state, action) => {
      state.selectedGenre = action.payload;
    });
});

export default mainPageReducer;
