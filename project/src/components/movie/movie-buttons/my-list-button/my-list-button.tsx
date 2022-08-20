import React from 'react';
import { ComponentText, ElementTestID } from '../../../../const/enums';
import MovieAddIcon from '../../movie-images/movie-icons/movie-list-icons/movie-add-icon/movie-add-icon';
import MovieAddedIcon from '../../movie-images/movie-icons/movie-list-icons/movie-added-icon/movie-added-icon';

type MyListAddButtonProps = {
  favoritesCount: number;
  onFavoriteButtonClick: () => void;
  isFavorite?: boolean
}

const MyListButton = ({favoritesCount, onFavoriteButtonClick, isFavorite = false}: MyListAddButtonProps) => (
  <button className="btn btn--list film-card__button" type="button" onClick={onFavoriteButtonClick} data-testid={ElementTestID.MyListButton}>
    {isFavorite ? <MovieAddedIcon /> : <MovieAddIcon />}
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="/my-list/"></use>
    </svg>
    <span>{ComponentText.MyList}</span>
    <span className="film-card__count">{favoritesCount}</span>
  </button>
);

export default React.memo(MyListButton);
