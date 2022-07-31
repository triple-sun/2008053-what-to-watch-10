import {createReducer} from '@reduxjs/toolkit';
import TMovie from '../../types/movie';
import { loadCurrentMovie, loadSimilarMovies } from './movie-page-actions';

type MovieInitialState = {
  currentMovie: TMovie | null | undefined;
  similarMovies: TMovie[] | null | undefined;
};

const initialState: MovieInitialState = {
  currentMovie: null,
  similarMovies: null,
};

const moviePageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCurrentMovie, (state, action) => {
      state.currentMovie = action.payload;
    })
    .addCase(loadSimilarMovies, (state, action) => {
      state.similarMovies = action.payload;
    });
});

export default moviePageReducer;
