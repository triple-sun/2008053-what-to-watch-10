import { render, screen } from '@testing-library/react';
import { testUtils } from '../../../../utils/mocks/test-utils';
import { minutesToHoursAndMinutes } from '../../../../utils/utils';
import MoviePlayerTimeValue from './movie-player-time-value';

const {wrapper, mockPlayerState} = testUtils();

const playerState = mockPlayerState;

describe('Component: MoviePlayerTimeValue', () => {
  it('should render correctly', () => {
    const correctTimeValue = minutesToHoursAndMinutes(Number(playerState.progress.toFixed()));
    render(
      <MoviePlayerTimeValue {...playerState}/>,
      {wrapper}
    );

    expect(screen.getByText(correctTimeValue)).toBeInTheDocument();
  });
});
