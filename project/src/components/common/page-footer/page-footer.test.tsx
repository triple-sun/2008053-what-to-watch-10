import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ComponentText } from '../../../const/enums';
import HistoryRouter from '../../history-route/history-route';
import PageFooter from './page-footer';

const history = createMemoryHistory();

describe('Component: PageFooter', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <PageFooter />
      </HistoryRouter>
    );

    expect(screen.getByText(ComponentText.Footer)).toBeInTheDocument();
  });
});
