
import { GenreList } from '../../../const/const';
import { Genre } from '../../../const/enums';
import GenreElement from '../genre/genre';

const GenresList = ({selectedGenre, handleGenreClick}: {selectedGenre: Genre, handleGenreClick: (genre: Genre) => void}) => (
  <ul className="catalog__genres-list">
    {GenreList.map((genre, index) => <GenreElement key={genre} genre={Object.values(Genre)[index]} selectedGenre={selectedGenre} handleGenreClick={handleGenreClick}/>)}
  </ul>
);

export default GenresList;

