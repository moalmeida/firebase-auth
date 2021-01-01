import { AuthenticationDataSource } from "../../datasource/authentication.datasource";
import { ResetPasswordEmailUseCase } from "../../usecase/reset-password-email.usecase";

export const ResetPasswordEmailHandler = async (
  input: ResetPasswordEmailInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<void> => {
  return new ResetPasswordEmailUseCase(authenticationDataSource).execute(
    input.email
  );
};

export interface ResetPasswordEmailInput {
  email: string;
}
