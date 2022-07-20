import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/enums';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: ReactNode;
}

const PrivateRoute = ({authorizationStatus, children}: PrivateRouteProps) => (
  authorizationStatus === AuthorizationStatus.Auth
    ? <>{children}</>
    : <Navigate to={AppRoute.Login} />
);

export default PrivateRoute;
