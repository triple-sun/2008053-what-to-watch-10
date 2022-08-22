import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getMainPageState = (state: State) => state.MAIN;

export const getIsMainDataLoaded = createSelector(getMainPageState, (state) => state.isLoaded);

export const getMovies = createSelector(getMainPageState, (state) => state.data.movies);

export const getPromo = createSelector(getMainPageState, (state) => state.data.promo);

export const getSelectedGenre = createSelector(getMainPageState, (state) => state.selectedGenre);
