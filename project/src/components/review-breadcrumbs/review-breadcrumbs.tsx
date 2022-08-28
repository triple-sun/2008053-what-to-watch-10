import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, ComponentTestID, ComponentText, ElementTestID } from '../../const/enums';
import TMovie from '../../types/movie';

const ReviewBreadcrumbs = ({id, name}: TMovie) => (
  <nav className="breadcrumbs" data-testid={ComponentTestID.Breadcrumbs}>
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`${AppRoute.Movies}${id}`} className="breadcrumbs__link" data-testid={ElementTestID.MovieLink}>{name}</Link>
      </li>
      <li className="breadcrumbs__item">
        <a href="/" className="breadcrumbs__link">{ComponentText.AddReview}</a>
      </li>
    </ul>
  </nav>
);

export default React.memo(ReviewBreadcrumbs);
