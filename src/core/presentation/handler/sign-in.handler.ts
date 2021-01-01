import { SignInUseCase } from "../../usecase/sign-in.usecase";
import { AuthenticateOutput } from "../../datasource/authentication.model";
import { AuthenticationDataSource } from "../../datasource/authentication.datasource";

export const SigninHandler = async (
  input: SignInInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<AuthenticateOutput> => {
  return new SignInUseCase(authenticationDataSource).execute(input);
};

export interface SignInInput {
  email: string;
  password: string;
}
