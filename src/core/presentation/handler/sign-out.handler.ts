import { AuthenticationDataSource } from "../../datasource/authentication.datasource";
import { SignOutUseCase } from "../../usecase/sign-out.usecase";

export const SignOutHandler = async (
  input: SignOutInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<void> => {
  await new SignOutUseCase(authenticationDataSource).execute(input);
};

export interface SignOutInput {
  token: string;
}
