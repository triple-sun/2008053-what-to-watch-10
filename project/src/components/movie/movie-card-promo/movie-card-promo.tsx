import { HeaderStyle } from '../../../const/enums';
import { AppProps } from '../../../types/props';
import HeaderElement from '../../common/header-element/header-element';
import LogoElement from '../../common/logo-element/logo-element';
import UserBlock from '../../common/user-block-element/user-block-element';
import WTWElement from '../../common/wtw-element/wtw-element';
import MovieBackgroundElement from '../movie-images/movie-background/movie-card-bg';
import MoviePosterElement from '../movie-images/movie-poster/movie-poster';
import AddReviewButton from '../movie-buttons/add-review-button/add-review-button';
import MovieButtons from '../movie-buttons/movie-buttons';
import MyListAddButton from '../movie-buttons/my-list-add-button/my-list-add-button';
import PlayMovieButton from '../movie-buttons/play-movie-button/play-movie-button';
import MovieCardDescription from '../movie-card-description/movie-card-description';

type MoviePromoProps = Pick<AppProps, 'promo' | 'myMovies'>

const MovieCardPromo = ({promo, myMovies}: MoviePromoProps) => (
  <section className="film-card">
    <MovieBackgroundElement {...promo} />

    <WTWElement />

    <HeaderElement style={HeaderStyle.MovieCard}>
      <LogoElement />
      <UserBlock />
    </HeaderElement>

    <div className="film-card__wrap">
      <div className="film-card__info">

        <MoviePosterElement {...promo} />
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
);

export default MovieCardPromo;
