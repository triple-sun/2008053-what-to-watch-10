import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/enums';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element
}

const PrivateRoute = ({authorizationStatus, children}: PropsWithChildren<PrivateRouteProps>) => (
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
);

export default PrivateRoute;
