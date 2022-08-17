import { render, screen } from '@testing-library/react';
import { makeFakeMovie } from '../../../../utils/mocks';
import MovieTabDetails from './movie-tab-details';

const mockMovie = makeFakeMovie();

describe('Component: MovieTabDetails', () => {
  it('should render correctly', () => {
    render(
      <MovieTabDetails {...mockMovie} />
    );

    expect(screen.getByText(mockMovie.director)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.genre)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.released)).toBeInTheDocument();
  });
});
