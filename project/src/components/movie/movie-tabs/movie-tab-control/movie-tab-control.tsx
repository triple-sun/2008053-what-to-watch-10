import { Link, } from 'react-router-dom';
import { MovieNavigation } from '../../../../const/enums';

const NAV_ITEM_ACTIVE_CLASS = 'film-nav__item--active';

type MovieTabProps = {
  name: MovieNavigation;
  activeTab: MovieNavigation;
  handleTabEvent: (activeTab: MovieNavigation) => void;
}

const MovieTabNavigation = ({name, activeTab, handleTabEvent}: MovieTabProps) => {
  const onTabClick = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
    handleTabEvent(name);
  };
  return (
    <li className={`film-nav__item ${name === activeTab ? NAV_ITEM_ACTIVE_CLASS : ''}`}>
      <Link to={`#${name.toLowerCase()}`} className="film-nav__link" onClick={onTabClick}>{name}</Link>
    </li>
  );
};

export default MovieTabNavigation;

