import LogoElement from '../logo/logo';

const PageFooterLogoSettings = {
  IS_LIGHT: true
};

const PageFooterElement = (): JSX.Element => (
  <footer className="page-footer">
    <LogoElement isLight={PageFooterLogoSettings.IS_LIGHT}/>

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export default PageFooterElement;
