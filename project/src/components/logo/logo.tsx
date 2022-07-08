type LogoElementProps = {
  isLight?: boolean
}

const LogoElement = ({isLight = true}: LogoElementProps): JSX.Element => (
  <div className="logo">
    <a href="main.html" className={isLight ? 'logo__link logo__link--light' : 'logo__link'}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </a>
  </div>
);

export default LogoElement;
