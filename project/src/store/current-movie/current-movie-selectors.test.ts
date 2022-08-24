import { testUtils } from '../../utils/mocks/test-utils';
import { getCurrentMovie, getCurrentMovieState, getReviews, getSimilarMovies } from './current-movie-selectors';

const {mockStoreData} = testUtils();

describe('Selectors: currentMovie', () => {
  const state = mockStoreData;

  describe('getCurrentMovieState test', () => {
    it('should return state', () => {
      const selected = getCurrentMovieState(state);

      expect(selected)
        .toEqual(state.CURRENT);
    });
  });

  describe('getCurrentMovie test', () => {
    it('should return current movie', () => {
      const selected = getCurrentMovie(state);

      expect(selected)
        .toEqual(state.CURRENT.movie);
    });
  });


  describe('getReviews test', () => {
    it('should return reviews', () => {
      const selected = getReviews(state);

      expect(selected)
        .toEqual(state.CURRENT.reviews);
    });
  });

  describe('getSimilarMovies test', () => {
    it('should return similar movies', () => {
      const selected = getSimilarMovies(state);

      expect(selected)
        .toEqual(state.CURRENT.similar);
    });
  });
});

