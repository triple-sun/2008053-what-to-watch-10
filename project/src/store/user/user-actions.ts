import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, UserAction, LoadAction } from '../../const/enums';
import TUserData from '../../types/user-data';

export const setAuthStatus = createAction<AuthorizationStatus>(UserAction.SetAuth);

export const loadUserData = createAction<TUserData>(LoadAction.LoadUserData);
