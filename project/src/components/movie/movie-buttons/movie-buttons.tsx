import React from 'react';
import { ComponentTestID } from '../../../const/enums';
import useFavorites from '../../../hooks/use-favorites/use-favorites';
import TMovie from '../../../types/movie';
import AddReviewButton from './add-review-button/add-review-button';
import MyListButton from './my-list-button/my-list-button';
import PlayButton from './play-movie-button/play-movie-button';

const MovieButtons = ({movie}: {movie: TMovie}) => {
  const {
    isFavorite,
    favoritesCount,
    onFavoriteButtonClick
  } = useFavorites(movie.id);

  return (
    <div className="film-card__buttons" data-testid={ComponentTestID.MovieButtons}>
      <PlayButton {...movie} />
      <MyListButton favoritesCount={favoritesCount} onFavoriteButtonClick={onFavoriteButtonClick} isFavorite={isFavorite}/>
      <AddReviewButton {...movie} />
    </div>
  );};

export default React.memo(MovieButtons);
