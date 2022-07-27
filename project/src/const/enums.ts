export enum AppRoute {
  AddReview = 'films/:id/review',
  Login = '/login/',
  Main = '/',
  Movies = '/films/',
  Movie = '/films/:id/',
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

export enum ApiAddress {
  Movies = 'https://10.react.pages.academy/wtw/films/'
}

export enum Action {
  ChangeGenre = 'movies/genre/changeGenre',
  ResetGenre = 'movies/genre/resetGenre',
  GetMovies = 'movies/getMovies',
  FilterMovies = '/movies/filterMovies',
  ResetMovies = '/movies/resetMovies',
  SetRenderedMovieCount = '/movies/setRendereMovieCount',
  ResetRenderedMovieCount = '/movies/resetRenderedMovieCount',
  SetActiveMovie = 'movies/setActiveMovie'
}

export enum Genre {
  AllGenres = 'All Genres',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Dramas',
  Horror = 'Horror',
  Family = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thrillers',
}


