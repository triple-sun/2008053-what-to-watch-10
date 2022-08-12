import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getMoviePageState = (state: State) => state.similarMoviesReducer;

export const getSimilarMovies = createSelector(getMoviePageState, (state) => state.data);
