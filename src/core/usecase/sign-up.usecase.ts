import { SignUpInput } from "../presentation/handler/sign-up.handler";
import { AuthenticationDataSource } from "../datasource/authentication.datasource";
import { AuthenticateOutput } from "../datasource/authentication.model";

export class SignUpUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: SignUpInput): Promise<AuthenticateOutput> {
    return this.authenticationDataSource.signUpWithEmail(
      input.email,
      input.password
    );
  }
}
