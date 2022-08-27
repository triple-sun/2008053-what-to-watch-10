import { fireEvent, render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../const/const';
import { AppRoute, ComponentTestID, ElementTestID, PageTestID } from '../../../const/enums';
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
      <MovieCard movie={mockCurrentMovie} activeMovieId={mockActiveMovie.id} handleMovieMouseOver={mockHandleMouseEvent}/>,
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
          element={<MovieCard movie={mockCurrentMovie} activeMovieId={mockActiveMovie.id} handleMovieMouseOver={mockHandleMouseEvent}/>}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.MoviePage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId(ElementTestID.MovieCardLink));

    expect(screen.getByTestId(PageTestID.MoviePage)).toBeInTheDocument();
  });

  it('should play movie preview when mouseOver and stop when mouseLeave', async () => {
    const {rerender} = render(
      <MovieCard movie={mockCurrentMovie} activeMovieId={null} handleMovieMouseOver={mockHandleMouseEvent}/>,
      {wrapper}
    );

    expect(screen.queryByTestId(ElementTestID.Video)).not.toBeInTheDocument();

    rerender(
      <MovieCard movie={mockCurrentMovie} activeMovieId={mockCurrentMovie.id} handleMovieMouseOver={mockHandleMouseEvent}/>
    );

    fireEvent.mouseEnter(screen.getByTestId(ComponentTestID.MovieCard));

    fireEvent(screen.getByTestId(ElementTestID.Video) as Element,
      new Event('loadeddata'));

    expect(screen.getByTestId(ElementTestID.Video)).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByTestId(ComponentTestID.MovieCard));

    rerender(
      <MovieCard movie={mockCurrentMovie} activeMovieId={null} handleMovieMouseOver={mockHandleMouseEvent}/>
    );

    expect(screen.queryByTestId(ElementTestID.Video)).not.toBeInTheDocument();

    expect(mockHandleMouseEvent).toBeCalledTimes(2);
  });
});
