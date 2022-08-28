import { useCallback, useLayoutEffect, useState } from 'react';
import { FAVORITE_SINGLE_STEP } from '../../const/const';
import { AuthStatus } from '../../const/enums';
import { loginAction, logoutAction, toggleFavoriteAction } from '../../store/user/user-api-actions';
import { getUserState } from '../../store/user/user-selectors';
import { TAuthData } from '../../types/data';
import { checkAuth } from '../../utils/utils';
import useAppDispatch from '../use-app-dispatch/use-app-dispatch';
import useAppSelector from '../use-app-selector/use-app-selector';

const useUserData = (id?: number) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);

  const {userInfo, favorites: {data: favorites, isLoaded}, authStatus} = useAppSelector(getUserState);

  const isAuth = checkAuth(authStatus, AuthStatus.Auth);

  const dispatch = useAppDispatch();

  const isInFavorites = favorites ? favorites.some((fav) => fav.id === id) : false;

  const handleLoginSubmit = useCallback(
    (authData: TAuthData) => {
      dispatch(loginAction(authData));
    }, [dispatch]);

  const handleLogoutClick = useCallback(
    () => {
      dispatch(logoutAction());
    }, [dispatch]);

  const handleFavoriteAction = useCallback(
    () => {
      if (id) {
        dispatch(toggleFavoriteAction({id, status: Number(!isInFavorites)}));
        setFavoritesCount(isFavorite
          ? favoritesCount - FAVORITE_SINGLE_STEP
          : favoritesCount + FAVORITE_SINGLE_STEP);
        setIsFavorite(!isFavorite);

      }
    },[dispatch, favoritesCount, id, isFavorite, isInFavorites]);

  useLayoutEffect(() => {
    if (!isAuth) {
      setFavoritesCount(0);
      setIsFavorite(false);
    }
    if (isLoaded) {
      setFavoritesCount(favorites.length);
      setIsFavorite(isInFavorites);
    }
  }, [dispatch, favorites, isAuth, isInFavorites, isLoaded, setFavoritesCount, setIsFavorite]);

  return {
    isAuth,
    userInfo,
    favorites,
    isFavorite,
    favoritesCount,
    isLoaded,
    handleLoginSubmit,
    handleLogoutClick,
    handleFavoriteAction,
  };
};

export default useUserData;
