import {createAction} from '@reduxjs/toolkit';
import { Action, Genre } from '../const/enums';

export const changeGenre = createAction(Action.ChangeGenre, (genre) => ({
  payload: genre
}));

export const resetGenre = createAction(Action.ResetGenre);

export const setRenderedMovieCount = createAction(Action.SetRenderedMovieCount, (movies, count) => ({
  payload: {movies, count}
}));

export const resetRenderedMovieCount = createAction(Action.ResetRenderedMovieCount);

export const resetMovies = createAction(Action.ResetMovies);

export const getMovies = createAction(Action.GetMovies, (movies) => ({
  payload: movies
}));

export const filterMovies = createAction<{genre: Genre}>(Action.FilterMovies);


