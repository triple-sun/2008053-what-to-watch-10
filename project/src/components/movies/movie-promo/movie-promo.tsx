import { MainProps } from '../../../types/props';
import LogoElement from '../../common/logo/logo';
import UserBlockElement from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw/wtw';
import MovieBackgroundElement from '../images/movie-background/movie-card-bg';
import MoviePosterElement from '../images/movie-poster/movie-poster';
import MovieButtonsElement from '../movie-buttons/movie-buttons';

type MoviePromoProps = Pick<MainProps, 'promo' | 'myMovies'>

const MoviePromoComponent = ({promo, myMovies}: MoviePromoProps) => {
  const {name, genre, released} = promo;

  return (
    <section className="film-card">
      <MovieBackgroundElement {...promo} />

      <WTWElement />

      <header className="page-header film-card__head">
        <LogoElement />
        <UserBlockElement />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">

          <MoviePosterElement {...promo} />

          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <MovieButtonsElement id={promo.id} myMoviesCount={myMovies.length} />

          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePromoComponent;
