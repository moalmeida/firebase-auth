import * as faker from "faker/locale/pt_BR";
import { SignOutInput } from "../../usecase/sign-out.usecase";
import { SignOutHandler } from "../handler/sign-out.handler";

describe("sign-out.handler", () => {
  let authenticationDataSource: any;

  it("shoud execute ", async () => {
    const input = {
      token: faker.random.uuid(),
    } as SignOutInput;

    authenticationDataSource = {
      signOut: jest.fn(),
    };

    await SignOutHandler(input, authenticationDataSource);

    expect(authenticationDataSource.signOut).toBe.call;
  });
});
