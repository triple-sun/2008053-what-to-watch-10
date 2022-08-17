import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { ComponentText } from '../../const/enums';
import { createMockStore } from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';
import SignInForm from './sign-in-form';

const store = createMockStore();
const history = createMemoryHistory();

describe('Component: SignInForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SignInForm />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(ComponentText.Email)).toBeInTheDocument();
    expect(screen.getByLabelText(ComponentText.Password)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.SignIn)).toBeInTheDocument();
  });
});
