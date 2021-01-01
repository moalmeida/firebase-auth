import { AuthenticationDataSource } from "../datasource/authentication.datasource";

export interface ChangePasswordInput {
  token: string;
  newPassword: string;
}

export class ChangePasswordUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: ChangePasswordInput): Promise<void> {
    return this.authenticationDataSource.changePassword(
      input.token,
      input.newPassword
    );
  }
}
