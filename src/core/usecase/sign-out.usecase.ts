import { AuthenticationDataSource } from "../datasource/authentication.datasource";

export interface SignOutInput {
  token: string;
}

export class SignOutUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: SignOutInput): Promise<void> {
    return this.authenticationDataSource.signOut(input.token);
  }
}
