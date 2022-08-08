import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getAppState = (state: State) => state.appReducer;

export const getMainPageState = (state: State) => state.mainPageReducer;

export const getMoviePageState = (state: State) => state.moviePageReducer;

export const getUserState = (state: State) => state.userReducer;

export const getIsDataLoaded = createSelector(getAppState, (state) => state.isDataLoaded);

export const getMovies = createSelector(getMainPageState, (state) => state.movies);

export const getFavorites = createSelector(getMainPageState, (state) => state.favorites);

export const getPromo = createSelector(getMainPageState, (state) => state.promo);

export const getSelectedGenre = createSelector(getMainPageState, (state) => state.selectedGenre);

export const getCurrentMovie = createSelector(getMoviePageState, (state) => state.currentMovie);

export const getSimilarMovies = createSelector(getMoviePageState, (state) => state.similarMovies);

export const getReviews = createSelector(getMoviePageState, (state) => state.currentMovie.reviews);

export const getAuthStatus = createSelector(getUserState, (state) => state.authorizationStatus);

export const getUserData = createSelector(getUserState, (state) => state.userData);
