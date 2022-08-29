import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import {store} from './store/store';
import { fetchMainPageDataAction } from './store/main-page/main-page-api-actions';
import { checkAuthAction } from './store/user/user-api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import { setGenre } from './store/main-page/main-page-actions';
import { ALL_GENRES } from './const/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthAction());
store.dispatch(fetchMainPageDataAction());

browserHistory.listen(() => {
  store.dispatch(setGenre(ALL_GENRES));
  window.scrollTo(0, 0);
});

root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <ToastContainer />
      <App />
    </HistoryRouter>
  </Provider>
);
