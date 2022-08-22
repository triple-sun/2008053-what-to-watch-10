import { render, screen } from '@testing-library/react';
import { testUtils } from '../../../../utils/mocks/test-utils';
import MovieTabOverview from './movie-tab-overview';

const {mockCurrentMovie, wrapper} = testUtils();

describe('Component: MovieTabOverview', () => {
  it('should render correctly', () => {
    render(
      <MovieTabOverview {...mockCurrentMovie} />,
      {wrapper}
    );

    expect(screen.getByText(mockCurrentMovie.rating)).toBeInTheDocument();
    expect(screen.getByText(mockCurrentMovie.description)).toBeInTheDocument();
  });
});
