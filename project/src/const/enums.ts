export enum AppRoute {
  AddReview = 'films/:id/review',
  Login = '/login',
  Main = '/',
  Movies = '/films/',
  Movie = '/films/:id/',
  Player = '/player/',
  MoviePlayer = '/player/:id',
  MyList = '/mylist',
  NotFound = '/*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
