import { AuthenticationDataSource } from "../../datasource/authentication.datasource";
import {
  ChangePasswordInput,
  ChangePasswordUseCase,
} from "../../usecase/change-password.usecase";

export const ChangePasswordHandler = async (
  input: ChangePasswordInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<void> => {
  return new ChangePasswordUseCase(authenticationDataSource).execute(input);
};
