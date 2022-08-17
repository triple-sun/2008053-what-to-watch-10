import React from 'react';
import { ComponentText } from '../../const/enums';

const MyListTitle = ({count}: {count: number}) => <h1 className="page-title user-page__title">{ComponentText.MyList} <span className="user-page__film-count">{count}</span></h1>;

export default React.memo(MyListTitle);

