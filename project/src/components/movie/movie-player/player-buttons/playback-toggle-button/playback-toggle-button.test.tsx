import { render, screen } from '@testing-library/react';
import { ComponentTestID, ComponentText } from '../../../../../const/enums';
import PlaybackToggleButton from './playback-toggle-button';

const mockHandlePlayButtonToggle = jest.fn();

describe('Component: PlaybackToggleButton', () => {
  it('should render correctly', () => {
    render(
      <PlaybackToggleButton handlePlayButtonToggle={mockHandlePlayButtonToggle}/>
    );

    expect(screen.getByTestId(ComponentTestID.PlaybackToggleButton)).toBeInTheDocument();
  });

  it('should have play text and icon if paused', () => {
    render(
      <PlaybackToggleButton handlePlayButtonToggle={mockHandlePlayButtonToggle}/>
    );

    expect(screen.getByText(ComponentText.Play)).toBeInTheDocument();
  });

  it('should have pause text and icon if playing', () => {
    render(
      <PlaybackToggleButton handlePlayButtonToggle={mockHandlePlayButtonToggle} isPlaying/>
    );

    expect(screen.getByText(ComponentText.Pause)).toBeInTheDocument();
  });
});
