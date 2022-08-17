import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ComponentText } from '../../../../const/enums';
import { makeFakeMovie } from '../../../../utils/mocks';
import HistoryRouter from '../../../history-route/history-route';
import PlayMovieButton from './play-movie-button';

const mockMovie = makeFakeMovie();

const history = createMemoryHistory();

describe('Component: PlayMovieButton', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <PlayMovieButton {...mockMovie}/>
      </HistoryRouter>
    );

    expect(screen.getByText(ComponentText.Play)).toBeInTheDocument();
  });
});
