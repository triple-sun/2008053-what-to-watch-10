import {createAction} from '@reduxjs/toolkit';
import { Action, Genre } from '../const/enums';
import TMovie from '../types/movie';

export const changeGenre = createAction(Action.ChangeGenre, (genre) => ({
  payload: genre
}));

export const resetGenre = createAction(Action.ResetGenre);

export const getMovies = createAction(Action.GetMovies, (movies) => ({
  payload: movies
}));

export const filterMovies = createAction<{genre: Genre, movies: readonly TMovie[]}>(Action.FilterMovies);

