import React from 'react';
import { Link } from 'react-router-dom';
import { ComponentText } from '../../../const/enums';
import TMovie from '../../../types/movie';

const Breadcrumbs = ({id, name}: TMovie) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link to={`/films/${id}/review`}className="breadcrumbs__link">{ComponentText.AddReview}</Link>
      </li>
    </ul>
  </nav>
);

export default React.memo(Breadcrumbs);
