import { testUtils } from '../../utils/mocks/test-utils';
import { getUserState, getAuthStatus, getFavorites, getUserInfo } from './user-selectors';

const {mockStoreData} = testUtils();

describe('Selectors: user', () => {
  const state = mockStoreData;

  describe('getUserState test', () => {
    it('should return state', () => {
      const selected = getUserState(state);

      expect(selected)
        .toEqual(state.USER);
    });
  });

  describe('getAuthStatus test', () => {
    it('should return auth status', () => {
      const selected = getAuthStatus(state);

      expect(selected)
        .toEqual(state.USER.authStatus);
    });
  });

  describe('getFavorites test', () => {
    it('should return favorites state', () => {
      const selected = getFavorites(state);

      expect(selected)
        .toEqual(state.USER.favorites.data);
    });
  });

  describe('getUserInfo test', () => {
    it('should return user info', () => {
      const selected = getUserInfo(state);

      expect(selected)
        .toEqual(state.USER.userInfo);
    });
  });
});

