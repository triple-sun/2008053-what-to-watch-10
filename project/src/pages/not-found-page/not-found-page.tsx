import { Link } from 'react-router-dom';
import HeaderElement from '../../components/common/header-element/header-element';
import LogoElement from '../../components/common/logo-element/logo-element';
import PageFooter from '../../components/common/page-footer/page-footer';
import { AppRoute, ComponentText, HeaderStyle, PageTestID } from '../../const/enums';
import './not-found-page.css';

const NotFoundPage = () => (
  <div className="not-found-page" data-testid={PageTestID.NotFoundPage}>
    <HeaderElement style={HeaderStyle.UserPage}>
      <LogoElement />
      <h1 className="page-title not-found-page__title">{ComponentText.NotFound}</h1>
    </HeaderElement>
    <div className="go-back not-found-page__content">
      <form className="go-back__form">
        <div className="go-back__submit">
          <Link to={AppRoute.Main} className="go-back__btn" type="submit">{ComponentText.ToMainPage}</Link>
        </div>
      </form>
    </div>
    <PageFooter />
  </div>
);

export default NotFoundPage;

