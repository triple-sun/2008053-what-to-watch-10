import { useCallback, useEffect } from 'react';
import { GenreList } from '../../../const/const';
import { Genre } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { changeGenre } from '../../../store/main-page-actions';
import { getSelectedGenre } from '../../../utils/selectors/selectors';
import GenreElement from '../genre/genre';

const GenresList = ({handleGenreReset}: {handleGenreReset: () => void}) => {
  const selectedGenre = useAppSelector(getSelectedGenre);
  const dispatch = useAppDispatch();

  const handleGenreClick = useCallback(
    (genre: Genre) => {
      dispatch(changeGenre(genre));},
    [dispatch]
  );

  useEffect(
    () => handleGenreReset,
    [handleGenreReset]
  );

  return (
    <ul className="catalog__genres-list">
      {GenreList.map((genre, index) => <GenreElement key={genre} genre={Object.values(Genre)[index]} selectedGenre={selectedGenre} handleGenreClick={handleGenreClick}/>)}
    </ul>
  );
};

export default GenresList;

