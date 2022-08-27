import { createSlice} from '@reduxjs/toolkit';
import { NameSpace } from '../../const/enums';
import { currentMovieInitialState } from '../../const/initial-states';
import { resetCurrentMovie } from './current-movie-actions';
import { addReviewAction, fetchCurrentMovieDataAction} from './current-movie-api-actions';

export const currentMovie = createSlice({
  name: NameSpace.CurrentMovie,
  initialState: currentMovieInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(resetCurrentMovie, (state) => {
        state.data.movie = null;
        state.data.reviews = [];
        state.data.similar = [];
        state.isLoaded = false;
      })
      .addCase(fetchCurrentMovieDataAction.pending, (state, action) => {
        state.isLoaded = false;
      })
      .addCase(fetchCurrentMovieDataAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoaded = true;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.isAddingReview = true;
      })
      .addCase(addReviewAction.fulfilled, (state) => {
        state.isAddingReview = false;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.isAddingReview = false;
      });
  }
});
