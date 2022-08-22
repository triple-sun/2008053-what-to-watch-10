import React from 'react';
import { ComponentTestID } from '../../../const/enums';
import useUserData from '../../../hooks/use-user-data/use-user-data';
import TMovie from '../../../types/movie';
import AddReviewButton from './add-review-button/add-review-button';
import MyListButton from './my-list-button/my-list-button';
import PlayButton from './play-movie-button/play-movie-button';

const MovieButtons = ({movie}: {movie: TMovie}) => {
  const {
    isAuth,
    isFavorite,
    favoritesCount,
    handleFavoriteAction
  } = useUserData(movie.id);

  return (
    <div className="film-card__buttons" data-testid={ComponentTestID.MovieButtons}>
      <PlayButton {...movie} />
      <MyListButton isAuth={isAuth} isFavorite={isFavorite} favoritesCount={favoritesCount} handleFavoriteAction={handleFavoriteAction} />
      <AddReviewButton {...movie} />
    </div>
  );};

export default React.memo(MovieButtons);
