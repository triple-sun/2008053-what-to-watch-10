import {createReducer} from '@reduxjs/toolkit';
import { CurrentMovieInitialState } from '../../types/state';
import { fetchCurrentMovieAction } from './current-movie-api-actions';

const initialState: CurrentMovieInitialState = {
  data: {
    movie: null,
    reviews: []
  },
  isLoading: true
};

const moviePlayerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCurrentMovieAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchCurrentMovieAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
});

export default moviePlayerReducer;
