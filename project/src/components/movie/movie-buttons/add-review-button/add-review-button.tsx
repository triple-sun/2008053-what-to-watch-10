import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../../const/enums';
import useAppSelector from '../../../../hooks/use-app-selector/use-app-selector';
import TMovie from '../../../../types/movie';
import { getAuthStatus } from '../../../../utils/selectors/selectors';

const REVIEW_LINK_SUFFIX = '/review';

const AddReviewButton = ({id}: TMovie ) => {
  const authorizationStatus = useAppSelector(getAuthStatus);

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return null;
  }

  return <Link to={`${AppRoute.Movies}${id}${REVIEW_LINK_SUFFIX}`} className="btn film-card__button">Add review</Link>;
};

export default AddReviewButton;
