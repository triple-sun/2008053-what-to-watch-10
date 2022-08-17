import { render, screen } from '@testing-library/react';
import { ComponentText } from '../../../../const/enums';
import { makeFakePlayerState } from '../../../../utils/mocks';
import PlayerProgress from './player-progress';

describe('Component: PlayerProgress', () => {
  it('should render correctly', () => {
    const mockState = makeFakePlayerState();

    render(
      <PlayerProgress state={mockState} handleProgressChange={() => jest.fn()}/>
    );

    expect(screen.getByText(ComponentText.Toggler)).toBeInTheDocument();
  });
});
