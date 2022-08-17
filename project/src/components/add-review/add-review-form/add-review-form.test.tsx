import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthStatus, ComponentText } from '../../../const/enums';
import { createMockStore } from '../../../utils/mocks';
import HistoryRouter from '../../history-route/history-route';
import AddReviewForm from './add-review-form';

const history = createMemoryHistory();

const store = createMockStore({authStatus: AuthStatus.Auth});

describe('Component: AddReviewForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddReviewForm />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(ComponentText.Post)).toBeInTheDocument();
  });
});
