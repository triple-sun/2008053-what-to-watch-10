import { render, screen } from '@testing-library/react';
import { ComponentTestID } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks/test-utils';
import MovieCardsList from './movie-cards-list';

const {wrapper, mockMovies} = testUtils();

describe('Component: MovieCardsList', () => {
  it('should render correctly', () => {
    render(
      <MovieCardsList movies={mockMovies} testId={ComponentTestID.MainMovies} />,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.MainMovies)).toBeInTheDocument();
  });
});
