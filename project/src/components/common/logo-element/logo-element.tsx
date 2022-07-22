import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../const/enums';
import THandlePageChange from '../../../types/page-change';

const LogoElement = ({isLight = false, handlePageChange}: THandlePageChange & {isLight?: boolean}) => {
  const navigate = useNavigate();

  const onLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (handlePageChange) {
      handlePageChange();
    }
    navigate(AppRoute.Main);
  };

  return (
    <div className="logo">
      <Link className={isLight ? 'logo__link logo__link--light' : 'logo__link'} to={AppRoute.Main} onClick={onLogoClick}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );};

export default LogoElement;
