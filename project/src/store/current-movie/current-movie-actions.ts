import {createAction} from '@reduxjs/toolkit';
import { ChangeAction } from '../../const/enums';

export const resetCurrentMovie = createAction(ChangeAction.ResetCurrentMovie);
