import * as faker from "faker/locale/pt_BR";
import {
  AuthenticateOutput,
  ThirdProvider,
} from "../../datasource/authentication.model";
import { BanUserInput } from "../../usecase/banUser.usecase";
import { BanUserHandler } from "../handler/banUser.handler";

describe("banUser.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute ", async () => {
    const input = {
      token: faker.random.uuid(),
      provider: ThirdProvider.None,
    } as BanUserInput;
    const output = {
      id: faker.random.uuid(),
      thirdProvider: ThirdProvider.None,
    } as AuthenticateOutput;

    authenticationDataSource = {
      authenticate: jest.fn().mockReturnValue(output),
      banUser: jest.fn(),
    };

    await BanUserHandler(input, authenticationDataSource);

    expect(authenticationDataSource.authenticate).toBe.call;
    expect(authenticationDataSource.banUser).toBe.call;
  });
});
