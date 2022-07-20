import { Navigate, useParams } from 'react-router-dom';
import MovieCardListComponent from '../../components/movie/movie-card-list/movie-card-list';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooterElement from '../../components/common/page-footer/page-footer-element';
import UserBlock from '../../components/common/user-block-element/user-block-element';
import { AppRoute, HeaderStyle, PosterSize } from '../../const/enums';
import mockMovies from '../../mocks/movies';
import { AppProps } from '../../types/props';
import MovieBackground from '../../components/movie/movie-images/movie-background/movie-background';
import MoviePoster from '../../components/movie/movie-images/movie-poster/movie-poster';
import MovieButtons from '../../components/movie/movie-buttons/movie-buttons';
import WTWElement from '../../components/common/wtw-element/wtw-element';
import HeaderElement from '../../components/common/header-element/header-element';
import AddReviewButton from '../../components/movie/movie-buttons/add-review-button/add-review-button';
import PlayMovieButton from '../../components/movie/movie-buttons/play-movie-button/play-movie-button';
import MyListAddButton from '../../components/movie/movie-buttons/my-list-add-button/my-list-add-button';
import MovieCardDescription from '../../components/movie/movie-card-description/movie-card-description';

const MoviePage = ({myMovies}: AppProps) => {
  const {id} = useParams();

  const currentMovie = mockMovies.find((mov) => mov.id === id);
  const similarMovies = mockMovies.slice(0, 4);

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <MovieBackground movie={currentMovie} />
          <WTWElement />

          <HeaderElement style={HeaderStyle.MovieCard}>
            <LogoElement />
            <UserBlock />
          </HeaderElement>

          <div className="film-card__wrap">
            <MovieCardDescription movie={currentMovie}>
              <MovieButtons>
                <PlayMovieButton {...currentMovie} />
                <MyListAddButton count={myMovies.length} />
                <AddReviewButton {...currentMovie} />
              </MovieButtons>
            </MovieCardDescription>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <MoviePoster {...currentMovie} size={PosterSize.Big} />

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#overview" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#details" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#reviews" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{currentMovie.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{currentMovie.description}</p>

                <p className="film-card__director"><strong>Director: {currentMovie.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {currentMovie.starring} and others</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieCardListComponent movies={similarMovies} />
        </section>

        <PageFooterElement />
      </div>
    </div>
  );
};

export default MoviePage;
