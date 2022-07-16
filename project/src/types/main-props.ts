import TMovie from './movie';

type MainProps = {
  promo: TMovie;
  movies: readonly TMovie[];
  genres: readonly string[];
  myMovies: TMovie[];
  randomMovie: TMovie
}

export default MainProps;

