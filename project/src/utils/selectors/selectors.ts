import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getMainPageState = (state: State) => state.mainPageReducer;

export const getMoviePageState = (state: State) => state.moviePageReducer;

export const getCurrentMovieState = (state: State) => state.moviePlayerReducer;

export const getCurrentMovie = createSelector(getCurrentMovieState, (state) => state.data);

export const getIsMainDataLoading = createSelector(getMainPageState, (state) => state.isLoading);

export const getMovies = createSelector(getMainPageState, (state) => state.data.movies);

export const getPromo = createSelector(getMainPageState, (state) => state.data.promo);

export const getSelectedGenre = createSelector(getMainPageState, (state) => state.selectedGenre);

export const getSimilarMovies = createSelector(getMoviePageState, (state) => state.data.similarMovies);

export const getReviews = createSelector(getMoviePageState, (state) => state.data.currentReviews);

