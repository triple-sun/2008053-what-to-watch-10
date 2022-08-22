import React from 'react';
import { ComponentText, MovieList } from '../../const/enums';
import useMovies from '../../hooks/use-movies/use-movies';

const ShowMoreButton = ({handleShowMoreButtonClick}: {handleShowMoreButtonClick: (count: number) => void}) => {
  const {moviesToLoadCount} = useMovies(MovieList.MainPage);

  const onShowMoreButtonClick = () => handleShowMoreButtonClick(moviesToLoadCount);

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>{ComponentText.ShowMore}</button>
    </div>
  );};

export default React.memo(ShowMoreButton);
