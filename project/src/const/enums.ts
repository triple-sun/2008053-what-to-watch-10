export enum AppRoute {
  AddReview = '/films/:id/review/',
  Login = '/login/',
  Main = '/',
  Movies = '/films/',
  Movie = '/films/:id',
  Player = '/player/',
  MoviePlayer = '/player/:id',
  MyList = '/mylist',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PosterSize {
  Big = 'big',
  Small = 'small'
}

export enum RatingName {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum RatingMinNumber {
  Normal = 3,
  Good = 5,
  VeryGood = 8,
  Awesome = 10,
}

export enum HeaderStyle {
  UserPage = 'user-page__head',
  MovieCard = 'film-card__head',
}

export enum MovieNavigation {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum FetchAction {
  FetchMovies = 'data/fetchMovies',
  FetchPromo = 'data/fetchPromo',
  FetchFavorites = 'data/fetchFavorites',
  FetchReviews = 'data/fetchReviews',
  FetchSimilarMovies = '/data/fetchSimilarMovies',
  FetchCurrentMovie = 'data/fetchCurrentMovie',
}

export enum LoadAction {
  LoadMovies = 'movies/loadMovies',
  LoadPromo = 'movies/loadPromo',
  LoadFavorites = 'movies/loadFavorites',
  LoadUserData = 'user/setUserData',
  LoadReviews = 'review/loadReviews',
  LoadCurrentMovie = 'movies/loadCurrentMovie',
  LoadSimilarMovies = 'movies/loadSimilarMovies',
}

export enum ChangeAction {
  AddReview = 'review/addReview',
  ChangeReview = 'review/changeReview',
  ToggleFavorite = 'movies/setFavorite',
  ResetFavorites = 'movies/resetFavorites',
  ChangeGenre = 'movies/genre/changeGenre',
}

export enum UserAction {
  SetAuth = 'user/setAuthorization',
  ReqAuth = 'user/requireAuthorization',
  CheckAuth = 'user/checkAuthorizattion',
  Login = 'user/login',
  Logout = 'user/logout',
}

export enum AppAction {
  SetDataLoaded = 'data/setDataLoaded',
  RedirectToRoute = 'app/redirectToRoute',
}

export enum Genre {
  AllGenres = 'AllGenres',
  Action = 'Action',
  Adventure = 'Adventure',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  Family = 'Family',
  Romance = 'Romance',
  SciFi = 'SciFi',
  Thriller = 'Thriller',
  Fantasy = 'Fantasy'
}

export enum GenreName {
  AllGenres = 'All Genres',
  Adventure = 'Adventure',
  Action = 'Action',
  Comedy = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Dramas',
  Horror = 'Horror',
  Family = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thrillers',
  Fantasy = 'Fantasy'
}

export enum APIRoute {
  Promo = '/promo',
  Movies = '/films',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Review = '/comments'
}

export enum Favorite {
  SetFavorite = 1,
  SetNotFavorite = 0
}

export enum ErrorMessage {
  ReviewError = 'Please choose rating and type in your review',
  SimilarError = 'Failed to load similar movies',
  CurrentError = 'Failed to load movie',
  PromoError = 'Failed to load promo',
  FavoritesError = 'Failed to load favorites',
  AddFavoriteError = 'Couldn`t add to favorites',
}
