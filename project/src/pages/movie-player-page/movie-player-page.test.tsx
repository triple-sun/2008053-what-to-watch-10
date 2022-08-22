import {render, screen} from '@testing-library/react';
import { testUtils } from '../../utils/mocks/test-utils';
import MoviePlayerPage from './movie-player-page';

const {mockCurrentMovie, mockVideoAPI, wrapper} = testUtils();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockCurrentMovie.id,
  }),
}));

beforeAll(mockVideoAPI);

describe('Component: MoviePlayerPage', () => {
  it('should render correctly', async () => {
    render(
      <MoviePlayerPage />,
      {wrapper}
    );

    expect(screen.getByText(mockCurrentMovie.name)).toBeInTheDocument();
  });
});
