import {createReducer} from '@reduxjs/toolkit';
import { SimilarMoviesInitialState } from '../../types/state';
import { fetchSimilarMoviesAction } from './similar-movies-api-actions';

const initialState: SimilarMoviesInitialState = {
  data: [],
};

const similarMoviesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchSimilarMoviesAction.fulfilled, (state, action) => {
      state.data = action.payload;
    });
});

export default similarMoviesReducer;
