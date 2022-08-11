import React, { PropsWithChildren } from 'react';

const HeaderElement = ({style, children}: PropsWithChildren<{style?: string}>) => <header className={`page-header ${ style ? style : '' }`}>{children}</header>;

export default React.memo(HeaderElement);
