import State from '../../types/state';

export const getMovies = (state: State) => state.mainPageReducer.movies;

export const getPromo = (state: State) => state.mainPageReducer.promo;

export const getFavorites = (state: State) => state.mainPageReducer.favorites;

export const getCurrentMovie = (state: State) => state.moviePageReducer.currentMovie;

export const getSimilarMovies = (state: State) => state.moviePageReducer.similarMovies;

export const getSelectedGenre = (state: State) => state.mainPageReducer.selectedGenre;

export const getIsDataLoaded = (state: State) => state.appStatusReducer.isDataLoaded;

export const getAuthStatus = (state: State) => state.userReducer.authorizationStatus;

export const getUserData = (state: State) => state.userReducer.userData;

export const getMainState = (state: State) => state.mainPageReducer;

export const getUserState = (state: State) => state.userReducer;

export const getMovieState = (state: State) => state.moviePageReducer;

export const getReviews = (state: State) => state.reviewReducer.reviews;
