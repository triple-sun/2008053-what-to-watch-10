import { Navigate, useParams } from 'react-router-dom';
import MovieCardsListComponent from '../../components/movies/movie-list/movie-list';
import LogoElement from '../../components/common/logo/logo';
import PageFooterElement from '../../components/common/page-footer/page-footer';
import UserBlockElement from '../../components/common/user-block/user-block';
import { AppRoute } from '../../const/enums';
import mockMovies from '../../mocks/movies';
import { MainProps } from '../../types/props';
import MovieBackgroundElement from '../../components/movies/images/movie-background/movie-card-bg';
import MoviePosterElement from '../../components/movies/images/movie-poster/movie-poster';
import MovieButtonsElement from '../../components/movies/movie-buttons/movie-buttons';
import WTWElement from '../../components/common/wtw/wtw';

const MoviePage = ({myMovies}: MainProps) => {
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
          <MovieBackgroundElement {...currentMovie} />
          <WTWElement />

          <header className="page-header film-card__head">
            <LogoElement />
            <UserBlockElement />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentMovie.genre}</span>
                <span className="film-card__year">{currentMovie.released}</span>
              </p>

              <MovieButtonsElement id={currentMovie.id} myMoviesCount={myMovies.length} hasAddReview/>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <MoviePosterElement {...currentMovie} isBig />

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

          <MovieCardsListComponent movies={similarMovies} />
        </section>

        <PageFooterElement />
      </div>
    </div>
  );
};

export default MoviePage;
