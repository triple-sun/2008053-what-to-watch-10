import { UNKNOWN_ACTION } from '../../const/const';
import { currentMovieInitialState } from '../../const/initial-states';
import { testUtils } from '../../utils/mocks/test-utils';
import { fetchCurrentMovieAction, fetchReviewsAction, fetchSimilarMoviesAction } from './current-movie-api-actions';
import currentMovieReducer from './current-movie-reducer';

const {mockCurrentMovie, mockReviews, mockSimilarMovies} = testUtils();

describe('Reducer: currentMovie', () => {
  const state = currentMovieInitialState;

  it('without additional parameters should return initial state', () => {
    expect(currentMovieReducer(undefined, {type: UNKNOWN_ACTION}))
      .toEqual(currentMovieInitialState);
  });

  describe('fetchCurrentMovieAction test', () => {
    it('should load current movie and set isLoading to false if fetchCurrentMovieAction was fulfilled', () => {
      expect(currentMovieReducer(state, { type: fetchCurrentMovieAction.fulfilled.type, payload: mockCurrentMovie }))
        .toEqual({...state, movie: mockCurrentMovie});
    });
  });

  describe('fetchReviewsAction test', () => {
    it('should load reviews if fetchReviewsAction was fulfilled', () => {
      expect(currentMovieReducer(state, { type: fetchReviewsAction.fulfilled.type, payload: mockReviews }))
        .toEqual({...state, reviews: {...state.reviews, data: mockReviews, isLoaded: true}});
    });
  });

  describe('fetchSimilarMoviesAction test', () => {
    it('should load similar movies if fetchSimilarMovies was fulfilled', () => {
      expect(currentMovieReducer(state, {type: fetchSimilarMoviesAction.fulfilled.type, payload: mockSimilarMovies}))
        .toEqual({...state, similar: {...state.reviews, data: mockSimilarMovies, isLoaded: true}});
    });
  });
});

