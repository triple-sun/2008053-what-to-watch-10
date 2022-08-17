import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { AppRoute, ComponentText } from '../../../../../const/enums';
import { makeFakeMovie } from '../../../../../utils/mocks';
import HistoryRouter from '../../../../history-route/history-route';

import ExitPlayerButton from './exit-player-button';

const history = createMemoryHistory();

describe('Component: ExitPlayerButton', () => {
  it('should render correctly', () => {
    const {id} = makeFakeMovie();

    render(
      <HistoryRouter history={history}>
        <ExitPlayerButton id={id}/>
      </HistoryRouter>
    );

    expect(screen.getByText(ComponentText.Exit)).toBeInTheDocument();
    expect(screen.getByText(ComponentText.Exit)).toHaveAttribute('href', `${AppRoute.Movies}${id}`);
  });
});
