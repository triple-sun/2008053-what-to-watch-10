import React from 'react';
import { ComponentTestID } from '../../../const/enums';
import TMovie from '../../../types/movie';
import AddReviewButton from './add-review-button/add-review-button';
import MyListAddButton from './my-list-add-button/my-list-add-button';
import PlayButton from './play-movie-button/play-movie-button';

const MovieButtons = ({movie}: {movie: TMovie}) => (
  <div className="film-card__buttons" data-testid={ComponentTestID.MovieButtons}>
    <PlayButton {...movie} />
    <MyListAddButton id={movie.id} />
    <AddReviewButton {...movie} />
  </div>
);

export default React.memo(MovieButtons);
