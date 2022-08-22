import {renderHook} from '@testing-library/react';
import { Genre } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import useGenres from './use-genres';

const {mockMovies, wrapper} = testUtils();

describe('Hook: useGenres', () => {
  it('should return currentGenres for movies', () => {
    const mockGenres = [Genre.AllGenres, ...new Set(mockMovies.map((movie) => movie.genre))] as Genre[];

    const {result} = renderHook(() => useGenres(), {wrapper});

    expect(result.current.currentGenres).toStrictEqual(mockGenres);
  });
});
