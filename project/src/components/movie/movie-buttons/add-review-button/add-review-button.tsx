import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../../const/enums';
import useAppSelector from '../../../../hooks/use-app-selector/use-app-selector';
import { getAuthStatus } from '../../../../store/user/user-selectors';
import TMovie from '../../../../types/movie';

const REVIEW_LINK_SUFFIX = '/review';

const AddReviewButton = ({id}: TMovie ) => {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isAuth = (authorizationStatus === AuthorizationStatus.Auth);

  return isAuth ? <Link to={`${AppRoute.Movies}${id}${REVIEW_LINK_SUFFIX}`} className="btn film-card__button">Add review</Link> : null;
};

export default React.memo(AddReviewButton);
