import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { PLAYER_TIME_STYLE } from '../../const/const';
import { AppRoute } from '../../const/enums';
import mockMovies from '../../mocks/movies';
import { minutesToHoursAndMinutes } from '../../utils/utils';

const MoviePlayerPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const currentMovie = mockMovies.find((mov) => mov.id === id);

  if (!currentMovie) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"/>

      <button type="button" className="player__exit" onClick={() => navigate(AppRoute.Main)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={PLAYER_TIME_STYLE}>Toggler</div>
          </div>
          <div className="player__time-value">{minutesToHoursAndMinutes(currentMovie.runTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{currentMovie.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );};

export default MoviePlayerPage;

