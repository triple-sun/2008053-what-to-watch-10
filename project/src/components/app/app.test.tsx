import {render, screen} from '@testing-library/react';
import App from './app';
import { AppRoute, AuthStatus, PageTestID } from '../../const/enums';
import { testUtils } from '../../utils/mocks/test-utils';
import { mockStoreDefaultProps } from '../../utils/mocks/mocks';

const {mockCurrentMovie, mockHistory, wrapper, mockVideoAPI} = testUtils();

beforeAll(mockVideoAPI);

describe('Application Routing', () => {
  it('should render "AddReviewPage" when user navigate to "/movies/:id/review"', () => {
    mockHistory.push(`${AppRoute.Movies}${mockCurrentMovie.id}/review`);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.AddReviewPage)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigates to "/login" and is not auth', () => {
    const {wrapper: noAuthWrapper, mockHistory: mockNoAuthHistory} = testUtils({...mockStoreDefaultProps, authStatus: AuthStatus.NoAuth});

    mockNoAuthHistory.push(AppRoute.Login);

    render(<App />, {wrapper: noAuthWrapper});

    expect(screen.getByTestId(PageTestID.LoginPage)).toBeInTheDocument();
  });

  it('should render "MainPage" when user navigates to "/"', () => {
    mockHistory.push(AppRoute.Main);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.MainPage)).toBeInTheDocument();

  });

  it('should render "MoviePage" when user navigates to "/movie/:id"', () => {
    mockHistory.push(`${AppRoute.Movies}${mockCurrentMovie.id}`);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.MoviePage)).toBeInTheDocument();
  });

  it('should render "MoviePlayerPage" when user navigate to "/player/:id"', () => {
    mockHistory.push(`${AppRoute.Player}${mockCurrentMovie.id}`);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.MoviePlayerPage)).toBeInTheDocument();
  });

  it('should render "MyListPage" when user navigate to "/my-list"', () => {
    mockHistory.push(AppRoute.MyList);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.MyListPage)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    mockHistory.push(AppRoute.NonExistent);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.NotFoundPage)).toBeInTheDocument();
  });
});
