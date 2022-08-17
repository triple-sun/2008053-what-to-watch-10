import {renderHook, act} from '@testing-library/react';
import useVideoPlayer from './use-video-player';
import { createRef } from 'react';

const FAKE_PROGRESS_CHANGE_VALUE = 10;

describe('Hook: useVideoPlayer', () => {
  it('should return handlers', () => {
    const fakeVideoRef = createRef<HTMLVideoElement>();

    const {result} = renderHook(() =>
      useVideoPlayer(fakeVideoRef),
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

  it('should be correctly change state', () => {
    const fakeVideoRef = createRef<HTMLVideoElement>();

    const {result} = renderHook(
      () => useVideoPlayer(fakeVideoRef),
    );

    act(() => result.current.handleProgressChange(FAKE_PROGRESS_CHANGE_VALUE));
    expect(result.current.playerState.progress).toBe(FAKE_PROGRESS_CHANGE_VALUE);
  });
});
