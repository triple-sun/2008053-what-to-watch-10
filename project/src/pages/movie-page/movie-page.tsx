import { Navigate, useParams } from 'react-router-dom';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooterElement from '../../components/common/page-footer/page-footer-element';
import UserBlock from '../../components/common/user-block/user-block';
import { AppRoute, HeaderStyle, PosterSize } from '../../const/enums';
import MovieBackground from '../../components/movie/movie-images/movie-background/movie-background';
import MoviePoster from '../../components/movie/movie-images/movie-poster/movie-poster';
import MovieButtons from '../../components/movie/movie-buttons/movie-buttons';
import WTWElement from '../../components/common/wtw-element/wtw-element';
import HeaderElement from '../../components/common/header-element/header-element';
import AddReviewButton from '../../components/movie/movie-buttons/add-review-button/add-review-button';
import PlayMovieButton from '../../components/movie/movie-buttons/play-movie-button/play-movie-button';
import MyListAddButton from '../../components/movie/movie-buttons/my-list-add-button/my-list-add-button';
import MovieCardDescription from '../../components/movie/movie-card-description/movie-card-description';
import MovieTabs from '../../components/movie/movie-tabs/movie-tabs';
import { MOVIE_CARD_SIMILAR_COUNT } from '../../const/const';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getMovies, getMovieState } from '../../utils/selectors/selectors';
import Loading from '../loading/loading';
import { fetchMoviePageDataAction as fetchSimilarMovies } from '../../store/movie-page/movie-page-api-actions';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import { findMovieById } from '../../utils/utils';
import { useEffect } from 'react';

const MoviePage = () => {
  const {id} = useParams();
  const movies = useAppSelector(getMovies);
  const {similarMovies} = useAppSelector(getMovieState);
  const dispatch = useAppDispatch();

  const currentMovie = findMovieById(movies, id);

  useEffect(() => {
    if (currentMovie && !similarMovies) {
      dispatch(fetchSimilarMovies(currentMovie.id));
    }
  }, [currentMovie, dispatch, id, similarMovies]);

  if (!similarMovies) {
    return (<Loading />);
  }

  if (currentMovie) {
    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <MovieBackground movie={currentMovie} />
            <WTWElement />

            <HeaderElement style={HeaderStyle.MovieCard}>
              <LogoElement />
              <UserBlock />
            </HeaderElement>

            <div className="film-card__wrap">
              <MovieCardDescription movie={currentMovie}>
                <MovieButtons>
                  <PlayMovieButton {...currentMovie} />
                  <MyListAddButton id={currentMovie.id} />
                  <AddReviewButton {...currentMovie} />
                </MovieButtons>
              </MovieCardDescription>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <MoviePoster {...currentMovie} size={PosterSize.Big} />
              <MovieTabs movie={currentMovie} />
            </div>
          </div>
        </section>

        <div className="page-content">
          {similarMovies
            ? (
              <section className="catalog catalog--like-this">
                <h2 className="catalog__title">More like this</h2>
                <MovieCardsList movies={similarMovies} renderedMovieCount={MOVIE_CARD_SIMILAR_COUNT}/>
              </section>
            )
            : null}

          <PageFooterElement />
        </div>
      </>
    );
  }

  return <Navigate to={AppRoute.NotFound} />;
};

export default MoviePage;
