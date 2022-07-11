import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/enums';
import PrivateRouteProps from '../../../types/private-route-props';

const PrivateRoute = ({authorizationStatus, children}: PrivateRouteProps): JSX.Element =>(
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
);

export default PrivateRoute;
