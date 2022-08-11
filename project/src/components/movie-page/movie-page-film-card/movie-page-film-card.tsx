import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute, HeaderStyle, PosterSize } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import Loading from '../../../pages/loading/loading';
import { fetchCurrentMovieAction } from '../../../store/current-movie/current-movie-api-actions';
import { getCurrentMovieState } from '../../../store/current-movie/current-movie-selectors';
import { getMovies } from '../../../store/main-page/main-page-selectors';
import { checkId } from '../../../utils/utils';
import HeaderElement from '../../common/header-element/header-element';
import LogoElement from '../../common/logo-element/logo-element';
import UserBlock from '../../common/user-block/user-block';
import WTWElement from '../../common/wtw-element/wtw-element';
import MovieButtons from '../../movie/movie-buttons/movie-buttons';
import MovieCardDescription from '../../movie/movie-card-description/movie-card-description';
import MovieBackground from '../../movie/movie-images/movie-background/movie-background';
import MoviePoster from '../../movie/movie-images/movie-poster/movie-poster';
import MovieTabs from '../../movie/movie-tabs/movie-tabs';

const MoviePageFilmCard = () => {
  const id = Number(useParams().id);

  const {data: {movie: data}} = useAppSelector(getCurrentMovieState);

  const movies = useAppSelector(getMovies);
  const isIdOk = checkId(movies, id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentMovieAction(id));
  }, [dispatch, id]);

  if (!isIdOk) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return !data
    ? <Loading/>
    : (
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <MovieBackground movie={data} />
          <WTWElement />
          <HeaderElement style={HeaderStyle.MovieCard}>
            <LogoElement />
            <UserBlock />
          </HeaderElement>
          <div className="film-card__wrap">
            <MovieCardDescription movie={data}>
              <MovieButtons movie={data} />
            </MovieCardDescription>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <MoviePoster {...data} size={PosterSize.Big} />
            <MovieTabs movie={data} />
          </div>
        </div>
      </section>
    );};

export default React.memo(MoviePageFilmCard);
