import { AuthDataSource } from "./data-sources/auth-data-source";
import { SignOutHandlerInput } from "../presentation/handler/sign-out";

export class SignOutUseCase {
  constructor(private authDataSource: AuthDataSource) {}

  public async execute(input: SignOutHandlerInput): Promise<void> {
    return this.authDataSource.signOut(input.token);
  }
}
