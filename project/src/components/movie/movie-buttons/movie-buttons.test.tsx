import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { ComponentTestID } from '../../../const/enums';
import { createMockStore, makeFakeMovie } from '../../../utils/mocks';
import HistoryRouter from '../../history-route/history-route';
import MovieButtons from './movie-buttons';

const mockMovie = makeFakeMovie();

const history = createMemoryHistory();

describe('Component: MovieButtons', () => {
  const store = createMockStore();

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MovieButtons movie={mockMovie}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId(ComponentTestID.MovieButtons)).toBeInTheDocument();
  });
});
