export interface UserInput {
  email: string;
  displayName: string;
  avatar?: string;
}

export interface UserOutput extends UserInput {
  id: string;
}
