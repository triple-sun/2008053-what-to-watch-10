import LogoElement from '../logo/logo';

export default function PageFooterElement(): JSX.Element {
  return (
    <footer className="page-footer">
      {LogoElement(true)}

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
