import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../const/enums';
import THandlePageChange from '../../../types/page-change';

const UserBlockElement = ({handlePageChange}: THandlePageChange) => {
  const navigate = useNavigate();

  const onUserLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (handlePageChange) {
      handlePageChange();
    }
    navigate(AppRoute.Main);
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a href="#signout" className="user-block__link" onClick={onUserLinkClick}>Sign out</a>
      </li>
    </ul>
  );};

export default UserBlockElement;

