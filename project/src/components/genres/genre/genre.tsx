import { Genre } from '../../../const/enums';
import { GenreProps } from '../../../types/props';

const GenreElement = ({genre, selectedGenre, handleGenreClick}: GenreProps & {genre: Genre}) => {
  const onGenreClick = () => selectedGenre === genre ? null : handleGenreClick(genre);

  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <a href={`#${genre}`} className="catalog__genres-link" onClick={onGenreClick}>{genre}</a>
    </li>
  );};

export default GenreElement;
