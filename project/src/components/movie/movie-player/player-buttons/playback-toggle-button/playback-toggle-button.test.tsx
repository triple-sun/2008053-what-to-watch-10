import { render, screen } from '@testing-library/react';
import { ComponentTestID, ComponentText } from '../../../../../const/enums';
import PlaybackToggleButton from './playback-toggle-button';

describe('Component: PlaybackToggleButton', () => {
  it('should render correctly', () => {
    render(
      <PlaybackToggleButton handlePlayButtonToggle={() => jest.fn()}/>
    );

    expect(screen.getByTestId(ComponentTestID.PlaybackToggleButton)).toBeInTheDocument();
  });

  it('should have play text and icon if paused', () => {
    const isPlaying = false;

    render(
      <PlaybackToggleButton handlePlayButtonToggle={() => jest.fn()} isPlaying={isPlaying}/>
    );

    expect(screen.getByText(ComponentText.Play)).toBeInTheDocument();
  });

  it('should have pause text and icon if playing', () => {
    const isPlaying = true;

    render(
      <PlaybackToggleButton handlePlayButtonToggle={() => jest.fn()} isPlaying={isPlaying}/>
    );

    expect(screen.getByText(ComponentText.Pause)).toBeInTheDocument();
  });
});
