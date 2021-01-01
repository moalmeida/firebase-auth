import * as faker from "faker/locale/pt_BR";

import {
  ResetPasswordEmailHandler,
  ResetPasswordEmailInput,
} from "../handler/reset-password-email.handler";

describe("reset-password-email.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute ", async () => {
    const input = {
      email: "",
    } as ResetPasswordEmailInput;

    authenticationDataSource = {
      resetPasswordEmail: jest.fn(),
    };

    await ResetPasswordEmailHandler(input, authenticationDataSource);

    expect(authenticationDataSource.resetPasswordEmail).toBe.call;
  });
});
