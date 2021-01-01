import * as faker from "faker/locale/pt_BR";
import {
  AuthenticateOutput,
  ThirdProvider,
} from "../../datasource/authentication.model";
import { SigninHandler, SignInInput } from "../handler/sign-in.handler";

describe("sign-in.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute ", async () => {
    const input = {
      email: "",
      password: "",
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
