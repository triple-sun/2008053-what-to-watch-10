import { render, screen } from '@testing-library/react';
import { testUtils } from '../../../utils/mocks/test-utils';
import MovieTabs from './movie-tabs';

const {mockCurrentMovie, mockReviews, wrapper} = testUtils();

describe('Component: MovieTabs', () => {
  it('should render correctly', () => {
    render(
      <MovieTabs movie={mockCurrentMovie} reviews={mockReviews} />,
      {wrapper}
    );

    expect(screen.getByText(mockCurrentMovie.description)).toBeInTheDocument();
  });
});
