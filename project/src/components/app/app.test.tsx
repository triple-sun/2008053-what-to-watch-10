import {render, screen} from '@testing-library/react';
import App from './app';
import { AppRoute, PageTestID } from '../../const/enums';
import { testUtils, mockVideoAPI } from '../../utils/mocks';

const {currentMovie, history, wrapper} = testUtils();

beforeAll(mockVideoAPI);

describe('Application Routing', () => {
  it('should render "AddReviewPage" when user navigate to "/movies/:id/review"', () => {
    history.push(`${AppRoute.Movies}${currentMovie.id}/review`);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.AddReviewPage)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigates to "/login"', () => {
    history.push(AppRoute.Login);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.LoginPage)).toBeInTheDocument();
  });

  it('should render "MainPage" when user navigates to "/"', () => {
    history.push(AppRoute.Main);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.MainPage)).toBeInTheDocument();

  });

  it('should render "MoviePage" when user navigates to "/movie/:id"', () => {
    history.push(`${AppRoute.Movies}${currentMovie.id}`);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.MoviePage)).toBeInTheDocument();
  });

  it('should render "MoviePlayerPage" when user navigate to "/player/:id"', () => {
    history.push(`${AppRoute.Player}${currentMovie.id}`);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.MoviePlayerPage)).toBeInTheDocument();
  });

  it('should render "MyListPage" when user navigate to "/my-list"', () => {
    history.push(AppRoute.MyList);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.MyListPage)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push(AppRoute.NonExistent);

    render(<App />, {wrapper});

    expect(screen.getByTestId(PageTestID.NotFoundPage)).toBeInTheDocument();
  });
});
