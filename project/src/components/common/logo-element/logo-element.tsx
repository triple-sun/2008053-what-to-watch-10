import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_LINK_CLASS, LOGO_LINK_LIGHT_CLASS } from '../../../const/const';
import { AppRoute, ComponentTestID } from '../../../const/enums';

const LogoElement = ({isLight = false}: {isLight?: boolean}) => (
  <div className="logo">
    <Link className={isLight ? LOGO_LINK_LIGHT_CLASS : LOGO_LINK_CLASS} to={AppRoute.Main} data-testid={ComponentTestID.Logo}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  </div>
);

export default React.memo(LogoElement);
