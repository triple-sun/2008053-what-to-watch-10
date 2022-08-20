import {renderHook} from '@testing-library/react';
import { Genre } from '../../const/enums';
import { testUtils } from '../../utils/mocks';
import useGenres from './use-genres';

const {movies, wrapper} = testUtils();

describe('Hook: useGenres', () => {
  it('should return currentGenres for movies', () => {
    const mockGenres = [Genre.AllGenres, ...new Set(movies.map((movie) => movie.genre))] as Genre[];

    const {result} = renderHook(() => useGenres(), {wrapper});

    expect(result.current.currentGenres).toStrictEqual(mockGenres);
  });
});
