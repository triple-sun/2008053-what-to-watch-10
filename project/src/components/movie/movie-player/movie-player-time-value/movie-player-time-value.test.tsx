import { render, screen } from '@testing-library/react';
import { testUtils } from '../../../../utils/mocks/test-utils';
import { humanizeTime } from '../../../../utils/utils';
import MoviePlayerTimeValue from './movie-player-time-value';

const {wrapper, mockPlayerState} = testUtils();

const playerState = mockPlayerState;

describe('Component: MoviePlayerTimeValue', () => {
  it('should render correctly', () => {
    const correctTimeValue = humanizeTime(Number(playerState.time.toFixed()));
    render(
      <MoviePlayerTimeValue {...playerState}/>,
      {wrapper}
    );

    expect(screen.getByText(correctTimeValue)).toBeInTheDocument();
  });
});
