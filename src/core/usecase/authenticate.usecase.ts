import { AuthenticationDataSource } from "../datasource/authentication.datasource";
import {
  AuthenticateOutput,
  ThirdProvider,
} from "../datasource/authentication.model";

export interface AuthenticateInput {
  token: string;
  provider: string;
}

export class AuthenticateUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: AuthenticateInput): Promise<AuthenticateOutput> {
    switch (input.provider) {
      case ThirdProvider.Facebook:
        return this.authenticationDataSource.facebookAuthenticate(input.token);
      case ThirdProvider.Google:
        return this.authenticationDataSource.googleAuthenticate(input.token);
      case ThirdProvider.None:
      default:
        return this.authenticationDataSource.authenticate(input.token);
    }
  }
}
