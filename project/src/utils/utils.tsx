import { Navigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { RatingName, RatingValue } from '../const/enums';
import TMovie from '../types/movie';

const goToPage = (page: string) => <Navigate to={page} />;

const minutesToHoursAndMinutes = (totalMinutes: number, forPlayer = true) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

  return forPlayer
    ? `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:00`
    : `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`;
};

const humanizeRuntime = (runtime: number) => minutesToHoursAndMinutes(runtime, false);

const getRandomInteger = (a: number, b: number) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const humanizeCommentDate = (date: string) => dayjs(date).format('MMMM D, YYYY');


const getRatingName = (rating: number) => {
  if (rating < RatingValue.Normal) {
    return RatingName.Bad;
  }
  if (rating < RatingValue.Good) {
    return RatingName.Normal;
  }
  if (rating < RatingValue.VeryGood) {
    return RatingName.Good;
  }
  if (rating < RatingValue.Awesome) {
    return RatingName.VeryGood;
  }
  if (rating === RatingValue.Awesome) {
    return RatingName.Awesome;
  }
};
const findMovieById = (movies: readonly TMovie[], id?: string) => movies.find((movie) => movie.id.toString() === id);

export {
  goToPage,
  minutesToHoursAndMinutes,
  humanizeRuntime,
  getRandomInteger,
  humanizeCommentDate,
  getRatingName,
  findMovieById
};
