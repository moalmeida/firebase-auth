import { AuthenticationDataSource } from "../../datasource/authentication.datasource";
import { SignOutInput, SignOutUseCase } from "../../usecase/sign-out.usecase";

export const SignOutHandler = async (
  input: SignOutInput,
  authenticationDataSource: AuthenticationDataSource
): Promise<void> => {
  await new SignOutUseCase(authenticationDataSource).execute(input);
};
