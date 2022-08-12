import React from 'react';

const MyListTitle = ({count}: {count: number}) => <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{count}</span></h1>;

export default React.memo(MyListTitle);

