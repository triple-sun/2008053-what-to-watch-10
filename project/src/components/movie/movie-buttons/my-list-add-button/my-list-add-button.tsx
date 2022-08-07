import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, Favorite } from '../../../../const/enums';
import useAppDispatch from '../../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../../hooks/use-app-selector/use-app-selector';
import { fetchFavoritesAction, toggleFavoriteAction } from '../../../../store/main-page/main-page-api-actions';
import { getAuthStatus, getFavorites } from '../../../../utils/selectors/selectors';
import { checkAuth } from '../../../../utils/utils';
import MovieListIcon from '../../movie-images/movie-icons/movie-list-icon/movie-list-icon';

const FAVORITE_SINGLE_STEP = 1;

const MyListAddButton = ({id}: {id: number}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const authorizationStatus = useAppSelector(getAuthStatus);
  const favorites = useAppSelector(getFavorites);
  const isAuth = checkAuth(authorizationStatus, AuthorizationStatus.Auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isInFavorites = favorites.data.some((fav) => fav.id === id);

  const favoritesCount = isFavorite
    ? favorites.data.length + FAVORITE_SINGLE_STEP
    : favorites.data.length;

  const handleFavoriteAction = useCallback(
    () => {
      dispatch(toggleFavoriteAction({id, status: isInFavorites
        ? Favorite.SetNotFavorite
        : Favorite.SetFavorite}));
      setIsFavorite(!isFavorite);
    }
    ,
    [dispatch, id, isFavorite, isInFavorites]
  );

  const onFavoriteButtonClick = isAuth
    ? handleFavoriteAction
    : () => navigate(AppRoute.Login);

  useEffect(() => {
    if (isAuth && !favorites) {
      dispatch(fetchFavoritesAction());
    }
    if (isInFavorites) {
      setIsFavorite(true);
    }
  }, [dispatch, favorites, isAuth, isInFavorites]
  );

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onFavoriteButtonClick}>
      <MovieListIcon isFavorite={isFavorite} />
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="/my-list/"></use>
      </svg>
      <span>My list </span>
      <span className="film-card__count">{favoritesCount}</span>
    </button>
  );
};

export default MyListAddButton;
