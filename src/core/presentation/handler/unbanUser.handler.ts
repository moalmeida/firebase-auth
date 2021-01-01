import { AuthenticationDataSource } from "../../datasource/authentication.datasource";
import {
  UnbanUserInput,
  UnbanUserUseCase,
} from "../../usecase/unbanUser.usecase";

export const UnbanUserHandler = async (
  input: UnbanUserInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<void> => {
  return new UnbanUserUseCase(authenticationDataSource).execute(input);
};
