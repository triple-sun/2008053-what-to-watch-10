import MovieCardsListComponent from '../../components/movies/movie-list/movie-list';
import LogoElement from '../../components/common/logo/logo';
import PageFooterElement from '../../components/common/page-footer/page-footer';
import UserBlockElement from '../../components/common/user-block/user-block';
import TMovie from '../../types/movie';

const MyListPage = (myMovies: TMovie[]) => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <LogoElement />

      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myMovies.length}</span></h1>
      <UserBlockElement />
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <MovieCardsListComponent movies={myMovies}/>
    </section>

    <PageFooterElement />
  </div>
);

export default MyListPage;
