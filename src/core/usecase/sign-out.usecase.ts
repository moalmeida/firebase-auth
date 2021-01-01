import { AuthenticationDataSource } from "../datasource/authentication.datasource";
import { SignOutInput } from "../presentation/handler/sign-out.handler";

export class SignOutUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: SignOutInput): Promise<void> {
    return this.authenticationDataSource.signOut(input.token);
  }
}
