import {fireEvent, render, screen} from '@testing-library/react';
import { ComponentText, ElementTestID } from '../../../../const/enums';
import { makeFakeUserInfo, testUtils } from '../../../../utils/mocks';
import UserBlockAuth from './user-block-auth';

const {wrapper} = testUtils();

const handleLogoutClick = jest.fn();

describe('Component: UserBlockAuth', () => {
  const userInfo = makeFakeUserInfo();

  it('should render correctly', () => {
    render(
      <UserBlockAuth avatarUrl={userInfo.avatarUrl} handleLogoutClick={handleLogoutClick}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.SignOut)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestID.Avatar)).toHaveAttribute('src', userInfo.avatarUrl);
    expect(screen.getByText(ComponentText.SignOut).onclick).toBeInstanceOf(Function);
  });

  it('should call onLogoutClick when user clicks SignOut', () => {
    render(
      <UserBlockAuth avatarUrl={userInfo.avatarUrl} handleLogoutClick={handleLogoutClick}/>,
      {wrapper}
    );

    const signOutLink = screen.getByText<HTMLAnchorElement>(ComponentText.SignOut);

    fireEvent.click(signOutLink);

    expect(handleLogoutClick).toBeCalled();
    expect(handleLogoutClick).toBeCalledWith();
  });
});
