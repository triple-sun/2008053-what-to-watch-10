import {renderHook} from '@testing-library/react';
import useMovies from './use-movies';
import { random } from 'faker';
import { MovieList } from '../../const/enums';
import { testUtils } from '../../utils/mocks';
import { filterMoviesByGenre } from '../../utils/utils';

describe('Hook: useMovies', () => {
  const {wrapper, movies, selectedGenre, favorites, similarMovies} = testUtils();

  const fakeMovieList = random.objectElement(MovieList) as MovieList;

  const filteredMovies = filterMoviesByGenre(movies, selectedGenre);

  const fakeMovieListSelector = {
    [MovieList.MainPage]: filteredMovies,
    [MovieList.MoviePage]: similarMovies,
    [MovieList.MyListPage]: favorites,
  };

  it('should return array', () => {
    const {result} = renderHook(() =>
      useMovies(fakeMovieList), {wrapper}
    );

    expect(result.current).toBeInstanceOf(Array);
  });

  it('should return appropriate movies for provided list', () => {
    const {result} = renderHook(() =>
      useMovies(fakeMovieList), {wrapper}
    );

    expect(result.current).toBe(fakeMovieListSelector[fakeMovieList]);
  });

  it('should filter all movies based on selected genre', () => {
    const {result} = renderHook(() =>
      useMovies(MovieList.MainPage), {wrapper}
    );

    expect(result.current).toBe(filteredMovies);
  });

});
