import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getCurrentMovieState = (state: State) => state.moviePlayerReducer;

export const getCurrentReviews = createSelector(getCurrentMovieState, (state) => state.data.reviews);
