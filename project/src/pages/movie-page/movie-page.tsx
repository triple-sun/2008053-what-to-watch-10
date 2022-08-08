import { Navigate, useParams } from 'react-router-dom';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooterElement from '../../components/common/page-footer/page-footer-element';
import { AppRoute } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getMoviePageState } from '../../utils/selectors/selectors';
import Loading from '../loading/loading';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import { fetchCurrentMovieAction, fetchSimilarMoviesAction } from '../../store/movie-page/movie-page-api-actions';
import { useEffect } from 'react';
import { checkMovie } from '../../utils/utils';
import MoviePageFilmCard from '../../components/movie-page/movie-page-film-card/movie-page-film-card';
import React from 'react';

const MoviePage = () => {
  const {id} = useParams();
  const {currentMovie, similarMovies} = useAppSelector(getMoviePageState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && checkMovie(currentMovie.data, id)) {
      dispatch(fetchCurrentMovieAction(id));
      dispatch(fetchSimilarMoviesAction(id));
    }
  },[currentMovie, dispatch, id, similarMovies]
  );

  if (!id) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if ((!similarMovies.data || !currentMovie.data)) {
    return (<Loading />);
  }

  return (
    <>
      <MoviePageFilmCard {...currentMovie.data} />
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieCardsList movies={similarMovies.data}/>
        </section>
        <PageFooterElement />
      </div>
    </>
  );
};

export default React.memo(MoviePage);
