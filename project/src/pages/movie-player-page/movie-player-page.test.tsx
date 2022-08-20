import {render, screen} from '@testing-library/react';
import { testUtils, mockVideoAPI } from '../../utils/mocks';
import MoviePlayerPage from './movie-player-page';

const {currentMovie: mockMovie, wrapper} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockMovie.id,
  }),
}));

beforeAll(mockVideoAPI);

describe('Component: MoviePlayerPage', () => {
  it('should render correctly', async () => {
    render(
      <MoviePlayerPage />,
      {wrapper}
    );

    expect(screen.getByText(mockMovie.name)).toBeInTheDocument();
  });
});
