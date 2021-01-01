import { AuthenticationDataSource } from "../../datasource/authentication.datasource";
import { BanUserInput, BanUserUseCase } from "../../usecase/banUser.usecase";

export const BanUserHandler = async (
  input: BanUserInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<void> => {
  return new BanUserUseCase(authenticationDataSource).execute(input);
};
