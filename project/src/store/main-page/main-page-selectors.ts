import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getMainPageState = (state: State) => state.mainPageReducer;

export const getMoviePageState = (state: State) => state.moviePageReducer;

export const getIsMainDataLoading = createSelector(getMainPageState, (state) => state.isLoading);

export const getMovies = createSelector(getMainPageState, (state) => state.data.movies);

export const getPromo = createSelector(getMainPageState, (state) => state.data.promo);

export const getSelectedGenre = createSelector(getMainPageState, (state) => state.selectedGenre);
