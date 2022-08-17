import HeaderElement from '../../components/common/header-element/header-element';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooter from '../../components/common/page-footer/page-footer';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import { ComponentText, HeaderStyle, PageTestID } from '../../const/enums';

const LoginPage = () => (
  <div className="user-page" data-testid={PageTestID.LoginPage}>
    <HeaderElement style={HeaderStyle.UserPage}>
      <LogoElement />
      <h1 className="page-title user-page__title">{ComponentText.SignIn}</h1>
    </HeaderElement>
    <div className="sign-in user-page__content">
      <SignInForm />
    </div>
    <PageFooter />
  </div>
);

export default LoginPage;

