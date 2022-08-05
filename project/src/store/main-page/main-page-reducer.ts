import {createReducer} from '@reduxjs/toolkit';
import { Genre } from '../../const/enums';
import { MainPageInitialState } from '../../types/state';
import {loadFavorites, loadMovies, loadPromo, setGenre } from './main-page-actions';

const initialState: MainPageInitialState = {
  movies: {
    data: [],
    isDataLoaded: false
  },
  promo: {
    data: null,
    isDataLoaded: false
  },
  favorites: {
    data: [],
    isDataLoaded: false
  },
  selectedGenre: Genre.AllGenres,
};

const mainPageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies.data = action.payload;
      state.movies.isDataLoaded = true;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo.data = action.payload;
      state.promo.isDataLoaded = true;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites.data = action.payload;
    })
    .addCase(setGenre, (state, action) => {
      state.selectedGenre = action.payload;
    });
});

export default mainPageReducer;
