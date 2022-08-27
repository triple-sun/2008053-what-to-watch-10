import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import LoginPage from '../../pages/login-page/login-page';
import MoviePlayerPage from '../../pages/movie-player-page/movie-player-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { checkAuth } from '../../utils/utils';
import PrivateRoute from '../common/private-route/private-route';
import { store } from '../../store/store';
import { useEffect } from 'react';
import MainPage from '../../pages/main-page/main-page';
import { getAuthStatus } from '../../store/user/user-selectors';
import { fetchFavoritesAction } from '../../store/user/user-api-actions';
import { getIsMainDataLoaded } from '../../store/main-page/main-page-selectors';

const goToMainPage = <Navigate to={AppRoute.Main} />;

const App = () => {
  const authStatus = useAppSelector(getAuthStatus);
  const isLoaded = useAppSelector(getIsMainDataLoaded);
  const isAuth = checkAuth(authStatus, AuthStatus.Auth);

  useEffect(() => {
    if (isAuth){
      store.dispatch(fetchFavoritesAction());
    }
  }, [isAuth]
  );

  if (checkAuth(authStatus, AuthStatus.Unknown) || !isLoaded) {
    return (
      <LoadingPage />
    );
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />

      <Route path={AppRoute.Login} element={<LoginPage />} />

      <Route path={AppRoute.Player} element={goToMainPage} />

      <Route path={AppRoute.MoviePlayer} element={<MoviePlayerPage />} />

      <Route path={AppRoute.Movies} element={goToMainPage} />

      <Route path={AppRoute.Movie} element={<MoviePage />} />

      <Route
        path={AppRoute.AddReview} element={
          <PrivateRoute>
            <AddReviewPage />
          </PrivateRoute>
        }
      />

      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute>
            <MyListPage />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
