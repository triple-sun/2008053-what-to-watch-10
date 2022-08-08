import { MouseEventHandler } from 'react';

const FullScreenButton = ({handleFullScreenClick}: {handleFullScreenClick: MouseEventHandler}) => {
  const handleButtonClick = (e: React.MouseEvent) => handleFullScreenClick(e);

  return (
    <button type="button" className="player__full-screen">
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen" onClick={handleButtonClick}/>
      </svg>
      <span>Full screen</span>
    </button>
  );};

export default FullScreenButton;
