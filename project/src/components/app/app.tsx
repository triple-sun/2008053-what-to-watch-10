import MainPage from '../../pages/main/main';
import { MainPageProps } from '../../types/props';

const App = ({promo, movies, genres}: MainPageProps): JSX.Element => (
  <MainPage
    promo={promo}
    movies={movies}
    genres={genres}
  />);

export default App;
