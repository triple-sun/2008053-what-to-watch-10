import MovieCardListComponent from '../../components/movie/movie-card-list/movie-card-list';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooterElement from '../../components/common/page-footer/page-footer-element';
import UserBlock from '../../components/common/user-block-element/user-block-element';
import HeaderElement from '../../components/common/header-element/header-element';
import { AppRoute, HeaderStyle } from '../../const/enums';
import { AppProps } from '../../types/props';
import { Navigate } from 'react-router-dom';

const MyListPage = ({myMovies}: AppProps) => {
  if (!myMovies) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="user-page">
      <HeaderElement style={HeaderStyle.UserPage}>
        <LogoElement />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myMovies.length}</span></h1>
        <UserBlock />
      </HeaderElement>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieCardListComponent movies={myMovies}/>
      </section>

      <PageFooterElement />
    </div>
  );
};

export default MyListPage;
