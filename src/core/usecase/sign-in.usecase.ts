import { SignInInput } from "../presentation/handler/sign-in.handler";
import { AuthenticationDataSource } from "../datasource/authentication.datasource";
import { AuthenticateOutput } from "../datasource/authentication.model";

export class SignInUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: SignInInput): Promise<AuthenticateOutput> {
    return this.authenticationDataSource.signInWithEmail(
      input.email,
      input.password
    );
  }
}
