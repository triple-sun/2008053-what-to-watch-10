import { Navigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { RatingName, RatingMinNumber } from '../const/enums';

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

export {
  goToPage,
  minutesToHoursAndMinutes,
  humanizeRuntime,
  getRandomInteger,
  humanizeCommentDate,
  getRatingName
};
