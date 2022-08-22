import { APIRoute } from '../../const/enums';
import { fetchAllMoviesAction, fetchPromoAction } from './main-page-api-actions';
import { APITestUtils, testUtils } from '../../utils/mocks/test-utils';
import { cleanup } from '@testing-library/react';

const {mockPromo, mockMovies} = testUtils();

const {mockAPI, mockStore} = APITestUtils();

describe('MainPage async actions', () => {
  beforeEach(cleanup);

  it('should dispatch Load_Promo when GET /promo', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockPromo);

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      fetchPromoAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_AllMovies when GET /movies', async () => {
    const store = mockStore();

    mockAPI
      .onGet(APIRoute.Movies)
      .reply(200, mockMovies);

    await store.dispatch(fetchAllMoviesAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchAllMoviesAction.pending.type,
      fetchAllMoviesAction.fulfilled.type
    ]);
  });
});
