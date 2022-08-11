import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const/enums';
import { UserDataInitialState } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from './user-api-actions';

const initialState: UserDataInitialState = {
  data: {
    userInfo: null,
    favorites: [],
  },
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.data = action.payload;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.data.userInfo = action.payload;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.data = initialState.data;
    });
});

export default userReducer;
