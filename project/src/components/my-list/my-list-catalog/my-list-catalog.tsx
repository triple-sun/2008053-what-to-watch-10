import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus, MovieList } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import Loading from '../../../pages/loading/loading';
import { fetchFavoritesAction } from '../../../store/user/user-api-actions';
import { getUserState } from '../../../store/user/user-selectors';
import { checkAuth } from '../../../utils/utils';
import MovieCardsList from '../../movie/movie-cards-list/movie-cards-list';

const MyListCatalog = () => {
  const {data: {favorites}, isLoading, authStatus} = useAppSelector(getUserState);

  const isAuth = checkAuth(authStatus, AuthStatus.Auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(fetchFavoritesAction);
    }
  }, [dispatch, isAuth]);

  if (!isAuth) {
    return <Navigate to={AppRoute.Main}/>;
  }

  if (isLoading || !favorites) {
    return <Loading />;
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <MovieCardsList movieList={MovieList.MyListPage} isLong />
    </section>
  );
};

export default MyListCatalog;
