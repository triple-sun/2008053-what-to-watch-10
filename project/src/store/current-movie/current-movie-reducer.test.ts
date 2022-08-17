import { UNKNOWN_ACTION } from '../../const/const';
import { currentMovieInitialState } from '../../const/initial-states';
import { makeFakeMovie, makeFakeMovies, makeFakeReviews } from '../../utils/mocks';
import { fetchCurrentMovieAction, fetchReviewsAction, fetchSimilarMoviesAction } from './current-movie-api-actions';
import currentMovieReducer from './current-movie-reducer';

const currentMovie = makeFakeMovie();
const similarMovies = makeFakeMovies();
const reviews = makeFakeReviews();

describe('Reducer: currentMovie', () => {
  const state = currentMovieInitialState;

  it('without additional parameters should return initial state', () => {
    expect(currentMovieReducer(undefined, {type: UNKNOWN_ACTION}))
      .toEqual(currentMovieInitialState);
  });

  describe('fetchCurrentMovieAction test', () => {
    it('should load current movie and set isLoading to false if fetchCurrentMovieAction was fulfilled', () => {
      expect(currentMovieReducer(state, { type: fetchCurrentMovieAction.fulfilled.type, payload: currentMovie }))
        .toEqual({...state, data: {...state.data, movie: currentMovie }, isLoading: false});
    });
  });

  describe('fetchReviewsAction test', () => {
    it('should load reviews if fetchReviewsAction was fulfilled', () => {
      expect(currentMovieReducer(state, { type: fetchReviewsAction.fulfilled.type, payload: reviews }))
        .toEqual({...state, data: {...state.data, reviews: reviews }});
    });
  });

  describe('fetchSimilarMoviesAction test', () => {
    it('should load similar movies if fetchSimilarMovies was fulfilled', () => {
      expect(currentMovieReducer(state, {type: fetchSimilarMoviesAction.fulfilled.type, payload: similarMovies}))
        .toEqual({...state, data: {...state.data, similar: similarMovies}});
    });
  });
});

