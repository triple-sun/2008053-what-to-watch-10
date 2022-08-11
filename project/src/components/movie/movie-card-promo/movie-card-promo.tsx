import { HeaderStyle } from '../../../const/enums';
import HeaderElement from '../../common/header-element/header-element';
import LogoElement from '../../common/logo-element/logo-element';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw-element/wtw-element';
import MovieBackground from '../movie-images/movie-background/movie-background';
import MoviePoster from '../movie-images/movie-poster/movie-poster';
import MovieButtons from '../movie-buttons/movie-buttons';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { getPromo } from '../../../utils/selectors/selectors';

const MovieCardPromo = () => {
  const promo = useAppSelector(getPromo);

  if (promo){
    return (
      <section className="film-card">
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
              <MovieButtons movie={promo} />
            </MovieCardDescription>
          </div>
        </div>
      </section>
    );}

  return null;
};

export default MovieCardPromo;
