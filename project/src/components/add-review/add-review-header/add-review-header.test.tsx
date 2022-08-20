import {render, screen} from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, ComponentTestID, PageTestID } from '../../../const/enums';
import NotFoundPage from '../../../pages/not-found-page/not-found-page';
import { testUtils } from '../../../utils/mocks';
import AddReviewHeader from './add-review-header';

const {currentMovie: mockMovie, movies: mockMovies, wrapper} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockMovie.id,
  }),
}));


describe('Component: AddReviewHeader', () => {
  it('should render correctly', () => {
    render(
      <AddReviewHeader />,
      {wrapper}
    );
    expect(screen.getByTestId(ComponentTestID.Breadcrumbs)).toBeInTheDocument();
  });

  it('should redirect to NotFoundPage when id is not correct', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({
        id: mockMovies.length,
      }),
    }));

    render(
      <Routes>
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.getByTestId(PageTestID.NotFoundPage)).toBeInTheDocument();
  });
});
