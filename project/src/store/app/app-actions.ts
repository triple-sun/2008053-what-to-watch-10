import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AppAction } from '../../const/enums';

export const setDataLoadedStatus = createAction<boolean>(AppAction.SetDataLoaded);

export const redirectToRoute = createAction<AppRoute | string>(AppAction.RedirectToRoute);
