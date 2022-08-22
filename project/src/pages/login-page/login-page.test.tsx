import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppRoute, ComponentText, ElementTestID } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import LoginPage from './login-page';

describe('Component: LoginPage', () => {
  it('should render "LoginPage" when user navigate to "login" url', async () => {
    const {mockHistory, wrapper, mockAuthData} = testUtils();
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
