import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { random } from 'faker';
import { createMemoryHistory } from 'history';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import HistoryRouter from '../../components/history-route/history-route';
import { Genre, MovieList, Reducer } from '../../const/enums';
import { createAPI } from '../../services/api/api';
import { TUserInfo } from '../../types/data';
import TMovie from '../../types/movie';
import { testUtilsProps } from '../../types/props';
import TReview from '../../types/review';
import { State } from '../../types/state';
import { createMockStore, makeFakeAuthData, makeFakeElement, makeFakePlayerState, makeFakeSentences, mockMiddleware } from './mocks';

export const APITestUtils = () => {
  const api = createAPI();

  const mockAPI = new MockAdapter(api);

  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  return {
    mockAPI,
    mockStore
  };
};

export const testUtils = ({storeProps}: testUtilsProps = {}) => {
  const mockStore = createMockStore(storeProps);
  const mockHistory = createMemoryHistory();

  const mockUserReducer = mockStore.getState()[Reducer.User];
  const mockCurrentMovieReducer = mockStore.getState()[Reducer.CurrentMovie];
  const mockMainPageReducer = mockStore.getState()[Reducer.MainPage];

  const mockUserInfo = mockUserReducer?.userInfo as TUserInfo;
  const mockFavorites = mockUserReducer?.favorites?.data as TMovie[];

  const mockCurrentMovie = mockCurrentMovieReducer?.movie as TMovie;
  const mockSimilarMovies = mockCurrentMovieReducer?.similar?.data as TMovie[];
  const mockReviews = mockCurrentMovieReducer?.reviews?.data as TReview[];

  const mockMovies = mockMainPageReducer?.data?.movies as TMovie[];
  const mockPromo = mockMainPageReducer?.data?.promo as TMovie;
  const mockSelectedGenre = mockMainPageReducer?.selectedGenre as Genre;

  const mockPlayerState = makeFakePlayerState();

  const mockElementText = makeFakeSentences();
  const mockElement = makeFakeElement(mockElementText);

  const mockMovieList = random.objectElement(MovieList) as MovieList;

  const mockAuthData = makeFakeAuthData();

  const {mockAPI} = mockMiddleware();

  const mockVideoAPI = () => {
    window.HTMLVideoElement.prototype.play = () => Promise.resolve();
    window.HTMLVideoElement.prototype.pause = jest.fn();
  };

  const wrapper = ({children}: PropsWithChildren) => (
    <Provider store={mockStore}>
      <HistoryRouter history={mockHistory}>
        {children}
      </HistoryRouter>
    </Provider>
  );

  return {
    mockStore,
    mockHistory,
    mockUserInfo,
    mockFavorites,
    mockCurrentMovie,
    mockSimilarMovies,
    mockReviews,
    mockMovies,
    mockPromo,
    mockSelectedGenre,
    mockPlayerState,
    mockElement,
    mockElementText,
    mockMovieList,
    mockAuthData,
    mockAPI,
    mockVideoAPI,
    wrapper
  };
};
