import {renderHook, act} from '@testing-library/react';
import useVideoPlayer from './use-video-player';
import { testUtils } from '../../utils/mocks/test-utils';
import { playerInitialState } from '../../const/initial-states';

const {wrapper, mockVideoAPI} = testUtils();

beforeAll(mockVideoAPI);

describe('Hook: useVideoPlayer', () => {
  const mockIsPreview = true;
  const mockIsPreviewPlaying = true;

  it('should return playerState', () => {
    const {result} = renderHook(
      () => useVideoPlayer(), {wrapper}
    );

    const {playerState} = result.current;

    expect(playerState).toStrictEqual(playerInitialState);
  });

  it('should return playerState for preview if isPreview', () => {
    const {result} = renderHook(
      () => useVideoPlayer(mockIsPreview, mockIsPreviewPlaying), {wrapper}
    );

    const {playerState} = result.current;

    expect(playerState.isPlaying).toBe(mockIsPreviewPlaying);
  });

  it('should return handlers', () => {
    const {result} = renderHook(
      () => useVideoPlayer(), {wrapper}
    );

    const {
      handlePlayButtonToggle,
      handleProgressUpdate,
    } = result.current;

    expect(handleProgressUpdate).toBeInstanceOf(Function);
    expect(handlePlayButtonToggle).toBeInstanceOf(Function);
  });

  it('should correctly change playing state when handlePlayButtonToggle is called', () => {
    const {result} = renderHook(
      () => useVideoPlayer()
    );

    const oldPlayingState = result.current.playerState.isPlaying;

    act(() => result.current.handlePlayButtonToggle());
    expect(result.current.playerState.isPlaying).toBe(!oldPlayingState);
  });
});
