import React from 'react';
import { ComponentTestID, Genre } from '../../../const/enums';
import GenreElement from '../genre-element/genre-element';

const GenresList = ({currentGenres, handleGenreChange}: {currentGenres: Genre[], handleGenreChange: (genre: Genre) => void}) => (
  <ul className="catalog__genres-list" data-testid={ComponentTestID.GenresList}>
    {currentGenres.map((genre) => <GenreElement key={genre} genre={genre} handleGenreChange={handleGenreChange} />)}
  </ul>
);

export default React.memo(GenresList);

