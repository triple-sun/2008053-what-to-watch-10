import LogoElement from '../logo/logo';

const PageFooterElement = (): JSX.Element => (
  <footer className="page-footer">
    <LogoElement isLight/>

    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export default PageFooterElement;
