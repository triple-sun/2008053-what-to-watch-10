import React, { useCallback, useEffect } from 'react';
import { ComponentTestID, Genre } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import useGenres from '../../../hooks/use-genres/use-genres';
import { setGenre } from '../../../store/main-page/main-page-actions';
import { getMainPageState } from '../../../store/main-page/main-page-selectors';
import GenreElement from '../genre-element/genre-element';

const GenresList = () => {
  const {data: {movies}} = useAppSelector(getMainPageState);
  const dispatch = useAppDispatch();

  const currentGenres = useGenres();

  const handleGenreClick = useCallback(
    (genre: Genre) => {
      dispatch(setGenre(genre));},
    [dispatch]
  );

  useEffect(() => {
    dispatch(setGenre(Genre.AllGenres));
  },
  [dispatch]);

  if (movies) {
    return (
      <ul className="catalog__genres-list" data-testid={ComponentTestID.GenresList}>
        {currentGenres.map((genre) => <GenreElement key={`${genre}`} genre={genre} handleGenreClick={handleGenreClick} />)}
      </ul>
    );
  }
  return null;
};

export default React.memo(GenresList);

