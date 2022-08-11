import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooterElement from '../../components/common/page-footer/page-footer-element';
import UserBlock from '../../components/common/user-block/user-block';
import HeaderElement from '../../components/common/header-element/header-element';
import { HeaderStyle } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getMainPageState } from '../../utils/selectors/selectors';
import Loading from '../loading/loading';
import { getFavorites } from '../../store/user/user-selectors';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import { fetchFavoritesAction } from '../../store/user/user-api-actions';
import { useEffect } from 'react';


const MyListPage = () => {
  const pageState = useAppSelector(getMainPageState);
  const favorites = useAppSelector(getFavorites);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!favorites) {
      dispatch(fetchFavoritesAction);
    }
  }, [dispatch, favorites]);


  if (!pageState.isLoading) {
    return <Loading />;
  }

  return (
    <div className="user-page">
      <HeaderElement style={HeaderStyle.UserPage}>
        <LogoElement />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favorites.length}</span></h1>
        <UserBlock />
      </HeaderElement>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieCardsList movies={favorites} isLong />
      </section>
      <PageFooterElement />
    </div>
  );

};

export default MyListPage;
