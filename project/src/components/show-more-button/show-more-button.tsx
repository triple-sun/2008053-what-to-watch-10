import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';

type ShowMoreButtonProps = {
  totalMovieCount: number;
  renderedMoviesCount: number;
  handleShowMoreButtonClick: (count: number) => void
};

const ShowMoreButton = ({totalMovieCount, renderedMoviesCount, handleShowMoreButtonClick}: ShowMoreButtonProps) => {
  const moviesToLoadCount = Math.min((totalMovieCount - renderedMoviesCount), MOVIE_CARD_MAIN_COUNT);

  const onShowMoreButtonClick = () => {
    handleShowMoreButtonClick(moviesToLoadCount);
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
    </div>
  );};

export default ShowMoreButton;
