import { AuthorizationStatus } from '../../../const/enums';
import useAppSelector from '../../../hooks/use-app-selector/use-app-selector';
import { getAuthStatus } from '../../../utils/selectors/selectors';

const UserBlock = () => {
  const authorizationStatus = useAppSelector(getAuthStatus);

  return authorizationStatus === AuthorizationStatus.Auth
    ? (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a href="#signout" className="user-block__link">Sign out</a>
        </li>
      </ul>
    )
    : (
      <div className="user-block">
        <a href="sign-in.html" className="user-block__link">Sign in</a>
      </div>
    );
};

export default UserBlock;

