import { Navigate } from 'react-router-dom';

const goToPage = (page: string) => <Navigate to={page} />;

const minutesToHoursAndMinutes = (totalMinutes: number) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:00`;
};

const getRandomInteger = (a: number, b: number) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {
  goToPage,
  minutesToHoursAndMinutes,
  getRandomInteger
};
