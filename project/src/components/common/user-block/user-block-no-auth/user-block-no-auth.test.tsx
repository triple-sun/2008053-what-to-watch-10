import {fireEvent, render, screen} from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../../const/const';
import { AppRoute, AuthStatus, ComponentText, PageTestID } from '../../../../const/enums';
import LoginPage from '../../../../pages/login-page/login-page';
import { testUtils } from '../../../../utils/mocks/test-utils';
import UserBlockNoAuth from './user-block-no-auth';

const {wrapper, mockHistory} = testUtils({storeProps: {authStatus: AuthStatus.NoAuth}});

describe('Component: UserBlockNoAuth', () => {
  it('should render correctly', () => {
    render(
      <UserBlockNoAuth />,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.SignIn)).toBeInTheDocument();
  });

  it('should redirect to /login when user clicks on SignIn and is not auth', async () => {
    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<UserBlockNoAuth />}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.LoginPage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(ComponentText.SignIn));

    expect(screen.getByTestId(PageTestID.LoginPage)).toBeInTheDocument();
  });
});
