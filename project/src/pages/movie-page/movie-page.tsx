import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer';
import { ComponentText, MovieList, PageTestID } from '../../const/enums';
import MoviePageFilmCard from '../../components/movie/movie-page-film-card/movie-page-film-card';

const MoviePage = () => (
  <>
    <MoviePageFilmCard />
    <div className="page-content" data-testid={PageTestID.MoviePage}>
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">{ComponentText.MoreLikeThis}</h2>
        <MovieCardsList movieList={MovieList.MoviePage}/>
      </section>
      <PageFooter />
    </div>
  </>
);

export default MoviePage;
