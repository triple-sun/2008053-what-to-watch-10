import { Navigate } from 'react-router-dom';
import TMovie from '../types/movie-data';

const findMovieByID = (movie: TMovie, id: string) => movie.id === id;

const goToPage = (page: string) => <Navigate to={page} />;

//https://www.geeksforgeeks.org/how-to-convert-a-string-into-kebab-case-using-javascript/
const convertStringToKebabCase = (str: string) => str
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/[\s_:]+/g, '-')
  .toLowerCase();


export {
  findMovieByID,
  convertStringToKebabCase,
  goToPage
};
