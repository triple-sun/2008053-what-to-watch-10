import {render, screen} from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, ComponentTestID, PageTestID } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import NotFoundPage from '../not-found-page/not-found-page';
import MoviePage from './movie-page';

const {mockCurrentMovie, wrapper} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentMovie.id,
  }),
}));

describe('Component: MoviePage', () => {
  it('should render correctly', async () => {
    render(
      <MoviePage />,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.MoviePageCard)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.SimilarMovies)).toBeInTheDocument();
  });

  it('should redirect to NotFoundPage when id is not correct', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({
        id: mockCurrentMovie.genre,
      }),
    }));

    render(
      <Routes>
        <Route
          path={AppRoute.Movies}
          element={<MoviePage />}
        />
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

