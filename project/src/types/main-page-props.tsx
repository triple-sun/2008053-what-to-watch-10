import TMovie from './movie-data';

type TMainPageProps = {
  promo: TMovie;
  movies: TMovie[];
  genres: readonly string[];
}

export default TMainPageProps;

