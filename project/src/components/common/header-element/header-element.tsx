import React, { PropsWithChildren } from 'react';
import { ElementTestID } from '../../../const/enums';

const HeaderElement = ({style, children}: PropsWithChildren<{style?: string}>) => <header className={`page-header ${ style ? style : '' }`} data-testid={ElementTestID.Header}>{children}</header>;

export default React.memo(HeaderElement);
