import React from 'react';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import { ComponentText } from '../../const/enums';

type ShowMoreButtonProps = {
  totalMovieCount: number;
  renderedMoviesCount: number;
  handleShowMoreButtonClick: (count: number) => void
};

const ShowMoreButton = ({totalMovieCount, renderedMoviesCount, handleShowMoreButtonClick}: ShowMoreButtonProps) => {
  const moviesToLoadCount = Math.min((totalMovieCount - renderedMoviesCount), MOVIE_CARD_MAIN_COUNT);

  const onShowMoreButtonClick = () => {
    handleShowMoreButtonClick(moviesToLoadCount);
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>{ComponentText.ShowMore}</button>
    </div>
  );};

export default React.memo(ShowMoreButton);
