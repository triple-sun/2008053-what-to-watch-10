import {createReducer} from '@reduxjs/toolkit';
import { CurrentMovieInitialState } from '../../types/state';
import { fetchCurrentMovieAction } from './current-movie-api-actions';

const initialState: CurrentMovieInitialState = {
  data: null,
};

const moviePlayerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCurrentMovieAction.fulfilled, (state, action) => {
      state.data = action.payload;
    });
});

export default moviePlayerReducer;
