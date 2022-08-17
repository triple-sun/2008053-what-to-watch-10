import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { makeFakeMovie } from '../../../utils/mocks';
import HistoryRouter from '../../history-route/history-route';
import MovieCard from './movie-card';

const mockMovie = makeFakeMovie();

const mockActiveMovie = makeFakeMovie();

const history = createMemoryHistory();

describe('Component: MovieCard', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <MovieCard movie={mockMovie} activeMovieId={mockActiveMovie.id} handleMouseEvent={() => jest.fn()}/>
      </HistoryRouter>
    );

    expect(screen.getByText(mockMovie.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockMovie.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockMovie.name)).toHaveAttribute('src', mockMovie.previewImage);
  });
});
