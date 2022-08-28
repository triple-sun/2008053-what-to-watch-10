import React from 'react';
import useUserData from '../../../hooks/use-user-data/use-user-data';
import UserBlockAuth from './user-block-auth/user-block-auth';
import UserBlockNoAuth from './user-block-no-auth/user-block-no-auth';

const UserBlock = () => {
  const {userInfo, isAuth, handleLogoutClick} = useUserData();

  return isAuth && userInfo
    ? <UserBlockAuth avatarUrl={userInfo.avatarUrl} handleLogoutClick={handleLogoutClick}/>
    : <UserBlockNoAuth />;
};

export default React.memo(UserBlock);

