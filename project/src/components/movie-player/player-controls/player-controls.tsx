import React from 'react';
import { PropsWithChildren } from 'react';

const PlayerControls = ({children, isRow}: PropsWithChildren<{isRow?: boolean}>) => <div className={`player__controls${isRow ? '-row' : ''}`}>{children}</div>;

export default React.memo(PlayerControls);
