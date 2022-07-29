import State from '../../types/state';

export const getMovies = (state: State) => state.movies;

export const getPromo = (state: State) => state.promo;

export const getSelectedGenre = (state: State) => state.selectedGenre;

export const getError = (state: State) => state.error;

export const getAuthStatus = (state: State) => state.authorizationStatus;
