import { cleanup, renderHook} from '@testing-library/react';
import { testUtils } from '../../utils/mocks/test-utils';
import useCurrentMovie from './use-current-movie';

const {wrapper, mockCurrentMovie, mockReviews, mockSimilarMovies} = testUtils();

describe('Hook: useCurrentMovie', () => {
  beforeEach(cleanup);

  it('should return current movie', () => {
    const {result} = renderHook(() =>
      useCurrentMovie(), {wrapper}
    );

    expect(result.current.movie).toBe(mockCurrentMovie);
  });

  it('should return reviews and similarMovies', () => {
    const {result} = renderHook(() =>
      useCurrentMovie(), {wrapper}
    );

    expect(result.current.reviews).toBe(mockReviews);
    expect(result.current.similarMovies).toBe(mockSimilarMovies);
  });
});
