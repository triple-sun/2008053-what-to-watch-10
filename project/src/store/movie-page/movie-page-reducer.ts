import {createReducer} from '@reduxjs/toolkit';
import { MoviePageInitialState } from '../../types/state';
import { fetchMoviePageDataAction } from './movie-page-api-actions';

const initialState: MoviePageInitialState = {
  data: {
    currentMovie: null,
    currentReviews: [],
    similarMovies: [],
  },
  isLoading: false,
};

const moviePageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMoviePageDataAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchMoviePageDataAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
});

export default moviePageReducer;
