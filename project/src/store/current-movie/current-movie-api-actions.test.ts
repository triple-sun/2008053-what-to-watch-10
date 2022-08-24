import { APIRoute } from '../../const/enums';
import { addReviewAction, fetchCurrentMovieAction, fetchReviewsAction, fetchSimilarMoviesAction } from './current-movie-api-actions';
import { APITestUtils, testUtils } from '../../utils/mocks/test-utils';
import { redirectToRoute } from '../common/common-actions';

const {mockCurrentMovie, mockReviews, mockSimilarMovies, mockReview} = testUtils();

const {mockAPI, mockStore} = APITestUtils();

describe('CurrentMovie async actions', () => {
  it('should dispatch Load_CurrentMovie when GET /movie/:id', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${APIRoute.Movies}/${mockCurrentMovie.id}`)
      .reply(200, mockCurrentMovie);

    await store.dispatch(fetchCurrentMovieAction(mockCurrentMovie.id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCurrentMovieAction.pending.type,
      fetchCurrentMovieAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Reviews when GET /comments/:id', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${APIRoute.Review}/${mockCurrentMovie.id}`)
      .reply(200, mockReviews);

    await store.dispatch(fetchReviewsAction(mockCurrentMovie.id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_SimilarMovies when GET /films/:id/similar', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${APIRoute.Movies}/${mockCurrentMovie.id}/similar`)
      .reply(200, mockSimilarMovies);

    await store.dispatch(fetchSimilarMoviesAction(mockCurrentMovie.id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchSimilarMoviesAction.pending.type,
      fetchSimilarMoviesAction.fulfilled.type
    ]);
  });

  it('should dispatch addReview, fetchReviews, fetchCurrentMovie and RedirectToRoute when POST /comment/:id', async () => {
    mockAPI
      .onPost(`${APIRoute.Review}/${mockCurrentMovie.id}`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(addReviewAction({...mockReview, id: mockCurrentMovie.id}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      addReviewAction.pending.type,
      fetchReviewsAction.pending.type,
      fetchCurrentMovieAction.pending.type,
      redirectToRoute.type,
      addReviewAction.fulfilled.type
    ]);
  });
});
