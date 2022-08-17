import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { ComponentText, ElementTestID } from '../../../../const/enums';
import { makeFakeUserInfo } from '../../../../utils/mocks';

import HistoryRouter from '../../../history-route/history-route';
import UserBlockAuth from './user-block-auth';

const history = createMemoryHistory();

describe('Component: UserBlockAuth', () => {
  it('should render correctly', () => {
    const userInfo = makeFakeUserInfo();

    render(
      <HistoryRouter history={history}>
        <UserBlockAuth avatarUrl={userInfo.avatarUrl} onLogoutClick={() => jest.fn()}/>
      </HistoryRouter>
    );

    expect(screen.getByText(ComponentText.SignOut)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestID.Avatar)).toHaveAttribute('src', userInfo.avatarUrl);
    expect(screen.getByText(ComponentText.SignOut).onclick).toBeInstanceOf(Function);
  });
});
