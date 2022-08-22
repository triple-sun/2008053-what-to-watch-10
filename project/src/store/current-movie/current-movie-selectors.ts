import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getCurrentMovieState = (state: State) => state.CURRENT;

export const getCurrentMovie = createSelector(getCurrentMovieState, (state) => state.movie);

export const getReviews = createSelector(getCurrentMovieState, (state) => state.reviews);

export const getSimilarMovies = createSelector(getCurrentMovieState, (state) => state.similar);
