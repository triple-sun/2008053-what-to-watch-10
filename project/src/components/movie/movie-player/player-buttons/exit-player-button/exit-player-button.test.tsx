import { fireEvent, render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../../../const/const';
import { AppRoute, ComponentText, PageTestID } from '../../../../../const/enums';
import MoviePage from '../../../../../pages/movie-page/movie-page';
import { testUtils } from '../../../../../utils/mocks/test-utils';
import ExitPlayerButton from './exit-player-button';

const {wrapper, mockHistory, mockCurrentMovie} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentMovie.id,
  }),
}));

describe('Component: ExitPlayerButton', () => {
  it('should render correctly', () => {
    render(
      <ExitPlayerButton id={mockCurrentMovie.id}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Exit)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.Exit)).toHaveAttribute('href', `${AppRoute.Movies}${mockCurrentMovie.id}`);
  });

  it('should redirect to /movies/:id when user clicks on ExitPlayerButton', async () => {
    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={`${AppRoute.Movies}${mockCurrentMovie.id}`}
          element={<MoviePage/>}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<ExitPlayerButton {...mockCurrentMovie}/>}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.MoviePage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(ComponentText.Exit));

    expect(screen.getByTestId(PageTestID.MoviePage)).toBeInTheDocument();
  });
});
