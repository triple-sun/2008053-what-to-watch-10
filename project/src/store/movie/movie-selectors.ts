import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getMovieState = (state: State) => state.movieReducer;

export const getReviews = createSelector(getMovieState, (state) => state.data.reviews);
