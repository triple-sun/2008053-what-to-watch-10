export enum AppRoute {
  AddReview = '/films/:id/review',
  Login = '/login',
  Main = '/',
  Movie = '/films/:id',
  MoviePlayer = '/player/:id',
  Movies = '/films/',
  MyList = '/mylist',
  NonExistent = '/non-existent-route',
  NotFound = '*',
  Player = '/player/',
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
  NoReviews = '',
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum RatingMinNumber {
  NoReviews = 0,
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
  FetchMainPageData = 'data/fetchMainPageData',
  FetchCurrentMovieData = 'data/fetchCurrentMovieData',
  FetchUserInfo = 'data/fetchUserInfo',
  FetchFavorites = 'data/fetchFavorites',
}

export enum ChangeAction {
  AddReview = 'review/addReview',
  ToggleFavorite = 'movies/setFavorite',
  ChangeGenre = 'movies/genre/changeGenre',
  ResetCurrentMovie = 'movies/resetCurrentMovie'
}

export enum UserAction {
  SetAuth = 'user/setAuthorization',
  CheckAuth = 'user/checkAuthorization',
  Login = 'user/login',
  Logout = 'user/logout',
}

export enum Genre {
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

export enum APIRoute {
  Promo = '/promo',
  Movies = '/films',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Review = '/comments'
}

export enum SignInErrorMessage {
  Email = 'Please enter valid email',
  Password = 'Password must contain at least one letter and one number'
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
  Breadcrumbs = 'test-breadcrumbs',
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
  GenreLink = 'test-genre-link',
  Header = 'test-header',
  IconAdded = 'test-icon-added',
  IconPlay = 'test-icon-play',
  MovieTab = 'test-movie-tab',
  MovieLink = 'test-movie-link',
  MovieCardLink = 'test-movie-card-link',
  MyListButton = 'test-my-list-button',
  Progress = 'test-progress',
  Poster = 'test-poster',
  Login = 'test-login',
  Passsword = 'test-password',
  ReviewTextArea = 'test-review-text',
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
  Exit = 'Exit',
  ReviewPlaceholder = '50 to 400 symbols'
}

export enum NameSpace {
  MainPage = 'MAIN',
  CurrentMovie = 'CURRENT',
  User = 'USER'
}
