import React from 'react';
import { HeaderStyle, PosterSize } from '../../../const/enums';
import TMovie from '../../../types/movie';
import HeaderElement from '../../common/header-element/header-element';
import LogoElement from '../../common/logo-element/logo-element';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw-element/wtw-element';
import MovieButtons from '../../movie/movie-buttons/movie-buttons';
import MovieCardDescription from '../../movie/movie-card-description/movie-card-description';
import MovieBackground from '../../movie/movie-images/movie-background/movie-background';
import MoviePoster from '../../movie/movie-images/movie-poster/movie-poster';
import MovieTabs from '../../movie/movie-tabs/movie-tabs';

const MoviePageFilmCard = (movie: TMovie) => (
  <section className="film-card film-card--full">
    <div className="film-card__hero">
      <MovieBackground movie={movie} />
      <WTWElement />
      <HeaderElement style={HeaderStyle.MovieCard}>
        <LogoElement />
        <UserBlock />
      </HeaderElement>
      <div className="film-card__wrap">
        <MovieCardDescription movie={movie}>
          <MovieButtons movie={movie} />
        </MovieCardDescription>
      </div>
    </div>
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <MoviePoster {...movie} size={PosterSize.Big} />
        <MovieTabs movie={movie} />
      </div>
    </div>
  </section>
);

export default React.memo(MoviePageFilmCard);
