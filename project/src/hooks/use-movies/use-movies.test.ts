import { renderHook} from '@testing-library/react';
import useMovies from './use-movies';
import { Genre, MovieList } from '../../const/enums';
import { filterMoviesByGenre, getMovieListLength, getMovieListTestId } from '../../utils/utils';
import { testUtils } from '../../utils/mocks/test-utils';
import { setGenre } from '../../store/main-page/main-page-actions';
import { datatype } from 'faker';
import { act } from 'react-dom/test-utils';

const {wrapper, mockStore, mockMovies, mockSelectedGenre, mockFavorites, mockSimilarMovies, mockMovieList} = testUtils();

const mockFilteredMovies = filterMoviesByGenre(mockMovies, mockSelectedGenre);

const mockMovieListSelector = {
  [MovieList.MainPage]: mockFilteredMovies,
  [MovieList.MoviePage]: mockSimilarMovies,
  [MovieList.MyListPage]: mockFavorites,
};

describe('Hook: useMovies', () => {
  beforeAll(() => mockStore.dispatch(setGenre(Genre.AllGenres)));

  it('should return movies', () => {
    const {result} = renderHook(() =>
      useMovies(mockMovieList), {wrapper}
    );

    expect(result.current.movies).toBeInstanceOf(Array);
  });

  it('should return testId and renderedMovieCount', async () => {
    const correctTestId = getMovieListTestId(mockMovieList);
    const correctMovieListLength = getMovieListLength(mockMovieList, mockFavorites);

    const {result} = renderHook(() =>
      useMovies(mockMovieList), {wrapper}
    );

    expect(result.current.testId).toBe(correctTestId);
    expect(result.current.renderedMovieCount).toBe(correctMovieListLength);
  });

  it('should return appropriate movies for provided list', () => {
    const {result} = renderHook(() =>
      useMovies(mockMovieList), {wrapper}
    );

    expect(result.current.movies).toBe(mockMovieListSelector[mockMovieList]);
  });

  it('should filter all movies based on selected genre', async () => {
    const {result} = renderHook(() =>
      useMovies(MovieList.MainPage), {wrapper}
    );

    expect(result.current.movies).toBe(mockFilteredMovies);
  });

  it('should return handlers', () => {
    const {result} = renderHook(() =>
      useMovies(mockMovieList), {wrapper}
    );

    const {
      handleMovieMouseOver,
      handleShowMoreButtonClick
    } = result.current;

    expect(handleMovieMouseOver).toBeInstanceOf(Function);
    expect(handleShowMoreButtonClick).toBeInstanceOf(Function);
  });

  it('should set activeMovieId when handleMouseOver is called', async () => {
    const mockActiveMovieId = datatype.number();

    const {result} = renderHook(() =>
      useMovies(MovieList.MainPage), {wrapper}
    );

    expect(result.current.activeMovieId).toBe(null);

    act(() => result.current.handleMovieMouseOver(mockActiveMovieId));

    expect(result.current.activeMovieId).toBe(mockActiveMovieId);
  });

  it('should update renderedMovieCount when showMoreButtonClick is called', async () => {
    const mockCount = datatype.number();

    const {result, result: {current: {renderedMovieCount}}} = renderHook(() =>
      useMovies(MovieList.MainPage), {wrapper}
    );

    const mockNewRenderedMovieCount = Math.min(renderedMovieCount + mockCount, mockMovies.length);

    act(() => result.current.handleShowMoreButtonClick(mockCount));

    expect(result.current.renderedMovieCount).toBe(mockNewRenderedMovieCount);
  });
});
