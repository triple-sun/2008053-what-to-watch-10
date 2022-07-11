import TMovie from '../../../types/movie-data';
import { convertStringToKebabCase } from '../../../utils/utils';
import LogoElement from '../../universal/logo/logo';
import UserBlockElement from '../../universal/user-block/user-block';

const MoviePromoComponent = ({title, genre, year}: TMovie): JSX.Element => (
  <section className="film-card">
    <div className="film-card__bg">
      <img src={`img/bg-${convertStringToKebabCase(title)}.jpg`} alt={title} />
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header film-card__head">
      <LogoElement />
      <UserBlockElement />
    </header>

    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={`img/${convertStringToKebabCase(title)}-poster.jpg`} alt={`${title} poster`} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{title}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{year}</span>
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
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MoviePromoComponent;
