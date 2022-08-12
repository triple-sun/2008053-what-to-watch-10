import { Navigate, Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute, AuthStatus } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import AddReviewPage from '../../pages/add-review/add-review';
import Loading from '../../pages/loading/loading';
import LoginPage from '../../pages/login/login';
import MoviePlayerPage from '../../pages/movie-player/movie-player';
import MoviePage from '../../pages/movie-page/movie-page';
import MyListPage from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found/not-found';
import { checkAuth } from '../../utils/utils';
import PrivateRoute from '../common/private-route/private-route';
import HistoryRouter from '../history-route/history-route';
import { store } from '../../store/store';
import { useEffect } from 'react';
import MainPage from '../../pages/main-page/main-page';
import { getAuthStatus } from '../../store/user/user-selectors';
import { fetchFavoritesAction } from '../../store/user/user-api-actions';
import { getIsMainDataLoading } from '../../store/main-page/main-page-selectors';

const goToMainPage = <Navigate to={AppRoute.Main} />;

const App = () => {
  const authStatus = useAppSelector(getAuthStatus);
  const isLoading = useAppSelector(getIsMainDataLoading);
  const isAuth = checkAuth(authStatus, AuthStatus.Auth);

  useEffect(() => {
    if (isAuth){
      store.dispatch(fetchFavoritesAction());
    }
  }, [isAuth]
  );

  if (checkAuth(authStatus, AuthStatus.Unknown) || isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage />} />

          <Route path={AppRoute.Login} element={<LoginPage />} />

          <Route path={AppRoute.Player} element={goToMainPage} />

          <Route path={AppRoute.MoviePlayer} element={<MoviePlayerPage />} />

          <Route path={AppRoute.Movies} element={goToMainPage} />

          <Route path={AppRoute.Movie} element={<MoviePage />} />

          <Route path={AppRoute.AddReview} element={<AddReviewPage />} />

          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyListPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
