import {createReducer} from '@reduxjs/toolkit';
import { mainPageInitialState } from '../../const/initial-states';
import { setGenre } from './main-page-actions';
import { fetchAllMoviesAction, fetchPromoAction } from './main-page-api-actions';

const mainPageReducer = createReducer(mainPageInitialState, (builder) => {
  builder
    .addCase(fetchAllMoviesAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchAllMoviesAction.fulfilled, (state, action) => {
      state.data.movies = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchPromoAction.fulfilled, (state, action) => {
      state.data.promo = action.payload;
    })
    .addCase(setGenre, (state, action) => {
      state.selectedGenre = action.payload;
    });
});

export default mainPageReducer;
