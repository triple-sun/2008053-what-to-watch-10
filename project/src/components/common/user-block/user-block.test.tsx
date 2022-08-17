import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import {Provider} from 'react-redux';
import { AuthStatus, ElementTestID } from '../../../const/enums';
import { createMockStore } from '../../../utils/mocks';
import HistoryRouter from '../../history-route/history-route';
import UserBlock from './user-block';

const history = createMemoryHistory();

describe('Component: UserBlock', () => {
  it('should render UserBlockNoAuth when user not authorized', () => {
    const store = createMockStore({authStatus: AuthStatus.NoAuth});

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserBlock />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId(ElementTestID.UserBlockNoAuth)).toBeInTheDocument();
  });

  it('should render UserBlockAuth when user is authorized', () => {
    const store = createMockStore({authStatus: AuthStatus.Auth});

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserBlock />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId(ElementTestID.UserBlockAuth)).toBeInTheDocument();
  });
});
