import { UNKNOWN_ACTION } from '../../const/const';
import { AuthStatus } from '../../const/enums';
import { userInitialState } from '../../const/initial-states';
import { makeFakeMovies, makeFakeUserInfo } from '../../utils/mocks';
import { checkAuthAction, fetchFavoritesAction, fetchUserInfoAction, loginAction, logoutAction } from './user-api-actions';
import userReducer from './user-reducer';

const userInfo = makeFakeUserInfo();

const favorites = makeFakeMovies();

describe('Reducer: user', () => {
  const state = userInitialState;

  it('without additional parameters should return initial state', () => {
    expect(userReducer(undefined, {type: UNKNOWN_ACTION}))
      .toEqual(userInitialState);
  });

  describe('fetchUserInfoAction test', () => {
    it('should load userInfo if fetchUserInfoAction was fulfilled', () => {
      expect(userReducer(state, { type: fetchUserInfoAction.fulfilled.type, payload: userInfo }))
        .toEqual({...state, data: {...state.data, userInfo: userInfo}});
    });
  });

  describe('fetchFavoritesAction test', () => {
    it('should load favorites if fetchFavoritesAction was fulfilled', () => {
      expect(userReducer(state, { type: fetchFavoritesAction.fulfilled.type, payload: favorites }))
        .toEqual({...state, data: {...state.data, favorites: favorites}});
    });
  });

  describe('checkAuthAction test', () => {
    it('should update authStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userReducer(state, { type: checkAuthAction.fulfilled.type }))
        .toEqual({...state, authStatus: AuthStatus.Auth});
    });
    it('should update authStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userReducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({...state, authStatus: AuthStatus.NoAuth});
    });
  });

  describe('loginAction test', () => {
    it('should update authStatus to "AUTH" and load user info if loginAction fulfilled', () => {
      expect(userReducer(state, { type: loginAction.fulfilled.type, payload: userInfo }))
        .toEqual({...state, authStatus: AuthStatus.Auth});
    });
    it('should update authStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userReducer(state, { type: loginAction.rejected.type }))
        .toEqual({...state, authStatus: AuthStatus.NoAuth});
    });
  });

  describe('logoutAction test', () => {
    it('should update AuthStatus to "NO_AUTH" and reset user data if logoutAction fulfilled', () => {
      expect(userReducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({data: userInitialState.data, authStatus: AuthStatus.NoAuth});
    });
  });
});
