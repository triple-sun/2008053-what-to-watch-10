import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import MovieCardsListComponent from '../../components/movie-list/movie-list';
import LogoElement from '../../components/universal/logo/logo';
import PageFooterElement from '../../components/universal/page-footer/page-footer';
import UserBlockElement from '../../components/universal/user-block/user-block';
import { AppRoute } from '../../const/enums';
import mockMovies from '../../mocks/movies';
import MainProps from '../../types/main-props';

const MoviePage = ({myMovies}: MainProps) => {
  const navigate = useNavigate();
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
          <div className="film-card__bg">
            <img src={currentMovie.backgroundImage} alt={currentMovie?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

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

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${currentMovie.id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#addToMyMovies"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{myMovies.length}</span>
                </button>
                <Link to={`/films/${currentMovie.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentMovie.posterImage} alt={`${currentMovie.name} poster`} width="218" height="327" />
            </div>

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
