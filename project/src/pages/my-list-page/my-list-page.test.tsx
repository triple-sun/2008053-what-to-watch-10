import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import { ComponentTestID, ComponentText } from '../../const/enums';
import { createMockStore } from '../../utils/mocks';
import MyListPage from './my-list-page';

describe('Component: MyListPage', () => {
  it('should render correctly', () => {
    const store = createMockStore({}, );
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MyListPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(ComponentText.Catalog)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.FavoriteMovies)).toBeInTheDocument();
  });
});
