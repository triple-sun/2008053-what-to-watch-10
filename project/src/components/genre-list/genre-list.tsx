import TListProps from '../../types/list-props';
import GenreElement from '../genre-element/genre-element';

const GenreListComponent = ({genres}: TListProps<string>) => {
  const genreElements = genres.map((genre) => <GenreElement key={genre} value={genre} />);

  return (
    <ul className="catalog__genres-list">
      {genreElements}
    </ul>
  );
};

export default GenreListComponent;

