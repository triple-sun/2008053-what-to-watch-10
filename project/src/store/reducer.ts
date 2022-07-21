import {createReducer} from '@reduxjs/toolkit';
import { Genre } from '../const/enums';
import mockMovies from '../mocks/movies';
import { changeGenre, filterMovies, getMovies, resetGenre } from './action';

const initialState = {
  movies: mockMovies,
  filteredMovies: mockMovies,
  selectedGenre: Genre.AllGenres,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(resetGenre, (state) => {
      state.selectedGenre = Genre.AllGenres;
    })
    .addCase(getMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(filterMovies, (state, action) => {
      state.filteredMovies = action.payload.genre === Genre.AllGenres ? state.movies : state.movies.filter((movie) => movie.genre === action.payload.genre);
    });
});

export {reducer};
