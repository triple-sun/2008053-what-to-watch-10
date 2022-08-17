import { render, screen } from '@testing-library/react';
import { makeFakeMovie } from '../../../../utils/mocks';
import MovieBackground from './movie-background';

const mockMovie = makeFakeMovie();

describe('Component: MovieBackground', () => {
  it('should render correctly', () => {
    render(
      <MovieBackground movie={mockMovie}/>
    );

    expect(screen.getByAltText(mockMovie.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockMovie.name)).toHaveAttribute('src', mockMovie.backgroundImage);
  });
});
