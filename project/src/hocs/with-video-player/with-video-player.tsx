
import {ComponentType, useCallback} from 'react';
import {useState} from 'react';
import VideoPlayer from '../../components/video-player/video-player';
import TMovie from '../../types/movie';
import { MovieCardProps } from '../../types/props';

type HOCProps = Pick<MovieCardProps, 'handleMouseEvent' | 'renderPlayer'| 'activePlayerId'>;

function withVideoPlayer<T>(Component: ComponentType<T>)
  : ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>;

  const WithVideoPlayer = (props: ComponentProps): JSX.Element => {
    const [activePlayerId, setActivePlayerId] = useState<number | null>(null);

    const handleMouseEvent = useCallback(
      (id: number | null) => setActivePlayerId(activePlayerId === id ? null : id)
      ,
      [activePlayerId]
    );

    return (
      <Component
        {...props as T}
        renderPlayer={(movie: TMovie, isPlaying: boolean, isMuted: boolean, isPreview: boolean) => (
          <VideoPlayer
            movie={movie}
            isPlaying={isPlaying}
            isMuted={isMuted}
            isPreview={isPreview}
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
