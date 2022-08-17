import {createReducer} from '@reduxjs/toolkit';
import { AuthStatus } from '../../const/enums';
import { userInitialState } from '../../const/initial-states';
import { checkAuthAction, fetchFavoritesAction, fetchUserInfoAction, loginAction, logoutAction } from './user-api-actions';

const userReducer = createReducer(userInitialState, (builder) => {
  builder
    .addCase(fetchUserInfoAction.fulfilled, (state, action) => {
      state.data.userInfo = action.payload;
    })
    .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
      state.data.favorites = action.payload;
    })
    .addCase(checkAuthAction.fulfilled, (state) => {
      state.authStatus = AuthStatus.Auth;
    })
    .addCase(checkAuthAction.rejected, (state) => {
      state.authStatus = AuthStatus.NoAuth;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authStatus = AuthStatus.Auth;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authStatus = AuthStatus.NoAuth;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authStatus = AuthStatus.NoAuth;
      state.data = userInitialState.data;
    });
});

export default userReducer;
