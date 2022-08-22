import { fireEvent, render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { MOCK_PAGE_LINK } from '../../../../const/const';
import { AppRoute, AuthStatus, ComponentText, ElementTestID, PageTestID } from '../../../../const/enums';
import LoginPage from '../../../../pages/login-page/login-page';
import { testUtils } from '../../../../utils/mocks/test-utils';
import MyListButton from './my-list-button';

const {wrapper, mockFavorites, mockCurrentMovie} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentMovie.id,
  }),
}));

describe('Component: MyListButton', () => {
  const onFavoriteButtonClick = jest.fn();

  it('should render correctly', () => {
    render(
      <MyListButton isAuth favoritesCount={mockFavorites.length} handleFavoriteAction={onFavoriteButtonClick}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.MyListButton)).toBeInTheDocument();
  });

  it('should render MovieListAddIcon if not in favorites', () => {
    render(
      <MyListButton isAuth favoritesCount={mockFavorites.length} handleFavoriteAction={onFavoriteButtonClick}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.Add)).toBeInTheDocument();
  });

  it('should render MovieListAddedIcon if not in favorites', () => {
    render(
      <MyListButton isAuth favoritesCount={mockFavorites.length} handleFavoriteAction={onFavoriteButtonClick} isFavorite/>,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.IconAdded)).toBeInTheDocument();
  });

  it('should call onFavoriteButtonClick when user clicks MyListAddButton', async () => {
    render(
      <MyListButton isAuth favoritesCount={mockFavorites.length} handleFavoriteAction={onFavoriteButtonClick} isFavorite/>,
    );

    fireEvent.click(screen.getByTestId(ElementTestID.MyListButton));

    expect(onFavoriteButtonClick).toBeCalled();
  });

  it('should redirect to /login when user clicks MyListAddButton and is not authorized', async () => {
    const {wrapper: noAuthWrapper, mockHistory} = testUtils({storeProps: {authStatus: AuthStatus.NoAuth}});

    mockHistory.push(MOCK_PAGE_LINK);

    render(
      <Routes>
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={MOCK_PAGE_LINK}
          element={<MyListButton isAuth={false} favoritesCount={mockFavorites.length} handleFavoriteAction={onFavoriteButtonClick}/>}
        />
      </Routes>,
      {wrapper: noAuthWrapper}
    );

    expect(screen.queryByTestId(PageTestID.LoginPage)).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId(ElementTestID.MyListButton));

    expect(screen.getByTestId(PageTestID.LoginPage)).toBeInTheDocument();
  });
});
