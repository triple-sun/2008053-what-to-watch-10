import {Routes, Route} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import PrivateRoute from './private-route';
import { AppRoute, AuthStatus } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks/test-utils';
import { makeFakeElement } from '../../../utils/mocks/mocks';

const MOCK_PRIVATE_ROUTE = '/private';

const PUBLIC_ROUTE_MOCK_TEXT = 'Public Route';
const PRIVATE_ROUTE_MOCK_TEXT = 'Private Route';

const mockPublicRouteElement = makeFakeElement(PUBLIC_ROUTE_MOCK_TEXT);
const mockPrivateRouteElement = makeFakeElement(PRIVATE_ROUTE_MOCK_TEXT);

const {wrapper, mockHistory} = testUtils();

describe('Component: PrivateRouter', () => {
  beforeEach(() => {
    mockHistory.push(MOCK_PRIVATE_ROUTE);
  });

  it('should render component for public route, when user not authorized', async () => {
    const noAuthWrapper = testUtils({storeProps: {authStatus: AuthStatus.NoAuth}}).wrapper;

    render(
      <Routes>
        <Route path={AppRoute.Main} element={mockPublicRouteElement}>
          <Route
            path={MOCK_PRIVATE_ROUTE}
            element={
              <PrivateRoute>
                {mockPrivateRouteElement}
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>,
      {wrapper: noAuthWrapper}
    );

    expect(screen.getByText(PUBLIC_ROUTE_MOCK_TEXT)).toBeInTheDocument();
    expect(screen.queryByText(PRIVATE_ROUTE_MOCK_TEXT)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', async () => {
    render(
      <Routes>
        <Route path={AppRoute.Main}>
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
        </Route>
      </Routes>,
      {wrapper}
    );

    expect(screen.getByText(PRIVATE_ROUTE_MOCK_TEXT)).toBeInTheDocument();
    expect(screen.queryByText(PUBLIC_ROUTE_MOCK_TEXT)).not.toBeInTheDocument();
  });
});
