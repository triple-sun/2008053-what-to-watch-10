
import { AppProps } from '../../../types/props';
import GenreElement from '../genre-element/genre-element';

const GenresListElement = ({genres}: AppProps) => (
  <ul className="catalog__genres-list">
    {genres.map((genre) => <GenreElement key={genre} genre={genre}/>)}
  </ul>
);

export default GenresListElement;

