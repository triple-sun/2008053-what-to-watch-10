import { createAction } from '@reduxjs/toolkit';
import { AppAction, AppRoute } from '../../const/enums';

export const redirectToRoute = createAction<AppRoute | string>(AppAction.RedirectToRoute);
