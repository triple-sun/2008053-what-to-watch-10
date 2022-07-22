import {createReducer} from '@reduxjs/toolkit';
import { MOVIE_CARD_MAIN_COUNT } from '../const/const';
import { Genre } from '../const/enums';
import mockMovies from '../mocks/movies';
import mockMoviePromo from '../mocks/promo';
import { changeGenre, filterMovies, getMovies, setRenderedMovieCount, resetGenre, resetRenderedMovieCount, resetMovies } from './action';

const initialState = {
  promo: mockMoviePromo,
  movies: mockMovies,
  allMovies: mockMovies,
  filteredMovies: mockMovies,
  selectedGenre: Genre.AllGenres,
  myMovies: mockMovies.filter((movie) => movie.isFavorite),
  renderedMoviesCount: MOVIE_CARD_MAIN_COUNT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(resetGenre, (state) => {
      state.selectedGenre = initialState.selectedGenre;
    })
    .addCase(getMovies, (state, action) => {
      state.allMovies = action.payload;
    })
    .addCase(filterMovies, (state, action) => {
      state.filteredMovies = action.payload.genre === Genre.AllGenres ? state.allMovies : state.allMovies.filter((movie) => movie.genre === action.payload.genre);
      state.renderedMoviesCount = Math.min(state.filteredMovies.length, MOVIE_CARD_MAIN_COUNT);
    })
    .addCase(setRenderedMovieCount, (state, action) => {
      state.renderedMoviesCount = Math.min(state.renderedMoviesCount + action.payload.count, action.payload.movies.length);
    })
    .addCase(resetRenderedMovieCount, (state) => {
      state.renderedMoviesCount = initialState.renderedMoviesCount;
    })
    .addCase(resetMovies, (state) => {
      state.renderedMoviesCount = initialState.renderedMoviesCount;
      state.selectedGenre = initialState.selectedGenre;
      state.filteredMovies = initialState.filteredMovies;
    });
});

export {reducer};
