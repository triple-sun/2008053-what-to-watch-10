import { fireEvent, render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../const/const';
import { AppRoute, ElementTestID, PageTestID } from '../../../const/enums';
import MoviePage from '../../../pages/movie-page/movie-page';
import { makeFakeMovie } from '../../../utils/mocks/mocks';
import { testUtils } from '../../../utils/mocks/test-utils';
import MovieCard from './movie-card';

const {wrapper, mockCurrentMovie, mockHistory, mockVideoAPI} = testUtils();

const mockActiveMovie = makeFakeMovie();

const mockHandleMouseEvent = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentMovie.id,
  }),
}));

beforeAll(mockVideoAPI);

describe('Component: MovieCard', () => {
  it('should render correctly', async () => {
    render(
      <MovieCard movie={mockCurrentMovie} activeMovieId={mockActiveMovie.id} handleMouseEvent={mockHandleMouseEvent}/>,
      {wrapper}
    );

    expect(screen.getByText(mockCurrentMovie.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockCurrentMovie.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockCurrentMovie.name)).toHaveAttribute('src', mockCurrentMovie.previewImage);
  });

  it('should redirect to /movies/:id when user clicks on movie name', async () => {
    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={`${AppRoute.Movies}${mockCurrentMovie.id}`}
          element={<MoviePage/>}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<MovieCard movie={mockCurrentMovie} activeMovieId={mockActiveMovie.id} handleMouseEvent={mockHandleMouseEvent}/>}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.MoviePage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId(ElementTestID.MovieCardLink));

    expect(screen.getByTestId(PageTestID.MoviePage)).toBeInTheDocument();
  });

  it('should play movie preview if movie is activeMovie', async () => {
    render(
      <MovieCard movie={mockActiveMovie} activeMovieId={mockActiveMovie.id} handleMouseEvent={mockHandleMouseEvent}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.Video)).toBeInTheDocument();
  });
});
