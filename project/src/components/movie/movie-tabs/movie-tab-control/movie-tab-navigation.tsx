import React from 'react';
import { Link, } from 'react-router-dom';
import { MOVIE_TAB_ACTIVE_CLASS, MOVIE_TAB_CLASS } from '../../../../const/const';
import { ElementTestID, MovieNavigation } from '../../../../const/enums';

type MovieTabProps = {
  name: MovieNavigation;
  activeTab: MovieNavigation;
  handleTabEvent: (activeTab: MovieNavigation) => void;
}

const MovieTabNavigation = ({name, activeTab, handleTabEvent}: MovieTabProps) => {
  const onTabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleTabEvent(name);
  };

  return (
    <li className={name === activeTab ? MOVIE_TAB_ACTIVE_CLASS : MOVIE_TAB_CLASS} data-testid={ElementTestID.MovieTab}>
      <Link to={name.toLowerCase()} className="film-nav__link" onClick={onTabClick}>{name}</Link>
    </li>
  );
};

export default React.memo(MovieTabNavigation);
