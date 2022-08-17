import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import HistoryRouter from '../history-route/history-route';
import App from './app';
import { AppRoute, PageTestID, Reducer } from '../../const/enums';
import { createMockStore } from '../../utils/mocks';

const history = createMemoryHistory();

const store = createMockStore();

const currentMovie = store.getState()[Reducer.CurrentMovie].data.movie;

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "AddReviewPage" when user navigate to "/movies/:id/review"', () => {
    history.push(`${AppRoute.Movies}${currentMovie.id}/review`);

    render(fakeApp);

    expect(screen.getByTestId(PageTestID.AddReviewPage)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigates to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByTestId(PageTestID.LoginPage)).toBeInTheDocument();
  });

  it('should render "MainPage" when user navigates to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByTestId(PageTestID.MainPage)).toBeInTheDocument();

  });

  it('should render "MoviePage" when user navigates to "/movie/:id"', () => {
    history.push(`${AppRoute.Movies}${currentMovie.id}`);

    render(fakeApp);

    expect(screen.getByTestId(PageTestID.MoviePage)).toBeInTheDocument();
  });

  it('should render "MoviePlayerPage" when user navigate to "/player/:id"', () => {
    history.push(`${AppRoute.Player}${currentMovie.id}`);

    render(fakeApp);

    expect(screen.getByTestId(PageTestID.MoviePlayerPage)).toBeInTheDocument();
  });

  it('should render "MyListPage" when user navigate to "/my-list"', () => {
    history.push(AppRoute.MyList);

    render(fakeApp);

    expect(screen.getByTestId(PageTestID.MyListPage)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByTestId(PageTestID.NotFoundPage)).toBeInTheDocument();
  });
});
