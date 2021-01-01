import * as faker from "faker/locale/pt_BR";
import {
  AuthenticateOutput,
  ThirdProvider,
} from "../../datasource/authentication.model";
import { SignInInput } from "../../usecase/sign-in.usecase";
import { SigninHandler } from "../handler/sign-in.handler";

describe("sign-in.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute ", async () => {
    const input = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    } as SignInInput;
    const output = {
      id: faker.random.uuid(),
      thirdProvider: ThirdProvider.None,
    } as AuthenticateOutput;

    authenticationDataSource = {
      signInWithEmail: jest.fn().mockReturnValue(output),
    };

    const result = await SigninHandler(input, authenticationDataSource);

    expect(authenticationDataSource.signInWithEmail).toBe.call;
    expect(result).toEqual(output);
  });
});
