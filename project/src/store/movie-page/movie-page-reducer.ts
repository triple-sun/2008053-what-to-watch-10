import {createReducer} from '@reduxjs/toolkit';
import { MovieInitialState } from '../../types/state';
import { loadCurrentMovie, loadReviews, loadSimilarMovies } from './movie-page-actions';

const initialState: MovieInitialState = {
  currentMovie: {
    data: null,
    reviews: [],
  },
  similarMovies: {
    data: [],
  },
};

const moviePageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCurrentMovie, (state, action) => {
      state.currentMovie.data = action.payload;
    })
    .addCase(loadSimilarMovies, (state, action) => {
      state.similarMovies.data = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.currentMovie.reviews = action.payload;
    });
});

export default moviePageReducer;
