import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { LOGO_LINK_LIGHT_CLASS } from '../../../const/const';
import { ComponentTestID, } from '../../../const/enums';
import HistoryRouter from '../../history-route/history-route';
import LogoElement from './logo-element';

const history = createMemoryHistory();

describe('Component: LogoElement', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <LogoElement />
      </HistoryRouter>
    );

    expect(screen.getByTestId(ComponentTestID.Logo)).toBeInTheDocument();
  });

  it('should have light class if isLight', () => {
    render(
      <HistoryRouter history={history}>
        <LogoElement isLight/>
      </HistoryRouter>
    );

    expect(screen.getByTestId(ComponentTestID.Logo)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.Logo)).toHaveClass(LOGO_LINK_LIGHT_CLASS);
  });
});
