import React from 'react';
import { ComponentTestID, ComponentText } from '../../../../../const/enums';

const PlaybackToggleButton = ({handlePlayButtonToggle, isPlaying}: {handlePlayButtonToggle: () => void, isPlaying?: boolean}) => (
  <button type="button" className="player__play" onClick={handlePlayButtonToggle} data-testid={ComponentTestID.PlaybackToggleButton}>
    {isPlaying
      ? (
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>{ComponentText.Pause}</span>
        </>
      )
      : (
        <>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>{ComponentText.Play}</span>
        </>

      )}
  </button>
);

export default React.memo(PlaybackToggleButton);


