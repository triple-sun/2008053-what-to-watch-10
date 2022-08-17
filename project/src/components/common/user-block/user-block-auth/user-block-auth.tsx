import { ComponentText, ElementTestID } from '../../../../const/enums';

const UserBlockAuth = ({avatarUrl, onLogoutClick}: {avatarUrl: string, onLogoutClick: (e: React.MouseEvent<HTMLAnchorElement>) => void}) => (
  <ul className="user-block" data-testid={ElementTestID.UserBlockAuth}>
    <li className="user-block__item">
      <div className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63" data-testid={ElementTestID.Avatar}/>
      </div>
    </li>
    <li className="user-block__item">
      <a href="#signout" className="user-block__link" onClick={onLogoutClick}>{ComponentText.SignOut}</a>
    </li>
  </ul>
);

export default UserBlockAuth;
