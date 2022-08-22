import { createAction } from '@reduxjs/toolkit';
import { UserAction } from '../../const/enums';

export const resetUserDataAction = createAction(UserAction.ResetUserData);
