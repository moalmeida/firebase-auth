export interface Application {
  route: any;
  post: any;
  get: any;
  delete: any;
  patch: any;
}

export interface Request {
  headers: any;
  body: any;
  query: any;
}

export interface Response {
  status: any;
  send: any;
}
