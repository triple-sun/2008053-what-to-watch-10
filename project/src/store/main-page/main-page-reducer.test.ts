import { UNKNOWN_ACTION } from '../../const/const';
import { mainPageInitialState } from '../../const/initial-states';
import { makeFakeGenre, makeFakeMovie, makeFakeMovies } from '../../utils/mocks/mocks';
import { setGenre } from './main-page-actions';
import { fetchAllMoviesAction, fetchPromoAction } from './main-page-api-actions';
import mainPageReducer from './main-page-reducer';

const movies = makeFakeMovies();
const promo = makeFakeMovie();
const selectedGenre = makeFakeGenre();

describe('Reducer: mainPage', () => {
  const state = mainPageInitialState;

  it('without additional parameters should return initial state', () => {
    expect(mainPageReducer(undefined, {type: UNKNOWN_ACTION}))
      .toEqual(mainPageInitialState);
  });

  describe('fetchAllMoviesAction test', () => {
    it('should load all movies and set isLoading to false if fetchAllMoviesAction was fulfilled', () => {
      expect(mainPageReducer(state, { type: fetchAllMoviesAction.fulfilled.type, payload: movies }))
        .toEqual({...state, data: {...state.data, movies: movies }, isLoaded: true});
    });
  });

  describe('fetchPromoAction test', () => {
    it('should load promo if fetchPromoAction was fulfilled', () => {
      expect(mainPageReducer(state, { type: fetchPromoAction.fulfilled.type, payload: promo }))
        .toEqual({...state, data: {...state.data, promo: promo }});
    });
  });

  describe('setGenre test', () => {
    it('should set selectedGenre if setGenre was fulfilled', () => {
      expect(mainPageReducer(state, { type: setGenre.type, payload: selectedGenre }))
        .toEqual({...state, selectedGenre: selectedGenre});
    });
  });
});

