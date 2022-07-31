import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/enums';
import useAppDispatch from '../../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { logoutAction } from '../../../store/user/user-api-actions';
import { getAuthStatus, getUserData } from '../../../utils/selectors/selectors';

const UserBlock = () => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const userData = useAppSelector(getUserData);

  const dispatch = useAppDispatch();

  const onLogoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return authorizationStatus === AuthorizationStatus.Auth
    ? (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={userData?.avatarUrl} alt="User avatar" width="63" height="63" />
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

