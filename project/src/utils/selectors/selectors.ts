import State from '../../types/state';

export const getMovies = (state: State) => state.movies;

export const getPromo = (state: State) => state.promo;

export const getSelectedGenre = (state: State) => state.selectedGenre;
