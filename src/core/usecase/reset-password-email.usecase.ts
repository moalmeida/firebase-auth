import { AuthenticationDataSource } from "../datasource/authentication.datasource";

export class ResetPasswordEmailUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(email: string): Promise<void> {
    return this.authenticationDataSource.resetPasswordEmail(email);
  }
}
