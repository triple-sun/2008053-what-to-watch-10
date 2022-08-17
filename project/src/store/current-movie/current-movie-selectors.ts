import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getCurrentMovieState = (state: State) => state.CURRENT;

export const getReviews = createSelector(getCurrentMovieState, (state) => state.data.reviews);

export const getSimilarMovies = createSelector(getCurrentMovieState, (state) => state.data.similar);
