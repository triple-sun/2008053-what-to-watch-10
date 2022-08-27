import {render, screen} from '@testing-library/react';
import { ComponentTestID } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks/test-utils';
import { getCurrentGenres } from '../../../utils/utils';
import GenresList from './genres-list';

const {wrapper, mockMovies} = testUtils();

describe('Component: GenresList', () => {
  it('should render correctly', async () => {
    const mockCurrentGenres = getCurrentGenres(mockMovies);
    render(
      <GenresList currentGenres={mockCurrentGenres} handleGenreChange={jest.fn()}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.GenresList)).toBeInTheDocument();
  });
});
