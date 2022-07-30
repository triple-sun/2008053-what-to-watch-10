import { useCallback } from 'react';
import { AuthorizationStatus, Favorite } from '../../../../const/enums';
import useAppDispatch from '../../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../../hooks/use-app-selector/use-app-selector';
import { toggleFavoriteAction } from '../../../../store/main-page/main-page-api-actions';
import { getAuthStatus, getFavorites } from '../../../../utils/selectors/selectors';
import MovieListIcon from '../../movie-images/movie-icons/movie-list-icon/movie-list-icon';

const MyListAddButton = ({id}: {id: number}) => {
  const favorites = useAppSelector(getFavorites);
  const authorizationStatus = useAppSelector(getAuthStatus);

  const dispatch = useAppDispatch();

  const isInList = favorites.some((fav) => fav.id === id);

  const onFavoriteButtonClick = useCallback(
    () => isInList
      ? dispatch(toggleFavoriteAction({id: id, status: Favorite.SetNotFavorite}))
      : dispatch(toggleFavoriteAction({id: id, status: Favorite.SetFavorite})),
    [dispatch, id, isInList]
  );

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return null;
  }

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onFavoriteButtonClick}>
      <MovieListIcon isInList={isInList} />
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="/my-list/"></use>
      </svg>
      <span>My list </span>
      <span className="film-card__count">{favorites.length}</span>
    </button>
  );
};


export default MyListAddButton;
