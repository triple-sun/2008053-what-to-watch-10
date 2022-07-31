import { useCallback, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ExitPlayerButton from '../../components/movie-player/player-buttons/exit-player-button/exit-player-button';
import FullScreenButton from '../../components/movie-player/player-buttons/full-screen-button/full-screen-button';
import PlayMovieButton from '../../components/movie-player/player-buttons/play-movie-button/play-movie-button';
import PlayerControls from '../../components/movie-player/player-controls/player-controls';
import PlayerProgress from '../../components/movie-player/player-progress/player-progress';
import VideoPlayer from '../../components/video-player/video-player';
import { AppRoute } from '../../const/enums';
import useAppDispatch from '../../hooks/use-app-dispatch/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { fetchCurrentMovieAction, fetchSimilarMoviesAction } from '../../store/movie-page/movie-page-api-actions';
import { getCurrentMovie } from '../../utils/selectors/selectors';
import { checkMovie } from '../../utils/utils';

const MoviePlayerPage = () => {
  const {id} = useParams();
  const currentMovie = useAppSelector(getCurrentMovie);
  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && checkMovie(currentMovie, id)) {
      dispatch(fetchCurrentMovieAction(id));
      dispatch(fetchSimilarMoviesAction(id));
    }
  },[currentMovie, dispatch, id]
  );

  const handlePlayButtonToggle = useCallback(
    () => setIsPlaying(!isPlaying),
    [isPlaying]
  );

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if (currentMovie) {
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
    );
  }

  return <Navigate to={AppRoute.NotFound} />;
};

export default MoviePlayerPage;

