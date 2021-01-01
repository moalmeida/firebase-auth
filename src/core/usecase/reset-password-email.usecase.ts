import { AuthenticationDataSource } from "../datasource/authentication.datasource";

export interface ResetPasswordEmailInput {
  email: string;
}

export class ResetPasswordEmailUseCase {
  constructor(private authenticationDataSource: AuthenticationDataSource) {}

  public async execute(input: ResetPasswordEmailInput): Promise<void> {
    return this.authenticationDataSource.resetPasswordEmail(input.email);
  }
}
