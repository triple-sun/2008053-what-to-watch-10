import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute, HeaderStyle, PosterSize, ComponentTestID } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import LoadingPage from '../../../pages/loading-page/loading-page';
import { fetchCurrentMovieAction } from '../../../store/current-movie/current-movie-api-actions';
import { getCurrentMovieState } from '../../../store/current-movie/current-movie-selectors';
import { getMovies } from '../../../store/main-page/main-page-selectors';
import { checkId } from '../../../utils/utils';
import HeaderElement from '../../common/header-element/header-element';
import LogoElement from '../../common/logo-element/logo-element';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw-element/wtw-element';
import MovieButtons from '../movie-buttons/movie-buttons';
import MovieCardDescription from '../movie-card-description/movie-card-description';
import MovieBackground from '../movie-images/movie-background/movie-background';
import MoviePoster from '../movie-images/movie-poster/movie-poster';
import MovieTabs from '../movie-tabs/movie-tabs';

const MoviePageFilmCard = () => {
  const id = Number(useParams().id);

  const {data: {movie}} = useAppSelector(getCurrentMovieState);

  const movies = useAppSelector(getMovies);
  const isIdOk = checkId(movies, id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!movie || id !== movie.id) {
      dispatch(fetchCurrentMovieAction(id));
    }
  }, [dispatch, id, movie]);

  if (!isIdOk) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return !movie
    ? <LoadingPage/>
    : (
      <section className="film-card film-card--full" data-testid={ComponentTestID.MoviePageCard}>
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
    );};

export default MoviePageFilmCard;
