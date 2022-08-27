import GenresList from '../../components/genres/genres-list/genres-list';
import MovieCardPromo from '../../components/movie/movie-card-promo/movie-card-promo';
import MovieCardsList from '../../components/movie/movie-cards-list/movie-cards-list';
import PageFooter from '../../components/common/page-footer/page-footer';
import { ComponentTestID, ComponentText, PageTestID } from '../../const/enums';
import useMovies from '../../hooks/use-movies/use-movies';
import ShowMoreButton from '../../components/show-more-button/show-more-button';

const MainPage = () => {
  const mainPageProps = useMovies();

  return (
    <>
      <MovieCardPromo {...mainPageProps}/>
      <div className="page-content" data-testid={PageTestID.MainPage}>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">{ComponentText.Catalog}</h2>
          <GenresList {...mainPageProps}/>
          <MovieCardsList {...mainPageProps} testId={ComponentTestID.MainMovies}>
            <ShowMoreButton {...mainPageProps} />
          </MovieCardsList>
        </section>
        <PageFooter />
      </div>
    </>
  );
};

export default MainPage;
