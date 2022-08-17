import { render, screen } from '@testing-library/react';
import { makeFakeMovie } from '../../../../utils/mocks';
import MovieTabOverview from './movie-tab-overview';

const mockMovie = makeFakeMovie();

describe('Component: MovieTabOverview', () => {
  it('should render correctly', () => {
    render(
      <MovieTabOverview {...mockMovie} />
    );

    expect(screen.getByText(mockMovie.rating)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.description)).toBeInTheDocument();
  });
});
