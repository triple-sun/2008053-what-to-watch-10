import { render, screen } from '@testing-library/react';
import { random } from 'faker';
import { MOVIE_POSTER_SIZE_CLASS_PREFIX } from '../../../../const/const';
import { ElementTestID, PosterSize } from '../../../../const/enums';
import { makeFakeMovie } from '../../../../utils/mocks';
import MoviePoster from './movie-poster';

const mockMovie = makeFakeMovie();

describe('Component: MoviePoster', () => {
  it('should render correctly', () => {
    const POSTER_ALT_TEXT = `${mockMovie.name} poster`;
    render(
      <MoviePoster {...mockMovie}/>
    );

    expect(screen.getByTestId(ElementTestID.Poster)).toBeInTheDocument();
    expect(screen.getByAltText(POSTER_ALT_TEXT)).toBeInTheDocument();
    expect(screen.getByAltText(POSTER_ALT_TEXT)).toHaveAttribute('src', mockMovie.posterImage);
  });

  it('should have appropriate size class if specified', () => {
    const mockSize = random.objectElement(PosterSize) as PosterSize;

    render(
      <MoviePoster {...mockMovie} size={mockSize}/>
    );

    expect(screen.getByTestId(ElementTestID.Poster)).toHaveClass(`${MOVIE_POSTER_SIZE_CLASS_PREFIX}${mockSize}`);
  });
});
