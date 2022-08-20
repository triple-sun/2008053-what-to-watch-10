import {render, screen} from '@testing-library/react';
import { ComponentTestID } from '../../const/enums';
import { testUtils } from '../../utils/mocks';
import MoviePage from './movie-page';

const {currentMovie: mockMovie, wrapper} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockMovie.id,
  }),
}));

describe('Component: MoviePage', () => {
  it('should render correctly', async () => {
    render(
      <MoviePage />,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.MoviePageCard)).toBeInTheDocument();
    expect(screen.getByTestId(ComponentTestID.SimilarMovies)).toBeInTheDocument();
  });
});

