import { render, screen } from '@testing-library/react';
import { makeFakeMovie } from '../../../utils/mocks';
import MovieCardDescription from './movie-card-description';

const mockMovie = makeFakeMovie();

describe('Component: MovieCardDescription', () => {
  it('should render correctly', () => {
    render(
      <MovieCardDescription movie={mockMovie}/>
    );

    expect(screen.getByText(mockMovie.name)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.genre)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.released)).toBeInTheDocument();
  });
});
