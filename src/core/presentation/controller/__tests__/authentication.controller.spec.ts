import * as faker from "faker/locale/pt_BR";
import { Application, Request, Response } from "../../application.model";

import { AuthenticationController } from "../authentication.controller";

describe("authenticate.handler", () => {
  let authenticationDataSource: any;
  let app: Application;
  let request: any;
  let response: Response;

  it("shoud ", async () => {
    authenticationDataSource = {
      facebookAuthenticate: jest.fn(),
    };
    request = {
      headers: {
        token: "",
        provider: "",
      },
    } as Request;
    response = {
      send: () => {},
      status: () => 200,
    } as Response;

    const controller = new AuthenticationController(
      app,
      authenticationDataSource
    );

    controller.authenticate(request, response);
  });
});
