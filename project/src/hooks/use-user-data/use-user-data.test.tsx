import { cleanup, renderHook} from '@testing-library/react';
import { AuthStatus } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import { act } from 'react-dom/test-utils';
import useUserData from './use-user-data';
import { FAVORITE_SINGLE_STEP } from '../../const/const';
import { mockStoreDefaultProps } from '../../utils/mocks/mocks';

const {wrapper, mockCurrentMovie, mockFavorites, mockUserInfo} = testUtils();

describe('Hook: useUserData', () => {
  beforeEach(cleanup);

  it('should return favorites', () => {
    const {result} = renderHook(() =>
      useUserData(), {wrapper}
    );

    expect(result.current.favorites).toBe(mockFavorites);
  });

  it('should return userInfo', () => {
    const {result} = renderHook(() =>
      useUserData(), {wrapper}
    );

    expect(result.current.userInfo).toBe(mockUserInfo);
  });

  it('should return isAuth if user is authorized', () => {
    const {result} = renderHook(() =>
      useUserData(), {wrapper}
    );

    expect(result.current.isAuth).toBe(true);
  });

  it('should return !isAuth if user is not authorized', () => {
    const noAuthWrapper = testUtils({...mockStoreDefaultProps, authStatus: AuthStatus.NoAuth}).wrapper;

    const {result} = renderHook(() =>
      useUserData(), {wrapper: noAuthWrapper}
    );

    expect(result.current.isAuth).toBe(false);
  });

  it('should return isFavorite and favoritesCount', async () => {
    const {result} = renderHook(() =>
      useUserData(mockCurrentMovie.id), {wrapper}
    );

    expect(result.current.isFavorite).toBe(mockCurrentMovie.isFavorite);
    expect(result.current.favoritesCount).toBe(mockFavorites.length);
  });

  it('should return handlers', () => {
    const {result} = renderHook(() =>
      useUserData(mockCurrentMovie.id), {wrapper}
    );

    const {handleFavoriteAction, handleLogoutClick} = result.current;

    expect(handleFavoriteAction).toBeInstanceOf(Function);
    expect(handleLogoutClick).toBeInstanceOf(Function);
  });

  it('should set isFavorite when handleFavoriteAction is called', async () => {
    const {result} = renderHook(() =>
      useUserData(mockCurrentMovie.id), {wrapper}
    );

    const correctCount = mockCurrentMovie.isFavorite
      ? result.current.favoritesCount - FAVORITE_SINGLE_STEP
      : result.current.favoritesCount + FAVORITE_SINGLE_STEP;

    expect(result.current.favoritesCount).toBe(mockFavorites.length);

    act(() => result.current.handleFavoriteAction());

    expect(result.current.favoritesCount).toBe(correctCount);
  });

  it('should update favoritesCount when handleFavoriteAction is called', async () => {
    const {result} = renderHook(() =>
      useUserData(), {wrapper}
    );

    expect(result.current.favoritesCount).toBe(mockFavorites.length);

    act(() => result.current.handleFavoriteAction());

    expect(result.current.favoritesCount).toBe(mockFavorites.length);
  });
});
