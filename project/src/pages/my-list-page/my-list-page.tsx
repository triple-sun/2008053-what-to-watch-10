import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooter from '../../components/common/page-footer/page-footer';
import UserBlock from '../../components/common/user-block/user-block';
import HeaderElement from '../../components/common/header-element/header-element';
import { ComponentTestID, ComponentText, HeaderStyle, PageTestID } from '../../const/enums';
import LoadingPage from '../loading-page/loading-page';
import useUserData from '../../hooks/use-user-data/use-user-data';

const MyListPage = () => {
  const {favorites, isLoaded} = useUserData();

  const hasFavorites = favorites.length > 0;

  return !isLoaded
    ? <LoadingPage />
    : (
      <div className="user-page" data-testid={PageTestID.MyListPage}>
        <HeaderElement style={HeaderStyle.UserPage}>
          <LogoElement />
          <h1 className="page-title user-page__title">
            {ComponentText.MyList}
            {hasFavorites
              ? <span className="user-page__film-count">{favorites.length}</span>
              : null}
          </h1>
          <UserBlock />
        </HeaderElement>
        <section className="catalog">
          {hasFavorites
            ? <h2 className="catalog__title visually-hidden">{ComponentText.Catalog}</h2>
            : <h2 className="catalog__title">You have no movies in your list.</h2>}
          <MovieCardsList movies={favorites} testId={ComponentTestID.FavoriteMovies} />
        </section>
        <PageFooter />
      </div>
    );
};

export default MyListPage;
