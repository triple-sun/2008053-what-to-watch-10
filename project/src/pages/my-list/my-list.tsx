import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooterElement from '../../components/common/page-footer/page-footer-element';
import UserBlock from '../../components/common/user-block/user-block';
import HeaderElement from '../../components/common/header-element/header-element';
import { HeaderStyle, MovieList } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getFavorites } from '../../store/user/user-selectors';
import MyListTitle from '../../components/my-list-title/my-list-title';

const MyListPage = () => {
  const favorites = useAppSelector(getFavorites);

  return (
    <div className="user-page">
      <HeaderElement style={HeaderStyle.UserPage}>
        <LogoElement />
        <MyListTitle count={favorites.length}/>
        <UserBlock />
      </HeaderElement>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieCardsList movieList={MovieList.MyListPage} isLong />
      </section>
      <PageFooterElement />
    </div>
  );

};

export default MyListPage;
