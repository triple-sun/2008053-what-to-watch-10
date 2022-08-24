import { render, screen } from '@testing-library/react';
import { ElementTestID } from '../../../../const/enums';
import { testUtils } from '../../../../utils/mocks/test-utils';
import MoviePlayerProgress from './movie-player-progress';

const {wrapper, mockPlayerState} = testUtils();

describe('Component: MoviePlayerProgress', () => {
  it('should render correctly', () => {
    render(
      <MoviePlayerProgress {...mockPlayerState} />,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.Progress)).toBeInTheDocument();
  });
});
