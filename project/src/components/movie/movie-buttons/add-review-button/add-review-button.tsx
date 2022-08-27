import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus, ComponentText } from '../../../../const/enums';
import useAppSelector from '../../../../hooks/use-app-selector/use-app-selector';
import { getAuthStatus } from '../../../../store/user/user-selectors';

const REVIEW_LINK_SUFFIX = '/review';

const AddReviewButton = ({id}: {id: number} ) => {
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  return isAuth ? <Link to={`${AppRoute.Movies}${id}${REVIEW_LINK_SUFFIX}`} className="btn film-card__button">{ComponentText.AddReview}</Link> : null;
};

export default React.memo(AddReviewButton);
