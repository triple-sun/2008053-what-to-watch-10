import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, ComponentText, ElementTestID } from '../../../../const/enums';

const UserBlockAuth = ({avatarUrl, handleLogoutClick}: {avatarUrl: string, handleLogoutClick: () => void}) => {
  const onLogoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => handleLogoutClick();

  return (
    <ul className="user-block" data-testid={ElementTestID.UserBlockAuth}>
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList} className="user-block__link">
            <img src={avatarUrl} alt="User avatar" width="63" height="63" data-testid={ElementTestID.Avatar}/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link to={AppRoute.Main} className="user-block__link" onClick={onLogoutClick}>{ComponentText.SignOut}</Link>
      </li>
    </ul>
  );};

export default React.memo(UserBlockAuth);
