import useAppSelector from '../../hooks/use-app-selector/use-app-selector';
import { getError } from '../../utils/selectors/selectors';
import './error-message.css';

const ErrorMessage = () => {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

};

export default ErrorMessage;
