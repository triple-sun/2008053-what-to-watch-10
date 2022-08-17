import {Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import PrivateRoute from './private-route';
import { AppRoute, AuthStatus } from '../../../const/enums';
import { createMockStore } from '../../../utils/mocks';
import HistoryRouter from '../../history-route/history-route';

const MOCK_PRIVATE_ROUTE = '/private';

const PUBLIC_ROUTE_MOCK_TEXT = 'Public Route';
const PRIVATE_ROUTE_MOCK_TEXT = 'Private Route';

const mockPublicRouteElement = <h1>{PUBLIC_ROUTE_MOCK_TEXT}</h1>;
const mockPrivateRouteElement = <h1>{PRIVATE_ROUTE_MOCK_TEXT}</h1>;

const history = createMemoryHistory();

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    history.push(MOCK_PRIVATE_ROUTE);
  });

  it('should render component for public route, when user not authorized', () => {
    const store = createMockStore({authStatus: AuthStatus.NoAuth});

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Login}
              element={mockPublicRouteElement}
            />
            <Route
              path={MOCK_PRIVATE_ROUTE}
              element={
                <PrivateRoute>
                  {mockPrivateRouteElement}
                </PrivateRoute>
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(PUBLIC_ROUTE_MOCK_TEXT)).toBeInTheDocument();
    expect(screen.queryByText(PRIVATE_ROUTE_MOCK_TEXT)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const store = createMockStore({authStatus: AuthStatus.Auth});

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Login}
              element={mockPublicRouteElement}
            />
            <Route
              path={MOCK_PRIVATE_ROUTE}
              element={
                <PrivateRoute>
                  {mockPrivateRouteElement}
                </PrivateRoute>
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(PRIVATE_ROUTE_MOCK_TEXT)).toBeInTheDocument();
    expect(screen.queryByText(PUBLIC_ROUTE_MOCK_TEXT)).not.toBeInTheDocument();
  });
});
