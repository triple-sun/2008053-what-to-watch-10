import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { ComponentTestID } from '../../../const/enums';
import useGenres from '../../../hooks/use-genres/use-genres';
import GenreElement from '../genre-element/genre-element';

const GenresList = () => {
  const {
    currentGenres,
    handleGenreChange
  } = useGenres();

  return (
    <ul className="catalog__genres-list" data-testid={ComponentTestID.GenresList}>
      {currentGenres.map((genre) => <GenreElement key={nanoid()} genre={genre} handleGenreChange={handleGenreChange} />)}
    </ul>
  );
};

export default React.memo(GenresList);

