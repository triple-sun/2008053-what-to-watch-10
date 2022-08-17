import React from 'react';
import { GENRE_ELEMENT_ACTIVE_CLASS } from '../../../const/const';
import { ElementTestID, GenreName } from '../../../const/enums';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { getSelectedGenre } from '../../../store/main-page/main-page-selectors';
import { GenreProps } from '../../../types/props';

const GenreElement = ({genre, handleGenreClick}: GenreProps) => {
  const selectedGenre = useAppSelector(getSelectedGenre);

  const onGenreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleGenreClick(genre);
  };

  return (
    <li className={selectedGenre === genre ? GENRE_ELEMENT_ACTIVE_CLASS : 'catalog__genres-item'} data-testid={ElementTestID.GenreElement}>
      <a href={`/${genre}`} className="catalog__genres-link" onClick={onGenreClick}>{GenreName[genre]}</a>
    </li>
  );
};

export default React.memo(GenreElement);
