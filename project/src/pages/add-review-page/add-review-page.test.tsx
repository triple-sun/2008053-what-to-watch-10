import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import { ComponentTestID, Reducer } from '../../const/enums';
import { createAPI } from '../../services/api/api';
import { createMockStore } from '../../utils/mocks';
import AddReviewPage from './add-review-page';
import thunk from 'redux-thunk';
import TMovie from '../../types/movie';

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

describe('Component: AddReviewPage', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddReviewPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId(ComponentTestID.AddReviewForm)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.AddReviewHeader)).toBeInTheDocument();
  });
});
