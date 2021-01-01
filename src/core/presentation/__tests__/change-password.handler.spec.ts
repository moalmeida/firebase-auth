import * as faker from "faker/locale/pt_BR";

import {
  ChangePasswordHandler,
  ChangePasswordInput,
} from "../handler/change-password.handler";

describe("change-password.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute ", async () => {
    const input = {
      token: faker.random.uuid(),
      newPassword: faker.random.alphaNumeric(8),
    } as ChangePasswordInput;

    authenticationDataSource = {
      changePassword: jest.fn(),
    };

    await ChangePasswordHandler(input, authenticationDataSource);

    expect(authenticationDataSource.changePassword).toBe.call;
  });
});
