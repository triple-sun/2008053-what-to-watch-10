import { Navigate, Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import AddReviewPage from '../../pages/add-review/add-review';
import Loading from '../../pages/loading/loading';
import LoginPage from '../../pages/login/login';
import MainPage from '../../pages/main/main';
import MoviePlayerPage from '../../pages/movie-player/movie-player';
import MoviePage from '../../pages/movie-page/movie-page';
import MyListPage from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found/not-found';
import { fetchFavoritesAction } from '../../store/main-page/main-page-api-actions';
import { store } from '../../store/store';
import { getAuthStatus, getIsDataLoaded } from '../../utils/selectors/selectors';
import { isCheckedAuth } from '../../utils/utils';
import PrivateRoute from '../common/private-route/private-route';
import HistoryRouter from '../history-route/history-route';

const goToMainPage = <Navigate to={AppRoute.Main} />;

const App = () => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isDataLoaded = useAppSelector(getIsDataLoaded);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <Loading />
    );
  }

  if (isCheckedAuth(authorizationStatus)) {
    store.dispatch(fetchFavoritesAction());
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
              <PrivateRoute authorizationStatus={authorizationStatus} >
                <MyListPage />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );};

export default App;
