import HeaderElement from '../../components/common/header-element/header-element';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooterElement from '../../components/common/page-footer/page-footer-element';
import SignInForm from '../../components/user/sign-in-form/sign-in-form';
import { HeaderStyle } from '../../const/enums';

const LoginPage = () => (
  <div className="user-page">
    <HeaderElement style={HeaderStyle.UserPage}>
      <LogoElement />
      <h1 className="page-title user-page__title">Sign in</h1>
    </HeaderElement>

    <div className="sign-in user-page__content">
      <SignInForm />
    </div>

    <PageFooterElement />
  </div>
);

export default LoginPage;

