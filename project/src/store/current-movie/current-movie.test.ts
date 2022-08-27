import { UNKNOWN_ACTION } from '../../const/const';
import { currentMovieInitialState } from '../../const/initial-states';
import { testUtils } from '../../utils/mocks/test-utils';
import { currentMovie } from './current-movie';
import { addReviewAction, fetchCurrentMovieDataAction } from './current-movie-api-actions';

const {mockCurrentMovie, mockReviews, mockReview, mockSimilarMovies} = testUtils();

const mockCurrentMovieData = {
  movie: mockCurrentMovie,
  reviews: mockReviews,
  similar: mockSimilarMovies
};

describe('Reducer: currentMovie', () => {
  const state = currentMovieInitialState;

  it('without additional parameters should return initial state', () => {
    expect(currentMovie.reducer(undefined, {type: UNKNOWN_ACTION}))
      .toEqual(currentMovieInitialState);
  });

  describe('fetchCurrentMovieAction test', () => {
    it('should set isLoading to true if fetchCurrentMovieAction is pending', () => {
      expect(currentMovie.reducer(state, { type: fetchCurrentMovieDataAction.pending.type}))
        .toEqual({...state, isLoaded: false});
    });

    it('should load current movie data and set isLoading to false if fetchCurrentMovieAction was fulfilled', () => {
      expect(currentMovie.reducer(state, { type: fetchCurrentMovieDataAction.fulfilled.type, payload: mockCurrentMovieData}))
        .toEqual({...state, data: mockCurrentMovieData, isLoaded: true});
    });
  });

  describe('addReviewAction test', () => {
    it('should set isAddingReview to false if addReviewAction was fulfilled', () => {
      expect(currentMovie.reducer(state, { type: addReviewAction.fulfilled.type, payload: mockReview }))
        .toEqual({...state, isAddingReview: false});
    });

    it('should set isAddingReview to false if addReviewAction was rejected', () => {
      expect(currentMovie.reducer(state, { type: addReviewAction.rejected.type, payload: mockReview }))
        .toEqual({...state, isAddingReview: false});
    });

    it('should set isAddingReview to true if addReviewAction is pending', () => {
      expect(currentMovie.reducer(state, { type: addReviewAction.pending.type, payload: mockReview }))
        .toEqual({...state, isAddingReview: true});
    });
  });
});

