import { createSelector } from 'reselect';
import { State } from '../../types/state';

export const getUserState = (state: State) => state.userReducer;

export const getAuthStatus = createSelector(getUserState, (state) => state.authStatus);

export const getUserInfo = createSelector(getUserState, (state) => state.data.userInfo);

export const getFavorites = createSelector(getUserState, (state) => state.data.favorites);
