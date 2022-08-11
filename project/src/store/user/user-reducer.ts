import {createReducer} from '@reduxjs/toolkit';
import { AuthStatus } from '../../const/enums';
import { UserDataInitialState } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from './user-api-actions';

const initialState: UserDataInitialState = {
  data: {
    userInfo: null,
    favorites: [],
  },
  authStatus: AuthStatus.Unknown,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authStatus = AuthStatus.Auth;
      state.data = action.payload;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authStatus = AuthStatus.NoAuth;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authStatus = AuthStatus.Auth;
      state.data.userInfo = action.payload;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authStatus = AuthStatus.NoAuth;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authStatus = AuthStatus.NoAuth;
      state.data = initialState.data;
    });
});

export default userReducer;
