import {renderHook, act} from '@testing-library/react';
import useVideoPlayer from './use-video-player';
import { testUtils } from '../../utils/mocks/test-utils';
import { playerInitialState } from '../../const/initial-states';

const MOCK_PROGRESS_CHANGE_VALUE = 10;

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
      handleProgressChange,
      handleFullScreenClick,
    } = result.current;

    expect(handleProgressUpdate).toBeInstanceOf(Function);
    expect(handlePlayButtonToggle).toBeInstanceOf(Function);
    expect(handleProgressChange).toBeInstanceOf(Function);
    expect(handleFullScreenClick).toBeInstanceOf(Function);
  });

  it('should correctly change progress when handleProgressChange is called', () => {
    const {result} = renderHook(
      () => useVideoPlayer()
    );

    act(() => result.current.handleProgressChange(MOCK_PROGRESS_CHANGE_VALUE));
    expect(result.current.playerState.progress).toBe(MOCK_PROGRESS_CHANGE_VALUE);
  });

  it('should correctly change playing state when handlePlayButtonToggle is called', () => {
    const {result} = renderHook(
      () => useVideoPlayer()
    );

    const oldPlayingState = result.current.playerState.isPlaying;

    act(() => result.current.handlePlayButtonToggle());
    expect(result.current.playerState.isPlaying).toBe(!oldPlayingState);
  });

  it('should correctly change fullscreen state when handleFullscreenClick is called', () => {
    const {result} = renderHook(
      () => useVideoPlayer()
    );

    const oldFullscreenState = result.current.playerState.isFullscreen;

    act(() => result.current.handleFullScreenClick());
    expect(result.current.playerState.isFullscreen).toBe(!oldFullscreenState);
  });
});
