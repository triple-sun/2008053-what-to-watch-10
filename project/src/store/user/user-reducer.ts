import {createReducer} from '@reduxjs/toolkit';
import { AuthStatus } from '../../const/enums';
import { userInitialState } from '../../const/initial-states';
import { checkAuthAction, fetchFavoritesAction, fetchUserInfoAction, loginAction, logoutAction } from './user-api-actions';

const userReducer = createReducer(userInitialState, (builder) => {
  builder
    .addCase(fetchUserInfoAction.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(fetchFavoritesAction.pending, (state) => {
      state.favorites.isLoaded = false;
    })
    .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
      state.favorites.data = action.payload;
      state.favorites.isLoaded = true;
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
      state.userInfo = userInitialState.userInfo;
      state.favorites.data = userInitialState.favorites.data;
      state.favorites.isLoaded = userInitialState.favorites.isLoaded;
      state.authStatus = AuthStatus.NoAuth;
    });
});

export default userReducer;
