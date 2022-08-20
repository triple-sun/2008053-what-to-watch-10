import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppRoute, ComponentText, ElementTestID } from '../../const/enums';
import LoginPage from './login-page';
import { makeFakeAuthData, testUtils } from '../../utils/mocks';

describe('Component: LoginPage', () => {
  it('should render "LoginPage" when user navigate to "login" url', async () => {
    const {history, wrapper} = testUtils();
    const {login, password} = makeFakeAuthData();

    history.push(AppRoute.Login);

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
