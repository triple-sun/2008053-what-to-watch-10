import { render, screen } from '@testing-library/react';
import { ComponentTestID } from '../../../const/enums';
import { testUtils } from '../../../utils/mocks/test-utils';
import MovieButtons from './movie-buttons';

const {wrapper, mockCurrentMovie} = testUtils();

describe('Component: MovieButtons', () => {
  it('should render correctly', () => {
    render(
      <MovieButtons id={mockCurrentMovie.id}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ComponentTestID.MovieButtons)).toBeInTheDocument();
  });
});
