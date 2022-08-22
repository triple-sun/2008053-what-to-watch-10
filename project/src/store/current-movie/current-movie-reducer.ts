import {createReducer} from '@reduxjs/toolkit';
import { currentMovieInitialState } from '../../const/initial-states';
import { fetchCurrentMovieAction, fetchReviewsAction, fetchSimilarMoviesAction } from './current-movie-api-actions';

const currentMovieReducer = createReducer(currentMovieInitialState, (builder) => {
  builder
    .addCase(fetchCurrentMovieAction.fulfilled, (state, action) => {
      state.movie = action.payload;
    })
    .addCase(fetchReviewsAction.pending, (state, action) =>{
      state.reviews.isLoaded = false;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) =>{
      state.reviews.data = action.payload;
      state.reviews.isLoaded = true;
    })
    .addCase(fetchSimilarMoviesAction.pending, (state) => {
      state.similar.isLoaded = false;
    })
    .addCase(fetchSimilarMoviesAction.fulfilled, (state, action) => {
      state.similar.data = action.payload;
      state.similar.isLoaded = true;
    });
});

export default currentMovieReducer;
