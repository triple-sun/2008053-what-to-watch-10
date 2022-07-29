import {createAction} from '@reduxjs/toolkit';
import { Action } from '../const/enums';

export const changeGenre = createAction(Action.ChangeGenre, (genre) => ({
  payload: genre
}));

export const resetGenre = createAction(Action.ResetGenre);
