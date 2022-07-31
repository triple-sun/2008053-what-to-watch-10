import { HeaderStyle } from '../../../const/enums';
import HeaderElement from '../../common/header-element/header-element';
import LogoElement from '../../common/logo-element/logo-element';
import UserBlock from '../../common/user-block-element/user-block-element';
import WTWElement from '../../common/wtw-element/wtw-element';
import MovieBackground from '../movie-images/movie-background/movie-background';
import MoviePoster from '../movie-images/movie-poster/movie-poster';
import AddReviewButton from '../movie-buttons/add-review-button/add-review-button';
import MovieButtons from '../movie-buttons/movie-buttons';
import MyListAddButton from '../movie-buttons/my-list-add-button/my-list-add-button';
import PlayMovieButton from '../movie-buttons/play-movie-button/play-movie-button';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { getMovies, getPromo } from '../../../utils/selectors/selectors';
import { filterFavoriteMovies } from '../../../utils/utils';

const MovieCardPromo = () => {
  const promo = useAppSelector(getPromo);
  const myMovies = filterFavoriteMovies(useAppSelector(getMovies));

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
            <MovieButtons>
              <PlayMovieButton {...promo} />
              <MyListAddButton count={myMovies.length} />
              <AddReviewButton {...promo} />
            </MovieButtons>
          </MovieCardDescription>
        </div>
      </div>
    </section>
  );};

export default MovieCardPromo;
