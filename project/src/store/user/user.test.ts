import { UNKNOWN_ACTION } from '../../const/const';
import { AuthStatus } from '../../const/enums';
import { userInitialState } from '../../const/initial-states';
import { testUtils } from '../../utils/mocks/test-utils';
import { checkAuthAction, fetchFavoritesAction, loginAction, logoutAction } from './user-api-actions';
import { user } from './user';

const {mockFavorites, mockUserInfo: userInfo} = testUtils();

describe('Reducer: user', () => {
  const state = userInitialState;

  it('without additional parameters should return initial state', () => {
    expect(user.reducer(undefined, {type: UNKNOWN_ACTION}))
      .toEqual(userInitialState);
  });

  describe('fetchFavoritesAction test', () => {
    it('should load favorites if fetchFavoritesAction was fulfilled', () => {
      expect(user.reducer(state, { type: fetchFavoritesAction.fulfilled.type, payload: mockFavorites }))
        .toEqual({...state, favorites: {...state.favorites, data: mockFavorites, isLoaded: true}});
    });
  });

  describe('checkAuthAction test', () => {
    it('should update authStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(user.reducer(state, { type: checkAuthAction.fulfilled.type, payload: userInfo }))
        .toEqual({...state, userInfo, authStatus: AuthStatus.Auth});
    });
    it('should update authStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(user.reducer(state, { type: checkAuthAction.rejected.type }))
        .toEqual({...state, authStatus: AuthStatus.NoAuth});
    });
  });

  describe('loginAction test', () => {
    it('should update authStatus to "AUTH" and load user info if loginAction fulfilled', () => {
      expect(user.reducer(state, { type: loginAction.fulfilled.type, payload: userInfo }))
        .toEqual({...state, userInfo, authStatus: AuthStatus.Auth});
    });
    it('should update authStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(user.reducer(state, { type: loginAction.rejected.type }))
        .toEqual({...state, authStatus: AuthStatus.NoAuth});
    });
  });

  describe('logoutAction test', () => {
    it('should update AuthStatus to "NO_AUTH" and reset user data if logoutAction fulfilled', () => {
      expect(user.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({...state, authStatus: AuthStatus.NoAuth});
    });
  });
});
