import { SignUpInput, SignUpUseCase } from "../../usecase/sign-up.usecase";
import { AuthenticateOutput } from "../../datasource/authentication.model";
import { AuthenticationDataSource } from "../../datasource/authentication.datasource";

export const SignUpHandler = async (
  input: SignUpInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<AuthenticateOutput> => {
  return new SignUpUseCase(authenticationDataSource).execute(input);
};
