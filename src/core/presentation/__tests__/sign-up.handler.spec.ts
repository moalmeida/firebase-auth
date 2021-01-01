import * as faker from "faker/locale/pt_BR";
import {
  AuthenticateOutput,
  ThirdProvider,
} from "../../datasource/authentication.model";
import { SignUpHandler, SignUpInput } from "../handler/sign-up.handler";

describe("sign-up.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute ", async () => {
    const input = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    } as SignUpInput;
    const output = {
      id: faker.random.uuid(),
      thirdProvider: ThirdProvider.None,
    } as AuthenticateOutput;

    authenticationDataSource = {
      signUpWithEmail: jest.fn().mockReturnValue(output),
    };

    const result = await SignUpHandler(input, authenticationDataSource);

    expect(authenticationDataSource.facebookAuthenticate).toBe.call;
    expect(result).toEqual(output);
  });
});
