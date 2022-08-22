import dayjs from 'dayjs';
import MovieTabDetails from '../components/movie/movie-tabs/movie-tab-details/movie-tab-details';
import MovieTabOverview from '../components/movie/movie-tabs/movie-tab-overview/movie-tab-overview';
import MovieTabReviews from '../components/movie/movie-tabs/movie-tab-reviews/movie-tab-reviews';
import { MOVIE_CARD_MAIN_COUNT, MOVIE_CARD_SIMILAR_COUNT } from '../const/const';
import { RatingName, RatingMinNumber, AuthStatus, Genre, MovieList, ComponentTestID, MovieNavigation } from '../const/enums';
import TMovie from '../types/movie';
import TReview from '../types/review';

export const checkAuth = (status: AuthStatus, reference: AuthStatus): boolean => status === reference;

export const checkId = (movies: TMovie[] | null, id: number) => movies ? movies.some((movie) => movie.id === id) : false;

export const getTabElement = (selectedTab: MovieNavigation, movie: TMovie, reviews: TReview[]) => {
  switch (selectedTab) {
    case MovieNavigation.Overview:
      return <MovieTabOverview {...movie} />;
    case MovieNavigation.Details:
      return <MovieTabDetails {...movie} />;
    case MovieNavigation.Reviews:
      return <MovieTabReviews reviews={reviews}/>;
  }
};

export const getRatingName = (rating: number) => {
  switch (true) {
    case rating < RatingMinNumber.Normal:
      return RatingName.Bad;
    case rating < RatingMinNumber.Good:
      return RatingName.Normal;
    case rating < RatingMinNumber.VeryGood:
      return RatingName.Good;
    case rating < RatingMinNumber.Awesome:
      return RatingName.VeryGood;
    case rating === RatingMinNumber.Awesome:
      return RatingName.Awesome;
  }
};

export const getMovieListLength = (movieList: MovieList, favorites: TMovie[] = []) => {
  switch (movieList) {
    case MovieList.MainPage:
      return MOVIE_CARD_MAIN_COUNT;
    case MovieList.MoviePage:
      return MOVIE_CARD_SIMILAR_COUNT;
    case MovieList.MyListPage:
      return favorites.length;
  }
};

export const getMovieListTestId = (movieList: MovieList) => {
  switch (movieList) {
    case MovieList.MainPage:
      return ComponentTestID.MainMovies;
    case MovieList.MoviePage:
      return ComponentTestID.SimilarMovies;
    case MovieList.MyListPage:
      return ComponentTestID.FavoriteMovies;
  }
};

export const filterMoviesByGenre = (movies: TMovie[], genre: Genre) => genre === Genre.AllGenres ? movies : movies.filter((movie) => movie.genre === genre);

export const filterFavorites = (movies: readonly TMovie[]) => movies.filter((movie) => movie.isFavorite);

export const minutesToHoursAndMinutes = (totalMinutes: number, forPlayer = true) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

  return forPlayer
    ? `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:00`
    : `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`;
};

export const humanizeRuntime = (runtime: number) => minutesToHoursAndMinutes(runtime, false);

export const humanizeCommentDate = (date: string) => dayjs(date).format('MMMM D, YYYY');

export const humanizeGenreName = (genre: Genre) => genre.replace(/([A-Z])/g, ' $1').trim();
