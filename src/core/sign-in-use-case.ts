import { LoginInput } from "../presentation/handler/firebase-login";
import { AuthDataSource, AuthInfo } from "./data-sources/auth-data-source";

export class SignInUseCase {
  constructor(private authDataSource: AuthDataSource) {}

  public async execute(input: LoginInput): Promise<AuthInfo> {
    return this.authDataSource.signInWithEmail(input.email, input.password);
  }
}
