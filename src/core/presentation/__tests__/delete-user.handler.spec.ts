import * as faker from "faker/locale/pt_BR";
import { DeleteUserInput } from "../../usecase/delete-user.usecase";

import { DeleteUserHandler } from "../handler/delete-user.handler";

describe("delete-user.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute ", async () => {
    const input = {
      id: faker.random.uuid(),
    } as DeleteUserInput;

    authenticationDataSource = {
      deleteUser: jest.fn(),
    };

    await DeleteUserHandler(input, authenticationDataSource);

    expect(authenticationDataSource.deleteUser).toBe.call;
  });
});
