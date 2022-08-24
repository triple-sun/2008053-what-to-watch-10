import { Navigate } from 'react-router-dom';
import HeaderElement from '../../components/common/header-element/header-element';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooter from '../../components/common/page-footer/page-footer';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import { AppRoute, ComponentText, HeaderStyle, PageTestID } from '../../const/enums';
import useUserData from '../../hooks/use-user-data/use-user-data';

const LoginPage = () => {
  const {isAuth, handleLoginSubmit} = useUserData();

  return !isAuth
    ? (
      <div className="user-page" data-testid={PageTestID.LoginPage}>
        <HeaderElement style={HeaderStyle.UserPage}>
          <LogoElement />
          <h1 className="page-title user-page__title">{ComponentText.SignIn}</h1>
        </HeaderElement>
        <div className="sign-in user-page__content">
          <SignInForm handleLoginSubmit={handleLoginSubmit}/>
        </div>
        <PageFooter />
      </div>
    )
    : <Navigate to={AppRoute.Main}/>;
};

export default LoginPage;

