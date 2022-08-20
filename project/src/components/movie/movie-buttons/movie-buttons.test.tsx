import { render, screen } from '@testing-library/react';
import { ComponentTestID } from '../../../const/enums';
import { makeFakeMovie, testUtils } from '../../../utils/mocks';
import MovieButtons from './movie-buttons';

const mockMovie = makeFakeMovie();
const {wrapper} = testUtils();

describe('Component: MovieButtons', () => {
  it('should render correctly', () => {
    render(
      <MovieButtons movie={mockMovie}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.MovieButtons)).toBeInTheDocument();
  });
});
