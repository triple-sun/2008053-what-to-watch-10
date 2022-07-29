import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus, Genre } from '../const/enums';
import TMovie from '../types/movie';
import { changeGenre, loadMovies, loadPromo, requireAuthorization, resetGenre, setDataLoadedStatus, setError } from './main-page-actions';

type MainPageInitialState = {
  promo: TMovie | null;
  movies: TMovie[];
  selectedGenre: Genre;
  authorizationStatus: AuthorizationStatus;
  error: null | string;
  isDataLoaded: boolean;
};


const initialState: MainPageInitialState = {
  promo: null,
  movies: [],
  selectedGenre: Genre.AllGenres,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false,
};

const mainPageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload !== state.selectedGenre ? action.payload : state.selectedGenre;
    })
    .addCase(resetGenre, (state) => {
      state.selectedGenre = initialState.selectedGenre;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export default mainPageReducer;
