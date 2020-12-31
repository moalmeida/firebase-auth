import {
  AuthDataSource,
  AuthInfo,
  ThirdProvider,
} from "./data-sources/auth-data-source";
import { AuthenticateHandlerInput } from "../presentation/handler/authenticate";

export class AuthenticateUseCase {
  constructor(private authDataSource: AuthDataSource) {}

  public async execute(input: AuthenticateHandlerInput): Promise<AuthInfo> {
    switch (input.provider) {
      case ThirdProvider.Facebook:
        return this.authDataSource.facebookAuthenticate(input.token);
      case ThirdProvider.Google:
        return this.authDataSource.googleAuthenticate(input.token);
      case ThirdProvider.None:
      default:
        return this.authDataSource.authenticate(input.token);
    }
  }
}
