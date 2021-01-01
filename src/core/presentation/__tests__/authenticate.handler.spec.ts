import * as faker from "faker/locale/pt_BR";

import {
  AuthenticateOutput,
  ThirdProvider,
} from "../../datasource/authentication.model";
import {
  AuthenticateHandler,
  AuthenticateInput,
} from "../handler/authenticate.handler";

describe("authenticate.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute facebook authenticate", async () => {
    const input = {
      provider: ThirdProvider.Facebook,
    } as AuthenticateInput;
    const output = {
      id: faker.random.uuid(),
      thirdProvider: ThirdProvider.Facebook,
    } as AuthenticateOutput;

    authenticationDataSource = {
      facebookAuthenticate: jest.fn().mockReturnValue(output),
    };

    const result = await AuthenticateHandler(input, authenticationDataSource);

    expect(authenticationDataSource.facebookAuthenticate).toBe.call;
    expect(result).toEqual(output);
  });

  it("shoud execute google authenticate", async () => {
    const input = {
      provider: ThirdProvider.Google,
    } as AuthenticateInput;
    const output = {
      id: faker.random.uuid(),
      thirdProvider: ThirdProvider.Google,
    } as AuthenticateOutput;

    authenticationDataSource = {
      googleAuthenticate: jest.fn().mockReturnValue(output),
    };

    const result = await AuthenticateHandler(input, authenticationDataSource);

    expect(authenticationDataSource.googleAuthenticate).toBe.call;
    expect(result).toEqual(output);
  });

  it("shoud execute authenticate", async () => {
    const input = {
      provider: ThirdProvider.None,
      token: faker.random.uuid(),
    } as AuthenticateInput;
    const output = {
      id: faker.random.uuid(),
      thirdProvider: ThirdProvider.None,
    } as AuthenticateOutput;

    authenticationDataSource = {
      authenticate: jest.fn().mockReturnValue(output),
    };

    const result = await AuthenticateHandler(input, authenticationDataSource);

    expect(authenticationDataSource.authenticate).toBe.call;
    expect(result).toEqual(output);
  });
});
