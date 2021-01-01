import { AuthenticationDataSource } from "../../datasource/authentication.datasource";
import { ThirdProvider } from "../../datasource/authentication.model";
import { BanUserUseCase } from "../../usecase/banUser.usecase";

export const BanUserHandler = async (
  input: BanUserInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<void> => {
  return new BanUserUseCase(authenticationDataSource).execute(input);
};

export interface BanUserInput {
  token: string;
  provider: ThirdProvider;
}
