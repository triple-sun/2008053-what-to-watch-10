import {createReducer} from '@reduxjs/toolkit';
import { Genre } from '../../const/enums';
import TMovie from '../../types/movie';
import { loadFavorites, loadMovies, loadPromo, resetFavorites, resetGenre, setGenre, setPromoLoadedStatus, toggleFavorite } from './main-page-actions';

type MainInitialState = {
  promo: {
    movie: TMovie | null;
    isLoaded: boolean
  };
  movies: TMovie[];
  favorites: TMovie[];
  selectedGenre: Genre;
};

const initialState: MainInitialState = {
  promo: {
    movie: null,
    isLoaded: true
  },
  movies: [],
  favorites: [],
  selectedGenre: Genre.AllGenres,
};

const mainPageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo.movie = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(toggleFavorite, (state, action) => {
      state.favorites = state.favorites.some((fav) => fav.id === action.payload.id)
        ? state.favorites.filter((fav) => fav.id !== action.payload.id)
        : [...state.favorites, action.payload];
    })
    .addCase(resetFavorites, (state) => {
      state.favorites = initialState.favorites;
    })
    .addCase(setGenre, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(resetGenre, (state) => {
      state.selectedGenre = initialState.selectedGenre;
    })
    .addCase(setPromoLoadedStatus, (state, action) => {
      state.promo.isLoaded = action.payload;
    });
});

export default mainPageReducer;
