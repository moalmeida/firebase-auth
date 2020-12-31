import { Context } from "../../context";
import { UnbanUserUseCase } from "../../core/unbanUser-use-case";

export const UnbanUserHandler = async (
  input: any,
  context: Context
): Promise<string> => {
  const unbanUserHandlerInput: UnbanUserHandlerInput = {
    id: input.id,
  };

  return new UnbanUserUseCase(context.getAuthDataSource()).execute(
    unbanUserHandlerInput
  );
};

export interface UnbanUserHandlerInput {
  id: string;
}
