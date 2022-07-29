import {createAction} from '@reduxjs/toolkit';
import { Action, AuthorizationStatus, Genre } from '../const/enums';
import TMovie from '../types/movie';

export const loadMovies = createAction<TMovie[]>(Action.LoadMovies);

export const loadPromo = createAction<TMovie>(Action.LoadPromo);

export const changeGenre = createAction<Genre>(Action.ChangeGenre);

export const resetGenre = createAction(Action.ResetGenre);

export const requireAuthorization = createAction<AuthorizationStatus>(Action.ReqAuth);

export const setError = createAction<string | null>(Action.SetError);

export const setDataLoadedStatus = createAction<boolean>(Action.SetDataLoaded);
