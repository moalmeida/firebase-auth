import { AuthDataSource } from "./data-sources/auth-data-source";
import { ChangePassowrdHandlerInput } from "../presentation/handler/change-password";

export class ChangePasswordUseCase {
  constructor(private authDataSource: AuthDataSource) {}

  public async execute(input: ChangePassowrdHandlerInput): Promise<string> {
    return this.authDataSource.changePassword(input.token, input.newPassword);
  }
}
