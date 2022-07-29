import { clearErrorAction } from '../../store/api-actions';
import { setError } from '../../store/main-page-actions';
import { store } from '../../store/store';

const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};

export default processErrorHandle;
