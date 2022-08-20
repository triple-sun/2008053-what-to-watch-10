import { useEffect } from 'react';
import { ComponentText, MovieList } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import LoadingPage from '../../../pages/loading-page/loading-page';
import { fetchFavoritesAction } from '../../../store/user/user-api-actions';
import { getUserState } from '../../../store/user/user-selectors';
import MovieCardsList from '../../movie/movie-cards-list/movie-cards-list';

const MyListCatalog = () => {
  const {data: {favorites}, isLoading} = useAppSelector(getUserState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!favorites) {
      dispatch(fetchFavoritesAction);
    }
  }, [dispatch, favorites]);

  if (isLoading || !favorites) {
    return <LoadingPage />;
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">{ComponentText.Catalog}</h2>
      <MovieCardsList movieList={MovieList.MyListPage} isLong />
    </section>
  );
};

export default MyListCatalog;
