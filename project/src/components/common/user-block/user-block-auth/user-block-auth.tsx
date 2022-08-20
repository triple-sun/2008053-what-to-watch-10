import { ComponentText, ElementTestID } from '../../../../const/enums';

const UserBlockAuth = ({avatarUrl, handleLogoutClick}: {avatarUrl: string, handleLogoutClick: () => void}) => {
  const onLogoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleLogoutClick();
  };

  return (
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
  );};

export default UserBlockAuth;
