import {createReducer} from '@reduxjs/toolkit';
import { currentMovieInitialState } from '../../const/initial-states';
import { fetchCurrentMovieAction, fetchReviewsAction, fetchSimilarMoviesAction } from './current-movie-api-actions';

const currentMovieReducer = createReducer(currentMovieInitialState, (builder) => {
  builder
    .addCase(fetchCurrentMovieAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchCurrentMovieAction.fulfilled, (state, action) => {
      state.data.movie = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchReviewsAction.fulfilled, (state, action) =>{
      state.data.reviews = action.payload;
    })
    .addCase(fetchSimilarMoviesAction.fulfilled, (state, action) => {
      state.data.similar = action.payload;
    });
});

export default currentMovieReducer;
