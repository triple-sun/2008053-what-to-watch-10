import { APIRoute } from '../../const/enums';
import { fetchMainPageDataAction } from './main-page-api-actions';
import { APITestUtils, testUtils } from '../../utils/mocks/test-utils';
import { cleanup } from '@testing-library/react';

const {mockPromo, mockMovies} = testUtils();

const {mockAPI, mockStore} = APITestUtils();

describe('MainPage async actions', () => {
  beforeEach(cleanup);

  it('should dispatch Load_AllMovies when GET /movies', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Movies)
      .reply(200, mockMovies);

    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockPromo);


    await store.dispatch(fetchMainPageDataAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchMainPageDataAction.pending.type,
      fetchMainPageDataAction.fulfilled.type
    ]);
  });
});
