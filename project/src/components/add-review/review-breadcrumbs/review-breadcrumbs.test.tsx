import { fireEvent, render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../const/const';
import { AppRoute, ComponentText, ElementTestID, PageTestID } from '../../../const/enums';
import MoviePage from '../../../pages/movie-page/movie-page';
import { testUtils } from '../../../utils/mocks';
import ReviewBreadcrumbs from './review-breadcrumbs';

const {currentMovie: mockMovie, wrapper, history} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockMovie.id,
  }),
}));

describe('Component: ReviewBreadcrumbs', () => {
  it('should render correctly', () => {
    render(
      <ReviewBreadcrumbs {...mockMovie}/>,
      {wrapper}
    );

    expect(screen.getByText((mockMovie.name))).toBeInTheDocument();
    expect(screen.getByText(ComponentText.AddReview)).toBeInTheDocument();
  });

  it('should redirect to /movies/:id when user clicks on movie name', async () => {
    history.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={`${AppRoute.Movies}${mockMovie.id}`}
          element={<MoviePage/>}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<ReviewBreadcrumbs {...mockMovie}/>}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.MoviePage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId(ElementTestID.MovieLink));

    expect(screen.getByTestId(PageTestID.MoviePage)).toBeInTheDocument();
  });
});
