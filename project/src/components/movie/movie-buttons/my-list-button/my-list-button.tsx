import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, ComponentText, ElementTestID } from '../../../../const/enums';
import MovieAddIcon from '../../movie-images/movie-icons/movie-list-icons/movie-add-icon/movie-add-icon';
import MovieAddedIcon from '../../movie-images/movie-icons/movie-list-icons/movie-added-icon/movie-added-icon';

type MyListAddButtonProps = {
  isAuth: boolean;
  favoritesCount: number;
  isFavorite?: boolean
  handleFavoriteAction: () => void;
}

const MyListButton = ({isAuth, favoritesCount, isFavorite = false, handleFavoriteAction}: MyListAddButtonProps) => {
  const onFavoriteButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => handleFavoriteAction();

  return isAuth
    ? (
      <button className="btn btn--list film-card__button" type="button" onClick={onFavoriteButtonClick} data-testid={ElementTestID.MyListButton}>
        {isFavorite ? <MovieAddedIcon /> : <MovieAddIcon />}
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="/my-list/"></use>
        </svg>
        <span>{ComponentText.MyList}</span>
        <span className="film-card__count">{favoritesCount}</span>
      </button>
    )
    : (
      <Link to={AppRoute.Login} className="btn btn--list film-card__button" type="button" data-testid={ElementTestID.MyListButton}>
        {<MovieAddIcon />}
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="/my-list/"></use>
        </svg>
        <span>{ComponentText.MyList}</span>
        <span className="film-card__count">{favoritesCount}</span>
      </Link>
    );
};

export default React.memo(MyListButton);
