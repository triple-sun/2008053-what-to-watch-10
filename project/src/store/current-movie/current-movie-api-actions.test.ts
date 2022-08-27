import { APIRoute } from '../../const/enums';
import { addReviewAction, fetchCurrentMovieDataAction } from './current-movie-api-actions';
import { APITestUtils, testUtils } from '../../utils/mocks/test-utils';
import { redirectToRoute } from '../common/common-actions';
import { SIMILAR_MOVIES_URL_SUFFIX } from '../../const/const';

const {mockCurrentMovie, mockReviews, mockReview, mockSimilarMovies} = testUtils();

const {mockAPI, mockStore} = APITestUtils();

describe('CurrentMovie async actions', () => {
  it('should dispatch fetchCurrentMovieData when GET /movie/:id', async () => {
    const store = mockStore();

    mockAPI
      .onGet(`${APIRoute.Movies}/${mockCurrentMovie.id}`)
      .reply(200, mockCurrentMovie)
      .onGet(`${APIRoute.Review}/${mockCurrentMovie.id}`)
      .reply(200, mockReviews)
      .onGet(`${APIRoute.Movies}/${mockCurrentMovie.id}${SIMILAR_MOVIES_URL_SUFFIX}`)
      .reply(200, mockSimilarMovies);

    await store.dispatch(fetchCurrentMovieDataAction(mockCurrentMovie.id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCurrentMovieDataAction.pending.type,
      fetchCurrentMovieDataAction.fulfilled.type
    ]);
  });

  it('should dispatch addReview, fetchCurrentMovie and RedirectToRoute when POST /comment/:id', async () => {
    mockAPI
      .onPost(`${APIRoute.Review}/${mockCurrentMovie.id}`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(addReviewAction({...mockReview, id: mockCurrentMovie.id}));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      addReviewAction.pending.type,
      fetchCurrentMovieDataAction.pending.type,
      redirectToRoute.type,
      addReviewAction.fulfilled.type
    ]);
  });
});
