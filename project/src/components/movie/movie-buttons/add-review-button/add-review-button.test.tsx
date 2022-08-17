import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthStatus, ComponentText } from '../../../../const/enums';
import { createMockStore, makeFakeMovie } from '../../../../utils/mocks';
import HistoryRouter from '../../../history-route/history-route';
import AddReviewButton from './add-review-button';

const mockMovie = makeFakeMovie();

const history = createMemoryHistory();

describe('Component: AddReviewButton', () => {
  it('should render button if user is auth', () => {
    const store = createMockStore({authStatus: AuthStatus.Auth});

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddReviewButton {...mockMovie}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(ComponentText.AddReview)).toBeInTheDocument();
  });
});
