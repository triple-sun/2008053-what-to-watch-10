import {createReducer} from '@reduxjs/toolkit';
import { CurrentMovieInitialState } from '../../types/state';
import { fetchMovieAction, fetchReviewsAction } from './movie-api-actions';

const initialState: CurrentMovieInitialState = {
  data: {
    movie: null,
    reviews: []
  },
  isLoading: true
};

const moviePlayerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchMovieAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchMovieAction.rejected, (state) => {
      state.data.movie = initialState.data.movie;
      state.isLoading = false;
    })
    .addCase(fetchMovieAction.fulfilled, (state, action) => {
      state.data.movie = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchReviewsAction.rejected, (state) =>{
      state.data.reviews = initialState.data.reviews;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) =>{
      state.data.reviews = action.payload;
    });
});

export default moviePlayerReducer;
