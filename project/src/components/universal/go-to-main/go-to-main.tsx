import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../../const/enums';

const GoToMainPage = (): JSX.Element => <Navigate to={AppRoute.Main} />;

export default GoToMainPage;
