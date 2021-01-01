import { AuthenticationDataSource } from "../datasource/authentication.datasource";
import { ChangePasswordInput } from "../presentation/handler/change-password.handler";

export class ChangePasswordUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: ChangePasswordInput): Promise<void> {
    return this.authenticationDataSource.changePassword(
      input.token,
      input.newPassword
    );
  }
}
