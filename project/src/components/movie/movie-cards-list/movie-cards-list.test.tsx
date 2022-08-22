import { render, screen } from '@testing-library/react';
import { ComponentText, MovieList } from '../../../const/enums';
import { makeFakeMoviesShort } from '../../../utils/mocks/mocks';
import { testUtils } from '../../../utils/mocks/test-utils';
import MovieCardsList from './movie-cards-list';

const {wrapper} = testUtils();

describe('Component: MovieCardsList', () => {
  it('should render showMoreButton if on mainPage', () => {
    render(
      <MovieCardsList movieList={MovieList.MainPage}/>,
      {wrapper}
    );

    expect(screen.getByText(ComponentText.ShowMore)).toBeInTheDocument();
  });

  it('should not render showMoreButton if not on mainPage', () => {
    render(
      <MovieCardsList movieList={MovieList.MoviePage}/>,
      {wrapper}
    );

    expect(screen.queryByText(ComponentText.ShowMore)).not.toBeInTheDocument();
  });

  it('should not render showMoreButton if there are no more movies to render', () => {
    const shortMovieListWrapper = testUtils({storeProps: {movies: makeFakeMoviesShort()}}).wrapper;

    render(
      <MovieCardsList movieList={MovieList.MainPage}/>,
      {wrapper: shortMovieListWrapper}
    );

    expect(screen.queryByText(ComponentText.ShowMore)).not.toBeInTheDocument();
  });
});
