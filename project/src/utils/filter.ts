import { Genre } from '../const/enums';
import TMovie from '../types/movie';

const genreFilter = ({movie, genre}: {genre: Genre, movie: TMovie}) => movie.genre === genre;

export default genreFilter;
