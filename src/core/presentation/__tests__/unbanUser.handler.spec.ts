import * as faker from "faker/locale/pt_BR";
import { UnbanUserInput } from "../../usecase/unbanUser.usecase";
import { UnbanUserHandler } from "../handler/unbanUser.handler";

describe("unbanUser.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute ", async () => {
    const input = {
      id: faker.random.uuid(),
    } as UnbanUserInput;

    authenticationDataSource = {
      unbanUser: jest.fn(),
    };

    await UnbanUserHandler(input, authenticationDataSource);

    expect(authenticationDataSource.unbanUser).toBe.call;
  });
});
