import {createAction} from '@reduxjs/toolkit';
import { LoadAction, Genre, ChangeAction } from '../../const/enums';
import TMovie from '../../types/movie';

export const loadMovies = createAction<TMovie[]>(LoadAction.LoadMovies);

export const loadPromo = createAction<TMovie>(LoadAction.LoadPromo);

export const loadFavorites = createAction<TMovie[]>(LoadAction.LoadFavorites);

export const resetFavorites = createAction(ChangeAction.ResetFavorites);

export const toggleFavorite = createAction<TMovie>(ChangeAction.ToggleFavorite);

export const setGenre = createAction<Genre>(ChangeAction.ChangeGenre);

export const resetGenre = createAction(ChangeAction.ResetGenre);
