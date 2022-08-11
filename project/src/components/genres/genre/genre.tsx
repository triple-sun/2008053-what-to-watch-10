import React from 'react';
import { GenreName } from '../../../const/enums';
import { GenreProps } from '../../../types/props';

const GENRE_NAVIGATION_ACTIVE_CLASS = 'catalog__genres-item--active';

const GenreElement = ({genre, selectedGenre, handleGenreClick}: GenreProps) => {
  const onGenreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleGenreClick(genre);
  };

  return (
    <li className={`catalog__genres-item ${selectedGenre === genre ? GENRE_NAVIGATION_ACTIVE_CLASS : ''}`}>
      <a href={`/${genre}`} className="catalog__genres-link" onClick={onGenreClick}>{GenreName[genre]}</a>
    </li>
  );
};

export default React.memo(GenreElement);
