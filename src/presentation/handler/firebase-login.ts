import { SignInUseCase } from "../../core/sign-in-use-case";
import { Context } from "../../context";
import { AuthInfo } from "../../core/data-sources/auth-data-source";

export const SigninHandler = async (
  input: LoginInput,
  context: Context
): Promise<AuthInfo> => {
  const loginInput: LoginInput = {
    email: input.email,
    password: input.password,
  };

  return new SignInUseCase(context.getAuthDataSource()).execute(loginInput);
};

export interface LoginInput {
  email: string;
  password: string;
}
