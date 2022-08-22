import { Link } from 'react-router-dom';
import { AppRoute, ComponentText, ElementTestID } from '../../../../const/enums';

const UserBlockNoAuth = () => (
  <div className="user-block" data-testid={ElementTestID.UserBlockNoAuth}>
    <Link to={AppRoute.Login} className="user-block__link">{ComponentText.SignIn}</Link>
  </div>
);

export default UserBlockNoAuth;
