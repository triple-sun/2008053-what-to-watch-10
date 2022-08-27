import { cleanup, renderHook} from '@testing-library/react';
import { filterMoviesByGenre, getCurrentGenres, getMoviesToLoadCount } from '../../utils/utils';
import { testUtils } from '../../utils/mocks/test-utils';
import { setGenre } from '../../store/main-page/main-page-actions';
import { datatype } from 'faker';
import { act } from 'react-dom/test-utils';
import { ALL_GENRES } from '../../const/const';
import useMovies from '../use-movies/use-movies';

const {wrapper, mockStore, mockMovies, mockSelectedGenre } = testUtils();

describe('Hook: useMovies', () => {
  beforeEach(() => mockStore.dispatch(setGenre(ALL_GENRES)));
  beforeEach(cleanup);

  it('should return movies', () => {
    const {result} = renderHook(() =>
      useMovies(), {wrapper}
    );

    expect(result.current.movies).toBeInstanceOf(Array);
  });

  it('should return current genres', () => {
    const mockCurrentGenres = getCurrentGenres(mockMovies);
    const {result} = renderHook(() =>
      useMovies(), {wrapper}
    );

    const {currentGenres} = result.current;

    expect(currentGenres).toBeInstanceOf(Array);
    expect(currentGenres).toStrictEqual(mockCurrentGenres);
  });

  it('should return show more button click and genre click handlers', () => {
    const {result} = renderHook(() =>
      useMovies(), {wrapper}
    );

    expect(result.current.handleShowMoreButtonClick).toBeInstanceOf(Function);
    expect(result.current.handleGenreChange).toBeInstanceOf(Function);

  });

  it('should return moviesToLoadCount', async () => {
    const mockFilteredMovies = filterMoviesByGenre(mockMovies, mockSelectedGenre);
    const {result} = renderHook(() =>
      useMovies(), {wrapper}
    );

    const correctMoviesToLoadCount = getMoviesToLoadCount(mockFilteredMovies, result.current.renderedMovieCount);

    expect(result.current.moviesToLoadCount).toBe(correctMoviesToLoadCount);
  });


  it('should filter movies based on selected genre', async () => {
    const mockFilteredMovies = filterMoviesByGenre(mockMovies, mockSelectedGenre);

    const {result} = renderHook(() =>
      useMovies(), {wrapper}
    );

    expect(result.current.movies[1]).toBe(mockFilteredMovies[1]);
  });

  it('should update renderedMovieCount when showMoreButtonClick is called', async () => {
    const mockCount = datatype.number();

    const {result, result: {current: {renderedMovieCount}}} = renderHook(() =>
      useMovies(), {wrapper}
    );

    const mockNewRenderedMovieCount = Math.min(renderedMovieCount + mockCount, mockMovies.length);

    act(() => result.current.handleShowMoreButtonClick(mockCount));

    expect(result.current.renderedMovieCount).toBe(mockNewRenderedMovieCount);
  });
});
