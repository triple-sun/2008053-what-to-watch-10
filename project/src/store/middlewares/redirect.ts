import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import { rootReducer } from '../store';
import { AppAction } from '../../const/enums';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === AppAction.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
