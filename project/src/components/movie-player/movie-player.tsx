import { useCallback, useState } from "react";
import { Navigate } from "react-router-dom";
import { AppRoute } from "../../const/enums";
import TMovie from "../../types/movie";
import VideoPlayer from "../video-player/video-player";

const MoviePlayer = (movie: TMovie) => {
  const [isPlaying, setIsPlaying] = useState(false);


  const handlePlayButtonToggle = useCallback(
    () => setIsPlaying(!isPlaying),
    [isPlaying]
  );

  return (
    <div className="player">
      {renderPlayer}
    <VideoPlayer isPlaying={isPlaying} movie={movie} isMuted={false} />
      <ExitPlayerButton />
      <PlayerControls>
        <PlayerControls isRow>
          <PlayerProgress {...movie} isPlaying={isPlaying}/>
        </PlayerControls>

        <PlayerControls isRow>
          <PlayMovieButton handlePlayButtonToggle={handlePlayButtonToggle} isPlaying={isPlaying}/>
          <div className="player__name">{movie.name}</div>

          <FullScreenButton />
        </PlayerControls>
      </PlayerControls>
  </div>
  )
}

export default MoviePlayer;
