import {
  AuthenticateInput,
  AuthenticateUseCase,
} from "../../usecase/authenticate.usecase";
import { AuthenticateOutput } from "../../datasource/authentication.model";
import { AuthenticationDataSource } from "../../datasource/authentication.datasource";

export const AuthenticateHandler = async (
  input: AuthenticateInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<AuthenticateOutput> => {
  return new AuthenticateUseCase(authenticationDataSource).execute(input);
};
