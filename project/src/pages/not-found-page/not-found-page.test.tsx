
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import { ComponentText } from '../../const/enums';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <NotFoundPage />
      </HistoryRouter>,
    );

    expect(screen.getByText(ComponentText.NotFound)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.ToMainPage)).toBeInTheDocument();
  });
});
