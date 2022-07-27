import THandlePageChange from '../../../types/page-change';
import LogoElement from '../logo-element/logo-element';

const PageFooterElement = ({handlePageChange}: THandlePageChange) => (
  <footer className="page-footer">
    <LogoElement handlePageChange={handlePageChange} isLight/>
    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>
);

export default PageFooterElement;
