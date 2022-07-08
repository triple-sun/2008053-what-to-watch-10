function LogoElement(isLight = false) {
  const logoLinkClassName = isLight ? 'logo__link logo__link--light' : 'logo__link';
  return (
    <div className="logo">
      <a href="main.html" className={logoLinkClassName}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default LogoElement;
