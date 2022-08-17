import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { createAPI } from '../../services/api/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { APIRoute } from '../../const/enums';
import { State } from '../../types/state';
import { makeFakeMovies, makeFakeReviews } from '../../utils/mocks';
import { fetchCurrentMovieAction, fetchReviewsAction, fetchSimilarMoviesAction } from './current-movie-api-actions';
import { random } from 'faker';

const mockMovies = makeFakeMovies();
const mockCurrentMovie = random.arrayElement(mockMovies);
const mockSimilarMovies = mockMovies.filter((movie) => movie.genre === mockCurrentMovie.genre);
const mockReviews = makeFakeReviews();

describe('CurrentMovie async actions', () => {
  const api = createAPI();

  const mockAPI = new MockAdapter(api);

  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch Load_CurrentMovie when GET /movie/:id', async () => {
    mockAPI
      .onGet(`${APIRoute.Movies}/${mockCurrentMovie.id}`)
      .reply(200, mockCurrentMovie);

    const store = mockStore();

    await store.dispatch(fetchCurrentMovieAction(mockCurrentMovie.id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCurrentMovieAction.pending.type,
      fetchCurrentMovieAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Reviews when GET /comments/:id', async () => {
    mockAPI
      .onGet(`${APIRoute.Review}/${mockCurrentMovie.id}`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(mockCurrentMovie.id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_SimilarMovies when GET /films/:id/similar2', async () => {
    mockAPI
      .onGet(`${APIRoute.Movies}/${mockCurrentMovie.id}/similar`)
      .reply(200, mockSimilarMovies);

    const store = mockStore();

    await store.dispatch(fetchSimilarMoviesAction(mockCurrentMovie.id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchSimilarMoviesAction.pending.type,
      fetchSimilarMoviesAction.fulfilled.type
    ]);
  });
});
