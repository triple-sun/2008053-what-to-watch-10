import { ComponentTestID, HeaderStyle } from '../../../const/enums';
import HeaderElement from '../../common/header-element/header-element';
import LogoElement from '../../common/logo-element/logo-element';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw-element/wtw-element';
import MovieBackground from '../movie-images/movie-background/movie-background';
import MoviePoster from '../movie-images/movie-poster/movie-poster';
import MovieButtons from '../movie-buttons/movie-buttons';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import TMovie from '../../../types/movie';

const MovieCardPromo = ({promo}: {promo: TMovie | null}) => promo
  ? (
    <section className="film-card" data-testid={ComponentTestID.PromoCard}>
      <MovieBackground movie={promo} />
      <WTWElement />
      <HeaderElement style={HeaderStyle.MovieCard}>
        <LogoElement />
        <UserBlock />
      </HeaderElement>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <MoviePoster {...promo} />
          <MovieCardDescription movie={promo}>
            <MovieButtons id={promo.id} />
          </MovieCardDescription>
        </div>
      </div>
    </section>
  )
  : null;
export default MovieCardPromo;
