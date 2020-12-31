import { Context } from "../../context";
import { SendResetPasswordEmailUseCase } from "../../core/send-reset-password-email-use-case";

export const SendResetPasswordEmailHandler = async (
  input: any,
  context: Context
): Promise<string> => {
  const sendResetPasswordEmailInput: SendResetPasswordEmailInput = {
    email: input.email,
  };

  return new SendResetPasswordEmailUseCase(context.getAuthDataSource()).execute(
    sendResetPasswordEmailInput.email
  );
};

export interface SendResetPasswordEmailInput {
  email: string;
}
