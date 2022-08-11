import {createAction} from '@reduxjs/toolkit';
import { Genre, ChangeAction } from '../../const/enums';

export const setGenre = createAction<Genre>(ChangeAction.ChangeGenre);
