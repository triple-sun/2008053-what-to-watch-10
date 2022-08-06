import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const/enums';
import TUserData from '../../types/user-data';
import { loadUserData, setAuthStatus } from './user-actions';

type UserInitialState = {
  authorizationStatus: AuthorizationStatus;
  userData: TUserData | null;
};

const initialState: UserInitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default userReducer;
