import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ComponentText } from '../../../../const/enums';

import HistoryRouter from '../../../history-route/history-route';
import UserBlockNoAuth from './user-block-no-auth';

const history = createMemoryHistory();

describe('Component: UserBlockNoAuth', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <UserBlockNoAuth />
      </HistoryRouter>
    );

    expect(screen.getByText(ComponentText.SignIn)).toBeInTheDocument();
  });
});
