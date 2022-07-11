import { AuthorizationStatus } from '../const/enums';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default PrivateRouteProps;
