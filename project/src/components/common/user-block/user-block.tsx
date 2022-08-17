import React, { useEffect } from 'react';
import { AuthStatus } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { fetchUserInfoAction, logoutAction } from '../../../store/user/user-api-actions';
import { getUserState } from '../../../store/user/user-selectors';
import { checkAuth } from '../../../utils/utils';
import UserBlockAuth from './user-block-auth/user-block-auth';
import UserBlockNoAuth from './user-block-no-auth/user-block-no-auth';

const UserBlock = () => {
  const {data: {userInfo}, authStatus} = useAppSelector(getUserState);
  const isAuth = checkAuth(authStatus, AuthStatus.Auth);

  const dispatch = useAppDispatch();

  const onLogoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  useEffect(() => {
    if (!userInfo && isAuth) {
      dispatch(fetchUserInfoAction());
    }
  }, [dispatch, isAuth, userInfo]);

  return isAuth && userInfo
    ? <UserBlockAuth avatarUrl={userInfo.avatarUrl} onLogoutClick={onLogoutClick}/>
    : <UserBlockNoAuth />;
};

export default UserBlock;

