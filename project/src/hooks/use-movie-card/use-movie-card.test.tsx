import { renderHook} from '@testing-library/react';
import { testUtils } from '../../utils/mocks/test-utils';
import { datatype } from 'faker';
import { act } from 'react-dom/test-utils';
import useMovieCard from './use-movie-card';

const {wrapper} = testUtils();

describe('Hook: useMovieCard', () => {
  it('should return activeMovieId', async () => {
    const {result} = renderHook(() =>
      useMovieCard(), {wrapper}
    );

    expect(result.current.activeMovieId).toBe(null);
  });

  it('should return movie card mouse over handler', () => {
    const {result} = renderHook(() =>
      useMovieCard(), {wrapper}
    );

    const {
      handleMovieMouseOver,
    } = result.current;

    expect(handleMovieMouseOver).toBeInstanceOf(Function);
  });

  it('should set activeMovieId when handleMouseOver is called', async () => {
    const mockActiveMovieId = datatype.number();

    const {result} = renderHook(() =>
      useMovieCard(), {wrapper}
    );

    expect(result.current.activeMovieId).toBe(null);

    act(() => result.current.handleMovieMouseOver(mockActiveMovieId));

    expect(result.current.activeMovieId).toBe(mockActiveMovieId);
  });
});
