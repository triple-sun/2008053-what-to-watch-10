import TMovie from '../../types/movie';

type ShowMoreButtonProps = {
  movies: readonly TMovie[];
  countPerStep: number
  renderedMoviesCount: number;
  handleShowMoreButtonClick: (count: number) => void};

const ShowMoreButton = ({movies, renderedMoviesCount, countPerStep, handleShowMoreButtonClick}: ShowMoreButtonProps) => {
  const moviesToLoadCount = Math.min((movies.length - renderedMoviesCount), countPerStep);

  const onShowMoreButtonClick = () => {
    handleShowMoreButtonClick(moviesToLoadCount);
  };
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
    </div>
  );};

export default ShowMoreButton;
