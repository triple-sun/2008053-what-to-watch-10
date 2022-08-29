import React from 'react';
import { GENRE_ELEMENT_ACTIVE_CLASS, GENRE_ELEMENT_CLASS } from '../../../const/const';
import { ElementTestID, Genre } from '../../../const/enums';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { getSelectedGenre } from '../../../store/main-page/main-page-selectors';
import { humanizeGenreName } from '../../../utils/utils';

type GenreProps = {
  genre: Genre;
  handleGenreChange: (genre: Genre) => void;
}

const GenreElement = ({genre, handleGenreChange: handleGenreClick}: GenreProps) => {
  const selectedGenre = useAppSelector(getSelectedGenre);

  const onGenreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleGenreClick(genre);
  };

  return (
    <li className={genre === selectedGenre ? GENRE_ELEMENT_ACTIVE_CLASS : GENRE_ELEMENT_CLASS} onClick={onGenreClick} data-testid={ElementTestID.GenreElement}>
      <a href={`/${genre}`} className="catalog__genres-link">{humanizeGenreName(genre)}</a>
    </li>
  );
};

export default React.memo(GenreElement);
