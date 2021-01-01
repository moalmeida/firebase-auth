export interface Application {
  route: any;
  post: any;
  get: any;
}

export interface Request {
  headers: any;
  body: any;
  query: any;
}

export interface Response {
  status: Function;
  send: Function;
}
