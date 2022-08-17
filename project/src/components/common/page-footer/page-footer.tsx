import { ComponentText } from '../../../const/enums';
import LogoElement from '../logo-element/logo-element';

const PageFooter = () => (
  <footer className="page-footer">
    <LogoElement isLight/>
    <div className="copyright">
      <p>{ComponentText.Footer}</p>
    </div>
  </footer>
);

export default PageFooter;
