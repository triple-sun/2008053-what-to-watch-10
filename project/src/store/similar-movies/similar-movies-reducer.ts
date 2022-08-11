import {createReducer} from '@reduxjs/toolkit';
import { SimilarMoviesInitialState } from '../../types/state';
import { fetchSimilarMoviesAction } from './similar-movies-api-actions';

const initialState: SimilarMoviesInitialState = {
  data: [],
};

const moviePageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchSimilarMoviesAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchSimilarMoviesAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
});

export default moviePageReducer;
