import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/enums';
import AddReviewPage from '../../pages/add-review/add-review';
import LoginPage from '../../pages/login/login';
import MainPage from '../../pages/main/main';
import MoviePlayerPage from '../../pages/movie-player/movie-player';
import MoviePage from '../../pages/movie/movie';
import MyListPage from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found/not-found';
import TMainPageProps from '../../types/main-page-props';
import PrivateRoute from '../universal/private-route/private-route';

const App = ({promo, movies, genres}: TMainPageProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={
          <MainPage
            promo={promo}
            movies={movies}
            genres={genres}
          />
        }
      />
      <Route
        path={AppRoute.AddReview}
        element={<AddReviewPage />}
      />
      <Route
        path={AppRoute.Movie}
        element={
          <MoviePage />
        }
      />
      <Route
        path={AppRoute.MoviePlayer}
        element={<MoviePlayerPage />}
      />
      <Route
        path={AppRoute.Login}
        element={<LoginPage />}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <MyListPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.NotFound}
        element={<NotFoundPage />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
