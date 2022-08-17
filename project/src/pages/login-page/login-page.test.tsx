import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../components/history-route/history-route';
import { AppRoute, ComponentText, ElementTestID } from '../../const/enums';
import LoginPage from './login-page';
import { createMockStore, makeFakeAuthData } from '../../utils/mocks';

const store = createMockStore();
const fakeAuthData = makeFakeAuthData();

describe('Component: LoginPage', () => {
  it('should render "LoginPage" when user navigate to "login" url', async () => {
    const history = createMemoryHistory();

    const {login, password} = fakeAuthData;

    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginPage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(ComponentText.Email)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.Password)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId(ElementTestID.Login), login);
    await userEvent.type(screen.getByTestId(ElementTestID.Passsword), password);

    expect(screen.getByDisplayValue(login)).toBeInTheDocument();
    expect(screen.getByDisplayValue(password)).toBeInTheDocument();
  });
});
