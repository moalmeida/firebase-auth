import { Context } from "../../context";
import { AuthenticateUseCase } from "../../core/authenticate-use-case";
import { AuthInfo } from "../../core/data-sources/auth-data-source";

export const AuthenticateHandler = async (
  input: any,
  context: Context
): Promise<AuthInfo> => {
  const authenticateHandlerInput: AuthenticateHandlerInput = {
    token: input["token"] as string,
    provider: (input["provider"] as string) || "",
  };

  return new AuthenticateUseCase(context.getAuthDataSource()).execute(
    authenticateHandlerInput
  );
};

export interface AuthenticateHandlerInput {
  token: string;
  provider: string;
}
