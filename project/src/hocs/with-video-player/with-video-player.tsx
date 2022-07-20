
import {ComponentType, useCallback} from 'react';
import {useState} from 'react';
import VideoPlayer from '../../components/video-player/video-player';
import TMovie from '../../types/movie';
import { MovieCardProps } from '../../types/props';

type HOCProps = Pick<MovieCardProps, 'handleMouseEvent'> & {
  renderPlayer: (movie: TMovie, id: number) => void
  activePlayerId: number
}

function withVideoPlayer<T>(Component: ComponentType<T>)
  : ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>;

  const WithVideoPlayer = (props: ComponentProps): JSX.Element => {
    const [activePlayerId, setActivePlayerId] = useState<number | null>(null);

    const handleMouseEvent = useCallback(
      (id: number | null) => setActivePlayerId(activePlayerId === id ? null : id)
      ,
      [activePlayerId],
    );

    return (
      <Component
        {...props as T}
        renderPlayer={(movie: TMovie, id: number, isMuted: boolean) => (
          <VideoPlayer
            movie={movie}
            isPlaying={activePlayerId === id}
            isMuted={isMuted}
          />
        )}
        handleMouseEvent={handleMouseEvent}
        activePlayerId={activePlayerId}
      />
    );
  };

  return WithVideoPlayer;
}

export default withVideoPlayer;
