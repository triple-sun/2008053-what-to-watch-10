/* eslint-disable no-console */
import { Link, Navigate, useParams } from 'react-router-dom';
import LogoElement from '../../components/universal/logo/logo';
import PageFooterElement from '../../components/universal/page-footer/page-footer';
import UserBlockElement from '../../components/universal/user-block/user-block';
import { AppRoute } from '../../const/enums';
import { mockMoviesList } from '../../const/mock';
import TMovie from '../../types/movie-data';
import { convertStringToKebabCase, findMovieByID } from '../../utils/utils';

const MoviePage = (): JSX.Element => {
  const params = useParams();

  const movieData = params.id ? mockMoviesList.find((movie) => findMovieByID(movie, params.id as string)) as TMovie : null;

  return !movieData
    ? <Navigate to={AppRoute.NotFound} />
    : (
      <div>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={`img/bg-${convertStringToKebabCase(movieData?.title)}.jpg`} alt={movieData?.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <LogoElement />
              <UserBlockElement />
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{movieData.title}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{movieData.genre}</span>
                  <span className="film-card__year">{movieData.year}</span>
                </p>

                <div className="film-card__buttons">
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list film-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">9</span>
                  </button>
                  <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={`img/${convertStringToKebabCase(movieData.title)}-poster.jpg`} alt={`${movieData.title} poster`} width="218" height="327" />
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
                  <div className="film-rating__score">8,9</div>
                  <p className="film-rating__meta">
                    <span className="film-rating__level">Very good</span>
                    <span className="film-rating__count">240 ratings</span>
                  </p>
                </div>

                <div className="film-card__text">
                  <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`&apos;`s friend and protege.</p>

                  <p>Gustave prides himself on providing first-class service to the hotel`&apos;`s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave`&apos;`s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

                  <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

                  <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
                </h3>
              </article>

              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
                </h3>
              </article>

              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">Macbeth</a>
                </h3>
              </article>

              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">Aviator</a>
                </h3>
              </article>
            </div>
          </section>

          <PageFooterElement />
        </div>
      </div>
    );
};

export default MoviePage;
