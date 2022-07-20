const PlayMovieButton = ({onPlayButtonClick}: {onPlayButtonClick: () => void}) => (
  <button type="button" className="player__play" onClick={onPlayButtonClick}>
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"/>
    </svg>
    <span>Play</span>
  </button>
);

export default PlayMovieButton;
