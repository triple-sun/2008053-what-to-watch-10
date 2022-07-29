import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import TMovie from '../../types/movie';

type ShowMoreButtonProps = {
  movies: TMovie[];
  renderedMoviesCount: number;
  handleShowMoreButtonClick: (count: number) => void
};

const ShowMoreButton = ({movies, renderedMoviesCount, handleShowMoreButtonClick}: ShowMoreButtonProps) => {
  const moviesToLoadCount = Math.min((movies.length - renderedMoviesCount), MOVIE_CARD_MAIN_COUNT);

  const onShowMoreButtonClick = () => {
    handleShowMoreButtonClick(moviesToLoadCount);
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
    </div>
  );};

export default ShowMoreButton;
