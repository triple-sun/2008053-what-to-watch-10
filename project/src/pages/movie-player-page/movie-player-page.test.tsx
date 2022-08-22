import {render, screen} from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, PageTestID } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import NotFoundPage from '../not-found-page/not-found-page';
import MoviePlayerPage from './movie-player-page';

const {mockCurrentMovie, mockVideoAPI, wrapper} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentMovie.id,
  }),
}));

beforeAll(mockVideoAPI);

describe('Component: MoviePlayerPage', () => {
  it('should render correctly', async () => {
    render(
      <MoviePlayerPage />,
      {wrapper}
    );

    expect(screen.getByText(mockCurrentMovie.name)).toBeInTheDocument();
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
          path={AppRoute.NotFound}
          element={<NotFoundPage />}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.getByTestId(PageTestID.NotFoundPage)).toBeInTheDocument();
  });
});
