import {createReducer} from '@reduxjs/toolkit';
import { Genre } from '../const/enums';
import mockMovies from '../mocks/movies';
import mockMoviePromo from '../mocks/promo';
import { MainPageInitialState } from '../types/initial-states';
import { changeGenre, resetGenre } from './main-page-actions';

const initialState: MainPageInitialState = {
  promo: mockMoviePromo,
  movies: mockMovies,
  selectedGenre: Genre.AllGenres,
};

const mainPageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload !== state.selectedGenre ? action.payload : state.selectedGenre;
    })
    .addCase(resetGenre, (state) => {
      state.selectedGenre = initialState.selectedGenre;
    });
});

export default mainPageReducer;
