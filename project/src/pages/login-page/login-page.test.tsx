import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus, ComponentText, ElementTestID, PageTestID } from '../../const/enums';
import { mockStoreDefaultProps } from '../../utils/mocks/mocks';
import { testUtils } from '../../utils/mocks/test-utils';
import MainPage from '../main-page/main-page';
import LoginPage from './login-page';

describe('Component: LoginPage', () => {
  it('should render "MainPage" when user is auhorized nand navigates to "login" url', async () => {
    const {mockHistory, wrapper} = testUtils();
    mockHistory.push(AppRoute.Login);

    render(
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.getByTestId(PageTestID.MainPage)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user is not authorized and navigates to "login" url', async () => {
    const {wrapper, mockHistory, mockAuthData} = testUtils({...mockStoreDefaultProps, authStatus: AuthStatus.NoAuth});
    const {login, password} = mockAuthData;

    mockHistory.push(AppRoute.Login);

    render(
      <LoginPage />,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Email)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.Password)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId(ElementTestID.Login), login);
    await userEvent.type(screen.getByTestId(ElementTestID.Passsword), password);

    expect(screen.getByDisplayValue(login)).toBeInTheDocument();
    expect(screen.getByDisplayValue(password)).toBeInTheDocument();
  });


});
