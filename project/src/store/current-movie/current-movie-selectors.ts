import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getCurrentMovieState = (state: State) => state.CURRENT;

export const getIsMovieLoaded = createSelector(getCurrentMovieState, (state) => state.isLoaded);

export const getCurrentMovie = createSelector(getCurrentMovieState, (state) => state.data.movie);

export const getReviews = createSelector(getCurrentMovieState, (state) => state.data.reviews);

export const getSimilarMovies = createSelector(getCurrentMovieState, (state) => state.data.similar);

export const getAddReviewState = createSelector(getCurrentMovieState, (state) => state.isAddingReview);
