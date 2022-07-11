export enum AppRoute {
  AddReview = '/films/:id/review',
  Login = '/login',
  Main = '/',
  Movie = '/films/:id',
  MoviePlayer = '/player/:id',
  MyList = '/mylist',
  NotFound = '/*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
