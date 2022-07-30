import { useCallback } from 'react';
import { AuthorizationStatus, Favorite } from '../../../../const/enums';
import useAppDispatch from '../../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../../hooks/use-app-selector/use-app-selector';
import { toggleFavoriteAction } from '../../../../store/main-page/main-page-api-actions';
import { getAuthStatus, getFavorites } from '../../../../utils/selectors/selectors';

const MyListAddButton = ({id}: {id: number}) => {
  const favorites = useAppSelector(getFavorites);
  const authorizationStatus = useAppSelector(getAuthStatus);

  const dispatch = useAppDispatch();

  const onFavoriteButtonClick = useCallback(
    () => favorites.some((fav) => fav.id === id)
      ? dispatch(toggleFavoriteAction({id: id, status: Favorite.SetNotFavorite}))
      : dispatch(toggleFavoriteAction({id: id, status: Favorite.SetFavorite})),
    [dispatch, favorites, id]
  );

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return null;
  }

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onFavoriteButtonClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="/my-list/"></use>
      </svg>
      <span>My list </span>
      <span className="film-card__count">{favorites.length}</span>
    </button>
  );
};


export default MyListAddButton;
