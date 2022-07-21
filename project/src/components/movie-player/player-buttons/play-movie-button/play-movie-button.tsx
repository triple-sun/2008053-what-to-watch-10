const PlayMovieButton = ({handlePlayButtonToggle, isPlaying}: {handlePlayButtonToggle: () => void, isPlaying?: boolean}) => (
  <button type="button" className="player__play" onClick={handlePlayButtonToggle}>
    {isPlaying
      ? (
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </>
      )
      : (
        <>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </>

      )}
  </button>
);

export default PlayMovieButton;


