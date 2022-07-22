import React from 'react';
import { GENRE_NAVIGATION_ACTIVE_CLASS } from '../../../const/const';
import { GenreProps } from '../../../types/props';

const GenreElement = ({genre, selectedGenre, handleGenreClick}: GenreProps) => {
  const onGenreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleGenreClick(genre);
  };

  return (
    <li className={`catalog__genres-item ${selectedGenre === genre ? GENRE_NAVIGATION_ACTIVE_CLASS : ''}`}>
      <a href={`#${genre}`} className="catalog__genres-link" onClick={onGenreClick}>{genre}</a>
    </li>
  );
};

export default GenreElement;
