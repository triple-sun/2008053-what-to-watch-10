import TList from '../../types/list';
import GenreElement from '../genre-element/genre-element';

const GenreListComponent = ({genres}: TList<string>) => {
  const genreElements = genres.map((genre) => <GenreElement key={genre} value={genre} />);

  return (
    <ul className="catalog__genres-list">
      {genreElements}
    </ul>
  );
};

export default GenreListComponent;

