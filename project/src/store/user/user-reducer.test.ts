import { UNKNOWN_ACTION } from '../../const/const';
import { AuthStatus } from '../../const/enums';
import { userInitialState } from '../../const/initial-states';
import { makeFakeComment } from '../../utils/mocks/mocks';
import { testUtils } from '../../utils/mocks/test-utils';
import { addReviewAction, checkAuthAction, fetchFavoritesAction, fetchUserInfoAction, loginAction, logoutAction } from './user-api-actions';
import userReducer from './user-reducer';

const {mockFavorites: favorites, mockUserInfo: userInfo} = testUtils();

const mockReview = makeFakeComment();

describe('Reducer: user', () => {
  const state = userInitialState;

  it('without additional parameters should return initial state', () => {
    expect(userReducer(undefined, {type: UNKNOWN_ACTION}))
      .toEqual(userInitialState);
  });

  describe('fetchUserInfoAction test', () => {
    it('should load userInfo if fetchUserInfoAction was fulfilled', () => {
      expect(userReducer(state, { type: fetchUserInfoAction.fulfilled.type, payload: userInfo }))
        .toEqual({...state, userInfo});
    });
  });

  describe('fetchFavoritesAction test', () => {
    it('should load favorites if fetchFavoritesAction was fulfilled', () => {
      expect(userReducer(state, { type: fetchFavoritesAction.fulfilled.type, payload: favorites }))
        .toEqual({...state, favorites: {...state.favorites, data: favorites, isLoaded: true}});
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
        .toEqual({...state, authStatus: AuthStatus.NoAuth});
    });
  });

  describe('addReviewAction test', () => {
    it('should set isAddingReview to false if addReviewAction was fulfilled', () => {
      expect(userReducer(state, { type: addReviewAction.fulfilled.type, payload: mockReview }))
        .toEqual({...state, isAddingReview: false});
    });

    it('should set isAddingReview to false if addReviewAction was rejected', () => {
      expect(userReducer(state, { type: addReviewAction.rejected.type, payload: mockReview }))
        .toEqual({...state, isAddingReview: false});
    });

    it('should set isAddingReview to true if addReviewAction is pending', () => {
      expect(userReducer(state, { type: addReviewAction.pending.type, payload: mockReview }))
        .toEqual({...state, isAddingReview: true});
    });
  });
});
