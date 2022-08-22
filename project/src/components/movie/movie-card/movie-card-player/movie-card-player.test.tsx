import { render, screen } from '@testing-library/react';
import { ElementTestID } from '../../../../const/enums';
import { testUtils } from '../../../../utils/mocks/test-utils';
import MovieCardPlayer from './movie-card-player';

const {wrapper, mockCurrentMovie, mockVideoAPI} = testUtils();

describe('Component: MovieCardPlayer', () => {
  beforeAll(mockVideoAPI);

  it('should render correctly', () => {
    render(
      <MovieCardPlayer movie={mockCurrentMovie} isPlaying isPreview/>,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.Video)).toBeInTheDocument();
  });
});
