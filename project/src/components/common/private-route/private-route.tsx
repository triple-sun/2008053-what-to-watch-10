import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/enums';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { getAuthStatus } from '../../../utils/selectors/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute = ({children}: PropsWithChildren<PrivateRouteProps>) => (
  useAppSelector(getAuthStatus) === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
);

export default PrivateRoute;
