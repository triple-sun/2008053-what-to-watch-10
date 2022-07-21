const Genre = ({genre}: {genre: string}) => (
  <li className="catalog__genres-item catalog__genres-item--active">
    <a href={`#${genre}`} className="catalog__genres-link">{genre}</a>
  </li>
);

export default Genre;
