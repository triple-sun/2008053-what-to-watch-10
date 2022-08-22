import { APIRoute } from '../../const/enums';
import { checkAuthAction, fetchUserInfoAction, fetchFavoritesAction, loginAction, logoutAction } from './user-api-actions';
import { redirectToRoute } from '../common/common-actions';
import { makeFakeAuthData, makeFakeMovies, makeFakeToken, makeFakeUserInfo } from '../../utils/mocks/mocks';
import { AUTH_TOKEN_KEY_NAME } from '../../services/token/token';
import { APITestUtils } from '../../utils/mocks/test-utils';

describe('User async actions', () => {
  const {mockAPI, mockStore} = APITestUtils();

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeAuthData = makeFakeAuthData();
    const fakeToken = makeFakeToken();

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: fakeToken});

    const store = mockStore();

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeAuthData));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, fakeToken);
  });

  it('should dispatch Load_UserInfo when GET /login', async () => {
    const mockUserInfo = makeFakeUserInfo();

    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, mockUserInfo);

    const store = mockStore();

    await store.dispatch(fetchUserInfoAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchUserInfoAction.pending.type,
      fetchUserInfoAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Favorites when GET /favorite', async () => {
    const mockFavorites = makeFakeMovies();

    mockAPI
      .onGet(APIRoute.Favorites)
      .reply(200, mockFavorites);

    const store = mockStore();

    await store.dispatch(fetchFavoritesAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavoritesAction.pending.type,
      fetchFavoritesAction.fulfilled.type
    ]);
  });

  it('should dispatch Logout and RedirectToRoute when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();

    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      redirectToRoute.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME);
  });
});
