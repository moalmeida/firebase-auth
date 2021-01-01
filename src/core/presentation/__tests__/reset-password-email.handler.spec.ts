import * as faker from "faker/locale/pt_BR";
import { ResetPasswordEmailInput } from "../../usecase/reset-password-email.usecase";

import { ResetPasswordEmailHandler } from "../handler/reset-password-email.handler";

describe("reset-password-email.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute ", async () => {
    const input = {
      email: faker.internet.email(),
    } as ResetPasswordEmailInput;

    authenticationDataSource = {
      resetPasswordEmail: jest.fn(),
    };

    await ResetPasswordEmailHandler(input, authenticationDataSource);

    expect(authenticationDataSource.resetPasswordEmail).toBe.call;
  });
});
