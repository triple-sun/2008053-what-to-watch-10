import { HeaderStyle } from '../../../const/enums';
import { AppProps } from '../../../types/props';
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
import THandlePageChange from '../../../types/page-change';

type MoviePromoProps = Pick<AppProps, 'promo' | 'myMovies'> & THandlePageChange

const MovieCardPromo = ({promo, myMovies, handlePageChange}: MoviePromoProps) => (
  <section className="film-card">
    <MovieBackground movie={promo} />

    <WTWElement />

    <HeaderElement style={HeaderStyle.MovieCard}>
      <LogoElement handlePageChange={handlePageChange}/>
      <UserBlock handlePageChange={handlePageChange}/>
    </HeaderElement>

    <div className="film-card__wrap">
      <div className="film-card__info">

        <MoviePoster {...promo} />
        <MovieCardDescription movie={promo}>
          <MovieButtons>
            <PlayMovieButton {...promo} handlePageChange={handlePageChange}/>
            <MyListAddButton count={myMovies.length} handlePageChange={handlePageChange}/>
            <AddReviewButton {...promo} handlePageChange={handlePageChange}/>
          </MovieButtons>
        </MovieCardDescription>
      </div>
    </div>
  </section>
);

export default MovieCardPromo;
