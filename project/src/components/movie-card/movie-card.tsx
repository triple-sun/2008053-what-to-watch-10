import { nanoid } from '@reduxjs/toolkit';
import Movie from '../../types/movie-data';
import { ListItemProps } from '../../types/props';

const MovieCardComponent = ({value: movie}: ListItemProps<Movie>): JSX.Element => (
  <article className="small-film-card catalog__films-card" key={`${movie.title}-${nanoid()}`}>
    <div className="small-film-card__image">
      <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={movie.title} width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href="film-page.html">{movie.title}</a>
    </h3>
  </article>
);

export default MovieCardComponent;
