import { UNKNOWN_ACTION } from '../../const/const';
import { mainPageInitialState } from '../../const/initial-states';
import { testUtils } from '../../utils/mocks/test-utils';
import { mainPage } from './main-page';
import { setGenre } from './main-page-actions';
import { fetchMainPageDataAction } from './main-page-api-actions';

const {mockMovies, mockPromo, mockSelectedGenre} = testUtils();

const mockMainPageData = {
  movies: mockMovies,
  promo: mockPromo
};

describe('Reducer: mainPage', () => {
  const state = mainPageInitialState;

  it('without additional parameters should return initial state', () => {
    expect(mainPage.reducer(undefined, {type: UNKNOWN_ACTION}))
      .toEqual(mainPageInitialState);
  });

  describe('fetchAllMoviesAction test', () => {
    it('should load all movies and set isLoading to false if fetchAllMoviesAction was fulfilled', () => {
      expect(mainPage.reducer(state, { type: fetchMainPageDataAction.fulfilled.type, payload: mockMainPageData }))
        .toEqual({...state, data: mockMainPageData, isLoaded: true});
    });
  });

  describe('setGenre test', () => {
    it('should set selectedGenre if setGenre was fulfilled', () => {
      expect(mainPage.reducer(state, { type: setGenre.type, payload: mockSelectedGenre }))
        .toEqual({...state, selectedGenre: mockSelectedGenre});
    });
  });
});

