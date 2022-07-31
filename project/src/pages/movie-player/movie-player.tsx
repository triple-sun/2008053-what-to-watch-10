import { useCallback, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ExitPlayerButton from '../../components/movie-player/player-buttons/exit-player-button/exit-player-button';
import FullScreenButton from '../../components/movie-player/player-buttons/full-screen-button/full-screen-button';
import PlayMovieButton from '../../components/movie-player/player-buttons/play-movie-button/play-movie-button';
import PlayerControls from '../../components/movie-player/player-controls/player-controls';
import PlayerProgress from '../../components/movie-player/player-progress/player-progress';
import VideoPlayer from '../../components/video-player/video-player';
import { AppRoute } from '../../const/enums';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getMovies } from '../../utils/selectors/selectors';
import { findMovieById } from '../../utils/utils';

const MoviePlayerPage = () => {
  const movies = useAppSelector(getMovies);
  const [isPlaying, setIsPlaying] = useState(false);
  const {id} = useParams();

  const currentMovie = findMovieById(movies, id);

  const handlePlayButtonToggle = useCallback(
    () => setIsPlaying(!isPlaying),
    [isPlaying]
  );

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="player">
      <VideoPlayer isPlaying={isPlaying} movie={currentMovie} isMuted={false} />
      <ExitPlayerButton />
      <PlayerControls>
        <PlayerControls isRow>
          <PlayerProgress {...currentMovie} isPlaying={isPlaying}/>
        </PlayerControls>

        <PlayerControls isRow>
          <PlayMovieButton handlePlayButtonToggle={handlePlayButtonToggle} isPlaying={isPlaying}/>
          <div className="player__name">{currentMovie.name}</div>

          <FullScreenButton />
        </PlayerControls>
      </PlayerControls>
    </div>
  );};

export default MoviePlayerPage;

