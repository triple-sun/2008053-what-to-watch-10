import {render, screen} from '@testing-library/react';
import { random } from 'faker';
import { createMemoryHistory } from 'history';
import { MOVIE_TAB_ACTIVE_CLASS } from '../../../../const/const';
import { ElementTestID, MovieNavigation } from '../../../../const/enums';
import HistoryRouter from '../../../history-route/history-route';
import MovieTabNavigation from './movie-tab-navigation';

const history = createMemoryHistory();

describe('Component: MovieTabNavigation', () => {
  const mockTabName = random.objectElement(MovieNavigation) as MovieNavigation;

  it('should render correctly', () => {
    const mockActiveTabName = random.objectElement(MovieNavigation) as MovieNavigation;

    render(
      <HistoryRouter history={history}>
        <MovieTabNavigation name={mockTabName} activeTab={mockActiveTabName} handleTabEvent={() => jest.fn()}/>
      </HistoryRouter>
    );

    expect(screen.getByText(mockTabName)).toBeInTheDocument();
    expect(screen.getByText(mockTabName)).toHaveAttribute('href', `/${mockTabName.toLowerCase()}`);
  });

  it('should have active class if tab is activeTab', () => {
    render(
      <HistoryRouter history={history}>
        <MovieTabNavigation name={mockTabName} activeTab={mockTabName} handleTabEvent={() => jest.fn()}/>
      </HistoryRouter>
    );

    expect(screen.getByTestId(ElementTestID.MovieTab)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestID.MovieTab)).toHaveClass(MOVIE_TAB_ACTIVE_CLASS);
  });

  it('should not have active class if tab is activeTab', () => {
    render(
      <HistoryRouter history={history}>
        <MovieTabNavigation name={MovieNavigation.Details} activeTab={MovieNavigation.Overview} handleTabEvent={() => jest.fn()}/>
      </HistoryRouter>
    );

    expect(screen.getByTestId(ElementTestID.MovieTab)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestID.MovieTab)).not.toHaveClass(MOVIE_TAB_ACTIVE_CLASS);
  });
});
