import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import { Reducer } from '../../const/enums';
import TMovie from '../../types/movie';
import { createMockStore } from '../../utils/mocks';
import MoviePlayerPage from './movie-player-page';
import thunk from 'redux-thunk';
import { createAPI } from '../../services/api/api';

const api = createAPI();
const middleware = [thunk.withExtraArgument(api)];

const store = createMockStore({}, middleware);
const history = createMemoryHistory();

const mockMovie = store.getState()[Reducer.CurrentMovie].data.movie as TMovie;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockMovie.id,
  }),
}));

beforeAll(() => {
  window.HTMLVideoElement.prototype.play = () => Promise.resolve();
  window.HTMLVideoElement.prototype.pause = jest.fn();
});

describe('Component: MoviePlayerPage', () => {
  it('should render correctly', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MoviePlayerPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(mockMovie.name)).toBeInTheDocument();
  });
});
