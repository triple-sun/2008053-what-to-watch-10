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
import Loading from '../../../pages/loading/loading';
import React from 'react';

const MovieCardPromo = () => {
  const promo = useAppSelector(getPromo);

  if (!promo.isDataLoaded) {
    return <Loading />;
  }

  if (promo.data){
    return (
      <section className="film-card">
        <MovieBackground movie={promo.data} />
        <WTWElement />
        <HeaderElement style={HeaderStyle.MovieCard}>
          <LogoElement />
          <UserBlock />
        </HeaderElement>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <MoviePoster {...promo.data} />
            <MovieCardDescription movie={promo.data}>
              <MovieButtons movie={promo.data} />
            </MovieCardDescription>
          </div>
        </div>
      </section>
    );}

  return null;
};

export default React.memo(MovieCardPromo);
