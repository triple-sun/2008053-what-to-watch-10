import { Genre } from '../../const/enums';
import State from '../../types/state';

export const getMovies = (state: State) => state.movies;

export const getPromo = (state: State) => state.promo;

export const getMoviesByGenre = (state: State) => state.selectedGenre === Genre.AllGenres ? state.movies : state.movies.filter((movie) => movie.genre === state.selectedGenre);

export const getSelectedGenre = (state: State) => state.selectedGenre;
