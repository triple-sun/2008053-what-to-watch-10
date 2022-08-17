import {renderHook} from '@testing-library/react';
import { Genre, Reducer } from '../../const/enums';
import { createMockStore } from '../../utils/mocks';
import { getWrapper } from '../../utils/utils';
import useGenres from './use-genres';
import { MainPageState } from '../../types/state';

describe('Hook: useGenres', () => {
  const mockStore = createMockStore();

  const wrapper = getWrapper(mockStore);

  it('should return array', () => {
    const {result} = renderHook(() =>
      useGenres(), {wrapper}
    );

    expect(result.current).toBeInstanceOf(Array);
  });

  it('should return genres for available movies', () => {
    const {data: {movies}} = mockStore.getState()[Reducer.MainPage] as MainPageState;

    const mockGenres = [Genre.AllGenres, ...new Set(movies.map((movie) => movie.genre))] as Genre[];

    const {result} = renderHook(() =>
      useGenres(), {wrapper}
    );

    expect(result.current).toStrictEqual(mockGenres);
  });
});
