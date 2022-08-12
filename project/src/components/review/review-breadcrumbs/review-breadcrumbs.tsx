import React from 'react';
import { Link } from 'react-router-dom';
import TMovie from '../../../types/movie';

const ReviewBreadcrumbs = ({id, name}: TMovie) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
      </li>
      <li className="breadcrumbs__item">
        <Link to={`/films/${id}/review`}className="breadcrumbs__link">Add review</Link>
      </li>
    </ul>
  </nav>
);

export default React.memo(ReviewBreadcrumbs);
