import { fireEvent, render, screen } from '@testing-library/react';
import { ElementTestID } from '../../../../const/enums';
import { testUtils } from '../../../../utils/mocks/test-utils';
import MoviePlayerProgress from './movie-player-progress';

const {wrapper, mockPlayerState} = testUtils();

const playerState = mockPlayerState;

const mockHandleProgressChange = jest.fn();

describe('Component: MoviePlayerProgress', () => {
  it('should render correctly', () => {
    render(
      <MoviePlayerProgress {...playerState} handleProgressChange={mockHandleProgressChange}/>,
      {wrapper}
    );

    expect(screen.getByTestId(ElementTestID.Progress)).toBeInTheDocument();
  });

  it('should call handleProgressChange when user clicks on progress', () => {
    render(
      <MoviePlayerProgress {...playerState} handleProgressChange={mockHandleProgressChange}/>,
      {wrapper}
    );

    fireEvent.click(screen.getByTestId(ElementTestID.Progress));

    expect(mockHandleProgressChange).toBeCalled();
  });
});
