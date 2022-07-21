
import { AppProps } from '../../../types/props';
import Genre from '../genre/genre';

const GenresList = ({genres}: AppProps) => (
  <ul className="catalog__genres-list">
    {genres.map((genre) => <Genre key={genre} genre={genre}/>)}
  </ul>
);

export default GenresList;

