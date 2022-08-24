import {fireEvent, render, screen} from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../../const/const';
import { AppRoute, ComponentText, ElementTestID, PageTestID } from '../../../../const/enums';
import MainPage from '../../../../pages/main-page/main-page';
import MyListPage from '../../../../pages/my-list-page/my-list-page';
import { makeFakeUserInfo } from '../../../../utils/mocks/mocks';
import { testUtils } from '../../../../utils/mocks/test-utils';
import UserBlockAuth from './user-block-auth';

const USER_AVATAR_ALT_TEXT = 'User avatar';

const {wrapper, mockHistory} = testUtils();

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

  it('should call handleLogoutClick when user clicks SignOut', () => {
    render(
      <UserBlockAuth avatarUrl={userInfo.avatarUrl} handleLogoutClick={handleLogoutClick}/>,
      {wrapper}
    );

    const signOutLink = screen.getByText<HTMLAnchorElement>(ComponentText.SignOut);

    fireEvent.click(signOutLink);

    expect(handleLogoutClick).toBeCalled();
    expect(handleLogoutClick).toBeCalledWith();
  });

  it('should redirect to / when user clicks on signOut', async () => {
    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage/>}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<UserBlockAuth avatarUrl={userInfo.avatarUrl} handleLogoutClick={handleLogoutClick}/>}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.MainPage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText<HTMLAnchorElement>(ComponentText.SignOut));

    expect(screen.getByTestId(PageTestID.MainPage)).toBeInTheDocument();
  });

  it('should redirect to /my-list when user clicks on user avatar', async () => {
    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={AppRoute.MyList}
          element={<MyListPage />}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<UserBlockAuth avatarUrl={userInfo.avatarUrl} handleLogoutClick={handleLogoutClick}/>}
        />
      </Routes>,
      {wrapper}
    );

    expect(screen.queryByTestId(PageTestID.MyListPage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByAltText(USER_AVATAR_ALT_TEXT));

    expect(screen.getByTestId(PageTestID.MyListPage)).toBeInTheDocument();
  });
});
