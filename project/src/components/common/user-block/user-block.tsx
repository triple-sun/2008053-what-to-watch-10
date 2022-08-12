import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { fetchUserInfoAction, logoutAction } from '../../../store/user/user-api-actions';
import { getUserState } from '../../../store/user/user-selectors';
import { checkAuth } from '../../../utils/utils';

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
    ? (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={userInfo.avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a href="#signout" className="user-block__link" onClick={onLogoutClick}>Sign out</a>
        </li>
      </ul>
    )
    : (
      <div className="user-block">
        <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
      </div>
    );
};

export default UserBlock;

