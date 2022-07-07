import MainPage from '../../pages/main/main';
import MovieDataProps from '../../types/movie-card-props';

function App(moviePromoData: MovieDataProps): JSX.Element {
  return <MainPage {...moviePromoData}/>;
}

export default App;
