import LogoElement from '../../components/common/logo/logo';
import PageFooterElement from '../../components/common/page-footer/page-footer';
import { AppRoute } from '../../const/enums';

const NotFoundPage = () => (
  <div className="user-page">
    <header className="page-header user-page__head">
      <LogoElement />
      <h1 className="page-title user-page__title">404 Not Found</h1>
    </header>
    <div className="sign-in user-page__content">
      <form action={AppRoute.Main} className="sign-in__form">
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Return to Main Page</button>
        </div>
      </form>
    </div>
    <PageFooterElement />
  </div>
);

export default NotFoundPage;

