import GenresList from '../../components/genres/genres-list/genres-list';
import MovieCardPromo from '../../components/movie/movie-card-promo/movie-card-promo';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer-element';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { MOVIE_CARD_MAIN_COUNT } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, filterMovies } from '../../store/action';
import { Genre } from '../../const/enums';

const MainPage = () => {
  const {movies, promo, filteredMovies, selectedGenre, myMovies} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const handleGenreClick = (genre: Genre) => {
    dispatch(changeGenre(genre));
    dispatch(filterMovies({genre, movies}));
  };

  return (
    <>
      <MovieCardPromo promo={promo} myMovies={myMovies}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList selectedGenre={selectedGenre} handleGenreClick={handleGenreClick}/>
          <MovieCardsList movies={filteredMovies} count={MOVIE_CARD_MAIN_COUNT}/>
          <ShowMoreButton />
        </section>

        <PageFooter />
      </div>
    </>
  );};

export default MainPage;
