import { AuthenticationDataSource } from "../../datasource/authentication.datasource";
import { ChangePasswordUseCase } from "../../usecase/change-password.usecase";

export const ChangePasswordHandler = async (
  input: ChangePasswordInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<void> => {
  return new ChangePasswordUseCase(authenticationDataSource).execute(input);
};

export interface ChangePasswordInput {
  token: string;
  newPassword: string;
}
