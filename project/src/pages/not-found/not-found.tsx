import HeaderElement from '../../components/common/header-element/header-element';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooterElement from '../../components/common/page-footer/page-footer-element';
import { AppRoute, HeaderStyle } from '../../const/enums';

const NotFoundPage = () => (
  <div className="not-found-page">
    <HeaderElement style={HeaderStyle.UserPage}>
      <LogoElement />
      <h1 className="page-title not-found-page__title">404 Not Found</h1>
    </HeaderElement>
    <div className="go-back not-found-page__content">
      <form action={AppRoute.Main} className="go-back__form">
        <div className="go-back__submit">
          <button className="go-back__btn" type="submit">Return to Main Page</button>
        </div>
      </form>
    </div>
    <PageFooterElement />
  </div>
);

export default NotFoundPage;

