import dayjs from 'dayjs';
import { RatingName, RatingMinNumber, AuthorizationStatus, Genre, Favorite } from '../const/enums';
import TMovie from '../types/movie';

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

export const filterMoviesByGenre = (movies: TMovie[], genre: Genre) => {
  const filteredMovies = movies.filter((movie) => movie.genre === genre);
  return filteredMovies.length === 0 ? null : filteredMovies;
};

export const filterFavorites = (movies: readonly TMovie[]) => movies.filter((movie) => movie.isFavorite);

export const checkAuth = (authorizationStatus: AuthorizationStatus, reference: AuthorizationStatus): boolean => authorizationStatus === reference;

export const getFavoriteStatus = (isFavorite: boolean) => isFavorite ? Favorite.SetNotFavorite : Favorite.SetFavorite;

export const checkMovie = (movie: TMovie | null | undefined, id: string | undefined) => !movie || movie.id.toString() !== id;
