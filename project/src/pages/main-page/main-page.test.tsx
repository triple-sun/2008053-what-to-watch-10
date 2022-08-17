import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import { ComponentTestID, ComponentText } from '../../const/enums';
import { createMockStore } from '../../utils/mocks';
import MainPage from './main-page';

const store = createMockStore();
const history = createMemoryHistory();

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId(ComponentTestID.PromoCard)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.MainMovies)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.GenresList)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.Catalog)).toBeInTheDocument();
  });
});
