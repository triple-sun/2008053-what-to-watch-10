import { nanoid } from '@reduxjs/toolkit';
import React, { useCallback, useEffect } from 'react';
import { ComponentTestID, Genre } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useGenres from '../../../hooks/use-genres/use-genres';
import { setGenre } from '../../../store/main-page/main-page-actions';
import GenreElement from '../genre-element/genre-element';

const GenresList = () => {
  const {currentGenres} = useGenres();

  const dispatch = useAppDispatch();

  const handleGenreChange = useCallback(
    (genre: Genre) => {
      dispatch(setGenre(genre));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(setGenre(Genre.AllGenres));
  });

  return (
    <ul className="catalog__genres-list" data-testid={ComponentTestID.GenresList}>
      {currentGenres.map((genre) => <GenreElement key={nanoid()} genre={genre} handleGenreChange={handleGenreChange} />)}
    </ul>
  );
};

export default React.memo(GenresList);

