import { APIRoute } from '../../const/enums';
import { checkAuthAction, fetchFavoritesAction, loginAction, logoutAction, toggleFavoriteAction } from './user-api-actions';
import { redirectToRoute } from '../common/common-actions';
import { makeFakeMovie } from '../../utils/mocks/mocks';
import { AUTH_TOKEN_KEY_NAME } from '../../services/token/token';
import { APITestUtils, testUtils } from '../../utils/mocks/test-utils';

const {mockAPI, mockStore} = APITestUtils();

const {mockAuthData, mockToken, mockFavorites, mockUserInfo} = testUtils();

describe('User async actions', () => {
  it('should set authorization status to is «auth» and loadUserInfo when server returns 200', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, mockUserInfo);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch loginAction and RedirectToRoute when POST /login', async () => {
    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: mockToken});

    const store = mockStore();

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(mockAuthData));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith(AUTH_TOKEN_KEY_NAME, mockToken);
  });

  it('should dispatch fetchFavorites when GET /favorite', async () => {
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

  it('should dispatch toggleFavorite and fetchFavorites when POST /favorite/:id/', async () => {
    const mockFavorite = makeFakeMovie();
    const mockFavoriteStatus = Number(!mockFavorite.isFavorite);

    mockAPI
      .onPost(`${APIRoute.Favorites}/${mockFavorite.id}/${mockFavoriteStatus}`)
      .reply(200, mockFavorite);

    const store = mockStore();

    await store.dispatch(toggleFavoriteAction({id: mockFavorite.id, status: mockFavoriteStatus}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      toggleFavoriteAction.pending.type,
      fetchFavoritesAction.pending.type,
      toggleFavoriteAction.fulfilled.type,
    ]);
  });

  it('should dispatch Logout and RedirectToRoute when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(200);

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
