import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer';
import { ComponentTestID, ComponentText, HeaderStyle, MovieList, PageTestID, PosterSize } from '../../const/enums';
import LoadingPage from '../loading-page/loading-page';
import MovieBackground from '../../components/movie/movie-images/movie-background/movie-background';
import WTWElement from '../../components/common/wtw-element/wtw-element';
import HeaderElement from '../../components/common/header-element/header-element';
import LogoElement from '../../components/common/logo-element/logo-element';
import UserBlock from '../../components/common/user-block/user-block';
import MovieCardDescription from '../../components/movie/movie-card-description/movie-card-description';
import MovieButtons from '../../components/movie/movie-buttons/movie-buttons';
import MoviePoster from '../../components/movie/movie-images/movie-poster/movie-poster';
import MovieTabs from '../../components/movie/movie-tabs/movie-tabs';
import useCurrentMovie from '../../hooks/use-current-movie/use-current-movie';

const MoviePage = () => {
  const {movie, reviews} = useCurrentMovie();

  return !movie
    ? <LoadingPage />
    : (
      <>
        <section className="film-card film-card--full" data-testid={ComponentTestID.MoviePageCard}>
          <div className="film-card__hero">
            <MovieBackground movie={movie} />
            <WTWElement />
            <HeaderElement style={HeaderStyle.MovieCard}>
              <LogoElement />
              <UserBlock />
            </HeaderElement>
            <div className="film-card__wrap">
              <MovieCardDescription movie={movie}>
                <MovieButtons movie={movie} />
              </MovieCardDescription>
            </div>
          </div>
          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <MoviePoster {...movie} size={PosterSize.Big} />
              <MovieTabs movie={movie} reviews={reviews}/>
            </div>
          </div>
        </section>
        <div className="page-content" data-testid={PageTestID.MoviePage}>
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">{ComponentText.MoreLikeThis}</h2>
            <MovieCardsList movieList={MovieList.MoviePage}/>
          </section>
          <PageFooter />
        </div>
      </>
    );
};

export default MoviePage;
