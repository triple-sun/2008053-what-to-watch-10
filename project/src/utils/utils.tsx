import dayjs from 'dayjs';
import MovieTabDetails from '../components/movie/movie-tabs/movie-tab-details/movie-tab-details';
import MovieTabOverview from '../components/movie/movie-tabs/movie-tab-overview/movie-tab-overview';
import MovieTabReviews from '../components/movie/movie-tabs/movie-tab-reviews/movie-tab-reviews';
import { ALL_GENRES, MAX_GENRE_INDEX, MOVIE_CARD_MAIN_COUNT } from '../const/const';
import { RatingName, RatingMinNumber, AuthStatus, Genre, MovieNavigation } from '../const/enums';
import TMovie from '../types/movie';
import TReview from '../types/review';

export const checkAuth = (status: AuthStatus, reference: AuthStatus): boolean => status === reference;

export const checkId = (movies: TMovie[] | null, id: number) => movies ? movies.some((movie) => movie.id === id) : false;

export const findMovieById = (movies: TMovie[], id: number) => movies.find((movie) => movie.id === id);

export const getMoviesToLoadCount = (movies: TMovie[], renderedMovieCount: number) => Math.min((movies.length - renderedMovieCount), MOVIE_CARD_MAIN_COUNT);

export const getCurrentGenres = (movies: TMovie[]) => {
  const genres = [ALL_GENRES, ...new Set(movies.map((movie) => movie.genre))];
  const maxIndex = Math.min((genres.length - 1), MAX_GENRE_INDEX);
  return genres.slice(0, maxIndex);
};

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
    case rating === RatingMinNumber.NoReviews:
      return RatingName.NoReviews;
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

export const filterMoviesByGenre = (movies: TMovie[], genre: Genre) => genre === ALL_GENRES ? movies : movies.filter((movie) => movie.genre === genre);

export const humanizeTime = (time: number, forPlayer = true) => {
  const time1 = time % 60;
  const time2 = Math.floor(time / 60);
  const time3 = Math.floor(time2 / 60);

  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

  if (forPlayer) {
    return time > 60
      ? `${padTo2Digits(time3)}:${padTo2Digits(time2)}:${padTo2Digits(time1)}`
      : `${padTo2Digits(time2)}:${padTo2Digits(time1)}`;
  }

  return `${padTo2Digits(time2)}h ${padTo2Digits(time1)}m`;
};

export const humanizeRuntime = (runtime: number) => humanizeTime(runtime, false);

export const humanizeCommentDate = (date: string) => dayjs(date).format('MMMM D, YYYY');

export const humanizeGenreName = (genre: Genre) => genre.replace(/([A-Z])/g, ' $1').trim();

export const validateEmail = (email: string) => {
  const emailRegexp = /\S+@\S+\.\S+/;

  return emailRegexp.test(email) && email.length > 0;
};

export const validatePassword = (password: string) => {
  const lettersRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const minLengthRegExp = /.{2,}/;

  const hasLetters = lettersRegExp.test(password.toLowerCase());
  const hasDigits = digitsRegExp.test(password);
  const hasMinLength = minLengthRegExp.test(password);

  return hasLetters && hasDigits && hasMinLength;
};
