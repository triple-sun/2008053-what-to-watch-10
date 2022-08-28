import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpace } from '../../const/enums';
import { userInitialState } from '../../const/initial-states';
import { checkAuthAction, fetchFavoritesAction, loginAction, logoutAction } from './user-api-actions';

export const user = createSlice({
  name: NameSpace.User,
  initialState: userInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.favorites.isLoaded = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites.data = action.payload;
        state.favorites.isLoaded = true;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userInfo = action.payload;
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
  }
});
