
import {ComponentType, useCallback} from 'react';
import {useState} from 'react';
import VideoPlayer from '../../components/video-player/video-player';
import TMovie from '../../types/movie';
import { MovieCardProps } from '../../types/props';

type HOCProps = Pick<MovieCardProps, 'handleMouseEvent' | 'renderPlayer'>;

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
        renderPlayer={(movie: TMovie, playerId: number, isMuted: boolean, isPreview: boolean) => (
          <VideoPlayer
            movie={movie}
            isPlaying={activePlayerId === playerId}
            isMuted={isMuted}
            isPreview={isPreview}
          />
        )}
        handleMouseEvent={handleMouseEvent}
      />
    );
  };

  return WithVideoPlayer;
}

export default withVideoPlayer;
