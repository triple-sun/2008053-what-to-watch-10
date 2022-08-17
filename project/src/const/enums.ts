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

export enum MovieList {
  MainPage = 'MAIN',
  MoviePage = 'SIMILAR',
  MyListPage = 'MY_LIST',
}

export enum AuthStatus {
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

export enum AppAction {
  RedirectToRoute = 'app/redirectToRoute',
}

export enum FetchAction {
  FetchPromo = 'data/fetchMovies',
  FetchAllMovies = 'data/fetchPromo',
  FetchCurrentMovie = 'data/fetchCurrentMovie',
  FetchSimilarMovies = '/data/fetchSimilarMovies',
  FetchReviews = 'data/fetchCurrentReviews',
  FetchUserInfo = 'data/fetchUserInfo',
  FetchFavorites = 'data/fetchFavorites',
}

export enum LoadAction {
  LoadReviews = 'review/loadReviews',
  LoadCurrentMovie = 'movies/loadCurrentMovie',
  LoadSimilarMovies = 'movies/loadSimilarMovies',
}

export enum ChangeAction {
  AddReview = 'review/addReview',
  SetReview = 'review/changeReview',
  ToggleFavorite = 'movies/setFavorite',
  ChangeGenre = 'movies/genre/changeGenre',
}

export enum UserAction {
  SetAuth = 'user/setAuthorization',
  CheckAuth = 'user/checkAuthorizattion',
  Login = 'user/login',
  Logout = 'user/logout',
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

export enum ErrorMessage {
  ReviewError = 'Please choose rating and type in your review',
  SimilarError = 'Failed to load similar movies',
  CurrentError = 'Failed to load movie',
  PromoError = 'Failed to load promo',
  FavoritesError = 'Failed to load favorites',
  AddFavoriteError = 'Couldn`t add to favorites',
}

export enum PageTestID {
  AddReviewPage = 'test-add-review-page',
  LoginPage = 'test-login-page',
  MainPage = 'test-main-page',
  MoviePage = 'test-movie-page',
  MoviePlayerPage = 'test-movie-player-page',
  MyListPage = 'test-my-list-page',
  NotFoundPage = 'test-not-found-page'
}

export enum ComponentTestID {
  AddReviewHeader = 'test-add-review-header',
  AddReviewForm = 'test-add-review-form',
  PromoCard = 'test-promo-card',
  MovieCard = 'test-movie-card',
  MoviePageCard = 'test-movie-page-card',
  MovieButtons = 'test-movie-buttons',
  MovieTabReviews = 'test-movie-tab-reviews',
  PlaybackToggleButton = 'test-movie-play-button',
  GenreElement = 'test-genre-element',
  GenresList = 'test-genres-list',
  MainMovies = 'test-main-page-movies',
  SimilarMovies = 'test-similar-movies',
  FavoriteMovies = 'test-favorite-movies',
  SignInForm = 'test-sign-in-form',
  Logo = 'test-WTW'
}

export enum ElementTestID {
  Avatar = 'test-avatar',
  GenreElement = 'test-genre-element',
  Header = 'test-header',
  IconAdded = 'test-icon-added',
  IconPlay = 'test-icon-play',
  MovieTab = 'test-movie-tab',
  Poster = 'test-poster',
  Login = 'test-login',
  Passsword = 'test-password',
  Video = 'test-video',
  UserBlockAuth = 'test-user-block-auth',
  UserBlockNoAuth = 'test-user-block-no-auth'
}

export enum ComponentText {
  Add = '+',
  AddReview = 'Add review',
  NoReviews = 'There are no reviews yet.',
  Rating = 'Rating',
  Play = 'Play',
  Pause = 'Pause',
  Email = 'Email address',
  MyList = 'My list',
  FullScreen = 'Full screen',
  Password = 'Password',
  SignIn = 'Sign In',
  SignOut = 'Sign Out',
  Toggler = 'Toggler',
  MoreLikeThis = 'More like this',
  ShowMore = 'Show more',
  NotFound = '404 Not Found',
  ToMainPage = 'Return to Main Page',
  Catalog = 'Catalog',
  Loading = 'Loading',
  Post = 'Post',
  WTW = 'WTW',
  Footer = '© 2019 What to watch Ltd.',
  Exit = 'Exit'
}

export enum Reducer {
  MainPage = 'MAIN',
  CurrentMovie = 'CURRENT',
  User = 'USER'
}
