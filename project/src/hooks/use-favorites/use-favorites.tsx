import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const/enums';
import { fetchFavoritesAction, toggleFavoriteAction } from '../../store/user/user-api-actions';
import { getAuthStatus, getFavorites } from '../../store/user/user-selectors';
import { checkAuth } from '../../utils/utils';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';

const FAVORITE_SINGLE_STEP = 1;

const useFavorites = (id: number) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);

  const authStatus = useAppSelector(getAuthStatus);

  const isAuth = checkAuth(authStatus, AuthStatus.Auth);

  const favorites = useAppSelector(getFavorites);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isInFavorites = favorites.some((fav) => fav.id === id);

  const handleFavoriteAction = useCallback(
    () => {
      dispatch(toggleFavoriteAction({id, status: Number(!isInFavorites)}));
      setIsFavorite(!isFavorite);
      setFavoritesCount(isFavorite
        ? favoritesCount - FAVORITE_SINGLE_STEP
        : favoritesCount + FAVORITE_SINGLE_STEP);
    }
    ,
    [dispatch, favoritesCount, id, isFavorite, isInFavorites]
  );

  const onFavoriteButtonClick = isAuth
    ? handleFavoriteAction
    : () => navigate(AppRoute.Login);

  useEffect(() => {
    if (isAuth && !favorites) {
      dispatch(fetchFavoritesAction());
    }
    if (favorites) {
      setFavoritesCount(favorites.length);
      setIsFavorite(isInFavorites);
    }
  }, [dispatch, favorites, isAuth, isInFavorites, setFavoritesCount, setIsFavorite]
  );

  return {
    isFavorite,
    favoritesCount,
    onFavoriteButtonClick
  };
};

export default useFavorites;
