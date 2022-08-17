import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { createAPI } from '../../services/api/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { APIRoute } from '../../const/enums';
import { State } from '../../types/state';
import { makeFakeMovies } from '../../utils/mocks';
import { random } from 'faker';
import { fetchAllMoviesAction, fetchPromoAction } from './main-page-api-actions';

const mockMovies = makeFakeMovies();
const mockPromo = random.arrayElement(mockMovies);

describe('MainPage async actions', () => {
  const api = createAPI();

  const mockAPI = new MockAdapter(api);

  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch Load_Promo when GET /promo', async () => {
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockPromo);

    const store = mockStore();

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      fetchPromoAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_AllMovies when GET /movies', async () => {
    mockAPI
      .onGet(APIRoute.Movies)
      .reply(200, mockMovies);

    const store = mockStore();

    await store.dispatch(fetchAllMoviesAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchAllMoviesAction.pending.type,
      fetchAllMoviesAction.fulfilled.type
    ]);
  });
});
