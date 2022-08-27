import React from 'react';
import { ComponentText } from '../../const/enums';

type ShowMoreButtonProps = {
  moviesToLoadCount?: number;
  handleShowMoreButtonClick: (count: number) => void;
}

const ShowMoreButton = ({moviesToLoadCount = 0, handleShowMoreButtonClick}: ShowMoreButtonProps) => {
  const onShowMoreButtonClick = () => handleShowMoreButtonClick(moviesToLoadCount);

  const shouldRender = moviesToLoadCount > 0;

  return shouldRender
    ? (
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>{ComponentText.ShowMore}</button>
      </div>
    )
    : null;
};

export default React.memo(ShowMoreButton);
