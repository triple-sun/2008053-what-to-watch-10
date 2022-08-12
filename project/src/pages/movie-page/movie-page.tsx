import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooterElement from '../../components/common/page-footer/page-footer-element';
import { MovieList } from '../../const/enums';
import MoviePageFilmCard from '../../components/movie/movie-page-film-card/movie-page-film-card';

const MoviePage = () => (
  <>
    <MoviePageFilmCard />
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <MovieCardsList movieList={MovieList.MoviePage}/>
      </section>
      <PageFooterElement />
    </div>
  </>
);

export default MoviePage;
